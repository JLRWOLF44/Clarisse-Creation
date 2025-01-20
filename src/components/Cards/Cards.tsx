import { useState } from "react";
import "./Cards.css";
import data from "../../assets/data";

interface CardI {
	imgSrc: string;
}

function FavoriteButton() {
	const [isClicked, setIsClicked] = useState(false);

	function setStorage(imgSrc: string) {
		const actualStorage = getStorage() || [];
		actualStorage.push(imgSrc);
		localStorage.setItem("imgSrc", JSON.stringify(actualStorage));
	}

	function getStorage(): string[] | null {
		const actualStorage = localStorage.getItem("imgSrc");
		if (actualStorage) {
			return JSON.parse(actualStorage);
		}
		return null;
	}

	function handleClick() {
		setIsClicked(!isClicked);
		if (!isClicked) {
			setStorage(data.imgSrc);
		}
	}

	return (
		<article>
			<button type="button" className="favorite-button" onClick={handleClick}>
				{isClicked ? "❤️" : "🩶"}
			</button>
		</article>
	);
}

function Cards({ imgSrc }: CardI) {
	return (
		<figure className="card">
			<img src={imgSrc} alt="Card" className="card-image" />
			<div className="favorite-button-container">
				<FavoriteButton />
			</div>
		</figure>
	);
}

export default Cards;
