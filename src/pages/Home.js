import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Home() {
	return (
		<MainContainer>
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
		</MainContainer>
	);
}

const MainContainer = styled.div`
	align-items: center;
	justify-content: center;
	background-color: black;
	color: white;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding-top: 140px;

	.promo-text {
		padding-top: 30px;
		padding-bottom: 50px;
		font-size: 40px;
		padding-right: 5%;
		padding-left: 5%;
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

	@media (max-width: 990px) {
		padding-top: 90px;

		.product {
			height: 400px;
		}
	}
`;

export default Home;
