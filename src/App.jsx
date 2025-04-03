import React from "react";
import { useEffect, useState, createContext, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Favourites } from "./components/favourites.jsx";
import { Main } from "./components/main.jsx";
import { Coin } from "./components/coin.jsx";

const dataContext = createContext();

function App() {
	const [coins, setCoins] = useState([]);
	const [favourite, setFavourite] = useState([]);
	const [liked, setLiked] = useState([]);
	const [icon, setIcon] = useState([]);
	const lengthData = [];

	const getData = async () => {
		const API_KEY = import.meta.env.API_KEY;
		const url =
			"https://rest.coinapi.io/v1/assets/?apikey=31a480ed-fbd4-4324-9793-5236a88eba74";
		const responce = await fetch(url);
		const newData = await responce.json();

		const iconUrl =
			"https://rest.coinapi.io/v1/assets/icons/32/?apikey=31a480ed-fbd4-4324-9793-5236a88eba74";
		const iconresponce = await fetch(iconUrl);
		const iconnewData = await iconresponce.json();

		// console.log("newData",newData);
		for (let i = 0; i < 50; i++) {
			lengthData.push(newData[i]);
		}
		// console.log('app length data ',lengthData);
		setCoins(lengthData);
		setIcon(iconnewData);
		// console.log("app main data",data);
	};

	useMemo(() => {
		getData();
	}, []);

	// (() => {
	// 	// statements…
	// 	getData().then((data)=>{console.log(data)})
	//   })();

	return (
		<>
			<dataContext.Provider
				value={{
					coins,
					setCoins,
					favourite,
					setFavourite,
					liked,
					setLiked,
					icon,
				}}
			>
				<Router>
					<Routes>
						<Route path={"/"} element={<Main />} />
						<Route path={":id"} element={<Coin />} />
						<Route path={"/favourites"} element={<Favourites />} />
					</Routes>
				</Router>
			</dataContext.Provider>
		</>
	);
}

export default App;
export { dataContext };
