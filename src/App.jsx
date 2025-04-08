import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import './App.css'
const blogPosts = [
    { id: "1", title: "Introduction to React", content: "React is a JavaScript library for building user interfaces." },
    { id: "2", title: "Understanding React Router", content: "React Router is a library for handling navigation in React applications." },
    { id: "3", title: "State Management in React", content: "State management is crucial for building dynamic applications in React." }
];

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Welcome to My Blog</h1>
            <button onClick={() => navigate("/blog")}>Go to Blog</button>
        </div>
    );
};

const BlogList = () => (
    <div>
        <h1>Blog Posts</h1>
        <ul>
            {blogPosts.map(post => (
                <li key={post.id}>
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
        <Link to="/">Back to Home</Link>
    </div>
);

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(post => post.id === id);
    if (!post) return <h2>Post not found</h2>;
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link to="/blog">Back to Blog List</Link>
        </div>
    );
};

const App = () => (
    <Router>
        <nav>
            <Link to="/">Home</Link> | <Link to="/blog">Blog</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
    </Router>
);

export default App;
