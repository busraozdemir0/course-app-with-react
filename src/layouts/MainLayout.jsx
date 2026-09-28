import { useNavigation } from "react-router";
import { NavLink, Outlet } from "react-router";

export default function MainLayout() {
    const navigation = useNavigation();

    return (
        <div id="main-layout">
            <header className="container">
                <h1>Course App</h1>
                {/* sayfa yenilenmemesi için Link kullanılır */}
                {/* NavLink => hangi linke tıklandıysa active classına sahip olmasını sağlar. Bu sayede active adlı css yazabiliriz */}
                <nav>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="courses">Courses</NavLink>
                    <NavLink to="help">Help</NavLink>
                </nav>
            </header>
            <main className="container">
                {navigation.state == "loading" && (<span><i className="fa-solid fa-spinner"></i>Loading...</span>)}
                {/* Outlet tanımladığımız yere App.js'te children olarak tanımladığımız alt bileşenler geliyor */}
                <Outlet />
            </main>
        </div>
    );
}