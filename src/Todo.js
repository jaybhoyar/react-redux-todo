import React from "react";
import { connect } from "react-redux";
import { deleteTodoAction, toggleTodoAction } from "./store/action";

function Todo(props) {
	const handleDelete = (id) => {
		// dispatch
		props.dispatch(deleteTodoAction(id));
	};

	// const toggleTodo = (id) => {
	// 	props.dispatch(toggleTodoAction(id));
	// };
	return (
		<>
			<ul>
				{props.todoList.map((todo) => {
					return (
						<li key={todo.id} className="li_styles">
							<input
								type="checkbox"
								// onChange={() => toggleTodo(todo.id)}
								checked={todo.isDone}
							/>
							<p>{todo.text}</p>
							<span onClick={() => handleDelete(todo.id)}>X</span>
						</li>
					);
				})}
			</ul>
		</>
	);
}

function mapStateToProps({ todoList, activeTab }) {
	function filterTodo(todos, tab) {
		switch (tab) {
			case "all":
				return todos;
			case "completed":
				return todos.filter((t) => t.isDone);
			case "active":
				return todos.filter((t) => !t.isDone);
			default:
				break;
		}
	}
	return {
		todoList: filterTodo(todoList, activeTab),
		activeTab,
	};
}

export default connect(mapStateToProps)(Todo);
