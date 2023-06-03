import React from 'react'
import trash from '../trash.svg'

const TodoList = (props) => {

  return (
    <div className='h-screen w-full bg-[#1A1A1A]'>
        <div className='w-[735px] mx-auto flex justify-between items-center pt-20'>
            <p className='text-[#4EA8DE] text-sm font-bold'>Created Tasks
            <span className='font-inter text-xs font bold px-[6px] ml-1 h-5 py-1 bg-[#333333] text-[#D9D9D9] rounded-full '>{props.todos.length}</span>
            </p>
            <p className='text-[#8284FA] text-sm font-bold'>Completed 
            <span className='font-inter text-xs font bold px-[6px] ml-1 h-5 py-1 bg-[#333333] text-[#D9D9D9] rounded-full'>{`${(props.todos.filter(todo => todo.isCompleted == true)).length} of ${props.todos.length}`}</span>
            </p>
        </div>
        <ul className='w-[735px] mx-auto mt-10'>
            {props.todos.map((todo) => (
                <li key={todo.id} className='flex w-full bg-[#262626] p-4 border border-[#333333] rounded-lg mb-2'>
                    <input type="checkbox" name="" id="" value={todo.isCompleted} onChange={() => props.completeTodo(todo.id)}/>
                    <p className={`font-inter ${todo.isCompleted ? 'line-through' : 'no-underline'} ml-2 text-sm text-[#F2F2F2] font-normal`}>{todo.todo}</p>
                    <button className='ml-auto' onClick={() => props.deleteTodo(todo.id)}>
                        <img src={trash} />
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList