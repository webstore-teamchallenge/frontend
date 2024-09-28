import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.tsx'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage.tsx'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.tsx'));

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
