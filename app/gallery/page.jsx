"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Import existing images
import image1 from "@/public/galleryPage/image1.jpeg";
import image2 from "@/public/galleryPage/image2.jpeg";
import image3 from "@/public/galleryPage/image3.jpeg";
import image4 from "@/public/galleryPage/image4.jpg";
import image5 from "@/public/galleryPage/image5.jpeg";
import image6 from "@/public/galleryPage/image6.jpeg";
import image7 from "@/public/galleryPage/image7.jpeg";
import image8 from "@/public/galleryPage/image8.JPG";
import image9 from "@/public/galleryPage/image9.JPG";
import image10 from "@/public/galleryPage/image10.jpeg";
import image11 from "@/public/galleryPage/image11.jpeg";
import image12 from "@/public/galleryPage/image12.jpeg";
import image13 from "@/public/galleryPage/image13.jpg";
import image14 from "@/public/galleryPage/image14.jpeg";
import image15 from "@/public/galleryPage/image15.jpeg";
import image16 from "@/public/galleryPage/image16.JPG";

// Gallery data organized by sections
const galleryData = [
  {
    title: "GENESIS 5.0 HIGHLIGHTS",
    subtitle: "Main event moments and celebrations",
    images: [
      { src: image1, size: "tall" },
      { src: image2, size: "small" },
      { src: image3, size: "small" },
      { src: image4, size: "small" },
      { src: image5, size: "small" },
      { src: image6, size: "large" },
    ],
  },
  {
    title: "WORKSHOPS & SESSIONS",
    subtitle: "Learning experiences and technical sessions",
    images: [
      { src: image7, size: "tall" },
      { src: image8, size: "small" },
      { src: image9, size: "small" },
      { src: image10, size: "small" },
      { src: image11, size: "small" },
      { src: image12, size: "large" },
    ],
  },
  {
    title: "TEAM MOMENTS",
    subtitle: "Behind the scenes and team interactions",
    images: [
      { src: image13, size: "tall" },
      { src: image14, size: "small" },
      { src: image15, size: "small" },
      { src: image16, size: "small" },
      { src: image1, size: "small" },
      { src: image2, size: "large" },
    ],
  },
];

const Page = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
      );
    }
  }, []);

  const renderImageGrid = (images) => {
    const tallImage = images.find((img) => img.size === "tall");
    const largeImage = images.find((img) => img.size === "large");
    const smallImages = images.filter((img) => img.size === "small");

    return (
      <>
        {/* Desktop Grid Layout */}
        <div className="hidden flex-col flex-wrap items-center justify-center gap-2 bg-transparent p-3 sm:gap-4 sm:p-6 lg:flex lg:flex-row">
          {/* Left Tall Image */}
          {tallImage && (
            <div className="h-[280px] w-[280px] overflow-hidden rounded-2xl sm:h-[320px] sm:w-[200px] lg:h-[360px] lg:w-[220px]">
              <Image
                src={tallImage.src}
                alt="Gallery Image"
                width={220}
                height={340}
                className="h-full w-full object-cover grayscale"
              />
            </div>
          )}

          {/* Middle Column */}
          <div className="flex flex-col gap-2 sm:gap-4">
            {/* Top Row */}
            <div className="flex gap-2 sm:gap-4">
              {smallImages.slice(0, 2).map((img, i) => (
                <div
                  key={`top-${i}`}
                  className="h-[120px] w-[120px] overflow-hidden rounded-2xl sm:h-[150px] sm:w-[150px] lg:h-[170px] lg:w-[170px]"
                >
                  <Image
                    src={img.src}
                    alt="Gallery Image"
                    width={170}
                    height={170}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            {/* Bottom Row */}
            <div className="flex gap-2 sm:gap-4">
              {smallImages.slice(2, 4).map((img, i) => (
                <div
                  key={`bottom-${i}`}
                  className="h-[120px] w-[120px] overflow-hidden rounded-2xl sm:h-[150px] sm:w-[150px] lg:h-[170px] lg:w-[170px]"
                >
                  <Image
                    src={img.src}
                    alt="Gallery Image"
                    width={170}
                    height={170}
                    className="h-full w-full object-cover grayscale"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Large Image */}
          {largeImage && (
            <div className="h-[280px] w-[280px] overflow-hidden rounded-2xl sm:h-[320px] sm:w-[320px] lg:h-[360px] lg:w-[340px]">
              <Image
                src={largeImage.src}
                alt="Gallery Image"
                width={340}
                height={340}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Mobile Grid Layout - 2 Columns */}
        <div className="mx-auto grid max-w-[400px] grid-cols-2 gap-3 p-4 lg:hidden">
          {/* First Image - First Column, Rows 1-2 */}
          {images[0] && (
            <div className="col-span-1 row-span-2 aspect-[1/2] overflow-hidden rounded-2xl">
              <Image
                src={images[0].src}
                alt="Gallery Image"
                width={200}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {/* Second Image - Second Column, First Row */}
          {images[1] && (
            <div className="col-span-1 row-span-1 aspect-square overflow-hidden rounded-2xl">
              <Image
                src={images[1].src}
                alt="Gallery Image"
                width={180}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {/* Third Image - Second Column, Second Row */}
          {images[2] && (
            <div className="col-span-1 row-span-1 aspect-square overflow-hidden rounded-2xl">
              <Image
                src={images[2].src}
                alt="Gallery Image"
                width={180}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {/* Fourth Image - First Column, Third Row */}
          {images[3] && (
            <div className="col-span-1 row-span-1 aspect-square overflow-hidden rounded-2xl">
              <Image
                src={images[3].src}
                alt="Gallery Image"
                width={180}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {/* Fifth Image - Second Column, Third Row */}
          {images[4] && (
            <div className="col-span-1 row-span-1 aspect-square overflow-hidden rounded-2xl">
              <Image
                src={images[4].src}
                alt="Gallery Image"
                width={180}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {/* Sixth Image - Both Columns, Fourth and Fifth Rows */}
          {images[5] && (
            <div className="col-span-2 row-span-2 aspect-[1/1] overflow-hidden rounded-2xl">
              <Image
                src={images[5].src}
                alt="Gallery Image"
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="w-full bg-custom-gradient text-white">
      <Navbar />

      {/* Gallery Content */}
      <div ref={sectionRef} className="px-4 py-16 md:px-8 lg:px-16 pt-40">
        {galleryData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="relative mb-20">
            {/* Section Header */}
            <div className="relative mb-12 text-center">

              <h2 className="pt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                {section.title}
              </h2>
              <p className="mt-4 text-lg text-white md:text-xl">
                {section.subtitle}
              </p>
            </div>

            {/* Image Grid */}
            {renderImageGrid(section.images)}
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default Page;
