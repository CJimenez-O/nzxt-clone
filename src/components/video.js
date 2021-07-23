import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Video({ upper, title, lower, url, link }) {
	return (
		<VideoStream>
			<div className="video-stream">
				<div className="video-decription">
					<h6>{upper}</h6>
					<h3>{title}</h3>
					<h6 className="keep">{lower}</h6>
					<Link to={link} className="button" style={{ textDecoration: "none" }}>
						Shop Now
					</Link>
				</div>
				<video playsInline autoPlay loop muted>
					<source src={url} />
				</video>
			</div>
		</VideoStream>
	);
}

const VideoStream = styled.div`
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

	@media (max-width: 990px) {
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
`;

export default Video;
