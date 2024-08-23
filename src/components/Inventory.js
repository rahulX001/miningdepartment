import React from 'react';
import { useNavigate } from 'react-router-dom';
import Drills from "../images/Drills.jpeg";
import Excavators from "../images/Excavators.jpeg";
import JawCrusher from "../images/JawCrusher.jpeg";

const callouts = [
    {
        name: 'Drills',
        description: 'Precision drilling for excavation.',
        imageSrc: Drills,
        imageAlt: 'Precision drilling for excavation.',
        href: '/product',
        data: { name: "Drill Management Dashboard", disc: "Real-time Insights for Optimal Drill Performance", img: Drills },
    },
    {
        name: 'Excavators',
        description: 'Crushing large rock efficiently.',
        imageSrc: Excavators,
        imageAlt: 'Crushing large rock efficiently.',
        href: '/product',
        data: { name: "Excavator Management Dashboard", disc: "Powerful and Efficient Excavation", img: Excavators },
    },
    {
        name: 'Jaw Crusher',
        description: 'Heavy-duty earth-moving machinery.',
        imageSrc: JawCrusher,
        imageAlt: 'Heavy-duty earth-moving machinery',
        href: '/product',
        data: { name: "Crusher Management Dashboard", disc: "Efficient Rock Crushing Solutions", img: JawCrusher },
    },
];

function Inventory() {
    const navigate = useNavigate();

    const handleNavigate = (callout) => {
        navigate(callout.href, { state: callout.data });
    };

    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">Mining Equipment</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div 
                                key={callout.name} 
                                className="group relative cursor-pointer"
                                onClick={() => handleNavigate(callout)}
                            >
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        alt={callout.imageAlt}
                                        src={callout.imageSrc}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    {callout.name}
                                </h3>
                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inventory;
