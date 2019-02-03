import React from 'react'
import Header from './Header'
import Total from './Total'
import Content from './Content'

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default Course
