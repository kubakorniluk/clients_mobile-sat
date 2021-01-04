import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
import './loading.scss';

const Loading = () => {
    return (
        <FontAwesomeIcon className='product-list__loading' icon={faSpinner} spin={true}/> 
    );
}
 
export default Loading;