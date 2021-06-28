



import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './Header.css';
import Courses from './views/Courses';

function Header() {
  return (
    <header className="header">
		<section className="min-header">
			<nav>
				<a href="index.html"><img src="https://cfl.ahmedkira.com/MUST/image/logo.png" alt="" /></a>
				<div className="nav-links" id="navLinks">
				<i className="fa fa-times" onclick="hideMenu()"></i>
				<i className="fad fa-skull fa-rotate-90"></i>
			
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#footer">About Us</a></li>
					<li><a href="#">Courses</a></li>
					<li><a href="https://www.must.edu.eg/">University</a></li>
					<li><a href="../useful-links/index.html">Useful Links</a></li>
				</ul>
				</div>
				<i className="fa fa-moon-o" id="theme-darkmode" onclick="switchColorTheme()"></i>
				<i className="fa fa-bars" onclick="showMenu()"></i>
			</nav>
		</section>
		<script src="https://cfl.ahmedkira.com/MUST/js/header/index.js"></script>
	</header>
  );
}

export default Header;












/*

<header>
		<section class="min-header">
			<nav>
				<a href="index.html"><img src="https://cfl.ahmedkira.com/MUST/image/logo.png" alt="" /></a>
				<div class="nav-links" id="navLinks">
				<i class="fa fa-times" onclick="hideMenu()"></i>
				<i class="fad fa-skull fa-rotate-90"></i>
			
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#footer">About Us</a></li>
					<li><a href="#">Courses</a></li>
					<li><a href="https://www.must.edu.eg/">University</a></li>
					<li><a href="../useful-links/index.html">Useful Links</a></li>
				</ul>
				</div>
				<i class="fa fa-moon-o" id="theme-darkmode" onclick="switchColorTheme()"></i>
				<i class="fa fa-bars" onclick="showMenu()"></i>
			</nav>
		</section>
		<script src="https://cfl.ahmedkira.com/MUST/js/header/index.js"></script>
	</header>

*/