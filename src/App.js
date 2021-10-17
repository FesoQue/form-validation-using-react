import React, { useState, useEffect } from 'react';
import { Form } from './Form';
import { Modal } from './Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main>
      <div className='title'>
        <h1>React Form Validation 😊 </h1>
      </div>
      {/* form */}
      <Form />
    </main>
  );
}

export default App;
