const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')
const testBlogs = require('./blogs_test_list')

let testBlog = new Blog({
  title: "test",
  author: "tester",
  url: "widewideweb",
  likes: 69
})

const api = supertest(app)

beforeEach(async () => {
  await Blog.remove({})

  for (let blog of testBlogs) {
    let blogObject = new Blog(blog)
    await blogObject.save()
  }
})

describe('blogs api', () => {
  describe("GET '/'", () => {
    test('blogs are returned as json', async () => {
      await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })

    test('there are six blogs', async () => {
      const response = await api.get('/api/blogs')
      expect(response.body.length).toBe(testBlogs.length)
    })

    test('the first blog is about React patterns', async () => {
      const response = await api.get('/api/blogs')
      expect(response.body[0].title).toBe(testBlogs[0].title)
    })
  })

  describe("POST '/'", () => {
    test('there is 7 blog after adding one', async () => {
      await api
        .post('/api/blogs')
        .send(testBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

      const response = await api.get('/api/blogs')
      expect(response.body.length).toBe((testBlogs.length + 1))
    })

    test('added plot is found', async () => {
      await api
        .post('/api/blogs')
        .send(testBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

      const response = await api.get('/api/blogs')
      const titles = response.body.map(blog => blog.title)
      expect(titles).toContain(testBlog.title)
    })
  })

  describe("DELETE '/:id'", () => {
    test('there is 5 blog after deleting one', async () => {
      await api
        .delete('/api/blogs/5a422b891b54a676234d17fa')
        .expect(204)

      const response = await api.get('/api/blogs')
      expect(response.body.length).toBe((testBlogs.length - 1))
    })
  })

  describe("GET '/:id'", () => {
    test('there is blog with id from testBlogs', async () => {
      const response = await api
        .get('/api/blogs/5a422b891b54a676234d17fa')
        .expect(200)
      
      const blog = response.body
      expect(blog.title).toBe("First class tests")
    })
  })
})

afterAll(() => {
  mongoose.connection.close()
})
