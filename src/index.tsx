import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Route from "./Route";
import { Helmet } from "react-helmet";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Helmet>
      <title>Dotnep | Nepali Language Compiler & Interpreter</title>
      <meta name="description" content="NepaliLang is a powerful and user-friendly Nepali language compiler and interpreter. Write, compile, and run Nepali code effortlessly." />
      <meta name="keywords" content="Nepali compiler, NepaliLang, Nepali programming, Nepali language interpreter, Nepali code, compile Nepali code" />
      <meta name="author" content="Anil Bhandari" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="NepaliLang Compiler | Nepali Language Compiler & Interpreter" />
      <meta property="og:description" content="NepaliLang is a powerful and user-friendly Nepali language compiler and interpreter. Write, compile, and run Nepali code effortlessly." />
      <meta name="twitter:title" content="NepaliLang Compiler | Nepali Language Compiler & Interpreter" />
      <meta name="twitter:description" content="NepaliLang is a powerful and user-friendly Nepali language compiler and interpreter. Write, compile, and run Nepali code effortlessly." />
      <link rel="canonical" href="https://dotnep.xyz" />
    </Helmet>
    <Route />
  </React.StrictMode>
);

reportWebVitals();
