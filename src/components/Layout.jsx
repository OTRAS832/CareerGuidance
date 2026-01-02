import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    const { pathname } = useLocation();

    // 1. Initialize Smooth Scrolling (Lenis)
    // We place it here so it applies to the entire layout structure
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureDirection: 'vertical',
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup on unmount
        return () => {
            lenis.destroy();
        };
    }, []);

    // 2. Auto-scroll to top when route changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="flex flex-col min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
            <Navbar />

            {/* The Outlet renders the current page (Home, Products, etc.) */}
            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;