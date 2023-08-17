import { useEffect, useState } from 'react';
import styles from './Home.module.css';

export const Home = () => {
	const [charactersList, setCharactersList] = useState([]);

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

	useEffect(() => {
		getData();
	}, []);

	console.log(charactersList);
	console.log(charactersList.length);

	return (
		<div className={styles.wrapper}>
			<div className={styles.popular}></div>
			<div className={styles.characters}>
				{charactersList
					? charactersList.map((character) => <li key={character._id}>{character.name}</li>)
					: null}
			</div>
		</div>
	);
};
