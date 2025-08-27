import { SunIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
    return (
      <nav className="flex items-center justify-between px-6 py-4 text-sm text-gray-300">
        <a href="/" className="font-semibold hover:text-orange-400">Logo</a>
        <div className="flex items-center space-x-4 p-0.5">
          <a href="#" 
            className="hover:underline">English
           </a>
          <div className="w-px h-6 bg-gray-600 rounded-full" aria-hidden="true"></div>
          <SunIcon className="w-5 h-5 hover:text-orange-400" />
        </div>
      </nav>
    );
}