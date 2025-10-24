import React from 'react'
import Card from './components/Card.jsx';
import Navbar from './components/Navbar.jsx';

// export const App = () => {
//   return (
//     <div className='Card'>
//       <h1>Nikunj bhalla</h1>
//       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente tenetur doloremque tempora ipsa aperiam? Cum quod repellendus reprehenderit earum iusto quasi culpa corrupti, maiores quae.</p>
//       {card()}
//     </div>
//   )
// }
// export default App





const App = () => {
  const user = "nikunj bhalla";
  const age = 21;
  return (
    <div>
      <Navbar />
      <h1>hello guys I am {user} and I am {age} years old</h1>
      
      <Card />    
    </div>
  )
}

export default App
