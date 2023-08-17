import { Tooltip } from 'react-tooltip';
import styles from './CharacterCard.module.css';

export const CharacterCard = ({ _id, name, imageUrl, tvShows, setFavouritesList }) => {
	return (
		<>
			<Tooltip anchorSelect={`#tvShowsTooltip${_id}`} place="top">
				{tvShows.map((show) => (
					<p key={show}>{show}</p>
				))}
			</Tooltip>
			<div className={styles.card}>
				<img src={imageUrl} className={styles.characterImg} alt={`Image of ${name}`} />
				<div className={styles.characterInfo}>
					<h3 className={styles.characterName}>
						{name}{' '}
						{tvShows.length > 0 ? (
							<a id={`tvShowsTooltip${_id}`}>
								<img src="../../../public/icons/tv-solid.svg" className={styles.tvIcon} />
							</a>
						) : null}
					</h3>

					<button className={styles.addToFavourites}>
						<img src="/public/icons/star-regular.svg" alt="Add to favourites" />
					</button>
				</div>
			</div>
		</>
	);
};
