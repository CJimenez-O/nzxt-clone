import React from "react";
import styled from "styled-components";

function ProductHero({ title, subtitle, image }) {
	return (
		<ProdHero>
			<div className="hero">
				<div className="promo-text">
					<h1 className="title">{title}</h1>
					<h5 className="subtitle">{subtitle}</h5>
				</div>
				<div>
					<img className="product-img" src={image}></img>
				</div>
			</div>
		</ProdHero>
	);
}

const ProdHero = styled.div`
	/* landing page */
	.hero {
		align-items: center;
		justify-content: center;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding-top: 140px;
		width: 100%;
	}

	.promo-text {
		padding-top: 40px;
		padding-bottom: 40px;
		font-size: 30px;
		padding-right: 5%;
		padding-left: 5%;
		color: #313234;
	}

	.title {
		margin-left: 20%;
		margin-right: 20%;
		border-bottom: 2px solid lightgray;
		padding-bottom: 10px;
		font-size: 5rem;
	}

	.subtitle {
		padding-top: 10px;
		margin-bottom: 20px;
	}

	.product-img {
		height: 350px;
	}

	@media (max-width: 790px) {
		.promo-text {
			padding-top: 0px;
		}

		.title {
			font-size: 2rem !important;
		}

		.subtitle {
			font-size: 1.5rem !important;
		}

		.product-img {
			height: 180px !important;
		}
	}

	@media (max-width: 1200px) {
		.title {
			font-size: 3rem;
		}
		.subtitle {
			font-size: 1.5rem;
		}

		.product-img {
			height: 250px;
		}
	}
`;

export default ProductHero;
