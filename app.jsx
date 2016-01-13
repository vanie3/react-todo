import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props);
        let { name, color } = props

        this.state = { name, color }
    }

    updateName = (ev) => {
        let { value } = ev.target;

        if (value.length === 0) {
            value = this.props.name
        }

        this.setState({ name: value })
    };

    updateColor = (ev) => {
        let { value } = ev.target;

        if (value.length === 0) {
            value = this.props.color
        }

        this.setState({ color: value })
    };

    render() {
        const { name, color } = this.state;
        return (
            <div className='container' style={{color}}>
                <label>What's your name?</label>
                <input type='text' onChange={this.updateName}/>
                <label>What's your favorite color?</label>
                <input type="text" defaultValue={color} onChange={this.updateColor}/>
                <p>Your name is {this.state.name}</p>
                <p>Your name is {this.state.color}</p>
            </div>
        )
    }
}

ReactDOM.render(<App name='Fred' color='red'/>, document.getElementById('react'));
