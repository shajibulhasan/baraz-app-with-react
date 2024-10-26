import React from 'react';
import './TopBanner.css';
import topBannerData from '../Data/topbannerData';
import topImage from '../../images/top.png';

const TopBanner = () => {
    return (
        <div className="bg-brand">
            <div className='container'>
                <img className='mx-auto d-block py-3' src={topImage} alt="" />

                <div className='row'>
                    {
                        topBannerData.map(data=>
                            <div key={data.id} style={{borderRadius:'50px'}} className="col m-2 bg-white py-2">
                                <img width={50} src={data.image} className='img-fluid' alt={data.name} />
                                <a className='text-decoration-none text-dark fw-bold ms-2' href={data.link}>{data.name}</a>
                            </div>
                        )
                    }
                    {/* <div style={{borderRadius:'50px'}} className="col m-2 bg-white py-2">
                        <img width={50} src={feature1} className='img-fluid' alt="" />
                        <a className='text-decoration-none text-dark fw-bold ms-2' href="/">Free Shopping</a>
                    </div>
                    <div style={{borderRadius:'50px'}} className="col m-2 bg-white py-2">
                        <img width={50} src={feature2} className='img-fluid' alt="" />
                        <a className='text-decoration-none text-dark fw-bold ms-2' href="/">Grocery Shopping</a>
                    </div>
                    <div style={{borderRadius:'50px'}} className="col m-2 bg-white py-2">
                        <img width={50} src={feature3} className='img-fluid' alt="" />
                        <a className='text-decoration-none text-dark fw-bold ms-2' href="/">Baraz Mail</a>
                    </div>
                    <div style={{borderRadius:'50px'}} className="col m-2 bg-white py-2">
                        <img width={50} src={feature4} className='img-fluid' alt="" />
                        <a className='text-decoration-none text-dark fw-bold ms-2' href="/">Digital Sheba</a>
                    </div> */}
                </div>
                
            </div>
        </div>
    );
};

export default TopBanner;