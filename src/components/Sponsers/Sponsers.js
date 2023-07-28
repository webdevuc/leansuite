import React from 'react';
import amazon from '../../assets/svg/amazon-s3.svg';
import googlecloud from '../../assets/svg/google-cloud-3.svg';
import oracle from '../../assets/svg/oracle-6.svg';
import power from '../../assets/svg/power-bi-1.svg';
import sap from '../../assets/svg/sap-3.svg';
import tableau from '../../assets/svg/tableau-logo.svg';
import "./Sponsers.css";

const Sponsers = () => {
  return (
    <div className='container my-5'>
      <h1 className='title'>We integrate with the solutions you are already using</h1>
      <div className='row mt-5 text-center'>
        <div className='col-6 col-sm-4 col-md-2'>
          <img className="sponser" src={tableau} alt='Tableau' />
        </div>
        <div className='col-6 col-sm-4 col-md-2'>
          <img className="sponser" src={oracle} alt='Oracle' />
        </div>
      
        <div className='col-6 col-sm-4 col-md-2'>
          <img className="sponser" src={googlecloud} alt='Google Cloud' />
        </div>
        <div className='col-6 col-sm-4 col-md-2'>
          <img className="sponser" src={amazon} alt='Amazon' />
        </div>
        <div className='col-6 col-sm-4 col-md-2'>
          <img className="sponser" src={sap} alt='SAP' />
        </div>
        <div className='col-6 col-sm-4 col-md-2'>
          <img className="sponser" src={power} alt='Power BI' />
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
