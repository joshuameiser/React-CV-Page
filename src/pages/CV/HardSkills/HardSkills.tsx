import React, { Fragment } from "react";
import HardSkill from "./HardSkill/HardSkill";
import content from "../../../data/CV/Content.json";

const skillCollection: JSX.Element[] = content.hardSkills.map(
	(hardSkill: any, key: any) => {
		return (
			<HardSkill
				key={key}
				skill={hardSkill.name}
				percentage={hardSkill.percentage}
			/>
		);
	}
);

const hardSkills = () => {
	return (
		<div id="HardSkills">
			<h2>HARD SKILLS</h2>
			{skillCollection}
		</div>
	);
};

export default hardSkills;
