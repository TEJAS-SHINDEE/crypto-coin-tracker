import React from "react";
import { Navbar } from "../components/navbar.jsx";
import { dataContext } from "../App.jsx";
import { useContext } from "react";
import { Search, ChevronsUpDown, Star, X } from "lucide-react";

export const Favourites = () => {
	const { favourite, liked } = useContext(dataContext);
	console.log("/fav", favourite);
	console.log("/fav/liked", liked);

	const removeCoin = (coin) => {
		console.log("item closed", coin);
	};

	return (
		<>
			<Navbar />
			<div className="w-[90%] border mx-auto ">
				<div className="flex justify-between mx-auto p-8 ">
					<h1 className="text-3xl ">Crypto Prices</h1>
					<p className="flex flex-row gap-4 items-center border border-blue-200 p-2 rounded-lg hover:border-blue-300 focus:bg-[#D6DAFF]">
						<Search size={18} />
						<input
							className="bg-transparent outline-none focus:none font-semibold"
							type="text"
							placeholder="Search"
						/>
					</p>
				</div>
				<ul className="flex flex-col">
					<ul className="bg-[#F4F6F5] flex flex-row justify-evenly h-14">
						<li className="flex items-center gap-2 text-sm text-gray-600 w-[8%]  place-content-center " />
						<li className="flex items-center gap-2 text-sm text-gray-600 w-[15%]  place-content-start">
							Coin <ChevronsUpDown className="flex items-center" size={16} />
						</li>
						<li className="flex items-center gap-2 text-sm text-gray-600 w-[10%]  place-content-end">
							Price <ChevronsUpDown size={16} />
						</li>
						<li className="flex items-center gap-2 text-sm text-gray-600 w-[10%]  place-content-end">
							Market Cap <ChevronsUpDown size={16} />
						</li>
						<li className="flex items-center gap-2 text-sm text-gray-600 w-[10%]  place-content-end">
							24h vol <ChevronsUpDown size={16} />
						</li>
						<li className="flex items-center gap-2 text-sm text-gray-600 w-[10%]  place-content-end">
							1h Vol
							<ChevronsUpDown size={16} />
						</li>
						<li className="flex items-center gap-2 text-sm text-gray-600 w-[10%]  place-content-end">
							Is Crypto <ChevronsUpDown size={16} />
						</li>
					</ul>

					{favourite.map((coin) => (
						<ul
							key={Math.random()}
							className=" flex flex-row justify-evenly h-14"
						>
							<li className="flex items-center gap-2 text-sm  w-[8%] place-content-center">
								<button
									onClick={() => {
										console.log("coin rem ", coin.asset_id);
									}}
									type="button"
								>
									<X strokeWidth={0.75} />
								</button>
							</li>
							<li className="flex items-center gap-2 text-sm  w-[15%] ">
								<span className="text-sm ">
									<p className="font-semibold text-black">{coin.name}</p>
									<p>{coin.asset_id}</p>
								</span>
							</li>
							<li className="flex items-center gap-2 text-sm w-[10%]  place-content-end">
								$ {coin.price_usd}
							</li>
							<li className="flex items-center gap-2 text-sm  w-[10%]  place-content-end">
								{coin.volume_1mth_usd}
							</li>
							<li className="flex items-center gap-2 text-sm  w-[10%]  place-content-end">
								{coin.volume_1day_usd}
							</li>
							<li className="flex items-center gap-2 text-sm  w-[10%]  place-content-end">
								{coin.volume_1hrs_usd}
							</li>
							<li className="flex items-center gap-2 text-base  w-[6%]  place-content-end">
								{coin.type_is_crypto === 1 ? (
									<button
										type="button"
										className="bg-[#279B4F] text-white font-semibold text-sm rounded-lg w-12"
									>
										{" "}
										{coin.type_is_crypto}
									</button>
								) : (
									<button
										type="button"
										className="bg-[#E60000] text-white font-semibold text-sm rounded-lg w-12 "
									>
										{" "}
										{coin.type_is_crypto}
									</button>
								)}
							</li>
						</ul>
					))}
				</ul>
			</div>
		</>
	);
};
