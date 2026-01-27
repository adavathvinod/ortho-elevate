import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { BookingForm } from "@/components/BookingForm";
import { AlertTriangle } from "lucide-react";

// Placeholder cases - would typically be real before/after images
const cases = [
  {
    id: 1,
    title: "Total Knee Replacement",
    before: "Severe knee arthritis with limited mobility",
    after: "Full range of motion restored",
  },
  {
    id: 2,
    title: "Hip Joint Replacement",
    before: "Chronic hip pain affecting daily activities",
    after: "Pain-free movement achieved",
  },
  {
    id: 3,
    title: "Fracture Fixation",
    before: "Complex fracture requiring surgical intervention",
    after: "Complete bone healing and recovery",
  },
  {
    id: 4,
    title: "ACL Reconstruction",
    before: "Torn ACL from sports injury",
    after: "Return to sports activities",
  },
  {
    id: 5,
    title: "Shoulder Arthroscopy",
    before: "Rotator cuff tear with shoulder pain",
    after: "Restored shoulder function",
  },
  {
    id: 6,
    title: "Spine Surgery",
    before: "Chronic back pain from disc herniation",
    after: "Pain relief and improved mobility",
  },
];

const Cases = () => {
  return (
    <div className="min-h-screen bg-background">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem) => (
              <div key={caseItem.id} className="medical-card overflow-hidden">
                {/* Image placeholder - would be real images */}
                <div className="grid grid-cols-2 gap-px bg-border">
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-xs font-medium text-muted-foreground uppercase mb-2">Before</p>
                      <p className="text-sm text-foreground">{caseItem.before}</p>
                    </div>
                  </div>
                  <div className="aspect-square bg-secondary flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-xs font-medium text-primary uppercase mb-2">After</p>
                      <p className="text-sm text-foreground">{caseItem.after}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-foreground">{caseItem.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-muted/50 rounded-xl border border-border">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Medical Disclaimer</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Individual results may vary. The images and descriptions shown are representative 
                  of typical treatment outcomes. Every patient's condition is unique, and treatment 
                  results depend on various factors including the severity of the condition, patient 
                  compliance, and individual healing response. Please consult with Dr. Karthik Manchala 
                  for a personalized assessment and treatment plan.
                </p>
              </div>
            </div>
          </div>
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
