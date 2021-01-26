import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons/faCaretLeft';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import PropTypes from 'prop-types';
import './pagination.scss';
class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            productsPerPage: 12
        }
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }
    previousPage() {

    }
    nextPage() {

    }
    render() {
        return (
            <ul className="pagination">
                <li 
                    onClick={this.previousPage}
                    className="pagination__item pagination__item--prev"
                >
                    <FontAwesomeIcon icon={faCaretLeft}/>
                </li>
                <li className="pagination__item">{this.state.currentPage}</li>
                <li className="pagination__item">z</li>
                <li className="pagination__item">{Math.ceil(this.props.data.length / this.state.productsPerPage)}</li>
                <li 
                    onClick={this.previousNext}
                    className="pagination__item pagination__item--next"
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
    ).isRequired
}