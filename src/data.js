// All programme facts below are taken from the official brochures (Aug 2026 intake).
// Fees are exclusive of GST unless stated. Verify against the brochure before each
// batch refresh — start dates, fees and batch numbers change every cycle.

// The page sorts by what the visitor is trying to do, not by institute name. Every
// programme is tagged to exactly one aim so the router stays unambiguous.
export const aims = [
  {
    id: "start",
    label: "Get into project management",
    blurb:
      "You are doing project work without the title, or moving across from another function. You need the grounding and something on the CV that says so.",
  },
  {
    id: "craft",
    label: "Master the technical craft",
    blurb:
      "You already run projects. The ones landing on your desk now are bigger, and estimation, scheduling and risk need to hold up under real scrutiny.",
  },
  {
    id: "digital",
    label: "Lead projects in the AI and data era",
    blurb:
      "Your projects are digital transformations, or your reporting is moving from spreadsheets to analytics. You want the tooling that comes with that.",
  },
  {
    id: "lead",
    label: "Step up to programmes and portfolios",
    blurb:
      "You want to stop running one project well and start governing which projects the organisation runs at all.",
  },
];

export const programmes = [
  {
    id: "iitmp-cpapm",
    aim: "start",
    aimLabel: "Get into project management",
    institute: "IIT Madras Pravartak",
    instituteNote: "Technology Innovation Hub of IIT Madras",
    logo: "/assets/logos/iitm-pravartak.png",
    campusImage: "/assets/img/iit-madras-campus.jpg",
    name: "Certificate Programme in Advanced Project Management (Batch 01)",
    brochureUrl: "https://www.timespro.com/brochure/iitmp-cpapm",
    outcome:
      "A 20-hour capstone on a real project challenge, plus career support — resume and LinkedIn coaching, interview prep, and access to the TimesPro job portal.",
    bestFor:
      "Engineers and functional leads with 2–10 years' experience moving into project management and wanting help landing the role, not just the certificate.",
    duration: "7 months",
    format: "Live online (Sun) + optional campus immersion",
    schedule: "Sunday, 9:00 AM – 12:00 PM IST",
    startDate: "22 Aug 2026",
    endDate: "Feb 2027",
    fee: "₹1,65,000",
    campusImmersion: "Optional 1 day, IIT Madras Research Park",
    eligibility: "Graduates in any discipline",
    learningHours: "100+ hours",
    tools: "Jira, Asana, Miro, Notion, Figma",
    credential: "e-Certificate from IITM Pravartak",
    edge: "Career support included",
  },
  {
    id: "iimn-pmp",
    aim: "start",
    aimLabel: "Get into project management",
    institute: "IIM Nagpur",
    logo: "/assets/logos/iim-nagpur-new.jpg",
    campusImage: "/assets/img/iim-nagpur-campus.jpg",
    name: "Certificate Programme in Project Management (Batch 09)",
    brochureUrl: "https://www.timespro.com/brochure/iimn-pmp",
    outcome:
      "The only one that meets after work, 6:30 to 9:45 PM, so your Saturdays stay yours. IIM Nagpur alumni status is included rather than sold separately.",
    bestFor:
      "Professionals from any function — operations, finance, IT, HR — who want an IIM credential and the vocabulary of project management from a standing start.",
    duration: "6 months",
    format: "Live online (Sat evenings) + campus immersion",
    schedule: "Saturday, 6:30 PM – 9:45 PM IST",
    startDate: "5 Sep 2026",
    endDate: "Mar 2027",
    fee: "₹1,55,000",
    campusImmersion: "2 days, IIM Nagpur",
    eligibility: "Graduate/diploma; minimum 1 year experience",
    learningHours: "84 hours (72 online + 12 campus)",
    tools: "Agile, Scrum, Jira",
    credential: "IIM Nagpur certificate + IIM Nagpur alumni status",
    edge: "Evening classes; alumni status included",
    note: "Applicants who are not currently working may also apply.",
  },
  {
    id: "iitd-epapm",
    aim: "craft",
    aimLabel: "Master the technical craft",
    institute: "IIT Delhi",
    instituteNote: "Continuing Education Programme (CEP)",
    logo: "/assets/logos/iit-delhi.png",
    campusImage: "/assets/img/iit-delhi-campus.jpg",
    name: "Executive Programme in Advanced Project Management (Batch 05)",
    brochureUrl: "https://www.timespro.com/brochure/iitd-epapm",
    outcome:
      "Hands-on Primavera P6 — the scheduling tool large infrastructure and capital projects actually run on — taught against Harvard case studies.",
    bestFor:
      "Engineers and planners on infrastructure, energy and capital projects where the schedule and cost model have to survive audit.",
    duration: "7 months",
    format: "Live online (Sat) + optional campus immersion",
    schedule: "Saturday, 10:00 AM – 1:30 PM IST",
    startDate: "26 Sep 2026",
    endDate: "Mar 2027",
    fee: "₹1,64,000",
    campusImmersion: "Optional; travel and stay at your cost",
    eligibility: "Graduates in any discipline",
    learningHours: "3.5 hours per weekend",
    tools: "Primavera P6, Harvard case studies",
    credential: "e-Certificate from CEP, IIT Delhi",
    edge: "Primavera P6 + 30-hour PMP training with 35 PDUs",
  },
  {
    id: "iimi-cppm",
    aim: "craft",
    aimLabel: "Master the technical craft",
    institute: "IIM Indore",
    logo: "/assets/logos/iim-indore-new.jpg",
    campusImage: "/assets/img/iim-indore-campus.jpg",
    name: "Certificate Programme in Project Management (Batch 19)",
    brochureUrl: "https://www.timespro.com/brochure/iimi-cppm",
    outcome:
      "Nineteen batches in, this is the most travelled route on the page — 56 sessions covering the full lifecycle, from a triple-accredited IIM ranked 62nd globally for executive education.",
    bestFor:
      "Mid-career managers who want a proven, well-established IIM certificate and end-to-end command of the project lifecycle.",
    duration: "6 months",
    format: "Live online (Sat) + campus immersion",
    schedule: "Saturday, 9:00 AM – 1:15 PM IST",
    startDate: "3 Oct 2026",
    endDate: "Mar 2027",
    fee: "₹1,80,000",
    campusImmersion: "3 days, IIM Indore",
    eligibility: "Graduate/diploma with 50%; minimum 2 years' experience",
    learningHours: "~70 hours (56 sessions)",
    tools: "MS Project",
    credential: "IIM Indore certificate; Executive Education alumni status optional",
    edge: "19 batches run; FT-ranked 62nd globally",
  },
  {
    id: "iimk-pcpmp",
    aim: "digital",
    aimLabel: "Lead projects in the AI and data era",
    institute: "IIM Kozhikode",
    logo: "/assets/logos/iim-kozhikode-new.png",
    // No IIM Kozhikode campus photo in /public yet — card renders without an image.
    campusImage: null,
    name: "Professional Certificate Programme in Project Management (Batch 12)",
    brochureUrl: "https://www.timespro.com/brochure/iimk-pcpmp",
    outcome:
      "The deepest curriculum here — 42 modules over 10 months, including predictive and prescriptive analytics with Python, R and GenAI, plus digital transformation and ESG.",
    bestFor:
      "Project leaders running digital transformation, and anyone whose next step needs analytics on the CV alongside project management.",
    duration: "10 months",
    format: "Live online (Sat) + campus immersion",
    schedule: "Saturday, 9:15 AM – 12:30 PM IST",
    startDate: "3 Oct 2026",
    endDate: "Aug 2027",
    fee: "₹1,98,000",
    campusImmersion: "5 days (2 at start + 3 at end), IIM Kozhikode",
    eligibility: "Graduates; minimum 3 years' full-time experience",
    learningHours: "42 modules across 10 months",
    tools: "MS Project, Power BI, Python/R, GenAI",
    credential: "IIM Kozhikode certificate + Executive Alumni Status (new this batch)",
    edge: "Longest programme; analytics and AI built in",
  },
  {
    id: "xlri-edppmsp",
    aim: "lead",
    aimLabel: "Step up to programmes and portfolios",
    institute: "XLRI Jamshedpur",
    instituteNote: "Offered jointly with XLEAD",
    // No XLRI logo or campus photo in /public yet — both fall back to text.
    logo: null,
    campusImage: null,
    name: "Executive Development Programme in Project Management for Senior Professionals (Batch 12)",
    brochureUrl: "https://www.timespro.com/brochure/xlri-edppmsp",
    outcome:
      "Goes where the others stop: PMO charters, portfolio governance and megaproject delivery. Three-quarters of the last cohort had ten years or more behind them.",
    bestFor:
      "Senior project and programme managers who lead through other managers, and are moving towards PMO head, Head of Projects or Director roles.",
    duration: "8 months",
    format: "Live online (Sun) + campus immersion",
    schedule: "Sunday, 9:00 AM – 12:00 PM IST",
    startDate: "25 Oct 2026",
    endDate: "Jul 2027",
    fee: "₹1,45,000",
    campusImmersion: "2 days, XLRI Delhi campus",
    eligibility: "Graduate/diploma; minimum 1 year experience",
    learningHours: "156 hours",
    tools: "MS Project (lifetime licence), JIRA, MS Excel",
    credential: "XLRI certificate; Executive Alumni Status optional",
    edge: "Lowest fee; 36-hour PMP prep with 35 PDUs",
  },
];

export const faqs = [
  {
    question: "Six programmes is a lot. How do I work out which one is mine?",
    answer:
      "Start with your aim rather than the institute. If you are moving into project management, IIT Madras Pravartak and IIM Nagpur have the widest doors — Pravartak adds career support, IIM Nagpur adds alumni status. If the craft itself is the gap, IIT Delhi teaches Primavera P6 and IIM Indore teaches MS Project across the full lifecycle. If your projects are digital transformations, IIM Kozhikode goes furthest into analytics and AI. And if you are heading for PMO or portfolio ownership, XLRI is the one built for that. Use the comparison table to see them side by side, or ask for a callback and we will narrow it to two in about fifteen minutes.",
  },
  {
    question: "Do these replace a PMP certification, or sit alongside it?",
    answer:
      "They sit alongside it, and three of them actively help you get there. IIM Nagpur, IIT Delhi and XLRI all bundle PMP exam preparation with 35 PDUs, which is the training requirement PMI asks for. The difference is what each one certifies: PMP confirms you know a standard body of practice, while these programmes are taught by IIM, IIT and XLRI faculty and assessed on applied work, so they build judgement and carry an institute name Indian hiring managers recognise straight away.",
  },
  {
    question: "How much experience do I actually need?",
    answer:
      "It varies more than people expect. IIT Delhi and IIT Madras Pravartak ask only for a graduate degree in any discipline, with selection by application review. IIM Nagpur and XLRI ask for one year. IIM Indore asks for two. IIM Kozhikode sets the highest bar at three years of full-time experience post-qualification. IIM Nagpur will also consider applicants who are not currently working.",
  },
  {
    question: "I am an engineer. Will an IIM programme be too general for me?",
    answer:
      "It depends on what is actually blocking you. If your technical command is already strong and the obstacle is commercial — you deliver well but are not in the room when budgets are set — that broader lens is exactly the point. If your projects slip on estimation, sequencing or risk instead, IIT Delhi's Primavera P6 work or IIT Madras Pravartak's Monte Carlo and real options modules will serve you better. This is the most common question we get, and it is worth a callback before you apply.",
  },
  {
    question: "My delivery schedule is unpredictable. Can I realistically finish?",
    answer:
      "Every programme here runs live outside working hours and is built for people in full-time roles. Four run on Saturdays and two on Sundays, so you can pick around your week — IIM Nagpur's evening slot suits people who lose their weekend days. Commitments range from 6 months at IIM Nagpur and IIM Indore to 10 months at IIM Kozhikode. Attendance minimums sit between 50% and 75% depending on the institute.",
  },
  {
    question: "Do I have to travel, and what does the campus visit involve?",
    answer:
      "Campus immersion is built into four of the six and optional at the other two. IIM Kozhikode has the longest at five days, split two at the start and three at the end. IIM Indore runs three days and IIM Nagpur two. XLRI's two-day immersion is at its Delhi campus rather than Jamshedpur, which is worth knowing if you are planning travel. IIT Delhi and IIT Madras Pravartak make theirs optional. Travel and accommodation are at your own cost throughout.",
  },
  {
    question: "What do I hold at the end, and does alumni status come with it?",
    answer:
      "Every programme awards a certificate from the partner institute on meeting the attendance and assessment criteria. Alumni status differs, and it is worth checking before you choose. IIM Nagpur includes it. IIM Kozhikode confers it from this batch onward. IIM Indore and XLRI offer it as a separate optional registration with its own fee. The two IIT programmes issue e-certificates without an alumni track.",
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
