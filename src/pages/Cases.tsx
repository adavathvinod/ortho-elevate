import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { BookingForm } from "@/components/BookingForm";
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
    before: "Severe knee arthritis with limited mobility",
    after: "Full range of motion restored",
    beforeImage: caseKneeBefore,
    afterImage: caseKneeAfter,
  },
  {
    id: 2,
    title: "Hip Joint Replacement",
    before: "Chronic hip pain affecting daily activities",
    after: "Pain-free movement achieved",
    beforeImage: caseHipBefore,
    afterImage: caseHipAfter,
  },
  {
    id: 3,
    title: "Fracture Fixation",
    before: "Complex fracture requiring surgical intervention",
    after: "Complete bone healing and recovery",
    beforeImage: caseFractureBefore,
    afterImage: caseFractureAfter,
  },
  {
    id: 4,
    title: "ACL Reconstruction",
    before: "Torn ACL from sports injury",
    after: "Return to sports activities",
    beforeImage: caseAclBefore,
    afterImage: caseAclAfter,
  },
  {
    id: 5,
    title: "Shoulder Arthroscopy",
    before: "Rotator cuff tear with shoulder pain",
    after: "Restored shoulder function",
    beforeImage: caseShoulderBefore,
    afterImage: caseShoulderAfter,
  },
  {
    id: 6,
    title: "Spine Surgery",
    before: "Chronic back pain from disc herniation",
    after: "Pain relief and improved mobility",
    beforeImage: caseSpineBefore,
    afterImage: caseSpineAfter,
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
                {/* Before/After Images */}
                <div className="grid grid-cols-2 gap-px bg-border">
                  <div className="relative aspect-square bg-muted">
                    <img 
                      src={caseItem.beforeImage} 
                      alt={`${caseItem.title} - Before Treatment`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <p className="text-xs font-semibold text-red-400 uppercase tracking-wider">Before Treatment</p>
                      <p className="text-xs text-white/90 mt-1 line-clamp-2">{caseItem.before}</p>
                    </div>
                  </div>
                  <div className="relative aspect-square bg-secondary">
                    <img 
                      src={caseItem.afterImage} 
                      alt={`${caseItem.title} - After Recovery`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <p className="text-xs font-semibold text-green-400 uppercase tracking-wider">After Recovery</p>
                      <p className="text-xs text-white/90 mt-1 line-clamp-2">{caseItem.after}</p>
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
