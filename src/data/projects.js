export const projects = [
    {
        slug: 'docappoint',
        title: 'DocAppoint',
        description:
            'A healthcare appointment booking system that allows patients to schedule doctor visits, manage appointments, and access healthcare services through an intuitive and responsive web interface.',
        longDescription: [
            'DocAppoint is a full-stack healthcare appointment platform built to simplify how patients find doctors and book visits online. It solves the common friction of phone-based scheduling by giving patients a clean, self-service booking flow.',
            'Patients can browse available doctors, view time slots, and confirm appointments in a few clicks. Authentication is handled securely with BetterAuth, and the backend uses JWT-based sessions to protect appointment and user data.',
            'The app is built with a decoupled architecture: a Next.js/React frontend for a fast, responsive UI, and a Node.js/Express REST API backed by MongoDB for storing users, doctors, and appointment records.',
        ],
        tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Next.js', 'React', 'BetterAuth'],
        image: '/docAppoint.png',
        features: [
            'Doctor discovery and profile browsing',
            'Real-time appointment slot booking',
            'Secure authentication with BetterAuth + JWT',
            'Responsive UI across devices',
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
            'A modern travel and destination booking web application where users can explore, add, manage, and book travel destinations with personalized user profiles and secure authentication.',
        longDescription: [
            'Wanderlast is a travel discovery and booking platform where users can explore curated destinations, save favorites, and manage their own trip listings.',
            'The app supports full CRUD for destinations, so users can add new places, edit details, and manage their listings alongside a personalized profile.',
            'Authentication and session management are handled with BetterAuth and JWT, while MongoDB stores destinations, bookings, and user data behind an Express REST API.',
        ],
        tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Next.js', 'React', 'BetterAuth'],
        image: '/wanderlast.jpg',
        features: [
            'Browse and search travel destinations',
            'Add, edit, and manage destination listings',
            'Personalized user profiles',
            'Secure authentication flow',
        ],
        links: {
            live: 'https://wonderlust-brown.vercel.app/',
            github: 'https://github.com/ashrafulhoda789/wanderlust-discover-adventure',
        },
    },
    {
        slug: 'bookbee',
        title: 'BookBee',
        description: 'A premium bookstore platform with real-time inventory and elegant transitions.',
        longDescription: [
            'BookBee is an online bookstore experience designed around a smooth, premium browsing feel rather than a bare-bones catalog list.',
            'Built on Next.js, it uses real-time inventory data backed by MongoDB, so stock and availability stay accurate as users browse and check out.',
            'BetterAuth handles user accounts, letting the store personalize the experience while keeping the checkout flow simple and fast.',
        ],
        tech: ['Next.js', 'React', 'BetterAuth', 'MongoDB'],
        image: '/bookbee.png',
        features: [
            'Real-time inventory tracking',
            'Smooth page transitions and micro-interactions',
            'User accounts via BetterAuth',
            'MongoDB-backed catalog',
        ],
        links: {
            live: 'https://bookbee-online-platform.vercel.app/',
            github: 'https://github.com/ashrafulhoda789/bookbee-online-platform',
        },
    },
    {
        slug: 'keen-keeper',
        title: 'Keen-Keeper',
        description: 'Advanced productivity suite for high-performance teams and creative professionals.',
        longDescription: [
            'Keen-Keeper is a productivity suite aimed at helping teams and individuals organize tasks and workflows without the clutter of heavier project-management tools.',
            'The interface is built with React and styled using Tailwind CSS and DaisyUI components, keeping the UI consistent, accessible, and quick to extend.',
            'The focus throughout was on a clean component structure and a UI that stays out of the way of getting work done.',
        ],
        tech: ['React', 'Tailwind', 'DaisyUI'],
        image: '/keen-keeper.png',
        features: [
            'Task and workflow organization',
            'Component-driven UI with DaisyUI',
            'Responsive, distraction-free layout',
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