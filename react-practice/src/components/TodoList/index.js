import React, { useState } from 'react';
import './style.css'

function TodoItem({ onClose, completed, text }) {
	return (
		<li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
			{text}
			<span className="close" onClick={onClose}>close</span>
		</li>
	)
}

let todoId = 0;

function TodoList() {
	const [value, setValue] = useState('')
	const [todoItems, setTodoItems] = useState([{id: 0, text: 'first task'}]);

	const addNewItem = () => {
		setTodoItems([...todoItems, { id: ++todoId, text: value }]);			
	} 

	const onChange = (e) => {
		e.preventDefault();
		setValue(e.target.value);
	}

	const onCloseHandler = (id) => {
		const newList = todoItems.filter(i => i.id !== id);
		setTodoItems(newList);
	}

	const list = todoItems.map(i => {
		return (
			<TodoItem
				key={i.id} 
				text={i.text}
				completed={false}
				onClose={() => onCloseHandler(i.id)}
			/>
		)
	})

	return (
		<div className="todo-container">
			<div className="header">
				<input type="text" id="myInput" placeholder="Title..." value={value} onChange={onChange}/>
				<button onClick={addNewItem} className="addBtn">Add</button>
			</div>
			<div className="todo-list">
				{list}
			</div>
		</div>
	)
}

export default TodoList;