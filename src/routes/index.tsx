
import { Routes, Route } from 'react-router-dom';
import IndexPage from "../containers"

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<IndexPage />} />
    </Routes>
  );
};

export default Router;