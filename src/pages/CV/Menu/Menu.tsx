import { Fragment } from "react";
import menuItems from "../../../data/CV/Content.json";
import classes from "./Menu.module.css";
import { Link } from "react-scroll";
import profilePicture from "./profilePicture.webp";

const Menu = (props: { clicked: any }) => {
	const items: JSX.Element = (
		<ul className={classes.menu}>
			{menuItems.menu.map((el, key: any): JSX.Element => {
				return (
					<li className={classes.menuItem + " " + "secondaryColor"} key={key}>
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
			})}
		</ul>
	);

	return (
		<Fragment>
			<div className={classes.img}>
				<img
					loading="lazy"
					src={profilePicture}
					alt="Profile Picture"
					className={classes.profilePicture}></img>
			</div>
			{items}
		</Fragment>
	);
};

export default Menu;
