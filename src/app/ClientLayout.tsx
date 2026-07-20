"use client";
import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";
import { useEffect } from "react";
import { IThemeState, useThemeStore } from "./zustand/theme";
import { Icon } from "@iconify/react/dist/iconify.js";
import { usePathname } from "next/navigation";
import Alert from "./components/Alert";
import { BRAND } from "@/lib/branding";

export default function ClientLayout({ children }: { children: React.ReactNode }) {

    const { getTheme }: IThemeState = useThemeStore();

    const pathname = usePathname()

    useEffect(() => {
        getTheme("sun");
        if (typeof document !== "undefined") {
            document.documentElement.classList.remove("dark");
            if (typeof window !== "undefined") {
                localStorage.setItem("theme", "light");
            }
        }
    }, [getTheme]);

    const hide = ['/iniciar-sesion', '/administrador', '/brochure', '/hotel', '/asesores']
    const isMypeRoute = hide.some(route => pathname.startsWith(route))

    // La home "/" es la landing de agencia (Falconext), autocontenida con su
    // propio nav y footer premium: no le añadimos el chrome global de Krezka.
    const isAgencyHome = pathname === '/'

    if (isMypeRoute || isAgencyHome) {
        return <>{children}</>
    }

    return (
        <div>
            <Alert />
            <div className="fixed right-5 bottom-5 z-50 md:right-10 md:bottom-10 cursor-pointer ">
                <a
                    href={`https://wa.me/${BRAND.whatsapp}?text=Hola%20quiero%20más%20información%20sobre%20sus%20servicios`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon icon="logos:whatsapp-icon" className="" width="56" height="56" />
                </a>
            </div>

            <Header />
            {children}
            <Footer />
        </div>
    );
}