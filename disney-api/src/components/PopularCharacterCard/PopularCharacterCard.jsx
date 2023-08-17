import styles from './PopularCharacterCard.module.css';

export const PopularCharacterCard = ({ _id, name, imageUrl, films, tvShows }) => {
	return (
		<div className={styles.card}>
			<img src={imageUrl} className={styles.characterImg} alt={`Image of ${name}`} />
			<div className={styles.characterInfo}>
				<h3 className={styles.characterName}>{name}</h3>
				{/* <div className={styles.characterStats}> */}
				<p className={styles.characterStats}>
					Films: <span>{films.length}</span>
				</p>
				<p className={styles.characterStats}>
					TV Shows: <span>{tvShows.length}</span>
				</p>
				{/* </div> */}
			</div>
		</div>
	);
};
