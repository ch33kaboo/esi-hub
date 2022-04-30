const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const mongoose = require('mongoose')

const registerUser = asyncHandler( async(req, res) => {
    const {email, password, name} = req.body

    res.status(400) //set status to 400 in case schema validation failed
    const user = await User.create({name, email, password})

    res.status(201).json(user)  //in case not failed, set status to 201, created
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

    const {name, email, password} = req.body

    //check that the ID is valid
    if (! mongoose.Types.ObjectId.isValid(req.params)) {
        res.status(400)
        throw new Error('this id is not valid')
    }

    const user = await User.findById(req.params.id)

    //if user doesnt exist
    if (!user) {
        res.status(400)
        throw new Error('user doesnt exist')
    }

    //if he want to update name
    if (name) {
        user.name = name
        await user.save()
        res.json({ message : `user's name was updated` , user : user})
    }

    //if he want to update email
    if (email) {
        user.email = email
        await user.save()
        res.json({ message : `user's email was updated` , user : user})
    }

    //if he want to update password
    if (password) {
        user.password = password
        await user.save()
        res.json({ message : `user's password was updated` , user : user})
    }
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