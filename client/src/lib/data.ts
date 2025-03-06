// Temporary data until backend is implemented
export const PROFILE = {
  name: "Dr. Jane Smith",
  title: "Professor of Artificial Intelligence",
  institution: "Tech University",
  about: "I am a professor and researcher specializing in artificial intelligence, with a focus on machine learning and natural language processing. My research aims to advance the field of AI while ensuring ethical and responsible development of these technologies.",
  interests: ["Machine Learning", "Natural Language Processing", "AI Ethics", "Deep Learning", "Cognitive Computing"],
  education: [
    {
      degree: "Ph.D. in Computer Science",
      institution: "Stanford University",
      year: "2010"
    },
    {
      degree: "M.S. in Computer Science",
      institution: "MIT",
      year: "2006"
    }
  ],
  contact: {
    email: "jane.smith@techuniversity.edu",
    office: "Science Building, Room 405",
    twitter: "@drjanesmith",
    linkedin: "linkedin.com/in/drjanesmith",
    github: "github.com/drjanesmith"
  }
};

export const SAMPLE_PUBLICATIONS = [
  {
    id: 1,
    title: "Deep Learning Approaches for Natural Language Understanding",
    authors: "Smith, J., Johnson, R., Williams, M.",
    venue: "Nature Machine Intelligence",
    year: "2023",
    url: "https://doi.org/10.1038/xyz",
    abstract: "This paper presents novel approaches to natural language understanding using deep learning architectures..."
  },
  // Add more sample publications...
];

export const SAMPLE_EXPERIENCES = [
  {
    id: 1,
    title: "Professor of Artificial Intelligence",
    organization: "Tech University",
    startDate: new Date("2018-01-01"),
    description: "Leading research in AI and machine learning, teaching graduate courses in deep learning and NLP."
  },
  {
    id: 2,
    title: "Senior Research Scientist",
    organization: "AI Research Lab",
    startDate: new Date("2014-01-01"),
    endDate: new Date("2017-12-31"),
    description: "Led research team in developing novel machine learning algorithms for computer vision applications."
  }
];
