import Header from './header/Header.jsx'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
}

export default Layout
