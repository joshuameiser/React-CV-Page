import React from "react";
import classes from "./Experience.module.css";

const experience = (props: {
	name: string;
	description: string;
	date: string;
}) => {
	return (
		<div>
			<h3 className={classes.heading}>{props.name}</h3>
			<p className={classes.description}>{props.description}</p>
			<p className={"dates" + " " + classes.date}>{props.date}</p>
		</div>
	);
};

export default experience;
