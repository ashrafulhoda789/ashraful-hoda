export const projects = [
    {
        slug: 'legalease',
        title: 'LegalEase',
        description:
            'A modern legal marketplace platform connecting users with verified lawyers, featuring multi-role authentication, direct booking, and dynamic dashboards.',
        longDescription: [
            'LegalEase is a responsive full-stack web application designed to bridge the gap between clients and verified legal professionals. It streamlines legal consultation by allowing users to effortlessly browse specialists, check transparent fees, and manage bookings.',
            'The platform supports multi-role access (Users, Lawyers, and Admins), providing dedicated dashboards to handle consultation requests, schedule tracking, profile updates, and system-wide analytics efficiently.',
            'Built with a modern decoupled stack: a Next.js App Router and HeroUI frontend for optimized client-side performance, backed by a Node.js/Express API, MongoDB database, and Better Auth for secure role-based session management.',
        ],
        tech: ['Next.js', 'React', 'Tailwind CSS', 'HeroUI', 'Node.js', 'Express.js', 'MongoDB', 'Better Auth'],
        image: '/legalease-thumbnail.png',
        features: [
            'Multi-role secure authentication (Users, Lawyers, and Admins)',
            'Global directory search to browse and filter lawyers by specialization',
            'Dynamic role-based dashboards for tracking appointments and consultation requests',
            'Comprehensive profile management and client feedback tracking',
            'Fully responsive mobile-first UI with smooth routing and optimized performance',
        ],
        links: {
            live: 'https://legalease-client-five.vercel.app',
            github: 'https://github.com/ashrafulhoda789/legalease-client',
        },
    },
    {
        slug: 'docappoint',
        title: 'DocAppoint',
        description:
            'A healthcare appointment booking platform that allows patients to browse doctors, schedule visits, and manage bookings with a dedicated dashboard.',
        longDescription: [
            'DocAppoint is a full-stack healthcare appointment platform built to simplify how patients find doctors and book visits online. It solves the common friction of phone-based scheduling by giving patients a clean, self-service booking flow.',
            'Patients can browse doctor profiles, select available slots, and manage their bookings through an intuitive user dashboard. Profile updating, real-time statistics, and a modern sidebar navigation keep everything organized.',
            'The app is built with a decoupled architecture: a Next.js/React frontend for a fast, responsive UI, and a Node.js/Express REST API backed by MongoDB for storing users, doctors, and appointment records with secure authentication.',
        ],
        tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Next.js', 'React', 'BetterAuth'],
        image: '/docAppoint.png',
        features: [
            'Secure authentication (Login / Register)',
            'Browse doctor profiles & real-time slot booking',
            'Dashboard with appointment statistics & booking management',
            'User profile management (name & profile image updates)',
            'Clean sidebar navigation & fully responsive design',
        ],
        links: {
            live: 'https://doc-appoint-one.vercel.app/',
            github: 'https://github.com/ashrafulhoda789/docAppoint',
        },
    },
    {
        slug: 'wanderlast',
        title: 'Wanderlast',
        description:
            'A modern full-stack travel and destination platform where users can discover, add, and manage travel destinations from around the world.',
        longDescription: [
            'Wanderlast is a travel discovery and booking platform where users can explore curated destinations, discover amazing places, and manage their own trip listings.',
            'The platform provides complete destination management (CRUD), allowing users to create new listings with pricing, images, and details, as well as update or delete existing destinations.',
            'Built with modern web technologies, Wanderlast delivers a smooth experience featuring location-based listings, dynamic destination pages, and secure user authentication.',
        ],
        tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Next.js', 'React', 'BetterAuth'],
        image: '/wanderlast.jpg',
        features: [
            'Secure authentication & user profile management',
            'Full CRUD operations for travel destinations',
            'Location-based listings & dynamic destination pages',
            'Upload destination images with details & pricing',
            'Fully responsive modern user experience',
        ],
        links: {
            live: 'https://wonderlust-brown.vercel.app/',
            github: 'https://github.com/ashrafulhoda789/wanderlust-discover-adventure',
        },
    },
    {
        slug: 'bookbee',
        title: 'BookBee',
        description:
            'An online book borrowing platform where users can explore, search, filter, and borrow books through a modern Next.js interface.',
        longDescription: [
            'BookBee is an online book borrowing platform designed to make discovering and managing books easy and accessible for readers.',
            'Users can browse through all available books, search titles directly, and filter by category to find their next read. Each book page offers detailed information, supported by protected routes for registered members.',
            'Built on Next.js with custom branding and dynamic routing, BookBee offers a seamless, mobile-responsive UI with secure user accounts.',
        ],
        tech: ['Next.js', 'React', 'BetterAuth', 'MongoDB', 'Tailwind CSS'],
        image: '/bookbee.png',
        features: [
            'User authentication with protected routes (Login / Register / Logout)',
            'Search books by title & filter by category',
            'Detailed book view & borrowing management',
            'Custom BookBee branding with dynamic Next.js routing',
            'Fully responsive mobile-friendly interface',
        ],
        links: {
            live: 'https://bookbee-online-platform.vercel.app/',
            github: 'https://github.com/ashrafulhoda789/bookbee-online-platform',
        },
    },
    {
        slug: 'keen-keeper',
        title: 'Keen-Keeper',
        description:
            'A React relationship-tracking application designed to help users monitor interactions, set goals, and maintain consistent connections with friends.',
        longDescription: [
            'Keen-Keeper is a modern web application built to help users nurture and maintain meaningful personal relationships without losing touch.',
            'It enables users to track communication history (calls, texts, video chats) via a structured timeline and set relationship goals (e.g., connect every X days).',
            'Featuring dynamic analytics charts, detailed friend profiles, and a clean UI styled with Tailwind CSS and DaisyUI, Keen-Keeper provides clear visual insights into communication habits.',
        ],
        tech: ['React', 'Tailwind CSS', 'DaisyUI'],
        image: '/keen-keeper.png',
        features: [
            'Track interaction logs (Call, Text, Video Chat)',
            'Communication history timeline',
            'Relationship goal tracking (reconnect reminders)',
            'Dynamic analytics & frequency charts',
            'Detailed friend profiles with modern responsive UI',
        ],
        links: {
            live: 'https://keen-keeper-project-ph.netlify.app/',
            github: 'https://github.com/ashrafulhoda789/keen-keeper-project-ph',
        },
    },
];

export function getProjectBySlug(slug) {
    return projects.find((p) => p.slug === slug);
}