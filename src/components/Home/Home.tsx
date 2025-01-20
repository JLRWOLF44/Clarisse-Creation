import "./Home.css";

function Home() {
	return (
		<>
			<h1>Home</h1>
			<section className="card-container">
				<div className="card">
					<img
						src="\public\photos\imagecreation\nature-morte-du-bureau-createur-mode_23-2150543699.jpg"
						alt="image1"
					/>
					<p>Description for image 1</p>
				</div>
				<div className="card">
					<img
						src="public/photos/imagecreation/elements-essentiels-pour-design-mode-studio_23-2150414763.jpg"
						alt="image2"
					/>
					<p>Description for image 2</p>
				</div>
			</section>
		</>
	);
}

export default Home;
