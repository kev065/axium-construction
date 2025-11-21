import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    const projects = [
        {
            id: "1",
            title: "Modern Office Complex",
            category: "Commercial",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: "2",
            title: "Luxury Villa",
            category: "Residential",
            image: "https://images.unsplash.com/photo-1600596542815-6031b5a825cd?q=80&w=2072&auto=format&fit=crop",
        },
        {
            id: "3",
            title: "Urban Apartments",
            category: "Residential",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: "4",
            title: "Shopping Mall Renovation",
            category: "Commercial",
            image: "https://images.unsplash.com/photo-1519567241046-7f570eee3c9e?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: "5",
            title: "Industrial Warehouse",
            category: "Industrial",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: "6",
            title: "Eco-Friendly Home",
            category: "Residential",
            image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                {/* Header */}
                <section className="bg-secondary text-white py-20">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Explore our portfolio of successful projects across Kenya.
                        </p>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} {...project} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
