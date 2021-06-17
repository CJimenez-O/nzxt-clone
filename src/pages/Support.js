import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Support() {
	return (
		<SupportContainer>
			<div className="support-hero">
				<div className="support-hero-text">
					<h1>Support</h1>
					<p>Find additional customer support articles and FAQ.</p>
				</div>
				<div>
					<img
						className="support-hero-image"
						src="https://nzxt.com/assets/cms/34299/1619745249-customer-support-2x.png?auto=format&dpr=2&fit=max&fm=webp&h=540&w=540"
					></img>
				</div>
			</div>
			<div className="support-wrapper">
				<div className="support">
					<div className="contact">
						<div className="contact-info">
							<h3 className="support-header-title">Contact</h3>
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
									<span className="daily-hrs-details">8:00AM - 6:00PM </span>
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
					<div className="support-search">
						<div>
							<h2 className="search-title">Search for help articles</h2>
							<p className="search-details">Search for help articles</p>
							<input type="text" className="search-input"></input>
						</div>
						<div className="search-button-div">
							<button className="search-button">Browse Articles</button>
						</div>

						<div className="company-quality">
							<div className="slogans">
								<div className="slogan">
									<h3>WIN WIN ATTITUDE</h3>
									<p>
										"We put our customers first”. Our mission is to provide our
										customers a winning solution in response to their customer
										support request.
									</p>
								</div>
								<div className="slogan">
									<h3>BE HUMBLE</h3>
									<p>
										We are gamers ourselves and we respect the community we come
										from. This keeps us humble and reminds us to keep improving.
									</p>
								</div>
							</div>
							<div className="slogans">
								<div className="slogan">
									<h3>SERVICE WOW!</h3>
									<p>
										We believe that there is a service above and beyond what
										exists as the norm. We strive to deliver more and exceed
										expectations in consumer satisfaction.
									</p>
								</div>
								<div className="slogan">
									<h3>EFFICIENCY & QUALITY</h3>
									<p>
										It’s important to us that our customer service is reliable,
										receptive, prompt in follow ups and offers easy-to-use
										self-help tools.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</SupportContainer>
	);
}

const SupportContainer = styled.div`
	padding-top: 200px;
	.support-hero {
		display: flex;
		gap: 50px;
		align-items: center;
		justify-content: center;
		width: 80%;
		margin-right: 10%;
		margin-left: 10%;
		background-color: #f2f3f5;

		border-radius: 10px;
		margin-bottom: 50px;
	}

	.support-hero-text h1 {
		font-size: 5rem;
		margin-bottom: 20px;
	}

	.support-hero-image {
		height: 300px;
	}

	/* support contact */

	.support-wrapper {
		margin-left: 15%;
		margin-right: 15%;
		margin-bottom: 50px;
		width: 70%;
	}

	.support-header-title {
		font-size: 45px;
		margin-bottom: 30px;
		margin-top: 50px;
	}

	.support {
		display: flex;
		gap: 50px;
	}

	.contact {
		width: 100%;
	}

	.contact-info {
		margin-bottom: 30px;
	}

	.hq {
		width: 55%;
		margin-bottom: 30px;
		font-size: 15px;
	}

	.phone {
		font-size: 15px;
	}

	.daily-hrs-title {
		margin-bottom: 20px;
		font-size: 15px;
	}

	.daily-hrs-details {
		font-weight: 400;
		font-size: 15px;
	}

	.holiday-title {
		margin-bottom: 10px;
		font-size: 15px;
	}

	.holiday-list {
		margin-bottom: 20px;
	}
	.holiday-list li {
		list-style: none;
		padding-bottom: 5px;
		font-size: 15px;
	}

	.thanks {
		font-size: 16px;
		letter-spacing: 0.5px;
		width: 100%;
	}

	.support-search {
		margin-top: 50px;
	}

	.search-title {
		font-size: 45px;
		margin-bottom: 20px;
	}
	.search-input {
		width: 600px;
		font-size: 16px;
		border-radius: 10px;
		border: 1px solid lightgray;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	input[type="text"] {
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 10px;
		letter-spacing: 1px;
	}
	.search-button-div {
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.search-button {
		padding-top: 10px;
		padding-bottom: 10px;
		padding-right: 20px;
		padding-left: 20px;
		border-radius: 20px;
		border: none;
		font-size: 16px;
		font-weight: 600;
		letter-spacing: 1px;
		background-color: #7f00f5;
		color: white;
		cursor: pointer;
	}

	.slogans {
		margin-top: 50px;
		display: flex;
		gap: 120px;
		margin-left: 10%;
		margin-right: 10%;
		width: 80%;
	}

	.slogan {
		border-top: 1px solid lightgray;
		padding-top: 30px;
		width: 40%;
	}

	.slogan h3 {
		font-size: 30px;
	}

	.slogan p {
		line-height: 25px;
		font-size: 18px;
		font-weight: 400;
		padding-top: 15px;
	}
`;

export default Support;
