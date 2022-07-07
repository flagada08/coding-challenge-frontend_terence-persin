import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Container, Header, Segment, Icon } from 'semantic-ui-react';

import "pure-react-carousel/dist/react-carousel.es.css";

import ImageCarousel from "../../carousel/ImageCarousel";

const DetailsPage = () => {
// Trying to avoid "findDOMNode is deprecated" warning...
const nodeRef = useRef(null);
console.log("Yes i know that warning, am still looking :)");

    // useParams Hook to link our constante id with our path /:id
    const { id } = useParams();
    const [breweryDetails, setBreweryDetails] = useState('');
  
    // GET with Axios async/await, to avoid the .then chaining
    // and useEffect which will apply the rendering of the application
    useEffect(() => {
        const fetchBreweryDetails = async () => {
            // .get with the API's adress and our constante id previously linked
            const response = await axios.get(`https://api.openbrewerydb.org/breweries/${id}`);
            setBreweryDetails(response.data)
        };
      fetchBreweryDetails();
    }, [id]);

    return (

    <Container style={{ margin: 20 }} textAlign='center'>
        <Header as="h1" dividing>
          <Icon name='beer' />Brewery details of {breweryDetails.name}
        </Header>

      <Segment attached="top">
        <Header as="h2" content={breweryDetails.country} />
        <h3>{breweryDetails.city}</h3>
          <p>{breweryDetails.street}</p>
          <p>Postal Code: {breweryDetails.postal_code}</p>
          <p><Icon name='phone square' />{breweryDetails.phone}</p>
      </Segment>
      <Segment attached="bottom">
        <ImageCarousel nodeRef={nodeRef}/>
      </Segment>
    </Container>
    );
}

export default DetailsPage;
