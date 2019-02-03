import React from 'react'

const Total = ({ parts }) => {
  const total = parts.reduce( (current, part) => {
    return current + part.exercises
  }, 0)

  return (
    <p>
      yhteensä {total} tehtävää
    </p>
  )
}

export default Total
