import React from "react";
import styled from "styled-components";
import { FaCircle, FaShoppingCart } from "react-icons/fa";
import Products from "../products.json";
import { formatPrice } from "../helpers";
import { useCartContext } from "../context/cart_context";

function SingleProductHero({ filter }) {
	const { addToCart, whiteChosen, blackChosen } = useCartContext();
	const DisplayedProducts = Products.filter(
		(product) => product.name === filter
	);

	console.log(DisplayedProducts);
	return (
		<Wrapper>
			{DisplayedProducts.map((product) => {
				const {
					id,
					images,
					name,
					sub,
					price,
					description,
					inside,
					color,
					stock,
					cartImage,
				} = product;
				let amount = 1;
				return (
					<div className="single-product-page">
						<div className="display-images">
							<div className="primary-disply-img">
								<img className="main-image" src={images[0]}></img>
							</div>
							<div className="secondary-images">
								<img className="sub-image" src={images[1]}></img>
								<img className="sub-image" src={images[2]}></img>
							</div>
						</div>

						<div className="product-details">
							<div className="product-header">
								<div className="prod-name">
									<h4>{name}</h4>
									<p>{sub}</p>
								</div>
								<div className="price">
									<p>{formatPrice(price)}</p>
								</div>
							</div>
							<div className="color-selection">
								<p>Color:</p>
								<div className="colors">
									<button onClick={blackChosen} className="black color-btn">
										<FaCircle />
									</button>
									<button onClick={whiteChosen} className="white color-btn">
										<FaCircle />
									</button>
								</div>
							</div>
							<div className="add-to-cart">
								<div className="amount">
									<p className="quant">QTY</p>
									<select
										type="text"
										className="selector"
										onChange={(event) =>
											(amount = parseInt(event.target.value) * 1)
										}
									>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
								</div>
								<button
									onClick={() =>
										addToCart(cartImage, name, price, color, id, amount, stock)
									}
									className="cart-button"
								>
									Add to cart
								</button>
							</div>
							<div className="details">
								<div className="detail-title">
									<span>Details</span>
								</div>
								<p className="product-info">{description}</p>
							</div>
							<div className="performance">
								<div className="perform-title">
									<span>Performance</span>
								</div>
								<div className="games-perform">
									<div className="game">
										<img
											className="game-logo"
											src="https://nzxt.com/assets/cms/34299/1620400903-modern-warfare-alt.png?auto=format&dpr=2&fit=clamp&fm=webp&h=127&w=127"
										></img>
										<h4>
											<span className="fps">120</span> FPS
										</h4>
									</div>
									<div className="game">
										<img
											className="game-logo"
											src="https://nzxt.com/assets/cms/34299/1620400487-fortnite-1.png?auto=format&dpr=2&fit=clamp&fm=webp&h=127&w=127"
										></img>
										<h4>
											<span className="fps">120</span> FPS
										</h4>
									</div>
								</div>
								<div className="games-perform">
									<div className="game">
										<img
											className="game-logo"
											src="https://nzxt.com/assets/cms/34299/1620400899-minecraft-logo.png?auto=format&dpr=2&fit=clamp&fm=webp&h=127&w=127"
										></img>
										<h4>
											<span className="fps">120</span> FPS
										</h4>
									</div>
									<div className="game">
										<img
											className="game-logo"
											src="https://nzxt.com/assets/cms/34299/1620401520-gta.png?auto=format&dpr=2&fit=clamp&fm=webp&h=127&w=127"
										></img>
										<h4>
											<span className="fps">120</span> FPS
										</h4>
									</div>
								</div>
								<p className="estimated-perform">Estimated Performance</p>
								<div className="quality-options">
									<div className="quality-btn">
										<div className="1080">
											<button className="quality-chosen">1080</button>
										</div>
										<div className="1440">
											<button className="quality">1440</button>
										</div>
									</div>
								</div>
							</div>
							<div className="inside">
								<div className="perform-title">
									<span>Inside the box</span>
								</div>
								<div className="items-list">
									<div className="items">
										<p className="item-inside">{inside}</p>
										<p className="item-quant">1</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</Wrapper>
	);
}
const Wrapper = styled.div`
	padding-top: 180px;
	margin-bottom: 50px;

	.single-product-page {
		display: flex;
		gap: 80px;
		margin-left: 10%;
		margin-right: 10%;
		width: 80%;
	}

	.main-image {
		height: 700px;
	}

	.secondary-images {
		margin-top: 20px;
		display: flex;
		gap: 20px;
	}

	.sub-image {
		height: 340px;
	}

	.product-details {
		width: 30%;
	}

	.product-header {
		display: flex;
		gap: 30px;
	}

	.prod-name {
		margin-bottom: 20px;
	}

	.prod-name h4 {
		font-size: 35px;
		letter-spacing: 0.5px;
		margin-bottom: 5px;
	}

	.prod-name p {
		font-weight: 600;
		letter-spacing: 0.5px;
		color: gray;
	}

	.price {
		margin-top: 40px;
		letter-spacing: 0.5px;
		font-weight: 800;
	}

	.color-selection {
		padding-top: 20px;
		padding-bottom: 20px;
		border-top: 1px solid lightgray;
	}
	.color-btn {
		border-radius: 50px;
		padding: 5px;
		margin-top: 10px;
		padding-top: 6px;
		padding-bottom: 1px;
		border: 1px solid black;
		margin-right: 10px;
		font-size: 22px;
		cursor: pointer;
	}

	.white {
		color: white;
	}

	.add-to-cart {
		padding-top: 20px;
		padding-bottom: 30px;
		border-top: 1px solid lightgray;
	}

	.amount {
		display: flex;
		margin-top: 10px;
		margin-bottom: 15px;
		width: 40%;
	}

	.quant {
		background-color: #f2f3f5;
		color: gray;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		border: 1px solid gray;
		padding-top: 8px;
		padding-bottom: 8px;
		padding-left: 10px;
		padding-right: 20px;
	}

	.selector {
		border: 1px solid gray;
		padding-right: 20px;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		padding-top: 8px;
		padding-bottom: 8px;
		padding-left: 5px;
	}

	.selector:focus {
		border: 1px solid red !important;
	}

	.cart-button {
		padding-top: 10px;
		padding-bottom: 10px;
		padding-right: 7.5rem;
		padding-left: 7.5rem;
		font-size: 18px;
		border-radius: 20px;
		color: white;
		background-color: #7f00f5;
		border: none;
		font-weight: 400;
		letter-spacing: 1px;
		cursor: pointer;
	}

	.details {
		margin-bottom: 30px;
	}

	.detail-title {
		width: 100%;
		text-align: center;
		border-bottom: 1px solid lightgray;
		line-height: 0.1em;
		margin: 10px 0 20px;
		color: lightgray;
	}

	.detail-title span {
		background: #fff;
		padding: 0 10px;
		font-size: 20px;
		font-weight: 600;
		letter-spacing: 0.5px;
	}

	.product-info {
		line-height: 20px;
		font-size: 15px;
		letter-spacing: 0.5px;
	}

	.performance {
		margin-bottom: 50px;
	}

	.perform-title {
		width: 100%;
		text-align: center;
		border-bottom: 1px solid lightgray;
		line-height: 0.1em;
		margin: 10px 0 20px;
		color: lightgray;
		margin-bottom: 50px;
	}

	.perform-title span {
		background: #fff;
		padding: 0 10px;
		font-size: 20px;
		font-weight: 600;
		letter-spacing: 0.5px;
	}

	.games-perform {
		display: flex;
		justify-content: center;
		gap: 20px;
		margin-top: 20px;
	}

	.game {
		text-align: center;
		border: 1px solid lightgray;
		box-shadow: 0px 0px 5px lightgray;
		padding: 10px 25px;
		border-radius: 10px;
	}

	.game-logo {
		height: 80px;
	}

	.fps {
		color: #26b307;
	}

	.estimated-perform {
		text-align: center;
		font-size: 10px;
		margin-top: 30px;
	}

	.quality-options {
		justify-content: center;
	}

	.quality-btn {
		display: flex;
		gap: 40px;
		justify-content: center;
		background-color: #f2f3f5;
		width: 70%;
		margin-right: 15%;
		margin-left: 15%;
		border-radius: 20px;
		padding-top: 5px;
		padding-bottom: 5px;
		margin-top: 5px;
	}

	.quality {
		border: none;
		background-color: transparent;
		padding: 5px 20px;
		font-size: 16px;
		letter-spacing: 0.5px;
		padding-top: 5px;
		cursor: pointer;
	}

	.quality-chosen {
		background-color: white !important;
		border: 1px solid lightgray !important;
		box-shadow: 0px 0px 5px lightgray;
		padding: 5px 20px;
		border-radius: 20px;
		font-size: 16px;
		letter-spacing: 0.5px;
		cursor: pointer;
	}

	.items {
		display: flex;
		justify-content: space-between;
		font-size: 17px;
		font-weight: 600;
		letter-spacing: 0.5px;
		color: #4d4d4d;
	}

	@media (max-width: 670px) {
		.main-image {
			height: 400px !important;
		}
	}

	@media (max-width: 990px) {
		padding-top: 120px;
	}

	@media (max-width: 1270px) {
		.primary-display-img {
			display: block;
			margin: auto;
		}
		.single-product-page {
			display: block;
		}

		.secondary-images {
			display: none;
		}

		.product-details {
			width: 100%;
		}

		.quality-options {
		}

		.main-image {
			display: block;
			margin: auto;
			height: 600px;
		}
	}
`;

export default SingleProductHero;
