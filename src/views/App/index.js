import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Axios from "axios";

import { Container } from 'semantic-ui-react';

import Header from '../../components/Header';
import HomePage from '../HomePage';
import DetailsPage from '../DetailsPage';
import NotFound from '../NotFound';

export default function App() {
    // Hook useState to set datas in a constant
    const [breweries, setBreweries] = useState([]);
  
    // GET API's datas with Axios async/await, to avoid the .then chaining
    // and useEffect which will apply the rendering of the application
    useEffect(() => {
      const fetchBreweries = async () => {
          const response = await Axios.get("https://api.openbrewerydb.org/breweries");
          setBreweries(response.data)
          // console.log(response.data);
      };
      fetchBreweries();
    }, []);
  
    return (
      <div
        style={{
        backgroundColor: '#E5E5E5',
        minHeight: '100vh',
        paddingTop: 50,
        paddingBottom: 50,
    }}>
        <Container>
            <Router>
            <Header />
              <Switch>
                  {/* Rootes to configure our paths, with the exact prop for the home path. all paths start with a / and it will automatically lead to the home page if we do not specify the exact path prop */}
                  <Route exact path="/">
                    {/* name a prop to be able to pass the data to another component */}
                    <HomePage breweries={breweries} />
                  </Route>
                    {/* path with /:id detected by react router dom to catch the data's id*/}
                  <Route path="/details/:id">
                    <DetailsPage />
                  </Route>
                  <Route>
                    <NotFound />
                  </Route>
              </Switch>
            </Router>
        </Container>
      </div>
    );
  }
