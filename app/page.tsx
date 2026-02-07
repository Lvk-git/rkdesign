import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesPreview from '@/components/home/ServicesPreview';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Stats from '@/components/home/Stats';
import CTASection from '@/components/home/CTASection';
import { siteData } from '@/lib/data';

// Dynamic import for 3D component to avoid SSR issues
const Hero3D = dynamic(() => import('@/components/home/Hero3D'), {
    ssr: false,
    loading: () => (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 50%, #e8e8e8 100%)'
        }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{
                    width: '50px',
                    height: '50px',
                    border: '3px solid #e5e7eb',
                    borderTopColor: '#c9a962',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    margin: '0 auto 1rem'
                }} />
                <p style={{ color: '#6b7280' }}>Loading...</p>
            </div>
        </section>
    )
});

export default function HomePage() {
    return (
        <main>
            <Navbar />
            <Hero3D />
            <ServicesPreview />
            <FeaturedProjects />
            <Stats stats={siteData.stats} />
            <CTASection />
            <Footer />
        </main>
    );
}
