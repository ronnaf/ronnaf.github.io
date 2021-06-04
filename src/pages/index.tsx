import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <div className='w-full h-screen bg-blue'>
      <div className='h-full w-3/4 mx-auto relative'>
        <div className='w-full flex justify-center py-14'>
          <button className='focus:outline-none'>
            <StaticImage
              src='../images/logo.png'
              alt='logo'
              width={60}
              height={60}
            />
          </button>
        </div>
        <div className='absolute top-[35%] transform -translate-y-1/2 w-full'>
          <div className='space-y-6'>
            <div className='text-white text-2xl'>Hello there! 👋</div>
            <div className='text-white text-4xl'>
              I’m <b>Ronna</b>. I build things for web and mobile.
            </div>
            <div className='text-white text-base w-[50%] leading-8'>
              I’m a software engineer based in Iloilo City, Philippines. I’m a
              smol bean that’s always in front of a computer. I have a dog named
              Maui and I love her so much. I used to drink coffee a lot when I
              was in college— like a lot.
            </div>
          </div>
        </div>
        <div className='absolute w-[35%] right-[25%] transform translate-x-1/2 -translate-y-1/2 top-[60%]'>
          <StaticImage
            src='../images/landing_graphics.png'
            alt='landing_graphics'
          />
        </div>
        <button className='absolute bottom-11 left-1/2 transform -translate-x-1/2 text-center focus:outline-none group'>
          <div className='text-white mb-4 group-hover:bg-yellow-200 group-hover:text-blue px-1'>
            see my stuff
          </div>
          <StaticImage
            src='../images/arrow_down.png'
            alt='arrow_down'
            height={45}
          />
        </button>
      </div>
    </div>
  );
};

export default IndexPage;
