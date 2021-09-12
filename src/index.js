import React from 'react';
import ReactDOM from 'react-dom';
import AppMobile from './AppMobile';
import AppDesktop from './AppDesktop'
import { store } from './helpers';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { BrowserView, MobileView, isDesktop, isMobile } from "react-device-detect";


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>

      <BrowserView>
        {isDesktop ? (
          <>

            <AppDesktop />

          </>
        ) : null}
      </BrowserView>
      <MobileView>
        {
          isMobile ? <AppMobile /> : null
        }
      </MobileView>

    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


