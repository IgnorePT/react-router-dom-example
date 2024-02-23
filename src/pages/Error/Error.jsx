import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div>
			<h1>404</h1>
			<h3>Página não encontrada</h3>
			<Link to="/">Voltar a Home</Link>
		</div>
	);
};

export default Error;
