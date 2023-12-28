import React from 'react';
import ReactDOM from 'react-dom/client';
// import User from './backendcomponents/user';
import Navbar from './backendcomponents/navbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './backendcomponents/homepage';
import Herosecton from './backendcomponents/herosec';
import Herosubsec from './backendcomponents/herosubsec';
import Herosubsec2 from './backendcomponents/herosubsec2';
import Herosubsec3 from './backendcomponents/herosubsec3';
import Herosubsec4 from './backendcomponents/herosubsec4';
// import MyComponent from './backendcomponents/dropdown';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div>
    <Navbar />
    <Herosecton/>
    <Herosubsec/>
    <Homepage/>
    <Herosubsec2/>
    <Herosubsec3/>
    <Herosubsec4/>
  
  </div>
);



