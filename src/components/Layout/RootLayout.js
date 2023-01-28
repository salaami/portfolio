import { Navlink, Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function RootLayout() {
	return(
		<div>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
