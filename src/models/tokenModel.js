/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/
const mongoose = require('mongoose');

const userTokenSchema = new mongoose.Schema(
    {
        _id: Number,
        userId: {
            type: Number,
            required: [true, "Please provide unique userId"],
        },
        token: {
            type: String,
            required: [true, "Please provide a unique token"],
        },
        createdAt: {
            type: Date,
            default: Date.now,
            expires: 12 * 3600 ///30 * 86400, // 30 days
        }
    },
    { _id: false }
);

userTokenSchema.pre('save', async function (next) {
    const doc = this;
    if (doc.isNew) {
        const count = await mongoose.model('UserToken').countDocuments();
        doc._id = count + 1;
    }
    next();
});

module.exports = mongoose.model('UserToken', userTokenSchema);
