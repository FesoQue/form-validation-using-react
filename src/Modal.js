import React, { useState } from 'react';
import img from './successful.png';

export const Modal = ({ firstName, lastName, closeModal }) => {
  return (
    <>
      <div className='modal'>
        <div className='success-modal'>
          <img src={img} alt='illustration' />
          <p>
            Congrats{' '}
            <span>
              {firstName} {lastName}
            </span>
            , your form has been submitted successfully 🎊
          </p>
          <button className='close-btn' onClick={() => closeModal()}>
            close
          </button>
        </div>
      </div>
      <div className='overlay'></div>
    </>
  );
};
