import React from 'react';

const Footer = () => {
    return (
        <div className="py-2 fs-6 text-light mt-5 footer" style={{background: "rgb(42,22,4,0.7)"}}>
            <div className="container  d-flex justify-content-between">
                <div>
                   <span>© 2021 TheMealDB  <br/>
Proudly built by Kalmamat </span>
                </div>
                <div>
                    <span><img className="" src={'https://i.ya-webdesign.com/images/cartoon-soup-png-1.png'} width="60"
                               alt=""/></span>

                </div>
            </div>
        </div>
    );
};

export default Footer;