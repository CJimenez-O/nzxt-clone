import React from "react";
import styled from "styled-components";

function Suggestion() {
	return (
		<SuggestProd>
			<div>
				<h2 className="like">You may also like</h2>
			</div>
			<div className="products">
				<div className="product-1">
					<img
						className="product-img"
						src="https://nzxt.com/assets/cms/34299/1616123904-creatorblack1.png?ar=1%3A1&auto=format&fit=crop&fm=webp&h=400&w=400"
					></img>
					<h3 className="name">Creater PC</h3>
					<p className="sub">A prebuilt creature with high performace specs</p>
					<p className="price">$3,999.00</p>
				</div>
				<div className="product-1">
					<img
						className="product-img"
						src="https://nzxt.com/assets/cms/34299/1615983328-whtstarterpcplus3quarterview.png?ar=1%3A1&auto=format&dpr=2&fit=crop&fm=webp&h=400&w=400"
					></img>
					<h3 className="name">Starter Pro</h3>
					<p className="sub">Comes with upgraded CPU & graphics card</p>
					<p className="price">$1,399.00</p>
				</div>
				<div className="product-1">
					<img
						className="product-img"
						src="https://nzxt.com/assets/cms/34299/1615983718-emberpcwhtgigabyte1660superochero.png?ar=1%3A1&auto=format&fit=crop&fm=webp&h=400&w=400"
					></img>
					<h3 className="name">Starter Plus</h3>
					<p className="sub">Built by experts for a competative advantage</p>
					<p className="price">$1,299.00</p>
				</div>
			</div>
		</SuggestProd>
	);
}

const SuggestProd = styled.div`
	.products {
		align-items: center;
		justify-content: center;
		display: flex;
		gap: 50px;
		padding-top: 50px;
		margin-bottom: 50px;
		margin-left: 5%;
		margin-right: 5%;
	}

	.like {
		color: #4a4949;
		font-size: 3.5rem;
		margin-left: 10%;
		margin-right: 10%;
		padding-bottom: 20px;
		border-bottom: 1px solid darkgray;
	}

	.product-img {
		height: 300px;
		background-color: #f2f3f5;
		padding: 20px;
		border-radius: 5px;
	}

	.name {
		padding-bottom: 10px;
	}

	.sub {
		padding-bottom: 10px;
		color: gray;
		width: 80%;
	}

	.price {
		font-weight: 600;
	}
`;

export default Suggestion;
