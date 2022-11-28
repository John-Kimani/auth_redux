import React from 'react';
import "./footer.css"

function Footer() {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <ul className="footer__list">
                <li></li>
            </ul>
        </div>
        <div className="footer__social">
                <a href="https://www.linkedin.com/in/kimani-john/" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i class="bx bxl-linkedin-square"></i>
                </a>

                <a href="https://twitter.com/kimperria" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="bx bxl-twitter"></i>
                </a>

                <a href="https://github.com/John-Kimani" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="bx bxl-github"></i>
                </a>
            </div>
        <span className='footer__copy'>&#169; Developed by Kimani John || Concepts on state management with redux.</span>
    </footer>
  )
}

export default Footer