"use client"
import Link from 'next/link';
import fileDownload from 'js-file-download'; // Import the file download utility
import { useState } from 'react';

interface CardData {
    title: string;
    paragraph: string;
    cta1: string;
    cta2: string;
    link1: string;
    link2: string; // This will now represent the path to the PDF file
}

const cardData: CardData[] = [
    {
        title: "School Admin Software",
        paragraph: "A guide to setting up your school profile, managing accounts, and overseeing student records.",
        cta1: "Admin Login",
        cta2: "Download Admin Manual",
        link1: "https://ekschool.pbresultvault.com/",
        link2: "/admin-manual.pdf", // PDF file path
    },
    {
        title: "Teacher Software",
        paragraph: "Discover how to manage student grades, input results efficiently, and much more.",
        cta1: "Teacher Login",
        cta2: "Download Teacher Manual",
        link1: "https://ekteacher.pbresultvault.com/",
        link2: "/teacher-manual.pdf", // PDF file path
    },
    {
        title: "Student Software",
        paragraph: "Access your results, track academic progress, and understand how to use the portal.",
        cta1: "Student Login",
        cta2: "Download Student Manual",
        link1: "https://ekstudents.pbresultvault.com/",
        link2: "/student-manual.pdf", // PDF file path
    },
];

const Benefits = () => {
    const handleDownload = (fileUrl: string) => {
        fetch(fileUrl) // Fetch the file from the public folder or external source
            .then((response) => response.blob()) // Get the file as a Blob
            .then((blob) => {
                fileDownload(blob, fileUrl.split('/').pop() || 'download.pdf'); // Trigger download with file name
            })
            .catch((error) => console.error('Error downloading file:', error));
    };

    return (
        <div className="bg-gray py-16 px-4 sm:px-6 lg:px-8" id='Benefits'>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-6xl font-extrabold text-center text-black mb-12">
                    Guides and Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cardData.map((card, i) => (
                        <div key={i} className="bg-[#f3ebdd] rounded p-8 flex flex-col justify-between">
                            <h3 className="text-lg font-bold text-black mb-4 text-left">{card.title}</h3>
                            <p className="text-gray-600 mb-6 text-left">{card.paragraph}</p>

                            {/* First CTA */}
                            <Link href={card.link1} passHref legacyBehavior>
                                <a className="text-white bg-[#00733d] transition-all text-center font-medium py-2 px-4 rounded block w-40">
                                    {card.cta1}
                                </a>
                            </Link>

                            {/* Second CTA (Download link) */}
                            <button
                                onClick={() => handleDownload(card.link2)}
                                className="text-[#00733d] underline text-md font-medium mt-4 block text-left"
                            >
                                {card.cta2}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Benefits;
