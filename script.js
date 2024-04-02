const DrumButton = (props) => {
    return (
        <button  className={props.className} id={props.id} onClick={props.onClick}>
            <audio src={props.src} className='clip' id={props.audioId}></audio>
            {props.audioId}
        </button>
    );
};


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayText: 'display-text',
            volume: 0.02
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.playClip = this.playClip.bind(this);
        this.displayChangeText = this.displayChangeText.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    };

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    };

    handleKeyPress(event) {
        event.keyCode === 81 ? this.playClip(String.fromCharCode(81)) :
        event.keyCode === 87 ? this.playClip(String.fromCharCode(87)) :
        event.keyCode === 69 ? this.playClip(String.fromCharCode(69)) :
        event.keyCode === 65 ? this.playClip(String.fromCharCode(65)) :
        event.keyCode === 83 ? this.playClip(String.fromCharCode(83)) :
        event.keyCode === 68 ? this.playClip(String.fromCharCode(68)) :
        event.keyCode === 90 ? this.playClip(String.fromCharCode(90)) :
        event.keyCode === 88 ? this.playClip(String.fromCharCode(88)) :
        event.keyCode === 67 ? this.playClip(String.fromCharCode(67)) : 0;
    };

    playClip(id) {
        let audio = document.getElementById(id);
        audio.volume = this.state.volume;
        audio.currentTime = 0;
        audio.play();
        this.displayChangeText(audio.parentNode.id);
    };

    displayChangeText(id) {
        this.setState({
            displayText: id
        });
    }

    handleClick(element) {
        this.playClip(element.target.firstChild.id);
    };

    handleChange(input) {
        let value = input.target.value;
        let text = Math.round(value * 100);
        this.displayChangeText('volume: ' + text + ' %')
        this.setState({
            volume: value
        });
    }

    render() {
        return (
            <div id='drum-machine'>
                <div id='display'><span id='display-text'>{this.state.displayText}</span></div>
                <input type='range' min='0.0' max='1.0' step='0.01' value={this.state.volume} onChange={this.handleChange} id='volume'></input>
                <div id='drum-block'>
                    <DrumButton className='drum-pad' id={'heater-1'} src={'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'} audioId={'Q'} onClick={this.handleClick}/>
                    <DrumButton className='drum-pad' id={'heater-2'} src={'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'} audioId={'W'} onClick={this.handleClick}/>
                    <DrumButton className='drum-pad' id={'heater-3'} src={'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'} audioId={'E'} onClick={this.handleClick}/>
                    <DrumButton className='drum-pad' id={'heater-4-1'} src={'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'} audioId={'A'} onClick={this.handleClick}/>
                    <DrumButton className='drum-pad' id={'heater-6'} src={'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'} audioId={'S'} onClick={this.handleClick}/>
                    <DrumButton className='drum-pad' id={'dsc_oh'} src={'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'} audioId={'D'} onClick={this.handleClick}/>
                    <DrumButton className='drum-pad' id={'kick_n_hat'} src={'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'} audioId={'Z'} onClick={this.handleClick}/>
                    <DrumButton className='drum-pad' id={'rp4-kick-1'} src={'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'} audioId={'X'} onClick={this.handleClick}/>
                    <DrumButton className='drum-pad' id={'cev-h2'} src={'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'} audioId={'C'} onClick={this.handleClick}/>
                </div>
            </div>
        );
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);