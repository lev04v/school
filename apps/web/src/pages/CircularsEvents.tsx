import { useState, useEffect } from "react";
import { PageId } from "../components/Header";
import NoticesAndEvents from "../components/NoticesAndEvents";
import { PageHero } from "../components/PageHero";

interface CircularsEventsProps {
  onNavigate: (page: PageId, targetSectionId?: string) => void;
  onOpenAdmissionModal: () => void;
}

export default function CircularsEvents({ onNavigate }: CircularsEventsProps) {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // When opening Academic Calendar / Circulars page, scroll smoothly to the Notice Board
    const hash = window.location.hash;
    if (!hash || hash === "#circulars" || hash === "#circulars/circulars" || !hash.includes("/")) {
      const timer = setTimeout(() => {
        const el = document.getElementById("circulars");
        if (el) {
          const navHeight = 90;
          const pos = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({ top: Math.max(0, pos), behavior: "smooth" });
        }
      }, 120);
      return () => clearTimeout(timer);
    }
  }, []);

  const allCirculars = [
    {
      id: 1,
      ref: "HA/ADM/26-27/01",
      category: "admissions",
      tag: "Admissions",
      date: "04 Oct 2026",
      title: "Online Registration Open for Session 2026-27 (Nursery to Class IX & XI 10+2 Streams)",
      audience: "Prospective Parents",
      urgent: true,
    },
    {
      id: 2,
      ref: "CBSE/COORD/2026/18",
      category: "cbse",
      tag: "CBSE Board",
      date: "28 Sep 2026",
      title: "CBSE AISSE & AISSCE Class 10/12 Board Practical Exam Schedule and Roll Number List",
      audience: "Class 10 & 12 Students",
      urgent: false,
    },
    {
      id: 3,
      ref: "HA/PTM/2026/04",
      category: "academic",
      tag: "Academic & PTM",
      date: "20 Sep 2026",
      title: "Parent-Teacher Meeting (PTM) for Term 1 Performance Review and Remedial Planning",
      audience: "Parents of Classes Nursery to XII",
      urgent: false,
    },
    {
      id: 4,
      ref: "HA/ATL/INNOV/09",
      category: "stem",
      tag: "ATL Innovation",
      date: "12 Sep 2026",
      title: "Selection of 12 Student Robotics Projects for National NITI Aayog ATL Marathon",
      audience: "Classes VI to XII STEM Teams",
      urgent: false,
    },
    {
      id: 5,
      ref: "HA/CCA/2026/08",
      category: "events",
      tag: "Co-Curricular",
      date: "02 Sep 2026",
      title: "Inter-House Bilingual Debate & Youth Parliament Competitions for Classes VIII to XII",
      audience: "Classes VIII to XII House Delegates",
      urgent: false,
    },
    {
      id: 6,
      ref: "HA/EXAM/26-03",
      category: "academic",
      tag: "Examinations",
      date: "25 Aug 2026",
      title: "Half-Yearly (Mid-Term) Examination Datesheet & Syllabus Guidelines for Classes VI to XII",
      audience: "Classes VI to XII",
      urgent: true,
    },
    {
      id: 7,
      ref: "CBSE/AFF/2026/07",
      category: "cbse",
      tag: "CBSE Board",
      date: "10 Aug 2026",
      title: "CBSE Registration of Class IX & XI Students for 2027 Board Examinations (OASIS Data Entry)",
      audience: "Classes IX & XI Students & Parents",
      urgent: false,
    },
    {
      id: 8,
      ref: "HA/SPORTS/2026/02",
      category: "events",
      tag: "Sports",
      date: "22 Jul 2026",
      title: "Zonal Interschool Football & Basketball Championship Selections at Horizon Sports Complex",
      audience: "U-14, U-17 & U-19 Sports Teams",
      urgent: false,
    },
    {
      id: 9,
      ref: "CBSE/ACAD/2026/12",
      category: "cbse",
      tag: "CBSE Board",
      date: "15 Aug 2026",
      title: "CBSE National Expression Series on Indian Freedom Movement & Heritage",
      audience: "All Students",
      urgent: false,
    },
  ];

  type EventCategory = "all" | "exam" | "holiday" | "ptm" | "event";
  type TermFilter = "all" | "term1" | "term2";
  type TimelineFilter = "upcoming" | "past" | "all";

  const [milestoneTab, setMilestoneTab] = useState<"upcoming" | "past">("upcoming");
  const [calTimeline, setCalTimeline] = useState<TimelineFilter>("upcoming");
  const [calCategory, setCalCategory] = useState<EventCategory>("all");
  const [calTerm, setCalTerm] = useState<TermFilter>("all");
  const [calSearchQuery, setCalSearchQuery] = useState("");
  const [visibleEventsCount, setVisibleEventsCount] = useState<number>(4);

  // Upcoming Milestones (from 10 September 2026 onwards)
  const upcomingSpotlightEvents = [
    {
      id: "sp-up-1",
      type: "exam" as const,
      badgeLabel: "Major Examination",
      title: "Half-Yearly (Mid-Term) Examinations 2026",
      dateTag: "14 Sep – 26 Sep 2026",
      desc: "Comprehensive Mid-Term assessments evaluating Term-1 competencies for Classes VI to XII. Timetable & syllabus guidelines published.",
      audience: "Classes VI – XII",
      timing: "08:30 AM – 11:45 AM",
      venue: "Main Examination Wing",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=75",
    },
    {
      id: "sp-up-2",
      type: "holiday" as const,
      badgeLabel: "National Observance",
      title: "Mahatma Gandhi Jayanti & Swachhta Abhiyan",
      dateTag: "02 Oct 2026 (Friday)",
      desc: "Commemoration of the Father of the Nation with special peace assembly, campus cleanliness drive, and khadi craft exhibition.",
      audience: "All Students & Staff",
      timing: "08:30 AM – 10:30 AM",
      venue: "School Amphitheatre",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=75",
    },
    {
      id: "sp-up-3",
      type: "holiday" as const,
      badgeLabel: "Festive Vacation",
      title: "Durga Puja & Dussehra Festive Vacation",
      dateTag: "19 Oct – 24 Oct 2026",
      desc: "Autumn festive break for students. Holiday homework booklets & ATL STEM challenges accessible via the ERP portal.",
      audience: "All Students (Nursery – XII)",
      timing: "School Reopens 26 Oct",
      venue: "Campus Closed",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=75",
    },
    {
      id: "sp-up-4",
      type: "event" as const,
      badgeLabel: "Innovation & STEM Fest",
      title: "Annual Inter-School ATL STEM & Robotics Expo",
      dateTag: "21 Nov 2026 (Saturday)",
      desc: "State-level science conclave showcasing student drone prototypes, IoT innovations, working robotics, and visual art gallery.",
      audience: "Participating Schools & Parents",
      timing: "09:00 AM – 03:30 PM",
      venue: "Horizon Auditorium & ATL Complex",
      imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=75",
    },
  ];

  // Past Milestones Archive (Concluded before 10 September 2026)
  const pastSpotlightEvents = [
    {
      id: "sp-past-1",
      type: "exam" as const,
      badgeLabel: "Concluded Examination",
      title: "Periodic Test 1 (PT-1) Examinations",
      dateTag: "11 May – 18 May 2026",
      desc: "First formal evaluative test covering Term-1 syllabus for Classes IX to XII. Successfully conducted and evaluated.",
      audience: "Classes IX – XII",
      timing: "08:30 AM – 11:30 AM",
      venue: "Examination Wing",
      imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=75",
    },
    {
      id: "sp-past-2",
      type: "holiday" as const,
      badgeLabel: "Concluded Vacation",
      title: "Summer Vacation Break 2026",
      dateTag: "21 May – 30 Jun 2026",
      desc: "Annual 40-day summer vacation for students with ATL STEM projects and creative writing challenges.",
      audience: "All Students (Nursery – XII)",
      timing: "Concluded",
      venue: "Campus Closed",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=75",
    },
    {
      id: "sp-past-3",
      type: "ptm" as const,
      badgeLabel: "Concluded Interaction",
      title: "Term-1 Parent-Teacher Meeting (PTM-1)",
      dateTag: "18 Jul 2026 (Saturday)",
      desc: "One-on-one session discussing PT-1 academic progress, attendance records, and remedial intervention planning.",
      audience: "All Parents & Guardians",
      timing: "08:30 AM – 01:30 PM",
      venue: "Respective Classrooms",
      imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=75",
    },
    {
      id: "sp-past-4",
      type: "event" as const,
      badgeLabel: "Concluded Celebration",
      title: "80th Independence Day & Inter-House Fest",
      dateTag: "15 Aug 2026 (Saturday)",
      desc: "Flag hoisting by Chairman Sir, patriotic choir recital, NCC parade march-past, and inter-house elocution finals.",
      audience: "Whole Horizon Community",
      timing: "08:00 AM – 11:30 AM",
      venue: "Central Turf Ground",
      imageUrl: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=600&q=75",
    },
  ];

  const academicEvents = [
  {
    "id": 1,
    "term": "term1",
    "type": "event",
    "categoryLabel": "Session Inauguration",
    "month": "APR",
    "day": "01",
    "weekday": "Wed",
    "title": "Commencement of Academic Session 2026–27",
    "description": "Orientation assembly, distribution of CBSE curriculum handbooks, and introduction of new skill-based subjects for the academic year.",
    "audience": "Classes Nursery to XII",
    "time": "07:45 AM – 01:45 PM",
    "venue": "Main Amphitheatre & Classrooms",
    "actionLabel": "View Syllabus",
    "isPast": true
  },
  {
    "id": 2,
    "term": "term1",
    "type": "event",
    "categoryLabel": "Health & Wellness",
    "month": "APR",
    "day": "07",
    "weekday": "Tue",
    "title": "World Health Day & Annual Student Medical Checkup",
    "description": "Comprehensive health, eye screening, and dental evaluation conducted by pediatric specialists for all enrolled students.",
    "audience": "All Students (Nursery – XII)",
    "time": "08:30 AM – 01:30 PM",
    "venue": "School Wellness Infirmary",
    "actionLabel": "Health Circular",
    "isPast": true
  },
  {
    "id": 3,
    "term": "term1",
    "type": "holiday",
    "categoryLabel": "Gazetted Holiday",
    "month": "APR",
    "day": "10",
    "weekday": "Fri",
    "title": "Good Friday Holiday",
    "description": "Gazetted national holiday in commemoration of the crucifixion of Jesus Christ. School administrative offices remain closed.",
    "audience": "All Students & Staff",
    "time": "Full Day Holiday",
    "venue": "Campus Closed",
    "actionLabel": "Holiday Order",
    "isPast": true
  },
  {
    "id": 4,
    "term": "term1",
    "type": "holiday",
    "categoryLabel": "National Observance",
    "month": "APR",
    "day": "14",
    "weekday": "Tue",
    "title": "Dr. B.R. Ambedkar Jayanti & National Equity Day",
    "description": "Commemoration of Babasaheb Dr. B.R. Ambedkar's birth anniversary. Digital essay and speech competitions on the Constitution of India.",
    "audience": "All Students & Staff",
    "time": "Full Day Holiday",
    "venue": "Campus Closed",
    "actionLabel": "Ambedkar Tribute",
    "isPast": true
  },
  {
    "id": 5,
    "term": "term1",
    "type": "event",
    "categoryLabel": "Eco-Action Drive",
    "month": "APR",
    "day": "22",
    "weekday": "Wed",
    "title": "Earth Day Campus Tree Plantation & Zero-Plastic Pledge",
    "description": "Mass sapling planting drive by Horizon Eco-Club, renewable energy exhibition, and campus-wide single-use plastic eradication drive.",
    "audience": "Eco-Club & Classes VI – X",
    "time": "08:15 AM – 11:00 AM",
    "venue": "Botanical Gardens & Campus Lawns",
    "actionLabel": "Eco Report",
    "isPast": true
  },
  {
    "id": 6,
    "term": "term1",
    "type": "ptm",
    "categoryLabel": "Parent Orientation",
    "month": "APR",
    "day": "25",
    "weekday": "Sat",
    "title": "New Session Orientation & Welcome PTM",
    "description": "Interactive briefing for parents of newly admitted scholars and board aspirants detailing NEP 2020 pedagogical modules and ERP portal.",
    "audience": "Parents of Nursery, VI, IX & XI",
    "time": "09:00 AM – 01:00 PM",
    "venue": "Auditorium & Classrooms",
    "actionLabel": "PTM Schedule",
    "isPast": true
  },
  {
    "id": 7,
    "term": "term1",
    "type": "event",
    "categoryLabel": "Literary Fest",
    "month": "MAY",
    "day": "07",
    "weekday": "Thu",
    "title": "Rabindranath Tagore Jayanti & Inter-House Poetry Conclave",
    "description": "Special morning assembly honoring Gurudev Rabindranath Tagore featuring recitation of Gitanjali poems, dance drama, and art recitals.",
    "audience": "Middle & Senior Wing Students",
    "time": "08:00 AM – 10:30 AM",
    "venue": "School Auditorium",
    "actionLabel": "Tagore Gallery",
    "isPast": true
  },
  {
    "id": 8,
    "term": "term1",
    "type": "exam",
    "categoryLabel": "Unit Assessment",
    "month": "MAY",
    "day": "11",
    "weekday": "Mon",
    "title": "Periodic Test 1 (PT-1) Begins (Classes IX to XII)",
    "description": "First formal evaluative test covering Term-1 initial syllabus units for senior classes across Science, Commerce, and Humanities streams.",
    "audience": "Classes IX, X, XI & XII",
    "time": "08:30 AM – 11:30 AM",
    "venue": "Senior Examination Wing",
    "actionLabel": "Datesheet PDF",
    "isPast": true
  },
  {
    "id": 9,
    "term": "term1",
    "type": "holiday",
    "categoryLabel": "Gazetted Holiday",
    "month": "MAY",
    "day": "16",
    "weekday": "Sat",
    "title": "Buddha Purnima Holiday",
    "description": "Commemoration of the birth, enlightenment, and parinirvana of Gautama Buddha. School closed for students and teaching faculty.",
    "audience": "All Students & Staff",
    "time": "Full Day Holiday",
    "venue": "Campus Closed",
    "actionLabel": "Holiday Letter",
    "isPast": true
  },
  {
    "id": 10,
    "term": "term1",
    "type": "holiday",
    "categoryLabel": "Summer Vacation",
    "month": "MAY",
    "day": "21",
    "weekday": "Thu",
    "title": "Summer Vacation Commences (21 May – 30 Jun 2026)",
    "description": "40-day summer vacation. ATL robotics DIY challenges, digital coding tracks, and holiday homework booklets assigned through parent portal.",
    "audience": "Classes Nursery to XII",
    "time": "School Reopens 01 Jul",
    "venue": "Campus Closed",
    "actionLabel": "Holiday Work",
    "isPast": true
  },
  {
    "id": 11,
    "term": "term1",
    "type": "holiday",
    "categoryLabel": "Gazetted Holiday",
    "month": "JUN",
    "day": "17",
    "weekday": "Wed",
    "title": "Eid-ul-Adha (Bakrid) Holiday",
    "description": "Festival of sacrifice observed with greetings of peace and brotherhood. School office operations remain suspended.",
    "audience": "All Students & Staff",
    "time": "Full Day Holiday",
    "venue": "Campus Closed",
    "actionLabel": "Festival Notice",
    "isPast": true
  },
  {
    "id": 12,
    "term": "term1",
    "type": "event",
    "categoryLabel": "International Day",
    "month": "JUN",
    "day": "21",
    "weekday": "Sun",
    "title": "12th International Yoga Day & World Music Day Assembly",
    "description": "Mass yoga protocol demonstrated on school grounds with pranayama sessions, accompanied by faculty instrumental orchestra.",
    "audience": "Students, Parents & Faculty",
    "time": "06:30 AM – 08:30 AM",
    "venue": "Central Turf Arena",
    "actionLabel": "Yoga Photos",
    "isPast": true
  },
  {
    "id": 13,
    "term": "term1",
    "type": "event",
    "categoryLabel": "Leadership Ceremony",
    "month": "JUL",
    "day": "01",
    "weekday": "Wed",
    "title": "School Reopens & Student Council Investiture Ceremony",
    "description": "Campus buzzing after summer recess; formal sash and badge investiture for Head Boy, Head Girl, Sports Captain, and House Prefects.",
    "audience": "Whole School Community",
    "time": "08:00 AM – 11:00 AM",
    "venue": "Central Turf Arena",
    "actionLabel": "Council Roster",
    "isPast": true
  },
  {
    "id": 14,
    "term": "term1",
    "type": "ptm",
    "categoryLabel": "Academic Consultation",
    "month": "JUL",
    "day": "18",
    "weekday": "Sat",
    "title": "PT-1 Progress Review & Open House PTM",
    "description": "Detailed one-on-one parent-educator discussions reviewing PT-1 performance, attendance regularity, and bridge course progress.",
    "audience": "Parents of Classes I to XII",
    "time": "08:30 AM – 01:30 PM",
    "venue": "Assigned Classrooms",
    "actionLabel": "Book Time Slot",
    "isPast": true
  },
  {
    "id": 15,
    "term": "term1",
    "type": "event",
    "categoryLabel": "National Tribute",
    "month": "JUL",
    "day": "26",
    "weekday": "Sun",
    "title": "Kargil Vijay Diwas Tribute & NCC Guard of Honour",
    "description": "Salute to the valiant armed forces with an inspiring multimedia documentary, patriotic choir, and ceremonial floral wreath laying.",
    "audience": "NCC Cadets & Senior Classes",
    "time": "08:30 AM – 10:15 AM",
    "venue": "War Memorial Plaque & Hall",
    "actionLabel": "Tribute Note",
    "isPast": true
  },
  {
    "id": 16,
    "term": "term1",
    "type": "event",
    "categoryLabel": "Inter-House Contest",
    "month": "AUG",
    "day": "08",
    "weekday": "Sat",
    "title": "Inter-House Parliamentary Debate & Western Music Fest",
    "description": "Fierce intellectual rounds between Everest, Nilgiri, Shivalik, and Aravali houses on Artificial Intelligence ethics and global geopolitics.",
    "audience": "Classes VIII to XII",
    "time": "09:00 AM – 02:00 PM",
    "venue": "Main Auditorium",
    "actionLabel": "Results Sheet",
    "isPast": true
  },
  {
    "id": 17,
    "term": "term1",
    "type": "event",
    "categoryLabel": "National Festival",
    "month": "AUG",
    "day": "15",
    "weekday": "Sat",
    "title": "80th Independence Day Celebration & Flag Hoisting",
    "description": "Tricolor unfurling by Chairman Sir, NCC contingent march-past, patriotic dance drama 'Vande Mataram', and distribution of sweet treats.",
    "audience": "Whole Horizon Community",
    "time": "08:00 AM – 11:30 AM",
    "venue": "School Parade Grounds",
    "actionLabel": "Event Video",
    "isPast": true
  },
  {
    "id": 18,
    "term": "term1",
    "type": "ptm",
    "categoryLabel": "Board Strategy",
    "month": "AUG",
    "day": "22",
    "weekday": "Sat",
    "title": "Class X & XII Board Strategy & Academic Guidance PTM",
    "description": "Counseling seminar on CBSE board pattern changes, marking rubrics, internal assessment portfolio compilation, and stress management.",
    "audience": "Parents of Classes X & XII",
    "time": "09:00 AM – 01:00 PM",
    "venue": "Senior Wing Classrooms",
    "actionLabel": "Strategy Guide",
    "isPast": true
  },
  {
    "id": 19,
    "term": "term1",
    "type": "holiday",
    "categoryLabel": "Gazetted Holiday",
    "month": "AUG",
    "day": "26",
    "weekday": "Wed",
    "title": "Raksha Bandhan Holiday",
    "description": "Traditional festival holiday honoring fraternal bonds and family values. Administrative and academic desks remain non-operational.",
    "audience": "All Students & Staff",
    "time": "Full Day Holiday",
    "venue": "Campus Closed",
    "actionLabel": "Holiday Notice",
    "isPast": true
  },
  {
    "id": 20,
    "term": "term1",
    "type": "event",
    "categoryLabel": "Sports Championship",
    "month": "AUG",
    "day": "29",
    "weekday": "Sat",
    "title": "National Sports Day & Major Dhyan Chand Inter-House Trophy",
    "description": "Celebration of hockey legend Major Dhyan Chand's birth anniversary with inter-house track relays, football friendlies, and basketball finals.",
    "audience": "Students & Sports Faculty",
    "time": "07:30 AM – 01:00 PM",
    "venue": "Horizon Sports Complex",
    "actionLabel": "Match Scores",
    "isPast": true
  },
  {
    "id": 21,
    "term": "term1",
    "type": "holiday",
    "categoryLabel": "Festive Holiday",
    "month": "SEP",
    "day": "04",
    "weekday": "Fri",
    "title": "Krishna Janmashtami Festival Holiday",
    "description": "Festive holiday celebrating the birth of Lord Krishna. Classical dance tributes and traditional Dahi Handi festivities concluded virtually.",
    "audience": "All Students & Staff",
    "time": "Full Day Holiday",
    "venue": "Campus Closed",
    "actionLabel": "Festival Letter",
    "isPast": true
  },
  {
    "id": 22,
    "term": "term1",
    "type": "event",
    "categoryLabel": "Special Observance",
    "month": "SEP",
    "day": "05",
    "weekday": "Sat",
    "title": "Teachers' Day Tribute & Student Council Lead",
    "description": "Senior students step into the role of apprentice educators; student council hosts gala cultural musical and felicitation banquet for teachers.",
    "audience": "Whole School Community",
    "time": "08:30 AM – 01:30 PM",
    "venue": "Main Auditorium",
    "actionLabel": "Gallery Photos",
    "isPast": true
  },
  {
    "id": 23,
    "term": "term1",
    "type": "exam",
    "categoryLabel": "Major Examination",
    "month": "SEP",
    "day": "14",
    "weekday": "Mon",
    "title": "Half-Yearly (Mid-Term) Examinations 2026 Begins (Classes VI – XII)",
    "description": "Crucial Mid-Term evaluative examinations based on 50% cumulative CBSE syllabus for Classes VI to XII. Timetable & syllabus published.",
    "audience": "Classes VI to XII",
    "time": "08:30 AM – 11:45 AM",
    "venue": "Designated Examination Halls",
    "actionLabel": "Datesheet PDF",
    "isPast": false
  },
  {
    "id": 24,
    "term": "term1",
    "type": "holiday",
    "categoryLabel": "Gazetted Holiday",
    "month": "SEP",
    "day": "16",
    "weekday": "Wed",
    "title": "Eid-e-Milad (Milad-un-Nabi) Holiday",
    "description": "Gazetted government holiday commemorating the birth of Prophet Muhammad. Mid-term examination schedule adjusted accordingly.",
    "audience": "All Students & Staff",
    "time": "Full Day Holiday",
    "venue": "Campus Closed",
    "actionLabel": "Holiday Notice",
    "isPast": false
  },
  {
    "id": 25,
    "term": "term1",
    "type": "event",
    "categoryLabel": "Zonal Tournament",
    "month": "SEP",
    "day": "28",
    "weekday": "Mon",
    "title": "CBSE Zonal Athletics, Football & Basketball Championship",
    "description": "Horizon Academy hosts 32 schools across the state for 4-day prestigious zonal sporting trials and selection for National Games.",
    "audience": "Athletes & Student Delegates",
    "time": "08:00 AM – 04:30 PM",
    "venue": "Horizon Sports Complex & Synthetic Turf",
    "actionLabel": "Tournament Fixtures",
    "isPast": false
  },
  {
    "id": 26,
    "term": "term2",
    "type": "holiday",
    "categoryLabel": "National Holiday",
    "month": "OCT",
    "day": "02",
    "weekday": "Fri",
    "title": "Mahatma Gandhi Jayanti & Swachhta Abhiyan",
    "description": "National tribute to Mahatma Gandhi and Lal Bahadur Shastri. Community cleanliness drive, peace march, and spinning wheel exhibition.",
    "audience": "All Students & Staff",
    "time": "08:30 AM – 10:30 AM",
    "venue": "Campus & Surroundings",
    "actionLabel": "Drive Details",
    "isPast": false
  },
  {
    "id": 27,
    "term": "term2",
    "type": "ptm",
    "categoryLabel": "Mid-Term PTM",
    "month": "OCT",
    "day": "10",
    "weekday": "Sat",
    "title": "Half-Yearly Report Card Distribution & Term-1 PTM",
    "description": "Comprehensive review of Half-Yearly marks, answer scripts verification, subject performance analysis, and goal setting for Term 2.",
    "audience": "Parents of Nursery to XII",
    "time": "08:30 AM – 02:00 PM",
    "venue": "Assigned Classrooms",
    "actionLabel": "Book Time Slot",
    "isPast": false
  },
  {
    "id": 28,
    "term": "term2",
    "type": "holiday",
    "categoryLabel": "Festive Vacation",
    "month": "OCT",
    "day": "19",
    "weekday": "Mon",
    "title": "Durga Puja & Dussehra Vacation (19 – 24 Oct 2026)",
    "description": "Autumn festive break. Special holiday assignment packets available via ERP. School reopens on Monday, 26 October 2026.",
    "audience": "Classes Nursery to XII",
    "time": "School Reopens 26 Oct",
    "venue": "Campus Closed",
    "actionLabel": "Holiday Letter",
    "isPast": false
  },
  {
    "id": 29,
    "term": "term2",
    "type": "holiday",
    "categoryLabel": "Gazetted Holiday",
    "month": "OCT",
    "day": "26",
    "weekday": "Mon",
    "title": "Maharishi Valmiki Jayanti Observance",
    "description": "Observance of the birth anniversary of the adi-kavi author of Ramayana. Special morning assembly presentation on poetic heritage.",
    "audience": "All Students & Staff",
    "time": "Full Day Holiday",
    "venue": "Campus Closed",
    "actionLabel": "Observance Circular",
    "isPast": false
  },
  {
    "id": 30,
    "term": "term2",
    "type": "exam",
    "categoryLabel": "Board Assessment",
    "month": "NOV",
    "day": "02",
    "weekday": "Mon",
    "title": "CBSE Class X & XII LOC Board Registration Verification",
    "description": "Mandatory verification of student bio-data, subject choices, and Aadhaar linking on the CBSE Pariksha Sangam portal.",
    "audience": "Parents & Students of Classes X & XII",
    "time": "09:00 AM – 02:30 PM",
    "venue": "Administrative Examination Wing",
    "actionLabel": "Check Data",
    "isPast": false
  },
  {
    "id": 31,
    "term": "term2",
    "type": "holiday",
    "categoryLabel": "Major Festive Vacation",
    "month": "NOV",
    "day": "08",
    "weekday": "Sun",
    "title": "Diwali, Govardhan Puja & Chhath Puja Vacation (08 – 14 Nov)",
    "description": "7-day festive holiday break for Deepawali, Lakshmi Puja, and Chhath celebrations. Green Diwali eco-pledge campaign by students.",
    "audience": "All Students & Staff",
    "time": "Campus Reopens 16 Nov",
    "venue": "Campus Closed",
    "actionLabel": "Safety Circular",
    "isPast": false
  },
  {
    "id": 32,
    "term": "term2",
    "type": "event",
    "categoryLabel": "Innovation Expo",
    "month": "NOV",
    "day": "21",
    "weekday": "Sat",
    "title": "Annual Inter-School ATL STEM, Robotics & Art Expo",
    "description": "Grand statewide showcase featuring student-engineered IoT prototypes, working robotics, automated drones, and visual arts gallery.",
    "audience": "Students, Parents & Guest Delegations",
    "time": "09:00 AM – 03:30 PM",
    "venue": "Horizon Auditorium & Innovation Labs",
    "actionLabel": "Project Entry",
    "isPast": false
  },
  {
    "id": 33,
    "term": "term2",
    "type": "holiday",
    "categoryLabel": "Gazetted Holiday",
    "month": "NOV",
    "day": "24",
    "weekday": "Tue",
    "title": "Guru Tegh Bahadur Martyrdom Day Holiday",
    "description": "Solemn observance commemorating the sacrifice of the ninth Sikh Guru for religious freedom and civil liberties.",
    "audience": "All Students & Staff",
    "time": "Full Day Holiday",
    "venue": "Campus Closed",
    "actionLabel": "Holiday Notice",
    "isPast": false
  },
  {
    "id": 34,
    "term": "term2",
    "type": "event",
    "categoryLabel": "National Observance",
    "month": "NOV",
    "day": "26",
    "weekday": "Thu",
    "title": "Samvidhan Diwas (National Constitution Day) Assembly",
    "description": "Collective reading of the Preamble to the Constitution of India, youth mock parliament session, and legal awareness workshop.",
    "audience": "Classes VI to XII",
    "time": "08:15 AM – 10:00 AM",
    "venue": "Central Amphitheatre",
    "actionLabel": "Preamble Text",
    "isPast": false
  },
  {
    "id": 35,
    "term": "term2",
    "type": "holiday",
    "categoryLabel": "Gazetted Holiday",
    "month": "NOV",
    "day": "27",
    "weekday": "Fri",
    "title": "Guru Nanak Jayanti (Gurpurab) & Kartik Purnima",
    "description": "Festive holiday celebrating the birth anniversary of Guru Nanak Dev Ji. Special community kitchen (langar) service awareness.",
    "audience": "All Students & Staff",
    "time": "Full Day Holiday",
    "venue": "Campus Closed",
    "actionLabel": "Festival Letter",
    "isPast": false
  },
  {
    "id": 36,
    "term": "term2",
    "type": "event",
    "categoryLabel": "Annual Sports Meet",
    "month": "DEC",
    "day": "05",
    "weekday": "Sat",
    "title": "Annual Sports Day & Athletic Meet 'Olympiad 2026'",
    "description": "Flag march, torch relay, 100m sprint finals, high jump, obstacle course races, and rolling house championship trophy distribution.",
    "audience": "Students, Parents & Alumni",
    "time": "08:00 AM – 02:00 PM",
    "venue": "Horizon Stadium & Track",
    "actionLabel": "Schedule & Events",
    "isPast": false
  },
  {
    "id": 37,
    "term": "term2",
    "type": "exam",
    "categoryLabel": "Periodic Assessment",
    "month": "DEC",
    "day": "07",
    "weekday": "Mon",
    "title": "Periodic Test 2 (PT-2) for Classes I to IX & XI",
    "description": "Term-2 diagnostic assessment evaluating mastery of topics taught post-half-yearly examinations. Prepares students for final session exams.",
    "audience": "Classes I to IX, XI",
    "time": "08:30 AM – 11:30 AM",
    "venue": "Classrooms & Exam Wings",
    "actionLabel": "PT-2 Syllabus",
    "isPast": false
  },
  {
    "id": 38,
    "term": "term2",
    "type": "exam",
    "categoryLabel": "Pre-Board Series",
    "month": "DEC",
    "day": "14",
    "weekday": "Mon",
    "title": "CBSE Pre-Board Examination Series 1 (Classes X & XII)",
    "description": "Rigorous 100% CBSE syllabus simulation under strict examination centre invigilation. External evaluators calibrate answer sheets.",
    "audience": "Board Aspirants (Classes X & XII)",
    "time": "08:30 AM – 12:00 PM",
    "venue": "Senior Examination Enclave",
    "actionLabel": "Datesheet PDF",
    "isPast": false
  },
  {
    "id": 39,
    "term": "term2",
    "type": "event",
    "categoryLabel": "Winter Carnival",
    "month": "DEC",
    "day": "19",
    "weekday": "Sat",
    "title": "Horizon Winter Carnival & Student Entrepreneurship Fair",
    "description": "Festive family day with student-managed food kiosks, games, live musical bands, robotics arena, and Christmas tree lighting.",
    "audience": "Students, Families & Guests",
    "time": "10:00 AM – 04:30 PM",
    "venue": "School Central Plaza",
    "actionLabel": "Carnival Passes",
    "isPast": false
  },
  {
    "id": 40,
    "term": "term2",
    "type": "event",
    "categoryLabel": "Mathematics Conclave",
    "month": "DEC",
    "day": "22",
    "weekday": "Tue",
    "title": "National Mathematics Day & Srinivasa Ramanujan Quiz",
    "description": "Celebrating legendary mathematician Ramanujan's legacy with Vedic math speed-calculation contests, Rubik's cube championships, and origami geometry.",
    "audience": "Classes IV to XII",
    "time": "08:30 AM – 11:30 AM",
    "venue": "Mathematics Innovation Lab",
    "actionLabel": "Quiz Roster",
    "isPast": false
  },
  {
    "id": 41,
    "term": "term2",
    "type": "holiday",
    "categoryLabel": "National Holiday",
    "month": "DEC",
    "day": "25",
    "weekday": "Fri",
    "title": "Christmas Day Festival Holiday",
    "description": "Joyful commemoration of the Nativity with Christmas carols and goodwill messages. School remains closed for holiday.",
    "audience": "All Students & Staff",
    "time": "Full Day Holiday",
    "venue": "Campus Closed",
    "actionLabel": "Holiday Notice",
    "isPast": false
  },
  {
    "id": 42,
    "term": "term2",
    "type": "ptm",
    "categoryLabel": "Performance Review",
    "month": "DEC",
    "day": "26",
    "weekday": "Sat",
    "title": "Pre-Board 1 Result Review & Career Guidance PTM",
    "description": "Distribution of Pre-Board 1 report cards, answer sheet discussions, doubt clearance roadmaps, and career counseling for senior students.",
    "audience": "Parents of Classes X & XII",
    "time": "09:00 AM – 01:30 PM",
    "venue": "Senior Wing Classrooms",
    "actionLabel": "Meeting Slot",
    "isPast": false
  },
  {
    "id": 43,
    "term": "term2",
    "type": "holiday",
    "categoryLabel": "Winter Vacation",
    "month": "DEC",
    "day": "28",
    "weekday": "Mon",
    "title": "Winter Break Commences (28 Dec 2026 – 06 Jan 2027)",
    "description": "10-day winter vacation for all students. Online remedial booster masterclasses continue for Class X and XII board examinees.",
    "audience": "All Students (Nursery – XII)",
    "time": "Reopens 07 Jan 2027",
    "venue": "Campus Closed",
    "actionLabel": "Winter Schedule",
    "isPast": false
  },
  {
    "id": 44,
    "term": "term2",
    "type": "event",
    "categoryLabel": "Term Resumption",
    "month": "JAN",
    "day": "07",
    "weekday": "Thu",
    "title": "School Reopens After Winter Break (Winter Timings Active)",
    "description": "Regular classes resume with updated winter schedule (08:30 AM to 02:30 PM). Blazers and winter uniforms mandatory for all scholars.",
    "audience": "All Students & Staff",
    "time": "08:30 AM – 02:30 PM",
    "venue": "School Campus",
    "actionLabel": "Winter Timetable",
    "isPast": false
  },
  {
    "id": 45,
    "term": "term2",
    "type": "exam",
    "categoryLabel": "Pre-Board & Practicals",
    "month": "JAN",
    "day": "11",
    "weekday": "Mon",
    "title": "CBSE Pre-Board Series 2 & Practical External Viva Examinations",
    "description": "Final rehearsal before CBSE board exams including external viva-voce for Physics, Chemistry, Biology, Computer Science, and Accountancy.",
    "audience": "Classes X & XII",
    "time": "08:30 AM – 12:30 PM",
    "venue": "Science & Computer Labs",
    "actionLabel": "Lab Batch List",
    "isPast": false
  },
  {
    "id": 46,
    "term": "term2",
    "type": "holiday",
    "categoryLabel": "Harvest Festival",
    "month": "JAN",
    "day": "14",
    "weekday": "Thu",
    "title": "Makar Sankranti, Pongal & Maghi Festival Holiday",
    "description": "Harvest festival holidays across India. Kite flying safety awareness circular issued for students and residential colonies.",
    "audience": "All Students & Staff",
    "time": "Full Day Holiday",
    "venue": "Campus Closed",
    "actionLabel": "Festival Letter",
    "isPast": false
  },
  {
    "id": 47,
    "term": "term2",
    "type": "event",
    "categoryLabel": "Annual Cultural Fest",
    "month": "JAN",
    "day": "16",
    "weekday": "Sat",
    "title": "Annual Cultural Conclave 'Umang 2027' & Excellence Awards",
    "description": "Spectacular evening of theatrical arts, classical dance recitals, symphony choir, and conferral of Scholar Badges to academic toppers.",
    "audience": "Students, Parents & Dignitaries",
    "time": "04:30 PM – 08:30 PM",
    "venue": "Horizon Grand Auditorium",
    "actionLabel": "Fest Program",
    "isPast": false
  },
  {
    "id": 48,
    "term": "term2",
    "type": "ptm",
    "categoryLabel": "Board Final Review",
    "month": "JAN",
    "day": "23",
    "weekday": "Sat",
    "title": "Pre-Board 2 Result & CBSE Board Admit Card Distribution PTM",
    "description": "Release of Pre-Board 2 performance, distribution of official CBSE Board Admit Cards, verification of roll numbers, and counseling.",
    "audience": "Parents of Classes X & XII",
    "time": "08:30 AM – 02:00 PM",
    "venue": "Senior Wing Classrooms",
    "actionLabel": "Counseling Note",
    "isPast": false
  },
  {
    "id": 49,
    "term": "term2",
    "type": "event",
    "categoryLabel": "National Festival",
    "month": "JAN",
    "day": "26",
    "weekday": "Tue",
    "title": "78th Republic Day Parade & Tricolor Ceremony",
    "description": "Ceremonial flag unfurling, National Anthem recital, precision march past by 4 houses and NCC cadets, and patriotic tableaus.",
    "audience": "Horizon Community & Alumni",
    "time": "08:15 AM – 11:30 AM",
    "venue": "School Parade Grounds",
    "actionLabel": "Parade Photos",
    "isPast": false
  },
  {
    "id": 50,
    "term": "term2",
    "type": "event",
    "categoryLabel": "Alumni Mentorship",
    "month": "JAN",
    "day": "30",
    "weekday": "Sat",
    "title": "Martyrs' Day Observance & Horizon Alumni Mentorship Conclave",
    "description": "Two-minute silence observed in honor of Mahatma Gandhi and martyrs, followed by interaction with alumni from IIT, AIIMS, and IIM.",
    "audience": "Classes IX to XII",
    "time": "09:00 AM – 01:00 PM",
    "venue": "Conference Hall",
    "actionLabel": "Alumni Panel",
    "isPast": false
  },
  {
    "id": 51,
    "term": "term2",
    "type": "event",
    "categoryLabel": "Senior Farewell",
    "month": "FEB",
    "day": "06",
    "weekday": "Sat",
    "title": "Blessing Ceremony & Farewell Gala for Outgoing Class XII",
    "description": "Traditional havan ritual, lighting of the lamp of knowledge, issuance of mementos and citations to the passing out batch of 2026–27.",
    "audience": "Classes XI & XII, Faculty",
    "time": "10:30 AM – 03:00 PM",
    "venue": "Main Auditorium",
    "actionLabel": "Citation Booklet",
    "isPast": false
  },
  {
    "id": 52,
    "term": "term2",
    "type": "holiday",
    "categoryLabel": "Auspicious Observance",
    "month": "FEB",
    "day": "11",
    "weekday": "Thu",
    "title": "Vasant Panchami & Saraswati Puja Celebration",
    "description": "Tribute to Goddess Saraswati, patron of wisdom and arts. Traditional yellow attire, book blessing ceremony, and hymn chanting.",
    "audience": "All Students & Staff",
    "time": "08:30 AM – 11:00 AM",
    "venue": "Amphitheatre & Closed After Puja",
    "actionLabel": "Puja Circular",
    "isPast": false
  },
  {
    "id": 53,
    "term": "term2",
    "type": "exam",
    "categoryLabel": "CBSE Board Exams",
    "month": "FEB",
    "day": "15",
    "weekday": "Mon",
    "title": "CBSE AISSE & AISSCE Final Board Examinations 2027",
    "description": "Nationwide commencement of Central Board of Secondary Education examinations for 10th and 12th standards at assigned external centres.",
    "audience": "Board Registered Students",
    "time": "10:30 AM – 01:30 PM",
    "venue": "CBSE Designated Centres",
    "actionLabel": "CBSE Guidelines",
    "isPast": false
  },
  {
    "id": 54,
    "term": "term2",
    "type": "exam",
    "categoryLabel": "Annual Examination",
    "month": "FEB",
    "day": "22",
    "weekday": "Mon",
    "title": "Annual Final Examination (Nursery to Classes IX & XI)",
    "description": "End-of-year summative examinations determining academic proficiency and grade promotion for all junior and senior non-board grades.",
    "audience": "Classes Nursery to IX, XI",
    "time": "08:30 AM – 11:45 AM",
    "venue": "School Examination Wings",
    "actionLabel": "Datesheet PDF",
    "isPast": false
  },
  {
    "id": 55,
    "term": "term2",
    "type": "event",
    "categoryLabel": "National Science Day",
    "month": "FEB",
    "day": "28",
    "weekday": "Sun",
    "title": "National Science Day & Raman Effect Innovation Walk",
    "description": "Celebrating Sir C.V. Raman's discovery with hands-on physics exhibits, astronomical telescope viewing, and interactive chemistry wonders.",
    "audience": "Students & Science Enthusiasts",
    "time": "09:00 AM – 12:30 PM",
    "venue": "Physics & Chemistry Labs",
    "actionLabel": "Science Highlights",
    "isPast": false
  },
  {
    "id": 56,
    "term": "term2",
    "type": "holiday",
    "categoryLabel": "Festive Holiday",
    "month": "MAR",
    "day": "06",
    "weekday": "Sat",
    "title": "Maha Shivratri Festival Holiday",
    "description": "Gazetted religious holiday observing Maha Shivratri. School remains closed for all academic and administrative activities.",
    "audience": "All Students & Staff",
    "time": "Full Day Holiday",
    "venue": "Campus Closed",
    "actionLabel": "Holiday Notice",
    "isPast": false
  },
  {
    "id": 57,
    "term": "term2",
    "type": "event",
    "categoryLabel": "Primary Graduation",
    "month": "MAR",
    "day": "13",
    "weekday": "Sat",
    "title": "Kindergarten Convocation & Primary Wing Graduation Day",
    "description": "Milestone celebration for UKG and Class V graduates transitioning into primary and middle school respectively, featuring song and dance.",
    "audience": "KG & Class V Students & Parents",
    "time": "09:30 AM – 01:00 PM",
    "venue": "School Auditorium",
    "actionLabel": "Graduation Photos",
    "isPast": false
  },
  {
    "id": 58,
    "term": "term2",
    "type": "ptm",
    "categoryLabel": "Annual Promotion PTM",
    "month": "MAR",
    "day": "20",
    "weekday": "Sat",
    "title": "Annual Result Declaration & Promotion PTM (Session 2027–28)",
    "description": "Official comprehensive report card distribution, discussion of merit honors, award of scholarships, and collection of book lists.",
    "audience": "All Parents & Students",
    "time": "08:30 AM – 02:00 PM",
    "venue": "Respective Classrooms",
    "actionLabel": "Promotion Rules",
    "isPast": false
  },
  {
    "id": 59,
    "term": "term2",
    "type": "holiday",
    "categoryLabel": "Festive Vacation",
    "month": "MAR",
    "day": "25",
    "weekday": "Thu",
    "title": "Holi & Dhulandi Festival Vacation (25 – 27 March 2027)",
    "description": "Joyous festival of colors vacation marking the onset of spring. Campus closed for celebrations before reopening for the new academic year.",
    "audience": "All Students & Staff",
    "time": "Reopens 01 Apr 2027",
    "venue": "Campus Closed",
    "actionLabel": "Festival Greetings",
    "isPast": false
  },
  {
    "id": 60,
    "term": "term2",
    "type": "event",
    "categoryLabel": "Session Prep",
    "month": "MAR",
    "day": "31",
    "weekday": "Wed",
    "title": "Academic Session 2027–28 Book Depot Setup & Teacher Orientation",
    "description": "Curriculum planning conclave for faculty; uniform and textbook counters operational for parents preparing for the new academic session.",
    "audience": "Parents, Students & Educators",
    "time": "09:00 AM – 03:00 PM",
    "venue": "School Book Depot & Wing B",
    "actionLabel": "Book List PDF",
    "isPast": false
  }
];

  // Auto-scroll handler for Notice Archive
  const handleNoticeFilter = (catKey: string) => {
    setFilter(catKey);
    setTimeout(() => {
      const target = document.getElementById("circulars-table-container");
      if (target) {
        const navHeight = 90;
        const pos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: Math.max(0, pos), behavior: "smooth" });
      }
    }, 40);
  };

  // Auto-scroll handler for Calendar Category Chip
  const handleCategoryChange = (cat: EventCategory) => {
    setCalCategory(cat);
    setVisibleEventsCount(4);
    setTimeout(() => {
      const target = document.getElementById("cal-events-list");
      if (target) {
        const navHeight = 90;
        const pos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: Math.max(0, pos), behavior: "smooth" });
      }
    }, 40);
  };

  // Auto-scroll handler for Calendar Timeline (Upcoming vs Past)
  const handleTimelineChange = (tl: TimelineFilter) => {
    setCalTimeline(tl);
    setVisibleEventsCount(4);
    setTimeout(() => {
      const target = document.getElementById("cal-events-list");
      if (target) {
        const navHeight = 90;
        const pos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: Math.max(0, pos), behavior: "smooth" });
      }
    }, 40);
  };

  // Auto-scroll handler for Calendar Term
  const handleTermChange = (term: TermFilter) => {
    setCalTerm(term);
    setVisibleEventsCount(4);
    setTimeout(() => {
      const target = document.getElementById("cal-events-list");
      if (target) {
        const navHeight = 90;
        const pos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: Math.max(0, pos), behavior: "smooth" });
      }
    }, 40);
  };

  const filteredCalendarEvents = academicEvents.filter((ev) => {
    const matchesCategory = calCategory === "all" || ev.type === calCategory;
    const matchesTerm = calTerm === "all" || ev.term === calTerm;
    const matchesTimeline =
      calTimeline === "all" ? true : calTimeline === "upcoming" ? !ev.isPast : ev.isPast;
    const q = calSearchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      ev.title.toLowerCase().includes(q) ||
      ev.description.toLowerCase().includes(q) ||
      ev.audience.toLowerCase().includes(q) ||
      ev.categoryLabel.toLowerCase().includes(q) ||
      ev.month.toLowerCase().includes(q);
    return matchesCategory && matchesTerm && matchesTimeline && matchesSearch;
  });

  const countByType = {
    all: academicEvents.filter((e) => calTimeline === "all" || (calTimeline === "upcoming" ? !e.isPast : e.isPast)).length,
    exam: academicEvents.filter((e) => (calTimeline === "all" || (calTimeline === "upcoming" ? !e.isPast : e.isPast)) && e.type === "exam").length,
    holiday: academicEvents.filter((e) => (calTimeline === "all" || (calTimeline === "upcoming" ? !e.isPast : e.isPast)) && e.type === "holiday").length,
    ptm: academicEvents.filter((e) => (calTimeline === "all" || (calTimeline === "upcoming" ? !e.isPast : e.isPast)) && e.type === "ptm").length,
    event: academicEvents.filter((e) => (calTimeline === "all" || (calTimeline === "upcoming" ? !e.isPast : e.isPast)) && e.type === "event").length,
  };

  const filteredCirculars = allCirculars.filter((c) => {
    const matchesFilter = filter === "all" || c.category === filter;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.ref.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const activeSpotlights = milestoneTab === "upcoming" ? upcomingSpotlightEvents : pastSpotlightEvents;

  return (
    <div className="page-wrapper animate-fade-in">
      <PageHero
        breadcrumbCurrent="Circulars"
        onNavigate={onNavigate}
        kicker="Official Notices · Annual Calendar"
        title={<>Stay updated with our <em>notices &amp; calendar.</em></>}
        subtitle="Official CBSE notifications, board examination datesheets, circulars, and the comprehensive 2026–27 school calendar at your fingertips."
        imageUrl="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1280&q=70"
        imageAlt="Horizon Academy Auditorium and Academic Briefing"
        primaryCtaLabel="View Notice Board"
        onPrimaryCtaClick={() => document.getElementById("circulars")?.scrollIntoView({ behavior: "smooth" })}
      />

      <NoticesAndEvents
        onNavigateToArchive={() => document.getElementById("circulars-archive")?.scrollIntoView({ behavior: "smooth" })}
        onNavigateToCalendar={() => document.getElementById("academic-calendar")?.scrollIntoView({ behavior: "smooth" })}
      />

      <section className="section-circulars-archive container" id="circulars-archive">
        <div className="section-heading-row">
          <div>
            <span className="section-eyebrow">DIGITAL NOTICE ARCHIVE</span>
            <h2 className="section-title">All Official Circulars & Orders</h2>
          </div>
          <div className="circular-search-box">
            <input
              type="text"
              placeholder="Search circulars, topics, ref no..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search circulars"
            />
          </div>
        </div>

        <div className="circular-filter-pills" role="tablist" aria-label="Circular filter categories">
          <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => handleNoticeFilter("all")} role="tab" aria-selected={filter === "all"}>
            All Notices
          </button>
          <button className={`filter-btn ${filter === "cbse" ? "active" : ""}`} onClick={() => handleNoticeFilter("cbse")} role="tab" aria-selected={filter === "cbse"}>
            CBSE Board
          </button>
          <button className={`filter-btn ${filter === "admissions" ? "active" : ""}`} onClick={() => handleNoticeFilter("admissions")} role="tab" aria-selected={filter === "admissions"}>
            Admissions
          </button>
          <button className={`filter-btn ${filter === "academic" ? "active" : ""}`} onClick={() => handleNoticeFilter("academic")} role="tab" aria-selected={filter === "academic"}>
            Academic & PTM
          </button>
          <button className={`filter-btn ${filter === "stem" ? "active" : ""}`} onClick={() => handleNoticeFilter("stem")} role="tab" aria-selected={filter === "stem"}>
            ATL & Innovation
          </button>
          <button className={`filter-btn ${filter === "events" ? "active" : ""}`} onClick={() => handleNoticeFilter("events")} role="tab" aria-selected={filter === "events"}>
            Co-Curricular & Sports
          </button>
        </div>

        <div id="circulars-table-container" className="table-responsive-wrapper">
          <table className="standard-data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No.</th>
                <th>Circular Headline</th>
                <th>Category</th>
                <th>Audience</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {filteredCirculars.map((c) => (
                <tr key={c.id}>
                  <td><time className="text-muted-small">{c.date}</time></td>
                  <td><span className="code-pill">{c.ref}</span></td>
                  <td>
                    <strong>{c.title}</strong>
                    {c.urgent && <span className="tag-urgent-badge">Urgent</span>}
                  </td>
                  <td><span className="category-pill">{c.tag}</span></td>
                  <td><span className="text-muted-small">{c.audience}</span></td>
                  <td>
                    <a href="#download" className="doc-view-link">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ---------- UPGRADED ACADEMIC CALENDAR SYSTEM ---------- */}
      <section className="section-academic-calendar container" id="academic-calendar">
        <div className="center-heading">
          <span className="section-eyebrow">ANNUAL CBSE SCHEDULE 2026–27</span>
          <h2 className="section-title">Academic Calendar &amp; Activity Planner</h2>
          <p className="section-subtitle">
            Comprehensive roadmap detailing scheduled examinations, gazetted holidays, parent-teacher meetings (PTM), and co-curricular celebrations.
          </p>
        </div>

        {/* 1. UPCOMING & PAST EVENTS SPOTLIGHT SECTION */}
        <div className="calendar-spotlight-wrap" id="school-milestones">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#78350F", fontFamily: "'Poppins', sans-serif" }}>
                SCHOOL MILESTONES &amp; KEY DATES
              </span>
              <h3 style={{ margin: "2px 0 0", fontSize: "1.35rem", fontWeight: 700, color: "#1F2937", fontFamily: "'Playfair Display', Georgia, serif" }}>
                {milestoneTab === "upcoming" ? "Upcoming Key Milestones (Active)" : "Past Milestones Archive"}
              </h3>
            </div>
            <div className="milestone-tab-pills" role="tablist">
              <button
                type="button"
                className={`milestone-tab-btn ${milestoneTab === "upcoming" ? "active" : ""}`}
                onClick={() => setMilestoneTab("upcoming")}
              >
                Upcoming (from 10 Sep 2026)
              </button>
              <button
                type="button"
                className={`milestone-tab-btn ${milestoneTab === "past" ? "active" : ""}`}
                onClick={() => setMilestoneTab("past")}
              >
                Past Milestones Archive
              </button>
            </div>
          </div>

          <div className="spotlight-grid">
            {activeSpotlights.map((sp, idx) => (
              <div key={sp.id} className={`spotlight-card spotlight-${sp.type} ${idx % 2 === 0 ? "reveal-left" : "reveal-right"}`}>
                <div className="spotlight-img-wrap">
                  <img src={sp.imageUrl} alt={sp.title} className="spotlight-img" loading="lazy" />
                  <span className="spotlight-date-pill">{sp.dateTag}</span>
                </div>
                <div className="spotlight-content">
                  <div>
                    <div className="spotlight-top">
                      <span className={`spotlight-badge ${sp.type}`}>
                        {sp.type === "exam" && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>}
                        {sp.type === "holiday" && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="5"/></svg>}
                        {sp.type === "ptm" && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
                        {sp.type === "event" && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>}
                        {sp.badgeLabel}
                      </span>
                    </div>
                    <h4 className="spotlight-title">{sp.title}</h4>
                    <p className="spotlight-desc">{sp.desc}</p>
                  </div>
                  <div className="spotlight-footer">
                    <span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {sp.timing}
                    </span>
                    <span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      {sp.audience}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. CALENDAR FILTER CONTROLS BAR */}
        <div className="cal-controls-bar">
          <div className="cal-terms-row">
            {/* Timeline Filter (Upcoming vs Past vs All) */}
            <div className="cal-timeline-btn-group" role="tablist" aria-label="Filter events by timeline">
              <button
                type="button"
                className={`cal-timeline-btn ${calTimeline === "upcoming" ? "active" : ""}`}
                onClick={() => handleTimelineChange("upcoming")}
              >
                Upcoming Events (Sep 2026 – Mar 2027)
              </button>
              <button
                type="button"
                className={`cal-timeline-btn ${calTimeline === "past" ? "active" : ""}`}
                onClick={() => handleTimelineChange("past")}
              >
                Past Events Archive (Apr – Sep 2026)
              </button>
              <button
                type="button"
                className={`cal-timeline-btn ${calTimeline === "all" ? "active" : ""}`}
                onClick={() => handleTimelineChange("all")}
              >
                All Session
              </button>
            </div>

            <div className="cal-term-btn-group" role="tablist" aria-label="Filter events by academic term">
              <button
                type="button"
                className={`cal-term-btn ${calTerm === "all" ? "active" : ""}`}
                onClick={() => handleTermChange("all")}
              >
                All Terms
              </button>
              <button
                type="button"
                className={`cal-term-btn ${calTerm === "term1" ? "active" : ""}`}
                onClick={() => handleTermChange("term1")}
              >
                Term 1 (Apr – Sep)
              </button>
              <button
                type="button"
                className={`cal-term-btn ${calTerm === "term2" ? "active" : ""}`}
                onClick={() => handleTermChange("term2")}
              >
                Term 2 (Oct – Mar)
              </button>
            </div>

            <div className="cal-search-input-wrap">
              <i>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </i>
              <input
                type="text"
                className="cal-search-input"
                placeholder="Search exams, holidays, PTM..."
                value={calSearchQuery}
                onChange={(e) => {
                  setCalSearchQuery(e.target.value);
                  setVisibleEventsCount(4);
                }}
                aria-label="Search academic calendar"
              />
            </div>
          </div>

          <div className="cal-categories-row" role="tablist" aria-label="Filter by event category">
            <button
              type="button"
              className={`cal-cat-chip chip-all ${calCategory === "all" ? "active" : ""}`}
              onClick={() => handleCategoryChange("all")}
            >
              All Types ({countByType.all})
            </button>
            <button
              type="button"
              className={`cal-cat-chip chip-exam ${calCategory === "exam" ? "active" : ""}`}
              onClick={() => handleCategoryChange("exam")}
            >
              Exams ({countByType.exam})
            </button>
            <button
              type="button"
              className={`cal-cat-chip chip-holiday ${calCategory === "holiday" ? "active" : ""}`}
              onClick={() => handleCategoryChange("holiday")}
            >
              Holidays ({countByType.holiday})
            </button>
            <button
              type="button"
              className={`cal-cat-chip chip-ptm ${calCategory === "ptm" ? "active" : ""}`}
              onClick={() => handleCategoryChange("ptm")}
            >
              PTM ({countByType.ptm})
            </button>
            <button
              type="button"
              className={`cal-cat-chip chip-event ${calCategory === "event" ? "active" : ""}`}
              onClick={() => handleCategoryChange("event")}
            >
              Events &amp; Fests ({countByType.event})
            </button>
          </div>
        </div>

        {/* 3. CALENDAR EVENTS LIST */}
        <div id="cal-events-list" className="cal-events-list">
          {filteredCalendarEvents.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", background: "#FDF8F2", borderRadius: "18px", border: "1.5px dashed #D6A76F" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#78350F" strokeWidth="1.5" style={{ margin: "0 auto 12px", display: "block" }}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <h4 style={{ margin: "0 0 6px", fontSize: "1.1rem", fontWeight: 700, color: "#78350F" }}>
                No events found matching your criteria
              </h4>
              <p style={{ margin: "0 0 16px", color: "#1F2937", fontSize: "0.88rem", opacity: 0.8 }}>
                Try adjusting the timeline filter (Upcoming vs Past), term filter, or search keyword.
              </p>
              <button
                type="button"
                className="cal-action-btn"
                onClick={() => { setCalCategory("all"); setCalTerm("all"); setCalTimeline("all"); setCalSearchQuery(""); setVisibleEventsCount(4); }}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <>
              {filteredCalendarEvents.slice(0, visibleEventsCount).map((ev, idx) => (
                <div key={ev.id} className={`cal-event-card-modern is-${ev.type} ${idx % 2 === 0 ? "reveal-left" : "reveal-right"}`}>
                  <div className="cal-date-block">
                    <span className="cal-date-month">{ev.month}</span>
                    <span className="cal-date-day">{ev.day}</span>
                    <span className="cal-date-weekday">{ev.weekday}</span>
                  </div>

                  <div className="cal-event-body">
                    <div className="cal-event-meta-row">
                      <span className={`cal-event-type-badge badge-${ev.type}`}>
                        {ev.type === "exam" && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>}
                        {ev.type === "holiday" && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="5"/></svg>}
                        {ev.type === "ptm" && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
                        {ev.type === "event" && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>}
                        {ev.categoryLabel}
                      </span>
                      <span className="cal-event-term-label">
                        {ev.term === "term1" ? "Term 1 (Apr–Sep)" : "Term 2 (Oct–Mar)"}
                      </span>
                      <span className={`event-status-pill ${ev.isPast ? "status-past" : "status-upcoming"}`}>
                        {ev.isPast ? "Completed" : "Upcoming"}
                      </span>
                    </div>

                    <h3 className="cal-event-title-text">{ev.title}</h3>
                    <p className="cal-event-desc-text">{ev.description}</p>

                    <div className="cal-event-pills-row">
                      <div className="cal-event-pill-item">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        <span>{ev.time}</span>
                      </div>
                      <div className="cal-event-pill-item">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        <span>{ev.audience}</span>
                      </div>
                      <div className="cal-event-pill-item">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        <span>{ev.venue}</span>
                      </div>
                    </div>
                  </div>

                  <div className="cal-event-action-wrap">
                    <a href="#notice" className="cal-action-btn">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      {ev.actionLabel || "View Circular"}
                    </a>
                  </div>
                </div>
              ))}

              {/* View More / Load More Events Buttons */}
              {filteredCalendarEvents.length > visibleEventsCount && (
                <div className="cal-load-more-wrap">
                  <button
                    type="button"
                    className="btn-view-more-events"
                    onClick={() => setVisibleEventsCount((prev) => prev + 4)}
                    aria-label="View more calendar events"
                  >
                    <span>View More Events ({filteredCalendarEvents.length - visibleEventsCount} remaining)</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  {filteredCalendarEvents.length - visibleEventsCount > 4 && (
                    <button
                      type="button"
                      className="btn-view-all-events"
                      onClick={() => setVisibleEventsCount(filteredCalendarEvents.length)}
                      aria-label="View all calendar events"
                    >
                      <span>View All ({filteredCalendarEvents.length})</span>
                    </button>
                  )}
                </div>
              )}

              {visibleEventsCount > 4 && (
                <div className="cal-load-more-wrap" style={{ marginTop: filteredCalendarEvents.length > visibleEventsCount ? "6px" : "18px" }}>
                  <button
                    type="button"
                    className="btn-view-less-events"
                    onClick={() => {
                      setVisibleEventsCount(4);
                      const target = document.getElementById("cal-events-list");
                      if (target) {
                        const navHeight = 90;
                        const pos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                        window.scrollTo({ top: Math.max(0, pos), behavior: "smooth" });
                      }
                    }}
                    aria-label="Show fewer events"
                  >
                    <span>Show Less (Collapse to 4)</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* 4. DOWNLOAD OFFICIAL CALENDAR PDF BANNER */}
        <div className="cal-download-banner" id="cal-download-banner">
          <div className="cal-banner-copy reveal-left">
            <h3>Download Complete CBSE Academic Calendar (2026–27)</h3>
            <p>
              Get the official day-by-day printable wall calendar including examination rules, list of gazetted holidays, and PTM schedule.
            </p>
          </div>
          <div className="cal-banner-actions reveal-right">
            <a href="#download" className="btn-hero-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <span>Download Wall Calendar (PDF)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
