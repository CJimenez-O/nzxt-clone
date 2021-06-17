import React from "react";
import { useParams } from "react-router-dom";

function Child() {
	let { id } = useParams();
	console.log({ id });
	return (
		<div>
			<h3>ID: {id}</h3>
		</div>
	);
}

export default Child;
