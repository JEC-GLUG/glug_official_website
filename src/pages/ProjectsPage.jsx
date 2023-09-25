import React from 'react';
import ProjectCard from '../components/ProjectCard';

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
  {
    imageSrc: 'https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png',
    header: 'Header 3',
    description: 'Description 3 for card 3.',
  },
  {
    imageSrc: 'https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png',
    header: 'Header 4',
    description: 'Description 4 for card 4.',
  },
];

const ProjectsPage = () => {
  return (
    <section className="w-full mx-auto overflow-hidden text-white flex justify-center items-center p-5 md:pt-10 lg:p-20">
      <div className="flex flex-wrap justify-center items-center xl:mr-40 xl:ml-40" >
        {cardData.map((card, index) => (
          <div key={index} className="w-full sm:w-fit md:w-fit lg:w-fit xl:w-1/2 p-16">
            <ProjectCard
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
