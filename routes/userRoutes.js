const router = require('express').Router()

const {registerUser, loginUser, updateUser, deleteUser, getUsers, getMe} = require('../controllers/userController')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/', getUsers)
router.get('/me', getMe)

module.exports = router