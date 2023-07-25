import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const CustomSlider = () => {
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

  const valuetext = (value) => {
    return `${value}`;
  };

  const handleSliderChange = (event, value) => {
    setActiveOption(options.length - value + 1);
  };

  // Define the custom theme for the Slider
  const theme = createTheme({
    components: {
      MuiSlider: {
        styleOverrides: {
          rail: {
            backgroundColor: '#ccc', // Grey color for the unfilled track
          },
          track: {
            backgroundColor: 'black', // Black color for the filled track
          },
          thumb: {
            width: 16, // Custom thumb width
            height: 16, // Custom thumb height
            backgroundColor: 'black', // Black color for the thumb
          },
        },
      },
    },
  });

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

      <div className="h-full w-8 flex flex-col items-center justify-center">
        <div className="h-full bg-transparent flex items-center justify-center">
          <ThemeProvider theme={theme}>
            <Slider
              aria-label="range"
              orientation="vertical"
              getAriaValueText={valuetext}
              valueLabelDisplay="off"
              defaultValue={options.length} // Start the Slider at the last option
              value={options.length - activeOption + 1} // Inverted Slider value
              onChange={handleSliderChange} // Use the custom handler to invert the value
              min={1}
              max={options.length}
            />
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};
