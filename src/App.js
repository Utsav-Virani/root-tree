import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery';
import 'popper.js';
import 'font-awesome/css/font-awesome.min.css';

import NavigationBarComponent from './Components/NavigationBar/NavigationBar';
import { AuthenticationProvider } from './FireBaseControler/AuthenticationProvider';



function App() {
  return (
    <AuthenticationProvider>
      <NavigationBarComponent />
    </AuthenticationProvider>
  );
}

export default App;
