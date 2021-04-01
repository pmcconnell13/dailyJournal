import React from 'react';
//import click1 from './click1.wav';

class Metronome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4
    };

    this.handleBpmChange = this.handleBpmChange.bind(this);
  }

  handleBpmChange(e){
    this.setState({
      bpm: e.target.value
    });
  }

  render() {
    const { playing, bpm } = this.state;

    return (
      <div className="metronome">
        <div id="metronomeTitle">Metronome</div>
        <div className="bpm-slider">
          <div>{bpm} BPM</div>
          <input
            type="range"
            min="20"
            max="100"
            value={bpm}
            onChange={this.handleBpmChange}
            />
        </div>
        <button id="metronomeButton">
          {playing ? 'Stop' : 'Play'}
        </button>
      </div>
    );
  }
}

export default Metronome;