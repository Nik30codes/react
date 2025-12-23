// Without useState Hook-this is basically how we send data to react and not directly manipulate the DOM


// import React from 'react'

// const App = () => {
//   let a = 20;

//   function changeA(){
//     console.log("Button clicked");
//     a++;
//     console.log("Value of a is", a);
//   }
//   return (
//     <div>
//       <h1>Value of a is {a}</h1>

//       <button onClick={changeA}>Click</button>
//     </div>
//   )
// }

// export default App



//With useState Hook- this is the correct way to manipulate data in react using state

// import React, { useState } from 'react'

// const App = () => {
//   const [a, seta] = useState(20);
//   const [b, setb] = useState('Nikunj');
//   const [users,setusertype] = useState(['Nikunj','Patel','John','Doe']);

//   function changeA(){
//     seta(a+1);
//     setb('Patel');
//     setusertype(['Nikunj','Patel','John','Doe','Smith']);
//   }
//   return (
//     <div>
//       <h1>Value of a is {a}</h1>

//       <h1>Value of b is {b}</h1>
//       <h1>Users are {users.join(', ')}</h1>

//       <button onClick={changeA}>Click</button>
//     </div>
//   )
// }
// 
// export default App





// With useState Hook- using object as state

// import React, { useState } from 'react'

// const App = () => {
//   const [user, setuser] = useState({name:'Nikunj', age:22, city:'Ahmedabad'});
  
//   function changeUser(){
//     setuser({...user, age:23, city:'Surat'});
//   }
//   return (
//     <div>
//       <h1>Name: {user.name}</h1>
//       <h1>Age: {user.age}</h1>
//       <h1>City: {user.city}</h1>
      
//       <button onClick={changeUser}>Click</button>
//     </div>
//   )
// }
// export default App

//incrase and decrease counter using useState Hook

import React, { useState } from 'react'

const App = () => {
  const [count, setcount] = useState(0);
  
  function increaseCount(){
    setcount(count + 1);
  }
  
  function decreaseCount(){
    setcount(count - 1);
  }

  function jumpBy25() {
    setcount(count + 25);
  
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={jumpBy25}>Jump by 25</button>
    </div>
  )
}

export default App;