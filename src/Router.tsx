import * as React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './components/Header';
// import { About, MembersPage, MemberPageContainer } from './components';
import './index.css';
import { CommunitiesPage, CommunityPage, CommunitySettingsPage, CreateCommunityPage } from './pages';
const close = () => {
  console.log(close)
}

export const AppRouter: React.StatelessComponent<{}> = () => {

  return (

    <HashRouter>
      <div>
        <Header />
        <Route exact={true} path="/" component={CommunitiesPage} />
        <Route exact={true} path="/community/:id/" component={CommunityPage} />
        <Route exact={true} path="/community/:id/settings" component={CommunitySettingsPage} />
        <Route exact={true} path="/new" component={CreateCommunityPage} />
      </div>
    </HashRouter>

  );
}