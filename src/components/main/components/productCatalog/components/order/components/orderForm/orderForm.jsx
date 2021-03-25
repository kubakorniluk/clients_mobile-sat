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
            city: '',
            payment: '',
            delivery: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelivery = this.handleDelivery.bind(this);
        this.handlePayment = this.handlePayment.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const date = new Date();
        const { 
            name, 
            surname, 
            mail, 
            phone, 
            street, 
            houseNumber, 
            postalCode, 
            city,
            delivery,
            payment
        } = this.state;
        Email.send({
            SecureToken : "9e052a11-41dc-4e59-bb09-37f7c002140d",
            To : "kontakt@easyonlineshop.pl",
            From : `${mail}`,
            Subject : `Zamówienie ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
            Body : `
                <b>Dane zamawiającego</b>: <br/>
                Imię: ${name}<br/>
                Nazwisko: ${surname}<br />
                E-mail: ${mail}<br />
                Telefon: ${phone}<br />
                <br />
                <b>Dane do dostawy</b>:<br />
                Ulica: ${street}<br />
                Numer domu/mieszkania: ${houseNumber}<br />
                Kod pocztowy: ${postalCode}<br />
                Miasto: ${city}<br />
                <b>Sposób dostawy</b>:<br />
                ${delivery}<br />
                <b>Sposób płatności</b>:<br />
                ${payment}<br />
                <br />
                <b>Zamówienie</b>:<br />
                ${this.props.virtualCart.map(item => {
                    return `<b><h3>${item.name}</h3></b>, <h5><b>Cena: ${item.price}zł netto</h5></b>, <h3><b>Ilość: ${item.quantity}</h3></b><br />`
                })}
            `
        }).then(
            message => {
                alert("Dziękujemy za złożenie zamówienia!");
                location.reload();
                console.log(message);
            }
        );

    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handlePayment(event) {
        this.setState({
            payment: event.target.value
        })
    }
    handleDelivery(event) {
        this.setState({
            delivery: event.target.value
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
            city,
            delivery,
            payment
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
                            inputMode="numeric"
                            placeholder="00-000"
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
                            placeholder="Warszawa"
                        />
                    </label>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset__title">Sposób dostawy</legend>
                    <label className="fieldset__label" style={{flexDirection: 'row', alignItems: 'center'}} htmlFor="kurierInpost">
                        <input 
                            id="kurierInpost"
                            type="radio"
                            className="fieldset__radio"
                            value="Kurier Inpost (Od 12zł)"
                            checked={delivery === "Kurier Inpost (Od 12zł)"}
                            onChange={this.handleDelivery}
                        />
                        Kurier Inpost (Od 12zł)
                    </label>
                    <label className="fieldset__label" htmlFor="pocztaPolska" style={{flexDirection: 'row', alignItems: 'center'}}>
                        <input 
                            id="pocztaPolska"
                            type="radio"
                            className="fieldset__radio"
                            value="Poczta polska (Od 12zł)"
                            checked={delivery === "Poczta polska (Od 12zł)"}
                            onChange={this.handleDelivery}
                        />
                        Poczta polska (Od 12zł)
                    </label>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset__title">Sposób płatności</legend>
                    <label className="fieldset__label" style={{flexDirection: 'row', alignItems: 'center'}} htmlFor="przelewTradycyjny">
                        <input 
                            id="przelewTradycyjny"
                            type="radio"
                            className="fieldset__radio"
                            value="Przelew tradycyjny"
                            checked={payment === "Przelew tradycyjny"}
                            onChange={this.handlePayment}
                        />
                        Przelew tradycyjny
                    </label>
                    <label className="fieldset__label" htmlFor="zaPobraniem" style={{flexDirection: 'row', alignItems: 'center'}}>
                        <input 
                            id="zaPobraniem"
                            type="radio"
                            className="fieldset__radio"
                            value="Za pobraniem"
                            checked={payment === "Za pobraniem"}
                            onChange={this.handlePayment}
                        />
                        Za pobraniem
                    </label>
                </fieldset>
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