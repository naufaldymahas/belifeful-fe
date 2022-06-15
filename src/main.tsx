import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyle } from './styles';
import { Routes as AppRoutes } from '@routes/index';
import Loader from '@components/molecules/Loader';
import '@styles/global.style.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            {AppRoutes.map((r, i) => {
              return <Route path={r.path} element={<r.element />} key={i} />;
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
