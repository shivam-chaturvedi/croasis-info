import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { LOGO_URL } from "@/lib/media";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const handleOpenMenu = (name: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenMenu(name);
  };

  const handleCloseMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      children: [
        { name: "Team", path: "/team" },
        { name: "Partnerships", path: "/partnerships" },
      ],
    },
    {
      name: "Programs",
      path: "/programs",
      children: [
        { name: "Focus Areas", path: "/focus-areas" },
        { name: "Projects", path: "/projects" },
        { name: "Events", path: "/events" },
      ],
    },
    {
      name: "Impact",
      path: "/impact",
      children: [
        { name: "Publications", path: "/publications" },
        { name: "Gallery", path: "/gallery" },
      ],
    },
    {
      name: "Contact",
      path: "/contact",
      children: [{ name: "Partner With Us", path: "/contact" }],
    },
    {
      name: "More",
      children: [
        { name: "Programs", path: "/programs" },
        { name: "Publications", path: "/publications" },
        { name: "Data & Downloads", path: "/data-downloads" },
        { name: "Volunteer Portal", path: "/volunteer-portal" },
      ],
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={LOGO_URL}
              alt="CROASIS Research Group logo"
              className="w-10 h-10 object-contain rounded-md border border-primary/20 bg-white group-hover:scale-110 transition-transform"
            />
            <div>
              <span className="font-bold text-lg text-foreground">CROASIS</span>
              <span className="block text-xs text-muted-foreground">Research Group</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => {
              const hasChildren = !!link.children?.length;
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => hasChildren && handleOpenMenu(link.name)}
                  onMouseLeave={() => hasChildren && handleCloseMenu()}
                >
                  <Link
                    to={link.path || (link.children?.[0]?.path ?? "#")}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {link.name}
                    {hasChildren && <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-primary" />}
                  </Link>
                  {hasChildren && openMenu === link.name && (
                    <div
                      className="absolute left-0 top-full mt-2 w-52 rounded-lg border border-border bg-background shadow-medium p-2 animate-fade-in"
                      onMouseEnter={() => handleOpenMenu(link.name)}
                      onMouseLeave={handleCloseMenu}
                    >
                      {link.children?.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Button size="sm" className="ml-2" asChild>
              <Link to="/contact">Partner With Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const hasChildren = !!link.children?.length;
                const isChildOpen = openMobileMenu === link.name;
                return (
                  <div key={link.name} className="flex flex-col">
                    <div className="flex items-center justify-between px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors">
                      <Link
                        to={link.path || (link.children?.[0]?.path ?? "#")}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                      {hasChildren && (
                        <button
                          aria-label={`Toggle ${link.name} menu`}
                          onClick={() => setOpenMobileMenu(isChildOpen ? null : link.name)}
                          className="p-1"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${isChildOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                      )}
                    </div>
                    {hasChildren && isChildOpen && (
                      <div className="pl-6 flex flex-col gap-1">
                        {link.children?.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                            onClick={() => {
                              setIsOpen(false);
                              setOpenMobileMenu(null);
                            }}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="px-4 pt-2">
                <Button className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Partner With Us</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
