const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const registerUser = asyncHandler( async(req, res) => {
    const {email, password, name} = req.body

    const user = await User.create({name, email, password})

    res.json(user)
})

const loginUser = asyncHandler( async(req, res) => {
    const {email, password} = req.body

    //checking that user sent them
    if (!email || !password) {
        res.status(400)
        throw new Error('please add email and password')
    }

    res.json({ message : 'user logged in' })
})

const updateUser = asyncHandler( async(req, res) => {
    res.json({ message : `user ${req.params.id} updated` })
})

const deleteUser = asyncHandler( async(req, res) => {
    res.json({ message : `user ${req.params.id} deleted` })
})

const getUsers = asyncHandler( async(req, res) => {
    const {name} = req.body

    //check that name is sent
    if (!name) {
        res.status(400)
        throw new Error('please add name of the user')
    }

    res.json({ message : `here are the users ${name}` })
})

const getMe = asyncHandler( async(req, res) => {
    res.json({ message : 'here you are' })
})

module.exports = {registerUser, loginUser, updateUser, deleteUser, getUsers, getMe}