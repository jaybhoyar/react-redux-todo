import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import Footer from "./Footer";

import { addTodoAction, toggleAllAction } from "./store/action";

function mapStateToProps(state) {
	return { todoList: state.todoList };
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todoInput: "",
		};
	}
	handleAddTodo = ({ target }) => {
		this.setState({ todoInput: target.value });
	};
	handleToggleAll = () => {
		this.props.dispatch(toggleAllAction());
	};
	addTodo = () => {
		this.props.dispatch(addTodoAction(this.state.todoInput));
		this.setState({ todoInput: "" });
	};
	render() {
		return (
			<>
				<div className="container">
					<h1>todos</h1>
					<div className="header">
						<div className="flex">
							<div
								className="toggle_img_container"
								onClick={this.handleToggleAll}
							>
								<img src="./angledown.png" alt="toggle_all" />
							</div>
							<input
								type="text"
								className="first_todo"
								placeholder="What needs to be done?"
								value={this.state.todoInput}
								onChange={this.handleAddTodo}
								onKeyDown={(e) => {
									if (
										e.keyCode === 13 &&
										this.state.todoInput.trim() !== ""
									)
										this.addTodo();
								}}
							/>
						</div>

						<Todo />
						<Footer />
					</div>
				</div>
			</>
		);
	}
}

export default connect(mapStateToProps)(App);
