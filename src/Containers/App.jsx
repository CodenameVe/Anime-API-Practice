import { Component } from 'react'
import SearchBox from '../Components/SearchBox.jsx'
import Anime from "../Components/Anime.jsx"
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      series: [],
      searchfield: ''
    };
    this.searchTimeout = null;
  }


getAnime = async (searchTerm) => {
  const response = await fetch(`https://api.jikan.moe/v4/anime?q=${searchTerm}&limit=25`
    );
  const data = await response.json();
  this.setState({ series: data.data });
  console.log(data);
};

componentDidMount() {
  this.getAnime('');
}


SearchChange = (event) => {
  const searchfield = event.target.value;

  this.setState({ searchfield });

  clearTimeout(this.searchTimeout);

  this.searchTimeout = setTimeout(() => {
    this.getAnime(searchfield);
  }, 500);
};



  render() {
    return (
      <>
      <h1 className="app-title">Anime Library</h1>
      <SearchBox  SearchChange={this.SearchChange}/>
      <div>
        <Anime series={this.state.series}/>
      </div>
      </>
    )
  }
}

export default App
