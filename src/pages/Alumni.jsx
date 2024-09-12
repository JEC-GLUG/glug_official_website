import React from "react";
import AluCard from "../components/AluCard";
import PageLayout from "../Layout/PageLayout";
import { styles } from "../styles";

const alumniData = [
  {
    batch: "Batch 2020-2024",
    alumni: [
      {
        name: "Sourabh Koch Gohain",
        position: "Head",
        profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696850029/glug/sourabh_gaqfsi.jpg",
        linkedIn: "https://in.linkedin.com/in/saurabh-koch-gohain-1b7511198",
        github: "#",
        instagram: "#",
      },
      {
        name: "Tilok Doley",
        position: "Co-Head",
        profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696689106/glug/tilok_hqcvgj.jpg",
        linkedIn: "#",
        github: "#",
        instagram: "#",
      },
      {
        name: "Zubayer Ahmed Zidhan Laskar",
        position: "Co-Head",
        profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696692085/glug/zubayer_iwghte.jpg",
        linkedIn: "https://in.linkedin.com/in/zubayer-ahmed-zidhan-laskar-068109194",
        github: "https://github.com/zubayer-zidhan",
        instagram: "https://instagram.com/zubayer_zidhan?igshid=OGQ5ZDc2ODk2ZA==",
      },
      {
        name: "Vaskarjya Das",
        position: "Co-Head",
        profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696846042/glug/vd_ll9g4v.jpg",
        linkedIn: "#",
        github: "#",
        instagram: "#",
      },
      {
        name: "Abhisek Prasad Gupta",
        profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696689048/glug/abhishek_qus1bn.jpg",
        linkedIn: "https://linkedin.com/in/abhishek-prasad-gupta",
        github: "https://github.com/abhipdgupta",
        instagram: "#",
      },
      {
        name: "Forheen Ahmed",
        profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696690540/glug/forheen_hzhv7y.jpg",
        linkedIn: "https://www.linkedin.com/in/forheen-ahmed-a994b9201/",
        github: "https://github.com/forheen/",
        instagram: "#",
      },
      {
        name: "Aditya Ojha",
        profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696782546/glug/aditya_z2vtvg.jpg",
        linkedIn: "https://www.linkedin.com/in/aditya-ojha",
        github: "https://github.com/aditya1ojha",
        instagram: "https://www.instagram.com/adityawns",
      },
      {
        name: "Tapash Nag",
        profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696782546/glug/tapash_tck7yi.jpg",
        linkedIn: "https://www.linkedin.com/in/tapash-nag-8b8805218",
        github: "https://github.com/coderhally",
        instagram: "https://instagram.com/tapashnag975?igshid=NGVhN2U2NjQ0Yg==",
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
        <div className="mt-10">
          <div className="font-russo text-2xl text-center justify-center text-white">
            Meet our Alumni
          </div>
          <div className="container">
            {alumniData.map((batch, batchIndex) => (
              <div key={batchIndex} className="mt-5">
                <div className="batch text-lg text-white">{batch.batch}</div>
                <div className="Cards grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                  {batch.alumni.map((alumni, alumniIndex) => (
                    <div key={alumniIndex} className="flex justify-center items-center">
                      <AluCard
                        name={alumni.name}
                        position={alumni.position}  // Pass position prop
                        profilePhoto={alumni.profilePhoto}
                        linkedIn={alumni.linkedIn !== "#" ? alumni.linkedIn : null}
                        github={alumni.github !== "#" ? alumni.github : null}
                        instagram={alumni.instagram !== "#" ? alumni.instagram : null}
                      />

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
