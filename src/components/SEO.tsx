import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const BASE_URL = "https://drkmortho.com";
const DEFAULT_IMAGE = "https://drkmortho.com/og-image.jpg";

export const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  structuredData,
}: SEOProps) => {
  const fullTitle = `${title} | Dr. Karthik Manchala - Orthopaedic Surgeon Hyderabad`;
  const url = canonicalUrl ? `${BASE_URL}${canonicalUrl}` : BASE_URL;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Dr. Karthik Manchala" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Dr. Karthik Manchala Ortho Clinic" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad" />
      <meta name="geo.position" content="17.395;78.375" />
      <meta name="ICBM" content="17.395, 78.375" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Reusable Structured Data Schemas
export const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Karthik Manchala",
  "jobTitle": "Orthopaedic, Joint Replacement & Arthroscopic Surgeon",
  "description": "Orthopaedic Surgeon with 12+ years of experience specializing in joint replacement, fracture fixation, and arthroscopy.",
  "image": "https://drkmortho.com/doctor-portrait.jpg",
  "telephone": "+91-6281894631",
  "email": "info@drkmortho.com",
  "medicalSpecialty": ["Orthopedic Surgery", "Joint Replacement", "Arthroscopy"],
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Chalmeda Ananda Rao Institute of Medical Sciences, Karimnagar"
    },
    {
      "@type": "EducationalOrganization",
      "name": "P.D. Hinduja Hospital, Mumbai"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "MBBS"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "DNB Orthopaedics"
    }
  ],
  "worksFor": {
    "@type": "MedicalBusiness",
    "name": "Dr. Karthik Manchala Ortho Clinic",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rd Number 25, Alkapur Township",
      "addressLocality": "Manikonda, Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500089",
      "addressCountry": "IN"
    }
  },
  "availableService": [
    "Knee Replacement Surgery",
    "Hip Replacement Surgery",
    "Fracture Fixation",
    "Arthroscopy",
    "Ligament Reconstruction",
    "Sports Injury Treatment",
    "Back Pain Management"
  ]
};

export const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Dr. Karthik Manchala Ortho Clinic",
  "alternateName": "KM Ortho Clinic",
  "url": "https://drkmortho.com",
  "logo": "https://drkmortho.com/logo.png",
  "image": "https://drkmortho.com/clinic-reception.jpg",
  "telephone": "+91-6281894631",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rd Number 25, Alkapur Township",
    "addressLocality": "Manikonda, Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500089",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.395,
    "longitude": 78.375
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "14:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "17:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "11:00",
      "closes": "14:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150",
    "bestRating": "5"
  },
  "medicalSpecialty": "Orthopedic",
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Knee Replacement Surgery",
      "procedureType": "SurgicalProcedure"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Hip Replacement Surgery",
      "procedureType": "SurgicalProcedure"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Arthroscopy",
      "procedureType": "SurgicalProcedure"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Fracture Treatment",
      "procedureType": "SurgicalProcedure"
    }
  ]
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://drkmortho.com${item.url}`
  }))
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const medicalServiceSchema = (services: { name: string; description: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Orthopaedic Services by Dr. Karthik Manchala",
  "itemListElement": services.map((service, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "MedicalProcedure",
      "name": service.name,
      "description": service.description,
      "procedureType": "SurgicalProcedure"
    }
  }))
});
