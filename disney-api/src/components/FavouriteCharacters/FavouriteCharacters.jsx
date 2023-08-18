import { useEffect, useState } from 'react';
import useDataContext from '../../context/DataContext';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import styles from './FavouriteCharacters.module.css';

export const FavouriteCharacters = () => {
	const { favouritesList } = useDataContext();
	const [searchedText, setSearchedText] = useState('');
	const [filteredCharacters, setFilteredCharacters] = useState([]);

	const filterCharacters = (text) => {
		const searchedCharacters = favouritesList.filter((character) => {
			if (!text) {
				return true;
			} else {
				return character && character.name.toLowerCase().includes(text.toLowerCase());
			}
		});
		setFilteredCharacters(searchedCharacters);
	};

	useEffect(() => {
		setFilteredCharacters(favouritesList);
	}, []);

	useEffect(() => {
		filterCharacters(searchedText);
	}, [searchedText]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.searchBox}>
				<h2 className={styles.searchInputTitle}>The Best Animted Disney Characters of All Time</h2>
				<input
					className={styles.searchInput}
					onChange={(e) => {
						setSearchedText(e.target.value);
					}}
					type="text"
					name="searchbar"
					placeholder="Search..."
				/>
			</div>
			<div className={styles.allCharacters}>
				{filteredCharacters ? (
					filteredCharacters.map((character) => (
						<CharacterCard key={character._id} {...character} />
					))
				) : (
					<p className={styles.emptyListInfo}>Add character to favourites</p>
				)}
			</div>
		</div>
	);
};
