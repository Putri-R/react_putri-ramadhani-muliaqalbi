import bootstrap from './asset/bootstrap-logo.svg.svg';
import ContentChanger from './header';
import ProductForm from './productForm';

export default function Body(){
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
                    {/* product table */}
                    <div className="product-list">
                    <h2 className="text-center">List Product</h2>
                    <table id="product-table">
                        <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Category</th>
                            <th>Image of Product</th>
                            <th>Product Freshness</th>
                            <th>Additional Description</th>
                            <th>Product Price</th>
                        </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                    {/* delete and search buttons */}
                    <input
                        className="form-control me-2 searchInput"
                        name="searchInput"
                        id="searchInput"
                        type="search"
                        placeholder="Search by Product Name"
                        aria-label="Search"
                    />
                    <div className="tablebtn">
                        <button
                        type="button"
                        className="btn btn-primary deleteButton"
                        id="deleteButton"
                        // onClick={deletebtn}
                        >
                        Delete
                        </button>
                        <button
                        className="btn btn-outline-primary searchButton"
                        type="submit"
                        // onClick={searchProducts}
                        >
                        Search
                        </button>
                    </div>
                    </div>
                    {/* column 3 */}
                    <div className="col" />
                </div>
            </div>
        </section>
        </>
    )
}