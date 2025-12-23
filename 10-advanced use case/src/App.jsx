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




import React, { useState } from 'react'

const App = () => {
  const [user, setuser] = useState(10);
  
  function changeUser(){
    setuser(prev => (prev+1));
    setuser(prev => (prev+1));
    setuser(prev => (prev+1));
  }
  return (
    <div>
      <h1>Number: {user}</h1>

      <button onClick={changeUser}>Click</button>
    </div>
  )
}
export default App