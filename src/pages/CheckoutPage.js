import React from "react";
import styled from "styled-components";
import StripeCheckout from "../components/StripeCheckout";
import { Link } from "react-router-dom";

// if cart has nothing inside display its empty else

const CheckoutPage = () => {
	return (
		<main>
			<Wrapper>
				<StripeCheckout />
			</Wrapper>
		</main>
	);
};

const Wrapper = styled.div`
	padding-top: 200px;
`;
export default CheckoutPage;
