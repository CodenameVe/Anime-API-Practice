import { Component } from 'react'
import SearchBox from './SearchBox.jsx'
import Anime from "./Anime.jsx"
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      series: [],
      searchfield: ''
    }
  }


componentDidMount() {
  fetch("https://api.jikan.moe/v4/anime")
  .then(response => response.json())
  .then(anime => this.setState({ series: anime.data }));
}

SearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    console.log(event.target.value)
  }



  render() {
    const { series, searchfield } = this.state;
    const filteredSeries = series.filter(series => {
      return series.title.toLowerCase().includes(searchfield.toLowerCase());
      console.log(filteredSeries)
    })
    return (
      <>
      <SearchBox  SearchChange={this.SearchChange}/>
      <div>
        <Anime series={filteredSeries}/>
      </div>
      </>
    )
  }
}

export default App
