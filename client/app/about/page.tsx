import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                {/* Header */}
                <section className="bg-secondary text-white py-20">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Learn more about our history, our values, and the team behind Axium Construction.
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Building with Integrity Since 2010</h2>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    Axium Construction was founded with a simple mission: to provide high-quality construction services with transparency and integrity. Over the years, we have grown from a small contractor to a leading construction firm in Kenya.
                                </p>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    We specialize in residential, commercial, and industrial projects. Our team of experienced engineers, architects, and skilled workers ensures that every project is delivered on time and within budget.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {["Experienced Team", "Quality Assurance", "Safety First", "Sustainable Practices"].map((item) => (
                                        <div key={item} className="flex items-center gap-2">
                                            <CheckCircle2 className="text-primary w-5 h-5" />
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop"
                                    alt="Team Meeting"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-16 bg-primary text-primary-foreground">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { label: "Years Experience", value: "15+" },
                                { label: "Projects Completed", value: "200+" },
                                { label: "Happy Clients", value: "150+" },
                                { label: "Team Members", value: "50+" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                                    <div className="text-sm md:text-base font-medium opacity-90">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
