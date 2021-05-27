import React from "react";
import styled from "styled-components";

function Home() {
	return (
		<MainContainer>
			<div className="item">
				<div className="main_item_content">
					<div className="description">
						<h6>INTRODUCING THE NEW</h6>
						<h3 className="title">STARTER PC SERIES</h3>
						<p>
							Your PC gaming journey starts here. Built by the pros with a
							2-year warranty.
						</p>
						<h6>STARTING AT</h6>
						<h3>$999</h3>
						<button>EXPLORE</button>
					</div>
					<div className="image">
						<img src="https://cdn.letsbld.com/landing-pages/144/sections/439/background_5fadeaaedc8e8.png" />
					</div>
				</div>
			</div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
		</MainContainer>
	);
}

const MainContainer = styled.div`
	display: grid;
	justify-content: center;
	grid-gap: 20px;
	grid-template-columns: repeat(auto-fill, minmax(331px, 1fr));
	padding-top: 6px;
	background-color: #f5f5f5;

	.item {
		background-color: #fff;
		box-shadow: 0 0 6px 4px rgb(0 0 0 / 11%);
		height: 85%;
		overflow: hidden;
	}

	.main_item_content {
		padding-bottom: 20px;
		padding-left: 20px;
		font-size: 14px;
		width: 100%;
		height: 100%;
	}

	.description {
		max-width: 200px;
		font-size: 18px;
		position: absolute;
		top: 250px;
	}

	.title {
		color: #51007a;
		font-size: 30px;
	}

	.description h3 {
		font-size: 24px;
		padding-top: 5px;
	}

	.description p {
		padding-top: 10px;
		padding-bottom: 25px;
		font-size: 14px;
		padding-right: 20px;
	}

	.description button {
		margin-top: 10px;
		padding: 10px 50px;
		border-radius: 5px;
		border: none;
		background-color: #51007a;
		color: white;
		font-weight: 600;
	}

	.image {
		position: relative;
		overflow: hidden;
		margin-left: 150px;
	}
`;

export default Home;
