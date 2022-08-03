import React, { useState } from "react";

const Home = () => {

	const [Color, set_Color] = useState("")

	return (
		<div className="d-flex justify-content-center">
			<div id="traffic_container">
				<div className = {`red_light ${"red_light" == Color ? "active" : ""}`} 
					onClick={() => set_Color("red_light")}></div>
				<div className = {`yellow_light ${"yellow_light" == Color ? "active" : ""}`} 
					onClick={() => set_Color("yellow_light")}></div>
				<div className = {`green_light ${"green_light" == Color ? "active" : ""}`} 
					onClick={() => set_Color("green_light")}></div>
			</div>
		</div>
	);
};

export default Home;
