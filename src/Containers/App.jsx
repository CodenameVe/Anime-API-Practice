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
    }
  }


componentDidMount() {
  fetch("https://api.jikan.moe/v4/anime")
  .then(response => response.json())
  .then(anime => this.setState({ series: anime.data }));
  console.log(this.state.series)
}

SearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    this.setState({ series: this.state.series.filter(series => {
      return series.title.toLowerCase().includes(event.target.value.toLowerCase());
    })})
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
        <Anime series={this.state.series}/>
      </div>
      </>
    )
  }
}

export default App
