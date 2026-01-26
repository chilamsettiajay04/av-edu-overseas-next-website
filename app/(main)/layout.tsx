import Navbar from "../Navbar/page";
import CTA from "../CTA/page";
import Footer from "../Footer/page";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <div className="pt-16">
                {children}
            </div>
            <CTA />
            <Footer />
        </>
    );
}
