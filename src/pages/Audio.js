import React from "react";
import styled from "styled-components";
import Suggestion from "../components/suggest";
import Footer from "../components/Footer";

function Audio() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<AudioContainer>
			<div className="wrapper">
				<div className="audio-content">
					<div className="audio-details">
						<h3 className="title">Audio Will Return</h3>
						<p>
							Commitment to quality is important at NZXT and we have an amazing
							community that holds us accountable if we stray from that
							commitment.
						</p>
						<p>
							In late September of 2019, the NZXT AER Headset, STND, and MXER
							were not living up to the quality standards that we strive for.
							We’ve decided to go back to the drawing board to make them even
							better.
						</p>
						<p>
							The good news is, we’ve partnered with a new manufacturer that has
							taken on our audio product line and shares our passion for
							creating high-quality products—no compromises.
						</p>
						<p>
							As of today, we are officially canceling the currently announced
							line of audio products. We’re hard at work on a new audio line and
							we’ll share more with you in our pursuit for perfection.
						</p>
						<p>
							Thanks for your continued support and patience. Following through
							on what we promise is critical to us—we promise to deliver an
							amazing audio experience and we look forward to sharing updates
							with you along the way.
						</p>
						<p>
							<span>•</span> NZXT 💜
						</p>
					</div>
					<div className="audio-image">
						<img
							src="https://nzxt.com/assets/cms/34299/1619817914-blueprint-2x.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
							alt=""
						></img>
					</div>
				</div>
			</div>
			<Suggestion />
			<Footer />
		</AudioContainer>
	);
}

const AudioContainer = styled.div`
	padding-top: 140px;

	background-color: #f2f3f5;

	.audio-content {
		display: flex;
		gap: 50px;
		align-items: center;
		justify-content: center;
		margin-left: 5%;
		margin-right: 5%;
		margin-bottom: 80px;
		padding-top: 50px;
	}

	.audio-details {
		width: 40%;
	}

	.title {
		font-size: 50px;
	}

	.audio-details p {
		padding-top: 25px;
		font-size: 17px;
		letter-spacing: 1px;
		line-height: 22px;
	}

	.audio-details span {
		color: #7f00f5;
	}

	img {
		height: 450px;
	}

	@media (max-width: 790px) {
		img {
			height: 300px;
			display: block;
			width: 300px;
			margin: auto;
		}
	}

	@media (max-width: 990px) {
		.audio-content {
			display: block;
		}

		.audio-details {
			align-items: center;
			justify-content: center;
			position: relative;
			width: 100%;
		}

		img {
			display: block;
			width: 400px;
			margin: auto;
		}
	}
`;

export default Audio;
