import React from 'react';
import preloader from '../../../assets/images/preloader.svg';

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt="loading" style={{width:'40px'}}/>
        </div>
    );
};
