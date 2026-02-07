// RK Design - Site Data
// This file contains all the content data for the website

export const siteData = {
    companyInfo: {
        name: "RK Design",
        tagline: "Building Dreams with Precision and Elegance",
        description: "We specialize in creating sustainable, functional, and aesthetically pleasing architectural solutions tailored to your specific needs.",
        contact: {
            phone: "+91-9876543210",
            email: "info@rkdesign.com",
            location: "Mumbai, India",
            address: "123 Design District, Bandra West, Mumbai 400050"
        },
        social: {
            instagram: "https://instagram.com/rkdesign",
            facebook: "https://facebook.com/rkdesign",
            linkedin: "https://linkedin.com/company/rkdesign",
            twitter: "https://twitter.com/rkdesign"
        }
    },

    stats: [
        { number: "150+", label: "Projects Completed" },
        { number: "12+", label: "Years Experience" },
        { number: "98%", label: "Happy Clients" },
        { number: "25+", label: "Design Awards" }
    ],

    services: [
        {
            id: "architecture",
            title: "Architecture",
            shortDescription: "Comprehensive architectural design for residential, commercial, and institutional projects.",
            description: "Comprehensive architectural design services for residential, commercial, and institutional projects. We focus on innovation, sustainability, and functionality to create spaces that inspire and endure.",
            features: [
                "Conceptual Design & Planning",
                "3D Modeling & Visualization",
                "Structural Analysis",
                "Sustainable Building Design"
            ],
            icon: "🏛️",
            image: "/assets/images/hero/service_architecture.webp"
        },
        {
            id: "interior",
            title: "Interior Design",
            shortDescription: "Transforming spaces into inspiring environments that blend style with comfort.",
            description: "Transforming spaces into inspiring environments. Our interior design services blend style with comfort to create unique living and working spaces that reflect your personality.",
            features: [
                "Space Planning",
                "Furniture Selection & Customization",
                "Lighting Design",
                "Material & Color Consultation"
            ],
            icon: "🛋️",
            image: "/assets/images/hero/service_interior.webp"
        },
        {
            id: "renovation",
            title: "Renovation",
            shortDescription: "Revitalize your property with expert renovation while preserving original charm.",
            description: "Revitalize your existing property with our expert renovation services. We modernize old structures while preserving their original charm and character.",
            features: [
                "Structural Reinforcement",
                "Modernization & Upgrades",
                "Facade Facelifts",
                "Adaptive Reuse"
            ],
            icon: "🔧",
            image: "/assets/images/hero/service_renovation.webp"
        },
        {
            id: "vastu",
            title: "Vastu Consultation",
            shortDescription: "Harmonize your space with ancient wisdom for health, wealth, and prosperity.",
            description: "Harmonize your space with ancient wisdom. Our Vastu experts provide guidance to ensure your building promotes health, wealth, and prosperity.",
            features: [
                "Site Analysis & Selection",
                "Layout Corrections",
                "Directional Alignment",
                "Energy Balancing"
            ],
            icon: "🧭",
            image: "/assets/images/hero/service_vastu.webp"
        },
        {
            id: "construction",
            title: "Construction",
            shortDescription: "Turnkey construction delivering high-quality execution from start to finish.",
            description: "Turnkey construction services delivering high-quality execution. We manage everything from ground-breaking to final handover with precision and professionalism.",
            features: [
                "Project Management",
                "Civil Works",
                "Quality Control",
                "Timely Delivery"
            ],
            icon: "🏗️",
            image: "/assets/images/hero/service_construction.webp"
        }
    ],

    portfolio: {
        categories: ["All", "Elevation", "Architecture", "Interior"],
        projects: [
            {
                id: "elev_1",
                category: "Elevation",
                title: "Modern Minimalist Villa",
                location: "Pune, India",
                client: "Mr. Sharma",
                year: "2023",
                image: "/assets/images/portfolio/elevation_modern.webp"
            },
            {
                id: "elev_2",
                category: "Elevation",
                title: "Contemporary Office Facade",
                location: "Bangalore, India",
                client: "TechSolutions Pvt Ltd",
                year: "2023",
                image: "/assets/images/portfolio/elevation_commercial.webp"
            },
            {
                id: "elev_3",
                category: "Elevation",
                title: "Classic Heritage Home",
                location: "Jaipur, India",
                client: "Mrs. Rathore",
                year: "2022",
                image: "/assets/images/portfolio/elevation_classic.webp"
            },
            {
                id: "arch_1",
                category: "Architecture",
                title: "Skyline Heights Apartments",
                location: "Mumbai, India",
                client: "Skyline Developers",
                year: "2024",
                image: "/assets/images/portfolio/architecture_apartment.webp"
            },
            {
                id: "arch_2",
                category: "Architecture",
                title: "Green Valley Resort",
                location: "Lonavala, India",
                client: "Green Valley Group",
                year: "2023",
                image: "/assets/images/portfolio/architecture_resort.webp"
            },
            {
                id: "arch_3",
                category: "Architecture",
                title: "Institutional Campus",
                location: "Hyderabad, India",
                client: "Knowledge Trust",
                year: "2022",
                image: "/assets/images/portfolio/architecture_campus.webp"
            },
            {
                id: "int_1",
                category: "Interior",
                title: "Luxury Penthouse Living",
                location: "Delhi, India",
                client: "Mr. Kapoor",
                year: "2024",
                image: "/assets/images/portfolio/interior_living.webp"
            },
            {
                id: "int_2",
                category: "Interior",
                title: "Corporate Office Workspace",
                location: "Gurgaon, India",
                client: "Global Corp",
                year: "2023",
                image: "/assets/images/portfolio/interior_office.webp"
            },
            {
                id: "int_3",
                category: "Interior",
                title: "Boutique Hotel Lobby",
                location: "Goa, India",
                client: "Seaside Hotels",
                year: "2023",
                image: "/assets/images/portfolio/interior_lobby.webp"
            }
        ]
    },

    about: {
        story: "Founded in 2010, RK Design has grown from a small studio in Mumbai to one of India's most respected architectural firms. Our journey began with a simple belief: great design has the power to transform lives.",
        mission: "To create sustainable, innovative architectural solutions that enhance the quality of life while respecting the environment and cultural heritage.",
        vision: "To be recognized as India's leading architectural firm, known for our commitment to excellence, innovation, and client satisfaction.",
        values: [
            {
                title: "Quality Excellence",
                description: "We never compromise on quality, ensuring every project meets the highest standards.",
                icon: "✨"
            },
            {
                title: "Innovation",
                description: "We embrace new technologies and creative solutions to push the boundaries of design.",
                icon: "💡"
            },
            {
                title: "Sustainability",
                description: "We design with the future in mind, creating eco-friendly and energy-efficient buildings.",
                icon: "🌿"
            },
            {
                title: "Client First",
                description: "Your vision is our priority. We listen, understand, and deliver beyond expectations.",
                icon: "🤝"
            }
        ]
    },

    navigation: [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" }
    ]
};

export type Service = typeof siteData.services[0];
export type Project = typeof siteData.portfolio.projects[0];
export type Value = typeof siteData.about.values[0];
