import { Tooltip } from 'react-tooltip';
import styles from './CharacterCard.module.css';
import useDataContext from '../../context/DataContext';

export const CharacterCard = ({ _id, name, imageUrl, tvShows }) => {
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
				</div>
			</div>
		</>
	);
};
