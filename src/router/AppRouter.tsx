import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home/Home';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add other application routes here - they will be automatically code split by Vite */}
    </Routes>
  );
};

export default AppRouter;
