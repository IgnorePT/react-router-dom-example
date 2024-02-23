// const projects = [
// 	{
// 		id: 1,
// 		nome: "Site Pessoal",
// 		descricao: "Um site pessoal para apresentar meu trabalho e experiências.",
// 		tecnologias: ["HTML", "CSS", "JavaScript"],
// 		link: "https://exemplo.com/site-pessoal",
// 		imagem: "https://via.placeholder.com/600x400?text=Site+Pessoal",
// 	},
// 	{
// 		id: 2,
// 		nome: "Aplicativo de Lista de Tarefas",
// 		descricao:
// 			"Um aplicativo web para ajudar na organização de tarefas diárias.",
// 		tecnologias: ["React", "Node.js", "MongoDB"],
// 		link: "https://exemplo.com/aplicativo-de-lista-de-tarefas",
// 		imagem: "https://via.placeholder.com/600x400?text=App+de+Lista+de+Tarefas",
// 	},
// 	{
// 		id: 3,
// 		nome: "Blog de Tecnologia",
// 		descricao:
// 			"Um blog dedicado a compartilhar conhecimentos e novidades sobre tecnologia.",
// 		tecnologias: ["WordPress", "PHP", "MySQL"],
// 		link: "https://exemplo.com/blog-de-tecnologia",
// 		imagem: "https://via.placeholder.com/600x400?text=Blog+de+Tecnologia",
// 	},
// 	{
// 		id: 4,
// 		nome: "E-commerce de Artesanato",
// 		descricao: "Uma loja online especializada na venda de produtos artesanais.",
// 		tecnologias: ["Shopify", "Liquid", "JavaScript"],
// 		link: "https://exemplo.com/e-commerce-de-artesanato",
// 		imagem: "https://via.placeholder.com/600x400?text=E-commerce+Artesanato",
// 	},
// 	{
// 		id: 5,
// 		nome: "Sistema de Gerenciamento de Eventos",
// 		descricao: "Um sistema para gerenciar inscrições e pagamentos em eventos.",
// 		tecnologias: ["Django", "Python", "SQLite"],
// 		link: "https://exemplo.com/sistema-de-gerenciamento-de-eventos",
// 		imagem: "https://via.placeholder.com/600x400?text=Sistema+de+Eventos",
// 	},
// ];

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5173/api/portefolio.json")
			.then((response) => response.json())
			.then((jsonResponse) => {
				console.log(jsonResponse);
				setProjects(jsonResponse);
			});
	}, []);

	return (
		<div>
			<h1>Portfolio Page</h1>

			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gap: "1.5rem",
				}}
			>
				{projects.map((project) => (
					<div key={project.id} className="project-card">
						<img
							style={{ width: "100%" }}
							src={project.imagem}
							alt={project.nome}
						/>
						<h3>{project.nome}</h3>
						<div
							style={{
								display: "flex",
								gap: "1rem",
							}}
						>
							{project.tecnologias.map((tecnologia) => {
								return (
									<span key={tecnologia} className="chip">
										{tecnologia}
									</span>
								);
							})}
						</div>
						<Link to={`/portfolio/${project.id}`}>Ver projeto</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
