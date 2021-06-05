import React, { useState, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FiGithub, FiLink } from 'react-icons/fi';

const levelsOfInfo = [
  {
    level: '1',
    text: 'I’m a software engineer based in Iloilo City, Philippines. I’m a smol bean that’s always in front of a computer.',
  },
  {
    level: '2',
    text: 'I’m a software engineer based in Iloilo City, Philippines. I’m a smol bean that’s always in front of a computer. I have a dog named Maui and I love her so much.',
  },
  {
    level: 'tmi',
    text: 'I’m a software engineer based in Iloilo City, Philippines. I’m a smol bean that’s always in front of a computer. I have a dog named Maui and I love her so much. I used to drink coffee a lot when I was in college— like a lot. Now all I drink is hot cocoa because I bought a 1-year supply from S&R.',
  },
];

const projects = [
  {
    image: 'https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large',
    title: 'jiralist',
    about: 'helps me manage my jira tickets for the daily standup at work',
    tags: ['react', 'typescript', 'jira-rest-api'],
    sourceCodeLink: 'example.com',
    siteLink: 'example.com',
  },
  {
    image: 'https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large',
    title: 'jiralist',
    about: 'helps me manage my jira tickets for the daily standup at work',
    tags: ['react', 'typescript', 'jira-rest-api'],
    sourceCodeLink: 'example.com',
    siteLink: 'example.com',
  },
  {
    image: 'https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large',
    title: 'jiralist',
    about: 'helps me manage my jira tickets for the daily standup at work',
    tags: ['react', 'typescript', 'jira-rest-api'],
    sourceCodeLink: 'example.com',
    siteLink: 'example.com',
  },
  {
    image: 'https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large',
    title: 'jiralist',
    about: 'helps me manage my jira tickets for the daily standup at work',
    tags: ['react', 'typescript', 'jira-rest-api'],
    sourceCodeLink: 'example.com',
    siteLink: 'example.com',
  },
  {
    image: 'https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large',
    title: 'jiralist',
    about: 'helps me manage my jira tickets for the daily standup at work',
    tags: ['react', 'typescript', 'jira-rest-api'],
    sourceCodeLink: 'example.com',
    siteLink: 'example.com',
  },
];

const IndexPage = () => {
  const [levelIndex, setLevelIndex] = useState(0);

  const landingRef = useRef<HTMLDivElement>();
  const projectsRef = useRef<HTMLDivElement>();

  const scrollTo = (ref: React.MutableRefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView();
  };

  return (
    <div className='bg-blue'>
      {/* landing section */}
      <div ref={landingRef} className='relative w-3/4 h-screen mx-auto'>
        {/* logo */}
        <div className='flex justify-center w-full py-14'>
          <button className='focus:outline-none'>
            <StaticImage
              src='../images/logo.png'
              alt='logo'
              width={60}
              height={60}
            />
          </button>
        </div>
        {/* intro */}
        <div className='absolute top-[35%] transform -translate-y-1/2 w-full'>
          <div className='space-y-8'>
            <div className='text-2xl text-white'>Hello there! 👋</div>
            <div className='text-4xl text-white'>
              I’m <b>Ronna</b>. I build things for web and mobile.
            </div>
            <div>
              <div className='flex mb-2 space-x-1 text-sm text-gray-400'>
                <div>Select level of info:</div>
                {levelsOfInfo.map((item, index) => (
                  <button
                    key={item.level}
                    onClick={() => setLevelIndex(index)}
                    className={`focus:outline-none px-2 border border-gray-400 rounded ${
                      index === levelIndex && 'bg-gray-400 text-blue'
                    }`}>
                    {item.level}
                  </button>
                ))}
              </div>
              <div className='text-white text-base w-[50%] leading-8'>
                {levelsOfInfo[levelIndex].text}
              </div>
            </div>
          </div>
        </div>
        {/* drawing */}
        <div className='absolute w-[35%] right-[25%] transform translate-x-1/2 -translate-y-1/2 top-[60%] text-center'>
          <StaticImage
            src='../images/landing_graphics.png'
            alt='landing_graphics'
          />
          <div className='text-xs text-gray-500'>lol i tried 😂</div>
        </div>
        {/* drawing overlay */}
        {/* arrow */}
        <button
          className='absolute text-center transform -translate-x-1/2 bottom-11 left-1/2 focus:outline-none group'
          onClick={() => scrollTo(projectsRef)}>
          <div className='px-1 mb-4 text-white group-hover:bg-yellow-200 group-hover:text-blue'>
            see my stuff
          </div>
          <StaticImage
            src='../images/arrow_down.png'
            alt='arrow_down'
            height={45}
          />
        </button>
      </div>
      {/* projects section */}
      <div ref={projectsRef} className='w-3/4 min-h-screen py-16 mx-auto'>
        <div className='grid grid-cols-5'>
          <div className='relative col-span-2'>
            <div className='absolute right-0 space-y-6 text-2xl text-center transform translate-x-1/2'>
              <div className='font-bold text-white'>things i've built</div>
              <StaticImage
                src='../images/projects_logo.png'
                alt='projects_logo'
                width={60}
                height={60}
              />
            </div>
          </div>
        </div>
        <div className='mt-20 text-white'>
          {projects.map((project, i) => {
            const isFirst = i === 0;
            return (
              <div className='grid grid-cols-5'>
                <div
                  className={`flex justify-end col-span-2 py-8 pr-10 border-r border-gray-500 ${
                    isFirst && 'pt-32'
                  }`}>
                  <StaticImage
                    className='rounded-md w-[70%]'
                    src='https://picsum.photos/480'
                    alt=''
                    aspectRatio={16 / 9}
                  />
                </div>
                <div className={`col-span-3 py-12 ${isFirst && 'pt-32'}`}>
                  <div className='relative pl-8 my-4 text-2xl font-bold'>
                    <div>{project.title}</div>
                    {/* line that connects to the y-axis */}
                    <div className='absolute w-6 h-[1px] bg-gray-500 top-1/2 transform -translate-y-1/2 left-0' />
                  </div>
                  <div className='pl-8 space-y-3'>
                    <div className='text-xl '>{project.about}</div>
                    <div className='flex space-x-2'>
                      {project.tags.map((tag) => (
                        <div
                          key={tag}
                          className='text-xs text-gray-400 whitespace-nowrap'>
                          #{tag}
                        </div>
                      ))}
                    </div>
                    <div className='flex space-x-4'>
                      <a href={project.sourceCodeLink}>
                        <FiGithub size={20} />
                      </a>
                      <a href={project.siteLink}>
                        <FiLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
