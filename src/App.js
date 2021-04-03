import './App.css';
import React from "react";
import Display from "./Display";

class App extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			increment: 10,
		};
	}

	render() {
		return (
			<div className="App">
				<div id="clock-container">
					<Display timeLeft={65}/>
					<Display timeLeft={120}/>
				</div>
			</div>
		);
	}
}

export default App;
