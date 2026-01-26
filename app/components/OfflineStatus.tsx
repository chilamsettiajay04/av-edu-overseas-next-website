"use client";

import { useEffect, useState } from "react";
import { WifiOff, RefreshCw } from "lucide-react";
import Button from "./Button";
import { siteContent } from "../constants/siteContent";

export default function OfflineStatus() {
    const [isOnline, setIsOnline] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Set mounted to true after first render
        setMounted(true);

        // Initial check
        setIsOnline(navigator.onLine);

        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    // Don't render anything until mounted to prevent hydration mismatch
    if (!mounted || isOnline) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-color-background/95 backdrop-blur-sm flex flex-col items-center justify-center animate-fade-in">
            <div className="h-full flex flex-col items-center justify-center text-center  gap-6 max-w-md p-8 rounded-2xl border border-color-border bg-white shadow-2xl">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto rounded-full bg-red-50 flex items-center justify-center">
                    <WifiOff className="w-10 h-10 text-red-500" />
                </div>

                {/* Text */}
                <div className="space-y-2">
                    <h2 className="text-fontsize-h3 font-fontweight-bold text-color-text-primary">
                        {siteContent.offline.title}
                    </h2>
                    <p className="text-fontsize-body text-color-text-muted">
                        {siteContent.offline.description}
                    </p>
                </div>

                {/* Retry Button */}

                <Button
                    label={siteContent.offline.buttonLabel}
                    onClick={() => window.location.reload()}
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto text-white"
                    data-testid="call-now-btn"
                />
            </div>
        </div>
    );
}
