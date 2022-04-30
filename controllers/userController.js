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
    }

    //if he want to update email
    if (email) {
        throw new Error('you cannot update the email')
    }

    //if he want to update password
    if (password) {
        user.password = password
        await user.save()
    }

    res.json({ message : `user was updated` , user : user})
})

const deleteUser = asyncHandler( async(req, res) => {

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
    
    await user.remove()

    res.json({ message : `user ${user.name} deleted` })
})

const getUsers = asyncHandler( async(req, res) => {
    const {name} = req.body

    //check that name is sent
    if (!name) {
        res.status(400)
        throw new Error('please add name of the user')
    }
    //creat regex to get the users that their name contains the sent name 
    const regex = new RegExp(name, 'i') // i for case insensitive
    const users = await User.find({name : regex})

    res.json(users)
})

const getMe = asyncHandler( async(req, res) => {
    res.json({ message : 'here you are' })
})

module.exports = {registerUser, loginUser, updateUser, deleteUser, getUsers, getMe}