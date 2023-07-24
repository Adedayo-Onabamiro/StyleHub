import React, { useState } from 'react';

export const Slider = () => {
  const [activeOption, setActiveOption] = useState(1);

  const options = [
    {
      title: 'Collection for Couples',
      description: 'Our collection for couples features coordinated designs and patterns, allowing couples to showcase their unity through fashion.',
    },
    {
      title: 'Sheer Bomber Jacket',
      description: ' fashion-forward statement piece that effortlessly blends style and versatility. Perfect for both casual and dressy occasions, the "Sheer Bomber Jacket" effortlessly elevates any outfit, turning heads wherever you go. Its lightweight and breathable design make it ideal for transitional seasons,',
    },
    {
      title: 'Leather Watch Collection',
      description: ' a timeless assortment of elegant timepieces crafted with precision and sophistication. Each watch in this collection is a symbol of classic luxury, combining the finest materials with impeccable craftsmanship. Embrace the allure of genuine leather straps, offering both comfort and style, while the refined dials radiate elegance.',
    },
    {
      title: 'New Tote Bags Collection',
      description: 'Each tote bag in this collection is meticulously designed to be your perfect companion, offering ample space and versatility to effortlessly carry your essentials. Crafted with premium materials and attention to detail, these bags exude modern elegance, making a bold statement wherever you go.',
    },
  ];

  return (
    <div className="flex items-start h-full w-full">
      <div className="w-11/12 h-full p-4 rounded-xl bg-transparent mr-4 flex flex-col justify-between">
        {options.map((option, index) => (
          <div
            key={index}
            className={`mb-4 cursor-pointer ${
              activeOption === index + 1 ? 'text-black' : 'text-zinc-400'
            }`}
            onClick={() => setActiveOption(index + 1)}
          >
            <h1 className="text-3xl font-bold font-custom">{option.title}</h1>
            {activeOption === index + 1 && (
              <p className="mt-2">{option.description}</p>
            )}
          </div>
        ))}
      </div>


      <div className='h-full w-8 flex flex-col items-center justify-center'>
        <div className="h-600 w-full bg-transparent flex items-center justify-center">
          <input
            type="range"
            min="1"
            max={options.length}
            value={activeOption}
            onChange={(e) => setActiveOption(parseInt(e.target.value))}
            className="h-11/12 w-64 rotate-90"
            id="myRange"
          />
        </div>
      </div>
    </div>
  );
};

