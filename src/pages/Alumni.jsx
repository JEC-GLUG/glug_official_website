import React, { useEffect, useRef } from "react";
import AluCard from "../components/AluCard";
import PageLayout from "../Layout/PageLayout";
import { styles } from "../styles";

const alumniData = [
  {
    batch: "Batch 2020",
    alumni: [
      {
        name: "VD",
        profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
      },
      {
        name: "Jane Smith",
        profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
      },
      {
        name: "Jane Smith",
        profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
      },
      {
        name: "Jane Smith",
        profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
      },
      {
        name: "Jane Smith",
        profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
      },
      {
        name: "Jane Smith",
        profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
      },
    ],
  },
  
  {
    batch: "Batch 2020",
    alumni: [
      {
        name: "VD",
        profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
      },
      {
        name: "Jane Smith",
        profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
      },
      {
        name: "Jane Smith",
        profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
      },
      {
        name: "Jane Smith",
        profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
      },
      {
        name: "Jane Smith",
        profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
      },
      {
        name: "Jane Smith",
        profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
      },
    ],
  },
  {
    batch: "Batch 2020",
    alumni: [
      {
        name: "VD",
        profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
      },
      {
        name: "Jane Smith",
        profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
      },
      {
        name: "Jane Smith",
        profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
      },
      {
        name: "Jane Smith",
        profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
      },
      {
        name: "Jane Smith",
        profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
      },
      {
        name: "Jane Smith",
        profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJtpML8w0qtnkPcwYgsalfEZ_nEgS-Lcv9w&usqp=CAU",
      },
    ],
  },
  
];

const Alumni = () => {
  return (
   
    <PageLayout>
    <section
      className={`relative w-full mx-auto overflow-hidden text-white flex flex-wrap justify-center items-center ${styles.paddingX} mt-5`}
      style={{ fontFamily: "'Russo One', sans-serif" }}
    >
      <div className="mt-10 ">
        <div className="font-russo text-2xl text-center justify-center text-white">
          Meet our Alumni
        </div>
        <div className="container ">
          {alumniData.map((batch, batchIndex) => (
            <div key={batchIndex} className="mt-5">
              <div className="batch text-lg text-white">{batch.batch}</div>
              <div className="Cards grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                {batch.alumni.map((alumni, alumniIndex) => (
                  <div key={alumniIndex} className="flex justify-center items-center">
                    <AluCard name={alumni.name} profilePhoto={alumni.profilePhoto} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);
};

export default Alumni;
