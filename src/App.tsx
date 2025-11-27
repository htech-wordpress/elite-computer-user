import { useEffect } from 'react';
import { useWebsiteData } from './hooks/useWebsiteData';
import { useTheme } from './hooks/useTheme';
import { Header } from './components/modern/Header/Header';
import { Hero } from './components/modern/Hero/Hero';
import { About } from './components/modern/About/About';
import { Services } from './components/modern/Services/Services';
import { Testimonials } from './components/modern/Testimonials/Testimonials';
import { Contact } from './components/modern/Contact/Contact';
import { Footer } from './components/modern/Footer/Footer';
import './styles/global.css';

function App() {
  const { data, loading, error } = useWebsiteData();

  // Apply theme from database
  useTheme(data?.theme || null);

  useEffect(() => {
    if (data?.settings) {
      document.title = data.settings.websiteTitle || data.settings.businessName || 'Welcome';
    }
  }, [data]);

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #2563eb, #1e40af)',
        color: 'white'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '4px solid rgba(255,255,255,0.3)',
            borderTop: '4px solid white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem'
          }}></div>
          <p>Loading...</p>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '500px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</h1>
          <h2 style={{ marginBottom: '1rem' }}>Error Loading Website</h2>
          <p style={{ color: '#6b7280' }}>{error}</p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="app">
      {/* Header Navigation */}
      <Header
        siteName={data.settings.businessName}
        logo={data.settings.logoUrl}
        menu={data.header?.menu}
      />

      {/* Hero Section */}
      {data.homepage && (
        <Hero
          data={{
            heading: data.homepage.heroHeading,
            tagline: data.homepage.heroSubtext,
            slides: data.homepage.heroSlides
          }}
        />
      )}

      {/* About Section */}
      {data.about && (
        <About data={data.about} />
      )}

      {/* Services Section */}
      {data.services && data.services.length > 0 && (
        <Services
          data={{
            title: 'Our Services',
            subtitle: 'Discover what we offer',
            services: data.services
          }}
        />
      )}

      {/* Testimonials Section */}
      {data.homepage?.testimonials && data.homepage.testimonials.length > 0 && (
        <Testimonials testimonials={data.homepage.testimonials} />
      )}

      {/* Contact Section */}
      {data.contact && (
        <Contact
          data={data.contact}
          whatsappNumber={data.whatsapp?.phoneNumber}
        />
      )}

      {/* Footer */}
      <Footer
        siteName={data.settings.businessName}
        email={data.contact?.email}
        phone={data.contact?.phone}
        socialMedia={data.contact?.socialMedia}
      />
    </div>
  );
}

export default App;
