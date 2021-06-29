import React, { useState } from "react";
import SoftSkill from "./SoftSkill/SoftSkill";
import content from "../../../data/CV/Content.json";
import classes from "./SoftSkill/SoftSkill.module.css";

// const skills: JSX.Element[] = content.softSkills.map(
// 	(skill): JSX.Element => {
// 		return (
// 			<SoftSkill
// 				skill={skill.skillName}
// 				skillDescription={skill.skillDescription}
// 			/>
// 		);
// 	}
// );

const SoftSkills = () => {
	const [description, toggleDescription] = useState(
		content.softSkills.map((skill, index): any => {
			return [skill.skillName, skill.skillDescription, index, false];
		})
	);

	const expandHandler = (index: number) => {
		let tempList: any = [...description];
		let activeText = tempList.filter((item: any) => item[3] === true);
		if (tempList[index] === activeText[0]) {
			tempList[index][3] = false;
		} else {
			tempList.forEach((item: any) => (item[3] = false));
			tempList[index][3] = true;
		}
		// tempList.forEach((item: any) => (item[3] = false));
		// .forEach((item) => (item[3] = false));
		// tempList[index][3] === activeText ? null : (tempList[index][3] = true);
		toggleDescription(tempList);
	};

	const skills: JSX.Element[] = description.map(
		(skill, key: any): JSX.Element => {
			return (
				<SoftSkill
					key={key}
					skill={skill[0]}
					skillDescription={skill[1]}
					index={skill[2]}
					visible={skill[3]}
					clicked={expandHandler}
				/>
			);
		}
	);

	return (
		<div id="SoftSkills">
			<h2 className={classes.bigHeading}>SOFT SKILLS</h2>
			{skills}
		</div>
	);
};

export default SoftSkills;
