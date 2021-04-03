const secondsToClock = (time) => Math.floor(time / 60) + ":" + time % 60;

function Display(props) {
	return (
		<div class="display">
			{ secondsToClock(props.timeLeft) }
		</div>
	);
}

export default Display;
