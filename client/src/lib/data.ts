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
    year: "2024",
    url: "https://doi.org/10.1038/xyz",
    abstract: "This paper presents novel approaches to natural language understanding using deep learning architectures, demonstrating significant improvements in comprehension tasks across multiple languages and domains."
  },
  {
    id: 2,
    title: "Ethical Considerations in Autonomous Decision Making Systems",
    authors: "Smith, J., Chen, L., Anderson, P.",
    venue: "International Conference on AI Ethics",
    year: "2024",
    url: "https://doi.org/10.1109/ethics",
    abstract: "An examination of ethical frameworks for autonomous AI systems, proposing guidelines for responsible development and deployment of AI in critical decision-making contexts."
  },
  {
    id: 3,
    title: "Transformer Models for Multi-Modal Learning",
    authors: "Smith, J., Kumar, A., Brown, S., Davis, M.",
    venue: "Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: "2023",
    url: "https://doi.org/10.1109/cvpr",
    abstract: "Introduction of a novel transformer architecture capable of processing multiple input modalities simultaneously, achieving state-of-the-art results on various benchmark datasets."
  },
  {
    id: 4,
    title: "Reinforcement Learning in Dynamic Environments",
    authors: "Williams, M., Smith, J.",
    venue: "Journal of Machine Learning Research",
    year: "2023",
    url: "https://doi.org/10.1234/jmlr",
    abstract: "A comprehensive study of reinforcement learning algorithms in environments with changing parameters, introducing adaptive strategies for improved performance."
  },
  {
    id: 5,
    title: "Chapter 8: Future of AI in Healthcare",
    authors: "Smith, J., Thompson, E.",
    venue: "Handbook of Artificial Intelligence in Medicine",
    year: "2023",
    url: "https://doi.org/10.1007/978-3",
    abstract: "An overview of current and future applications of AI in healthcare, discussing challenges, opportunities, and potential impacts on patient care and medical research."
  },
  {
    id: 6,
    title: "Interpretable Machine Learning Models for Clinical Decision Support",
    authors: "Smith, J., Zhang, W., Miller, K.",
    venue: "Nature Digital Medicine",
    year: "2022",
    url: "https://doi.org/10.1038/med",
    abstract: "Development of interpretable ML models for clinical applications, emphasizing the importance of explainability in medical AI systems."
  },
  {
    id: 7,
    title: "Federated Learning for Privacy-Preserving AI",
    authors: "Smith, J., Garcia, R., Lee, H.",
    venue: "International Conference on Machine Learning (ICML)",
    year: "2022",
    url: "https://doi.org/10.1109/icml",
    abstract: "Presentation of novel federated learning techniques that enable collaborative model training while maintaining data privacy and security."
  },
  {
    id: 8,
    title: "Quantum Computing Applications in Machine Learning",
    authors: "Smith, J., quantum research team",
    venue: "Quantum Science and Technology",
    year: "2021",
    url: "https://doi.org/10.1088/qst",
    abstract: "Investigation of quantum computing advantages in machine learning algorithms, with experimental results on quantum hardware."
  }
];

export const SAMPLE_PROJECTS = [
  {
    id: 1,
    title: "AI-Powered Medical Diagnosis System",
    description: "Developed a deep learning system for automated medical image analysis, focusing on early detection of various conditions using computer vision techniques.",
    technologies: ["Python", "TensorFlow", "PyTorch", "Docker", "AWS"],
    startDate: new Date("2023-06-01"),
    endDate: new Date("2024-02-28"),
    url: "https://github.com/medicalai-project",
    status: "Completed"
  },
  {
    id: 2,
    title: "Privacy-Preserving Federated Learning Framework",
    description: "Leading the development of a framework that enables collaborative machine learning while maintaining data privacy across multiple institutions.",
    technologies: ["Python", "PyTorch", "Cryptography", "Kubernetes"],
    startDate: new Date("2023-09-01"),
    status: "Ongoing"
  },
  {
    id: 3,
    title: "Ethical AI Decision-Making Platform",
    description: "Created a platform for evaluating and ensuring ethical considerations in AI systems, including bias detection and fairness metrics.",
    technologies: ["Python", "React", "Node.js", "PostgreSQL"],
    startDate: new Date("2023-03-01"),
    endDate: new Date("2023-12-15"),
    url: "https://ethicalai-platform.org",
    status: "Completed"
  },
  {
    id: 4,
    title: "NLP-Based Research Literature Analysis",
    description: "Building an intelligent system for analyzing and summarizing scientific literature using advanced NLP techniques.",
    technologies: ["Python", "Transformers", "BERT", "Elasticsearch"],
    startDate: new Date("2024-01-01"),
    status: "Ongoing"
  }
];

export const SAMPLE_TEACHINGS = [
  {
    id: 1,
    courseName: "Advanced Machine Learning",
    courseCode: "CS601",
    institution: "Tech University",
    lastTaught: new Date("2024-12-15"),
    description: "Graduate-level course covering deep learning, reinforcement learning, and advanced ML concepts."
  },
  {
    id: 2,
    courseName: "Introduction to Artificial Intelligence",
    courseCode: "CS401",
    institution: "Tech University",
    lastTaught: new Date("2024-01-15"),
    description: "Undergraduate course introducing fundamental concepts of AI, including search algorithms, knowledge representation, and basic machine learning."
  },
  {
    id: 3,
    courseName: "Ethics in Artificial Intelligence",
    courseCode: "CS455",
    institution: "Tech University",
    lastTaught: new Date("2023-05-30"),
    description: "Senior-level course examining ethical implications of AI development and deployment in society."
  },
  {
    id: 4,
    courseName: "Natural Language Processing",
    courseCode: "CS602",
    institution: "Tech University",
    lastTaught: new Date("2023-12-15"),
    description: "Advanced course covering modern NLP techniques, transformer architectures, and language models."
  }
];

export const SAMPLE_THESES = [
  {
    id: 1,
    studentName: "Michael Chen",
    title: "Deep Learning Approaches for Medical Image Analysis",
    degreeLevel: "PhD",
    year: "2024",
    status: "Ongoing",
    description: "Research focusing on developing novel deep learning architectures for medical imaging diagnostics."
  },
  {
    id: 2,
    studentName: "Sarah Johnson",
    title: "Ethical AI Decision Making in Autonomous Systems",
    degreeLevel: "PhD",
    year: "2023",
    status: "Completed",
    description: "Development of framework for implementing ethical decision-making in autonomous AI systems."
  },
  {
    id: 3,
    studentName: "David Rodriguez",
    title: "Federated Learning for Privacy-Preserving Healthcare Analytics",
    degreeLevel: "Masters",
    year: "2023",
    status: "Completed",
    description: "Implementation of federated learning techniques for secure medical data analysis across institutions."
  },
  {
    id: 4,
    studentName: "Emily Taylor",
    title: "Transformer-based Models for Scientific Text Understanding",
    degreeLevel: "Masters",
    year: "2024",
    status: "Ongoing",
    description: "Developing specialized language models for scientific literature analysis and knowledge extraction."
  }
];

export const SAMPLE_TRAININGS = [
  {
    id: 1,
    title: "Deep Learning with PyTorch",
    organization: "AI Research Institute",
    duration: "2 days",
    date: new Date("2024-02-15"),
    audience: "Industry Professionals",
    description: "Intensive workshop on implementing deep learning models using PyTorch, covering both theoretical foundations and practical applications."
  },
  {
    id: 2,
    title: "Ethical AI Development",
    organization: "Tech Ethics Foundation",
    duration: "1 day",
    date: new Date("2024-01-20"),
    audience: "Software Engineers",
    description: "Workshop focusing on implementing ethical principles in AI development, including bias detection and mitigation strategies."
  },
  {
    id: 3,
    title: "Advanced NLP Techniques",
    organization: "Language AI Summit",
    duration: "3 days",
    date: new Date("2023-11-10"),
    audience: "Researchers and Practitioners",
    description: "Comprehensive training on state-of-the-art NLP techniques, including transformer architectures and their applications."
  },
  {
    id: 4,
    title: "Machine Learning for Healthcare",
    organization: "Medical AI Institute",
    duration: "2 days",
    date: new Date("2023-09-25"),
    audience: "Healthcare Professionals",
    description: "Specialized course on applying machine learning in healthcare settings, focusing on medical image analysis and patient data privacy."
  }
];