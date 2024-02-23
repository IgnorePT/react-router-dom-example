import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PortefolioDetails() {
	const [portefolio, setPortefolio] = useState({});
	const { id } = useParams();

	useEffect(() => {
		fetch("http://localhost:5173/api/portefolio.json")
			.then((response) => response.json())
			.then((jsonResponse) => {
				const [portefolioElement] = jsonResponse.filter(
					(portefolio) => portefolio.id == id
				);

				// Destruturação  de arrays
				setPortefolio(portefolioElement);
			});
	}, []);

	return (
		<div>
			<h1>{portefolio?.nome}</h1>
			<p>{portefolio?.descricao}</p>
			<img src={portefolio.imagem} />
		</div>
	);
}

export default PortefolioDetails;
