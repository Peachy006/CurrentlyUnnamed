import Plasma from "./extras/Plasma"
import NavBar from "../components/navbar";
import MobileNavBar from "@/app/components/MobileNavBar";

export default function AboutPage() {
    return(
        <div>
            <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
                <Plasma
                    color="#ff6b35"
                    speed={0.2}
                    direction="forward"
                    scale={1.4}
                    opacity={0.4}
                    mouseInteractive={false}
                />
            </div>
            <div className="relative z-10 w-full flex flex-col items-center">
                <div className="block min-[801px]:hidden">
                    <MobileNavBar />
                </div>
                <div className="hidden min-[801px]:block">
                    <NavBar />
                </div>
            </div>
        </div>
    )
}