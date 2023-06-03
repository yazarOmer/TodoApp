import TodoList from './components/TodoList'; 
import rocket from './rocket.svg'
import React,{ useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
function App() {

  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  const addTodo = () => {
    setTodoList(prev => [...prev, {id: uuidv4(), todo: todo, isCompleted: false}]);
    setTodo("");
  }

  const completeTodo = (id) => {
    setTodoList(prev => prev.map(todoItem => todoItem.id === id ? {...todoItem, isCompleted: !todoItem.isCompleted} : todoItem ))
  }

  const deleteTodo = (id) => {
    setTodoList(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <div className='w-full h-[200px] bg-[#0D0D0D] flex flex-col relative items-center'>
        <div className='flex items-center justify-center w-[735px] mx-auto gap-2 mt-16'>
            <img src={rocket} />
            <div>
                <span className='font-inter text-[40px] font-black text-[#4EA8DE]'>to</span>
                <span className='font-inter text-[40px] font-black text-[#5E60CE]'>do</span>
            </div>
        </div>

        <div className='absolute bottom-[-24px] w-[735px] mx-auto flex items-center h-[52px] gap-1'>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Add a new task' className='w-full text-[#808080] text-base bg-[#262626] border border-[#0D0D0D] h-[52px] p-4 rounded-lg outline-0'/>
            <button onClick={addTodo} className='px-4 bg-[#1E6F9F] rounded-lg h-[52px] w-[100px] flex items-center justify-center font-inter font-bold text-[#F2F2F2] text-[14px]'>Create</button>
        </div>
      </div>

      <TodoList todos={todoList} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
