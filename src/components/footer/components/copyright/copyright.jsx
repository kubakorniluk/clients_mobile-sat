import React from 'react';
import { reactScrollIntoView } from 'helpers/reactScrollIntoView';
import './copyright.scss';
const Copyright = () => {
    const date = new Date().getFullYear();
    return ( 
        
        <div className="copyright">
            <small className="copyright__text">&copy; { date } Mobile Sat. Wszelkie prawa zastrzeżone.</small>
            <small className="copyright__author">Created by Kuba Korniluk</small>
            <small className="copyright__top" onClick={() => reactScrollIntoView('.header')}>Wróć na górę</small>
        </div>
    );
}
 
export default Copyright;