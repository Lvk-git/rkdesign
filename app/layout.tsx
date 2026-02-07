import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'RK Design | Building Dreams with Precision and Elegance',
    description: 'RK Design specializes in creating sustainable, functional, and aesthetically pleasing architectural solutions. Architecture, Interior Design, Renovation, Vastu Consultation & Construction services in Mumbai, India.',
    keywords: ['Architecture', 'Interior Design', 'Renovation', 'Vastu', 'Construction', 'Mumbai', 'India', 'RK Design'],
    authors: [{ name: 'RK Design' }],
    openGraph: {
        title: 'RK Design | Premium Architecture & Interior Design',
        description: 'Building Dreams with Precision and Elegance. Professional architectural services in Mumbai, India.',
        type: 'website',
        locale: 'en_IN',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
