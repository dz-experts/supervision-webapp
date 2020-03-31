import React, {useContext} from 'react';

export const SupervisionContext = React.createContext({});

export const useSupervisionContext = () => useContext(SupervisionContext);
