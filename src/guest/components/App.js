import React from "react"
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Navbar from "./Navbar"

export default function App() {
	return (
		<Router>
			<h1>React routing</h1>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</Router>
	)
}

