import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "./Footer";

import Plasma from "./Plasma";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Plasma
        color="#3f0fdb"
        speed={0.4}
        direction="foward"
        scale={1.5}
        opacity={0.9}
        mouseInteractive={false}
      />
      <Outlet />

      <Footer />
    </>
  );
}

export default AppLayout;
