import React from 'react';
import bgMain from '../../Assets/img/bg-main.jpg'
import { CountryList } from '../../Assets/json/countryList';


const Main = () => {
    return (
        <div>
            <img className='h-[40em] w-full bg-cover' src={bgMain} />
        </div>
    );
};

export default Main;
