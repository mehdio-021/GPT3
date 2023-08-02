import React from 'react';
import "./Brand.css"
import { google, slack, dropbox, shopify, atlassian } from "./import"

const Brand = () => {
    return (
        <div className='gp3__brand section__padding'>
           <div >
           <img src={google} alt="google" />
           </div>
           <div className="">
           <img src={slack} alt="slack" />
           </div>
           <div className="">
           <img src={atlassian} alt="atlassian" />
           </div>
           <div className="">
           <img src={dropbox} alt="dropbox" />
           </div>
           <div className="">
           <img src={shopify} alt="shopify" />
           </div>
        </div>
    );
};

export default Brand;