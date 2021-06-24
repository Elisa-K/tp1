import React from 'react'
import Button from './Button'
function Field({ name, label, type, value, onChange }) {


    return (
        <div className="flex-auto">
            <label htmlFor={name} className="block text-gray-500 font-bold mb-1">{label}</label>

            <input type={type} id={name} name={name} value={value} onChange={onChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " />
        </div>
    )

}

function Checkbox({ name, label, type, value, onChange }) {
    return (
        <div className="flex-auto">
            <input type={type} id={name} name={name} checked={value} onChange={onChange} className="mr-2 " />
            <label htmlFor={name} className="block text-gray-500 font-bold mb-1">{label}</label>
        </div>
    )
}

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lastname: '',
            firstname: '',
            newsletter: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const name = e.target.name
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        this.setState(
            {
                [name]: value
            }
        )
    }

    handleSubmit(e) {
        e.preventDefault()
        const data = JSON.stringify(this.state)
        this.setState({
            lastname: '',
            firstname: '',
            newsletter: false
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="flex flex-wrap md:items-center gap-2 mb-6">
                    <Field
                        name="lastname"
                        label="Nom"
                        type="text"
                        value={this.state.lastname}
                        onChange={this.handleChange}
                    />
                    <Field
                        name="firstname"
                        label="Prénom"
                        type="text"
                        value={this.state.firstname}
                        onChange={this.handleChange}
                    />
                    <Checkbox
                        name="newsletter"
                        label="S'abonner à la newsletter"
                        type="checkbox"
                        value={this.state.newsletter}
                        onChange={this.handleChange}
                    />


                </div>
                <div className="w-full">
                    <Button styleClass="bg-indigo-400 hover:bg-indigo-500">Envoyer</Button>

                </div>
            </form>
        )
    }

}
export default Form