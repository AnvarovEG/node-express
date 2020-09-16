const {Router, request} = require('express')
const { route } = require('./courses')
const Course = require('../models/course')
const router = Router()

router.get('/', (req, res) => {
    res.render('add', {
        title: "Добавить курс",
        isAdd:true
    })
})

router.post('/', async (req, res) => {
    const body = req.body
    const course = new Course(body.title, body.price, body.img)
    await course.save()
    res.redirect('/courses')
})

module.exports = router