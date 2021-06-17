import React from "react";
import styled from "styled-components";
import { FaCalendarCheck } from "react-icons/fa";
import { GrSettingsOption, GrRotateLeft } from "react-icons/gr";
import ProductImageRight from "../components/ProductFlexRight";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

function Software() {
	return (
		<SoftwareContainer>
			<div className="software-content">
				<div className="software-details">
					<h3 className="hero-title">The Best Gaming PC Monitoring App</h3>
					<p>
						Manage performance, temperatures, and devices all from a single
						application. NZXT CAM is fast, efficient, and easy-to-use, allowing
						you to control every aspect of your computer.
					</p>
				</div>
				<div>
					<img
						className="software-image"
						src="https://nzxt.com/assets/cms/34299/1620941749-cam-hero-en-1380x1380.png?auto=format&dpr=2&fit=max&fm=webp&h=690&w=690"
					></img>
				</div>
			</div>
			<div className="bonus">
				<div className="expert">
					<h3 className="icon">
						<GrRotateLeft />
					</h3>
					<h3 className="sub-title">Game Sync</h3>
					<p className="sub">
						Set your lights and fans to change whenever you launch one of our
						thousands of supported games. Match the colors of the game, change
						your lights to respond to the in-game audio, or turn all of your
						lights off for a competitive edge.
					</p>
				</div>
				<div className="expert">
					<h3 className="icon">
						<FaCalendarCheck />
					</h3>
					<h3 className="sub-title">Smart Scheduling</h3>
					<p className="sub">
						Customize the behavior of your fans and lighting for different times
						of day. Set your lights to slowly turn on as your day begins, your
						cooling devices to run at higher power in the heat of the afternoon,
						or for your lights to shut off automatically as a bedtime reminder
					</p>
				</div>
				<div className="expert">
					<h3 className="icon">
						<GrSettingsOption />
					</h3>
					<h3 className="sub-title">Complete Customization</h3>
					<p className="sub">
						Match your computer to how you use it, any time of day or night. CAM
						will make it so lights and cooling devices will help bring you more
						into the game than ever before.
					</p>
				</div>
			</div>

			<ProductImageRight
				title="Track Every Aspect of Your Computer"
				description="NZXT CAM empowers you to see what your computer is doing, from processor load to bandwidth consumption. It also lets you know what applications are making use of every part of your machine. You can quickly track down any issues to ensure that you’re getting the optimal performance out of your computer."
				image="https://nzxt.com/assets/cms/34299/1621033426-cam-screenshot-en-928x928.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=464&w=464"
			/>

			<div className="prod-img-left">
				<div className="product-flex">
					<div className="image-display">
						<img
							className="left-img"
							src="https://nzxt.com/assets/cms/34299/1621031976-cam-monitoring-928x928.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=464&w=464"
						></img>
					</div>
					<div className="image-description">
						<h2 className="title">In-Game Monitoring</h2>
						<p className="descript">
							Performance matters most when you’re in-game. Track your FPS,
							temperatures, bandwidth, and more with our low-impact,
							super-stable in-game overlay. Make the most out of your computer.
						</p>
						<h4 className="cam-feature-title">CAM SUPPORTED FEATURES</h4>
						<ul className="features">
							<li>Current FPS</li>
							<li>CPU / GPU Temperature</li>
							<li>Time Played</li>
							<li>Battery Level</li>
							<li>CPU / GPU Load</li>
							<li>Many more!</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="learn-more">
				<div className="cam">
					<h3>Control NZXT Products</h3>
					<h6>
						Control case lights, fan speeds, PSU voltages, and more through NZXT
						CAM’s intuitive and beautiful interface.
					</h6>
					<Link className="link" style={{ textDecoration: "none" }}>
						Download CAM
					</Link>
					<img src="https://nzxt.com/assets/cms/34299/1619545322-cam-icons-w-case.png?auto=format&dpr=2&fit=max&fm=webp&h=464&w=464"></img>
				</div>
				<div className="cam">
					<h3>Become a Beta Tester</h3>
					<h6>
						PGet your hands on next-generation CAM software before anyone else
						in the community. CAM Beta provides tech-savvy users the opportunity
						to work directly with our dev team to provide feedback on future
						versions of NZXT CAM.
					</h6>
					<Link className="link" style={{ textDecoration: "none" }}>
						Download CAM Beta
					</Link>
					<img
						className="cam-logo"
						src="https://nzxt.com/assets/cms/34299/1619545933-cam-beta-logo-spacer.png?auto=format&dpr=2&fit=max&fm=webp&h=464&w=464"
					></img>
				</div>
			</div>
		</SoftwareContainer>
	);
}

const SoftwareContainer = styled.div`
	padding-top: 100px;
	.software-content {
		display: flex;
		gap: 50px;
		align-items: center;
		justify-content: center;
		margin-left: 5%;
		margin-right: 5%;
		margin-bottom: 80px;
		padding-top: 50px;
	}

	.software-details {
		width: 40%;
	}

	.hero-title {
		font-size: 70px;
		font-weight: 800;
		width: 90%;
	}

	.software-details p {
		padding-top: 25px;
		font-size: 20px;
		letter-spacing: 1px;
		line-height: 22px;
		width: 80%;
	}

	.software-image {
		height: 600px;
	}

	.bonus {
		display: flex;
		gap: 50px;
		text-align: center;
		background-color: #f2f3f5;
		margin-right: 10%;
		margin-left: 10%;
		border-radius: 10px;
		padding: 40px;
		letter-spacing: 1px;
		margin-bottom: 50px;
	}

	.sub-title {
		padding-bottom: 5px;
	}

	.sub {
		color: gray;
		font-weight: 600;
		line-height: 20px;
	}

	.icon {
		font-size: 30px;
		padding-bottom: 10px;
		color: #4a4949;
	}

	/* Product left styling */

	.prod-img-left {
		margin-top: 50px;
		background-color: #f2f3f5;
		padding-top: 20px;
		padding-bottom: 20px;
	}

	.product-flex {
		display: flex;
		gap: 80px;
		align-items: center;
		justify-content: center;
		margin-left: 10%;
		margin-right: 10%;
	}

	.left-img {
		height: 500px;
	}

	.title {
		font-size: 3rem;
		color: #313234;
	}

	.descript {
		padding-top: 30px;
		letter-spacing: 1px;
		width: 90%;
		line-height: 24px;
		font-weight: 400;
	}

	.cam-feature-title {
		margin-top: 15px;
		margin-bottom: 15px;
	}

	.features li {
		padding-bottom: 7px;
	}

	/* learn more */

	.learn-more {
		display: flex;
		gap: 20px;
		text-align: center;
		align-items: center;
		position: absolute;
		margin-top: 350px;
		left: 50%;
		cursor: pointer;
		transform: translate(-50%, -50%);
	}

	.cam {
		font-size: 22px;
		color: white;
		text-align: center;
		background-color: #2f2e34;
		border-radius: 10px;
		padding-left: 4rem;
		padding-right: 4rem;
		padding-top: 50px;
	}

	.cam h6 {
		padding-top: 20px;
		padding-bottom: 30px;
		line-height: 25px;
	}

	.link {
		font-size: 14px;
		letter-spacing: 1px;
		font-weight: 600;
		color: white;
		border: 2px solid white;
		border-radius: 20px;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-right: 20px;
		padding-left: 20px;
	}

	.cam img {
		margin-top: 50px;
		height: 215px;
	}

	.cam-logo {
		height: 165px !important;
		padding-bottom: 32px;
	}

	@media (max-width: 690px) {
		.image-display {
			left: 5% !important;
		}
	}

	@media (max-width: 790px) {
		.software-image {
			height: 400px !important;
		}

		.product-flex {
			display: block;
			padding-bottom: 40px;
		}

		.image-display {
			align-items: center;
			justify-content: center;
			position: relative;
			left: 20%;
		}

		.image-description {
			align-items: center;
			justify-content: center;
		}

		.descript {
			width: 80%;
		}
	}

	@media (max-width: 1200px) {
		padding-top: 100px;
		.software-content {
			display: block;
			text-align: center;
		}

		.software-details {
			width: 100%;
			align-items: center;
			justify-content: center;
		}

		.hero-title {
			width: 100%;
			font-size: 3rem;
		}

		.software-details p {
			width: 100%;
		}

		.software-image {
			height: 500px;
		}

		.left-img {
			height: 350px;
		}

		.title {
			font-size: 2.5rem;
		}

		.learn-more {
			margin-top: 35rem;
			display: block;
		}
		.cam {
			margin-bottom: 40px;
		}
	}
`;

export default Software;
