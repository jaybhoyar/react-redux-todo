let initialState = JSON.parse(localStorage.getItem("myTodos")) || {
	todoList: [],
	activeTab: "all",
};

export default function Reducer(state = initialState, action) {
	switch (action.type) {
		case "ADD_TODO": {
			let newTodo = {
				text: action.payload,
				isDone: false,
				id: Date.now(),
			};
			return { ...state, todoList: [...state.todoList, newTodo] };
		}
		case "DELETE_TODO": {
			return {
				...state,
				todoList: state.todoList.filter(
					(todo) => todo.id !== action.payload
				),
			};
		}
		case "TOGGLE_TODO": {
			return {
				...state,
				todoList: state.todoList.map((todo) => {
					if (todo.id === action.payload) {
						return { ...todo, isDone: !todo.isDone };
					}
					return todo;
				}),
			};
		}

		case "CHANGE_TAB": {
			return {
				...state,
				activeTab: action.payload,
			};
		}
		case "CLEAR_COMPLETED": {
			return {
				...state,
				todoList: state.todoList.filter((todo) => !todo.isDone),
			};
		}
		case "TOGGLE_ALL": {
			var newTodos = [];
			if (
				state.todoList.filter((todo) => todo.isDone).length ==
				state.todoList.length
			) {
				newTodos = state.todoList.map((todo) => {
					todo.isDone = false;
					return todo;
				});
			} else {
				newTodos = state.todoList.map((todo) => {
					todo.isDone = true;
					return todo;
				});
			}
			return {
				...state,
				todoList: newTodos,
			};
		}
		default:
			return state;
	}
}
