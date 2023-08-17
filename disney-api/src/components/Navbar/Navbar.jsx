import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
	const { pathname } = useLocation();

	return (
		<div className={styles.navbar}>
			<Link to="/" className={styles.logo}>
				<img src="../../../public/disney_logo.png" alt="Logo Disney" className={styles.logoImg} />
			</Link>
			<Link
				to="/favourites"
				className={pathname === '/favourites' ? styles.activeLink : styles.defaultLink}
			>
				My favourite characters
			</Link>
		</div>
	);
};
