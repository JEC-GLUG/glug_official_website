const eventData = [
    {
      title: "Hacktoberfest",
      imageURL: "data:image/jpeg;base64,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",
      description:
        "Hacktoberfest is an annual month-long event celebrating open-source software and digital collaboration. During October, developers worldwide contribute to open-source projects on platforms like GitHub, fostering community growth and innovation.",
        date:"January 1, 2023   ",
    },
    {
      title: "Github workshop",
      imageURL: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      description:
        "Recently we had organized a hands-on GitHub workshop, imparting valuable skills to juniors. This initiative not only equips aspiring developers with crucial collaborative coding abilities but also fosters a culture of knowledge sharing and teamwork within the college community. By bridging the gap between theory and practical application, GLUG's GitHub session paves the way for a more skilled and cohesive tech ecosystem in our college.",
        date:"January 1, 2023",
    },
    {
        title: "Codenovus",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfKo1jd40LWCLFemkh0TnvbM1XoiwjRnetj0lpGqhN&s",
        description:
          "The most sought after coding competition of Phoenix 2023, Codenovus is here. Get your coding skills ready for things are going to get heavy.",
          date:"April 2, 2023",
      }, {
        title: "Treasure Hunt",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKxRSmQEFOZDKGElmUZp5nTGjKl8lUrKO6pT3iVNB7T9QuASJD7qY1VdZtK89myHOJZI&usqp=CAU",
        description:
          "Get your clue finding skills ready and senses high for the most exciting event of Phoenix 2023, Treasure Hunt is back with a bang. The stakes have never been higher to find that one treasure.",
          date:"March 31, 2023",
      },
      
      
    // Add more card data objects as needed
  ];
  
  export default eventData;
  