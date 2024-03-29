import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let to = JSON.parse(localStorage.getItem("todos"))
      setTodos(to)
    }
  }, [])


  useEffect(() => {
    // This effect runs after every render, including the initial render
    saveToLS();
  }, [todos]); // This effect depends on the 'todos' state

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinish = (e) => {
    setshowFinished(!showFinished)
  }



  const handleEdit = async (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)

    let newTodos = todos.filter(item => {
      return item.id !== id
    })
     setTodos(newTodos)
  }

  const handleDelete =  (e, id) => {
    let con = confirm("Are you sure you want to delete this item");
    if (!con) {
      return;
    }

    let newTodos = todos.filter(item => {
      return item.id !== id;
    });

    setTodos(newTodos); // This line updates the state

    console.log("delete done");
  }


  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")

    console.log("add")
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })

    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)

  }

  return (
    <>
      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[75vh] md:w-1/2">
        <h1 className='font-bold text-center text-3xl'>iTask - Manage your todos at one place</h1>
        <div className="addtodo my-5 flex flex-col gap-4">
          <h2 className='text-xl font-bold'>Add a Todo</h2>
          <div className='flex'>

            <input onChange={handleChange} value={todo} type="text" className='w-full rounded-lg py-1 px-5' />
            <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-violet-800 disabled:bg-violet-500 hover:bg-violet-950 p-4 py-2 text-sm font-bold text-white rounded-md mx-6'>Add</button>
          </div>
        </div>
        <input className='my-4' id='show' onChange={toggleFinish} type="checkbox" checked={showFinished} />
        <label className='mx-2' htmlFor="show">Show Finished</label>
        <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
        <h2 className='text-xl font-bold'>Your Todos</h2>
        <div className="todos">

          {todos.length === 0 && <div className='m-5'>No Todos to display</div>}

          {todos.map(item => {

            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex  my-3 justify-between">
              <div className='flex gap-5 items-center'>

                <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-violet-800 hover:bg-violet-950 p-4 py-2 text-sm font-bold text-white rounded-md mx-2'>Edit</button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-violet-800 hover:bg-violet-950 p-4 py-2 text-sm font-bold text-white rounded-md mx-2'>Delete</button>
              </div>

            </div>

          })}
        </div>

      </div>
    </>
  )
}

export default App