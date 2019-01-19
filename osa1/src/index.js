import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.header}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} excercise={props.excercises[0]} />
      <Part part={props.parts[1]} excercise={props.excercises[1]} />
      <Part part={props.parts[2]} excercise={props.excercises[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      yhteensä {props.e1 + props.e2 + props.e3} tehtävää
    </p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.excercise}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <div>
      <Header header={course} />
      <Content parts={[part1, part2, part3]} excercises={[exercises1, exercises2, exercises3]} />
      <Total e1={exercises1} e2={exercises2} e3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
