import { Routes, Route } from "react-router-dom";
import Favorites from "./../Pages/Favorites";
import Buy from "./../Pages/Buy";
import NotFoundPage from "./../Pages/NotFoundPage";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Buy />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default MainRoute;
