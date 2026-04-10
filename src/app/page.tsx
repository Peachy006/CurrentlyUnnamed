import NavBar from "./components/navbar";
import LanderSection from "./components/landerSection";
import DarkVeil from "./components/darkveil/DarkVeil";

export default function Home() {
    return (
        <div className="bg-gray-900 w-screen h-auto flex justify-start flex-col items-center relative">
            {/* DarkVeil as full-coverage background */}
            <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
                <DarkVeil
                    hueShift={0}
                    noiseIntensity={0}
                    scanlineIntensity={0}
                    speed={0.5}
                    scanlineFrequency={0}
                    warpAmount={0}
                />
            </div>

            {/* Content sits above the veil */}
            <div className="relative z-10 w-full flex flex-col items-center">
                <NavBar />
                <LanderSection />
            </div>
        </div>
    );
}