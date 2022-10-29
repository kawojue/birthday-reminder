import { useState } from 'react'
import List from './components/List'
import data from '../data'

function App() {
  const [people, setPeople] = useState(data)

  return (
    <div className="card">
      <h2>{people.length}</h2>
      <List data={people} />
    </div>
  )
}

export default App
