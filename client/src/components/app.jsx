import React from 'react';
import axios from 'axios';
import JournalForm from './journalForm.jsx';
import PreviousEntries from './previousEntries.jsx';
import JournalList from './journalList.jsx'
import genie from '../../dist/genie.jpg';
import journalEntriesCache from '../../../server/journalEntriesCache.js'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      previousEntries: [],
      page: 0,
      list: false,
      keyword: '',
      date: '',
    }

    this.addEntry = this.addEntry.bind(this);
    this.getEntries = this.getEntries.bind(this);
    this.changePage = this.changePage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.findEntrySubmit = this.findEntrySubmit.bind(this);
  }

  componentDidMount(){
    axios.get('/journal')
      .then((result) => {
        this.setState({
          previousEntries: result.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  addEntry(journal){
    axios.post('/journal', {
      entry: journal
    })
      .then((result) => {
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  findEntrySubmit(){
    this.setState({
      keyword: '',
      date: ''
    })
  }

  changePage(e){
    e.preventDefault();
    this.setState({
      page: Number(e.target.value) || Number(e.target.id)
    })
  }

  getEntries(entrySearch){
    console.log(entrySearch)
    const { previousEntries } = this.state;
    // axios.get(`/journal/keyword=${entrySearch.keyword}&date=${entrySearch.date}`)
    //   .then((results) => {
    //     this.setState({
    //       previousEntries: [...previousEntries, results.data]
    //     })
    //   })
    //   .catch((err) => {
    //     console.log('err', err)
    //   })
  }

  render() {
    const { page, list, date, keyword, previousEntries } = this.state;
    return(
      <div>
        <h1 id="0" onClick={this.changePage}>Journal Genie</h1>
        <div id="mainButtons">
          <button id="writeSomething" onClick={this.changePage} value="1">Write Something</button>
          <button id="findSomething" onClick={this.changePage} value="2">Find Something</button>
        </div>
        {
        page === 0 &&
        <div id="genie">
          <img src={genie} />
        </div>
        }
        {
          page === 1 &&
          <div>
            <JournalForm addEntry={this.addEntry} />
          </div>
        }
        {
          page === 2 &&
          <div>
            <div id="searchBars">
              <PreviousEntries findEntrySubmit={this.findEntrySubmit} handleChange={this.handleChange} keyword={keyword} date={date}/>
            {/* {
              list === true && */}
              <JournalList previousEntries={previousEntries} keyword={keyword} date={date}/>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default App;