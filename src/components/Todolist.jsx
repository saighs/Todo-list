
import { useState } from 'react'



function App(){
  // 1st use state
  const [items,setItems]=useState("")
  // 2nd useState
  const[toDos,setTodos]=useState([])

  function handleSubmit(e){
    e.preventDefault()

    setTodos((currentTodos)=>{
      return[ ...currentTodos,
        {id:crypto.randomUUID(),title:items,completed:false}]
    })

    setItems('')
  }

  //toggle function
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  
  //delete function
  function deleteTodo(id){
    setTodos(currentTodos =>{
      return currentTodos.filter(toDo => toDo.id !==id) 
      //console.log(currentTodos)
    })
  }


  return(
    <>
     {/* creating form */}
    <form className="new-item-form" onSubmit={handleSubmit}>
      <label htmlFor="item">New Item</label>
      <input 
      type="text" 
      value={items}
      id='items'
      onChange={e => setItems(e.target.value)}
      />
      <button className='btn'>Add item</button>
    </form>


    {/* to do list items */}

    <ul className="list">
        {toDos.map(todo =>{
          return <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} 
              onChange={e=>toggleTodo(todo.id,e.target.checked)}/>
              {todo.title}
            </label>
            <button className='delete' onClick={()=>deleteTodo(todo.id)}>Delete</button>
          </li> 

        })}
          
    </ul>

    </>
  )
}

export default App