import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-primary-foreground font-bold">
                                A
                            </div>
                            <span className="text-xl font-bold tracking-tight">AXIUM</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Building the future of Kenya with precision, quality, and integrity.
                            We deliver premium construction solutions for residential and commercial projects.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Facebook className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Instagram className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-primary">Quick Links</h3>
                        <ul className="space-y-3">
                            {["Home", "About Us", "Services", "Projects", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(" ", "-") === "home" ? "" : item.toLowerCase().replace(" ", "-")}`} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-primary">Our Services</h3>
                        <ul className="space-y-3">
                            {["General Contracting", "Project Management", "Interior Design", "Renovations", "Civil Engineering"].map((item) => (
                                <li key={item}>
                                    <Link href="/services" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-primary">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>123 Construction Ave, Westlands,<br />Nairobi, Kenya</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+254 700 123 456</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>info@axiumconstruction.co.ke</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Axium Construction. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
