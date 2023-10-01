import React, { useEffect } from 'react';
import ContentChanger from './header';
import ProductForm from './productForm';

export default function Content(){
    useEffect(() => {
        alert('Welcome!');
    }, []);
    return(
        <>
        {/* body */}
        <section className="main-page">
            <ContentChanger/>
            <ProductForm/>
        </section>
        </>
    )
}