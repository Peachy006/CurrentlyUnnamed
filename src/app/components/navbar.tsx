import Link from 'next/link'


const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    return (
        <nav className="w-screen h-[10vh] border-b-2 border-indigo-200/30 flex items-center justify-center">
            <div className="w-[80vw] bg-black/55 rounded-4xl h-3/4 flex items-center px-8 border border-gray-700 shadow-2xl">
                <div className="text-white font-bold text-xl">The Tech Gap</div>

                <ul className="flex-1 flex justify-center gap-8 text-white">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="inline-block hover:text-gray-300 transition-transform duration-200 hover:scale-110 text-l"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
}