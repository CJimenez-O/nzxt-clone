import React from "react";
import styled from "styled-components";
import StripeCheckout from "../components/StripeCheckout";

// if cart has nothing inside display its empty else

const CheckoutPage = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
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
