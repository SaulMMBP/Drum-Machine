import React from 'react';
import DrumPad from './DrumPad/DrumPad';

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

const BANKONE = 'bankOne';
const BANKTWO = 'bankTwo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      power: true,
      bank: bankOne,
      setBank: BANKONE,
      display: String.fromCharCode(160),
      volume: 50
    }
    this.handlePower = this.handlePower.bind(this);
    this.handleBank = this.handleBank.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }
  
  handlePower() {
    this.setState({
      power: !this.state.power
    })
  }
  
  handleBank(event) {
    switch(event.target.value) {
      case BANKONE:
        this.setState({
          setBank: BANKONE,
          bank: bankOne,
          display: 'Heater'
        });
        break;
      case BANKTWO:
        this.setState({
          setBank: BANKTWO,
          bank: bankTwo,
          display: 'Smoth Piano'
        });
        break;
      default:
        this.setState({
          setBank: BANKONE,
          bank: bankOne,
          display: 'Heater'
        });
        break;
    }
  }
  
  handleDisplay(id) {
    if(this.state.power) {
      this.setState({
        display: id
      });
    } else {
      this.setState({
        display: String.fromCharCode(160)
      });
    }
  }
  
  handleVolume(event) {
    this.setState({
      display: 'Volume: ' + event.target.value,
      volume: event.target.value
    });
    setTimeout(() => {
      this.setState({
        display: String.fromCharCode(160)
      })
    }, 700);
  }
  
  render() {
    {
      const clips = [].slice.call(document.getElementsByClassName('clip'));
      clips.forEach(sound => {
        sound.volume = this.state.volume / 100;
      });
    }
    return (
      <div id="drum-machine">
        <p><em>Drum Machine</em></p>
        <div className="controls">
          <div className="power-bank">
            <label for="power">Power</label>
            <input id="power" type="checkbox" className="power" onChange={this.handlePower} checked={this.state.power}/>
            <label for="bank" className="bank-label">Bank</label>
            <select id="bank" value={this.state.setBank} onChange={this.handleBank}>
              <option value={BANKONE}>Heater</option>
              <option value={BANKTWO}>Smooth Piano</option>
            </select>
          </div>
          <div id="display">{this.state.display}</div>
          <div className="volume-controls">
            <label for="volume">Volume</label>
            <input id="volume" min="0" max="100" step="1" type="range" onChange={this.handleVolume} value={this.state.volume}/>
          </div>
        </div>
        <DrumPad bank={this.state.bank} power={this.state.power} handleDisplay={this.handleDisplay} volume={this.state.volume}/>
      </div>
    );
  }
}

export default App;
