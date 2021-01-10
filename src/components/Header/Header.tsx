import * as React from 'react';
import './Header.css'

const header: React.FC = () => {

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    StackOverflow Lite
            </a>
            </div>
        </nav>
    )
}

export default header