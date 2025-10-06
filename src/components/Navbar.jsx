import React, { useState } from "react";
import "./Navbar.css";


export default function Navbar() {
const [open, setOpen] = useState(false);


return (
<header className="navbar">
<div className="container">
<div className="brand">
<a href="#" className="logo">
<span className="logo-emoji">🍔</span>
<span className="logo-text">MyFood</span>
</a>
</div>


<nav className={`nav-links ${open ? "open" : ""}`}>
<a href="#" className="nav-link">Home</a>
<a href="#" className="nav-link">Menu</a>
<a href="#" className="nav-link">Offers</a>
<a href="#" className="nav-link">About</a>
<a href="#" className="nav-link cta">Order Now</a>
</nav>


<button
className={`hamburger ${open ? "is-active" : ""}`}
aria-label="Toggle menu"
onClick={() => setOpen(!open)}
>
<span className="bar" />
<span className="bar" />
<span className="bar" />
</button>
</div>
</header>
);
}