import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../helpers";
import { FaWindowClose, FaRegTrashAlt } from "react-icons/fa";

function CartSideBar() {
	const {
		isCartOpen,
		closeCart,
		total_items,
		total_amount,
		cart,
		removeItem,
	} = useCartContext();

	return (
		<CartBar
			style={{
				display: `${isCartOpen ? "block" : "none"}`,
			}}
		>
			<div className="userCart">
				<h3>Your Cart ({total_items})</h3>
				<div className="close-btn">
					<button className="closeCart" onClick={closeCart}>
						<h3>
							<FaWindowClose />
						</h3>
					</button>
				</div>
			</div>

			{/* when cart is empty  */}

			<div
				className="empty"
				style={{
					display: `${total_items ? "none" : "block"}`,
				}}
			>
				<h3>Your Cart is empty</h3>
				<p>Find Products you'll love</p>
				<div className="button-links">
					<div className="browse">
						<Link
							className="browse-btn"
							to="/"
							style={{ textDecoration: "none" }}
						>
							Keep Browsing
						</Link>
					</div>
					<div className="build">
						<Link
							className="build-btn"
							to="/"
							style={{ textDecoration: "none" }}
						>
							Create Build
						</Link>
					</div>
				</div>
			</div>
			<div
				style={{
					display: `${total_items ? "none" : "block"}`,
				}}
				className="promo"
			>
				<h4>You're $25 away from free shipping!</h4>
				<p>(Excludes BLD and Gaming PCs)</p>
			</div>

			{/* when cart has items */}
			<div
				style={{
					display: `${total_items ? "block" : "none"}`,
				}}
				className="cart-items-selected"
			>
				{cart.map((cart) => {
					return (
						<div>
							<div className="total-items-added">
								<div className="item-added">
									<div className="prod-item-info">
										<div>
											<img className="item-image" src={cart.image}></img>
										</div>
										<div className="item-name">
											<h4>{cart.name}</h4>
											<h4>{cart.color}</h4>
										</div>
									</div>
									<div className="remove-item">
										<button onClick={() => removeItem(cart.id)}>
											<FaRegTrashAlt />
										</button>
									</div>
								</div>
								<div className="quant-added">
									<div className="quant-selecter">
										<button className="decrease amt-btn">-</button>
										<p>{cart.amount}</p>
										<button className="increase amt-btn">+</button>
									</div>
									<div className="item-pricing"> {formatPrice(cart.price)}</div>
								</div>
							</div>
							<div className="checkout-info">
								<div className="amount-subtotal">
									<div>
										<h3>Subtotal</h3>
									</div>
									<div>{formatPrice(total_amount)}</div>
								</div>
								<div className="amount-taxes">
									<div>
										<p>Taxes</p>
									</div>
									<div>
										<p>Calculated at checkout</p>
									</div>
								</div>
								<div className="amount-shipping">
									<div>
										<p>Estimated shipping</p>
									</div>
									<div>FREE</div>
								</div>
								<button className="checkout-btn">Proceed to Checkout</button>
							</div>
						</div>
					);
				})}
			</div>
		</CartBar>
	);
}

const CartBar = styled.div`
	background-color: white;
	width: 35%;
	left: 65%;
	position: fixed;
	height: 100%;
	z-index: 42;

	.userCart {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 90px;
		padding-top: 20px;
		padding-bottom: 20px;
		letter-spacing: 1px;
		font-size: 25px;
		margin-left: 5%;
		margin-right: 5%;
		border-bottom: 1px solid lightgray;
	}

	.closeCart {
		border: none;
		background-color: transparent;
		font-size: 25px;
		cursor: pointer;
	}

	.close-btn {
		padding-top: 8px;
	}

	.empty {
		text-align: center;
		align-items: center;
		font-size: 20px;
		padding-bottom: 35px;
		padding-top: 20px;
		margin-left: 15%;
		margin-right: 15%;
		border-bottom: 1px solid lightgray;
	}
	.promo {
		text-align: center;
		align-items: center;
		padding-bottom: 20px;
		padding-top: 20px;
	}

	.button-links {
		margin-top: 30px;
	}

	.browse-btn {
		color: white;
		background-color: gray;
		border-radius: 25px;
		padding-left: 20px;
		padding-right: 20px;
		padding-top: 10px;
		padding-bottom: 10px;
		font-size: 16px;
		font-weight: 600;
		letter-spacing: 1px;
	}

	.build {
		margin-top: 25px;
	}

	.build-btn {
		color: white;
		background-color: gray;
		border-radius: 25px;
		padding-left: 30px;
		padding-right: 30px;
		padding-top: 10px;
		padding-bottom: 10px;
		font-size: 16px;
		font-weight: 600;
		letter-spacing: 1px;
	}

	.cart-items-selected {
		margin-top: 20px;
	}

	.total-items-added {
		height: 60vh;
	}

	.item-added {
		display: flex;
		justify-content: space-between;
		margin-left: 5%;
		margin-right: 5%;
	}

	.prod-item-info {
		display: flex;
		gap: 30px;
	}
	.item-image {
		height: 80px;
	}

	.item-name h4 {
		font-size: 22px;
		padding-top: 5px;
	}

	.remove-item p {
		padding-top: 20px;
		font-size: 22px;
		cursor: pointer;
	}

	.quant-added {
		display: flex;
		justify-content: space-between;
		width: 70%;
		margin-right: 5%;
		margin-left: 25%;
	}

	.quant-selecter {
		display: flex;
		gap: 15px;
		margin-left: 15px;
		border: 1px solid lightgray;
		border-radius: 10px;
		padding: 15px;
	}

	.amt-btn {
		border: none;
		background-color: transparent;
		font-size: 16px;
		font-weight: 400;
	}

	.item-pricing {
		font-size: 16px;
		margin-top: 20px;
		color: gray;
		letter-spacing: 1px;
	}

	.checkout-info {
		padding-left: 5%;
		padding-right: 5%;
		background-color: #f2f3f5;
		letter-spacing: 0.5px;
		font-size: 16px;
	}
	.amount-subtotal {
		display: flex;
		justify-content: space-between;
		padding-top: 25px;
	}
	.amount-taxes {
		display: flex;
		justify-content: space-between;
		padding-top: 10px;
		padding-bottom: 10px;
		font-size: 13px;
		font-weight: 600;
	}
	.amount-shipping {
		display: flex;
		justify-content: space-between;
		font-size: 13px;
		font-weight: 600;
	}

	.checkout-btn {
		text-align: center;
		width: 98%;
		margin-right: 1%;
		margin-left: 1%;
		margin-top: 25px;
		margin-bottom: 25px;
		border-radius: 20px;
		border: none;
		padding-top: 10px;
		padding-bottom: 10px;
		font-size: 16px;
		letter-spacing: 0.5px;
		font-weight: 600;
		background-color: #7f00f5;
		color: white;
	}

	@media (max-width: 690px) {
		width: 100% !important;
		left: 0 !important;

		.userCart {
			gap: 150px;
		}
	}

	@media (max-width: 990px) {
		width: 50%;
		left: 50%;
	}
`;

export default CartSideBar;
