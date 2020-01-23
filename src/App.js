import React from 'react';
import './App.css';
import { getAllCharacters, getCharacterById, getCharacterByName } from './services/api-helper';
import Main from './components/Main';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      searchedName: null,
      searchInput: ''
      // isLoading: true
    }
  }

  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      searchInput: value
    })
    console.log(value)

  }

  handleClick = async (e) => {
    e.preventDefault();
    let character = await getCharacterByName(this.state.searchInput);
    this.setState({
      searchedName: character.data
    })
    console.log(character.data)
  }


  async componentDidMount() {
    let response = await getAllCharacters();
    this.setState({
      characters: response.data
    })
    // console.log(response.data)

  }
  render() {
    return (
      <div className="App">
        <Main searchDeets={this.state.searchedName} searchInput={this.state.searchInput} handleClick={this.handleClick} handleChange={this.handleChange} />

      </div>
    );
  }
}

export default App;