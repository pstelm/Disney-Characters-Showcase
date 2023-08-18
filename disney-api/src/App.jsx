import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { FavouriteCharacters } from './components/FavouriteCharacters/FavouriteCharacters';

const App = () => {
	return (
		<div className={styles.layout}>
			<div className={styles.navbar}>
				<Navbar />
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/favourites" element={<FavouriteCharacters />} />
			</Routes>
			<div className={styles.footer}>
				<Footer />
			</div>
		</div>
	);
};

export default App;
