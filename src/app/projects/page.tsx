import Plasma from "./extras/Plasma"
import NavBar from "../components/navbar";
import MobileNavBar from "@/app/components/MobileNavBar";
import CompleteNavBar from "../components/CompleteNavBar";

export default function AboutPage() {
    return(
        <div>
            <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
                <Plasma
                    color="#B5260E"
                    speed={0.2}
                    direction="forward"
                    scale={1.4}
                    opacity={0.4}
                    mouseInteractive={false}
                />
            </div>
            <div className="relative z-10 w-full flex flex-col items-center">
                <CompleteNavBar />
            </div>
        </div>
    )
}