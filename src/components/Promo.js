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
	background-color: black;
	text-align: center;
	padding-top: 10px;
	height: 40px;
	p {
		color: white;
		font-size: 18px;
		letter-spacing: 1px;
	}
`;

export default Promo;
