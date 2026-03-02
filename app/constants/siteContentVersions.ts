// ============================================
// VERSION 1 - Warm, Personal, Story-Driven
// ============================================

export const version1_siteContent = {
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
        images: ["./About/image1.png", "./About/image2.png", "./About/image3.png", "./About/image4.jpg", "./About/image5.jpg", "./About/image6.jpg", "./About/image7.jpg"],
        galleryLabel: "Gallery",
        sectionTag: "Why We Exist",
        heading: { text: "We Believe In", highlight: "Your Dreams" },
        content: [
            {
                text: "There are over ",
                highlight: "200 world-class universities",
                suffix: " waiting for students like you. We've helped our students find their home in institutions across 31 countries.",
            },
            {
                text: "We started AV Edu because ",
                highlight: "we've been there",
                suffix: ". Our team understands the fears, hopes, and dreams you carry when you think about studying far from home.",
            },
            {
                text: "From your first consultation to stepping onto that airplane, ",
                highlight: "we walk beside you",
                suffix: ". Every document, every form, every worry - we handle it so you can focus on your future.",
            },
        ],
    },
    cta: {
        heading: { text: "Your Future Is", highlight: "Waiting" },
        subtext: "That dream university in a foreign land? It's closer than you think. Let's talk about how to get you there.",
        benefits: ["No obligation consultation", "Honest guidance", "We answer within 24 hours"],
        buttons: { book: "Let's Start This Journey", call: "Call Us Today" },
    },
    home: {
        image: "./About/home_image.webp",
        heading: { text: "Where Will Your", highlight: "Story Begin?" },
        subHeading: "Every big dream starts with one step. Let us help you take that first step towards studying abroad.",
        buttons: { book: "Start My Journey", call: "Call Us Today" },
        trust: [
            { value: "98%", label: "Visa Success" },
            { value: "50+", label: "Universities" },
            { value: "10+", label: "Countries" },
        ],
        floatingCards: {
            card1: { value: "1000+", label: "Dreams Fulfilled" },
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
            { value: "6+", label: "Services" },
            { value: "98%", label: "Success Rate" },
            { value: "50+", label: "Countries" },
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


// ============================================
// VERSION 2 - Aspirational, Dream-Focused
// ============================================

export const version2_siteContent = {
    global: {
        brandName: "AV Edu Overseas",
        logoAlt: "AV Edu Overseas Logo",
    },
    contact: {
        address: "PRASHANT COMPLEX, 16-11-486, Opp CMR SHOWROOM, DILSUKHNAGAR, HYDERABAD .",
        mobileNumber: "918121112165",
        email: "info@aveducation.com",
        whatsappMessage: "I want to turn my study abroad dream into reality.",
    },
    navbar: {
        logo: { src: "./logo.png", alt: "logo" },
        links: [
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
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
            description: "Your dream destination isn't just a place on a map. It's a life waiting to be built. We're the bridge that gets you there.",
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
        title: "AV Edu Overseas – Where Ambition Meets Opportunity",
        description: "Transform your life through international education. Expert guidance for admissions, visas, and university placement worldwide.",
        keywords: ["study abroad", "international education", "student visa", "university admission", "overseas consultants"],
        openGraph: {
            title: "AV Edu Overseas – Your Passport to the World",
            description: "Your global education journey starts here. Let's make it happen.",
            url: "https://chilamsettiajay04.github.io/av-edu-overseas-next-website/",
            siteName: "AV Edu Overseas",
            images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AV Edu Overseas" }],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "AV Edu Overseas – Where Ambition Meets Opportunity",
            description: "Your dream university is waiting. Let's go get it.",
            images: ["/og-image.png"],
        },
    },
    about: {
        images: ["./About/image1.png", "./About/image2.png", "./About/image3.png", "./About/image4.jpg", "./About/image5.jpg", "./About/image6.jpg", "./About/image7.jpg"],
        galleryLabel: "Gallery",
        sectionTag: "Our Purpose",
        heading: { text: "Beyond Education.", highlight: "Beyond Borders." },
        content: [
            {
                text: "Imagine waking up in a city where dreams are built. Over ",
                highlight: "200 top universities",
                suffix: " across 31 countries are calling your name. Your classroom could be anywhere in the world.",
            },
            {
                text: "At AV Edu, we don't just process paperwork. ",
                highlight: "We fuel ambitions",
                suffix: ". We've watched ordinary students transform into world-changing leaders. Your turn is coming.",
            },
            {
                text: "From the moment you dream about studying abroad to the day you land, ",
                highlight: "we're your constant",
                suffix: ". Counseling, applications, visas, loans - everything under one roof.",
            },
        ],
    },
    cta: {
        heading: { text: "Your Big Dreams", highlight: "Start Now" },
        subtext: "That life you've imagined? It's possible. Book your free session and let's make it real.",
        benefits: ["No pressure conversation", "Real answers", "Quick response"],
        buttons: { book: "Book Free Session", call: "Call Now" },
    },
    home: {
        image: "./About/home_image.webp",
        heading: { text: "Your Passport To", highlight: "The World" },
        subHeading: "The world is bigger than you think. Let us help you find your place in it through education abroad.",
        buttons: { book: "Start My Journey", call: "Call Us Now" },
        trust: [
            { value: "98%", label: "Visa Wins" },
            { value: "50+", label: "Universities" },
            { value: "10+", label: "Countries" },
        ],
        floatingCards: {
            card1: { value: "1000+", label: "Students Transformed" },
            card2: { value: "Expert Team", label: "2+ Years Experience" },
        },
    },
    process: {
        stepLabel: "STEP",
        sectionTag: "The Path",
        heading: { text: "Your Roadmap To", highlight: "Abroad" },
        description: "No confusion. No getting lost. Just clear steps from where you are to where you want to be.",
        steps: [
            {
                number: "01",
                title: "Dream Session",
                description: "Tell us what you want. We'll tell you what's possible. No judgment, just possibilities.",
            },
            {
                number: "02",
                title: "Application Phase",
                description: "We help you craft applications that stand out. Your story deserves to be heard.",
            },
            {
                number: "03",
                title: "The Big Win",
                description: "Admission letters arrive. Then we attack the visa. We'll celebrate your wins together.",
            },
            {
                number: "04",
                title: "Ready for Launch",
                description: "Pre-departure prep, accommodation, flights - we ensure you're 100% ready for your new life.",
            },
        ],
    },
    services: {
        sectionTag: "What We Do",
        heading: { text: "Everything For Your", highlight: "Journey" },
        intro: [
            {
                text: "Your study abroad journey has many parts. ",
                highlight: "We've mastered them all",
                suffix: ". You focus on your dreams; we handle everything else.",
            },
            {
                text: "Our ",
                highlight: "98% success rate",
                suffix: " isn't a number. It's proof that when you dream big and work smart, magic happens.",
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
                strongText: "Your student visa is the key to your new life. We make sure that key unlocks every door.",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
            },
            {
                title: "Flight Booking",
                description: "International flight booking",
                strongText: "The best deals for your journey. We find flights that don't break your wallet.",
                color: "text-indigo-600",
                bgColor: "bg-indigo-50",
            },
            {
                title: "Visitor Visa",
                description: "Tourist & family visit visas",
                strongText: "Want to see family abroad or explore the world? Let's get you there quickly.",
                color: "text-purple-600",
                bgColor: "bg-purple-50",
            },
            {
                title: "PR Services",
                description: "Permanent residence guidance",
                strongText: "Dreams of calling another country home? We navigate the path to permanent residency.",
                color: "text-amber-600",
                bgColor: "bg-amber-50",
            },
            {
                title: "Travel & Tourism",
                description: "Pan India & International",
                strongText: "Before you settle down to study, explore! We plan trips that become memories.",
                color: "text-rose-600",
                bgColor: "bg-rose-50",
            },
            {
                title: "Immigration",
                description: "Relocation assistance",
                strongText: "Moving to a new country is a big step. We make sure every i is dotted, every t is crossed.",
                color: "text-green-600",
                bgColor: "bg-green-50",
            },
        ],
    },
    testimonials: {
        sectionTag: "Their Stories",
        heading: { text: "Students Who", highlight: "Made It" },
        description: "Real students. Real universities. Real transformations. Be the next success story.",
        testimonials: [
            {
                name: "Rahul Sharma",
                university: "University of Toronto",
                country: "Canada",
                rating: 5,
                content: "From Hyderabad to Toronto - this team made it possible. My parents couldn't believe it.",
            },
            {
                name: "Ananya Reddy",
                university: "University of Melbourne",
                country: "Australia",
                rating: 5,
                content: "They found me a university I didn't even know existed. Now I'm living my dream.",
            },
            {
                name: "Mohammed Faisal",
                university: "University of Leeds",
                country: "UK",
                rating: 5,
                content: "Honest guidance from day one. No false promises, just results.",
            },
        ],
    },
    notFound: {
        title: "Page Not Found",
        description: "Even the best journeys have detours. Let's get you back on track.",
        buttonLabel: "Back to Home",
        code: 404
    },
    offline: {
        title: "No Internet Connection",
        description: "When you're back online, your dream journey awaits.",
        buttonLabel: "Retry Connection",
    },
};


// ============================================
// VERSION 3 - Reassuring, Guidance-Focused
// ============================================

export const version3_siteContent = {
    global: {
        brandName: "AV Edu Overseas",
        logoAlt: "AV Edu Overseas Logo",
    },
    contact: {
        address: "PRASHANT COMPLEX, 16-11-486, Opp CMR SHOWROOM, DILSUKHNAGAR, HYDERABAD .",
        mobileNumber: "918121112165",
        email: "info@aveducation.com",
        whatsappMessage: "I need guidance for my child's/study abroad plans.",
    },
    navbar: {
        logo: { src: "./logo.png", alt: "logo" },
        links: [
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
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
            description: "For years, we've helped families send their children to the best universities abroad. Your child's future is in good hands.",
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
        title: "AV Edu Overseas – Trusted Study Abroad Consultants",
        description: "Family-owned guidance for your child's international education. Trusted by parents, built for student success.",
        keywords: ["study abroad consultants", "student visa", "overseas education", "university admission", "education guidance"],
        openGraph: {
            title: "AV Edu Overseas – Trusted Since Day One",
            description: "We treat every student like our own. Let us help your child achieve their potential.",
            url: "https://chilamsettiajay04.github.io/av-edu-overseas-next-website/",
            siteName: "AV Edu Overseas",
            images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AV Edu Overseas" }],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "AV Edu Overseas – Trusted Since Day One",
            description: "Your child's future matters. We're here to help.",
            images: ["/og-image.png"],
        },
    },
    about: {
        images: ["./About/image1.png", "./About/image2.png", "./About/image3.png", "./About/image4.jpg", "./About/image5.jpg", "./About/image6.jpg", "./About/image7.jpg"],
        galleryLabel: "Gallery",
        sectionTag: "Who We Are",
        heading: { text: "Built On Trust,", highlight: "Driven By Care" },
        content: [
            {
                text: "Every parent wants the best for their child. We've helped over ",
                highlight: "1000 families",
                suffix: " find the right path to world-class education across 31 countries.",
            },
            {
                text: "AV Edu wasn't built to be the biggest. ",
                highlight: "We were built to care",
                suffix: ". Every student who walks through our doors becomes part of our family.",
            },
            {
                text: "We handle the complex stuff - admissions, visas, documentation - so your child can focus on becoming their best self.",
            },
        ],
    },
    cta: {
        heading: { text: "Give Your Child The", highlight: "World" },
        subtext: "Every parent wants to give their child every possible advantage. Let's discuss how international education can transform their life.",
        benefits: ["Free, detailed consultation", "Transparent process", "We treat your child like our own"],
        buttons: { book: "Schedule Consultation", call: "Call For Advice" },
    },
    home: {
        image: "./About/home_image.webp",
        heading: { text: "A World Of", highlight: "Possibility" },
        subHeading: "Your child deserves every opportunity. We help open doors to global universities that shape brilliant futures.",
        buttons: { book: "Let's Discuss", call: "Call Us Now" },
        trust: [
            { value: "98%", label: "Visa Approval" },
            { value: "50+", label: "Universities" },
            { value: "10+", label: "Countries" },
        ],
        floatingCards: {
            card1: { value: "1000+", label: "Families Helped" },
            card2: { value: "Expert Team", label: "2+ Years Experience" },
        },
    },
    process: {
        stepLabel: "STEP",
        sectionTag: "How We Help",
        heading: { text: "We'll Guide You", highlight: "Every Step" },
        description: "You won't navigate this alone. We're with you from the first call to beyond graduation.",
        steps: [
            {
                number: "01",
                title: "Understanding Your Child",
                description: "We learn about your child's dreams, strengths, and goals. Every student is unique.",
            },
            {
                number: "02",
                title: "Finding The Fit",
                description: "Not every university is right for every student. We find the perfect match.",
            },
            {
                number: "03",
                title: "Making It Happen",
                description: "Applications, interviews, visas - we handle the stressful parts. You handle the celebrating.",
            },
            {
                number: "04",
                title: "Seeing Them Through",
                description: "Even after your child leaves, we're here. Pre-departure prep and on-going support.",
            },
        ],
    },
    services: {
        sectionTag: "Our Services",
        heading: { text: "Complete Support For", highlight: "Your Family" },
        intro: [
            {
                text: "Sending a child to study abroad is a big decision. ",
                highlight: "We're here to make it easier",
                suffix: ". Our complete services cover everything your family needs.",
            },
            {
                text: "Our ",
                highlight: "98% success rate",
                suffix: " means we've been there, done that. We've helped families just like yours.",
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
                strongText: "Student visas can be overwhelming. We guide families through every document, every form, every question.",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
            },
            {
                title: "Flight Booking",
                description: "International flight booking",
                strongText: "We help find the best flights for your child. Safe, reliable, and within budget.",
                color: "text-indigo-600",
                bgColor: "bg-indigo-50",
            },
            {
                title: "Visiting Visa",
                description: "Family visit visas",
                strongText: "Want to visit your child abroad? We make family visits happen smoothly.",
                color: "text-purple-600",
                bgColor: "bg-purple-50",
            },
            {
                title: "PR Services",
                description: "Permanent residence guidance",
                strongText: "Some families dream of settling abroad. We guide parents through that process too.",
                color: "text-amber-600",
                bgColor: "bg-amber-50",
            },
            {
                title: "Travel & Tourism",
                description: "Pan India & International",
                strongText: "Let your family experience India or explore the world together.",
                color: "text-rose-600",
                bgColor: "bg-rose-50",
            },
            {
                title: "Immigration",
                description: "Relocation assistance",
                strongText: "Relocating a family is complex. We simplify every step for peace of mind.",
                color: "text-green-600",
                bgColor: "bg-green-50",
            },
        ],
    },
    testimonials: {
        sectionTag: "Parent Feedback",
        heading: { text: "What Families", highlight: "Say" },
        description: "We're proud to have helped so many families. Here's what they say about the journey.",
        testimonials: [
            {
                name: "Rahul Sharma",
                university: "University of Toronto",
                country: "Canada",
                rating: 5,
                content: "They guided us through every step. Our son is in Canada now, and we're so grateful.",
            },
            {
                name: "Ananya Reddy",
                university: "University of Melbourne",
                country: "Australia",
                rating: 5,
                content: "As parents, we had so many worries. This team addressed every single one with patience.",
            },
            {
                name: "Mohammed Faisal",
                university: "University of Leeds",
                country: "UK",
                rating: 5,
                content: "They were honest, realistic, and incredibly supportive throughout.",
            },
        ],
    },
    notFound: {
        title: "Page Not Found",
        description: "Let's get you back to where you need to be.",
        buttonLabel: "Back to Home",
        code: 404
    },
    offline: {
        title: "No Internet Connection",
        description: "We'll be here when you're back. Your consultation is just a call away.",
        buttonLabel: "Retry Connection",
    },
};
