import React from "react";

export const Search = () => {
	return (
		<div className="flex bg-red-200 ">
			<p>Crypto Prices</p>
			<Search size={44} color="#0f0f0f" strokeWidth={2.25} />
			<input className="bg-transparent" type="text" placeholder="Search" />
		</div>
	);
};
