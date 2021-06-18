import React from "react";
import styled from "styled-components";

function Promo() {
	return (
		<Ad>
			<p>Free shipping over $25 (excluding BLD Gaming PCs).</p>
		</Ad>
	);
}

const Ad = styled.div`
	align-items: center;
	justify-content: center;
	text-align: center;
	padding-top: 10px;
	height: 40px;
	border: 1px solid lightgray;
	background-color: white;
	position: fixed;
	margin-top: 100px;
	width: 100%;
	z-index: 2;
	p {
		color: black;
		font-size: 14px;
		letter-spacing: 1px;
	}

	@media (max-width: 990px) {
		margin-top: 50px;
	}
`;

export default Promo;
