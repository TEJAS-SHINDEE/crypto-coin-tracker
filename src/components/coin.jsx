import React, { useContext } from "react";
import { Navbar } from "./navbar.jsx";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router";

export const Coin = () => {
	const id = useLocation().pathname.slice(1);
	useEffect(async () => {
		const url = `https://rest.coinapi.io/v1/assets/${id}/?apikey=31a480ed-fbd4-4324-9793-5236a88eba74`;
		const responce = await fetch(url);
		const singleData = await responce.json();
		console.log("single ", singleData);
	});

	return (
		<>
			<Navbar />
			<div> Coin</div>
		</>
	);
};
