export const siteContent = {
    global: {
        brandName: "AV Edu Overseas",
        logoAlt: "AV Edu Overseas Logo",
    },
    contact: {
        address:
            "PRASHANT COMPLEX, 16-11-486, Opp CMR SHOWROOM, DILSUKHNAGAR, HYDERABAD .",
        mobileNumber: "918121112165",
        email: "info@aveducation.com",
        whatsappMessage: "Hello, I’m interested in your services.",
    },
    navbar: {
        logo: {
            src: "./logo.png",
            alt: "logo",
        },
        links: [
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Process", href: "#process" },
            { label: "Testimonials", href: "#testimonials" },
        ],
        cta: {
            label: "Contact",
            mobileLabel: "Contact Us",
        },
        menu: {
            openAria: "Open menu",
            closeAria: "Close menu",
        },
    },
    footer: {
        company: {
            logo: {
                src: "./logo.png",
                alt: "Company Logo",
            },
            description:
                "Your trusted partner for international education. Helping students achieve their dreams of studying abroad since 2022.",
        },
        quickLinks: {
            title: "Quick Links",
            links: [
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#" },
                { label: "Testimonials", href: "#testimonials" },
            ],
        },
        contact: {
            title: "Contact Us",
        },
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
        title: "AV Edu Overseas – International Education & Visa Guidance",
        description:
            "AV Edu Overseas offers expert guidance for studying abroad, including international education programs, student visa assistance, and personalized support for your overseas education journey.",
        keywords: [
            "AV Edu Overseas",
            "study abroad",
            "international education",
            "student visa guidance",
            "overseas study consultants",
            "admissions support",
        ],
        openGraph: {
            title: "AV Edu Overseas – Study Abroad & Visa Guidance",
            description:
                "Get expert guidance for international education, visa processing, and study abroad opportunities with AV Edu Overseas.",
            url: "https://chilamsettiajay04.github.io/av-edu-overseas-next-website/",
            siteName: "AV Edu Overseas",
            images: [
                {
                    url: "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: "AV Edu Overseas",
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "AV Edu Overseas – Study Abroad & Visa Guidance",
            description:
                "Expert study abroad guidance, visa support, and international education consulting.",
            images: ["/og-image.png"],
        },
    },
    about: {
        images: [
            "./About/image1.png",
            "./About/image2.png",
            "./About/image3.png",
            "./About/image4.jpg",
            "./About/image5.jpg",
            "./About/image6.jpg",
            "./About/image7.jpg",
        ],
        galleryLabel: "Gallery",
        sectionTag: "Our Story",
        heading: {
            text: "Your Global Education",
            highlight: "Partner",
        },
        content: [
            {
                text: "Explore over ",
                highlight: "200 top-tier universities",
                suffix:
                    " across 31 countries worldwide. The world is your campus, offering limitless choices and boundless opportunities for your academic journey.",
            },
            {
                text: "We at ",
                highlight: "AV Edu",
                suffix:
                    " AV Edu provide student services by connecting institutions to students across the globe and to transform individuals by inspiring and fostering excellence and enabling them to utilize their full potential thus creating global leaders.",
            },
            {
                text: "We strive to be a one stop solution from Counselling to Standardized Test Prep, Application to Admission, Overseas Education Loan Assistance to ",
                highlight: "Visa Processing",
                suffix:
                    " Visa Processing and all other associated allied services",
            },
        ],
    },
    cta: {
        heading: {
            text: "Ready to Begin Your",
            highlight: "Global Education Journey?",
        },
        subtext:
            "Book a free consultation with our expert advisors and discover the best universities and programs tailored to your goals.",
        benefits: [
            "Free 30-min consultation",
            "Expert guidance",
            "24-hour response time",
        ],
        buttons: {
            book: "Book Free Consultation",
            call: "Call Us Now",
        },
    },
    home: {
        heading: {
            text: "Ambition Meets ",
            highlight: "Opportunity",
        },
        subHeading:
            "Study abroad and let your education go beyond borders. We guide students and partners to the world's top universities.",
        buttons: {
            book: "Book Free Consultation",
            call: "Call Us Now",
        },
        trust: [
            { value: "98%", label: "Visa Success" },
            { value: "50+", label: "Universities" },
            { value: "10+", label: "Countries" },
        ],
        floatingCards: {
            card1: {
                value: "1000+",
                label: "Students Trusted",
            },
            card2: {
                value: "Expert Team",
                label: "2+ Years Experience",
            },
        },
    },
    process: {
        stepLabel: "STEP",
        sectionTag: "How It Works",
        heading: {
            text: "Your Journey To",
            highlight: "Study Abroad",
        },
        description:
            "We guide you through every step of your international education journey with personalized support and expert advice.",
        steps: [
            {
                number: "01",
                title: "Free Consultation",
                description:
                    "Schedule a personalized consultation to discuss your academic goals, preferred destinations, and program options.",
            },
            {
                number: "02",
                title: "Application Support",
                description:
                    "Get expert assistance with university selection, document preparation, SOP/LOR writing, and application submission.",
            },
            {
                number: "03",
                title: "Admission & Visa",
                description:
                    "Receive offer letters from top universities. We handle visa documentation, interview preparation, and submission.",
            },
            {
                number: "04",
                title: "Pre-Departure",
                description:
                    "Complete pre-departure briefing, accommodation assistance, travel arrangements, and on-ground support abroad.",
            },
        ],
    },
    services: {
        sectionTag: "Our Services",
        heading: {
            text: "Your Trusted Partner For",
            highlight: "Overseas",
        },
        intro: [
            {
                text: "We specialize in comprehensive overseas solutions with ",
                highlight: "personalized guidance",
                suffix:
                    " for every step of your international journey. From student visas to permanent residence.",
            },
            {
                text: "With ",
                highlight: "98% success rate",
                suffix:
                    ", we've helped thousands achieve their dreams of studying, working, and living abroad with confidence.",
            },
        ],
        stats: [
            { value: "6+", label: "Services" },
            { value: "98%", label: "Success Rate" },
            { value: "50+", label: "Countries" },
            { value: "24/7", label: "Support" },
        ],
        list: [
            {
                title: "Student Visa",
                description: "Bachelors, Masters, MBBS, PhD",
                strongText:
                    "Our overseas services assist with student visa applications, ensuring a smooth process from documentation to approval, so you can focus on your education abroad. Expert guidance every step of the way.",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
            },
            {
                title: "Air Ticket Booking",
                description: "International flight booking",
                strongText:
                    "Book your international flights with us for unbeatable prices, 24/7 customer support, and seamless booking experience. Explore the world hassle-free with our reliable overseas air ticket services.",
                color: "text-indigo-600",
                bgColor: "bg-indigo-50",
            },
            {
                title: "Visiting Visa",
                description: "Hassle-free travel visas",
                strongText:
                    "Our overseas visiting visa service ensures a smooth and hassle-free experience for travelers. We handle all visa requirements, offering expert guidance and support for a successful application process.",
                color: "text-purple-600",
                bgColor: "bg-purple-50",
            },
            {
                title: "PR Services",
                description: "Permanent residence guidance",
                strongText:
                    "Expand your global reach with our premium overseas services. We provide seamless international solutions, ensuring your business thrives in new markets. Trust us for efficiency, expertise, and exceptional support.",
                color: "text-amber-600",
                bgColor: "bg-amber-50",
            },
            {
                title: "Travel & Tourism",
                description: "Pan India & International",
                strongText:
                    "Explore India with our bespoke travel and tourism services. From majestic landscapes to vibrant cultures, we offer personalized experiences that capture the essence of this incredible country. Your adventure awaits!",
                color: "text-rose-600",
                bgColor: "bg-rose-50",
            },
            {
                title: "Immigration",
                description: "Overseas relocation assistance",
                strongText:
                    "Expert immigration services for overseas relocation, offering personalized assistance with visas, documentation, and legal requirements to ensure a smooth and hassle-free transition to your new country.",
                color: "text-green-600",
                bgColor: "bg-green-50",
            },
        ],
    },
    testimonials: {
        sectionTag: "Success Stories",
        heading: {
            text: "Trusted By Students",
            highlight: "Worldwide",
        },
        description: "Join hundreds of successful students who achieved their dreams of studying abroad with our guidance.",
        testimonials: [
            {
                name: "Rahul Sharma",
                university: "University of Toronto",
                country: "Canada",
                rating: 5,
                content: "The guidance and support were exceptional. My visa process was smooth and stress-free.",
            },
            {
                name: "Ananya Reddy",
                university: "University of Melbourne",
                country: "Australia",
                rating: 5,
                content: "They helped me choose the right university and handled everything professionally.",
            },
            {
                name: "Mohammed Faisal",
                university: "University of Leeds",
                country: "UK",
                rating: 5,
                content: "Highly trustworthy consultancy. Clear communication and honest advice.",
            },
            {
                name: "Rahul Sharma",
                university: "University of Toronto",
                country: "Canada",
                rating: 5,
                content: "The guidance and support were exceptional. My visa process was smooth and stress-free.",
            },
            {
                name: "Ananya Reddy",
                university: "University of Melbourne",
                country: "Australia",
                rating: 5,
                content: "They helped me choose the right university and handled everything professionally.",
            },
            {
                name: "Mohammed Faisal",
                university: "University of Leeds",
                country: "UK",
                rating: 5,
                content: "Highly trustworthy consultancy. Clear communication and honest advice.",
            },
        ],
    },
};
