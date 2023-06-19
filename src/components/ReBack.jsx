import React from 'react'
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import './ReBack.css';

const ReBack = ({ data, updateFieldHandler }) => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className="review-form">
            <h2>Avalie nosso serviço</h2>
            <div className="stars">
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <label aria-required>
                            <input type="radio" name="review" id='inpt' req
                                value={ratingValue} onClick={() => {
                                    setRating(ratingValue);
                                    updateFieldHandler("review", ratingValue);
                                }}
                                checked={data.review === { ratingValue } || "ratingValue"}
                            //    onChange={(e) => updateFieldHandler("review", e.target.value)}
                            />
                            <FaStar className='star' color={ratingValue < (hover || rating) + 1 ? "#ff0707" : "gray"}
                                size={80}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)} />
                        </label>
                    )
                })}
            </div>
            <p>Você selecionou <span className='red'>{[rating]}</span> Estrelas</p>
            <div className="comentario">
                <label htmlFor="comment" id='cmt'>Comentário</label>
                <textarea name="comment" id="comment" cols="50" rows="5"
                    placeholder='(Opicional) Conte-nos sua experiência com o produto'
                    value={data.comment || ""}
                    onChange={(e) => updateFieldHandler("comment", e.target.value)}>
                </textarea>
            </div>
        </div>
    )
}

export default ReBack;