import React, { useContext, useState } from 'react';

const DataContext = React.createContext();

const useDataContext = () => {
	return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
	const [favouritesList, setFavouritesList] = useState([]);
	const value = {
		favouritesList,
		setFavouritesList,
	};

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default useDataContext;
