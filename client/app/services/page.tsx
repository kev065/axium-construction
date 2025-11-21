import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Hammer, Ruler, HardHat, Truck, PaintBucket, Wrench } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "General Contracting",
            description: "Comprehensive construction services for residential and commercial projects, ensuring quality and timely delivery.",
            icon: Hammer,
            href: "/contact",
        },
        {
            title: "Project Management",
            description: "Expert oversight of your construction project from inception to completion, managing budget, schedule, and quality.",
            icon: HardHat,
            href: "/contact",
        },
        {
            title: "Interior Design",
            description: "Transforming spaces with creative and functional interior design solutions tailored to your style and needs.",
            icon: Ruler,
            href: "/contact",
        },
        {
            title: "Logistics & Supply",
            description: "Efficient sourcing and delivery of high-quality construction materials to keep your project moving smoothly.",
            icon: Truck,
            href: "/contact",
        },
        {
            title: "Renovations",
            description: "Breathing new life into existing structures with modern upgrades and structural improvements.",
            icon: PaintBucket,
            href: "/contact",
        },
        {
            title: "Maintenance",
            description: "Ongoing maintenance services to ensure your property remains in top condition for years to come.",
            icon: Wrench,
            href: "/contact",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                {/* Header */}
                <section className="bg-secondary text-white py-20">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We offer a wide range of construction and design services to meet your every need.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service) => (
                                <ServiceCard key={service.title} {...service} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
