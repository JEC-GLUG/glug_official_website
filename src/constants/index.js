
// ******  Navigation Links  ****** 
const navLinks = [
    {
        id: "/resources",
        title: "Resources",
    },
    {
        id: "/projects",
        title: "Projects",
    },
    {
        id: "/alumni",
        title: "Alumni",
    },
];


// ******  List of Recent Events (for Landing Page)  ****** 
const recentEvents = [
    {
        title: "",
        date:"",
        details: "",
    },
    {
        title: "",
        date:"",
        details: "",
    },
];


// ******  List of All Events (for Events Page)  ****** 
const events = [
    {
        title: "",
        date:"",
        details: "",
    },
    {
        title: "",
        date:"",
        details: "",
    },
];


// ******  List of Top Projects (for Landing Page)  ****** 
const topProjects = [
    {
        name: "",
        image: "",
        details: "",
    },
    {
        name: "",
        image: "",
        details: "",
    },
];


// ******  List of All Projects (for Projects page)  ****** 
const projects = [
    {
        name: "",
        image: "",
        details: "",
    },
    {
        name: "",
        image: "",
        details: "",
    },
];


// ******  List of Current Members  ****** 
const currentMembers = [
    {
        name: "Sourabh Koch Gohain",
        position: "Head",
        imageURL: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696789108/glug/sourav_ckfpy7.jpg",
        linkedIn: "https://in.linkedin.com/in/saurabh-koch-gohain-1b7511198",
        github: "#",
        instagram: "#",
    },
    {
        name: "Tilok Doley",
        position: "Co-Head",
        imageURL: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696689106/glug/tilok_hqcvgj.jpg",
        linkedIn: "#",
        github: "#",
        instagram: "#",
    },
    {
        name: "Zubayer Ahmed Zidhan Laskar",
        position: "Co-Head",
        imageURL: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696692085/glug/zubayer_iwghte.jpg",
        linkedIn: "https://in.linkedin.com/in/zubayer-ahmed-zidhan-laskar-068109194",
        github: "https://github.com/zubayer-zidhan",
        instagram: "https://instagram.com/zubayer_zidhan?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
        name: "Vaskarjya Das",
        position: "Co-Head",
        imageURL: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696789108/glug/vaskarjya_jt2az6.jpg",
        linkedIn: "#",
        github: "#",
        instagram: "#",
    },
    {
        name: "Abhisek Prasad Gupta",
        position: "Core Member",
        imageURL: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696689048/glug/abhishek_qus1bn.jpg",
        linkedIn: "https://linkedin.com/in/abhishek-prasad-gupta",
        github: "https://github.com/abhipdgupta",
        instagram: "#",
    },
    {
        name: "Forheen Ahmed",
        position: "Core Member",
        imageURL: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696690540/glug/forheen_hzhv7y.jpg",
        linkedIn: "https://www.linkedin.com/in/forheen-ahmed-a994b9201/",
        github: "https://github.com/forheen/",
        instagram: "#",
    },
    {
        name: "Aditya Ojha",
        position: "Core Member",
        imageURL: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696782546/glug/aditya_z2vtvg.jpg",
        linkedIn: "https://www.linkedin.com/in/aditya-ojha",
        github: "https://github.com/aditya1ojha",
        instagram: "https://www.instagram.com/adityawns",
    },
    {
        name: "Tapash Nag",
        position: "Core Member",
        imageURL: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696782546/glug/tapash_tck7yi.jpg",
        linkedIn: "https://www.linkedin.com/in/tapash-nag-8b8805218",
        github: "https://github.com/coderhally",
        instagram: "https://instagram.com/tapashnag975?igshid=NGVhN2U2NjQ0Yg==",
    },
    {
        name: "Chinmoy Bora",
        position: "Core Member",
        imageURL: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696689102/glug/chinmoy_bora_datizp.jpg",
        linkedIn: "https://www.linkedin.com/in/chinmoy-bora",
        github: "https://github.com/Chinmoy-Bora",
        instagram: "https://instagram.com/chinmoy_cb_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
    },
    {
        name: "Indrajit Mandal",
        position: "Core Member",
        imageURL: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696689107/glug/indrajit_wifdtw.jpg",
        linkedIn: "https://www.linkedin.com/in/indrajit-mandal-ba6093228",
        github: "https://github.com/Minato-namikaze99",
        instagram: "https://instagram.com/_.indrajit?igshid=NGVhN2U2NjQ0Yg==",
    },
    {
        name: "Mitumoni Kalita",
        position: "Core Member",
        imageURL: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696693251/glug/mitumoni_f9zmfd.jpg",
        linkedIn: "https://linkedin.com/in/mitumoni-kalita-55516920a",
        github: "https://github.com/Mitumoni26",
        instagram: "#",
    },
    {
        name: "Simashree Gogoi",
        position: "Core Member",
        imageURL: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696789108/glug/simashree_xjdwml.jpg",
        linkedIn: "#",
        github: "#",
        instagram: "https://www.instagram.com/___simmmm___/",
    },
    {
        name: "Ritisha Deka",
        position: "Core Member",
        imageURL: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696782547/glug/ritisha_has4ho.jpg",
        linkedIn: "https://www.linkedin.com/in/ritisha-deka-65a1a2225",
        github: "#",
        instagram: "https://instagram.com/__ritss__d?igshid=NzZlODBkYWE4Ng==",
    },
    
    {
        name: "Meghal Bothra",
        position: "Core Member",
        imageURL: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696689105/glug/meghal_irahlo.jpg",
        linkedIn: "#",
        github: "#",
        instagram: "#",
    },
    {
        name: "Babita Medhi",
        position: "Core Member",
        imageURL: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696782548/glug/babita_sk53b0.jpg",
        linkedIn: "https://www.linkedin.com/in/babita-medhi",
        github: "https://github.com/babitamedhi",
        instagram: "#",
    },
    {
        name: "Ankit Chakraborty",
        position: "Core Member",
        imageURL: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696689103/glug/ankit_bcqlh7.jpg",
        linkedIn: "#",
        github: "https://github.com/ankit2002105",
        instagram: "#",
    },
    {
        name: "Anol Chakraborty",
        position: "Core Member",
        imageURL: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696689107/glug/anol_huqnib.png",
        linkedIn: "https://linkedin.com/in/anolchakraborty",
        github: "https://github.com/anolchakraborty",
        instagram: "https://www.instagram.com/chakraborty.anol",
    },
    
    {
        name: "Chinmoy Sharma",
        position: "Core Member",
        imageURL: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696690840/glug/chinmoy_sharma_aa8hkj.jpg",
        linkedIn: "#",
        github: "#",
        instagram: "https://instagram.com/chinmoy1819?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
        name: "Rohit Mazumdar",
        position: "Core Member",
        imageURL: "https://res.cloudinary.com/drjsf5wip/image/upload/v1696782545/glug/rohit_mazumdar_lcofuw.jpg",
        linkedIn: "#",
        github: "#",
        instagram: "#",
    },
];


// ******  List of Past Members ****** 
const pastMembers = [
    {
        name: "",
        position: "",
        imageURL: "",
        linkedIn: "",
        github: "",
        instagram: "",
    },
];

export { navLinks, recentEvents, events, topProjects, projects, currentMembers, pastMembers };

