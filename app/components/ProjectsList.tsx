"use client";

import { useEffect, useRef } from "react";
import { Projects, ProjectsListProps } from "../Types/Types";
import ProjectsCard from "./Projects";

export default function ProjectsList({ data }: ProjectsListProps) {
    return (
        <>
            <div className="md:hidden">
                <ProjectsCarousel data={data} />
            </div>

            <div className="hidden md:block">
                <ProjectsGrid data={data} />
            </div>
        </>
    );
}

function ProjectsCarousel({ data }: ProjectsListProps) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

    const carouselData = [
        data[data.length - 1],
        ...data,
        data[0],
    ];

    const getSlidePosition = (slide: HTMLDivElement) => {
        const carousel = carouselRef.current;

        if (!carousel) return 0;

        return (
            slide.offsetLeft -
            (carousel.clientWidth - slide.offsetWidth) / 2
        );
    };

    const goToSlide = (index: number, smooth = true) => {
        const carousel = carouselRef.current;
        const slide = slidesRef.current[index];

        if (!carousel || !slide) return;

        carousel.scrollTo({
            left: getSlidePosition(slide),
            behavior: smooth ? "smooth" : "auto",
        });
    };

    const handleScrollEnd = () => {
        const carousel = carouselRef.current;

        if (!carousel) return;

        const carouselCenter =
            carousel.scrollLeft + carousel.clientWidth / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        slidesRef.current.forEach((slide, index) => {
            if (!slide) return;

            const slideCenter =
                slide.offsetLeft + slide.offsetWidth / 2;

            const distance = Math.abs(
                slideCenter - carouselCenter
            );

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        // Clone do último
        if (closestIndex === 0) {
            goToSlide(data.length, false);
            return;
        }

        // Clone do primeiro
        if (closestIndex === data.length + 1) {
            goToSlide(1, false);
        }
    };

    useEffect(() => {
        const carousel = carouselRef.current;

        if (!carousel) return;

        carousel.addEventListener("scrollend", handleScrollEnd);

        return () => {
            carousel.removeEventListener("scrollend", handleScrollEnd);
        };
    }, [data.length]);

    useEffect(() => {
        requestAnimationFrame(() => {
            goToSlide(1, false);
        });
    }, []);

    return (
        <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none"
        >
            {carouselData.map((project: Projects, index) => (
                <div
                    key={`${project.title}-${index}`}
                    ref={(element) => {
                        slidesRef.current[index] = element;
                    }}
                    onClick={() => goToSlide(index)}
                    className="shrink-0 w-[85%] snap-center cursor-pointer"
                >
                    <ProjectsCard projects={project} />
                </div>
            ))}
        </div>
    );
}

function ProjectsGrid({ data }: ProjectsListProps) {
    return (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {data.map((project: Projects) => (
                <div
                    key={project.title}
                    className="cursor-pointer"
                >
                    <ProjectsCard projects={project} />
                </div>
            ))}
        </div>
    );
}
