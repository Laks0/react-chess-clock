import './App.scss';
import React from "react";
import Display from "./Display";

const startTime = 15;

class App extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			increment: 10,
			whiteTime: startTime * 60,
			blackTime: startTime * 60,
			turn: 0, // 0 = white, 1 = black
			running: false,
		};

		this.startTimer = this.startTimer.bind(this);
	}

	whitePass = () => {this.startTimer(1)};
	blackPass = () => {this.startTimer(0)};

	startTimer(turn) { 
		this.setState({turn: turn});
	}

	render() {
		return (
			<div className="App">
				<div id="clock-container">
					<button onClick={this.whitePass} className="passButton" disabled={this.state.turn != 0}/>

					<Display color="white" timeLeft={this.state.whiteTime}/>

					<p>{startTime + " | " + this.state.increment}</p>

					<Display color="black" timeLeft={this.state.blackTime}/>

					<button onClick={this.blackPass} className="passButton" disabled={this.state.turn != 1}/>
				</div>
			</div>
		);
	}
}

export default App;
