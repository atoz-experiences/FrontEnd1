import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

    axios

    submitForm = event => {
        event.preventDefault();
    }
    render() {
        return (
            <div className='formContainer'>
                <form onSubmit={this.submitForm} className='cardContainer'>
                    <input type='text' placeholder='Location' name='location' />
                    <input type='text' placeholder='Description' name='description' />
                    <input type='text' placeholder='Guests' name='guests' />
                    <input type='text' placeholder='Availability' name='availability' />
                    <input type='text' placeholder='Pricing' name='pricing' />
                    <input type='file' placeholder='Photo' name='photo' />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;