import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Samrudh",
  lastName: "Raikote",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI/ML Engineering Student",
  avatar: "/images/avatar.jpg",
  email: "samrudhraikote.06@gmail.com",
  location: "Asia/Kolkata",
  livelocation: "Bangalore, India",
  languages: ["English", "Hindi", "Kannada"],
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write about AI applications, systems architecture, and how engineering can solve real problems.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sciboyrocks",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/samrudh-raikote-039749319",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio showcasing work in AI, automation, and full-stack systems`,
  headline: <>Engineering smarter systems with AI, data, and code</>,
  featured: {
    display: true,
    // Will be populated dynamically in the page component
    title: null,
    href: null,
  },
  subline: (
    <>
      I'm Samrudh, an AI/ML engineering student building intelligent tools—from trading bots and 
      automation platforms to full-stack products that work in the real world.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm an engineering student based in Bangalore, focused on AI, systems, and automation. I like building real, functional tools—from relationship apps to trading bots. I'm hands-on across the stack and obsessed with turning bold ideas into scalable systems that actually work.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Currently Developing",
        timeframe: "",
        role: "Developer & Designer",
        achievements: [
          <><strong>Serenade</strong>&nbsp;– An AI-powered relationship platform for couples, includes:
              <ul style={{ marginTop: '8px', paddingLeft: '24px' }}>
                <li>Mood synchronization and emotional well-being tools</li>
                <li>Personalized gift recommendations based on preferences</li>
                <li>Data-driven insights to improve relationship dynamics</li>
                <li>Currently in development with multiple planned features</li>
                <li><strong>Tech Stack:</strong> React, Tailwind CSS, Appwrite for Database, Python (AI/ML), Node.js</li>
              </ul>
          </>,
        ],
        images: [],
      },
      {
        company: "Past Projects",
        timeframe: "",
        role: "Developer & Designer",
        achievements: [<>
          <strong>Health Support Chatbot</strong>&nbsp;– AI + Dataset Engineering for healthcare:
          <ul style={{ marginTop: '8px', paddingLeft: '24px' }}>
            <li>Fine-tuned Gemini AI model on 2,000 custom input-output pairs</li>
            <li>Focused on real-world healthcare assistance scenarios</li>
            <li>Demonstrates dataset engineering and domain-specific AI adaptation</li>
            <li><strong>Tech Stack:</strong> Python, Gemini API, Flask, AI Model from HuggingFace</li>
          </ul>
        </>,
        <>
          <strong>Trading Dashboard & System</strong>&nbsp;– Real-time trading platform:
          <ul style={{ marginTop: '8px', paddingLeft: '24px' }}>
            <li>Live trading dashboard with MT5 integration and strategy controls</li>
            <li>Real-time price feeds, trading signals, logs, and profit metrics</li>
            <li>Built for serious backtesting and monitoring in financial tech</li>
            <li><strong>Tech Stack:</strong> React, Flask, WebSocket, MetaTrader5, SQLite</li>
          </ul>
        </>,
        
        <>
          <strong>Indian Stock Monitoring System</strong>&nbsp;– Real-time alerts using public APIs:
          <ul style={{ marginTop: '8px', paddingLeft: '24px' }}>
            <li>Real-time stock tracking with price triggers and notifications</li>
            <li>Pushbullet integration for mobile alerts</li>
            <li>Utilizes Yahoo Finance data and Flask-based scheduling</li>
            <li><strong>Tech Stack:</strong> Python, Flask, Pushbullet API, Yahoo Finance API</li>
          </ul>
        </>,
        
        
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "BMS College of Engineering, Bangalore",
        description: <>
          <ul style={{ marginTop: '8px', paddingLeft: '24px' }}>
            <li>Pursuing BTech in Artificial Intelligence and Machine Learning.</li>
          </ul>
        </>,
        
      },
      {
        name: <strong>Harvard CS50x Certification</strong>,
        description: <>
          <ul style={{ marginTop: '8px', paddingLeft: '24px' }}>
            <li>Completed CS50x by Harvard, including data structures, algorithms, web dev, and C programming</li>
            <li>Applied knowledge to practical projects and passed rigorous problem sets</li>
            <li>
            <strong>Credential:</strong>&nbsp;
            <a href="/images/certificate.jpg" target="_blank" rel="noopener noreferrer">
              Verified certificate from edX/Harvard
            </a>
          </li>
          </ul>
        </>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Python & Flask",
        description: <>Used for backend systems, bots, data processing, and API development.</>,
        images: [],
      },
      {
        title: "Next.js & Tailwind CSS",
        description: <>Used Frontend frameworks for responsive and fast web app development.</>,
        images: [],
      },
      {
        title: "Machine Learning",
        description: <>Worked on fine-tuned models, trading simulations, and GPT-powered systems.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI, systems, and mindset",
  description: `Thoughts and experiments from ${person.name} on tech and problem-solving`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `A curated selection of AI tools, trading systems, and product builds`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `Snapshots from the personal and professional journey`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
