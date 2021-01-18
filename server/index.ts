import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { Post } from "../shared/types";

const categories = require('./categories.json')
const posts = require('./posts.json')
const comments = require('./comments.json')
const app = express()

app.use(cors())
app.use(bodyParser.json())

const port = 4000

app.get('/posts', (_, res) => {
    return res.json(posts)
})

app.get('/categories', (_, res) => {
    return res.json(categories)
})

app.get('/posts/:id', (req, res) => {
    const wantedId = String(req.params.id)
    const post = posts.find(({id}: Post) => String(id) === wantedId)
    return res.json(post)
})

app.get('/categories/:id', (req, res) => {
    const { id } = req.params
    const found = posts.filter(({category}: Post) => id === category)
    const categoryPosts = [...found, ...found, ...found]
    return res.json(categoryPosts)
})

app.get('/comments/:post', (req, res) => {
    const { post } = req.params
    const found = comments.filter( comment => String(comment.post) === post)
    return res.json(found)
})

app.post('/comments/:post', (req, res) => {
    const { post: postId } = req.params
    comments.push({
        id: comments.length + 1,
        author: req.body.name,
        content: req.body.comment,
        post: postId,
        time: 'less than 1 minute ago'
    })

    return res.sendStatus(201)
})

app.listen(port, () => {
    console.log(`DB is listening on http://localhost:${port}`)
})