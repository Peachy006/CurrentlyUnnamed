import BlurText from "../extras/BlurText";

export default function landerSection() {
    return (
        <div className="w-screen h-[90vh] flex flex-row items-center justify-center">
            <div className="h-full w-1/2 max-xl:w-full flex flex-col items-start justify-center pl-40 max-xl:p-0 max-xl:items-center text-start max-xl:text-center">
                <BlurText
                    text="The Tech Gap"
                    delay={200}
                    animateBy="words"
                    direction="top"
                    className="text-7xl mb-6 font-oswald"
                />
                <BlurText
                    text="IT - By humans. For humans"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className="text-5xl mb-8 pt-2 font-oswald text-neutral-600"
                />
            </div>
            <div className="h-full w-1/2 max-xl:hidden">

            </div>

        </div>
    );
}
