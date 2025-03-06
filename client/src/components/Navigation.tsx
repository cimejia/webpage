import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "about", label: "About" },
  { id: "publications", label: "Publications" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" }
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="text-xl font-semibold cursor-pointer"
          >
            Dr. Jane Smith
          </ScrollLink>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, label }) => (
              <ScrollLink
                key={id}
                to={id}
                smooth={true}
                duration={500}
                className={cn(
                  "cursor-pointer transition-colors hover:text-primary",
                  activeSection === id ? "text-primary font-medium" : "text-muted-foreground"
                )}
              >
                {label}
              </ScrollLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
