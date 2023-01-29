import "./calender.scss"
const Calender = () => {
	return (
		<div id='calender'>
			<div className="cal-wrapper">
				<div className="cal-info">
					<p className="cal-subtitle">The year of the rabbit has come</p>
					<h3 className="cal-title">Hop on for <span className="gold-text">Chinese New Year</span> with Freepik</h3>
					<button className="cal-btn">Celebrate now</button>
				</div>
				<div className="cover-image">
					<div className="cover-wrapper">
						<img src="assets/images/calender/cover.webp" alt="caover-img" />
					</div>
				</div>
			</div>
		</div>
	)
}
export default Calender