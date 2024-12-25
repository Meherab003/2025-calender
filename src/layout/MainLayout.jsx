import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="bg-[url('https://indieground.net/wp-content/uploads/2023/03/Freebie-GradientTextures-Preview-02.jpg')] bg-cover w-full min-h-screen">
            <Outlet />
        </div>
    );
};

export default MainLayout;