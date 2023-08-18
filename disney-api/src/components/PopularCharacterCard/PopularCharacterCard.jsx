import useDataContext from '../../context/DataContext';
import styles from './PopularCharacterCard.module.css';

export const PopularCharacterCard = ({ _id, name, imageUrl, films, tvShows }) => {
	const { favouritesList, setFavouritesList } = useDataContext();

	const handleAddToFavourites = () => {
		if (
			favouritesList &&
			favouritesList.find((elem) => {
				if (elem._id === _id) {
					return true;
				} else return false;
			})
		) {
			setFavouritesList(favouritesList.filter((elem) => elem._id !== _id));
		} else {
			const newCharacter = { _id: _id, name: name, imageUrl: imageUrl, tvShows: tvShows };
			setFavouritesList([...favouritesList, newCharacter]);
		}
	};

	return (
		<div className={styles.card}>
			<img src={imageUrl} className={styles.characterImg} alt={`Image of ${name}`} />
			<div className={styles.characterInfo}>
				<h3 className={styles.characterName}>
					{name}
					<button type="button" className={styles.addToFavourites} onClick={handleAddToFavourites}>
						{favouritesList &&
						favouritesList.find((elem) => {
							if (elem._id === _id) {
								return true;
							} else return false;
						}) ? (
							<img src="/public/icons/star-filled.svg" alt="Remove from favourites" />
						) : (
							<img src="/public/icons/star-regular.svg" alt="Add to favourites" />
						)}
					</button>
				</h3>

				<div className={styles.characterStats}>
					<p>
						Films: <span>{films.length}</span>
					</p>
					<p>
						TV Shows: <span>{tvShows.length}</span>
					</p>
				</div>
			</div>
		</div>
	);
};
