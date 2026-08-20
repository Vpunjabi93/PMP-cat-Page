// All programme facts below are taken from the official brochures (Aug 2026 intake).
// Fees are exclusive of GST unless stated. Verify against the brochure before each
// batch refresh — start dates, fees and batch numbers change every cycle.

// The page sorts by what the visitor is trying to do, not by institute name. Every
// programme is tagged to exactly one aim so the outcome filter stays unambiguous.
export const aims = [
  {
    id: "foundations",
    label: "Build the foundation",
    blurb:
      "You want the whole discipline, end to end, from an institute whose name is recognised on sight.",
  },
  {
    id: "craft",
    label: "Master the technical craft",
    blurb:
      "You already deliver. The projects are getting bigger, and your estimates, schedules and risk registers need to hold up under scrutiny.",
  },
  {
    id: "digital",
    label: "Lead digital transformation",
    blurb:
      "Your projects are transformations, and the decisions behind them are increasingly made on data rather than instinct.",
  },
  {
    id: "org",
    label: "See the organisation through a project lens",
    blurb:
      "You want the context projects actually run inside — portfolio governance, contracts, law and the politics of megaprojects.",
  },
];

export const programmes = [
  {
    id: "iimi-cppm",
    aim: "foundations",
    institute: "IIM Indore",
    logo: "/assets/logos/iim-indore-new.jpg",
    campusImage: "/assets/img/campus-iim-indore.jpg",
    name: "Certificate Programme in Project Management (Batch 19)",
    brochureUrl: "https://www.timespro.com/brochure/iimi-cppm",
    outcome:
      "Nineteen batches in, the most proven route here — the full project lifecycle, selection through closure.",
    bestFor: "Managers who want a well-established IIM certificate and end-to-end command.",
    highlights: ["19 batches run", "Triple-accredited IIM", "56 live sessions"],
    edge: "FT-ranked 62nd globally for executive education",
    duration: "6 months",
    format: "Live online (Sat) + campus immersion",
    schedule: "Saturday, 9:00 AM – 1:15 PM IST",
    startDate: "3 Oct 2026",
    endDate: "Mar 2027",
    fee: "₹1,80,000",
    campusImmersion: "3 days, IIM Indore",
    campusShort: "3 days",
    eligibility: "Graduate/diploma with 50%; minimum 2 years' experience",
    eligibilityShort: "Graduate + 2 years",
    learningHours: "~70 hours (56 sessions)",
    tools: "MS Project",
    credential: "IIM Indore certificate; Executive Education alumni status optional (₹10,000)",
  },
  {
    id: "iitd-epapm",
    aim: "craft",
    institute: "IIT Delhi",
    instituteNote: "Continuing Education Programme (CEP)",
    logo: "/assets/logos/iit-delhi.png",
    campusImage: "/assets/img/campus-iit-delhi.jpg",
    name: "Executive Programme in Advanced Project Management (Batch 05)",
    brochureUrl: "https://www.timespro.com/brochure/iitd-epapm",
    outcome:
      "Hands-on Primavera P6 — the scheduling tool large capital projects actually run on — taught against Harvard cases.",
    bestFor: "Engineers and planners whose schedules and cost models must survive audit.",
    highlights: ["Primavera P6", "Harvard case studies", "35 PDUs for PMP"],
    edge: "The only programme here teaching Primavera P6",
    duration: "7 months",
    format: "Live online (Sat) + optional campus immersion",
    schedule: "Saturday, 10:00 AM – 1:30 PM IST",
    startDate: "26 Sep 2026",
    endDate: "Mar 2027",
    fee: "₹1,64,000",
    campusImmersion: "Optional; travel and stay at your cost",
    campusShort: "Optional",
    eligibility: "Graduates in any discipline",
    eligibilityShort: "Any graduate",
    learningHours: "3.5 hours per weekend",
    tools: "Primavera P6",
    credential: "e-Certificate from CEP, IIT Delhi",
  },
  {
    id: "iitmp-cpapm",
    aim: "craft",
    institute: "IIT Madras Pravartak",
    instituteNote: "Technology Innovation Hub of IIT Madras",
    logo: "/assets/logos/iitm-pravartak.png",
    campusImage: "/assets/img/campus-iitm-pravartak.jpg",
    name: "Certificate Programme in Advanced Project Management (Batch 01)",
    brochureUrl: "https://www.timespro.com/brochure/iitmp-cpapm",
    outcome:
      "The quantitative end of the craft — Monte Carlo, real options and critical chain — closed out by a 20-hour capstone.",
    bestFor: "Technical leads who want rigour, plus help landing the role afterwards.",
    highlights: ["20-hour capstone", "Career support included", "8 industry tools"],
    edge: "Career support: resume, LinkedIn, interviews, job portal",
    duration: "7 months",
    format: "Live online (Sun) + optional campus immersion",
    schedule: "Sunday, 9:00 AM – 12:00 PM IST",
    startDate: "22 Aug 2026",
    endDate: "Feb 2027",
    fee: "₹1,65,000",
    campusImmersion: "Optional 1 day, IIT Madras Research Park",
    campusShort: "Optional, 1 day",
    eligibility: "Graduates in any discipline",
    eligibilityShort: "Any graduate",
    learningHours: "100+ hours",
    tools: "Jira, Asana, Miro, Notion, Figma",
    credential: "e-Certificate from IITM Pravartak",
  },
  {
    id: "iimn-pmp",
    aim: "craft",
    institute: "IIM Nagpur",
    logo: "/assets/logos/iim-nagpur-new.jpg",
    campusImage: "/assets/img/campus-iim-nagpur.jpg",
    name: "Certificate Programme in Project Management (Batch 09)",
    brochureUrl: "https://www.timespro.com/brochure/iimn-pmp",
    outcome:
      "Agile, Scrum and Jira taught after work, 6:30 to 9:45 PM — the only one here that leaves your weekends alone.",
    bestFor: "Delivery managers who want modern practice without losing Saturdays.",
    highlights: ["Evening classes", "Alumni status included", "35 PDUs for PMP"],
    edge: "Weekday evenings; IIM alumni status at no extra fee",
    note: "Applicants who are not currently working may also apply.",
    duration: "6 months",
    format: "Live online (Sat evenings) + campus immersion",
    schedule: "Saturday, 6:30 PM – 9:45 PM IST",
    startDate: "5 Sep 2026",
    endDate: "Mar 2027",
    fee: "₹1,55,000",
    campusImmersion: "2 days, IIM Nagpur",
    campusShort: "2 days",
    eligibility: "Graduate/diploma; minimum 1 year experience",
    eligibilityShort: "Graduate + 1 year",
    learningHours: "84 hours (72 online + 12 campus)",
    tools: "Agile, Scrum, Jira",
    credential: "IIM Nagpur certificate + IIM Nagpur alumni status",
  },
  {
    id: "iimk-pcpmp",
    aim: "digital",
    institute: "IIM Kozhikode",
    logo: "/assets/logos/iim-kozhikode-new.png",
    // No IIM Kozhikode campus photo in /public yet — card renders without an image.
    campusImage: null,
    name: "Professional Certificate Programme in Project Management (Batch 12)",
    brochureUrl: "https://www.timespro.com/brochure/iimk-pcpmp",
    outcome:
      "Built to run transformations: business and digital transformation projects, with Power BI, Python, R and GenAI behind the decisions.",
    bestFor: "Leaders running transformation programmes who want analytics on the CV too.",
    highlights: [
      "Digital transformation",
      "Alumni status included",
      "Industry expert sessions",
      "Bring your own live project",
    ],
    edge: "Present your own live project to faculty and peers",
    duration: "10 months",
    format: "Live online (Sat) + campus immersion",
    schedule: "Saturday, 9:15 AM – 12:30 PM IST",
    startDate: "3 Oct 2026",
    endDate: "Aug 2027",
    fee: "₹1,98,000",
    campusImmersion: "5 days (2 at start + 3 at end), IIM Kozhikode",
    campusShort: "5 days",
    eligibility: "Graduates; minimum 3 years' full-time experience",
    eligibilityShort: "Graduate + 3 years",
    learningHours: "42 modules across 10 months",
    tools: "MS Project, Power BI, Python/R, GenAI",
    credential: "IIM Kozhikode certificate + Executive Alumni Status, no separate fee",
  },
  {
    id: "xlri-edppmsp",
    aim: "org",
    institute: "XLRI Jamshedpur",
    instituteNote: "Offered jointly with XLEAD",
    // No XLRI logo or campus photo in /public yet — both fall back to text.
    logo: null,
    campusImage: null,
    name: "Executive Development Programme in Project Management for Senior Professionals (Batch 12)",
    brochureUrl: "https://www.timespro.com/brochure/xlri-edppmsp",
    outcome:
      "Reads the whole organisation through a project lens — portfolio governance, megaprojects, contracts, business law and labour law.",
    bestFor: "Senior managers who need the organisational and legal context, not just the plan.",
    highlights: ["Legal and contracts", "Portfolio governance", "Megaprojects", "35 PDUs for PMP"],
    edge: "Lowest fee here; 36-hour PMP prep with 35 PDUs",
    duration: "8 months",
    format: "Live online (Sun) + campus immersion",
    schedule: "Sunday, 9:00 AM – 12:00 PM IST",
    startDate: "25 Oct 2026",
    endDate: "Jul 2027",
    fee: "₹1,45,000",
    campusImmersion: "2 days, XLRI Delhi campus",
    campusShort: "2 days, Delhi",
    eligibility: "Graduate/diploma; minimum 1 year experience",
    eligibilityShort: "Graduate + 1 year",
    learningHours: "156 hours",
    tools: "MS Project (lifetime licence), JIRA, MS Excel",
    credential: "XLRI certificate; Executive Alumni Status optional (₹20,000)",
  },
];

export const faqs = [
  {
    question: "Six programmes is a lot. How do I work out which one is mine?",
    answer:
      "Start with your aim rather than the institute, and use the filters above. If you want the whole discipline from a name everyone recognises, IIM Indore has run this nineteen times. If the craft itself is the gap, IIT Delhi teaches Primavera P6, IIT Madras Pravartak goes quantitative with Monte Carlo and real options, and IIM Nagpur teaches Agile and Scrum in weekday evenings. If your projects are transformations, IIM Kozhikode goes furthest into analytics and AI. And if you need the organisational and legal context around projects, XLRI is built for that. A callback narrows six down to two in about fifteen minutes.",
  },
  {
    question: "Do these replace a PMP certification, or sit alongside it?",
    answer:
      "They sit alongside it, and three of them actively help you get there. IIM Nagpur, IIT Delhi and XLRI all bundle PMP exam preparation worth 35 PDUs, which is the training requirement PMI asks for. The difference is what each one certifies: PMP confirms you know a standard body of practice, while these programmes are taught by IIM, IIT and XLRI faculty and assessed on applied work, so they build judgement and carry an institute name Indian hiring managers recognise straight away.",
  },
  {
    question: "How much experience do I actually need?",
    answer:
      "It varies more than people expect. IIT Delhi and IIT Madras Pravartak ask only for a graduate degree in any discipline, with selection by application review. IIM Nagpur and XLRI ask for one year. IIM Indore asks for two. IIM Kozhikode sets the highest bar at three years of full-time experience post-qualification. IIM Nagpur will also consider applicants who are not currently working.",
  },
  {
    question: "I am an engineer. Will a management programme be too general for me?",
    answer:
      "It depends on what is actually blocking you. If your technical command is already strong and the obstacle is commercial or organisational, that wider lens is exactly the point — XLRI in particular covers the contracts, law and governance most engineers never see. If your projects slip on estimation, sequencing or risk instead, IIT Delhi's Primavera P6 work or IIT Madras Pravartak's Monte Carlo and real options modules will serve you better.",
  },
  {
    question: "My delivery schedule is unpredictable. Can I realistically finish?",
    answer:
      "Every programme here runs live outside working hours and is built for people in full-time roles. Four run on Saturdays and two on Sundays, and IIM Nagpur's 6:30 PM start suits people who lose their weekend days entirely. Commitments range from 6 months at IIM Indore and IIM Nagpur to 10 months at IIM Kozhikode. Attendance minimums sit between 50% and 75% depending on the institute.",
  },
  {
    question: "Do I have to travel, and what does the campus visit involve?",
    answer:
      "Campus immersion is built into four of the six and optional at the other two. IIM Kozhikode has the longest at five days, split two at the start and three at the end. IIM Indore runs three days and IIM Nagpur two. XLRI's two-day immersion is at its Delhi campus rather than Jamshedpur, which is worth knowing if you are planning travel. IIT Delhi and IIT Madras Pravartak make theirs optional. Travel and accommodation are at your own cost throughout.",
  },
  {
    question: "What do I hold at the end, and does alumni status come with it?",
    answer:
      "Every programme awards a certificate from the partner institute on meeting the attendance and assessment criteria. Alumni status is where they differ, and it is worth checking before you choose. IIM Nagpur includes it. IIM Kozhikode confers it from this batch onward with no separate fee. IIM Indore and XLRI offer it as an optional registration costing ₹10,000 and ₹20,000 respectively. The two IIT programmes issue e-certificates without an alumni track.",
  },
];

// Quotes and attributions are taken verbatim from the official programme brochures.
export const testimonials = [
  {
    quote:
      "Gaining new perspectives on familiar aspects of projects through defined terminology and formulae has truly clarified my vision. The faculty were both interactive and responsive.",
    author: "Sharad Goel",
    title: "DGM – Design, Patel Engineering Limited",
    programme: "IIM Nagpur PMP",
  },
  {
    quote:
      "This course has provided me the knowledge and confidence to take up higher role and responsibilities. Case study and their analysis provided the learnings from real-time scenario, from different sectors with different strategies.",
    author: "Anup R. Mahindrakar",
    title: "14 years' experience, IT industry",
    programme: "IIM Kozhikode PCPMP",
  },
  {
    quote:
      "I joined this programme as I wanted to become a project manager in NPD department. This programme has helped me gain more knowledge on project management tools, Risk Analysis, and Six Sigma.",
    author: "Krishnamoorthy S",
    title: "NPD Engineer",
    programme: "IIM Kozhikode PCPMP",
  },
];

export const faculty = [
  {
    name: "Prof. Prasanna",
    institute: "IIT Delhi",
    description:
      "Assistant Professor of Operations, DMS. Fellow of IIM Ahmedabad; previously New Product Development and project management at Mahindra Auto.",
  },
  {
    name: "Prof. Rohit Kapoor & Prof. Manoj Motiani",
    institute: "IIM Indore",
    description: "Operations Management & Quantitative Techniques, and Marketing.",
  },
  {
    name: "Prof. Rupesh Kumar Pati",
    institute: "IIM Kozhikode",
    description:
      "Professor of Quantitative Methods & Operations Management. PhD in Supply Chain Management from IIT Roorkee.",
  },
  {
    name: "Prof. Rajiv Misra",
    institute: "XLRI Jamshedpur",
    description:
      "Production, Operations & Decision Sciences. 25+ years teaching and consulting, including executive programmes for Tata Steel, Hero MotoCorp and ITC.",
  },
  {
    name: "Prof. Aditya Kumar Sahu",
    institute: "IIM Nagpur",
    description:
      "Production & Operations Management. PhD from IIM Kashipur; M.Tech in Industrial Engineering from IIT (ISM) Dhanbad.",
  },
  {
    name: "Dr. Murali Jagannathan",
    institute: "IIT Madras Pravartak",
    description:
      "Assistant Professor, Building Technology & Construction Management, IIT Madras. Specialises in construction contracts, claims and dispute resolution.",
  },
];
