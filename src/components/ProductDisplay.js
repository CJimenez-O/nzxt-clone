import React from "react";
import styled from "styled-components";
import { FaCircle, FaShoppingCart } from "react-icons/fa";
import Products from "../products.json";
import { formatPrice } from "../helpers";

function ProductDisplay({ filter, title, details }) {
	const DisplayedProducts = Products.filter(
		(product) => product.category === filter
	);
	return (
		<DisplayWrapper>
			<div className="product-section">
				<div className="details">
					<h3>{title}</h3>
					<p>{details}</p>
				</div>
				<div className="products-display">
					{DisplayedProducts.map((product) => {
						return (
							<div className="product">
								<button className="cart-btn">
									<FaShoppingCart />
								</button>
								<div>
									<img className="prod-image" src={product.displayImage}></img>
									<h3 className="name">{product.name}</h3>
									<p className="sub">{product.sub}</p>
									<div className="selection">
										<h4>{formatPrice(product.price)}</h4>
										<div className="colors">
											<button className="black color-btn">
												<FaCircle />
											</button>
											<button className="white color-btn">
												<FaCircle />
											</button>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</DisplayWrapper>
	);
}

const DisplayWrapper = styled.div`
	.product-section {
		margin-top: 100px;
		margin-bottom: 100px;
		display: flex;
		gap: 50px;
		align-items: center;
		justify-content: center;
	}

	.details {
		width: 30%;
		text-align: center;
	}

	.details h3 {
		font-size: 35px;
	}

	.details p {
		font-size: 18px;
		letter-spacing: 1px;
		margin-top: 20px;
	}

	.products-display {
		display: flex;
		gap: 80px;
	}

	.cart-btn {
		z-index: 1;
		margin-left: 290px;
		margin-top: 20px;
		position: absolute;
		font-size: 20px;
		padding: 10px;
		padding-bottom: 5px;
		border-radius: 50px;
		border: none;
		background-color: #7f00f5;
		color: white;
		cursor: pointer;
	}

	.prod-image {
		height: 350px;
	}

	.name {
		margin-top: 10px;
	}

	.sub {
		margin-top: 2px;
		font-size: 14px;
		color: gray;
	}

	.selection {
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
	}

	.color-btn {
		border-radius: 50px;
		padding: 5px;
		padding-bottom: 2px;
		border: 1px solid black;
		margin-right: 10px;
		font-size: 15px;
		cursor: pointer;
	}

	.white {
		color: white;
	}
`;
export default ProductDisplay;
