export default function Header() {
    return (
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex justify-between max-w-4xl mx-auto">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/projects" className="hover:underline">Projects</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  