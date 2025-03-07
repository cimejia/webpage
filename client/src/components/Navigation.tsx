import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "About" },
  { path: "/publications", label: "Publications" },
  { path: "/experience", label: "Experience" },
  { path: "/contact", label: "Contact" }
];

export function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <a className="text-xl font-semibold cursor-pointer">
              Dr. Jane Smith
            </a>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map(({ path, label }) => (
              <Link key={path} href={path}>
                <a className={cn(
                  "cursor-pointer transition-colors hover:text-primary",
                  location === path ? "text-primary font-medium" : "text-muted-foreground"
                )}>
                  {label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}