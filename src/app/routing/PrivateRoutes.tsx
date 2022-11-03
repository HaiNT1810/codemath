import React, { Suspense, lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { FallbackView } from '../../_metronic/partials'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { SignupWrapper } from '../pages/auth/SignupWrapper'

import { MissionWrapper } from '../pages/about/MissionWrapper'
import { OverallDataWrapper } from '../pages/overall-data/OverDataWrapper'
import { FeedbackWrapper } from '../pages/interactive/FeedbackWrapper'
import { FunctionWrapper } from '../pages/about/FunctionWrapper'
import { ContactWrapper } from '../pages/interactive/ContactWrapper'
import { PolicyWrapper } from '../pages/policy/PolicyWrapper'
import { PolicyDetail } from '../pages/policy/PolicyDetail'
import { RecruitWrapper } from '../pages/recruit/RecruitWrapper'
// import { GuideWrapper } from '../pages/guide/GuideWrapper'
import { RecruitDetail } from '../pages/recruit/RecruitDetail'
import { TreePageWrapper } from '../pages/tree-page/TreePageWrapper'
import { NotificationDetail } from '../pages/notification/NotificationDetail'
import { QuestionWrapper } from '../pages/question/QuestionWrapper'
import { WorkerWrapper } from '../pages/worker/WorkerWrapper'

export function PrivateRoutes() {
  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/home' component={DashboardWrapper} />
        <Route path='/about/funtion' component={FunctionWrapper} />
        <Route path='/about/misson' component={MissionWrapper} />
        <Route path='/about' component={FunctionWrapper} />
        <Route path='/overall-data' component={OverallDataWrapper} />
        <Route path='/interactive/feedback' component={FeedbackWrapper} />
        <Route path='/interactive/contact' component={ContactWrapper} />
        <Route path='/interactive' component={FeedbackWrapper} />
        <Route path='/policy/:id' component={PolicyDetail} />
        <Route path='/policy' component={PolicyWrapper} />
        <Route path='/recruit/:id' component={RecruitDetail} />
        <Route path='/recruit' component={RecruitWrapper} />
        <Route path={'/notify/:id'} component={NotificationDetail} />
        <Route path='/tree-page' component={TreePageWrapper} />
        <Route path='/question' component={QuestionWrapper} />
        <Route path='/signup' component={SignupWrapper} />
        <Route path='/wp/:id' component={WorkerWrapper} />
        <Route path='/wp' component={WorkerWrapper} />
        <Redirect exact from='/' to='/home' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
