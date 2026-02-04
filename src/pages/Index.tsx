import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { HeroSlider } from "@/components/HeroSlider";
import { ServicesSection } from "@/components/ServicesSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ClinicTimings } from "@/components/ClinicTimings";
import { BookingForm } from "@/components/BookingForm";
import { SEO, physicianSchema, clinicSchema } from "@/components/SEO";
import { Award, Users, Calendar, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Calendar, value: "12+", label: "Years Experience" },
  { icon: Users, value: "10,000+", label: "Happy Patients" },
  { icon: Award, value: "4.9★", label: "Google Rating" },
  { icon: Stethoscope, value: "15+", label: "Treatments" },
];

// Combined structured data for homepage
const homePageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    physicianSchema,
    clinicSchema,
    {
      "@type": "WebSite",
      "name": "Dr. Karthik Manchala Ortho Clinic",
      "url": "https://drkmortho.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://drkmortho.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Best Orthopaedic Doctor in Hyderabad"
        description="Dr. Karthik Manchala - Trusted orthopaedic surgeon in Manikonda, Hyderabad with 12+ years experience. Expert in joint replacement, fracture fixation, arthroscopy & sports injuries. 4.9★ Google rated. Book appointment now!"
        keywords="orthopaedic doctor hyderabad, bone specialist manikonda, joint replacement surgery hyderabad, knee pain treatment, hip replacement surgeon, fracture treatment telangana, arthroscopy hyderabad, sports injury doctor"
        canonicalUrl="/"
        structuredData={homePageStructuredData}
      />
      
      <Header />
      
      {/* Hero Section */}
      <HeroSlider />

      {/* Stats Section */}
      <section className="relative -mt-16 z-10">
        <div className="section-container">
          <div className="bg-card rounded-2xl shadow-elevated p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <ServicesSection />

      {/* View All Services Button */}
      <div className="text-center pb-12 bg-background">
        <Link to="/services">
          <Button variant="outline" size="lg">
            View All Services
          </Button>
        </Link>
      </div>

      {/* Clinic Timings */}
      <ClinicTimings />

      {/* Reviews */}
      <ReviewsSection />

      {/* Booking Form */}
      <BookingForm />

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
