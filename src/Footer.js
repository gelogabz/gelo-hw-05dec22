import React from 'react'

const Footer = () => {
    return (
        <footer className="bottom container-fluid py-1 mt-5 w-75">
            <ul className="nav justify-content-center mt-3 border-bottom">
                <li><a href="https://twitter.com/gelogabz" className="nav-link px-2 text-primary" target="_blank" rel="noreferrer"><i
                    className="nav-item bi bi-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/thegeloman/" className="nav-link px-2 text-primary"
                    target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a></li>
                <li><a href="https://github.com/gelogabz" className="nav-link px-2 text-primary" target="_blank" rel="noreferrer"><i
                    className="bi bi-github"></i></a></li>
                <li><a href="https://www.reddit.com/user/gelogabz" className="nav-link px-2 text-primary" target="_blank" rel="noreferrer"><i
                    className="bi bi-reddit"></i></a></li>
            </ul>
            <p id="footer-text" className="text-center text-muted m-1">&copy;2022 <br />Gelo Baring for WD20P </p>
        </footer>
    )
}

export default Footer