const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const Code = require('../models/Code');
const fetchuser = require('../middleware/fetchuser');


//ROUTE:1 get all codes using : GET "/api/code/fetchallcodes" login required
router.get('/fetchallcode', fetchuser, async (req, res) => {
    try {
        const code = await Code.find({ user: req.user.id })
        res.json(code);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal server error" });
    }
})


//ROUTE:2 add a codes using : POST "/api/code/addcode" login required
router.post('/addcode', fetchuser, [
    body('filename', 'Enter a valid file name').isLength({ min: 1 }),
    // body('code', 'Enter a vaild value').notEmpty()
    // body('language', 'language cant be empty').notEmpty()
], async (req, res) => {
    try {
        // If terre are errors return bad request and errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // // check whether the file with this filename exists already
        // let codes = await Code.findOne({ filename: req.body.filename })
        // if (codes) {
        //     return res.status(400).json({ error: "file with this name exists already" });
        // }

        const { filename, code, language } = req.body
        const codes = new Code({
            filename,
            code,
            language,
            user: req.user.id
        })
        const savedCode = await codes.save();

        res.json(savedCode);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal server error" });
    }
})

//ROUTE:3 update an existing code using : PUT "/api/code/updatecode" login required
router.put('/updatecode/:id', fetchuser, [
    body('filename', 'Enter a valid file name').isLength({ min: 1 }),
    // body('language', 'Enter a language').exists(),
], async (req, res) => {
    try {
        // If terre are errors return bad request and errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // // check whether the file with this filename exists already
        // let codes = await Code.findOne({ filename: req.body.filename })
        // if (codes) {
        //     return res.status(400).json({ error: "file with this name exists already" });
        // }

        const { filename, code, language } = req.body

        // create a newCode object
        const newCode = {};
        if (filename) { newCode.filename = filename };
        if (code) { newCode.code = code };
        if (language) { newCode.language = language };

        // Find the code to be updated and update it
        let codes = await Code.findById(req.params.id);
        if (!codes) {
            return res.status(404).send("Not found")
        };
        if (codes.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed");
        }
        codes = await Code.findByIdAndUpdate(req.params.id, { $set: newCode }, { new: true });

        res.send(codes);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal server error" });
    }
})

//ROUTE:4 delete an existing code using : DELETE "/api/code/deletecode" login required
router.delete('/deletecode/:id', fetchuser, [
], async (req, res) => {
    try {
        const { filename, code, language } = req.body;

        // Find the code to be deleted and delete it
        let codes = await Code.findById(req.params.id);
        if (!codes) {
            return res.status(404).send("Not found")
        };

        // Allow deletion only if user owns this code
        if (codes.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed");
        }
        codes = await Code.findByIdAndDelete(req.params.id);

        res.json({ success: "code has been deleted", codes });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal server error" });
    }
})

module.exports = router;