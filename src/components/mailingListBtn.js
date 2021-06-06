import React from "react";
import styled from "styled-components";

function Mailinglist() {
	return (
		<MailButton>
			<div className="mail-wrapper">
				<button className="mail-btn">
					<h3 className="btn-title">Stay In Touch →</h3>
				</button>
			</div>
		</MailButton>
	);
}

const MailButton = styled.div`
	.mail-wrapper {
		margin-left: 10%;
		margin-bottom: 50px;
	}

	.mail-btn {
		display: flex;
		border: none;
		padding-top: 15px;
		padding-bottom: 15px;
		padding-right: 35px;
		padding-left: 35px;
		font-size: 16px;
		letter-spacing: 1px;
		font-weight: 600;
		color: white;
		border-radius: 25px;
		background-color: gray;
		cursor: pointer;
	}

	.btn-title {
		padding-right: 10px;
	}

	.arrow {
		font-size: 14px;
	}
`;

export default Mailinglist;
