import logo from '../../images/rc.png';
function Header() {
  return (
      <header className="header">
          <img style={{width:50,height:50}} src={logo} />
          <h1>Property Manager</h1>
      </header>
  );
}

export default Header;
