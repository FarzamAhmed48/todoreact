import React, { useState } from 'react';

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const deleteHandler = (event) => {
    const reference = event.target.parentElement.parentElement;
    const index = Array.from(reference.parentNode.children).indexOf(reference);
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const addHandler = () => {
    setTask(task);
    const newTask = (
      <div key={task} className='w-[30vw] bg-[#9c9a9a] mt-2 border-b-2 border-zinc-900 px-3 flex justify-between items-center'>
        <p className='text-xl text-white'>{task}</p>
        <div className='flex gap-2 py-2'>
          <button className='bg-zinc-900 text-white h-[5vh] w-[5vw] rounded-md hover:bg-[#9c9a9a]'>Edit</button>
          <button onClick={deleteHandler} className='bg-zinc-900 text-white h-[5vh] w-[5vw] rounded-md hover:bg-[#9c9a9a]'>Delete</button>
        </div>
      </div>
    );
    setTask("");
    setTasks([...tasks, newTask]);
  };

  return (
    <div className='flex justify-center items-center p-20 flex-col w-[100vw]'>
      <h1 className='text-6xl font-semibold border-b-2 border-zinc-900 w-[30vw] text-center py-5'>TODO LIST</h1>
      <input type="text" name="" id="input" placeholder='Add Item' value={task} onChange={(e) => setTask(e.target.value)} className='border-2 border-zinc-900 mt-5 rounded-md px-5 h-[7vh] w-[15vw]' />
      <button onClick={addHandler} className='bg-zinc-900 text-white h-[5vh] w-[5vw] rounded-md hover:bg-[#9c9a9a] mt-5'>Add</button>
      {tasks}
    </div>
  );
};

export default App;