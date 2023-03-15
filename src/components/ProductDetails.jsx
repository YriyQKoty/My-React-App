import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

const getProductById = (products, id) => {

    return products.products.find((p) => p.id === parseInt(id));
     
};

const ProductDetails = (products) => {
    const { productId } = useParams();

    const getProduct = useMemo(() => getProductById(products, productId), [
        products,
        productId,
    ]);

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        setComments([...comments, newComment]);
        alert(`Successfuly posted a new comment: ${newComment}`)
        setNewComment('');
    };

    const handleNewCommentChange = (event) => {
        setNewComment(event.target.value);
    };


    return (
        <div style={{ marginTop: 100, marginLeft: 50 }}>
            <h1>{getProduct.title}</h1>
            <p>{getProduct.description}</p>
            <h2>Comments</h2>
            <div>
                {comments.map((comment, index) => (
                    <div key={index}>{comment}</div>
                ))}
            </div>
            <form onSubmit={handleCommentSubmit}>

                Add a comment:
                <textarea value={newComment} onChange={handleNewCommentChange}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProductDetails;