import { Outlet } from "react-router";
import NavBar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="h-dvh w-full">
      <NavBar />

      <main className="h-[calc(100%-4rem)] w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
