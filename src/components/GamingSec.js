import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function GamingSec() {
	return (
		<Wrapper style={{ display: "none" }}>
			<div className="sub-menu">
				<h4 className="nav-title">PREBUILT PCS</h4>
				<div className="link-list">
					<Link
						to="/collection/starter-series"
						className="link"
						style={{ "text-decoration": "none" }}
					>
						<p>Starter Series</p>
						<p className="sub">Prebuilt Gaming PC</p>
					</Link>
					<Link
						to="/collection/creator"
						className="link"
						style={{ "text-decoration": "none" }}
					>
						<p>Creator PC</p>
						<p className="sub">Prebuilt Content Creation PC</p>
					</Link>
				</div>
				<div className="link-list">
					<Link
						to="/collection/streaming"
						className="link"
						style={{ "text-decoration": "none" }}
					>
						<p>Streaming PC</p>
						<p className="sub">Prebuilt Streaming PC</p>
					</Link>
					<Link
						to="/collection/h1-mini-pc"
						className="link"
						style={{ "text-decoration": "none" }}
					>
						<p>H1 Mini PC</p>
						<p className="sub">Prebuilt Mini ITX</p>
					</Link>
				</div>
			</div>
			<div className="promo">
				<Link className="promo-link" style={{ "text-decoration": "none" }}>
					<p className="promo-title">New to PC gaming? </p>
					<p className="promo-details">Check out our Starter PC family</p>
				</Link>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	align-items: center;
	justify-content: center;
	background-color: white;
	position: fixed;
	min-width: 450px;
	left: 20%;
	margin-top: 110px;
	z-index: 41;
	padding-bottom: 0px;
	border-radius: 15px;

	.sub-menu {
		padding-top: 20px;
		margin-left: 10%;
		margin-right: 5%;
		width: 90%;
	}

	.link-list {
		display: flex;
		gap: 80px;
		color: black;
	}

	.nav-title {
		color: gray;
	}

	.link {
		color: black;
		margin-top: 20px;
		font-size: 15px;
		font-weight: 600;
		margin-bottom: 20px;
	}

	.sub {
		color: gray;
		font-size: 12px;
	}

	.promo {
		background-color: #2f2e34;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		padding-bottom: 30px;
		padding-top: 30px;
		padding-left: 10%;
	}

	.promo-link {
		color: white;
	}

	.promo-title {
		margin-bottom: 5px;
		font-size: 15px;
		font-weight: 600;
	}

	.promo-details {
		font-size: 15px;
		font-weight: 600;
	}
`;

export default GamingSec;
