import React from 'react'

const Card = (props) => {
    console.log(props.user,props.age);
  return (
    <div>
        <div className="Card">
            <h1>Hello {props.user}</h1>
            <p>
            This is a sample React application age is {props.age}.
        </p>
        <button>
            hey
        </button>
        </div>
    </div>
  )
}

export default Card