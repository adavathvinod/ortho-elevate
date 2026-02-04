import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { BookingForm } from "@/components/BookingForm";
import { Award, GraduationCap, Stethoscope, Heart, Calendar, CheckCircle2 } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.png";

const credentials = [
  "MBBS from reputed medical college",
  "MS Orthopaedics from P.D. Hinduja Hospital, Mumbai",
  "Fellowship in Joint Replacement Surgery",
  "Member of Indian Orthopaedic Association",
];

const expertise = [
  "Knee & Hip Joint Replacement",
  "Arthroscopic Surgery",
  "Fracture Fixation & Trauma Care",
  "Ligament Reconstruction",
  "Back Pain Management",
  "Sports Injury Treatment",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/50 to-background section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform rotate-3" />
                <img
                  src={doctorPortrait}
                  alt="Dr. Karthik Manchala"
                  className="relative rounded-2xl shadow-elevated w-full max-w-md mx-auto"
                />
                {/* Experience Badge */}
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-2xl shadow-lg">
                  <p className="text-3xl font-bold">12+</p>
                  <p className="text-sm">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Doctor</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Dr. Karthik Manchala
              </h1>
              <p className="text-xl text-primary font-medium mb-4">
                Orthopaedic, Joint Replacement & Arthroscopic Surgeon
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr. Karthik Manchala completed his Orthopaedic training at the prestigious 
                P.D. Hinduja Hospital, Mumbai. With 12 years of experience, he specializes 
                in fracture fixation, joint replacements, arthroscopy (key-hole surgeries), 
                and comprehensive orthopaedic care.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                He treats knee & hip arthritis, back pain, ligament injuries, fractures, 
                and sports injuries with precision and compassion. His patient-first approach 
                and use of advanced techniques ensure optimal outcomes and faster recovery.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">12+</p>
                  <p className="text-xs text-muted-foreground">Years</p>
                </div>
                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">10K+</p>
                  <p className="text-xs text-muted-foreground">Patients</p>
                </div>
                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">4.9★</p>
                  <p className="text-xs text-muted-foreground">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Expertise */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Credentials */}
            <div className="medical-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Credentials</h2>
              </div>
              <ul className="space-y-4">
                {credentials.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas of Expertise */}
            <div className="medical-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Areas of Expertise</h2>
              </div>
              <ul className="space-y-4">
                {expertise.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
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

export default About;
