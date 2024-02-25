const Footer = () => {
	const link = "http://localhost:3000/";
	const target = "_blank";

	return (
		<div className="container">
			Copyright © <small>{new Date().getFullYear()}</small>ContactSphere{" "}
			<a href={link} target={target}>
			ContactSphere
			</a>
		</div>
	);
};

export default Footer;
