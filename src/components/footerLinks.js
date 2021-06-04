import React from "react";
import { Link } from "react-router-dom";

function FooterLinks({ linkList }) {
	return (
		<div>
			<ul className="footer-links">
				{linkList.map((links) => {
					return (
						<li>
							<Link
								to="/"
								style={{
									textDecoration: "none",
									color: "rgba(156, 163, 175)",
									fontWeight: "600",
									fontSize: "15px",
								}}
							>
								{links}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default FooterLinks;
