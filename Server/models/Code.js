const mongoose = require('mongoose');
const { Schema } = mongoose;

const CodeSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    filename: {
        type: String,
        required: true
    },
    code: {
        type: String,
        // required: true
    },
    language: {
        type: String,
        // required: true
    },
    version: {
        type: String,
        // require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('code', CodeSchema);