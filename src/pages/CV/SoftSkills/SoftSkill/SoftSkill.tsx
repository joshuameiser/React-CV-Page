import React, { useState } from "react";
import classes from "./SoftSkill.module.css";

// const collapsibleHandler = (el: JSX.Element) => {
// 	el.addEventListener("click", () => {
// 		classList.toggle("active");
// 	});
// };

const SoftSkill = (props: {
	skill: string;
	skillDescription: string;
	index: number;
	visible: boolean;
	clicked: any;
}) => {
	const headerClassNames = !props.visible
		? ["secondaryColor", classes.heading]
		: ["secondaryColor", classes.heading, classes.clickedHeading];

	return (
		<div className="softSkill">
			<button
				type="button"
				className={classes.collapsible}
				onClick={() => {
					props.clicked(props.index);
				}}>
				<h3 className={headerClassNames.join(" ")}>{props.skill}</h3>
			</button>
			{props.visible ? (
				<p className={classes.content}>{props.skillDescription}</p>
			) : null}
			{/* <p className={classes.content}>{props.skillDescription}</p> */}
		</div>
	);
};

export default SoftSkill;
