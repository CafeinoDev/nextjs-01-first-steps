import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page About",
    description: "This is the about page",
    keywords: ['About Page', 'Testing about page']
}

export default function AboutPage() {
    return (
        <span className="text-7xl">About page</span>
    );
}