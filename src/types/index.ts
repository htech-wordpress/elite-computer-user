// TypeScript interfaces for website data - Updated for simplified business fields

// Settings
export interface WebsiteSettings {
    businessName: string;      // Was siteName
    websiteTitle: string;       // Was seoTitle
    primaryColor: string;       // New
    secondaryColor: string;     // New
    logoUrl: string;           // Was logo
    faviconUrl: string;        // Was favicon
}

// SEO Metadata
export interface SEO {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
}

// Theme System
export interface ColorTheme {
    name: string;
    label?: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        text: string;
        textLight?: string;
    };
}

// Homepage
export interface HeroSlide {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
}

export interface Testimonial {
    customerName: string;
    feedback: string;
    rating: number;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface TrustBadge {
    name: string;
    url: string;
}

export interface Homepage {
    heroHeading: string;
    heroSubtext: string;        // Was heroTagline
    heroImage: string;          // New - single hero image
    heroSlides: HeroSlide[];    // Keep for backward compatibility
    testimonials: Testimonial[];
    faqs: FAQ[];
    trustBadges: TrustBadge[];
}

// Services
export interface Service {
    id?: string;
    name: string;
    shortDesc: string;          // New - short description
    description: string;        // Long description
    icon?: string;
    iconUrl?: string;
    price?: string;
    features?: string[];
    youtubeUrl?: string;
    whatsappMessage?: string;
}

// About
export interface CoreValues {
    innovation: string;
    excellence: string;
    trust: string;
}

export interface About {
    title: string;
    description: string;
    image: string;
    mission: string;
    vision: string;
    coreValues: CoreValues;
}

// Social Media
export interface SocialMedia {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
}

// Contact
export interface Contact {
    email: string;
    phone: string;
    address: string;
    googleMapsUrl?: string;
    bannerImage?: string;
    socialMedia?: SocialMedia;  // Optional, can be top-level
}

// WhatsApp
export interface WhatsApp {
    phoneNumber: string;
    defaultMessage: string;
    enabled: boolean;
}

// Header
export interface Header {
    title: string;
    menu: any[];
}

// Main Website Data Structure
export interface WebsiteData {
    homepage: Homepage;
    services: Service[];
    about: About;
    contact: Contact;
    settings: WebsiteSettings;
    seo: SEO;                   // New
    socialMedia: SocialMedia;   // New - top level
    theme: ColorTheme;
    whatsapp: WhatsApp;
    header: Header;
    selectedTemplate?: string;
}
