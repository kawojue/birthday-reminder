import { useState } from 'react'
import List from './components/List'
import data from './data'

function App() {
  const [people, setPeople] = useState(data)

  return (
    <div className="card">
      <h2 className="text-2xl font-medium capitalize text-pry-clr-1">
        {`${people.length} birthday${people.length > 1 ? 's' : ''} today`}
      </h2>
      <List data={people} />
      <button onClick={() => setPeople([])}
        className="w-full py-1 px-2 bg-pry-clr-0 text-white text-xl tracking-wider rounded-md">
        Clear All
      </button>
    </div>
  )
}

export default App
