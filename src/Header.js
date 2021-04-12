import React, {useState} from 'react';
import {Link, withRouter} from "react-router-dom";


const Header = ({history}) => {
    const [search, setSearch] = useState('')


    const handleSearch = (e) => {
        if(e.key === 'Enter'){
            console.log(search)
            history.push(`/browse/${search}`)
        }
    }


    return (
    <section className="header">
        <div className="header " style={{background: "rgb(42,22,4,0.7)"}}>
            <nav className="navbar navbar-light ">
                <div className="container">
                    <div>
                        <Link to="/" className="navbar-brand  fs-1 text-light bold"><img className="" src={'https://i.ya-webdesign.com/images/cartoon-soup-png-1.png'} width="60" alt=""/>TheMealKalmamat</Link>
                    </div>

                    <div className="d-flex align-items-center">
                        <Link to="/" className="mx-3 text-decoration-none fw-bold text-uppercase text-light"><i
                            className="fas fa-home"></i> Home
                        </Link>
                    </div>
                </div>
            </nav>

        </div>
        <div className="container input-group header-input">
            <input type="text" className="form-control" placeholder="Search" aria-label="Username"
                   aria-describedby="basic-addon1"
                   onChange={(e) => setSearch(e.target.value)}
                   onKeyPress={handleSearch}
            />
        </div>
    </section>
    );
};

export default withRouter(Header);