/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import {FC} from 'react'
import {Switch} from 'react-router-dom'
import {shallowEqual, useSelector} from 'react-redux'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {PublicRoutes} from './PublicRoutes'
import {RootState} from '../../setup'


const Routes: FC = () => {
  const isAuthorized = useSelector<RootState>(({auth}) => auth.accessToken, shallowEqual)
  return (
    <Switch>
      <MasterLayout>
        <PublicRoutes />
      </MasterLayout>
    </Switch>
  )
}

export {Routes}
