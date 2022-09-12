import React from 'react';

const activePadOn = {
    background: '#F7C539'
  }
  
  const activePadOff = {
    background: '#aaa'
  }
  
  const inactivePad = {
    background: '#E03E3E'
  }
  
  class Pad extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        padstyle: inactivePad
      };
      this.playSound = this.playSound.bind(this);
      this.activatePad = this.activatePad.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
  
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
    handleKeyPress(e) {
      if (e.key.toUpperCase() === this.props.keyTrigger) {
        this.playSound();
      }
    }
    
    playSound() {
      if(this.props.power) {
        const sound = document.getElementById(this.props.keyTrigger);
        sound.play();
        this.activatePad();
        this.props.handleDisplay(this.props.clipId.replace(/-/g, " "));
      }
    }
    
    activatePad() {
      if(this.props.power) {
        this.setState({
          padstyle: activePadOn
        });
      } else {
        this.setState({
          padstyle: activePadOff
        });
      }
      setTimeout(() => {
        this.setState({
          padstyle: inactivePad
        })
      }, 100);
    }
    
    render() {
      return (
        <div className="drum-pad" id={this.props.clipId} onClick={this.playSound} style={this.state.padstyle}>
          <audio className="clip" id={this.props.keyTrigger} src={this.props.clip} />
          {this.props.keyTrigger}
        </div>
      );
    }
  }

  export default Pad;