import React from 'react'

const ProjectCard = ({ imageSrc, header, description }) => {
  return (
    <div>
      <div className="container-fluid   ">
        <div className=" bg-transparent border-2 rounded-lg   ">
          <div className="grid grid-cols-2">
            <div className=" h-60 bg-white bg-opacity-10 rounded-lg p-5 relative">
            <img src={imageSrc} alt={header} className="w-full h-full" />
            </div>

            <div className='p-5'>
              <h1 className="mb-3" style={{ fontFamily: "'Russo One', sans-serif" }} >{header}</h1>
              <p>{description}</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default ProjectCard
