export interface HackathonProblem {
  id: string;
  number: number;
  title: string;
  category: string;
  problemStatement: string;
  challenge: string;
  badgeColor: string;
}

export interface PaperTopic {
  id: string;
  number: number;
  title: string;
  category: string;
  description?: string;
  badgeColor: string;
}

export const HACKATHON_PROBLEMS: HackathonProblem[] = [
  {
    id: 'hallucination-detection',
    number: 1,
    title: 'Hallucination Detection',
    category: 'AI & Machine Learning',
    problemStatement:
      'As Large Language Models (LLMs) become increasingly integrated into education, healthcare, finance, and business, they can sometimes generate inaccurate, fabricated, or misleading information that appears highly convincing. This lack of reliability can lead to misinformation, poor decision-making, and reduced trust in AI systems.',
    challenge:
      'Design an innovative solution that can identify, verify, or reduce AI-generated hallucinations, improving the accuracy, transparency, and trustworthiness of AI-generated content across different domains.',
    badgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
  },
  {
    id: 'academic-integrity',
    number: 2,
    title: 'Detecting Academic Integrity Violations',
    category: 'EdTech & AI Ethics',
    problemStatement:
      'The widespread adoption of AI-powered tools has transformed the way students learn and complete academic work. While these technologies offer significant educational benefits, they also raise concerns about plagiarism, unauthorized AI assistance, and the authenticity of submitted work. Educational institutions require effective ways to promote responsible AI usage while maintaining academic integrity.',
    challenge:
      'Develop a solution that helps educational institutions encourage ethical AI usage, assess the originality of student work, and support fair and transparent academic evaluation.',
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
  },
  {
    id: 'deepfake-detection',
    number: 3,
    title: 'Detecting Deepfakes and Synthetic Media',
    category: 'Cybersecurity & AI',
    problemStatement:
      'Advancements in generative AI have made it easier to create highly realistic fake images, videos, and audio, making it increasingly difficult to distinguish authentic content from manipulated media. This poses serious risks to cybersecurity, digital trust, journalism, public safety, and individual privacy.',
    challenge:
      'Create an innovative solution that can detect, verify, or authenticate digital media, helping individuals and organizations identify synthetic content and reduce the spread of misinformation.',
    badgeColor: 'bg-red-100 text-red-700 border-red-200',
  },
  {
    id: 'phishing-detection',
    number: 4,
    title: 'Phishing Email & Website Detection',
    category: 'Cybersecurity & Web Defense',
    problemStatement:
      'Phishing attacks continue to be one of the most common cyber threats, tricking users into revealing sensitive information through fake emails, websites, and messages. Many users find it difficult to recognize these threats.',
    challenge:
      'Develop a solution that helps users identify suspicious emails, URLs, or websites by analyzing common phishing indicators and providing real-time warnings and safety recommendations.',
    badgeColor: 'bg-amber-100 text-amber-700 border-amber-200',
  },
  {
    id: 'cloud-file-vault',
    number: 5,
    title: 'Cloud-Based Student File Vault',
    category: 'Cloud & App Development',
    problemStatement:
      'Students frequently store assignments, project reports, certificates, and notes across multiple devices, making file management difficult and increasing the risk of losing important documents.',
    challenge:
      'Build a cloud-based application that allows students to securely upload, organize, search, and access academic documents anytime while ensuring simple and secure file management.',
    badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  },
  {
    id: 'smart-expense-tracker',
    number: 6,
    title: 'Smart Expense Tracker',
    category: 'FinTech & Utility Apps',
    problemStatement:
      'Many students find it difficult to manage their daily expenses and often lack awareness of where their money is being spent. Existing applications can be overly complex for everyday budgeting.',
    challenge:
      'Create a smart expense tracking application that helps users record expenses, categorize spending, visualize financial habits, and provide simple suggestions to improve personal budgeting.',
    badgeColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
  },
];

export const PAPER_PRESENTATION_TOPICS: PaperTopic[] = [
  {
    id: 'ai-agents',
    number: 1,
    title: 'AI Agents: The Next Digital Workforce',
    category: 'AI & Autonomous Systems',
    badgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
  },
  {
    id: 'zero-trust-security',
    number: 2,
    title: 'Zero Trust Security: The Future of Cyber Defense',
    category: 'Cybersecurity & Networks',
    badgeColor: 'bg-red-100 text-red-700 border-red-200',
  },
  {
    id: 'serverless-computing',
    number: 3,
    title: 'Serverless Computing: Building the Future of Cloud Applications',
    category: 'Cloud Computing',
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
  },
  {
    id: 'quantum-computing',
    number: 4,
    title: 'Quantum Computing: Revolutionizing the Future of Computation',
    category: 'Quantum Computing',
    badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  },
  {
    id: 'rag-knowledge',
    number: 5,
    title: 'Retrieval-Augmented Generation (RAG): Enhancing AI with Reliable Knowledge',
    category: 'Generative AI',
    badgeColor: 'bg-amber-100 text-amber-700 border-amber-200',
  },
  {
    id: 'edge-ai-iot',
    number: 6,
    title: 'Edge AI and Intelligent IoT: Bringing AI Closer to Devices',
    category: 'Edge AI & IoT',
    badgeColor: 'bg-cyan-100 text-cyan-700 border-cyan-200',
  },
  {
    id: 'brain-computer-interfaces',
    number: 7,
    title: 'Brain-Computer Interfaces: Bridging Mind and Machine',
    category: 'Neurotech & HCI',
    badgeColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
  },
  {
    id: '6g-networks',
    number: 8,
    title: '6G Networks: Beyond 5G Connectivity',
    category: 'Next-Gen Networking',
    badgeColor: 'bg-teal-100 text-teal-700 border-teal-200',
  },
  {
    id: 'explainable-ai',
    number: 9,
    title: 'Explainable AI (XAI): Making Black-Box Models Transparent',
    category: 'AI Ethics',
    badgeColor: 'bg-pink-100 text-pink-700 border-pink-200',
  },
  {
    id: 'post-quantum-cryptography',
    number: 10,
    title: 'Post-Quantum Cryptography: Securing Data for the Quantum Age',
    category: 'Cryptography',
    badgeColor: 'bg-rose-100 text-rose-700 border-rose-200',
  },
  {
    id: 'federated-learning',
    number: 11,
    title: 'Federated Learning: Privacy-Preserving Machine Learnings',
    category: 'Distributed AI',
    badgeColor: 'bg-violet-100 text-violet-700 border-violet-200',
  },
  {
    id: 'green-computing',
    number: 12,
    title: 'Green Computing: Building Sustainable Technology',
    category: 'Sustainable Tech',
    badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  },
];
