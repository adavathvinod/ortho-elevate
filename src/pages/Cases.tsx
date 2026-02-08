import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { BookingForm } from "@/components/BookingForm";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { AlertTriangle } from "lucide-react";

// Import before/after images
import caseKneeBefore from "@/assets/case-knee-before.jpg";
import caseKneeAfter from "@/assets/case-knee-after.jpg";
import caseHipBefore from "@/assets/case-hip-before.jpg";
import caseHipAfter from "@/assets/case-hip-after.jpg";
import caseFractureBefore from "@/assets/case-fracture-before.jpg";
import caseFractureAfter from "@/assets/case-fracture-after.jpg";
import caseAclBefore from "@/assets/case-acl-before.jpg";
import caseAclAfter from "@/assets/case-acl-after.jpg";
import caseShoulderBefore from "@/assets/case-shoulder-before.jpg";
import caseShoulderAfter from "@/assets/case-shoulder-after.jpg";
import caseSpineBefore from "@/assets/case-spine-before.jpg";
import caseSpineAfter from "@/assets/case-spine-after.jpg";

const cases = [
  {
    id: 1,
    title: "Total Knee Replacement",
    description: "Successful knee replacement surgery restoring full mobility",
    image: caseKneeAfter,
  },
  {
    id: 2,
    title: "Hip Joint Replacement",
    description: "Total hip arthroplasty for pain-free movement",
    image: caseHipAfter,
  },
  {
    id: 3,
    title: "Fracture Fixation",
    description: "Surgical fixation ensuring complete bone healing",
    image: caseFractureAfter,
  },
  {
    id: 4,
    title: "ACL Reconstruction",
    description: "Ligament reconstruction for return to active lifestyle",
    image: caseAclAfter,
  },
  {
    id: 5,
    title: "Shoulder Arthroscopy",
    description: "Minimally invasive repair for restored shoulder function",
    image: caseShoulderAfter,
  },
  {
    id: 6,
    title: "Spine Surgery",
    description: "Disc surgery for lasting pain relief and mobility",
    image: caseSpineAfter,
  },
];

// Structured data for Cases page
const casesPageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Before & After Cases", url: "/cases" }
    ]),
    {
      "@type": "WebPage",
      "name": "Before & After Cases - Dr. Karthik Manchala",
      "description": "View successful orthopaedic treatment outcomes including knee replacement, hip replacement, fracture fixation, and more.",
      "url": "https://drkmortho.com/cases"
    },
    {
      "@type": "ImageGallery",
      "name": "Orthopaedic Treatment Results",
      "description": "Before and after images of orthopaedic surgeries performed by Dr. Karthik Manchala",
      "numberOfItems": cases.length
    }
  ]
};

const Cases = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Before & After Cases - Treatment Results"
        description="View successful orthopaedic treatment results by Dr. Karthik Manchala. Before and after cases of knee replacement, hip replacement, fracture fixation, ACL reconstruction, and spine surgery in Hyderabad."
        keywords="knee replacement before after, hip surgery results, fracture treatment cases, ACL reconstruction recovery, orthopaedic surgery success, treatment outcomes hyderabad"
        canonicalUrl="/cases"
        structuredData={casesPageStructuredData}
      />
      
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-16">
        <div className="section-container text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Treatment Results</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Before & After Cases
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See the successful treatment outcomes achieved by Dr. Karthik Manchala
          </p>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {cases.map((caseItem) => (
              <article key={caseItem.id} className="medical-card overflow-hidden">
                <figure className="relative aspect-[4/5] bg-muted">
                  <img 
                    src={caseItem.image} 
                    alt={`${caseItem.title} - X-ray by Dr. Karthik Manchala`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </figure>
                <div className="p-6">
                  <h2 className="font-semibold text-xl text-foreground mb-2">{caseItem.title}</h2>
                  <p className="text-muted-foreground text-sm">{caseItem.description}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Disclaimer */}
          <aside className="mt-12 p-6 bg-muted/50 rounded-xl border border-border">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Medical Disclaimer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Individual results may vary. The images and descriptions shown are representative 
                  of typical treatment outcomes. Every patient's condition is unique, and treatment 
                  results depend on various factors including the severity of the condition, patient 
                  compliance, and individual healing response. Please consult with Dr. Karthik Manchala 
                  for a personalized assessment and treatment plan.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Booking Form */}
      <BookingForm />

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Cases;
