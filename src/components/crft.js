import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Crft() {
	return (
		<Product>
			<div className="promotion">
				<div className="gaming">
					<h2>GAMING IN OUT BLOOD</h2>
					<h1>CRFT</h1>
				</div>
				<div className="shadow">
					<div className="product-image">
						<h1>Limited Edition</h1>
						<p>Officially licensed. Games. Joy.</p>
						<p className="drop">
							This custom Assassin's Creed Valhalla Case + Charm + Puck is our
							latest drop.
						</p>
						<Link className="see_button" style={{ textDecoration: "none" }}>
							See Collection
						</Link>
					</div>
					<img
						className="pc"
						src="https://nzxt.com/assets/cms/34299/1622086462-home-crft-valhalla.png?auto=format&fit=max&h=558&w=523"
					/>
				</div>
			</div>
			<div className="brands">
				<div className="logos">
					<img src="https://nzxt.com/assets/cms/34299/1619643575-pubg.png?auto=format&dpr=2&fit=max&fm=webp&h=138&w=314"></img>
					<img src="https://nzxt.com/assets/cms/34299/1619643592-fallout.png?auto=format&dpr=2&fit=max&fm=webp&h=138&w=314"></img>
					<img src="https://nzxt.com/assets/cms/34299/1619643601-wow.png?auto=format&dpr=2&fit=max&fm=webp&h=138&w=314"></img>
				</div>
				<div className="logos">
					<img src="https://nzxt.com/assets/cms/34299/1619643617-mass-effect.png?auto=format&dpr=2&fit=max&fm=webp&h=138&w=314"></img>
					<img src="https://nzxt.com/assets/cms/34299/1619643623-siege.png?auto=format&dpr=2&fit=max&fm=webp&h=138&w=314"></img>
					<img src="https://nzxt.com/assets/cms/34299/1622086865-assassin-s-creed-logo.png?auto=format&fit=max&fm=webp&h=138&w=314"></img>
				</div>
			</div>

			<div className="learn-more">
				<div className="cam">
					<h3>NZXT CAM</h3>
					<h6>The Best Gaming PC Monitoring App</h6>
					<Link className="link" style={{ textDecoration: "none" }}>
						Learn More
					</Link>
					<img src="https://nzxt.com/assets/cms/34299/1620336914-cam-home-page.png?auto=format&dpr=2&fit=max&fm=webp&h=464&w=464"></img>
				</div>
				<div className="cam">
					<h3>Starter Series</h3>
					<h6>Prebuilt PCs to Start any Gaming Journey</h6>
					<Link className="link" style={{ textDecoration: "none" }}>
						Learn More
					</Link>
					<img src="https://nzxt.com/assets/cms/34299/1620339562-starter-series-home-page-2x.png?auto=format&dpr=2&fit=max&fm=webp&h=464&w=464"></img>
				</div>
			</div>
		</Product>
	);
}

const Product = styled.div`
	.gaming {
		margin-bottom: 0;
		text-align: center;
	}

	.gaming h2 {
		background-image: url("https://nzxt.com/assets/cms/34299/1621271256-crftbgtop-2x.png?auto=format&fit=max&h=918&w=1440");
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		color: transparent;
		font-size: 4rem;
		letter-spacing: 6px;
		margin-top: 40px;
		margin-bottom: -40px;
	}
	.gaming h1 {
		background-image: url("https://nzxt.com/assets/cms/34299/1621271256-crftbgtop-2x.png?auto=format&fit=max&h=918&w=1440");
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		color: transparent;
		font-size: 15rem;
		margin-bottom: -53px;
	}

	.product-image {
		background-image: url("https://nzxt.com/assets/cms/34299/1622086473-crftbgvalhalla-1440x.png?auto=format&fit=max&h=918&w=1440");
		height: 600px;
		text-align: center;
		padding-top: 50px;
		background-position: center;
		background-repeat: no-repeat;
		display: block;
		z-index: -1;
		margin-left: 5%;
		margin-right: 5%;
		border-radius: 10px;
		color: white;
	}

	.product-image h1 {
		font-size: 50px;
		margin-bottom: 10px;
	}

	.product-image p {
		font-weight: 600;
		padding-bottom: 20px;
		font-size: 18px;
		letter-spacing: 1px;
	}

	.drop {
		margin-bottom: 20px;
	}

	.see_button {
		color: white;
		font-weight: 600;
		letter-spacing: 1px;
		border: none;
		background-color: #7f00f5;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 15px;
		padding-right: 15px;
		border-radius: 20px;
		font-size: 16px;
	}

	.pc {
		align-items: center;
		position: absolute;
		margin-top: -80px;
		left: 50%;
		cursor: pointer;
		transform: translate(-50%, -50%);
		height: 450px;
		display: table;
	}

	.brands {
		display: flex;
		justify-content: space-between;
		margin-left: 5%;
		margin-right: 5%;
	}

	.logos img {
		max-height: 60px;
		min-height: 30px;
	}

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
		padding-left: 50px;
		padding-right: 50px;
		padding-top: 50px;
	}

	.cam h6 {
		padding-top: 20px;
		padding-bottom: 30px;
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
`;

export default Crft;
