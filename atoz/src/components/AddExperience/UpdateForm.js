import React from 'react';

class UpdateForm extends React.Component {
    state = {
        experience: this.props.activeExperience
    }

    changeHandler = e => {
        e.persist();

        let value = e.target.value;
        if (e.target.name === 'age') {
            value = parseInt(value, 10);
        } 

        this,this.setState(prevState => ({
            experience: {
                ...prevState.experience,
                [e.target.name]: value
            }
        }))
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.updateExperience(this.state.experience);
    }

    render() {
        return (
            <div>
                <h2>Update Experience</h2>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name="title" onChange={this.changeHandler} placeholder="Title" value={this.state.experience.title} />
                    <input type="number" name="date" onChange={this.changeHandler} placeholder="Date" value={this.state.experience.date} />
                    <input type="text" name="location" onChange={this.changeHandler} placeholder="Location" value={this.state.experience.location} />
                    <input type="text" name="description" onChange={this.changeHandler} placeholder="Description" value={this.state.experience.description} />
                    <input type="number" name="price" onChange={this.changeHandler} placeholder="Price" value={this.state.experience.price} />
                    <button>Update Exoerience</button>
                </form>
            </div>
        )
    }
}

export default UpdateForm;