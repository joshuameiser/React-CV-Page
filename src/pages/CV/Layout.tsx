import React from "react";
import "./Layout.css";
import classes from "./Layout.module.css";
import Sidebar from "./Menu/Sidebar/Sidebar";
import Menubar from "./Menu/Menubar/Menubar";
import About from "./About/About";
import HardSkills from "./HardSkills/HardSkills";
import SoftSkills from "./SoftSkills/SoftSkills";
import Experiences from "./Experiences/Experiences";

//Color templates:
import MainScheme from "./ColorSchemes/Main.module.css";
import GreenInferno from "./ColorSchemes/GreenInferno.module.css";

const layout = () => {
	return (
		<div style={MainScheme}>
			{/* For < 800px */}
			<Menubar />

			{/* For > 800px */}
			<Sidebar />

			<div className={classes.content}>
				<About />
				<HardSkills />
				<SoftSkills />
				<Experiences />
			</div>
		</div>
	);
};

export default layout;
