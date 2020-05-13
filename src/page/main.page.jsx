import React, { useState, useRef, useCallback } from 'react';

const InitialState = {
  cardNumber: '#### #### #### ####',
  cardHolder: 'FULL NAME',
  cardMonth: '',
  cardYear: '',
  cardCvv: '',
  isCardFlipped: false,
};

const MainPage = () => {
  const [state, setState] = useState(InitialState);
  const [currentFocusedElm, setCurrentFocusedElm] = useState(null);

  return <div className="wrapper"></div>;
};
