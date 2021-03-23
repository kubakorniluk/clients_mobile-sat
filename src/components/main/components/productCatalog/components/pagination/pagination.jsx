import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons/faCaretLeft';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import PropTypes from 'prop-types';
import './pagination.scss';
const show = {
    display: 'block'
}
const hide = {
    display: 'none'
}
class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1
        }
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }
    mapIntervalsFromData() {
        const {
            data,
            productsPerPage
        } = this.props;
        let indexList = [];
        if(data.length) {
            for(let i = 0; i < data.length; i++) {
                indexList.push(i + 1);
            }
            const splitIndexesToSublists = (array, slice) => {
                let sublists = [];
                for(let i = 0; i < array.length; i+=slice) {
                    sublists.push(array.slice(i, i+slice));
                }
                return sublists;
            }  
            return splitIndexesToSublists(indexList, productsPerPage)
        } else {
            return null;
        }
    }
    prevPage() {
        const { currentPage } = this.state;
        this.setState(prevState => ({
            currentPage: prevState.currentPage - 1
        }), () => {
            let currentInterval = this.mapIntervalsFromData();
            this.props.setCurrentProductsInterval(currentInterval[currentPage - 2]);
        });
    }
    nextPage() {
        const { 
            setCurrentProductsInterval
        } = this.props;
        const { currentPage } = this.state;
        this.setState(prevState => ({
            currentPage: prevState.currentPage + 1
        }), () => {
            let currentInterval = this.mapIntervalsFromData();
            setCurrentProductsInterval(currentInterval[currentPage]);
        });
    }
    render() {
        const { 
            data,
            productsPerPage
        } = this.props;
        const {
            currentPage
        } = this.state;
        const lastPage = Math.ceil(data.length / productsPerPage);
        return (
            <ul className="pagination">
                <li 
                    onClick={this.prevPage}
                    className="pagination__item pagination__item--prev"
                    style={(currentPage == 1 || currentPage == 0) ? hide : show}
                >
                    <FontAwesomeIcon icon={faCaretLeft}/>
                </li>
                <li className="pagination__item">{currentPage}</li>
                <li className="pagination__item">z</li>
                <li className="pagination__item">{lastPage}</li>
                <li 
                    onClick={this.nextPage}
                    className="pagination__item pagination__item--next"
                    style={(currentPage == lastPage || currentPage == 0) ? hide : show}
                >
                    <FontAwesomeIcon icon={faCaretRight}/>
                </li>
            </ul>
        )
    }
}
export default Pagination;

Pagination.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        })
    ).isRequired,
    productsPerPage: PropTypes.number.isRequired,
    setCurrentProductsInterval: PropTypes.func.isRequired
}