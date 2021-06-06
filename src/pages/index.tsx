import { graphql } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React, { useRef, useState } from 'react';
import { FiGithub, FiLink } from 'react-icons/fi';
import { levelsOfInfo, socialLinks } from '../constants';
import { ProjectNode } from '../models/ProjectNode';
import config from '../../package.json';

// todo: soc

const IndexPage = ({ data }) => {
  const [levelIndex, setLevelIndex] = useState(0);

  const landingRef = useRef<HTMLDivElement>();
  const projectsRef = useRef<HTMLDivElement>();

  const scrollTo = (ref: React.MutableRefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView();
  };

  return (
    <div className="min-h-screen bg-blue">
      {/* bottom-left floating links */}
      <div className="fixed bottom-0 left-0 hidden p-10 md:block">
        <div className="space-y-2 text-white">
          {socialLinks.map((social) => (
            <div key={social.id} className="p-2 rounded-full hover:bg-white hover:bg-opacity-20">
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <social.icon size={24} />
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* bottom-right floating status */}
      <div className="fixed bottom-0 right-0 hidden p-10 md:block">
        <div className="text-xs text-gray-400">version: {config.version}</div>
      </div>
      {/* landing section */}
      <div ref={landingRef} className="relative w-3/4 h-screen mx-auto">
        {/* logo */}
        <div className="flex justify-center w-full md:py-14 py-7">
          <button className="focus:outline-none">
            <StaticImage src="../images/logo.png" alt="logo" width={60} height={60} />
          </button>
        </div>
        {/* intro */}
        <div className="md:absolute md:top-[35%] md:transform md:-translate-y-1/2 w-full">
          <div className="space-y-4 md:space-y-8">
            <div className="text-white md:text-2xl">Hello there! 👋</div>
            <div className="text-xl text-white md:text-4xl">
              I’m <b>Ronna</b>. I build things for web and mobile.
            </div>
            <div>
              <div className="flex mb-1 space-x-1 text-xs text-gray-400 md:mb-2 md:text-sm">
                <div>Select level of info:</div>
                {levelsOfInfo.map((item, index) => (
                  <button
                    key={item.level}
                    onClick={() => setLevelIndex(index)}
                    className={`focus:outline-none px-1 md:px-2 border border-gray-400 rounded ${
                      index === levelIndex && 'bg-gray-400 text-blue'
                    }`}>
                    {item.level}
                  </button>
                ))}
              </div>
              <div className="text-white text-base md:w-[50%] leading-8">
                {levelsOfInfo[levelIndex].text}
              </div>
            </div>
            <div className="flex -ml-2 space-x-1 text-white md:hidden">
              {socialLinks.map((social) => (
                <div
                  key={social.id}
                  className="p-2 rounded-full hover:bg-white hover:bg-opacity-20">
                  <a href={social.link} target="_blank" rel="noopener noreferrer">
                    <social.icon size={18} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* drawing */}
        <div className="absolute w-2/3 right-0 md:w-[35%] md:right-[25%] transform md:translate-x-1/2 -translate-y-1/2 top-[75%] md:top-[60%] text-center">
          <StaticImage src="../images/landing_graphics.png" alt="landing_graphics" />
          <div className="hidden text-xs text-gray-500 md:block">lol i tried 😂</div>
        </div>
        {/* arrow */}
        <button
          className="absolute text-center transform -translate-x-1/2 md:bottom-11 bottom-4 left-1/2 focus:outline-none group"
          onClick={() => scrollTo(projectsRef)}>
          <div className="px-1 mb-4 text-white group-hover:bg-yellow-200 group-hover:text-blue">
            see my stuff
          </div>
          <StaticImage src="../images/arrow_down.png" alt="arrow_down" height={45} />
        </button>
      </div>
      {/* projects section */}
      <div ref={projectsRef} className="w-3/4 min-h-screen py-16 mx-auto">
        <div className="grid md:grid-cols-5">
          <div className="relative md:col-span-2">
            <div className="space-y-6 text-2xl text-center md:translate-x-1/2 md:transform md:right-0 md:absolute">
              <div className="font-bold text-white">things i've built</div>
              <StaticImage
                src="../images/projects_logo.png"
                alt="projects_logo"
                width={60}
                height={60}
              />
            </div>
          </div>
        </div>
        {/* list of projects */}
        <div className="mt-10 text-white space-y-14 md:space-y-0 md:mt-20">
          {data.allMarkdownRemark.nodes.map((node: ProjectNode, i) => {
            const project = node.frontmatter;
            const cover = getImage(node.frontmatter.cover);
            const isFirst = i === 0;
            return (
              <div
                key={`${project.title}_${i}`}
                className="grid space-y-4 md:space-y-0 md:grid-cols-5">
                <div
                  className={`flex md:justify-end md:col-span-2 md:py-12 md:pr-10 md:border-r border-gray-500 ${
                    isFirst && 'md:pt-32'
                  }`}>
                  <div className="w-full md:w-[70%]">
                    <GatsbyImage
                      className="rounded-md filter brightness-75 hover:filter-none"
                      image={cover}
                      alt={project.title}
                      style={{ aspectRatio: '16 / 9' }}
                      objectPosition="center top"
                    />
                  </div>
                </div>
                <div className={`space-y-2 md:col-span-3 md:py-12 ${isFirst && 'md:pt-32'}`}>
                  <div className="relative pl-8 text-lg font-bold md:text-2xl md:my-4">
                    <div>{project.title}</div>
                    {/* line that connects to the y-axis */}
                    <div className="absolute w-6 h-[1px] bg-gray-500 top-1/2 transform -translate-y-1/2 left-0" />
                  </div>
                  <div className="space-y-3 md:pl-8">
                    <div className="md:text-xl">{project.about}</div>
                    <div className="text-xs md:text-base md:w-[75%] text-gray-400">
                      {node.excerpt}
                    </div>
                    <div className="flex flex-wrap">
                      {project.tags.map((tag) => (
                        <div key={tag} className="mr-2 text-xs text-gray-400 whitespace-nowrap">
                          #{tag}
                        </div>
                      ))}
                    </div>
                    <div className="flex pt-2 space-x-4 md:pt-0">
                      {project.source && (
                        <a href={project.source} target="_blank" rel="noopener noreferrer">
                          <FiGithub size={20} />
                        </a>
                      )}
                      {project.site && (
                        <a href={project.site} target="_blank" rel="noopener noreferrer">
                          <FiLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-3/4 pb-8 mx-auto md:hidden">
        <div className="text-xs text-gray-400">version: {config.version}</div>
      </div>
    </div>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          about
          site
          source
          tags
          title
          cover {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        excerpt(pruneLength: 999)
      }
    }
  }
`;

export default IndexPage;
