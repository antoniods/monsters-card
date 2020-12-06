import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';



class App extends Component {
 constructor() {
  super();

    this.state = {
      monsters : [],
      searchField : ''
    };
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters:users}));
  }

   render() {
  
    
    // const monster = this.state.monsters;
    // const searchField = this.state.searchField; al posto di scrivere cosi semplifico ....
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter (monsters => 
      monsters.name.toLowerCase().includes(searchField.toLowerCase()) //toLowerCase per il render e per stare sicuri nel caso si scriva con in maiuscolo
      )

  
    return (
    <div className="App">
      <h1>I mostri di React</h1>
      <SearchBox
        placeholder='Ricerca il mostro' 
        handleChange={e => this.setState({ searchField: e.target.value} )}
        />
      <CardList monsters={filteredMonsters}/>               
    </div>
   );
 }
}
export default App;
