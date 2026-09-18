export const profile = {
  name: 'Leon Thiel',
  tagline: 'Data Scientist · AI Researcher · Music Producer',
  bio: `Grad Student & Researcher focussing on geopolitical applications and impliations of artificial intelligence. Reach out for discussion, collaboration or songwriting sessions!`,
  location: 'Cambridge, United Kingdom',
  email: 'lht30@cam.ac.uk',
  github: 'leonhenrik',
}

export const cvData = {
  experience: [
    {
      role: 'Data Scientist | Crisis Response & Humanitarian Aid',
      company: 'United Nations, Executive Office of the Secretary-General (EOSG)',
      location: 'New York City, USA',
      period: '09/2025 — 09/2026',
      description: 'Developing AI-based tools for crisis anticipation and humanitarian decision support across UN agencies. Building analytics systems for member states and contributing to the Secretary-General’s data strategy. Supervising data interns and owning end-to-end development of analytical tools.',
    },
    {
      role: 'NGO Work',
      company: 'German Federal Ministry for Economic Cooperation and Development (BMZ)',
      location: 'San José, Costa Rica',
      period: '09/2024 — 01/2025',
      description: 'Developed export infrastructure enabling independent coffee export for local farmers.',
    },
    {
      role: 'Data & AI Intern',
      company: 'Microsoft',
      location: 'Munich, Germany',
      period: '04/2024 — 09/2024',
      description: 'Developed and delivered AI proof-of-concepts for public sector and manufacturing clients. Worked on applied Responsible AI evaluation across deployment scenarios.',
    },
    {
      role: 'Visiting Associate',
      company: 'Boston Consulting Group',
      location: 'Hamburg, Germany',
      period: '10/2023 — 12/2023',
      description: 'Supported digital transformation of a global chemicals/energy client. Prepared 3 SteerCos and tracked software costs.',
    },
  ],
  research: [
    {
      role: 'Research Assistant — AI Discourse Analyses',
      institution: 'University of Oxford',
      location: 'Oxford, UK (Remote)',
      period: '03/2026 — 06/2026',
      description: '',
    },
    {
      role: 'Research Assistant — AI in Administration / Human-Centered Computing',
      institution: 'Technical University of Munich',
      location: 'Munich, Germany',
      period: '01/2024 — 08/2025',
      description: 'Research with Prof. Dr. Jana Diesner.',
    },
    {
      role: 'Teaching Assistant — Operations Research / Informatics Pre-Course',
      institution: 'Technical University of Munich',
      location: 'Munich, Germany',
      period: '10/2021 — 04/2022',
      description: 'With Prof. Dr. Rainer Kolisch.',
    },
  ],
  education: [
        {
      degree: 'MPhil Human-Inspired Artificial Intelligence',
      institution: 'University of Cambridge',
      location: 'Cambridge, UK',
      period: '10/2026 — 07/2027',
      description: 'Neuroscience, Social Robotics & Computational Social Science.',
    },
    {
      degree: 'B.Sc. Management and Computer Science',
      institution: 'Technical University of Munich',
      location: 'Munich, Germany',
      period: '10/2020 — 07/2024',
      description: 'Thesis: ML Prediction of Corporate Misconduct in Private Equity Assets.',
    },
    {
      degree: 'Exchange Student — Biology, Humanities & Arts',
      institution: 'The University of Hong Kong',
      location: 'Hong Kong',
      period: '08/2022 — 12/2022',
      description: 'Interdisciplinary courses across biology, humanities, and the arts.',
    }
  ],
  civic: [
    {
      role: 'Co-Founder & Head',
      organisation: 'PolitiQs e.V.',
      location: 'Strasslach, Germany',
      period: '02/2025 — Present',
      description: 'Building software to improve access to neutral, evidence-based political information. Currently 8 members from computer science, law, business, and politics.',
    },
    {
      role: 'Young Leadership Program',
      organisation: 'Bavarian Ministry for Culture and Education',
      location: 'Jerusalem, Israel',
      period: '06/2019',
      description: 'Seminar week at Yad Vashem Holocaust Memorial. Organisation of Holocaust Remembrance Workshops.',
    },
    {
      role: 'Youth Ambassador',
      organisation: 'German Bundestag',
      location: 'Grand Forks, USA',
      period: '08/2017 — 06/2018',
      description: '',
    },
  ],
  awards: [
    {
      title: 'Carlo-Schmid Fellowship',
      body: 'DAAD',
      period: '06/2025 — 02/2026',
      description: 'Scholarship for working at International Organizations.',
    },
    {
      title: 'Stiftung Bayerische Eliteakademie',
      body: 'Bayerische Eliteakademie',
      period: '05/2024 — 04/2026',
      description: '16-week fellowship on leadership and social impact.',
    },
    {
      title: 'Studienstiftung des Deutschen Volkes',
      body: 'German Academic Scholarship Foundation',
      period: '03/2021 — Present',
      description: 'Oldest and most selective scholarship in Germany.',
    }
  ],
  skills: [
    'Python', 'pandas', 'PyTorch', 'Machine Learning', 'Data Science',
    'JavaScript', 'TypeScript', 'React', 'R',
  ],
}

export const projects = [
  {
    id: 'crisis-data-compass',
    title: 'Crisis Data Compass',
    subtitle: 'United Nations data platform for crisis analysis',
    description: 'An interactive analysis tool for exploring the worldwide landscape of crisis data funding and allocation.',
    longDescription: `Built a comprehensive platform for analyzing how media frames public discourse. The system processes thousands of articles, extracts legitimation and delegitimation strategies, maps actor networks, and visualizes discourse patterns through an interactive web interface.\n\nThe pipeline uses Python for NLP processing, Neo4j for graph storage, and a Next.js frontend with GraphQL for real-time exploration of discourse networks.`,
    tags: ['Python', 'd3.js', 'Next.js', 'PostGres', 'SQL'],
    year: '2025',
    link: 'https://compass.crafd.io',
    github: '#',
    image: '/crisis-data-compass.png',
  },
  {
    id: 'politiqs-website',
    title: 'PolitIQS Website',
    subtitle: 'Website for a civic tech initiative',
    description: 'Website for a civic tech initiative providing neutral, evidence-based political information via data aggregation and APIs.',
    longDescription: `Designed and developed a responsive platform for political engagement. Users can explore policy positions, track legislative progress, and participate in discussions.\n\nThe application integrates with various data sources to provide up-to-date information on political developments.`,
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],

    year: '2024',
    link: '#',
    github: '#',
    image: '/politiqs-website.png',
  },
  {
    id: 'un-logos',
    title: 'UN Logos',
    subtitle: 'Open Source Data Set and API of UN Logos',
    description: 'An open source data set and API of United Nations logos, emblems, and symbols for use in research and applications.',
    longDescription: `Created a comprehensive dataset of United Nations logos, emblems, and symbols. The project involved collecting, categorizing, and annotating thousands of images from various UN agencies and missions.\n\nThe dataset is accessible through a RESTful API, allowing researchers and developers to easily integrate UN logos into their projects while ensuring proper attribution and usage guidelines.`,
    tags: ['React', 'Three.js', 'Web Audio API', 'Firebase'],
    year: '2023',
    link: '#',
    github: '#',
    image: '/un-logos.png',
  },
  {
    id: 'applaya',
    title: 'Applaya',
    subtitle: 'Open Source Application Organizer for Students',
    description: 'An open source application organizer for students, designed to streamline the end-to-end university and internship application process and data organization.',
    longDescription: `Developed an open source application organizer to help students manage their university and internship applications. The tool provides a centralized dashboard for tracking application deadlines, storing documents, and organizing contacts.\n\nBuilt with React for the frontend and Firebase for the backend, Applaya offers a user-friendly interface and real-time synchronization across devices. The project is freely available on GitHub for students worldwide.`,
    tags: ['React', 'PWA', 'IndexedDB', 'Service Workers'],
    year: '2023',
    link: '#',
    github: '#',
    image: null,
  },
    {
    id: 'whatswrapped',
    title: 'WhatsWrapped',
    subtitle: 'Open Source Chat Review.',
    description: 'An open source application to review your WhatsApp chats and analyze your communication patterns.',
    longDescription: `Created an open source application that allows users to review their WhatsApp chat history and analyze communication patterns. The tool provides insights into messaging frequency, sentiment analysis, and network visualization of contacts.\n\nBuilt with React for the frontend and Firebase for the backend, WhatsWrapped offers a user-friendly interface for exploring chat data while ensuring privacy and security. The project is freely available on GitHub for anyone interested in analyzing their WhatsApp communication.`,
    tags: ['React', 'PWA', 'IndexedDB', 'Service Workers'],
    year: '2023',
    link: '#',
    github: '#',
    image: null,
  },
      {
    id: 'ecosystem-mapping',
    title: 'Ecosystem Mapping',
    subtitle: 'Open Source Ecosystem Visualization.',
    description: 'An open source application to visualize and analyze complex ecosystems.',
    longDescription: `Created an open source application that allows users to visualize and analyze the CRAF'd ecosystems. The tool provides insights into relationships, interactions, and dynamics within various.`,
    tags: ['React', 'PWA', 'IndexedDB', 'Service Workers'],
    year: '2026',
    link: '#',
    github: '#',
    image: '/ecosystem-mapping.png',
  },

]

export const songs = [
  {
    title: 'Lieber Nicht',
    project: 'Theon',
    year: '2026',
    genre: 'Indie Rap',
    description: 'An indie song about the dilemma between leaving and staying.',
    spotifyLink: '#',
  },
  {
    title: 'Warum kannst du das?',
    project: 'Theon ft. Jonny',
    year: '2025',
    genre: 'Indie Electronic',
    description: 'Song about the feeling of not being able to do everything you want.',
    spotifyLink: '#',
  },
  {
    title: 'okPasst',
    project: 'Theon ft. Jonny & mio',
    year: '2025',
    genre: 'Summer Anthem',
    description: 'Song about carefreeness, spontaneity, and summer in munich (but with the thought in mind, that summer may end soon).',
    spotifyLink: '#',
  },
  {
    title: 'Gefallen',
    project: 'Theon ft. Jonny',
    year: '2025',
    genre: 'Indie',
    description: 'Rap song about the fear of falling (for someone).',
    spotifyLink: '#',
  },
  {
    title: 'Alles Im Griff',
    project: 'Theon',
    year: '2024',
    genre: 'Indie Pop',
    description: 'Song about the feeling of not being sure anymore, whether one is having everything under control, and the futile try to keep the facade.',
    spotifyLink: '#',
  },
  {
    title: 'Prokrastiniert',
    project: 'Theon',
    year: '2024',
    genre: 'Indie Pop',
    description: 'Indie Rock about postponing the important things in life, and thereby missing the best moments (maybe?)',
    spotifyLink: '#',
  },
    {
    title: 'BLUB (Bitte Lass Uns...)',
    project: 'Medimeisterschaften München',
    year: '2024',
    genre: 'Medisong',
    description: 'Not really sure how to describe this one.',
    spotifyLink: '#',
  },
  {
    title: 'Fühls Nicht Mehr',
    project: 'Theon ft. Jonny',
    year: '2024',
    genre: 'Indie Pop',
    description: 'Song about the fear of losing the ability to feel something meaningful, due to today\'s overexposure.',
    spotifyLink: '#',
  },
  {
    title: 'Ryan Air',
    project: 'Giovanni Gusto ft. Theon',
    year: '2023',
    genre: 'Indie Pop',
    description: 'Song about cheap flights and good beer.',
    spotifyLink: '#',
  },
  {
    title: 'Vino Am Lago',
    project: 'Giovanni Gusto ft. Joy, Lil Theon',
    year: '2023',
    genre: 'Indie Pop',
    description: 'Song about lakes and wine in italy.',
    spotifyLink: '#',
  },
  {
    title: 'Edgar (Uncut Version)',
    project: 'Giovanni Gusto ft. Lil Theon, Dr. Edgar',
    year: '2024',
    genre: 'Indie Pop',
    description: 'Song about very bad haircuts.',
    spotifyLink: '#',
  },
  {
    title: 'Winterschlaf',
    project: 'Giovanni Gusto ft. Lil Theon',
    year: '2023',
    genre: 'Christmas Pop',
    description: 'Christmas song about the desire to hibernate through the cold season.',
    spotifyLink: '#',
  },
  {
    title: 'Shots Und Bier',
    project: 'Giovanni Gusto ft. Lil Theon',
    year: '2022',
    genre: 'Indie Pop',
    description: 'Student dorm anthem about cheap beer, cash, and late night shots.',
    spotifyLink: '#',
  },
]

export const initiatives = [
  {
    title: 'Private Equity Misconduct Prediction: Machine Learning Approaches to Corporate Risk',
    authors: 'Leon Thiel',
    year: '2024',
    venue: 'TU Munich Bachelor Thesis',
    description: 'Thesis exploring machine learning methods for predicting corporate misconduct in private equity assets. Developed models combining financial data with ESG indicators for risk assessment.',
    tags: ['Machine Learning', 'Corporate Governance', 'Risk Analysis'],
  },
]

export const boardGames = [
  {
    title: 'Mein Lieber Scholli!',
    category: 'Card Strategy',
    players: '3-8',
    rating: 10,
    note: 'Reenact a student dorm semester. Encounter cockroaches, celebrate parties, and survive exams. The game is won by the last player who hasn\'t dropped out of the dorm.',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22400%22%3E%3Crect fill=%22%238B5A8F%22 width=%22300%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-family=%22Arial%22%3EMein Lieber Scholli%3C/text%3E%3C/svg%3E',
  },
  {
    title: 'Murder',
    category: 'Mytery Game', 
    players: '3-6',
    rating: 9,
    note: 'Find the murderer at a dinner party via witnesses.',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22400%22%3E%3Crect fill=%22%23D4394E%22 width=%22300%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-family=%22Arial%22%3EMurder%3C/text%3E%3C/svg%3E',
  },
  {
    title: 'Case Race',
    category: 'Mytersy Game', 
    players: '3-6',
    rating: 9,
    note: 'Find the murderer at a dinner party via witnesses.',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22400%22%3E%3Crect fill=%22%234A7C59%22 width=%22300%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-family=%22Arial%22%3ECase Race%3C/text%3E%3C/svg%3E',
  },
]

export const blogPosts = [
  {
    slug: 'the-ballon-dor-fallacy',
    title: 'The Ballon D\'Or Fallacy',
    subtitle: 'Evaluating on Achievement vs. Skill, and its issue for educational equality',
    date: 'September 18, 2026',
    tags: ['society', 'career', 'applications'],
    excerpt: "",
    content: `As a semi-chronically online person, everyone is bound to stumble upon a significant part of the online & offline discourse about who is the "GOAT" (acronym for "Greatest Of All Time") Football player. A large part of the discourse participants tend to agree that the final debate boils down to two candidates, namely Cristiano Ronaldo (Now at Al Nassr, I think), and Lionel Messi (Inter Miami). There are several arguments in favor of each one of them: Messi is a better playmaker, Ronaldo has scored more spectacular goals, and represents more of an intense work ethic within the sport – (and so on, I’m not to well-versed on any technical details). However, one reoccurring argument has always bugged me, and I think this fallacy is central to self-perpetuating inequality of opportunity in education and careers.
The Ballon D’Or, awarded by France Football and a jury of experts and football players annually, is presented to the best footballer (whatever that may mean) within any given year. The best players in history have won a couple, while Ronaldo and Messi represent an anomaly here: Ronaldo has won five Ballon d’Ors, and Messi has a staggering eight Ballon d’Ors to his name. Yes, that is an incredible achievement.
However, this is where the problem comes into play. Comparing two candidates (in this case, Ronaldo and Messi) on the basis of something they have been awarded for their skill, instead of comparing them based on their skills, introduces infinite confounding variables. Mood of the Jury, composition of the Jury, maybe even favours between clubs and players, and the the ever-so-annoying principle of “The Winner Takes it all”, where a close second is awarded the same as the last placed person, therefore making statistical comparisons meaningless. 

If you’re following this far, that then to me means, that the argument “Messi is the better player, as he has more Ballon d’Ors, is a completely meaningless statement, as the basis of measurement for this award (his actual footballing skill) is also known and visible to declarant, who could make a more meaningful statement by comparing her or his perception of the actual footballing talent put into play.
Okay, enough rambling about football; I think the bridge to career capital or educational attainment is clear. Too often, people are evaluated based on achievements, not on undiluted skill. If a selection committee has access to the underlying evidence of merit, relying heavily on previous selection outcomes creates a feedback loop in which past recognition becomes evidence for future skill – meaning, the same performance is evaluated twice (or perpetually and recursively, causing weird upward cycles).

If a person holds e.g. a scholarship, they are seen way more favorably for another scholarship application, which – yes, of course the selection of another Jury can be seen as a stamp of approval – however, as the data or performance that this decision is based on informations accessible to the current decision body, in form of grades, social commitment etc. making an own judgement, without letting prior awards dilute the view, would be the way towards reducing inequality in the process. 

Across fellowships, scholarships, and extracurricular programs, this feedback loop causes young people to start to get “passed around”, basically in a circle, bumping into the same people, as a grand number of admission committees favor prior “stamps of approval” highly. Of course, those awards often do hold meaning – there is no denying that.
However, for students, realizing that in this attention economy, signals like that may be the path to further reward, this can lead to very misaligned incentives, as taking time to properly work on a project, and do the “invisible work” is rewarded less than striving for certain signals and has a lower perceived return on time investment. Having gone through some fellowships like that and feeling those misaligned incentives myself, I am concerned about the long-term effects of this A) for individual motivation, and time spent on meaningful work vs. working on attaining external reward. B) In the grand scheme of things, I see a big issue in the diminishing returns caused by repeated investments into a small subset of the student population, instead of dispersing chances more broadly.

After all, while awards surely feel cool, in the end, they are fancy noise. It’s very worth it to look beyond and to not further give a rise to credential-chasing-game as it is overly apparent in the US.
`,
  },
]

export const links = [
  {
    platform: 'GitHub',
    url: 'https://github.com/leonhenrik',
    description: 'Code, projects & contributions',
    icon: 'github',
  },
  {
    platform: 'Spotify',
    url: 'https://open.spotify.com/user/leonthiel',
    description: 'Music & releases',
    icon: 'spotify',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/leonhenrikthiel',
    description: 'Professional network & CV',
    icon: 'linkedin',
  },
]
