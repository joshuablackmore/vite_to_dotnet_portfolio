import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { NavLink } from "../../api/types";
import { getNavLinks } from "../../api/navigationService";
import logoSrc from "../assets/joshua_blackmore_logo.svg";

const Nav = () => {
  const [navLinks, setNavLinks] = useState<NavLink[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getNavLinks();
        console.log(data);
        setNavLinks(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching navigation:', error);
        setIsLoading(false);
        setError('Failed to fetch navigation');
      }
    };
    getData();
  }, []);

  // Group navigation links by category
  const homeLink = navLinks.find(link => link.url.includes('home'));
  const musicLinks = navLinks.filter(link => link.url.includes('music'));
  const engineeringLink = navLinks.find(link => link.url.includes('engineering'));

  const toggleMobileMenu = () => {
    console.log("Toggle mobile menu", !mobileMenuOpen);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (url: string) => {
    console.log("Navigation to", url);
    // Close the mobile menu
    setMobileMenuOpen(false);
    
    // Close the desktop dropdown
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
    
    navigate(url);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
    <div className="navbar-start">
      <Link to="/" className=""><img src={logoSrc} alt="Logo" width="50" height="50" /></Link>
    </div>
    {/* Mobile menu */}
    <div className="navbar-end lg:hidden">
      <div className="relative">
        <button 
          onClick={toggleMobileMenu} 
          className="btn btn-ghost">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h7" 
            />
          </svg>
        </button>
        
        {mobileMenuOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-base-100 rounded-box shadow-lg z-10 p-2">
            <ul className="menu menu-sm">
              {homeLink && (
                <li>
                  <Link to="/" onClick={() => handleNavigation("/")}>
                    {homeLink.name}
                  </Link>
                </li>
              )}
              
              {musicLinks && musicLinks.length > 0 && (
                <li>
                  <details>
                    <summary>Music</summary>
                    <ul>
                      {musicLinks.map((link: NavLink) => (
                        <li key={link.name}>
                          <Link to={link.url} onClick={() => handleNavigation(link.url)}>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              )}
              
              {engineeringLink && (
                <li>
                  <Link to={engineeringLink.url} onClick={() => handleNavigation(engineeringLink.url)}>
                    {engineeringLink.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  {/* Desktop menu */}
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal items-center z-[50]">
        {homeLink && <Link to="/"><a>{homeLink.name}</a></Link>}
      <li>
        {musicLinks && 
        <details ref={detailsRef}>
          <summary>Music</summary>
          <ul className="w-[170px] dropdown-start">
            {musicLinks.map((link: NavLink) => (
              <li key={link.name}>
                <Link to={link.url}><a onClick={() => handleNavigation(link.url)}>{link.name}</a></Link>
              </li>
            ))}
          </ul>
        </details>
}
      </li> 
      {engineeringLink && <Link to={engineeringLink.url}>{engineeringLink.name}</Link>}
    </ul>
  </div>
</div>
  )
};


export default Nav;