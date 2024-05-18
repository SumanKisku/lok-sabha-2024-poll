const FloatingButton = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8">
      <a
        href="https://faucet.polygon.technology/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
      >
        <div className="bg-slate-100 text-white p-4 rounded-full shadow-lg transition">
          <img className="w-6 h-6" src="https://cryptologos.cc/logos/polygon-matic-logo.svg" />
        </div>
        <div className="absolute bottom-full right-4 mb-2 w-max px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Get some test tokens to vote
        </div>
      </a>
    </div>
  );
};

export default FloatingButton;
