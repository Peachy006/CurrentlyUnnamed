import MobileNavBar from "@/app/components/MobileNavBar";
import NavBar from "@/app/components/navbar";

export default function main() {
    return (
        <div>
            <div className="block min-[801px]:hidden">
                <MobileNavBar />
            </div>
            <div className="hidden min-[801px]:block">
                <NavBar />
            </div>
        </div>
    )
}