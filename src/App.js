import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {InstantSearch, Configure, Hits, SearchBox, RefinementList, Menu} from 'react-instantsearch/dom';


class App extends Component {
  render() {
    return (
        <InstantSearch
            appId = "U53NXZ4YKO"
            apiKey = "8bb5c78e25fac4e8eb49456c61db570b"
            indexName = 'questions-dev1'
            >
            <Configure
              query = 'what'
              facets = {`region: ${'en_america'}`}
              highlightPreTag = "<em>"
              highlightPostTag = "</em>"
            />
            
            <Hits
              hitComponent = {this.renderResult}
            />

          </InstantSearch>
    );
  }
}

export default App;
// <Menu attributeName="region" defaultRefinement="en_other" />
// <RefinementList attributeName="region" defaultRefinement="de_europe" />
// <Menu attributeName="region" defaultRefinement={userRegion}
//               transformItems = {items => items.filter(item => item.region !== userRegion)}
//             />
