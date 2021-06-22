import React from 'react';
import { Images } from '../Constant/Images';
import '../css/Error.css';

const Error = () => {
    return (
        <div>
            <div className="error">
                <img className="img_404" src={Images.error404} alt="" />
                <h3>Whoops... Page not Found :(</h3>
                <button className="buttonGoToHome"><a href="/">GO TO HOME</a></button>
                <img className="img_cable" src={Images.cable} alt="" />
            </div>
        </div>
    );
};

export default Error;