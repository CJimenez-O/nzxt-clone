import React from "react";
import styled from "styled-components";

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
								<h4 className="list-title">Every Voice Matters</h4>
								<p className="list-details">
									We're honest, we're vocal, and we say our piece.
								</p>
							</li>
							<li>
								<h4 className="list-title">Every Voice Matters</h4>
								<p className="list-details">
									We're honest, we're vocal, and we say our piece.
								</p>
							</li>
						</ul>
					</div>
					<div className="import-list">
						<ul>
							<li>
								<h4 className="list-title">Every Voice Matters</h4>
								<p className="list-details">
									We're honest, we're vocal, and we say our piece.
								</p>
							</li>
							<li>
								<h4 className="list-title">Every Voice Matters</h4>
								<p className="list-details">
									We're honest, we're vocal, and we say our piece.
								</p>
							</li>
							<li>
								<h4 className="list-title">Every Voice Matters</h4>
								<p className="list-details">
									We're honest, we're vocal, and we say our piece.
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
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
		position: relative;
		font-size: 40px;
		margin-left: 50px;
	}

	.import-lists {
		display: flex;
		gap: 100px;
		align-items: center;
		justify-content: center;
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
`;

export default Company;
