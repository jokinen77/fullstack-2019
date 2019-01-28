import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ header }) => <h1>{header}</h1>
const Statistic = ({label, value}) => <p>{label} {value}</p>
const Statistic_avg = ({values}) => <>{(values[0] - values[2])/(values[0]+values[1]+values[2])}</>
const Statistic_sum = ({values}) => <>{values[0] + values[1] + values[2]}</>
const Statistic_pos = ({values}) => <>{(values[0] / (values[0] + values[1] + values[2])) * 100} %</>

const App = () => {
  // tallenna napit omaan tilaansa
  const header_give_feedback = 'Anna palautetta'
  const statistics_header = 'Statistiikka'
  const good_label = 'Hyvä'
  const neutral_label = 'Neutraali'
  const bad_label = 'Huono'
  const sum_label = 'Yhteensä'
  const avg_label = 'Keskiarvo'
  const pos_label = 'Positiivisia'

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header header={header_give_feedback} />
      <button onClick={() => setGood(good + 1)}>{good_label}</button>
      <button onClick={() => setNeutral(neutral + 1)}>{neutral_label}</button>
      <button onClick={() => setBad(bad + 1)}>{bad_label}</button>
      <Header header={statistics_header} />
      <Statistic label={good_label} value={good} />
      <Statistic label={neutral_label} value={neutral} />
      <Statistic label={bad_label} value={bad} />
      <Statistic label={sum_label} value={<Statistic_sum values={[good, neutral, bad]} />} />
      <Statistic label={avg_label} value={<Statistic_avg values={[good, neutral, bad]} />} />
      <Statistic label={pos_label} value={<Statistic_pos values={[good, neutral, bad]} />} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
