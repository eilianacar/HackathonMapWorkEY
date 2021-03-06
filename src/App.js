import { Feedback, Map, WbIncandescentRounded } from '@material-ui/icons';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import EFeedBack from './employeeViews/EFeedBack';
import EMap from './employeeViews/EMap';
import EProfile from './employeeViews/EProfile';
import ESingle from './employeeViews/ESingle';
import EStars from './employeeViews/EStars';
import ETeam from './employeeViews/ETeam';
import MapLeader from './leaderViews/MapLeader';
import Profile from './leaderViews/Profile';
import SingleLeader from './leaderViews/SingleLeader';
import Team from './leaderViews/Team';
import Winners from './leaderViews/Winners';
import Birthday from './views/Birthday';
import Home from './views/Home';
import Login from './views/Login';
import Resgister from './views/Resgister';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/birthday">
          <Birthday/>
        </Route>
        <Route path="/register">
          <Resgister/>
        </Route>
        <Route path="/Winners">
          <Winners/>
        </Route>
        <Route path="/Team">
          <Team/>
        </Route>
        <Route path="/Single">
          <SingleLeader/>
        </Route>
        <Route path="/Team">
          <Profile/>
        </Route>
        <Route path="/Map">
        <MapLeader/>
        </Route>
        <Route path="/Feedback">
        <Feedback/>
        </Route>
        <Route path="/EmployeeTeam">
       <ETeam/>
        </Route>
        <Route path="/EmployeeStar">
        <EStars/>
        </Route>
        <Route path="/EmployeeSingle">
        <ESingle/>
        </Route>
        <Route path="/EmployeeProfile">
        <EProfile/>
        </Route>
        <Route path="/EmployeeMap">
        <EMap/>
        </Route>
        <Route path="/EmployeeFeedBack">
        <EFeedBack/>
        </Route>

        
        



      </Switch>
    </Router>
    
  );
}

export default App;
