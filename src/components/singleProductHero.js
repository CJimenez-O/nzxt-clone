import React from "react";
import styled from "styled-components";
import { FaCircle, FaShoppingCart } from "react-icons/fa";

function SingleProductHero() {
	return (
		<Wrapper>
			<div className="single-product-page">
				<div className="display-images">
					<div>
						<img
							className="main-image"
							src="https://nzxt.com/assets/cms/34299/1616124321-streamingpcwhttomohawkmobohero.png?bg=F5F5F8&dpr=2&fit=crop&fm=webp&h=576&w=576"
						></img>
					</div>
					<div className="secondary-images">
						<img
							className="sub-image"
							src="https://nzxt.com/assets/cms/34299/1616124338-streamingpcwhttomohawkmobostraight.png?bg=F5F5F8&dpr=2&fit=crop&fm=webp&h=576&w=576"
						></img>
						<img
							className="sub-image"
							src="https://nzxt.com/assets/cms/34299/1616124313-streamingpcwhttomohawkmobofront.png?bg=F5F5F8&dpr=2&fit=crop&fm=webp&h=576&w=576"
						></img>
					</div>
				</div>
				<div className="product-details">
					<div className="product-header">
						<div className="prod-name">
							<h4>Streaming PC</h4>
							<p>Prebuilt Streaming PC</p>
						</div>
						<div className="price">
							<p>$1,999.00</p>
						</div>
					</div>
					<div className="color-selection">
						<p>Color:</p>
						<div className="colors">
							<button className="black color-btn">
								<FaCircle />
							</button>
							<button className="white color-btn">
								<FaCircle />
							</button>
						</div>
					</div>
					<div className="add-to-cart">
						<div className="amount">
							<p>Qty</p>
							<select></select>
						</div>
						<button className="cart-button">Add to cart</button>
					</div>
					<div className="details">
						<div className="detail-title">
							<span>Details</span>
						</div>
						<p className="product-info">
							Alongside the GEFORCE RTX 3070 graphics card, all components in
							the Streaming PC were hand-selected to run the most popular games
							beautifully while smoothly operating your stream.
						</p>
					</div>
					<div className="inside"></div>
				</div>
			</div>
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
		gap: 40px;
		margin-top: 10px;
		margin-bottom: 10px;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 15px;
		border-top: 1px solid lightgray;
		background-color: gray;
		border-radius: 10px;
		width: 40%;
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
`;

export default SingleProductHero;
