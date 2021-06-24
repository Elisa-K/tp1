import React from 'react'
import Card from './Card'
import Button from './Button'

class ManualIncrementer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { n: 0 }
        this.increment = this.increment.bind(this)
    }

    increment(e) {
        e.preventDefault()
        this.setState((state,props) => ({n: state.n + 1}))
    }


    render() {
        return (
            <div>
                <Card
                    title={this.state.n}                    
                >
                    <Button styleClass="bg-indigo-400 hover:bg-indigo-500" handleClick={this.increment}>Incrémenter</Button>
                </Card>
            </div>
        )
    }
}

export default ManualIncrementer;