import React from 'react'
// import { Link } from 'react-router-dom'

const Card = (prop) => {
    return (
        <section className='d-inline-flex container-fluid col-md-3 my-3'>
            <div className="card shadow text-bg-secondary" style={{ width: "auto" }}>
                <img src={prop.img} className="card-img-top" alt="cardimg" />
                <div class="card-body">
                    <h5 class="card-title">{prop.cardtitle}</h5>
                    <p class="card-text">{prop.carddesc}</p>
                </div>
            </div>
        </section>
    )
}

export default Card;