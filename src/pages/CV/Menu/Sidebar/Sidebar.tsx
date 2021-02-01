import classes from "./Sidebar.module.css";
import React from "react";
import Menu from "../Menu";

const Sidebar = (props: any): JSX.Element => {
	return (
		<div className={classes.sidebar}>
			<Menu clicked={() => null} />
		</div>
	);
};

export default Sidebar;
