import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';



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
      <input 
        type='search' 
        placeholder='Ricerca il mostro' 
        onChange={e => this.setState({searchField:e.target.value})}
          // problema async risolto passando come secondo valore lo state "", () => console.log(this.state)"   
      />
      <CardList monsters={filteredMonsters}/>               
    </div>
   );
 }
}
export default App;
