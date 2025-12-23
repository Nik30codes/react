import React, { useEffect, useState } from 'react'
{/** In react if we want to run a function side by side of a main ,we use useeffect so that we can use it later when its needed in the program.*/}
const App = () => {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

  // useEffect(function(){
  //   console.log("useEffect called")
  // },[]) //dependency array is empty so it will run only once when the component mounts


  useEffect(function(){
    console.log("useEffect called")
  },[num]) 
  return (
    <div>
      <h1>value of num is {num}</h1>
      <h1>value of num2 is {num2}</h1>
      <button onClick={() =>{ setNum(num + 1); setNum2(num2 + 1111)}}>Increment</button>
    </div>
  )
}

export default App