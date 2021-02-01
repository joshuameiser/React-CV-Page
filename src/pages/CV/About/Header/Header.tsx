import React from "react";
import classes from "./Header.module.css";
import content from "../../../../data/CV/Content.json";

const header = () => {
	return (
		<div className={classes.container}>
			<h2 className={classes.heading + " " + classes.firstName}>
				{content.header.firstName}
			</h2>
			<h2 className={classes.heading + " " + classes.lastName}>
				{content.header.lastName}
			</h2>
		</div>
	);
};

export default header;
