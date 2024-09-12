import React from "react";
import MemCard from "../components/MemCard";
import PageLayout from "../Layout/PageLayout";
import { styles } from "../styles";

const MemberData = [
  {
    batch: "Session 2024-25",
    members: [
      {
        name: "Indrajit Mandal",
        position: "Head",
        profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696689107/glug/indrajit_wifdtw.jpg",
        linkedIn: "https://www.linkedin.com/in/indrajit-mandal-ba6093228",
        github: "https://github.com/Minato-namikaze99",
        instagram: "https://instagram.com/_.indrajit",
      },
      {
        name: "Mitumoni Kalita",
        position: "Co-Head",
        profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696693251/glug/mitumoni_f9zmfd.jpg",
        linkedIn: "https://linkedin.com/in/mitumoni-kalita-55516920a",
        github: "https://github.com/Mitumoni26",
        instagram: "#",
      },
      {
        name: "Meghal Bothra",
        position: "Co-Head",
        profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696689105/glug/meghal_irahlo.jpg",
        linkedIn: "#",
        github: "#",
        instagram: "#",
      },
      {
        name: "Ishan Bharadwaj",
        position: "Co-Head",
        profilePhoto: "#",
        linkedIn: "#",
        github: "#",
        instagram: "#",
      },
      {
        name: "Anol Chakraborty",
        position:"Technical Lead",
        profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696689107/glug/anol_huqnib.png",
        linkedIn: "https://linkedin.com/in/anolchakraborty",
        github: "https://github.com/anolchakraborty",
        instagram: "https://www.instagram.com/chakraborty.anol",
      },
      {
        name: "Abhilash Kashyap",
        position:"Technical Lead",
        profilePhoto: "#",
        linkedIn: "#",
        github: "#",
        instagram: "#",
      },
      {
        name: "Ankit Chakraborty",
        position:"Event Coordinator",
        profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696689103/glug/ankit_bcqlh7.jpg",
        linkedIn: "#",
        github: "https://github.com/ankit2002105",
        instagram: "#",
      },
      {
        name: "Asish saikia",
        position:"Event Coordinator",
        profilePhoto: "#",
        linkedIn: "#",
        github: "#",
        instagram: "#",
      },
      {
        name: "Prabal Barman",
        position:"Event Coordinator",
        profilePhoto: "#",
        linkedIn: "#",
        github: "#",
        instagram: "#",
      },
      {
        name: "Sampriti Kalita",
        position:"Event Coordinator",
        profilePhoto: "#",
        linkedIn: "#",
        github: "#",
        instagram: "#",
      },
      {
        name: "Babita Medhi",
        position: "Website Manager",
        profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696782548/glug/babita_sk53b0.jpg",
        linkedIn: "https://www.linkedin.com/in/babita-medhi",
        github: "https://github.com/babitamedhi",
        instagram: "#",
      },
      {
        name: "Shaswata Gogoi",
        position:"Website Manager",
        profilePhoto: "#",
        linkedIn: "#",
        github: "#",
        instagram: "#",
      },
      {
        name: "Sourav Kumar Barman",
        position:"Website Manager",
        profilePhoto: "#",
        linkedIn: "#",
        github: "#",
        instagram: "#",
      },
      {
        name: "Reetam Borgohain",
        position:"Content Manager",
        profilePhoto: "#",
        linkedIn: "#",
        github: "#",
        instagram: "#",
      },
      {
        name: "Rajdeep Gogoi",
        position:"Content Manager",
        profilePhoto: "#",
        linkedIn: "#",
        github: "#",
        instagram: "#",
      },
      {
        name: "Dorothy Gogoi",
        position:"Social Media Manager",
        profilePhoto: "#",
        linkedIn: "#",
        github: "#",
        instagram: "#",
      },
      {
        name: "Rituraj Bora",
        position:"Social Media Manager",
        profilePhoto: "#",
        linkedIn: "#",
        github: "#",
        instagram: "#",
      },
      {
        name: "Chinmoy Bora",
        position:"Core Team Member",
        profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696689102/glug/chinmoy_bora_datizp.jpg",
        linkedIn: "https://www.linkedin.com/in/chinmoy-bora",
        github: "https://github.com/Chinmoy-Bora",
        instagram: "https://instagram.com/chinmoy_cb_",
      },
    
      {
        name: "Simashree Gogoi",
        position:"Core Team Member",
        profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696789108/glug/simashree_xjdwml.jpg",
        linkedIn: "#",
        github: "#",
        instagram: "https://www.instagram.com/___simmmm___/",
      },
      {
        name: "Ritisha Deka",
        position:"Core Team Member",
        profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696782547/glug/ritisha_has4ho.jpg",
        linkedIn: "https://www.linkedin.com/in/ritisha-deka-65a1a2225",
        github: "#",
        instagram: "https://instagram.com/__ritss__d?igshid=NzZlODBkYWE4Ng==",
      },
      {
        name: "Apekshya Bharadwaj",
        position:"Core Team Member",
        profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696847200/glug/apekshya_crhdjs.jpg",
        linkedIn: "#",
        github: "#",
        instagram: "https://instagram.com/a_pekshya_",
      },
    
     
      {
        name: "Subham Banik",
        position:"Core Team Member",
        profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696847200/glug/subham_banik_aj8bbg.jpg",
        linkedIn: "https://www.linkedin.com/in/subham-banik-0ba197220",
        github: "#",
        instagram: "#",
      },
      {
        name: "Rohan Kayastha Kaluwar",
        position:"Core Team Member",
        profilePhoto: "#",
        linkedIn: "#",
        github: "#",
        instagram: "#",
      },
      {
        name: "Samar Jyoti Kashyap",
        position:"Core Team Member",
        profilePhoto: "#",
        linkedIn: "#",
        github: "#",
        instagram: "#",
      },
      {
        name: "Ashrita Lahon",
        position:"Core Team Member",
        profilePhoto: "#",
        linkedIn: "#",
        github: "#",
        instagram: "#",
      },
      {
        name: "Manash Khatowai",
        position:"Core Team Member",
        profilePhoto: "#",
        linkedIn: "#",
        github: "#",
        instagram: "#",
      },
      {
        name: "Syed Tasdeeque Ruhani",
        position:"Core Team Member",
        profilePhoto: "#",
        linkedIn: "#",
        github: "#",
        instagram: "#",
      },
      {
        name: "Anurag Rajbongshi",
        position:"Core Team Member",
        profilePhoto: "#",
        linkedIn: "#",
        github: "#",
        instagram: "#",
      },
    
     
      // {
      //   name: "Chinmoy Sharma",
      //   profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696690840/glug/chinmoy_sharma_aa8hkj.jpg",
      //   linkedIn: "#",
      //   github: "#",
      //   instagram: "https://instagram.com/chinmoy1819?igshid=OGQ5ZDc2ODk2ZA==",
      // },
      // {
      //   name: "Rohit Mazumdar",
      //   profilePhoto: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696782545/glug/rohit_mazumdar_lcofuw.jpg",
      //   linkedIn: "#",
      //   github: "#",
      // },
    ],
  },
];
      // Add more members similarly
    
  
  // Add more batches similarly


const Member = () => {
  return (
    <PageLayout>
      <section
        className={`relative w-full mx-auto overflow-hidden text-white flex flex-wrap justify-center items-center ${styles.paddingX} mt-5`}
        style={{ fontFamily: "'Russo One', sans-serif" }}
      >
        <div className="mt-10">
          <div className="font-russo text-2xl text-center justify-center text-white">
            Meet our Team    
          </div>
          
          <div className="container">
            {MemberData.map((batch, batchIndex) => (
              <div key={batchIndex} className="mt-5">
                <div className="batch text-lg text-white">{batch.batch}</div>
                <div className="Cards grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                  {batch.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="flex justify-center items-center">
                      <MemCard
                        name={member.name}
                        position={member.position}
                        profilePhoto={member.profilePhoto}
                        linkedIn={member.linkedIn}
                        github={member.github}
                        instagram={member.instagram}
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

export default Member;
