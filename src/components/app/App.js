import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppContext from '../../context/appContext';

import Features from '../features/Features';
import Footer from '../footer/Footer';

import Header from '../header/Header';
import Main from '../about/About';
import Network from '../network/Network';
import Plan from '../plan/Plan';
import SectionInfo from '../SectionInfo';
import SignInSignUp from '../signin-signup/SignInSignUp';
import Testimonials from '../testimonials/Testimonials';

import './App.css';

const App = () => {
  const [authenticate, setAuthenticate] = useState(false);

  return (
    <Router>
      <AppContext.Provider
        value={{
          authenticate,
          login: () => setAuthenticate(true),
          logout: () => setAuthenticate(false),
        }}
      >
        <Switch>
          <Route path="/signup" component={() => <SignInSignUp signup />} />
          <Route path="/signin" component={() => <SignInSignUp />} />
          <Route>
            <Header />
            <Main />
            <SectionInfo />
            <Features />
            <Plan />
            <Network />
            <Testimonials />
            <Footer />
          </Route>
        </Switch>
      </AppContext.Provider>
    </Router>
  );
};

export default App;
