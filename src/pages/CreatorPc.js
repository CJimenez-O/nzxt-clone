import React from "react";
import styled from "styled-components";
import ProductHero from "../components/ProductHero";
import ProductImageLeft from "../components/productFlexLeft";
import ProductImageRight from "../components/ProductFlexRight";
import Warranty from "../components/warranty";
import Suggestion from "../components/suggest";
import MailingList from "../components/mailingListBtn";
import Footer from "../components/Footer";
import Products from "../products.json";
import ProductDisplays from "../components/ProductDisplay";
import SingleProdDisplay from "../components/SingleProductDisplay";
import Child from "../components/child";
import { FaCircle } from "react-icons/fa";
import MailForm from "../components/mailingListForm";
import { Link } from "react-router-dom";

function CreatorPc() {
	return (
		<div>
			<ProductHero
				title="The Creator PC"
				subtitle="Power the Imagination"
				image="https://nzxt.com/assets/cms/34299/1616721402-prebuiltcreatorhero.png?auto=format&bg=FFFFFF&dpr=1.5&fit=max&fm=webp&h=460&w=900"
			/>

			<SingleProdDisplay
				title="BUILT FOR CREATORS"
				details="The Creator PC equips users with everything needed to showcase creative talents."
				filter="collection/creator"
			/>

			<ProductImageLeft
				title="Ray Tracing"
				description="Enables creation of scenes with accurate lighting, shadows, and reflections, rendered at incredible speed."
				image="https://nzxt.com/assets/cms/34299/1617214877-creatorraytracing.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<ProductImageRight
				title="8K Video"
				description="Decodes and debayers up to 8K RED video in real-time with REDCINE-X PRO."
				image="https://nzxt.com/assets/cms/34299/1617214833-creator8kvid.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<Warranty />
			<Suggestion />
			<MailingList />
			<Footer />
		</div>
	);
}

export default CreatorPc;
