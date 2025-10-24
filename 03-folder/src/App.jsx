import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
        <Card user= 'nikunj' age={25} />
        <Card user= 'john' age={30} />
        <Card user= 'jane' age={28} />
    </div>
  )
}

export default App