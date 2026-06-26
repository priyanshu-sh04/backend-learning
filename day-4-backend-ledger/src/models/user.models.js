const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true // enable searching in DB
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true // enable searching in DB (agr baar use ni karte kyuki performance ki band baj jati hai )
        },

        avatar: {
            type: String, // cloudinary url
            required: true
        },

        coverImage: {
            type: String,
        },

        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],

        password: {
            type: String,
            required: [true, 'Password is required']
        },

        refreshToken: {
            type: String
        }

    }, {
    timestamps: true
}
)

// mongoose hook  for storing Encrypted password 
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()

    this.password = bcrypt.hash(this.password, 10)
    next()

})
// checking password 
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

// genrate Access token using jwt
userSchema.methods.genrateAccessToken = async function () {
    return jwt.sign(
        {
            _id: this._id, // _id mongoDb se miljayegi
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.genrateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id, // _id mongoDb se miljayegi

        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
)}

const userModel = mongoose.model("User", userSchema)

module.exports = userModel