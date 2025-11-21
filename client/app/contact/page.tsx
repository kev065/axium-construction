import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                {/* Header */}
                <section className="bg-secondary text-white py-20">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Get in touch with us for inquiries, quotes, or to discuss your next project.
                        </p>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Info */}
                            <div>
                                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                            <MapPin className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                                            <p className="text-muted-foreground">
                                                123 Construction Ave, Westlands<br />
                                                Nairobi, Kenya
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                            <Phone className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                            <p className="text-muted-foreground">
                                                +254 700 123 456<br />
                                                +254 700 000 000
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                            <Mail className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                            <p className="text-muted-foreground">
                                                info@axiumconstruction.co.ke<br />
                                                support@axiumconstruction.co.ke
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                            <Clock className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Working Hours</h3>
                                            <p className="text-muted-foreground">
                                                Mon - Fri: 8:00 AM - 5:00 PM<br />
                                                Sat: 9:00 AM - 1:00 PM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
