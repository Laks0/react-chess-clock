import './App.scss';
import React from "react";
import Display from "./Display";

const startTime = 15;

class App extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			increment: 10,
			times: [startTime * 60, startTime * 60],
			turn: 0, // 0 = white, 1 = black
			running: false,
		};

		this.startTimer = this.startTimer.bind(this);
		this.whitePass = this.whitePass.bind(this);
		this.blackPass = this.blackPass.bind(this);
		this.secondPassed = this.secondPassed.bind(this);
	}

	interval = null;

	whitePass() {this.startTimer(1)};
	blackPass() {this.startTimer(0)};

	startTimer(turn) { 
		this.setState((state) => {
			let newTimes = state.times;
			if ( state.running ) {
				newTimes[state.turn] += state.increment / 2;
			}

			return {
				turn: turn,
				running: true,
				times: newTimes,
			};
		});

		clearInterval(this.interval);
		this.interval = setInterval(this.secondPassed, 1000);
	}

	secondPassed() {
		this.setState( state => {
			let newTimes = [...state.times ];

			newTimes[state.turn] -= 1;

			return {times: newTimes};
		});
	}

	render() {
		return (
			<div className="App">
				<div id="clock-container">
					<button onClick={this.whitePass} className="passButton" disabled={this.state.turn != 0}/>

					<Display key="whiteDisplay" color="white" timeLeft={this.state.times[0]}/>

					<p>{startTime + " | " + this.state.increment}</p>

					<Display key="blackDsiplay" color="black" timeLeft={this.state.times[1]}/>

					<button onClick={this.blackPass} className="passButton" disabled={this.state.turn != 1}/>
				</div>
			</div>
		);
	}
}

export default App;
