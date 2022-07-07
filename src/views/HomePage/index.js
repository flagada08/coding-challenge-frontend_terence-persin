import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import Axios from 'axios';

import { Search, Image, Item, Container, Header, Icon} from 'semantic-ui-react'

import image from '../../twins-beer.gif';


const SearchField = () => {

  // Hook useState to set datas in a constant
  const [brewerySearch, setBrewerySearch] = useState([]);
  
  // GET API's datas with Axios async/await, to avoid the .then chaining
  // and useEffect which will apply the rendering of the application
  useEffect(() => {
    const fetchBrewerySearch = async () => {
        const response = await Axios.get("https://api.openbrewerydb.org/breweries");
        setBrewerySearch(response.data)
        // console.log(response.data);
    };
    fetchBrewerySearch();
  }, []);

  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = brewerySearch.filter((item) => {
        return (
          Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        )
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(brewerySearch);
    }
  };

  return (
    <Container style={{ margin: 20 }} textAlign='center'>
      <Search
      open={false}
      placeholder='Search...'
      onSearchChange={(e) => searchItems(e.target.value)} 
      />
    <Item.Group divided>
    <Header as="h1">
        <Icon name='beer' />Here are a list of beers/breweries...
    </Header>
    {searchInput.length > 1 ? (
        filteredResults.map((brewerie) => {
            return (
                <Item key={brewerie.id}>
                    <Item.Content>
                        <Item.Extra>
                            <Link to={`/details/${brewerie.id}`}>
                                <Image wrapped rounded src={image} />
                            </Link>
                        </Item.Extra>
                        <Item.Meta>
                            {brewerie.state}
                                <h2>{brewerie.name}</h2>
                        </Item.Meta>
                        <Item.Description>
                            {/* Link with Brewery's id to have a unique path */}
                            <Link to={`/details/${brewerie.id}`}>
                                <p style={{fontSize: 17}}>See more details</p>
                            </Link>
                        </Item.Description>
                    </Item.Content>
                </Item>
            )        
        })
    ) : (
        brewerySearch.map((brewerie) => (
            <Item key={brewerie.id}>
                <Item.Content>
                    <Item.Extra>
                        <Link to={`/details/${brewerie.id}`}>
                            <Image wrapped rounded src={image} />
                        </Link>
                    </Item.Extra>
                    <Item.Meta>
                        {brewerie.state}
                            <h2>{brewerie.name}</h2>
                    </Item.Meta>
                <Item.Description>
                    {/* Link with Brewery's id to have a unique path */}
                    <Link to={`/details/${brewerie.id}`}>
                        <p style={{fontSize: 17}}>See more details</p>
                    </Link>
                </Item.Description>
                </Item.Content>
            </Item>
        ))
        )}
        <h3>No more results found for the search</h3>
        <Item>
            <Item.Content>
                <Item.Extra>
                    <Link to={`/fakebrewery`}>
                        <Image size='small' wrapped rounded src={"https://tekno.esportsku.com/wp-content/uploads/2020/08/Tips-Mengatasi-Error-404-Not-Found-di-PC.png"} />
                    </Link>
                </Item.Extra>
                <Item.Meta>
                    Fake City
                        <h2>Fake Beers</h2>
                </Item.Meta>
                <Item.Description>
                    {/* Link with Brewery's id to have a unique path */}
                    <Link to={`/fakebrewery`}>
                        <p style={{fontSize: 17}}>See more details</p>
                    </Link>
                </Item.Description>
            </Item.Content>
        </Item>
        </Item.Group>
    </Container>
  );
};

export default SearchField;
