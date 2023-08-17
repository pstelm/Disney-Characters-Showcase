import styles from './CharacterCard.module.css';

export const CharacterCard = ({ name, imageUrl, tvShows }) => {
	return (
		<div className={styles.card}>
			<img src={imageUrl} className={styles.characterImg} alt={`Image of ${name}`} />
			<div className={styles.characterInfo}>
				<h3 className={styles.characterName}>
					{name}{' '}
					{tvShows.length > 0 ? (
						<img src="../../../public/icons/tv-solid.svg" className={styles.tvIcon} />
					) : null}
				</h3>

				<button className={styles.addToFavourites}>
					<img src="/public/icons/star-regular.svg" alt="Add to favourites" />
				</button>
			</div>
		</div>
	);
};
