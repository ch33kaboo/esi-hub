const asyncHandler = require('express-async-handler')

const registerUser = asyncHandler( async(req, res) => {
    res.json({ message : 'this is registerUser' })
})

const loginUser = asyncHandler( async(req, res) => {
    res.json({ message : 'this is loginUser' })
})

const updateUser = asyncHandler( async(req, res) => {
    res.json({ message : 'this is updateUser' })
})

const deleteUser = asyncHandler( async(req, res) => {
    res.json({ message : 'this is deleteUser' })
})

const getUsers = asyncHandler( async(req, res) => {
    res.json({ message : 'this is getUsers' })
})

const getMe = asyncHandler( async(req, res) => {
    res.json({ message : 'this is getMe' })
})

module.exports = {registerUser, loginUser, updateUser, deleteUser, getUsers, getMe}