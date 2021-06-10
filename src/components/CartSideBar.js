import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { FaWindowClose } from "react-icons/fa";

function CartSideBar() {
	const { isCartOpen, closeCart } = useCartContext();
	return (
		<CartBar
			style={{
				display: `${isCartOpen ? "block" : "none"}`,
			}}
		>
			<div className="userCart">
				<h3>Your Cart (0)</h3>
				<div className="close-btn">
					<button className="closeCart" onClick={closeCart}>
						<h3>
							<FaWindowClose />
						</h3>
					</button>
				</div>
			</div>
			<div className="empty">
				<h3>Your Cart is empty</h3>
				<p>Find Products you'll love</p>
				<div className="button-links">
					<div className="browse">
						<Link className="browse-btn" style={{ textDecoration: "none" }}>
							Keep Browsing
						</Link>
					</div>
					<div className="build">
						<Link className="build-btn" style={{ textDecoration: "none" }}>
							Create Build
						</Link>
					</div>
				</div>
			</div>
			<div className="promo">
				<h4>You're $25 away from free shipping!</h4>
				<p>(Excludes BLD and Gaming PCs)</p>
			</div>
		</CartBar>
	);
}

const CartBar = styled.div`
	background-color: white;
	width: 35%;
	left: 65%;
	margin-top: 110px;
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
`;

export default CartSideBar;
