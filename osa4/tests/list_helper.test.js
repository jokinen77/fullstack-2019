const listHelper = require('../utils/list_helper')
const testBlogs = require('./blogs_test_list')

describe('dummy', () => {
  test('dummy returns one', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
  })
})

describe('totalLikes', () => {
  test('likes equals with list with one blog', () => {
    const result = listHelper.totalLikes([testBlogs[0]])
    expect(result).toBe(7)
  })
  test('zero likes with empty blog list', () => {
    const result = listHelper.totalLikes([])
    expect(result).toBe(0)
  })
  test('likes equals with the whole list', () => {
    const result = listHelper.totalLikes(testBlogs)
    expect(result).toBe(36)
  })
})

describe('favoriteBlog', () => {
  test('returned blog is rigth with whole blog list', () => {
    const result = listHelper.favoriteBlog(testBlogs)
    expect(result._id).toBe("5a422b3a1b54a676234d17f9")
  })
  test('returned blog is rigth with one blog', () => {
    const result = listHelper.favoriteBlog([testBlogs[0]])
    expect(result.likes).toBe(7)
  })
})
