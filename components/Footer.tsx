export default function Footer() {
  return (
    <footer className="border-t py-6 mt-12 text-center text-sm text-gray-500">
      Hotchkiss Coding © {new Date().getFullYear()} — 
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://www.linkedin.com/in/amanda-hotchkiss-1a4056134/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">LinkedIn</a>
        <a href="https://github.com/hotchkissdev" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">GitHub</a>
      </div>
    </footer>
  );
}
