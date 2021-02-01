import React, { useState, Fragment } from "react";
import menuItems from "../../../data/CV/Content.json";
import classes from "./Menu.module.css";
// import Link from "react-scroll";
import { Link } from "react-scroll";

const Menu = (props: { clicked: any }) => {
	const items: JSX.Element = (
		<ul className={classes.menu}>
			{menuItems.menu.map(
				(el): JSX.Element => {
					return (
						<li className={classes.menuItem + " " + "secondaryColor"}>
							<Link
								activeClass="active"
								to={el.replace(" ", "")}
								spy={true}
								smooth={true}
								// offset={-50}
								duration={500}
								onClick={props.clicked}>
								{el}
							</Link>
							{/* <a href={["#", el.replace(" ", "")].join("")}>{el}</a> */}
						</li>
					);
				}
			)}
		</ul>
	);

	return <Fragment>{items}</Fragment>;
};

export default Menu;
