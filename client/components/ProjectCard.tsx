import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    category: string;
    image: string;
    id: string;
}

export default function ProjectCard({ title, category, image, id }: ProjectCardProps) {
    return (
        <Link href={`/projects`} className="group block relative overflow-hidden rounded-xl">
            <div className="relative h-80 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                        <ArrowUpRight className="w-6 h-6 text-black" />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary text-sm font-medium mb-1">{category}</p>
                <h3 className="text-xl font-bold">{title}</h3>
            </div>
        </Link>
    );
}
