import React from 'react'
import mountaingrey from '../assets/mountaingrey1.jpg'
import '../App.css'

const Header = () => {
    return (
        <header className='mb-1'>
            <div className='position-relative'>
                <h2 className='border border-2 p-3 rounded-4 display-1 text-light fw-bold position-absolute top-50 start-50 translate-middle' style={{
                    fontSize: "13vw"
                }}>HikeWithMe</h2>
                <img src={mountaingrey} className="w-100 h-100 bg-dark opacity-50" alt="hero" />
            </div>
        </header>
    )
}

export default Header