export let addTodoAction = (payload) => {
	return { type: "ADD_TODO", payload };
};
export let deleteTodoAction = (payload) => {
	return { type: "DELETE_TODO", payload };
};
export let toggleTodoAction = (payload) => {
	return { type: "TOGGLE_TODO", payload };
};
export let changeTabAction = (payload) => {
	return { type: "CHANGE_TAB", payload };
};
export let clearCompletedAction = () => {
	return { type: "CLEAR_COMPLETED" };
};
