import React from "react";

import styled from "styled-components";

function ProductFlexLeft({ title, description, image }) {
	return (
		<ProdFlex>
			<div className="product-flex">
				<div className="image-display">
					<img className="left-img" src={image}></img>
				</div>
				<div className="image-description">
					<h2 className="title">{title}</h2>
					<p className="descript">{description}</p>
				</div>
			</div>
		</ProdFlex>
	);
}

const ProdFlex = styled.div`
	margin-top: 50px;
	background-color: #f2f3f5;

	.product-flex {
		display: flex;
		gap: 40px;
		align-items: center;
		justify-content: center;
		margin-left: 10%;
		margin-right: 10%;
	}

	.left-img {
		height: 500px;
	}

	.title {
		font-size: 3rem;
		color: #313234;
	}

	.descript {
		padding-top: 30px;
		letter-spacing: 1px;
		width: 90%;
		line-height: 24px;
		font-weight: 400;
	}

	@media (max-width: 690px) {
		.image-display {
			left: 5% !important;
		}
	}

	@media (max-width: 790px) {
		.product-flex {
			display: block;
			padding-bottom: 40px;
		}

		.image-display {
			align-items: center;
			justify-content: center;
			position: relative;
			left: 20%;
		}

		.image-description {
			align-items: center;
			justify-content: center;
		}

		.descript {
			width: 80%;
		}
	}

	@media (max-width: 1200px) {
		.left-img {
			height: 350px;
		}

		.title {
			font-size: 2.5rem;
		}

		.descript {
		}
	}
`;

export default ProductFlexLeft;
