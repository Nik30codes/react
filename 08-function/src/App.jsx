// import React from 'react'

// const App = () => {
//   function btnClicked(){
//     console.log("Button clicked")
//   }
//   function mouseEnter(){
//     console.log("Mouse entered")
//   }
//   return (
//     <div>
//       <h1>Hello, Nikunj</h1>
// //////////////way one
//       <button onMouseEnter={mouseEnter} onClick={btnClicked}>Change user</button>
// //////////way two
//       <button onClick={function(){
//         console.log("kya  bey")
//       }}>kya  bey</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {

//   return (
//     <div>
//       {/* <input onChange={function(){
//         console.log("Input changed")
//       }} */}
//       <input onChange={function(elem){
//         console.log(elem.target.value)
//       }}
//       type="text" placeholder='Enter name' />
//     </div>
//   )
// }

// export default App




// import React from 'react'

// const App = () => {
//   function inputchanging(val){
//     console.log(val);
//   }

//   return (
//     <div>
//       {/* <input onChange={function(){
//         console.log("Input changed")
//       }} */}
//       <input onChange={function(elem){
//         inputchanging(elem.target.value)
//       }}
//       type="text" placeholder='Enter name' />
//     </div>
//   )
// }

// export default App





// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <div onMouseMove={(e) => {
//         console.log(e.clientX, e.client Y);
//       }} className='box'></div>
//     </div>
//   )
// }

// export default App


import React from 'react'

const App = () => {
  const pagescrolling = () => {
    console.log('Page scrolled');
  }
  return (
    // <div onWheel={pagescrolling}>
    <div onScroll={(elem)=>{
      pagescrolling(elem)
    }}>
      <div className='page1'></div>
      <div className='page2'></div>
    <div className='page3'></div>
    </div>
  )
}

export default App