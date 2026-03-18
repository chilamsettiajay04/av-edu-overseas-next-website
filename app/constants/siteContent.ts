// ============================================
// VERSION 1 - Warm, Personal, Story-Driven
// ============================================

export const siteContent = {
    global: {
        brandName: "AV Edu Overseas",
        logoAlt: "AV Edu Overseas Logo",
    },
    contact: {
        address: "PRASHANT COMPLEX, 16-11-486, Opp CMR SHOWROOM, DILSUKHNAGAR, HYDERABAD .",
        mobileNumber: "918121112165",
        email: "info@aveducation.com",
        whatsappMessage: "Hi, I want to discuss my dreams of studying abroad.",
    },
    navbar: {
        logo: { src: "./logo.png", alt: "logo" },
        links: [
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Mission", href: "#mission" },
            { label: "Services", href: "#services" },
            { label: "Process", href: "#process" },
            { label: "Testimonials", href: "#testimonials" },
        ],
        cta: { label: "Contact", mobileLabel: "Contact Us" },
        menu: { openAria: "Open menu", closeAria: "Close menu" },
    },
    footer: {
        company: {
            logo: { src: "./logo.png", alt: "Company Logo" },
            description: "We've walked this path with thousands of families. Every student's dream matters to us. Let us help you write your success story.",
        },
        quickLinks: {
            title: "Quick Links",
            links: [
                { label: "Home", href: "/" },
                { label: "About Us", href: "/About" },
                { label: "Services", href: "/Services" },
                { label: "Testimonials", href: "/Testimonials" },
            ],
        },
        contact: { title: "Contact Us" },
        socials: {
            facebook: { label: "Facebook", href: "#" },
            twitter: { label: "Twitter", href: "#" },
            linkedin: { label: "LinkedIn", href: "#" },
            instagram: { label: "Instagram", href: "#" },
        },
        bottomBar: {
            copyright: (year: number) => `copyright © ${year} AV Edu Overseas. All rights reserved.`,
            privacyPolicy: { label: "Privacy Policy", href: "#" },
            termsOfService: { label: "Terms of Service", href: "#" },
        },
    },
    seo: {
        metadataBase: new URL("https://www.aveduoverseas.com"),
        title: "AV Edu Overseas – Your Dream, Our Mission",
        description: "We turn your overseas education dream into reality. Expert guidance for admissions, visas, and finding your path to global universities.",
        keywords: ["study abroad", "overseas education", "student visa", "university admission", "education consultants"],
        openGraph: {
            title: "AV Edu Overseas – Turn Your Dream Into Reality",
            description: "Expert guidance for your overseas education journey. Let's make it happen together.",
            url: "https://chilamsettiajay04.github.io/av-edu-overseas-next-website/",
            siteName: "AV Edu Overseas",
            images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AV Edu Overseas" }],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "AV Edu Overseas – Your Dream, Our Mission",
            description: "Your overseas education journey starts here.",
            images: ["/og-image.png"],
        },
    },
    about: {
        images: ["./About/image1.png", "./About/image2.png", "./About/image3.png", "./About/image6.jpg", "./About/image5.jpg", "./About/image6.jpg", "./About/image7.jpg"],
        galleryLabel: "Gallery",
        sectionTag: "Why We Exist",
        heading: { text: "We Believe In", highlight: "Your Dreams" },
        content: [
            {
                text: "More than ",
                highlight: "200 world-class universities",
                suffix: " are within your reach. We’ve successfully guided students into leading institutions across 31 countries, turning ambition into real academic success.",
            },
            {
                text: "AV Edu Overseas was built from ",
                highlight: "lived experience",
                suffix: ". We understand what it truly means to leave home — the uncertainty, the pressure, the expectations, and the hope for something bigger.",
            },
            {
                text: "From your first consultation to the day you board your flight, ",
                highlight: "we stand with you",
                suffix: ". Applications, documentation, visa processing, and preparation — we handle the complexity so you can focus on building your future.",
            },
        ],
        missionVision: {
            sectionTag: "Mission & Vision",
            mission: {
                heading: "What Drives Us",
                content: "To make international education attainable, and life-changing for students who aspire to explore opportunities beyond boundaries.",
            },
            vision: {
                heading: "Where We’re Headed",
                content: "To bridge the gap between ambition and opportunity by making study abroad dreams a reality for every student.",
            },
            values: [
                { icon: "target", label: "Student-First Approach" },
                { icon: "heart", label: "Honest Guidance" },
                { icon: "star", label: "Personalized Support" },
                { icon: "globe", label: "Global Opportunities" },
            ],
        },
    },
    cta: {
        heading: { text: "Take the First Step Toward", highlight: "Your Dream University" },
        subtext: "No pressure. No confusion. Just expert guidance tailored to you.",
        benefits: ["No obligation consultation", "Honest guidance", "We answer within 24 hours"],
        buttons: { book: "Let's Start This Journey", call: "Call Us Today" },
    },
    home: {
        image: "./About/home_image.webp",
        heading: { text: "Turning Your Dreams into", highlight: "Reality" },
        subHeading: "Every big dream begins with a single step. Let us guide you toward your future abroad education.",
        buttons: { book: "Start My Journey", call: "Call Us Today" },
        trust: [
            { value: "99.9%", label: "Visa Success" },
            { value: "1000+", label: "Universities" },
            { value: "30+", label: "Countries" },
        ],
        floatingCards: {
            card1: { value: "30+", label: "Study Destinations" },
            card2: { value: "Expert Team", label: "2+ Years Experience" },
        },
    },
    process: {
        stepLabel: "STEP",
        sectionTag: "Your Journey",
        heading: { text: "From Dream To", highlight: "Reality" },
        description: "This isn't just paperwork. It's your life we're helping shape. Here's how we make it happen.",
        steps: [
            {
                number: "01",
                title: "Let's Talk",
                description: "Share your dreams with us. Tell us what excites you, what scares you, and what you've always wanted to become.",
            },
            {
                number: "02",
                title: "Finding Your Path",
                description: "Together, we discover universities that match your dreams. Your applications tell YOUR story.",
            },
            {
                number: "03",
                title: "Making It Real",
                description: "When those acceptance letters arrive, we'll handle the visa maze. You focus on packing your dreams.",
            },
            {
                number: "04",
                title: "You're Ready",
                description: "Before you go, we make sure you're prepared for everything. And even after you leave, we're still here.",
            },
        ],
    },
    services: {
        sectionTag: "How We Help",
        heading: { text: "We're Here For", highlight: "You" },
        intro: [
            {
                text: "We don't just process applications. ",
                highlight: "We champion your dreams",
                suffix: ". Every student who walks through our doors carries something precious - their future.",
            },
            {
                text: "With ",
                highlight: "a 98% success rate",
                suffix: ", we've proven that dreams can become reality. But more importantly, we've held hands with families through every approval and every rejection.",
            },
        ],
        stats: [
            { value: "10+", label: "Services" },
            { value: "99.9%", label: "Success Rate" },
            { value: "30+", label: "Countries" },
            { value: "24/7", label: "Support" },
        ],
        list: [
            {
                title: "Student Visa",
                description: "Bachelors, Masters, MBBS, PhD",
                strongText: "Your visa isn't just a document - it's your entry ticket to a new life. We'll make sure it's perfect.",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
            },
            {
                title: "Air Ticket Booking",
                description: "International flight booking",
                strongText: "We find flights that fit your budget. Because your journey abroad should start stress-free.",
                color: "text-indigo-600",
                bgColor: "bg-indigo-50",
            },
            {
                title: "Visiting Visa",
                description: "Hassle-free travel visas",
                strongText: "Planning to visit family abroad? Let's make the visa the easiest part of your trip.",
                color: "text-purple-600",
                bgColor: "bg-purple-50",
            },
            {
                title: "PR Services",
                description: "Permanent residence guidance",
                strongText: "Dreaming of making another country your home? We guide you through every step.",
                color: "text-amber-600",
                bgColor: "bg-amber-50",
            },
            {
                title: "Travel & Tourism",
                description: "Pan India & International",
                strongText: "India has so much to show the world. Let us help you discover its magic.",
                color: "text-rose-600",
                bgColor: "bg-rose-50",
            },
            {
                title: "Immigration",
                description: "Overseas relocation assistance",
                strongText: "Moving countries is big. We make it manageable. Your new life starts here.",
                color: "text-green-600",
                bgColor: "bg-green-50",
            },
        ],
    },
    testimonials: {
        sectionTag: "Real Stories",
        heading: { text: "From Our", highlight: "Families" },
        description: "These aren't just success stories. They're real families who trusted us with their dreams.",
        testimonials: [
            {
                name: "Rahul Sharma",
                university: "University of Toronto",
                country: "Canada",
                rating: 5,
                content: "I was terrified about my visa. This team turned my tears of worry into tears of joy.",
            },
            {
                name: "Ananya Reddy",
                university: "University of Melbourne",
                country: "Australia",
                rating: 5,
                content: "They didn't just get me admitted. They believed in me when I didn't believe in myself.",
            },
            {
                name: "Mohammed Faisal",
                university: "University of Leeds",
                country: "UK",
                rating: 5,
                content: "Honest advice when I needed it most. That's what made all the difference.",
            },
        ],
    },
    notFound: {
        title: "Page Not Found",
        description: "Sometimes we take wrong turns. Let's get you back on the path to your dreams.",
        buttonLabel: "Back to Home",
        code: 404
    },
    offline: {
        title: "No Internet Connection",
        description: "Even when offline, we're still here for you. Try again when you're back online.",
        buttonLabel: "Retry Connection",
    },
};