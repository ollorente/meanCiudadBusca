const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')

const dbSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: [5, 'El usuario debe tener mínimo 5 caracteres.'],
        unique: true,
        lowercase: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'El password debe tener mínimo 8 caracteres.']
    },
    firstName: String,
    lastName: String,
    gravatar: String,
    countryId: {
        type: Schema.ObjectId,
        ref: 'Country'
    },
    _pages: [{
        type: Schema.ObjectId,
        ref: 'Page'
    }],
    _pagesCount: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    },
    isSuperuser: {
        type: Boolean,
        default: false
    },
    isStaff: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isLock: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    __v: false
})

const autoPopulateCreator = function(next) {
    this.populate({
        path: 'userId',
        select: '-_id username firstName lastName gravatar countryId',
        match: { 'isActive': true, 'isLock': false }
    })
    next()
}

dbSchema.pre('find', autoPopulateCreator)

dbSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    return hash
}

dbSchema.methods.matchPassword = async function(password) {
    return bcrypt.compareSync(password, this.password)
}

module.exports = model('User', dbSchema)