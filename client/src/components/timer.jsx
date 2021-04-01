import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    time: {},
    seconds: 0,
    min: '',
    sec: ''
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.inputTime = this.inputTime.bind(this);
    this.timeToSeconds = this.timeToSeconds.bind(this);
  }

  inputTime(e){
    this.setState({
      [e.target.name]: Number(e.target.value)
    })
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  timeToSeconds(min, sec) {
    this.setState({
      seconds: (min * 60) + sec
    });
  }

  startTimer() {
    this.timeToSeconds(this.state.min, this.state.sec);
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  render(){
    return (
    <div>
      <label>How long would you like to meditate for today?</label>

      <label>Minutes</label>
      <input type="number" name="min" value={this.state.min} onChange={this.inputTime}/>

      <label>Seconds</label>
      <input type="number" name="sec" value={this.state.sec} onChange={this.inputTime}/>

      m: {this.state.time.m} s: {this.state.time.s}
      <button onClick={this.startTimer}>Start</button>
    </div>
    )
  }
}

export default Timer;

/*
this.state = { time: {}, seconds: 5 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return(
      <div>
        <button onClick={this.startTimer}>Start</button>
        m: {this.state.time.m} s: {this.state.time.s}
      </div>
    );
  }
}
*/