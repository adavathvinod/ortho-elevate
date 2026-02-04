import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { ServicesSection } from "@/components/ServicesSection";
import { BookingForm } from "@/components/BookingForm";
import { SEO, breadcrumbSchema, medicalServiceSchema } from "@/components/SEO";

// Services list for structured data
const servicesForSchema = [
  { name: "Knee & Hip Joint Replacement", description: "Advanced joint replacement surgery for knee and hip arthritis, restoring mobility and eliminating pain." },
  { name: "Arthroscopic Surgery", description: "Minimally invasive keyhole surgery for joint problems with faster recovery and less scarring." },
  { name: "Fracture Fixation", description: "Expert treatment of all types of bone fractures using modern fixation techniques." },
  { name: "Ligament Reconstruction", description: "ACL, PCL and other ligament reconstruction surgery for sports injuries." },
  { name: "Back Pain Management", description: "Comprehensive treatment for chronic back pain, disc herniation and spinal conditions." },
  { name: "Sports Injury Treatment", description: "Specialized care for athletes and sports-related injuries." },
  { name: "Shoulder Surgery", description: "Treatment for rotator cuff tears, frozen shoulder and other shoulder conditions." }
];

// Structured data for Services page
const servicesPageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" }
    ]),
    medicalServiceSchema(servicesForSchema),
    {
      "@type": "WebPage",
      "name": "Orthopaedic Services - Dr. Karthik Manchala",
      "description": "Comprehensive orthopaedic services including joint replacement, arthroscopy, fracture treatment, and sports injury care in Hyderabad.",
      "url": "https://drkmortho.com/services"
    }
  ]
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Orthopaedic Services & Treatments"
        description="Expert orthopaedic treatments in Hyderabad - Knee & Hip Replacement, Arthroscopic Surgery, Fracture Fixation, Ligament Reconstruction, Back Pain Treatment, Sports Injuries. Advanced care by Dr. Karthik Manchala."
        keywords="joint replacement hyderabad, arthroscopy surgery, fracture treatment manikonda, ligament reconstruction, back pain doctor, sports injury treatment, knee replacement cost, hip replacement surgery"
        canonicalUrl="/services"
        structuredData={servicesPageStructuredData}
      />
      
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-16">
        <div className="section-container text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Our Services
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive orthopaedic care with advanced treatment options for all bone and joint conditions.
          </p>
        </div>
      </section>

      {/* All Services */}
      <ServicesSection showAll />

      {/* Booking Form */}
      <BookingForm />

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Services;
