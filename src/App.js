


import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter.js";
import {observer} from "mobx-react-lite";
import './App.css';
import LenisScroll from './utils/Lenis.tsx';



const App = observer(() => {


    return (
        
        <> 



          <BrowserRouter >
          <AppRouter /> 
    
      </BrowserRouter>

          {/* )} */}
        </>

    );
    
});

export default App;