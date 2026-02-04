import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { BookingForm } from "@/components/BookingForm";
import { ClinicTimings } from "@/components/ClinicTimings";
import { SEO, clinicSchema, breadcrumbSchema } from "@/components/SEO";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import clinicReception from "@/assets/clinic-reception.png";
import clinicConsultation from "@/assets/clinic-consultation.png";

// Structured data for Contact page
const contactPageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Contact", url: "/contact" }
    ]),
    clinicSchema,
    {
      "@type": "WebPage",
      "name": "Contact Dr. Karthik Manchala Ortho Clinic",
      "description": "Book an appointment or contact Dr. Karthik Manchala Ortho Clinic in Manikonda, Hyderabad. Phone, WhatsApp, address and clinic timings.",
      "url": "https://drkmortho.com/contact"
    },
    {
      "@type": "ContactPage",
      "name": "Contact & Appointment",
      "url": "https://drkmortho.com/contact",
      "mainEntity": {
        "@type": "MedicalClinic",
        "name": "Dr. Karthik Manchala Ortho Clinic",
        "telephone": "+91-6281894631",
        "email": "info@drkmortho.com"
      }
    }
  ]
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact & Book Appointment"
        description="Contact Dr. Karthik Manchala Ortho Clinic in Manikonda, Hyderabad. Call +91 62818 94631 or WhatsApp for appointments. Located at Rd Number 25, Alkapur Township. Mon-Sat: 10AM-2PM, 5PM-9PM. Sunday: 11AM-2PM."
        keywords="orthopaedic clinic hyderabad, book appointment bone doctor, contact ortho clinic manikonda, dr karthik manchala phone, knee replacement consultation"
        canonicalUrl="/contact"
        structuredData={contactPageStructuredData}
      />
      
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-16">
        <div className="section-container text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Book an appointment or reach out to us for any queries
          </p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <address className="medical-card p-6 flex items-start gap-5 not-italic">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold text-lg text-foreground mb-2">Call Us</h2>
                  <a href="tel:+916281894631" className="text-2xl font-bold text-primary hover:underline">
                    +91 62818 94631
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">For appointments and enquiries</p>
                </div>
              </address>

              {/* WhatsApp */}
              <div className="medical-card p-6 flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-7 h-7 text-[#25D366]" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold text-lg text-foreground mb-2">WhatsApp</h2>
                  <a
                    href={`https://wa.me/916281894631?text=${encodeURIComponent("Hello, I would like to book an appointment with Dr. Karthik Manchala.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#25D366] hover:bg-[#20BA5A] gap-2">
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      Message on WhatsApp
                    </Button>
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">Quick response guaranteed</p>
                </div>
              </div>

              {/* Address */}
              <address className="medical-card p-6 flex items-start gap-5 not-italic">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold text-lg text-foreground mb-2">Clinic Address</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Dr. Karthik Manchala Ortho Clinic<br />
                    Rd Number 25, Alkapur Township,<br />
                    Manikonda, Hyderabad,<br />
                    Telangana 500089
                  </p>
                  <a
                    href="https://maps.google.com/?q=Rd+Number+25,+Alkapur+Township,+Manikonda,+Hyderabad,+Telangana+500089"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="mt-3 gap-2">
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                      Get Directions
                    </Button>
                  </a>
                </div>
              </address>

              {/* Timings */}
              <div className="medical-card p-6 flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold text-lg text-foreground mb-2">Clinic Timings</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <div>
                      <span className="font-medium text-foreground">Mon - Sat:</span> 10:00 AM - 2:00 PM, 5:00 PM - 9:00 PM
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Sunday:</span> 11:00 AM - 2:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic Images */}
            <div className="space-y-6">
              <figure className="medical-card overflow-hidden">
                <img
                  src={clinicReception}
                  alt="Dr. Karthik Manchala Ortho Clinic Reception and Waiting Area in Manikonda, Hyderabad"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <figcaption className="p-4">
                  <p className="font-medium text-foreground">Reception & Waiting Area</p>
                </figcaption>
              </figure>
              <figure className="medical-card overflow-hidden">
                <img
                  src={clinicConsultation}
                  alt="Consultation Room at Dr. Karthik Manchala Ortho Clinic"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <figcaption className="p-4">
                  <p className="font-medium text-foreground">Consultation Room</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Timings Banner */}
      <ClinicTimings />

      {/* Booking Form */}
      <BookingForm />

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Contact;
