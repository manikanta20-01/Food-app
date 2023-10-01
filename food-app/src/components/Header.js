const Title = () => (
    <a href="/">
      <img
        className="logo"
        src="https://marketplace.canva.com/EAE7T9stRNU/1/0/1600w/canva-orange-blue-the-sunset-illustration-restaurant-logo-FntUrAT5eE8.jpg"
        alt="Food Fire Logo"
      />
    </a>
  );
  
  // Header component for header section: Logo, Nav Items
  const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>
              <i class="fa-solid fa-cart-shopping"></i>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;