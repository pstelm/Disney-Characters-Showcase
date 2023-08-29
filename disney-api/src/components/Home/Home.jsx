import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import { PopularCharacterCard } from '../PopularCharacterCard/PopularCharacterCard';

export const Home = () => {
	const [charactersList, setCharactersList] = useState([]);
	const [filteredCharactersList, setFilteredCharactersList] = useState([]);
	const [popularCharactersList, setPopularCharactersList] = useState([]);

	const getData = async () => {
		try {
			const apiData = await fetch('https://api.disneyapi.dev/character').then((response) =>
				response.json()
			);
			const apiDataNext = await fetch(apiData.info.nextPage).then((response) => response.json());

			setCharactersList([...apiData.data, ...apiDataNext.data]);
		} catch (error) {
			console.log(error);
		}
	};

	const filterCharactersList = () => {
		const filteredCharacters = charactersList.filter((character) => {
			if (character.films.length > 0) return true;
		});

		const sortedCharacters = [...filteredCharactersList].sort((a, b) =>
			a.films.length < b.films.length ? 1 : b.films.length < a.films.length ? -1 : 0
		);

		setFilteredCharactersList(filteredCharacters);
		setPopularCharactersList(sortedCharacters.slice(0, 3));
	};

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		filterCharactersList();
	}, [charactersList]);

	return (
		<>
			<div className={styles.popularCharacters}>
				<h2 className={styles.popularCharactersTitle}>Most popular Disney characters</h2>
				{popularCharactersList && popularCharactersList.length > 0 ? (
					popularCharactersList.map((character) => (
						<PopularCharacterCard key={character._id} {...character} />
					))
				) : (
					<p className={styles.emptyListInfo}>Downloading data...</p>
				)}
			</div>

			<div className={styles.allCharacters}>
				{filteredCharactersList
					? filteredCharactersList.map((character) => (
							<CharacterCard key={character._id} {...character} />
					  ))
					: null}
			</div>
		</>
	);
};
