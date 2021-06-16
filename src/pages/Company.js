import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Company() {
	return (
		<About>
			<div className="about-content">
				<div className="about-details">
					<h3 className="title">
						Our purpose is to serve the PC gaming community.
					</h3>
					<p>
						We are relentless in making the experience achievable and seamless
						for everyone.
					</p>
				</div>
				<div className="about-image">
					<img src="https://nzxt.com/assets/cms/34299/1617117602-image-4.png?auto=format&dpr=2&fit=max&fm=webp&h=690&w=690"></img>
				</div>
			</div>
			<div className="importance">
				<div>
					<h3 className="important-title">What's Important to Us</h3>
				</div>
				<div className="import-lists">
					<div className="import-list">
						<ul>
							<li>
								<h4 className="list-title">Every Voice Matters</h4>
								<p className="list-details">
									We're honest, we're vocal, and we say our piece.
								</p>
							</li>
							<li>
								<h4 className="list-title">Do What You Say</h4>
								<p className="list-details">
									We aren’t always perfect, but we’re relentless in our purpose.
								</p>
							</li>
							<li>
								<h4 className="list-title">Build Scalable Systems</h4>
								<p className="list-details">
									Our best successes can accommodate our growth.
								</p>
							</li>
							<li>
								<h4 className="list-title">Win Together</h4>
								<p className="list-details">
									We win as a team, we lose as a team.
								</p>
							</li>
						</ul>
					</div>
					<div className="import-list">
						<ul>
							<li>
								<h4 className="list-title">Give A Sh*t</h4>
								<p className="list-details">
									We go the extra mile to do right by our community.
								</p>
							</li>
							<li>
								<h4 className="list-title">Keep It Simple</h4>
								<p className="list-details">‘Nuff said.</p>
							</li>
							<li>
								<h4 className="list-title">Commit to Quality</h4>
								<p className="list-details">
									No detail is too small, we’re in the relentless pursuit of
									perfection.
								</p>
							</li>
							<li>
								<h4 className="list-title">Learn and Grow</h4>
								<p className="list-details">
									We build on our mistakes and our successes. We dwell on
									neither.
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="support-wrapper">
				<h3 className="support-header-title">We're here to support you</h3>
				<div className="support">
					<div className="contact">
						<div className="contact-info">
							<div className="hq">
								<h3>Address</h3>
								<p>15736 E. Valley Blvd City of Industry CA, 91744-3927</p>
							</div>
							<div className="phone">
								<h3>Phone</h3>
								<p>+1-626-385-8272</p>
								<h3>Support</h3>
								<p>+800-228-9395</p>
							</div>
						</div>
						<div className="hours">
							<div className="daily-hours">
								<h3 className="daily-hrs-title">
									Monday - Friday:
									<span className="daily-hrs-details">8:00AM - 6:00PM PST</span>
								</h3>
							</div>
							<div className="holidays">
								<h3 className="holiday-title">Holiday Schedule</h3>
								<ul className="holiday-list">
									<li>New Years Day - 01/01</li>
									<li>Martin Luther King Jr. Day - 01/20</li>
									<li>President’s Day - 02/15</li>
									<li>Memorial Day - 05/31</li>
									<li>Juneteenth - 06/18</li>
									<li>Independence Day - 07/03</li>
									<li>Labor Day - 09/06</li>
									<li>Thanksgiving Day - 11/25</li>
									<li>Black Friday - 11/26</li>
									<li>Christmas Eve - 12/24</li>
									<li>Christmas Day - 12/25</li>
									<li>New Years Eve - 12/31</li>
								</ul>
								<p className="thanks">
									Due to Covid-19, our support team is currently operating under
									reduced staffing. Our temporary hours are 8AM to 6PM PST.
									Thank you for your patience! 💜
								</p>
							</div>
						</div>
					</div>
					<div className="other">
						<div className="support-lists">
							<div className="support-list">
								<h4 className="support-title"> Customer Support </h4>
								<p>Contact the proper department within NZXT to help you.</p>
								<Link className="link">Contact Support</Link>
							</div>
							<div className="support-list">
								<h4 className="support-title"> Issue Request</h4>
								<p>
									Submit a request to our support teams, we’re here to help!
								</p>
								<Link className="link">Submit a Request</Link>
							</div>
							<div className="support-list">
								<h4 className="support-title"> Support Center </h4>
								<p>Find additional customer support articles and FAQ.</p>
								<Link className="link">Support Center</Link>
							</div>
						</div>
						<div className="support-lists">
							<div className="support-list">
								<h4 className="support-title"> Guides </h4>
								<p>Learn the basics in hardware, software, and assembly.</p>
								<Link className="link">Learn More</Link>
							</div>
							<div className="support-list">
								<h4 className="support-title"> Your Order </h4>
								<p>
									Track your order, view your order history, or make a return.
								</p>
								<Link className="link">My Orders</Link>
							</div>
							<div className="support-list">
								<h4 className="support-title"> Newsroom </h4>
								<p>Read NZXT’s latest news and blog updates.</p>
								<Link className="link">Latest</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</About>
	);
}

const About = styled.div`
	padding-top: 140px;
	.about-content {
		display: flex;
		gap: 50px;
		align-items: center;
		justify-content: center;
		margin-left: 5%;
		margin-right: 5%;
		margin-bottom: 80px;
		padding-top: 50px;
	}

	.about-details {
		width: 40%;
	}

	.title {
		font-size: 60px;
		font-weight: 800;
		width: 80%;
	}

	.about-details p {
		padding-top: 25px;
		font-size: 20px;
		letter-spacing: 1px;
		line-height: 22px;
		width: 80%;
	}

	img {
		height: 500px;
	}

	.important-title {
		padding-bottom: 50px;
		font-size: 40px;
	}

	.importance {
		margin-left: 15%;
		margin-right: 15%;
		width: 70%;
	}

	.import-lists {
		display: flex;
		gap: 100px;
	}

	.import-list li {
		list-style: none;
		padding-top: 20px;
		border-top: 1px solid lightgray;
	}

	.list-title {
		font-size: 25px;
	}

	.list-details {
		padding-top: 10px;
		padding-bottom: 20px;
		font-size: 18px;
		letter-spacing: 0.5px;
	}

	.support-wrapper {
		margin-left: 15%;
		margin-right: 15%;
		margin-bottom: 50px;
		width: 70%;
	}

	.support-header-title {
		font-size: 40px;
		margin-bottom: 30px;
		margin-top: 50px;
	}

	.support {
		display: flex;
	}

	.contact {
		width: 90%;
	}

	.contact-info {
		display: flex;
		gap: 30px;
		margin-bottom: 30px;
	}

	.hq {
		width: 35%;
	}

	.daily-hrs-title {
		margin-bottom: 20px;
	}

	.daily-hrs-details {
		font-weight: 400;
	}

	.holiday-title {
		margin-bottom: 10px;
	}

	.holiday-list {
		margin-bottom: 20px;
	}
	.holiday-list li {
		list-style: none;
		padding-bottom: 5px;
		font-size: 18px;
	}

	.thanks {
		font-size: 18px;
		letter-spacing: 0.5px;
		width: 60%;
	}

	.other {
		border-radius: 10px;
		background-color: #f2f3f5;
		flex-grow: 8;
	}

	.support-lists {
		display: flex;
		padding-left: 50px;
		padding-right: 50px;
		padding-top: 50px;
		padding-bottom: 50px;
	}

	.support-list {
		padding-right: 20px;
	}

	.support-list p {
		margin-bottom: 10px;
		line-height: 25px;
		font-size: 16px;
	}

	.support-title {
		letter-spacing: 0.2px;
		margin-bottom: 10px;
		font-size: 16px;
	}

	.link {
		color: black;
		letter-spacing: 0.5px;
		font-weight: 400;
		font-size: 18px;
	}
`;

export default Company;
