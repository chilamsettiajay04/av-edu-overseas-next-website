import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { siteContent } from "./constants/siteContent";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] w-full flex flex-col items-center justify-center px-4 bg-color-background">
            <div className="text-center space-y-6 max-w-lg">
                {/* Large 404 Text */}
                <h1 className="text-[120px] md:text-[150px] font-bold text-color-accent leading-none opacity-50 select-none">
                    {siteContent.notFound.code}
                </h1>

                {/* Content */}
                <div className="space-y-4 -mt-12 relative z-10">
                    <h2 className="text-fontsize-h2 font-fontweight-bold text-color-text-primary">
                        {siteContent.notFound.title}
                    </h2>
                    <p className="text-fontsize-body text-color-text-muted">
                        {siteContent.notFound.description}
                    </p>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-color-accent text-white font-fontweight-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/20"
                    >
                        <MoveLeft className="w-4 h-4" />
                        {siteContent.notFound.buttonLabel}
                    </Link>
                </div>
            </div>
        </div>
    );
}
