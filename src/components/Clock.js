import React from 'react'

class Clock extends React.Component {

    constructor(props) {
        super(props)
        this.state = { date: new Date() }
        this.timer = null
    }

    // exécuté après que la sortie du composant a été injectée dans le DOM
    componentDidMount() {
        // appel de la fonction tick toutes les secondes
        this.timer = window.setInterval(this.tick.bind(this),1000)
    }

    // détruit quand le composant est sortie du DOM
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    // fonction mise a jour du paramètre date
    tick() {
        this.setState({date: new Date()})
    }

    render() {     
        return (
            <div className="bg-gray-100 p-2 mt-4 mb-20 rounded-full shadow-md ">
                <h2 className="text-center sm:text-2xl md:text-3xl font-medium block">On est le {this.state.date.toLocaleDateString()} et il est {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock;