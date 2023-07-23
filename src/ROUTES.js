import About from './pages/About/About';
import Account from './pages/Account/Account';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Orders from './pages/Orders/Orders';
import PaymentOptions from './pages/PaymentOptions/PaymentOptions';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Product from './pages/Product/Product';
import Returns from './pages/Returns/Returns';
import Shop from './pages/Shop/Shop';

const ROUTES = [
	{
		path: '/login',
		element: Login,
	},
	{
		path: '/',
		element: Home,
	},
	{
		path: '/about',
		element: About,
	},
	{
		path: '/cart',
		element: Cart,
	},
	{
		path: '/checkout',
		element: Checkout,
	},
	{
		path: '/contact',
		element: Contact,
	},
	{
		path: '/account',
		element: Account,
	},
	{
		path: '/orders',
		element: Orders,
	},
	{
		path: '/shop',
		element: Shop,
	},
	{
		path: '/shop/:id',
		element: Product,
	},
	{
		path: '/paymentOptions',
		element: PaymentOptions,
	},

	{
		path: '/privacyPolicy',
		element: PrivacyPolicy,
	},
];

export default ROUTES;
