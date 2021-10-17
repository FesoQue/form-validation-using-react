import React, { useState } from 'react';
import { Modal } from './Modal';

export const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmpw] = useState('');
  const [success1, setSuccess1] = useState(false);
  const [error1, setError1] = useState(false);
  const [success2, setSuccess2] = useState(false);
  const [error2, setError2] = useState(false);
  const [success3, setSuccess3] = useState(false);
  const [error3, setError3] = useState(false);
  const [success4, setSuccess4] = useState(false);
  const [error4, setError4] = useState(false);
  const [success5, setSuccess5] = useState(false);
  const [error5, setError5] = useState(false);
  const [notMatch, setNotMatch] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFirstName = (e) => {
    const value = e.target.value;
    setFirstName(value);
  };
  const handleLastName = (e) => {
    const value = e.target.value;
    setLastName(value);
  };
  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  const handleConfirmpw = (e) => {
    const value = e.target.value;
    setConfirmpw(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // firsstname
    if (firstName) {
      setSuccess1(true);
      setError1(false);
    } else {
      setSuccess1(false);
      setError1(true);
    }
    // lastname
    if (lastName) {
      setSuccess2(true);
      setError2(false);
    } else {
      setSuccess2(false);
      setError2(true);
    }
    // email
    if (email) {
      setSuccess3(true);
      setError3(false);
    } else {
      setSuccess3(false);
      setError3(true);
    }
    // pws
    if (password) {
      setSuccess4(true);
      setError4(false);
    } else {
      setSuccess4(false);
      setError4(true);
    }
    // confirm pw
    if (confirmPw && confirmPw !== password) {
      setNotMatch(true);
      setError5(true);
      setSuccess5(false);
    } else if (confirmPw === '') {
      setError5(true);
    } else {
      setSuccess5(true);
      setError5(false);
    }

    setTimeout(() => {
      setSuccess1(false);
      setError1(false);
      setSuccess2(false);
      setError2(false);
      setSuccess3(false);
      setError3(false);
      setSuccess4(false);
      setError4(false);
      setSuccess5(false);
      setError5(false);
    }, 2000);

    if (
      firstName &&
      lastName &&
      email &&
      password &&
      password &&
      confirmPw === password
    ) {
      setShowModal(true);
    }
  };
  const closeModal = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmpw('');

    setShowModal(false);
  };

  return (
    <>
      <div className='form-wrapper'>
        <form id='form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <div
              className={
                success1
                  ? 'success form-control'
                  : error1
                  ? 'error form-control'
                  : 'form-control'
              }
            >
              <label htmlFor='firstName'>FirstName:</label>
              <input
                type='text'
                name='firstName'
                id='firstName'
                value={firstName}
                placeholder='John'
                onChange={handleFirstName}
              />
              <div className='err-text'>
                <small>FirstName cannot be empty</small>
              </div>
              <div className='icons'>
                <div className='check icon'>
                  <span>
                    <i className='fas fa-check'></i>
                  </span>
                </div>
                <div className='times icon'>
                  <span>
                    <i className='fas fa-times'></i>
                  </span>
                </div>
              </div>
            </div>
            <div
              className={
                success2
                  ? 'success form-control'
                  : error2
                  ? 'error form-control'
                  : 'form-control'
              }
            >
              <label htmlFor='lastName'>LastName:</label>
              <input
                type='text'
                name='lastName'
                id='lastName'
                value={lastName}
                placeholder='Doe'
                onChange={handleLastName}
              />
              <div className='err-text'>
                <small>LastName cannot be empty</small>
              </div>
              <div className='icons'>
                <div className='check icon'>
                  <span>
                    <i className='fas fa-check'></i>
                  </span>
                </div>
                <div className='times icon'>
                  <span>
                    <i className='fas fa-times'></i>
                  </span>
                </div>
              </div>
            </div>
            <div
              className={
                success3
                  ? 'success form-control'
                  : error3
                  ? 'error form-control'
                  : 'form-control'
              }
            >
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                name='email'
                id='email'
                value={email}
                placeholder='Johndoe@youremail.com'
                onChange={handleEmail}
              />
              <div className='err-text'>
                <small>Email cannot be empty</small>
              </div>
              <div className='icons'>
                <div className='check icon'>
                  <span>
                    <i className='fas fa-check'></i>
                  </span>
                </div>
                <div className='times icon'>
                  <span>
                    <i className='fas fa-times'></i>
                  </span>
                </div>
              </div>
            </div>
            <div
              className={
                success4
                  ? 'success form-control'
                  : error4
                  ? 'error form-control'
                  : 'form-control'
              }
            >
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                name='password'
                id='password'
                value={password}
                onChange={handlePassword}
              />
              <div className='err-text'>
                <small>Password cannot be empty</small>
              </div>
              <div className='icons'>
                <div className='check icon'>
                  <span>
                    <i className='fas fa-check'></i>
                  </span>
                </div>
                <div className='times icon'>
                  <span>
                    <i className='fas fa-times'></i>
                  </span>
                </div>
              </div>
            </div>
            <div
              className={
                success5
                  ? 'success form-control'
                  : error5
                  ? 'error form-control'
                  : 'form-control'
              }
            >
              <label htmlFor='confirmPw'>Confirm Password:</label>
              <input
                type='password'
                name='confirmPw'
                id='confirmPw'
                value={confirmPw}
                onChange={handleConfirmpw}
              />
              <div className='err-text'>
                {notMatch ? (
                  <small>Password does not match</small>
                ) : (
                  <small>password cannot be empty</small>
                )}
              </div>
              <div className='icons'>
                <div className='check icon'>
                  <span>
                    <i className='fas fa-check'></i>
                  </span>
                </div>
                <div className='times icon'>
                  <span>
                    <i className='fas fa-times'></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
      {/* popup modal */}
      {showModal && (
        <Modal
          firstName={firstName}
          lastName={lastName}
          closeModal={closeModal}
        />
      )}
    </>
  );
};
