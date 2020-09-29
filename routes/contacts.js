const express = require('express')
const router = express.Router()

//@route    GET /api/contact
//@desc     Get's all users contacts
//@access   Private
router.get('/', (req, res) => {
  res.send('Get all user contacts')
})

//@route    POST /api/contact
//@desc     Add new contacts
//@access   Private
router.post('/', (req, res) => {
  res.send('Add contact ')
})
//@route    PUT /api/contact/:id
//@desc     Update contacts
//@access   Private
router.put('/:id', (req, res) => {
  res.send('Update Contact ')
})
//@route    DELETE /api/contact/:id
//@desc     DELETE contacts
//@access   Private
router.delete('/:id', (req, res) => {
  res.send('Delete Contact ')
})

module.exports = router
