import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './orderForm.scss';

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            mail: '',
            phone: '',
            street: '',
            houseNumber: '',
            postalCode: '',
            city: ''

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        alert('dziala')
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() { 
        const { 
            name, 
            surname, 
            mail, 
            phone, 
            street, 
            houseNumber, 
            postalCode, 
            city
        } = this.state;
        return (  
            <form 
                action="" 
                className="order-form"
                onSubmit={this.handleSubmit}
            >
                <fieldset className="fieldset">
                    <legend className="fieldset__title">Dane personalne</legend>
                    <label className="fieldset__label" htmlFor="name">
                        Imię
                        <input
                            id="name"
                            className="fieldset__input"
                            onChange={this.handleChange}
                            value={name} 
                            name="name" 
                            type="text"
                            placeholder="Jan"
                        />
                    </label>
                    <label className="fieldset__label" htmlFor="surname">
                        Nazwisko
                        <input 
                            id="surname"
                            className="fieldset__input"
                            onChange={this.handleChange}
                            value={surname} 
                            name="surname" 
                            type="text"
                            placeholder="Kowalski"
                        />
                    </label>
                    <label className="fieldset__label" htmlFor="mail">
                        E-mail
                        <input 
                            id="mail"
                            className="fieldset__input"
                            onChange={this.handleChange}    
                            value={mail} 
                            name="mail" 
                            type="email"
                            placeholder="jankowalski@gmail.com"
                        />
                    </label>
                    <label className="fieldset__label" htmlFor="phone">
                        Telefon (opcjonalne)
                        <input 
                            id="phone"
                            className="fieldset__input"
                            onChange={this.handleChange}
                            value={phone} 
                            name="phone"
                            type="number"
                            placeholder="123 456 789"
                        />
                    </label>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset__title">Dane do dostawy</legend>
                    <label className="fieldset__label" htmlFor="street">
                        Ulica
                        <input 
                            id="street"
                            className="fieldset__input"
                            onChange={this.handleChange}
                            value={street} 
                            name="street" 
                            type="text"
                            placeholder="Zakupowa"
                        />
                    </label>
                    <label className="fieldset__label" htmlFor="houseNumber">
                        Numer domu/mieszkania
                        <input 
                            id="houseNumber"
                            className="fieldset__input"
                            onChange={this.handleChange}
                            value={houseNumber} 
                            name="houseNumber" 
                            type="text"
                            placeholder="12A/5"
                        />
                    </label>
                    <label className="fieldset__label" htmlFor="postalCode">
                        Kod pocztowy
                        <input 
                            id="postalCode"
                            className="fieldset__input"
                            onChange={this.handleChange}
                            value={postalCode} 
                            name="postalCode"
                            type="text"
                            inputmode="numeric"
                            placeholder="99-999"
                        />
                    </label>
                    <label className="fieldset__label" htmlFor="city">
                        Miasto
                        <input
                            id="city"
                            className="fieldset__input"
                            onChange={this.handleChange} 
                            value={city} 
                            name="city" 
                            type="text"
                            placeholder="Eshop"
                        />
                    </label>
                </fieldset>
                {/* <fieldset className="fieldset">
                    <legend className="fieldset__title">Sposób płatności</legend>
                    <label className="fieldset__label" htmlFor="">
                        <input 
                            type="radio"
                        />
                        Przelew tradycyjny
                    </label>
                    <label className="fieldset__label" htmlFor="">
                        <input 
                            type="radio"
                        />
                        Za pobraniem
                    </label>
                </fieldset> */}
                <button className="order-form__submit" type="submit">Zamawiam i płacę</button>
            </form>
        );
    }
}
 
export default OrderForm;

OrderForm.propTypes = {
    virtualCart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
}