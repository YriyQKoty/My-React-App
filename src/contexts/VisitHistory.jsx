import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const VisitHistoryContext = createContext({
    visits: []
});

const VisitHistoryContextProvider = ({ children }) => {
    const [visits, setVisits] = useState([]);
    const location = useLocation();
    useEffect(() => {
        setVisits([...visits, location.pathname]);
    }, [location])

    const values = {
        visits
    };
    return <VisitHistoryContext.Provider value={values}>{children}</VisitHistoryContext.Provider>
};

export default VisitHistoryContextProvider;