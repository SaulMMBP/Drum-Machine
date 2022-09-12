import React from 'react';
import Pad from '../Pad/Pad';

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let pads;
        if (this.props.power) {
            pads = this.props.bank.map((sound) => (
                <Pad
                    clipId={sound.id}
                    keyTrigger={sound.keyTrigger}
                    clip={sound.url}
                    handleDisplay={this.props.handleDisplay}
                    power={this.props.power}
                    bank={this.props.bank}
                />
            ));
        } else {
            pads = this.props.bank.map((sound) => (
                <Pad
                    clipId={sound.id}
                    keyTrigger={sound.keyTrigger}
                    clip="#"
                    handleDisplay={this.props.handleDisplay}
                    power={this.props.power}
                    bank={this.props.bank}
                />
            ));
        }
        return <div className="drum-pads">{pads}</div>;
    }
}

export default DrumPad;