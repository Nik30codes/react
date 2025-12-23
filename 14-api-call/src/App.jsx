import React, { useState } from 'react'
import axios from 'axios'

const App = () => {


  // async  function getData() {  
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const data = await response.json()
  //   console.log('data:', data)
  // }


  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      
  //   console.log('response:', response)
  // }

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const data = await response.json()
  //   console.log('data:', data)
  // }
  
  const [Data, setData] = useState([])
  const getData = async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response.data)
  }



  // const getData = async() => {

  //   const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(data)
  // }


  return (

    <div>
      <button onClick={getData}>get data</button>
      <div>
        {Data.map(function(elem,idx){

          return <h3> hello {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App