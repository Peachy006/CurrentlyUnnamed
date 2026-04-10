
const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    return (
        <nav className="w-screen h-[10vh] border-b-2 border-indigo-200/30 flex items-center justify-center">
            <div className="w-[80vw] bg-black/85 rounded-4xl h-3/4 flex items-center px-8">
                <div className="text-white font-bold text-xl">MySite</div>

                <ul className="flex-1 flex justify-center gap-8 text-white">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="inline-block hover:text-gray-300 transition-transform duration-200 hover:scale-110 text-xl"                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}