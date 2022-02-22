import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ProtectedRoute from '../../components/ProtectedRoute';
import App from '../../pages/AppContainer';
import GlobalStateProvider from '../../store/GlobalStateProvider';
import NotFoundRoute from '../NotFoundRoute';
const AppContainer = () => {
    return (
        <GlobalStateProvider>
        <BrowserRouter>
            <Switch>
                <ProtectedRoute component={() => <App />} />
            </Switch>
        </BrowserRouter>
        </GlobalStateProvider>
    )
}

export default AppContainer
