import React from 'react'
import Card from './Card'
import Button from './Button'

class Incrementer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            n: props.start,
            timer: null
        }
        this.toogle = this.toogle.bind(this)
        this.reset = this.reset.bind(this)
    }

    componentWillMount() {
        this.play()
    }

    componentWillUnmount() {
        clearInterval(this.state.timer)
    }

    increment() {
        this.setState((state, props) => ({ n: state.n + props.step }))
    }

    pause() {
        clearInterval(this.state.timer)
        this.setState({ timer: null })
    }

    play() {
        clearInterval(this.state.timer)
        this.setState({
            timer: window.setInterval(this.increment.bind(this), 1000)
        })
    }

    reset() {
        this.pause()
        this.play()
        this.setState((state, props) => ({ n: props.step }))
    }

    toogle() {
        return this.state.timer ? this.pause() : this.play()
    }

    label() {
        return this.state.timer ? "pause" : "lecture"
    }

    styleButton() {
        return this.state.timer ? "bg-red-400 hover:bg-red-500" : "bg-green-400 hover:bg-green-500"
    }

    render() {

        return (

            <div>
                <Card
                    title={this.state.n}
                >
                    <Button styleClass={this.styleButton()} handleClick={this.toogle}>{this.label()}</Button>
                    <Button styleClass="bg-gray-400 hover:bg-gray-500" handleClick={this.reset}>Réinitialiser</Button>
                </Card>
            </div>

        )
    }
}

Incrementer.defaultProps = {
    start: 0,
    step: 1
}

export default Incrementer;