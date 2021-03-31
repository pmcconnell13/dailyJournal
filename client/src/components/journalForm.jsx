import React from 'react';

class JournalForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      journalEntry: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(e){
  this.setState({
    journalEntry: e.target.value
  })
}

handleSubmit(e){
  this.props.addEntry(this.state.journalEntry)
}

  render(){
    return(
      <div>
        <textarea
        id="textArea"
        value={this.state.journalEntry}
        type="text"
        onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default JournalForm;