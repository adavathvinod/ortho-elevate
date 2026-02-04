import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Page Not Found (404)"
        description="The page you're looking for doesn't exist. Return to Dr. Karthik Manchala Ortho Clinic homepage to find orthopaedic services, treatments, and appointment booking."
        canonicalUrl="/404"
      />
      
      <Header />
      
      <main className="flex-1 flex items-center justify-center section-padding">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved. 
            Let us help you find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="gap-2 w-full sm:w-auto">
                <Home className="w-4 h-4" aria-hidden="true" />
                Back to Home
              </Button>
            </Link>
            <Button variant="outline" onClick={() => window.history.back()} className="gap-2">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Go Back
            </Button>
          </div>
          
          <nav className="mt-12 pt-8 border-t border-border" aria-label="Quick links">
            <p className="text-sm text-muted-foreground mb-4">Quick Links</p>
            <ul className="flex flex-wrap gap-4 justify-center text-sm">
              <li><Link to="/about" className="text-primary hover:underline">About Doctor</Link></li>
              <li><Link to="/services" className="text-primary hover:underline">Services</Link></li>
              <li><Link to="/cases" className="text-primary hover:underline">Cases</Link></li>
              <li><Link to="/contact" className="text-primary hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
