import Image from 'next/image';

// Define the data structure for the cards
interface CardData {
    title: string;
    paragraph: string;
    imgSrc: string;
}

// Data for the four cards
const cardData: CardData[] = [
    {
        title: "Centralized Result Management",
        paragraph: "All schools in Ekiti State can upload and manage student results efficiently.",
        imgSrc: "/result-management.png", // Replace with your actual image path
    },
    {
        title: "Real-time Access",
        paragraph: "Students and parents can access results directly, ensuring transparency and engagement.",
        imgSrc: "/real-time-access.png", // Replace with your actual image path
    },
    {
        title: "Statewide Monitoring",
        paragraph: "Provides the government with detailed insights on academic performance at the state level.",
        imgSrc: "/state-wide.png", // Replace with your actual image path
    },
    {
        title: "User-friendly Interface",
        paragraph: "Simple and intuitive design for school administrators, teachers, and government officials.",
        imgSrc: "/friendly-interface.png",  // Replace with your actual image path
    },
];

const Features = () => {
    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8" id='Features'>
            <div className="max-w-7xl mx-auto">
                {/* Main heading */}
                <h2 className="text-4xl font-extrabold text-center text-black mb-12">
                    Unlock a New Era of Academic Excellence
                </h2>

                {/* Card section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {cardData.map((card, i) => (
                        <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden p-5 flex flex-col">
                            {/* Title and paragraph */}
                            <h3 className="text-xl font-bold text-black mb-2">{card.title}</h3>
                            <p className="text-gray-600 mb-4">{card.paragraph}</p>

                            {/* Image below the texts with full display */}
                            <div className="relative w-full h-64 mt-auto">
                                <Image
                                    src={card.imgSrc}
                                    alt={card.title}
                                    layout="fill"
                                    objectFit="contain" // Change to 'contain' to avoid cutting the image
                                    className="rounded-b-lg"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Features;
