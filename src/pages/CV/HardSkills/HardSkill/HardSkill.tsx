import React from "react";
import classes from "./HardSkill.module.css";

const style = {};

const hardSkill = (props: { skill: string; percentage: number }) => {
	return (
		<div className={classes.section}>
			<h3 className={classes.hardSkill}>{props.skill}</h3>
			<div className={classes.progressBar}>
				<div
					className={
						classes.progressBar +
						" " +
						classes.animation +
						" " +
						classes.innerProgressBar
					}
					role="progressbar"
					aria-valuenow={props.percentage}
					aria-valuemin={0}
					aria-valuemax={0}
					style={{
						width: props.percentage + "%",
						borderRadius: 0 + "px",
					}}>
					{/* {props.percentage} */}
				</div>
			</div>
		</div>
	);
};

export default hardSkill;
