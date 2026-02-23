'use client';

import Link from 'next/link';

export default function Navbar() {

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-indigo-800">
          Amanda Hotchkiss
        </Link>
        <div className="flex space-x-6 items-center">
          <Link href="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
          <Link href="/projects" className="text-gray-600 hover:text-indigo-600">Projects</Link>
          <Link href="/about" className="text-gray-600 hover:text-indigo-600">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
