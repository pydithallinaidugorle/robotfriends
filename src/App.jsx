import React, {Component} from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import {person} from './Person'
import 'tachyons'
import './index.css'
import './App.css'
import Scroll from './Scroll'
import Errorboundry from './Errorboundry'

class App extends Component{
  constructor(){
    super()
    this.state = {
      person : [],
      searchfield : ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(users => {this.setState({person:users})})
  }
  onSearchChange = (event) => {
    this.setState({searchfield : event.target.value})
  }
    render(){
      const filteredPersons = this.state.person.filter(person => {
        return person.title.includes(this.state.searchfield)
      })
      return (
        <div className='tc'>
          <h1 className='f1'>Robots</h1>
          <SearchBox searchchange={this.onSearchChange}/>
          <Scroll>
            <Errorboundry>
              <CardList person = {filteredPersons}/>
            </Errorboundry>
          </Scroll>
        </div>
      )
    }
}
export default App