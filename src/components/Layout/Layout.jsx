import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LayoutWrapper from "./layoutWrapper.style";

const Layout = (props) => {
	return (
		<LayoutWrapper>
			<Router>
				<Route>
					<Header />
				</Route>
				{props.children}
				<Footer />
			</Router>
		</LayoutWrapper>
	);
};

export default Layout;
