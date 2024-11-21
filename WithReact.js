"use client"
import React, { useState } from 'react'

const page = () => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    setMainTask([...mainTask, { title, desc }])


    settitle("")
    setdesc("")
  }

  const deleteHandler = (i) =>{
      let copyTask =[...mainTask]
      copyTask.splice(i,1)
      setMainTask(copyTask)
  }

  let renderTask = <h2 className='flex justify-center'>No task Here</h2>


  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        
        <li key={i} className='flex items-center justify-between mb-5'>
       <div className='flex justify-between mb-5 w-2/3'> 
          <h3 className='text-xl font-bold '>{t.title}</h3>
          <h6 className='text-lg font-medium'>{t.desc}</h6>
          </div>
          <button onClick={()=>{
              deleteHandler(i)
          }} 
          
          className='bg-red-400 text-white rx-4 py-2 font-bold rounded'>Delete</button>
        </li>
      );
    })
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-4xl font-bold text-center '> ToDo List App</h1>
      <form onSubmit={submitHandler}>
        <input type="text"
          placeholder='Enter your task'
          className='text-2xl border-zinc-800 rounded-3xl border-4 m-5 px-4 py-2 '
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />
        <input type="text"
          placeholder='Discription'
          className='text-2xl border-zinc-800 rounded-3xl border-4 m-5 px-4 py-2 '
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />
        <button className='bg-black text-white active:scale-95 px-4 py-2 text-2xl font-bold rounded m-5'> Add Task</button>
      </form>


      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>

      </div>

    </>
  )
}

export default page
