import React from "react";
import content from "../../../data/CV/Content.json";
import Experience from "./Experience/Experience";
import classes from "./Experience/Experience.module.css";

const experienceCollection: JSX.Element[] = content.experiences.map(
	(expType) => {
		return (
			<div id={expType.experienceType.replace(" ", "")} className="experiences">
				<h2 className={"uppercase" + " " + classes.mainHeading}>
					{expType.experienceType}
				</h2>
				{expType.experience.map((exp) => {
					return (
						<div className="experience">
							<Experience
								name={exp.name}
								description={exp.description}
								date={exp.date}
							/>
						</div>
					);
				})}
			</div>
		);
	}
);

const experiences = () => {
	return <div>{experienceCollection}</div>;
};

export default experiences;
