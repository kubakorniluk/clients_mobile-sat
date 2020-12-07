import React from 'react';
import Title from './components/title/title';
import ProductCatalog from './components/productCatalog/productCatalog';
import './main.scss';
function Main() {
    return (
        <main className="main">
            <ProductCatalog />
        </main>
    );
}
export default Main;