import React, { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, settask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copytask = [...task];

    copytask.push({ title, details });

    settask(copytask);

    setDetails("");
    settitle("");

    // {/**delete in react 
    //   to delete we use slice */}
    //   const deleteNote =()=>{
    //     const copytask = [...task];
    //     copytask.slice(idx,1);
    //     settask(copytask);
    //   }


  };


  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-start"
      >
        {/* first input//title */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />

        {/* second input//details */}
        <textarea
          type="text"
          className="px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded"
          placeholder="Write Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className="bg-white font-medium  active:bg-gray-700 w-full outline-none text-black px-5 py-2 rounded cursor-pointer">
          Submit
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          {task.map((item, index) => (
            <div
              key={index}
              className="h-52 w-40 rounded-2xl bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8UoY1H5Gz_7dJ6XGuqq14-48n4YUGbcKgQ&s' text-black p-2"
            >
              <h2 className="font-bold">{item.title}</h2>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
