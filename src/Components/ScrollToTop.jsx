import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/signup" || pathname === "/contact-support") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [pathname]);

    return null;
}

export default ScrollToTop;