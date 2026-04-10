import BlurText from "../extras/BlurText";

export default function landerSection() {
    return (
        <div className="w-screen h-[90vh] flex flex-col items-center justify-center text-center">
            <BlurText
                text="The Tech Gap"
                delay={200}
                animateBy="words"
                direction="top"
                className="text-7xl mb-8 font-oswald text-center"
            />
            <BlurText
                text="IT - By humans. For humans"
                delay={200}
                animateBy="words"
                direction="top"
                className="text-5xl mb-8 font-oswald text-center"
            />
        </div>
    );
}
