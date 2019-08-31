import React from 'react';
import './Form.css';

class Form extends React.Component {
    state= {
        experience: {
            title: "",
            date: "",
            location: "",
            description: "",
            price: "",
            image: ""
        }
    }

    changeHandler = e => {
        e.persist();

        let value = e.target.value;
        if (e.target.name === 'age') {
            value = parseInt(value, 10);
        }

        this.setState(prevState => ({
            experience: {
                ...prevState.experience,
                [e.target.name]: value
            }
        }))
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addExperience(this.state.experience);
        this.setState({ experience: {
            title: "",
            date: "",
            location: "",
            description: "",
            price: "",
            image: ""
        }})
    }

    render() {
        console.log(this.props, "props from form");
        return (
            <div className='formContainer'>
                <form onSubmit={this.handleSubmit} className='cardContainer'>
                    <input type="text" name="title" onChange={this.changeHandler} placeholder="Title" value={this.state.experience.title} />
                    <input type="date" name="date" onChange={this.changeHandler} placeholder="Date" value={this.state.experience.date} />
                    <input type="text" name="location" onChange={this.changeHandler} placeholder="Location" value={this.state.experience.location} />
                    <input type="text" name="description" onChange={this.changeHandler} placeholder="Description" value={this.state.experience.description} />
                    <input type="number" name="price" onChange={this.changeHandler} placeholder="Price" value={this.state.experience.price} />
                    <input type="file" name="image" onChange={this.changeHandler} placeholder="Image" value={this.state.experience.image} />
                    <button>Add New Experiencet</button>
                </form>
            </div>
        );
    }
}

export default Form;