import React from "react";
import { connect } from "react-redux";
import { changeTabAction, clearCompletedAction } from "./store/action";

const Footer = (props) => {
	const activeTodoCount = () => {
		return props.todoList.filter((todo) => !todo.isDone).length;
	};
	const inactiveTodoCount = () => {
		return props.todoList.filter((todo) => todo.isDone).length;
	};
	const handleActiveTab = (tab) => {
		props.dispatch(changeTabAction(tab));
	};

	const todoCompleted = () => {
		props.dispatch(clearCompletedAction());
	};
	return (
		<>
			<div
				className={props.todoList.length ? "footer display" : "footer"}
			>
				<div className="footer_strip">
					<div className="item_count">
						<span className="counter">{activeTodoCount()} </span>
						items left
					</div>
					<div className="item_status">
						<button
							className={
								props.activeTab === "all" ? "highlight" : ""
							}
							id="all_button"
							href=""
							onClick={() => handleActiveTab("all")}
						>
							All
						</button>
						<button
							className={
								props.activeTab === "active" ? "highlight" : ""
							}
							s
							id="active_button"
							href=""
							onClick={() => handleActiveTab("active")}
						>
							Active
						</button>
						<button
							className={
								props.activeTab === "completed"
									? "highlight"
									: ""
							}
							id="completed_button"
							href=""
							onClick={() => handleActiveTab("completed")}
						>
							Completed
						</button>
					</div>
					<div
						className={
							inactiveTodoCount() > 0
								? "item_completed_visible"
								: "item_completed"
						}
						onClick={() => todoCompleted()}
					>
						Clear Completed
					</div>
				</div>
			</div>
		</>
	);
};

function mapStateToProps(state) {
	return { todoList: state.todoList, activeTab: state.activeTab };
}
export default connect(mapStateToProps)(Footer);
