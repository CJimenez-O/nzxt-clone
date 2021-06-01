import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
		</MainContainer>
	);
}

const MainContainer = styled.div`
	.landing {
		align-items: center;
		justify-content: center;
		background-color: black;
		color: white;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding-top: 140px;
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

	.build {
		display: flex;
		padding-left: 100px;
		margin-top: 50px;
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
		margin-right: 50px;
		width: 90%;
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
		height: 250px;
		position: relative;
		margin-left: 150px;
		bottom: 180px;
	}

	.cooler {
		bottom: 210px !important;
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
			height: 400px;
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
			width: 103%;
			justify-content: center;
		}
	}
`;

export default Home;
