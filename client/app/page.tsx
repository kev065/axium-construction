import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { Hammer, Ruler, HardHat, Truck, ArrowRight } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "General Contracting",
      description: "Comprehensive construction services for residential and commercial projects, ensuring quality and timely delivery.",
      icon: Hammer,
      href: "/services",
    },
    {
      title: "Project Management",
      description: "Expert oversight of your construction project from inception to completion, managing budget, schedule, and quality.",
      icon: HardHat,
      href: "/services",
    },
    {
      title: "Interior Design",
      description: "Transforming spaces with creative and functional interior design solutions tailored to your style and needs.",
      icon: Ruler,
      href: "/services",
    },
    {
      title: "Logistics & Supply",
      description: "Efficient sourcing and delivery of high-quality construction materials to keep your project moving smoothly.",
      icon: Truck,
      href: "/services",
    },
  ];

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
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        {/* About Preview */}
        <section className="py-20 bg-white dark:bg-neutral-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-tl-3xl -z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                    alt="Construction Site"
                    className="rounded-lg shadow-xl w-full object-cover h-[400px]"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-br-3xl -z-10" />
                </div>
              </div>
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-primary font-bold tracking-wider uppercase text-sm">About Axium</h2>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  We Build Structures That <span className="text-primary">Last a Lifetime</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  At Axium Construction, we combine decades of experience with modern innovation to deliver exceptional results.
                  Based in Kenya, we understand the local landscape and regulations while applying international standards of quality.
                </p>
                <ul className="space-y-3">
                  {["Certified Professionals", "Quality Materials", "On-Time Delivery", "Transparent Pricing"].map((item) => (
                    <li key={item} className="flex items-center gap-2 font-medium">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="inline-block bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors mt-4"
                >
                  Read More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Our Services</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Construction Solutions</h3>
              <p className="text-muted-foreground">
                From concept to completion, we offer a full range of services to meet your construction needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Preview */}
        <section className="py-20 bg-white dark:bg-neutral-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Our Portfolio</h2>
                <h3 className="text-3xl md:text-4xl font-bold">Recent Projects</h3>
              </div>
              <Link href="/projects" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:translate-x-1 transition-transform">
                View All Projects <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
            <div className="mt-8 md:hidden text-center">
              <Link href="/projects" className="inline-flex items-center gap-2 text-primary font-semibold">
                View All Projects <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Contact us today for a free consultation and quote. Let's build something amazing together.
            </p>
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-xl hover:bg-primary/90 transition-transform hover:scale-105 inline-block shadow-lg hover:shadow-primary/20"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
