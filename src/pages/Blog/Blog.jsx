import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

//Constants
import { BLOG_API } from "../../constants/api";

export function Popup({ children, closePopup }) {
	return (
		<div
			style={{
				padding: "30px",
				background: "#fff",
				width: "400px",
				position: "absolute",
				left: "calc(50% - 200px)",
				top: "400px",
			}}
		>
			{children}
			<button onClick={() => closePopup()}>Close</button>
		</div>
	);
}

function Blog() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [blogs, setBlogs] = useState([]);
	const [blogPost, setBlogPost] = useState(null);

	const { id } = useParams();

	useEffect(() => {
		fetch(`${BLOG_API}/${id}`)
			.then((response) => response.json())
			.then((blogPostJson) => {
				// Destruturação  de arrays
				console.log(blogPostJson);
				setBlogPost(blogPostJson);
				setIsPopupOpen(true);
			});
	}, [id]);

	useEffect(() => {
		fetch(`${BLOG_API}`)
			.then((response) => response.json())
			.then((jsonResponse) => {
				// Destruturação  de arrays
				setBlogs(jsonResponse);
			});
	}, []);

	return (
		<div>
			<h1>Blog</h1>

			<div
				style={{
					display: "grid",
					gap: "1.5rem",
				}}
			>
				{blogs.map((blog) => (
					<div key={blog.id} className="project-card">
						<h3>{blog.title}</h3>
						<Link to={`/blog/${blog.id}`}>Ver detalhes</Link>
					</div>
				))}
			</div>

			{isPopupOpen && (
				<Popup closePopup={() => setIsPopupOpen(false)}>
					<>
						{/* Children */}
						<h3 style={{ color: "#000" }}>{blogPost.title}</h3>
						<p style={{ color: "#000" }}>{blogPost.body}</p>
					</>
				</Popup>
			)}
		</div>
	);
}

export default Blog;
