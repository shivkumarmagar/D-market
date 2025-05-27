import React, { useState, useEffect } from 'react';
import './SellerPage.css';

const SellerPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        description: '',
        image: null,
    });

    const [products, setProducts] = useState([]);

    // Load from localStorage on mount
    useEffect(() => {
        const savedProducts = JSON.parse(localStorage.getItem("sellerProducts")) || [];
        setProducts(savedProducts);
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            ...formData,
            imageUrl: formData.image ? URL.createObjectURL(formData.image) : '',
        };

        const updatedProducts = [newProduct, ...products];
        setProducts(updatedProducts);
        localStorage.setItem("sellerProducts", JSON.stringify(updatedProducts));

        setFormData({ name: '', category: '', price: '', description: '', image: null });
        e.target.reset();
    };

    return (
        <div className="seller-page">

            {/* === Dashboard Section === */}
            <section className="dashboard">
                <h2>📊 Seller Dashboard</h2>
                <div className="dashboard-cards">
                    <div className="dashboard-card">
                        <h3>Total Products</h3>
                        <p>{products.length}</p>
                    </div>
                    {/* You can add more cards later, like earnings, orders, etc. */}
                </div>
            </section>

            {/* === Upload Section === */}
            <section className="upload-section">
                <h2>📤 Upload New Product</h2>

                <div className="filter-section">
                    <select name="category" onChange={handleChange} value={formData.category}>
                        <option value="">Select Category</option>
                        <option value="fruits">Fruits</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="grains">Grains</option>
                        <option value="dairy">Dairy</option>
                    </select>

                    <input
                        type="number"
                        name="price"
                        placeholder="Price (₹)"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </div>

                <form onSubmit={handleSubmit} className="upload-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="description"
                        placeholder="Enter Description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="3"
                        required
                    ></textarea>

                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Add Product</button>
                </form>
            </section>

            {/* === Uploaded Products Section === */}
            <section className="uploaded-section">
                <h2>🛒 Uploaded Products</h2>

                {products.length > 0 ? (
                    <div className="product-grid">
                        {products.map((product, index) => (
                            <div className="product-card" key={index}>
                                <img src={product.imageUrl} alt={product.name} />
                                <h4>{product.name}</h4>
                                <p><strong>Category:</strong> {product.category}</p>
                                <p><strong>Price:</strong> ₹{product.price}</p>
                                <p>{product.description}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="no-products">No products uploaded yet.</p>
                )}
            </section>
        </div>
    );
};

export default SellerPage;
