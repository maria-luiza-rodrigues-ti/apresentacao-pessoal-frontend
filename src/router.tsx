import { Routes, Route } from "react-router-dom";
import { Home } from "./page/home/home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
