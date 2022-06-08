import Container from './Container/Container.js';
import PostsView from '../views/PostsView';
import AppBar from './AppBar/AppBar.js';
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from './Loader/Loader.js';
import About from './About/About.js';
export default function App() {
  function MissingRoute() {
    return <Navigate to="/" />;
  }
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="*" element={<MissingRoute />} />
          <Route path="/" element={<PostsView />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
