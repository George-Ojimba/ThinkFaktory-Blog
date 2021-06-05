import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h3>The ThinkFaktory Blog</h3>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};
export default Navbar;
