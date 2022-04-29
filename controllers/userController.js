const asyncHandler = require('express-async-handler')

const registerUser = asyncHandler( async(req, res) => {
    const {email, password, name} = req.body

    //checking that user sent them
    if (!email || !password  || !name) {
        res.status(400)
        throw new Error('please add your name, email and password')
    }

    res.json({ message : `the user ${name} is registered` })
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