import React from 'react'
// import { withRouter } from 'react-router'
import { ALL_ROUTES } from '../../../config/routes'
import ProtectedRoute from '../../../components/ProtectedRoute'

const Content = () => {
    const renderRouters = () => {
        return ALL_ROUTES.map((route, index) => {
            return (
                <ProtectedRoute
                    componentLoaded={true}
                    key={String(index)}
                    {...route}
                    component={route.component}
                />
            )
        })
    }
    return <>{renderRouters()}</>
}

export default Content