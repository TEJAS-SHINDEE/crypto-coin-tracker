import React, { useContext, useState, useEffect } from "react";
import { Search, ChevronsUpDown, Star, Check, X } from "lucide-react";
import { dataContext } from "../App.jsx";
import { Link } from "react-router-dom";

export const Body = () => {
	const { coins, favourite, setFavourite, liked, setLiked, icon } =
		useContext(dataContext);
	// const favourite = useContext(data.favourite);

	console.log("body coins ", coins);
	console.log("body fav ", favourite);
	console.log("body like ", liked);
	console.log("body icon ", icon);

	const sortOneDay = () => {
		coins.sort((a, b) => {
			return a.volume_1day_usd - b.volume_1day_usd;
		});
	};

	let url = "";

	function urlFunction(coin) {
		for (let i = 0; i < icon.length; i++) {
			if (icon.asset_id === coin.asset_id) {
				url = icon[i].url;
			}
		}
		return url;
	}

	return (
		<>
			<div className="w-[90%]  mx-auto overflow-y-auto">
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
						<li className="flex items-center gap-2 text-sm text-gray-600 w-[4%]  place-content-center " />
						<li className="flex items-center gap-2 text-sm text-gray-600 w-[20%]  place-content-start ">
							Coin <ChevronsUpDown className="flex items-center" size={16} />
						</li>
						<li className="flex items-center gap-2 text-sm text-gray-600 w-[10%]  place-content-end text-clip">
							Price <ChevronsUpDown size={16} />
						</li>
						<li className="flex items-center gap-2 text-sm text-gray-600 w-[10%]  place-content-end">
							Market Cap <ChevronsUpDown size={16} />
						</li>
						<li className="flex items-center gap-2 text-sm text-gray-600 w-[10%]  place-content-end">
							<button type="button" onClick={sortOneDay}>
								24h vol
							</button>{" "}
							<ChevronsUpDown size={16} />
						</li>
						<li className="flex items-center gap-2 text-sm text-gray-600 w-[10%]  place-content-end">
							1h vol <ChevronsUpDown size={16} />
						</li>
						<li className="flex items-center gap-2 text-sm text-gray-600 w-[10%]  place-content-end">
							Is Crypto <ChevronsUpDown size={16} />
						</li>
					</ul>

					{coins.map((coin) => (
						// <Link to={`/${coin.asset_id}`}>
						// url = urlFunction(coin),
						<ul
							key={Math.random()}
							className=" flex flex-row justify-evenly h-14 border-b border-b-blue-200"
						>
							<li className="flex items-center gap-2 text-sm text-gray-600 w-[4%] place-content-center">
								<button
									onClick={() => {
										setFavourite((favourite) => [...favourite, coin]);
										setLiked((liked) => [...liked, coin]);
									}}
									type="button"
								>
									{favourite.some((fav) => coin.asset_id === fav.asset_id) ? (
										<Star
											className="text-red-500"
											size={20}
											strokeWidth={1.75}
										/>
									) : (
										<Star size={20} strokeWidth={1.25} />
									)}
								</button>
							</li>

							<li className="flex items-center gap-4 text-sm text-gray-600 w-[20%] ">
								<span>
									{" "}
									<img
										src="https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/4caf2b16a0174e26a3482cea69c34cba.png"
										alt=""
									/>
								</span>
								<span className="text-sm ">
									<p className="font-semibold text-black">{coin.name}</p>
									<p>{coin.asset_id}</p>
								</span>
							</li>
							<li className="flex items-center gap-2 text-base  w-[10%]  place-content-end">
								$ {coin.price_usd}
							</li>
							<li className="flex items-center gap-2 text-base  w-[10%]  place-content-end">
								{coin.volume_1mth_usd}
							</li>
							<li className="flex items-center gap-2 text-base  w-[10%]  place-content-end">
								{coin.volume_1day_usd}
							</li>
							<li className="flex items-center gap-2 text-base  w-[10%]  place-content-end">
								{coin.volume_1hrs_usd}
							</li>
							<li className="flex items-center gap-2 text-base  w-[6%]  place-content-end">
								{coin.type_is_crypto === 1 ? (
									<button
										type="button"
										className="bg-[#279B4F] text-white font-semibold text-sm rounded-lg w-12 "
									>
										{" "}
										<Check className="m-auto" />
									</button>
								) : (
									<button
										type="button"
										className="bg-[#E60000] text-white font-semibold text-sm rounded-lg w-12 "
									>
										{" "}
										<X className="m-auto" />{" "}
									</button>
								)}
							</li>
						</ul>
						// </Link>
					))}
				</ul>
			</div>
		</>
	);
};
