import styles from './PopularCharacterCard.module.css';

export const PopularCharacterCard = ({
	_id,
	name,
	imageUrl,
	films,
	tvShows,
	favouritesList,
	setFavouritesList,
}) => {
	const handleAddToFavourites = () => {
		if (favouritesList.includes(_id)) {
			setFavouritesList(favouritesList.filter((charID) => charID !== _id));
		} else {
			setFavouritesList([...favouritesList, _id]);
		}

		console.log(favouritesList);
	};

	return (
		<div className={styles.card}>
			<img src={imageUrl} className={styles.characterImg} alt={`Image of ${name}`} />
			<div className={styles.characterInfo}>
				<h3 className={styles.characterName}>
					{name}
					<button type="button" className={styles.addToFavourites} onClick={handleAddToFavourites}>
						{favouritesList.includes(_id) ? (
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
