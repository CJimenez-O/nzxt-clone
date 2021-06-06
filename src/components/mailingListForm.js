import React from "react";
import styled from "styled-components";

function MailingListForm() {
	return (
		<MailForm>
			<div className="form-container">
				<h4 className="form-title">Stay In Touch</h4>
				<p className="form-info">
					Keep up to date on the latest releases, offers, and news from NZXT
				</p>
				<form>
					<input type="email" placeholder="your@email.com"></input>
					<div className="legal-container">
						<input type="checkbox" />
						<p className="legal-info">
							By signing up you agree to NZXT, CAM, and BLD's Privacy Policy and
							Terms & Conditions
						</p>
					</div>
					<button className="form-btn">Stay In Touch</button>
				</form>
			</div>
		</MailForm>
	);
}

const MailForm = styled.form`
	position: relative;
	z-index: 41;
	.form-container {
		background-color: gray;
		text-align: center;
		align-items: center;
		justify-content: center;
		padding: 40px;
		border-radius: 25px;
	}
`;

export default MailingListForm;
