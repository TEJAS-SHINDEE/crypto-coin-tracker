import React from "react";
import { Link } from "react-router-dom";
import { CircleDollarSign, AlignJustify, Star } from "lucide-react";
export const Navbar = () => {
	return (
		<>
			<ul className="flex justify-between m-2 px-4">
				<li className="flex items-center gap-1 font-semibold text-xl ">
					<CircleDollarSign size={28} color="#0f0f0f" strokeWidth={2} />
					<p className="text-2xl font-semibold">CoinTracker</p>
				</li>
				<li className="flex items-center gap-6  ">
					<button
						className="text-md border border-black h-12 w-52 rounded-xl font-semibold hidden md:inline-block"
						type="button"
					>
						Create Your Account
					</button>
					<button type="button">
						<Link to={"/favourites"}>
							<Star strokeWidth={0.75} />
						</Link>
					</button>
					<AlignJustify size={28} color="#0f0f0f" strokeWidth={2} />
				</li>
			</ul>
			<div className="h-14 w-full bg-[#4766FF] ">
				<ul className="flex items-start w-[94%] mx-auto md:items-center md:justify-between text-white text-[1rem] flex-col md:flex-row pt-4">
					<li className="flex items-center gap-2  ">
						Crypto Market Cap:
						<span className="bg-[#5980FF] text-bold rounded-md p-1 text-sm font-bold">
							$3.52T
						</span>{" "}
						24h Vol
						<span className="bg-[#5980FF] rounded-md p-1 text-sm font-bold">
							$276B
						</span>
					</li>
					<li className="flex items-center gap-2 ">
						Market Dominance:
						<button
							type="button"
							className="bg-[#5980FF] rounded-md p-1 text-sm font-bold"
						>
							BTC: 57.63%{" "}
						</button>
						<button
							type="button"
							className="bg-[#5980FF] rounded-md p-1 text-sm font-bold"
						>
							BTC: 57.63%
						</button>
					</li>
				</ul>
			</div>
		</>
	);
};
