const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <button 
          className="join-button"
          onClick={() => window.location.href = 'https://earthys.io'}
        >
          Join
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 