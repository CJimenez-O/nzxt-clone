import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Crft from "../components/crft";
import Meet from "../components/Meet";

function Home() {
	return (
		<MainContainer>
			<div className="landing">
				<div className="promo-text">
					<h1>Meet the H510 Series</h1>
					<h5>Quiet, cool, and brilliant.</h5>
					<Link
						to="/components"
						className="button"
						style={{ textDecoration: "none" }}
					>
						Shop Now
					</Link>
				</div>
				<div>
					<img
						className="product"
						src="https://nzxt.com/assets/cms/34299/1621638411-case-cut-fade-mid.png?ar=16%3A9&auto=format&fit=max&fm=webp&h=675&w=1200"
					></img>
				</div>
			</div>
			<div className="build">
				<div className="start">
					<img
						className="rgb_pc"
						src="https://nzxt.com/assets/cms/34299/1618960827-elite5grid.png?auto=format&dpr=1.5&fit=max&fm=webp&h=900&w=900"
					/>
					<h2>Gaming PCs Made Simple</h2>
					<p>Choose from curated parts and we’ll build it for you</p>
					<Link
						to="/components"
						className="start_button"
						style={{ textDecoration: "none" }}
					>
						Start Your Build
					</Link>
				</div>
				<div>
					<div className="flex">
						<div className="products">
							<h3 className="title">CRFT 08: H510</h3>
							<div className="prod_display">
								<div className="description">
									<p className="sub-title">Build The Legend</p>
									<p className="company">CRFT</p>
								</div>
								<img src="https://www.datocms-assets.com/34299/1621467509-h510-valhalla-rear-with-cover.png?auto=format&fit=max&h=460&w=654"></img>
							</div>
						</div>
						<div className="products">
							<h3 className="title">Kraken X RGB </h3>
							<div className="prod_display">
								<div className="description">
									<p className="sub-title">
										Liquid Cooler with Infinity Mirror Display
									</p>
									<p className="company">Kraken X</p>
								</div>
								<img
									className="cooler"
									src="https://www.datocms-assets.com/34299/1615738803-kraken-x73-rgb-keyshot.png?auto=format&fit=max&h=460&w=654"
								></img>
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="products">
							<h3 className="title">Kraken Z </h3>
							<div className="prod_display">
								<div className="description">
									<p className="sub-title">Liquid Cooler with LCD Display</p>
									<p className="company">Kraken Z</p>
								</div>
								<img src="https://www.datocms-assets.com/34299/1615589318-kraken-zpumpfrontangleui.png?auto=format&fit=max&h=460&w=654"></img>
							</div>
						</div>
						<div className="products">
							<h3 className="title">AER Series </h3>
							<div className="prod_display">
								<div className="description">
									<p className="sub-title">High performance RGB Fans</p>
									<p className="company">AER</p>
								</div>
								<img src="https://www.datocms-assets.com/34299/1615574435-aerrgb140frontrainbow.png?auto=format&fit=max&h=460&w=654"></img>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mid-nav">
				<div className="nav-bundle">
					<div className="nav-option">
						<img src="https://nzxt.com/assets/cms/34299/1621561418-case-h510-left-side.png?auto=format&dpr=1.5&fit=max&fm=webp&h=80&w=80"></img>
						<p>Cases</p>
						<p className="sub-descrip">The H510</p>
					</div>
					<div className="nav-option">
						<img src="https://nzxt.com/assets/cms/34299/1621561407-case-h510-right-side.png?auto=format&dpr=1.5&fit=max&fm=webp&h=80&w=80"></img>
						<p>Prebuilt PCs</p>
						<p className="sub-descrip">Starter Series</p>
					</div>
					<div className="nav-option">
						<img src="https://nzxt.com/assets/cms/34299/1621561411-kraken-z.png?auto=format&dpr=1.5&fit=max&fm=webp&h=80&w=80"></img>
						<p>Liquid Cooling</p>
						<p className="sub-descrip">Kraken Z</p>
					</div>
				</div>
				<div className="nav-bundle">
					<div className="nav-option">
						<img src="https://nzxt.com/assets/cms/34299/1621561387-software-generic.png?auto=format&dpr=1.5&fit=max&fm=webp&h=80&w=80"></img>
						<p>NZXT CAM</p>
						<p className="sub-descrip">Software</p>
					</div>
					<div className="nav-option">
						<img src="https://nzxt.com/assets/cms/34299/1621561365-service.png?auto=format&dpr=1.5&fit=max&fm=webp&h=80&w=80"></img>
						<p>Support</p>
						<p className="sub-descrip">FAQs & Support</p>
					</div>
					<div className="nav-option">
						<img src="https://nzxt.com/assets/cms/34299/1621561403-document.png?auto=format&dpr=1.5&fit=max&fm=webp&h=80&w=80"></img>
						<p>News</p>
						<p className="sub-descrip">Community & Company</p>
					</div>
				</div>
			</div>
			<div className="video-stream">
				<div className="video-decription">
					<h6>AIO Liquid Cooling</h6>
					<h3>COOLER THAN COOL</h3>
					<h6 className="keep">Keep your cool. Keep your style.</h6>
					<Link className="button" style={{ textDecoration: "none" }}>
						Shop Now
					</Link>
				</div>
				<video autoPlay loop muted>
					<source src="https://stream.mux.com/Un02D7xPL00fDjLRm01tzBU84q2US02YsWsW/high.mp4" />
				</video>
			</div>

			<Crft></Crft>
			<Meet></Meet>
		</MainContainer>
	);
}

const MainContainer = styled.div`
	/* landing page */
	.landing {
		align-items: center;
		justify-content: center;
		background-color: black;
		color: white;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding-top: 140px;
		width: 100%;
	}

	.promo-text {
		padding-top: 30px;
		padding-bottom: 50px;
		margin-bottom: 20px;
		font-size: 30px;
		padding-right: 5%;
		padding-left: 5%;
	}

	.promo-text h5 {
		margin-bottom: 20px;
	}

	.button {
		background-color: black;
		border: 2px solid white;
		color: white;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-right: 30px;
		padding-left: 30px;
		border-radius: 50px;
		font-size: 16px;
		font-weight: 600;
		margin-top: 30px;
	}

	.button:hover {
		background-color: white;
		color: #7f00f5;
	}

	/* start tour build section */

	.build {
		display: flex;
		margin-top: 50px;
		align-items: center;
		justify-content: center;
	}

	.start {
		margin-bottom: 30px;
	}

	.start h2 {
		font-size: 55px;
		padding-right: 20%;
		margin-left: 20px;
	}

	.start p {
		margin-left: 20px;
		padding-top: 10px;
		padding-top: 20px;
		font-size: 14px;
		font-weight: 600;
		margin-bottom: 30px;
	}

	.start_button {
		background-color: #7f00f5;
		margin-left: 20px;
		margin-top: 50px;
		color: white;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-right: 30px;
		padding-left: 30px;
		border-radius: 50px;
		font-size: 16px;
		font-weight: 600;
	}

	.rgb_pc {
		height: 400px;
	}

	.flex {
		display: flex;
	}
	.products {
		margin-right: 20px;
		overflow: hidden;
		background-color: #f2f3f5;
		border-radius: 10px;
		height: 50%;
		padding-left: 20px;
		margin-top: 20px;
	}

	.prod_display {
		width: 300px;
		height: 250px;
	}

	.prod_display img {
		height: 220px;
		position: relative;
		margin-left: 140px;
		bottom: 150px;
	}

	.cooler {
		bottom: 220px !important;
		margin-left: 120px !important;
	}

	.title {
		padding-top: 15px;
		font-size: 30px;
		width: 80%;
	}

	.sub-title {
		padding-top: 10px;
		width: 50%;
	}

	.company {
		margin-top: 150px;
	}

	/* MIDDLE NAVIGATION ICONS */

	.mid-nav {
		align-items: center;
		text-align: center;
		justify-content: center;
		margin-top: 70px;
		margin-bottom: 70px;
		margin-left: 6%;
		margin-right: 6%;
		background-color: #f2f3f5;
		border-radius: 10px;
		padding-top: 30px;
		padding-bottom: 30px;
		padding-left: 120px;
		padding-right: 120px;
		display: flex;
	}

	.nav-bundle {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.nav-option {
		padding-right: 60px;
	}

	.nav-option img {
		height: 50px;
		padding-left: 20px;
		padding-right: 20px;
		padding-bottom: 5px;
	}

	.nav-option p {
		font-weight: 600;
		font-size: 14px;
	}

	.sub-descrip {
		font-weight: 400 !important;
		padding-top: 3px;
		font-size: 12px !important;
	}

	/* VIDEO STREAM */

	.video-stream {
		position: relative;
		overflow: hidden;
		min-height: 600px;
	}

	.video-stream video {
		min-height: 600px;
		position: absolute;
		object-fit: cover;
		object-position: center;
		z-index: -1;
		width: 100%;
		top: 0;
		left: 0;
	}

	.video-decription {
		align-items: center;
		text-align: center;
		position: absolute;
		font-size: 40px;
		width: 100%;
		top: 50%;
		left: 0;
		right: 0;
		transform: translateY(-50%);
		color: #f2f3f5;
	}

	.video-decription h6 {
		font-size: 20px;
		padding-bottom: 10px;
		padding-top: 10px;
	}

	.video-decription .button {
		color: white;
		font-size: 20px;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 20px;
		padding-right: 20px;
		background-color: transparent;
		border: 2px solid white;
		border-radius: 50px;
	}

	.video-decription .button:hover {
		background-color: white;
		color: #7f00f5;
	}

	@media (max-width: 650px) {
		.flex {
			display: block;
		}

		.prod_display img {
			height: 220px;
			position: relative;
			margin-left: 240px;
			bottom: 160px;
		}

		.cooler {
			margin-left: 240px !important;
		}
	}

	@media (max-width: 990px) {
		padding-top: 90px;

		.landing {
			padding-top: 20px;
		}

		.promo-text {
			font-size: 30px;
		}

		h5 {
			padding-top: 20px;
			padding-bottom: 30px;
		}

		.product {
			height: 300px;
		}

		.start h2 {
			margin-left: 0;
		}
		.start p {
			margin-left: 0;
		}
		.rgb_pc {
			height: 270px;
		}

		.products {
			margin-left: 5%;
		}

		.start_button {
			margin-left: 0;
		}

		.mid-nav {
			display: block;
			margin-left: 8% !important;
			margin-right: 8% !important;
		}

		.nav-option {
			padding-right: 40px !important;
			padding-left: 30px;
		}

		.video-decription {
			top: 50%;
			font-size: 20px;
		}

		.video-decription h6 {
			font-size: 14px;
		}

		.keep {
			margin-bottom: 20px;
		}

		.video-decription .button {
			font-size: 14px;
		}
	}

	@media (max-width: 1250px) {
		.build {
			display: block;
			padding-left: 0;
		}

		.start {
			text-align: center;
			margin-left: 0;
		}

		.start h2 {
			font-size: 30px;
			width: 100%;
			padding-right: 0;
		}

		.flex {
			margin-right: 0 !important;
			align-items: center;
			width: 100%;
			justify-content: center;
		}

		.mid-nav {
			display: block;
			margin-left: 20%;
			margin-right: 20%;
		}

		.nav-option {
			padding-right: 80px;
			padding-bottom: 50px;
			align-items: center;
		}
		.nav-option img {
			padding-left: 0;
		}
	}
`;

export default Home;
