import React from 'react';
import { useLocation } from 'react-router-dom';

const Product = () => {
    const location = useLocation();
    const { name, disc, img } = location.state || {};

    const features = [
        { name: 'Name', description: name || 'N/A' },
        { name: 'Description', description: disc || 'N/A' },
        { name: 'Status', description: 'Operational' },
        { name: 'Last Maintenance', description: '15 days ago' },
        { name: 'Next Scheduled Maintenance', description: 'In 5 days' },
        { name: 'Temperature', description: '500K' },
        { name: 'Demages', description: '0' },
        { name: 'Alerts', description: 'None' },
    ];

    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{name}</h2>
                    <p className="mt-4 text-gray-500">
                        {disc}
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="flex justify-center items-center m-4">
                    <img
                        alt={name}
                        src={img}
                        className="rounded-lg bg-gray-100"
                    />
                </div>
            </div>
        </div>
    );
};

export default Product;
