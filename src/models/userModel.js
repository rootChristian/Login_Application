/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        _id: Number,
        username: {
            type: String,
            required: [true, "Please provide unique username"],
            unique: [true, "Username exist"],
            minlength: 3,
            maxlength: 30
        },
        email: {
            type: String,
            required: [true, "Please provide a unique email"],
            unique: [true, "Email exist"],
            minlength: 5,
            maxlength: 50
        },
        password: {
            type: String,
            required: [true, "Please provide a password"],
            unique: false,
            minlength: 8,
            maxlength: 1024
        },
        firstname: {
            type: String,
            minlength: 3,
            maxlength: 30
        },
        lastname: {
            type: String,
            minlength: 3,
            maxlength: 30
        },
        image: { type: String },
        role: {
            type: String,
            minlength: 4,
            maxlength: 5,
            enum: ['ROOT', 'ADMIN', 'USER'],
            default: 'USER'
        },
        active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true
    },
    { _id: false }
);

userSchema.pre('save', async function (next) {
    const doc = this;
    if (doc.isNew) {
        const count = await mongoose.model('User').countDocuments();
        doc._id = count + 1;
    }
    next();
});

module.exports = mongoose.model('User', userSchema);