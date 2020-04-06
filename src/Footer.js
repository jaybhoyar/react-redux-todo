import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<>
				<div className="footer">
					<div className="footer_strip">
						<div className="item_count">
							<span className="counter">0</span>
							items left
						</div>
						<div className="item_status">
							<button id="all_button" href="">
								All
							</button>
							<button id="active_button" href="">
								Active
							</button>
							<button id="completed_button" href="">
								Completed
							</button>
						</div>
						<div className="item_completed">Clear Completed</div>
					</div>
				</div>
			</>
		);
	}
}

export default Footer;
