import React, { useEffect } from 'react';
import ContentChanger from './header';
import ProductForm from './productForm';

export default function Body(){
    useEffect(() => {
        alert('Welcome!');
    }, []);
    return(
        <>
        {/* body */}
        <section className="main-page">
            <ContentChanger/>
            <div className="container">
                <div className="row">
                    {/* column 1 */}
                    <div className="col" />
                        {/* column 2 */}
                        <ProductForm/>
                    {/* column 3 */}
                    <div className="col" />
                </div>
            </div>
        </section>
        </>
    )
}