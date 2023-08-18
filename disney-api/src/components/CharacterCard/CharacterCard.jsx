import { Tooltip } from 'react-tooltip';
import styles from './CharacterCard.module.css';

export const CharacterCard = ({
	_id,
	name,
	imageUrl,
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

	// useEffect(() => {
	// 	// const starIcon = document.getElementById('{`star${_id}`}');
	// 	if (favouritesList.includes(_id)) {
	// 		const starIconID = `#star${_id}`;
	// 		console.log(starIconID);
	// 		const starIcon = document.querySelector(starIconID);
	// 		console.log(starIcon);
	// 		// starIcon.classList.add(styles.characterSelected);
	// 	} else {
	// 		// starIcon.classList.remove(styles.characterSelected);
	// 	}
	// }, [favouritesList]);

	return (
		<>
			<Tooltip anchorSelect={`#tvShowsTooltip${_id}`} place="top">
				{tvShows.map((show) => (
					<p key={show}>{show}</p>
				))}
			</Tooltip>
			<div className={styles.card}>
				{' '}
				<img src={imageUrl} className={styles.characterImg} alt={`Image of ${name}`} />
				<div className={styles.characterInfo}>
					<h3 className={styles.characterName}>
						{name}{' '}
						{tvShows.length > 0 ? (
							<a id={`tvShowsTooltip${_id}`}>
								<img
									id={`star${_id}`}
									src="../../../public/icons/tv-solid.svg"
									className={styles.tvIcon}
								/>
							</a>
						) : null}
					</h3>

					<button type="button" className={styles.addToFavourites} onClick={handleAddToFavourites}>
						{favouritesList.includes(_id) ? (
							<img src="/public/icons/star-filled.svg" alt="Remove from favourites" />
						) : (
							<img src="/public/icons/star-regular.svg" alt="Add to favourites" />
						)}
					</button>
				</div>
			</div>
		</>
	);
};
