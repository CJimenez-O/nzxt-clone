import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Meet() {
	return (
		<OwnerSection>
			<div className="founder-section">
				<div className="founder-decript">
					<h3>Meet the Founder</h3>
					<p className="founder-quote">
						<span className="bolded">
							We love building PCs and the people who build them.
						</span>
						That's why we develop and continuously evolve products of the
						highest quality: to make creating extraordinary PCs achievable and
						fun for all gamers.
					</p>
					<Link className="founder-button" style={{ textDecoration: "none" }}>
						Read More{" "}
					</Link>
				</div>
				<div className="founder-image">
					<img src="https://nzxt.com/assets/cms/34299/1621553076-johnny.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=464&w=464"></img>
				</div>
			</div>
		</OwnerSection>
	);
}

const OwnerSection = styled.div`
	background-color: #f2f3f5;
	align-items: center;
	margin-top: 40rem;

	.founder-section {
		display: flex;
		gap: 2rem;
		margin-right: 12%;
		margin-left: 12%;
	}

	.founder-decript {
		padding-top: 7rem;
		max-width: 32rem;
	}

	.founder-decript h3 {
		font-size: 50px;
		padding-bottom: 30px;
	}

	.bolded {
		font-weight: 800;
	}

	.founder-quote {
		padding-top: 10px;
		letter-spacing: 1px;
		font-weight: 400;
		line-height: 1.3rem;
		margin-bottom: 40px;
	}

	.founder-button {
		font-size: 16px;
		background-color: #383740;
		border-radius: 25px;
		color: white;
		padding-top: 15px;
		padding-bottom: 15px;
		padding-right: 25px;
		padding-left: 25px;
	}

	img {
		height: 500px;
	}

	@media (max-width: 1200px) {
		margin-top: 95rem;

		.founder-section {
			display: block;
			text-align: center;
			align-items: center;
			position: relative;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		.founder-decript {
			left: 35%;
			margin-top: 13rem;
			position: absolute;
			transform: translate(-50%, -50%);
		}

		.founder-decript h3 {
			font-size: 30px;
			padding-bottom: 10px;
		}

		.founder-button {
			padding-left: 60px;
			padding-right: 60px;
		}

		img {
			border-radius: 5px;
			height: 400px;
			text-align: center;
			left: 35%;
			top: 0px;
			position: absolute;
			transform: translate(-50%, -50%);
		}
	}
`;

export default Meet;
