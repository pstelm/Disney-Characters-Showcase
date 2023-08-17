import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import { PopularCharacterCard } from '../PopularCharacterCard/PopularCharacterCard';

export const Home = () => {
	const [charactersList, setCharactersList] = useState([]);
	const [filteredCharactersList, setFilteredCharactersList] = useState([]);
	const [popularCharactersList, setPopularCharactersList] = useState([]);
	const [favouritesList, setFavouritesList] = useState([]);

	const getData = async () => {
		try {
			const apiData = await fetch('https://api.disneyapi.dev/character').then((response) =>
				response.json()
			);
			// console.log('API data: ', apiData);
			// setCharactersList(apiData.data);

			const apiDataNext = await fetch(apiData.info.nextPage).then((response) => response.json());
			// console.log('API data next: ', apiDataNext);

			setCharactersList([...apiData.data, ...apiDataNext.data]);

			// let prevDataNextPageURL = apiData.info.nextPage;
			// console.log(prevDataNextPageURL);
			// console.log(charactersList.length);

			// while (charactersList.length < 100) {
			// 	const apiDataNext = await fetch(prevDataNextPageURL).then((response) => response.json());
			// 	// console.log('API data next: ', apiDataNext);
			// 	setCharactersList((charactersList) => [...charactersList, ...apiDataNext.data]);
			// 	prevDataNextPageURL = apiDataNext.info.nextPage;
			// 	// console.log(prevDataNextPageURL);
			// 	// setCharactersList(apiData.data);
			// }

			// const apiDataNext = await fetch(apiData.info.nextPage).then((response) => response.json());
			// console.log('API data next: ', apiDataNext);

			// setCharactersList([...charactersList.data, ...apiDataNext.data]);
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

	// console.log(charactersList);
	// console.log('Filtered:', filteredCharactersList);
	console.log('Sorted:', popularCharactersList);
	// console.log(charactersList.length);

	return (
		<>
			<div className={styles.popularCharacters}>
				{popularCharactersList && popularCharactersList.length > 0
					? popularCharactersList.map((character) => (
							<PopularCharacterCard key={character._id} {...character} />
					  ))
					: null}
			</div>

			<div className={styles.allCharacters}>
				{filteredCharactersList
					? filteredCharactersList.map((character) => (
							<CharacterCard
								key={character._id}
								{...character}
								setFavouritesList={setFavouritesList}
							/>
					  ))
					: null}
			</div>
		</>
	);
};
