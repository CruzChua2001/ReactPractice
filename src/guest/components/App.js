import React from "react"
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"

export default function App() {
	return (
		<Router>
			<h1>React routing</h1>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/contact'> Contact</Link>
			</nav>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</Router>
	)
}

