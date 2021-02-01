import classes from "./Menubar.module.css";
import React, { useState } from "react";
import Menu from "../Menu";

const Menubar = (props: any): JSX.Element => {
	const [contentVisibility, changeVisibility] = useState(false);
	const menu = contentVisibility ? (
		<div
			className={classes.children}
			onClick={() => changeVisibility(!contentVisibility)}>
			<Menu clicked={() => changeVisibility(!changeVisibility)} />
		</div>
	) : null;

	const hamburgerClasses = contentVisibility
		? classes.hamburger + " " + classes.checked
		: classes.hamburger;

	return (
		<div className={classes.menubar}>
			<p className={classes.name}>Joshua Meiser</p>
			<span
				className={hamburgerClasses}
				onClick={() => changeVisibility(!contentVisibility)}>
				<span className={classes.line}></span>
				<span className={classes.line}></span>
				<span className={classes.line}></span>
			</span>
			{menu}
		</div>
	);
};

export default Menubar;
