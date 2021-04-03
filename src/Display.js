function secondsToClock(time) {
	const minutes = Math.floor(time / 60);

	const seconds = time % 60;

	return (minutes < 10 ? "0": "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function Display(props) {
	const style = {
		background: props.color == "white" ? "#fff" : "#333",
		color: props.color == "white" ? "#000" : "#fff",
	};

	return (
		<div style={style} class="display">
			<b>{ secondsToClock(props.timeLeft) }</b>
		</div>
	);
}

export default Display;
