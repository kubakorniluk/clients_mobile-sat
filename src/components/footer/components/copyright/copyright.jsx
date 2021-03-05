import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp.js';
import { reactScrollIntoView } from 'helpers/reactScrollIntoView';
import './copyright.scss';
const Copyright = () => {
    const date = new Date().getFullYear();
    return ( 
        
        <div className="copyright">
            <small className="copyright__text">&copy; {date} Mobile Sat. Wszelkie prawa zastrzeżone.</small>
            <small className="copyright__author">Created by Kuba Korniluk</small>
            <div className="copyright__top" onClick={() => reactScrollIntoView('.header')}>
                 Wróć na górę
            </div>
            {/* <FontAwesomeIcon icon={faChevronUp}/> */}
        </div>
    );
}
 
export default Copyright;