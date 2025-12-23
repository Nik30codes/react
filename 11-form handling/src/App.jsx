// import React from 'react'
// import { useState } from 'react';

// const App = () => {
//   // function handleSubmit(event) {
//   //   event.preventDefault();// Prevents the default form submission behavior

//     // Accessing form values using event.target
//     //two way binding is not used here
//     // const form = event.target;
//     // const name = form[0].value;
//     // const age = form[1].value;
//     // const city = form[2].value;
//     // console.log({ name, age, city });
    
//     const [formData, setFormData] = useState({
//       name: '',
//       age: '',
//       city: ''
//     });

//   function handleSubmit(event) {
//     event.preventDefault();// Prevents the default form submission behavior
//     console.log('Submitted Data:', formData);
//     // Accessing form values from state
//     const { name, age, city } = formData;

//     setFormData({ name, age, city });
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder='Enter your name' onChange={(e)=>{
//           setFormData({ ...formData, name: e.target.value });
//         }} />
//         <input type="number" placeholder='Enter your age' onChange={(e)=>{
//           setFormData({ ...formData, age: e.target.value });
//         }} />
//         <input type="text" placeholder='Enter your city' onChange={(e)=>{
//           setFormData({ ...formData, city: e.target.value });
//         }} />
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { useState } from 'react'

const App = () => {
 const [first, setfirst] = useState('')

 const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted", first);
    setfirst('');
  }

  return (

    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}  >
        <input type="text" placeholder='Enter your name' value={first} onChange={(e) =>
          setfirst(e.target.value)} />
        <button>submit</button>

      </form>
    </div>
  )
}

export default App