import React from 'react'
import { useTheme } from "next-themes";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

interface BookCallButtonProps {
    className?: string;
    eventSlug?: string;
    calUsername?: string;
    title?: string;
}

export default function BookCallModal({ className, title = "Book a Call" }: BookCallButtonProps) {
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    const iframeUrl = `https://cal.com/anamul-hasan-zcyhcl/test?theme=${currentTheme === 'dark' ? 'dark' : 'light'}&embed=true&layout=month_view`;

    return (
        <Dialog>
            <DialogTrigger className={className}>
                {title}
            </DialogTrigger>
            <DialogContent className="h-7/12">
                <DialogTitle className="sr-only">{title}</DialogTitle>
                <div data-cal-namespace="test" className="h-full w-full">
                    <iframe
                        src={iframeUrl}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        data-cal-link="anamul-hasan-zcyhcl/test"
                        data-cal-config='{"layout":"month_view"}'
                        style={{ 
                            border: 'none',
                            overflow: 'hidden'
                        }}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}
