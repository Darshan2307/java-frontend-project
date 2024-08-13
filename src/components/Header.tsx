import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="sticky top-0 bg-gray-400 text-gray-900 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/logo.jpeg" alt="Team Logo" className="h-16 ml-5" />
          <h1 className="text-2xl font-bold mx-4 mr-20">Cart Crafters</h1>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
