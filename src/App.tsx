import React, { FC, useState, FormEvent } from "react"
import "./App.css"
import { UseState } from "hooks/useState"

type ItemsType = {
  id: number
  text: string
}


export const App: FC = () => {

  const [items, setItems] = useState<ItemsType[]>([])
  const [text, setText] = useState("")

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const item = {text, id: Date.now()}
    setItems([...items, item])
  }

  return (
    <div>
      {/*<UseState/>*/}
      <h3>Список дел</h3>
      <TodoList items={items}/>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={(event) => setText(event.currentTarget.value)}/>
        <button>Добавить № {items.length + 1}</button>
      </form>
    </div>
  )
}

type TodoListPropsType = {
  items: ItemsType[]
}

export const TodoList: FC<TodoListPropsType> = ({items}) => {


  return (
    <div>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.text}</li>
        })}
      </ul>
    </div>
  )
}
