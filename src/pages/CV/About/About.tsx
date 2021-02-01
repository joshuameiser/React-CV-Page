import classes from "./About.module.css";
import React, { Fragment } from "react";
import content from "../../../data/CV/Content.json";
import Header from "./Header/Header";

const text: JSX.Element = (
	<Fragment>
		{content.about.text.map((section) => {
			const textArray = section.split(" ");
			const firstWord = textArray.shift(); //extracts first word of the string
			const restText = textArray.join(" ");
			return (
				<div className={classes.textSection}>
					<p className={classes.firstWord + " " + classes.text}>
						{firstWord + " "}
					</p>
					<p className={classes.text}>
						{restText} <br />
					</p>
				</div>
			);
		})}
	</Fragment>
);

const about = () => {
	return (
		<div className={classes.section} id="About">
			<Header />
			<h3 className={classes.subHeading}>I am a</h3>
			{text}
		</div>
	);
};

export default about;
