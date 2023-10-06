import React from 'react';
import Projects from './Projects';
import { styles } from "../styles";

const cardData = [
  {
    imageSrc: 'https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png',
    header: 'Header 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    imageSrc: 'https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png',
    header: 'Header 2',
    description: 'Description 2 for card 2.',
  },
];

const ProjectsPage = () => {
  return (
    <section className={`relative w-full mx-auto overflow-hidden text-white flex flex-wrap justify-center items-center ${styles.paddingX} mt-5 mb-10`}
    style={{ fontFamily: "'Russo One', sans-serif" }}>
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Projects</h1>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {cardData.map((card, index) => (
          <div key={index} className="w-full p-4">
            <Project
              imageSrc={card.imageSrc}
              header={card.header}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
