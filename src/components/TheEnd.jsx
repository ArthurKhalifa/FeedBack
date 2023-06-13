import React from 'react'
import './TheEnd.css';
import { FaStar } from 'react-icons/fa';

const starData = {
    rating: <FaStar />,
};


const TheEnd = ({ data, updateFieldHandler }) => {
    return (
        <div className="full">
            <div className="content">
                <div className="header">
                    <h1>Quase lá...</h1>
                    <p>Agradecemos pela sua avaliação, <span className='red'>{data.name}</span></p>
                    <h3>Por favor, confira sua informações a baixo.</h3>
                </div>
                <div className="mid">
                    <h4>Avaliação: <span className='red'>{data.review} Estrelas</span></h4>
                    <h4>Comentário: <span className='red'>{data.comment}</span> </h4>
                </div>
            </div>
        </div>
    )
}

export default TheEnd;