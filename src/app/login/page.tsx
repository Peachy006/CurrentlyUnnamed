
import CompleteNavBar from "../components/CompleteNavBar";
import Grainient from "./extras/Grainient";


export default function AboutPage() {
    return(
        <div>
            <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
                <Grainient
                    color1="#000000"
                    color2="#0000a0"
                    color3="#004040"
                    timeSpeed={0.25}
                    colorBalance={0}
                    warpStrength={1}
                    warpFrequency={5}
                    warpSpeed={2}
                    warpAmplitude={50}
                    blendAngle={0}
                    blendSoftness={0.05}
                    rotationAmount={500}
                    noiseScale={2}
                    grainAmount={0.1}
                    grainScale={2}
                    grainAnimated={false}
                    contrast={1.5}
                    gamma={1}
                    saturation={1}
                    centerX={0}
                    centerY={0}
                    zoom={0.9}
                />
            </div>
            <div className="relative z-10 w-full flex flex-col items-center">
                <CompleteNavBar />
            </div>
        </div>
    )
}