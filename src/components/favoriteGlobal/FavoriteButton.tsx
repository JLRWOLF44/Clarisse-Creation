import React, { useState } from "react";
import "./FavoriteButton.css";

function FavoriteButton() {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<button type="button" onClick={() => setIsClicked(!isClicked)}>
			{isClicked ? "❤️" : "🤍"}
		</button>
	);
}

export default FavoriteButton;
