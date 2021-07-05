import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaCircle, FaShoppingCart } from "react-icons/fa";
import Products from "../products.json";
import { formatPrice } from "../helpers";
import { useCartContext } from "../context/cart_context";

function ProductDisplay({ filter, title, details, height }) {
	const { addToCart } = useCartContext();
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
						const {
							id,
							displayImage,
							name,
							sub,
							price,
							color,
							stock,
							cartImage,
						} = product;
						const amount = 1;
						return (
							<div className="product">
								<button
									onClick={() =>
										addToCart(cartImage, name, price, color, id, amount, stock)
									}
									className="cart-btn"
								>
									<FaShoppingCart />
								</button>
								<div className="prod-content">
									<Link
										to={id}
										style={{
											textDecoration: "none",
											color: "black",
										}}
										className="product-link-item"
									>
										<img className="prod-image" src={displayImage}></img>
										<h3 className="name">{name}</h3>
										<p className="sub">{sub}</p>
									</Link>
									<div className="selection">
										<h4>{formatPrice(price)}</h4>
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
		margin-left: 5%;
		margin-right: 5%;
		width: 90%;
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
		width: 60%;
	}

	.selection {
		display: flex;
		gap: 200px;
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

	@media (max-width: 690px) {
	}

	@media (max-width: 1090px) {
		margin-top: 40px;

		.details p {
			width: 80%;
			margin: auto;
		}
		.product-section {
			display: grid;
			justify-items: center;
			width: 100%;
			margin: auto;
		}

		.details {
			width: 100%;
		}

		.products-display {
			display: grid;
			margin: auto;
			margin: 30px auto;
			position: relative;
		}

		.product {
			margin: auto;
			align-items: center;
			justify-content: center;
			margin: auto;
		}

		.prod-content {
			align-items: center;
			justify-items: center;
		}

		.selection {
			gap: 150px;
		}
	}
`;
export default ProductDisplay;
