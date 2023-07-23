import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ROUTES from './ROUTES';

// components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
	const RouteList = ROUTES.map((route) => (
		<Route path={route.path} Component={route.element} key={route.path} />
	));

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>{RouteList}</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
