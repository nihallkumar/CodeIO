const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRETE = "helloworld";

//ROUTE:1 create user using : POST "api/auth/createuser" no login required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 character').isLength({ min: 5 }),

], async (req, res) => {
    try {
        // If terre are errors return bad request and errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // check wether  user with this email exists already
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "email with this email exists already" });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        // Create new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRETE);

        res.json({authtoken});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal server error" });
    }
})

//ROUTE:2 Authenticating user using : POST "api/auth/login" no login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password can not be blank').notEmpty()
], async (req, res) => {
    // If terre are errors return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "login with correct credentials" });
        }

        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            return res.status(400).json({ error: "login with correct credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRETE);

        res.json({authtoken});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal server error" });
    }
})


//ROUTE:3 get logged user detail using : POST "/getuser" login required
router.post('/getuser',fetchuser ,async (req,res)=>{
    try {
        let userId = req.user.id;
        const user = await User.findById(userId).select('-password'); 
        res.send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal server error" });
    }
})


module.exports = router;