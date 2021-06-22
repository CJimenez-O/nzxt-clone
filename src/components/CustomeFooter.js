import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FooterLinks from "./footerLinks";
import { useProductsContext } from "../context/sidebarContext";
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaYoutube,
	FaTwitch,
	FaReddit,
	FaSteam,
	FaDiscord,
} from "react-icons/fa";

function Footer({ full, mid }) {
	const {
		openCompanyLinks,
		isCompanyLinkOpen,
		closeCompanyLinks,
		openAboutLinks,
		isAboutOpen,
		closeAboutLinks,
		openCommunityLinks,
		isCommunityOpen,
		closeCommunityLinks,
		openSoftwareLinks,
		isSoftwareOpen,
		closeSoftwareLinks,
		openAccountLinks,
		isAccountOpen,
		closeAccountLinks,
		openStoreLinks,
		isStoreOpen,
		closeStoreLinks,
	} = useProductsContext();
	return (
		<Footer_section>
			<div className="full">
				<div className="upper">
					<div className="social-icons">
						<Link className="social-link">
							<FaFacebook />
						</Link>
						<Link className="social-link">
							<FaTwitter />
						</Link>
						<Link className="social-link">
							<FaInstagram />
						</Link>
						<Link className="social-link">
							<FaYoutube />
						</Link>
						<Link className="social-link">
							<FaTwitch />
						</Link>
						<Link className="social-link">
							<FaReddit />
						</Link>
						<Link className="social-link">
							<FaSteam />
						</Link>
						<Link className="social-link">
							<FaDiscord />
						</Link>
					</div>
					<div className="region">
						<div className="lang">
							<h5 className="pref-title">LANGUAGE</h5>
							<p className="pref-selected">English</p>
						</div>
						<div className="reg">
							<h5 className="pref-title">REGION</h5>
							<p className="pref-selected">North America</p>
						</div>
					</div>
				</div>
				<div className="mid-footer">
					<div className="flex-1">
						<div className="contact-col">
							<h3>CONTACT</h3>
							<ul>
								<li>Company</li>
								<li>Customer Support</li>
								<li>Submit a Request</li>
								<li>Support Center</li>
								<li>AM4 Bracket</li>
							</ul>
						</div>
						<div className="contact-col middle-col">
							<h3>ABOUT NZXT</h3>
							<ul>
								<li>Founder Q & A</li>
								<li>Newsroom & Blog</li>
								<li>Careers</li>
								<li>Customer Reviews</li>
							</ul>
						</div>
						<div className="contact-col">
							<h3>COMMUNITY</h3>
							<ul>
								<li>Our Discord</li>
								<li>Newsroom & Blog</li>
							</ul>
						</div>
					</div>
					<div className="flex-2">
						<div className="contact-col">
							<h3>SOFTWARE</h3>
							<ul>
								<li>CAM</li>
								<li>CAM Feedback</li>
							</ul>
						</div>
						<div className="contact-col middle-col">
							<h3>ACCOUNT</h3>
							<ul>
								<li>Manage Your Account</li>
							</ul>
						</div>
						<div className="contact-col">
							<h3>NZXT STORE</h3>
							<ul>
								<li>Build a Custome PC</li>
								<li>FAQ</li>
								<li>Find a Retailer</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="legal">
					<div className="footer-inc">
						<h5 className="footer-logo">NZXT</h5>
						<p>© NZXT Inc. 2021 All Rights Reserved</p>
					</div>
					<div className="legal-links">
						<ul>
							<li>Legal</li>
							<li>Privacy Policy</li>
							<li>Manage Cookie Preferecnes</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="small-screen">
				<div className="region">
					<div className="lang">
						<h5 className="pref-title">LANGUAGE</h5>
						<p className="pref-selected">English</p>
					</div>
					<div className="reg">
						<h5 className="pref-title">REGION</h5>
						<p className="pref-selected">North America</p>
					</div>
				</div>
				<div className="footer-nav">
					<div className="btns">
						<div className="btn-div">
							<button
								className="ftr-nav-btn"
								onClick={
									isCompanyLinkOpen ? closeCompanyLinks : openCompanyLinks
								}
							>
								<h3 className="btn-title">CONTACT</h3>
							</button>
						</div>
						{isCompanyLinkOpen ? (
							<FooterLinks
								linkList={[
									"Company",
									"Customer Support",
									"Submit a Request",
									"Support Center",
									"AM4 Branket",
								]}
							/>
						) : (
							<div></div>
						)}
					</div>
					<div className="btns">
						<div className="btn-div">
							<button
								className="ftr-nav-btn"
								onClick={isAboutOpen ? closeAboutLinks : openAboutLinks}
							>
								<h3 className="btn-title">ABOUT NZXT</h3>
							</button>
						</div>
						{isAboutOpen ? (
							<FooterLinks
								linkList={[
									"Founder Q & A",
									"Newsroom & Blog",
									"Careers",
									"Customer Reviews",
								]}
							/>
						) : (
							<div></div>
						)}
					</div>
					<div className="btns">
						<div className="btn-div">
							<button
								className="ftr-nav-btn"
								onClick={
									isCommunityOpen ? closeCommunityLinks : openCommunityLinks
								}
							>
								<h3 className="btn-title">COMMUNITY</h3>
							</button>
						</div>
						{isCommunityOpen ? (
							<FooterLinks linkList={["Our Discord", "Newsroom & Blog"]} />
						) : (
							<div></div>
						)}
					</div>
					<div className="btns">
						<div className="btn-div">
							<button
								className="ftr-nav-btn"
								onClick={
									isSoftwareOpen ? closeSoftwareLinks : openSoftwareLinks
								}
							>
								<h3 className="btn-title">SOFTWARE</h3>
							</button>
						</div>
						{isSoftwareOpen ? (
							<FooterLinks linkList={["CAM", "CAM Feedback"]} />
						) : (
							<div></div>
						)}
					</div>
					<div className="btns">
						<div className="btn-div">
							<button
								className="ftr-nav-btn"
								onClick={isAccountOpen ? closeAccountLinks : openAccountLinks}
							>
								<h3 className="btn-title">ACCOUNT</h3>
							</button>
						</div>
						{isAccountOpen ? (
							<FooterLinks linkList={["Manage Your Account"]} />
						) : (
							<div></div>
						)}
					</div>
					<div className="btns">
						<div className="btn-div">
							<button
								className="ftr-nav-btn"
								onClick={isStoreOpen ? closeStoreLinks : openStoreLinks}
							>
								<h3 className="btn-title">NZXT STORE</h3>
							</button>
						</div>
						{isStoreOpen ? (
							<FooterLinks
								linkList={["Build a Custom PC", "FAQ", "Find a Retailer"]}
							/>
						) : (
							<div></div>
						)}
					</div>
				</div>
				<div className="social-icons">
					<Link className="social-link">
						<FaFacebook />
					</Link>
					<Link className="social-link">
						<FaTwitter />
					</Link>
					<Link className="social-link">
						<FaInstagram />
					</Link>
					<Link className="social-link">
						<FaYoutube />
					</Link>
					<Link className="social-link">
						<FaTwitch />
					</Link>
					<Link className="social-link">
						<FaReddit />
					</Link>
					<Link className="social-link">
						<FaSteam />
					</Link>
					<Link className="social-link">
						<FaDiscord />
					</Link>
				</div>
				<div className="legal-links">
					<ul>
						<li className="footer-logo">NZXT</li>
						<li>© NZXT Inc. 2021 All Rights Reserved</li>
						<li>Legal</li>
						<li>Privacy Policy</li>
						<li>Manage Cookie Preferecnes</li>
					</ul>
				</div>
			</div>
		</Footer_section>
	);
}

const Footer_section = styled.footer`
	padding-top: 40px;
	padding-bottom: 40px;
	padding-left: 5%;
	padding-right: 5%;
	color: rgba(156, 163, 175);
	background-color: #1c1c1c;
	margin-top: 45rem;

	.small-screen {
		display: none;
	}

	.upper {
		display: flex;
		justify-content: space-between;
	}

	.pref-selected {
		color: white;
		letter-spacing: 1px;
		font-weight: 600;
	}

	.social-link {
		font-size: 25px;
		color: rgba(156, 163, 175);
		padding-right: 20px;
	}

	.region {
		display: flex;
		gap: 4rem;
		line-height: 40px !important;
	}

	.mid-footer {
		display: flex;
		justify-content: space-evenly;
		margin-bottom: 50px;
	}
	.flex-1 {
		display: flex;
	}
	.flex-2 {
		display: flex;
	}

	.contact-col {
		padding-top: 50px;
		padding-bottom: 50px;
	}

	.contact-col h3 {
		color: white;
	}

	.contact-col li {
		list-style: none;
		padding-top: 15px;
	}

	.middle-col {
		padding-right: 5rem;
		padding-left: 5rem;
	}

	.legal {
		display: flex;
	}

	.footer-inc p {
		font-size: 13px;
	}

	.footer-logo {
		color: white;
	}

	.legal-links ul {
		display: flex;
		padding-left: 40px;
		margin-top: 15px;
	}

	.legal-links li {
		font-size: 13px;
		list-style: none;
		padding-right: 20px;
	}

	@media (max-width: 700px) {
		padding-bottom: 10rem;
		.full {
			display: none;
		}

		.small-screen {
			display: block;
			position: relative;
		}

		.region {
			align-items: center;
			text-align: center;
			justify-content: center;
		}

		.btn-div {
			border-bottom: 1px solid white;
			padding-top: 20px;
			padding-bottom: 20px;
		}

		.ftr-nav-btn {
			background-color: transparent;
			color: white;
			border: none;
			cursor: pointer;
		}

		.btn-title {
			letter-spacing: 1px;
		}

		.footer-logo {
			font-weight: 600;
		}

		.social-icons {
			align-items: center;
			text-align: center;
		}

		.legal-links {
			text-align: center;
			padding-top: 5rem;
		}

		.legal-links ul {
			padding-bottom: 0px;
		}

		.legal-links li {
			padding-top: 3px;
		}

		.footer-links {
			margin-top: 15px;
			margin-bottom: 15px;
		}

		.footer-links li {
			padding-top: 20px;
			list-style: none;
		}
	}

	@media (max-width: 990px) {
		.pref-selected {
			margin-top: -20px;
		}
		.social-icons {
			margin-top: 30px;
		}

		.contact-col h3 {
			font-size: 15px;
		}

		.legal {
			display: block;
			text-align: center;
			padding-bottom: 40px;
		}

		.footer-inc p {
			margin-top: -20px;
		}

		.legal-links {
			align-items: center;
			position: absolute;
			left: 50%;
			transform: translate(-50%, -50%);
			margin-top: 20px;
		}

		.legal-links ul {
			display: block;
			padding-left: 20px;
		}
	}

	@media (max-width: 1200px) {
		margin-top: 75rem;

		.mid-footer {
			display: block;
		}

		.flex-1 {
			margin-left: 10%;
			margin-right: 10%;
		}

		.flex-2 {
			margin-left: 10%;
			margin-right: 10%;
		}

		.contact-col {
			margin-top: 50px;
			margin-left: 5%;
			margin-right: 5%;
			padding: 20px;
		}
	}
`;

export default Footer;
