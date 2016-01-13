import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: props.name }
    }

    updateName = (ev) => {
        const { value } = ev.target;

        this.setState({ name: value })
    };

    render() {
        return (
            <div className='container' style={{color: 'red'}}>
                <label>What's your name?</label>
                <input type='text' onBlur={this.updateName}/>
                <p>Your name is {this.state.name}</p>
            </div>
        )
    }
}

ReactDOM.render(<App name='Fred'/>, document.getElementById('react'));
