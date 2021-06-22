import React from "react";
import styled from "styled-components";
import { FaWrench, FaShieldAlt, FaThumbsUp } from "react-icons/fa";

function Warranty() {
	return (
		<WarrantyWrap>
			<div className="bonus">
				<div className="expert">
					<h3 className="icon">
						<FaWrench />
					</h3>
					<h3 className="title">Expertly Built</h3>
					<p className="sub">
						Hand built by the same teams who build our custom Gaming PCs
					</p>
				</div>
				<div className="expert">
					<h3 className="icon">
						<FaShieldAlt />
					</h3>
					<h3 className="title">2 Year Warranty</h3>
					<p className="sub">
						Free 2-year warranty on all parts & labor as well as professional
						wire management
					</p>
				</div>
				<div className="expert">
					<h3 className="icon">
						<FaThumbsUp />
					</h3>
					<h3 className="title">Tested With Care</h3>
					<p className="sub">
						Each PC is built, beautifully cabled, and tested with care
					</p>
				</div>
			</div>
		</WarrantyWrap>
	);
}

const WarrantyWrap = styled.div`
	margin-top: 50px;
	margin-bottom: 50px;
	.bonus {
		display: flex;
		gap: 50px;
		text-align: center;
		background-color: #f2f3f5;
		margin-right: 10%;
		margin-left: 10%;
		border-radius: 10px;
		padding: 40px;
		letter-spacing: 1px;
	}

	.title {
		padding-bottom: 5px;
	}

	.sub {
		color: gray;
		font-weight: 600;
		line-height: 20px;
	}

	.icon {
		font-size: 30px;
		padding-bottom: 10px;
		color: #4a4949;
	}

	@media (max-width: 790px) {
		.bonus {
			display: block;
		}
	}
`;

export default Warranty;
