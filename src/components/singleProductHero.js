import React from "react";
import styled from "styled-components";

function SingleProductHero() {
	return (
		<Wrapper>
			<div className="single-product-">
				<div className="display-images">
					<div></div>
					<div>
						<img></img>
						<img></img>
					</div>
				</div>
				<div className="product-details">
					<div>
						<div className="prod-name"></div>
						<div className="price"></div>
					</div>
					<div className="color-selection"></div>
					<div className="add-to-cart">
						<div className="amount">
							<p> </p>
							<select></select>
						</div>
						<button></button>
					</div>
					<div className="details"></div>
					<div className="inside"></div>
				</div>
			</div>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	padding-top: 150px;
`;

export default SingleProductHero;
