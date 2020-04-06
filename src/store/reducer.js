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
		default:
			return state;
	}
}
