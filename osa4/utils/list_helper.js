const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => blogs.reduce((sum, blog) => sum + blog.likes, 0)

const favoriteBlog = (blogs) => blogs.reduce(
  (favorite, challenger) => favorite.likes > challenger.likes ? favorite : challenger, {})

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
