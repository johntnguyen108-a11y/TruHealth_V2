// PROVIDERS DATABASE - Detailed reviews included
const chiropractors = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell, DC",
    specialty: "chiropractic",
    specialtyName: "Chiropractic Care",
    experience: 15,
    price: 45,
    distance: 1.2,
    availability: "same-day",
    rating: 4.9,
    reviews: 287,
    avatar: "👨‍⚕️",
    gradient: "linear-gradient(135deg, #1e88e5 0%, #1565c0 100%)",
    about: "Board-certified chiropractor specializing in sports injuries, chronic pain management, and post-surgical rehabilitation with over 15 years of clinical experience.",
    address: "123 Wellness Drive, Suite 200",
    phone: "(555) 234-5678",
    insurance: "In-Network",
    medicalSchool: "Palmer College of Chiropractic",
    boardCert: "National Board of Chiropractic Examiners",
    professionalReviews: [
      {
        reviewer: "Dr. James Patterson, MD - Orthopedic Surgeon",
        date: "1 month ago",
        rating: 5,
        text: "I've referred over 50 patients to Dr. Mitchell in the past two years. Her post-surgical rehabilitation protocols are exceptional, with patients reporting 70-80% pain reduction within 6-8 weeks. She uses evidence-based techniques including diversified adjustments and active release therapy. Price point of $45 copay is very reasonable compared to area averages. Communication is excellent - she provides detailed treatment plans and progress reports. Only minor issue: occasionally runs 10-15 minutes behind schedule during busy periods, but the quality of care justifies any wait time. She identified a misdiagnosed SI joint dysfunction in one of my patients that three other providers had missed. Professional billing practices, never any insurance coordination issues."
      },
      {
        reviewer: "Dr. Lisa Chen, PT, DPT - Physical Therapist",
        date: "3 weeks ago",
        rating: 5,
        text: "Dr. Mitchell and I co-manage several complex cases successfully. Her diagnostic skills are outstanding - she caught a subtle pelvic misalignment causing chronic hip pain that resolved after just 4 adjustments. She charges standard rates and never oversells unnecessary visits, which I really appreciate. Very professional and responsive to consultation requests. Patients consistently praise her bedside manner and clear explanations. Have worked together for 5 years with zero billing or communication problems. She understands her scope of practice and refers appropriately when medical imaging or specialist care is needed."
      }
    ]
  },
  {
    id: 2,
    name: "Dr. Marcus Thompson, DC",
    specialty: "chiropractic",
    specialtyName: "Chiropractic Care",
    experience: 8,
    price: 75,
    distance: 4.5,
    availability: "next-day",
    rating: 4.3,
    reviews: 134,
    avatar: "👨‍⚕️",
    gradient: "linear-gradient(135deg, #43a047 0%, #2e7d32 100%)",
    about: "Workplace ergonomics specialist focusing on tech-related neck and back pain using modern adjustment techniques and preventive care strategies.",
    address: "890 Corporate Plaza, Floor 3",
    phone: "(555) 345-6789",
    insurance: "Out-of-Network",
    medicalSchool: "Logan University",
    boardCert: "American Chiropractic Board of Sports Physicians",
    professionalReviews: [
      {
        reviewer: "Dr. Susan Rodriguez, DO - Occupational Medicine",
        date: "2 weeks ago",
        rating: 4,
        text: "Dr. Thompson treats many of my corporate clients with repetitive strain injuries. His ergonomic assessments are thorough and recommendations are practical for office environments. However, at $75 per visit out-of-network, he's pricier than competitors in the area. Some patients have reported feeling pressured to purchase expensive ergonomic equipment through his affiliate partnerships, which is concerning. That said, treatment outcomes are generally good - about 60% symptom improvement over 8-10 sessions for most RSI cases. He does provide detailed documentation for insurance reimbursement, which patients appreciate. Responds promptly to referral requests and maintains professional communication."
      }
    ]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez, DC",
    specialty: "chiropractic",
    specialtyName: "Chiropractic Care",
    experience: 12,
    price: 55,
    distance: 2.8,
    availability: "same-day",
    rating: 5.0,
    reviews: 421,
    avatar: "👩‍⚕️",
    gradient: "linear-gradient(135deg, #1e88e5 0%, #43a047 100%)",
    about: "Prenatal and postnatal chiropractic specialist, also providing gentle pediatric care using low-force techniques certified by ICPA.",
    address: "456 Family Health Center",
    phone: "(555) 456-7890",
    insurance: "In-Network",
    medicalSchool: "Life University",
    boardCert: "International Chiropractic Pediatric Association Certified",
    professionalReviews: [
      {
        reviewer: "Dr. Amanda Foster, MD - OB/GYN",
        date: "5 days ago",
        rating: 5,
        text: "Dr. Rodriguez is my go-to referral for pregnant patients with back pain and sciatica. She's certified in Webster Technique and has helped over 20 of my patients achieve better pelvic alignment, with several reporting notably easier deliveries. At $55 copay, pricing is very affordable and accessible. I've never had a patient report any discomfort or complications from her treatments. She understands pregnancy physiology thoroughly and communicates exceptionally well about what's safe at each trimester. Billing is completely transparent with zero surprise charges. Only limitation: she's very popular, so booking typically requires 2+ weeks advance notice for new patients. Excellent collaborative relationship and appropriate scope of practice."
      }
    ]
  },
  {
    id: 4,
    name: "Dr. Robert Chang, DC",
    specialty: "chiropractic",
    specialtyName: "Chiropractic Care",
    experience: 6,
    price: 40,
    distance: 6.2,
    availability: "this-week",
    rating: 4.6,
    reviews: 89,
    avatar: "👨‍⚕️",
    gradient: "linear-gradient(135deg, #43a047 0%, #1e88e5 100%)",
    about: "Recently established practice offering affordable care for headaches, neck pain, and posture correction with modern evidence-based approaches.",
    address: "789 Budget Wellness Center",
    phone: "(555) 567-8901",
    insurance: "Most Major Plans Accepted",
    medicalSchool: "Southern California University of Health Sciences",
    boardCert: "National Board Certified",
    professionalReviews: [
      {
        reviewer: "Dr. Patricia Kim, MD - Family Medicine",
        date: "3 weeks ago",
        rating: 4,
        text: "Dr. Chang offers the most affordable chiropractic care in our area at just $40 per visit, which is valuable for my patients on tight budgets. Good for straightforward cases like tension headaches and minor neck pain. Being newer to practice (6 years experience), he's still building his patient base, which means much easier appointment availability than more established providers. Treatment outcomes are decent - patients report 50-60% improvement over 6-8 visits on average. He's eager to learn and asks thoughtful questions about patient histories. One patient experienced a minor symptom flare-up after an adjustment, but Dr. Chang handled it professionally and adjusted his technique appropriately. Good value for budget-conscious patients who need basic chiropractic care."
      }
    ]
  }
];

const therapists = [
  {
    id: 201,
    name: "Dr. Jennifer Matthews, PsyD",
    specialty: "therapy",
    specialtyName: "Therapy/Counseling",
    experience: 16,
    price: 120,
    distance: 3.2,
    availability: "next-day",
    rating: 4.9,
    reviews: 234,
    avatar: "👩‍⚕️",
    gradient: "linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)",
    about: "Licensed clinical psychologist specializing in Cognitive Behavioral Therapy (CBT) for anxiety disorders, depression, and trauma recovery.",
    address: "123 Mental Health Plaza, Suite 201",
    phone: "(555) 111-2222",
    insurance: "Out-of-Network (Reimburse 60%)",
    medicalSchool: "Psy.D., Clinical Psychology - Boston University",
    boardCert: "Licensed Clinical Psychologist",
    professionalReviews: [
      {
        reviewer: "Dr. Amanda Foster, MD - Psychiatrist",
        date: "2 weeks ago",
        rating: 5,
        text: "Dr. Matthews is one of the best therapists I work with in this region. Her CBT protocols for anxiety and depression are rigorously evidence-based and consistently effective. At $120 per session out-of-network, she's expensive, but insurance typically reimburses around 60% with her superbill documentation. Patients report significant measurable improvement - one patient with panic disorder went from 4 panic attacks per week to less than 1 per month over just 3 months of weekly therapy. She communicates excellently about medication needs and never undermines or conflicts with psychiatric treatment plans. Very professional, reliable, and produces excellent clinical outcomes. Only drawback: high demand means waitlist is often 3-4 weeks for new patients. Worth the wait for complex anxiety and mood disorders."
      }
    ]
  },
  {
    id: 202,
    name: "Michael Rodriguez, LMFT",
    specialty: "therapy",
    specialtyName: "Therapy/Counseling",
    experience: 11,
    price: 85,
    distance: 2.5,
    availability: "same-day",
    rating: 4.7,
    reviews: 189,
    avatar: "👨‍⚕️",
    gradient: "linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)",
    about: "Licensed Marriage and Family Therapist specializing in couples therapy, family systems work, and relationship conflict resolution.",
    address: "456 Relationship Counseling Center",
    phone: "(555) 222-3333",
    insurance: "In-Network Most Plans",
    medicalSchool: "M.A., Marriage & Family Therapy - Pepperdine",
    boardCert: "LMFT California Licensed",
    professionalReviews: [
      {
        reviewer: "Dr. Lisa Chen, PsyD - Clinical Psychologist",
        date: "1 week ago",
        rating: 5,
        text: "Michael is excellent with couples work and uses the Gottman Method very effectively. I've seen marriages that were genuinely on the brink of divorce make remarkable recoveries after 6 months of consistent weekly sessions with him. At $85 per session in-network, the pricing is very accessible compared to other couples therapists. He's practical and solution-focused, doesn't pathologize normal relationship struggles. Some clients report he can be somewhat direct or even confrontational in sessions, but this approach seems to work well for most couples who need that accountability and honesty. He responds to crisis calls very promptly, which is crucial for couples work. Professional and ethical in all interactions."
      }
    ]
  },
  {
    id: 203,
    name: "Dr. Sarah Johnson, PhD",
    specialty: "therapy",
    specialtyName: "Therapy/Counseling",
    experience: 22,
    price: 150,
    distance: 7.8,
    availability: "this-week",
    rating: 4.8,
    reviews: 412,
    avatar: "👩‍⚕️",
    gradient: "linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)",
    about: "Trauma specialist with EMDR certification, focusing on PTSD treatment and complex trauma recovery for adults.",
    address: "789 Trauma Recovery Institute",
    phone: "(555) 333-4444",
    insurance: "Out-of-Network",
    medicalSchool: "Ph.D., Clinical Psychology - UCLA",
    boardCert: "EMDR Certified Therapist, Licensed Psychologist",
    professionalReviews: [
      {
        reviewer: "Dr. James Patterson, MD - Psychiatrist",
        date: "5 days ago",
        rating: 5,
        text: "Dr. Johnson is a highly specialized trauma expert with 22 years of clinical experience. Her EMDR therapy has helped numerous patients with PTSD reduce symptoms significantly - one combat veteran went from nightmares 5 nights per week to occasional nightmares after 4 months of weekly treatment. At $150 per session out-of-network, she's the most expensive therapist I refer to, but for complex trauma cases involving childhood abuse, combat PTSD, or severe accidents, she's absolutely worth the investment. The distance (7.8 miles from downtown) can be a barrier for some patients, but she does offer teletherapy options which helps. Patients consistently report feeling safe and understood in her care. She's extremely careful with pacing trauma work and never re-traumatizes. No billing issues ever reported. Excellent clinical judgment about when to refer for medication evaluation."
      }
    ]
  },
  {
    id: 204,
    name: "Alex Kim, LCSW",
    specialty: "therapy",
    specialtyName: "Therapy/Counseling",
    experience: 7,
    price: 70,
    distance: 1.4,
    availability: "same-day",
    rating: 4.5,
    reviews: 98,
    avatar: "👨‍⚕️",
    gradient: "linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)",
    about: "Licensed Clinical Social Worker providing therapy for depression, life transitions, stress management, and general mental health support.",
    address: "321 Community Counseling Services",
    phone: "(555) 444-5555",
    insurance: "In-Network Including Medicaid",
    medicalSchool: "MSW, Clinical Social Work - Columbia",
    boardCert: "LCSW Licensed Clinical Social Worker",
    professionalReviews: [
      {
        reviewer: "Dr. Maria Santos, MD - Family Medicine",
        date: "1 week ago",
        rating: 4,
        text: "Alex is a solid therapist at an affordable price point of $70 per session. Crucially, accepts Medicaid and most insurance plans, which makes mental healthcare accessible to my lower-income patients who desperately need it. Good with straightforward depression, adjustment disorders, and life transition issues. Being somewhat newer to independent practice (7 years experience), he occasionally needs consultation on more complex cases, but he's appropriately humble and seeks supervision when needed. Patients appreciate the very convenient location and same-day availability is a huge advantage for acute situations. Some patients report that sessions can feel a bit structured or formulaic at times, but he generally gets good clinical results for common presenting problems. Reliable and professional in all communications."
      }
    ]
  }
];

const familyDoctors = [
  {
    id: 101,
    name: "Dr. Maria Santos, MD",
    specialty: "family",
    specialtyName: "Family Medicine",
    experience: 18,
    price: 45,
    distance: 2.1,
    availability: "next-day",
    rating: 4.9,
    reviews: 523,
    avatar: "👩‍⚕️",
    gradient: "linear-gradient(135deg, #1e88e5 0%, #1565c0 100%)",
    about: "Board-certified family physician with particular expertise in diabetes management, hypertension control, and comprehensive preventive care for patients of all ages.",
    address: "890 Primary Care Medical Center",
    phone: "(555) 789-0123",
    insurance: "In-Network All Major Plans",
    medicalSchool: "Harvard Medical School",
    residency: "Massachusetts General Hospital",
    boardCert: "American Board of Family Medicine",
    professionalReviews: [
      {
        reviewer: "Dr. John Miller, MD - Cardiologist",
        date: "2 weeks ago",
        rating: 5,
        text: "Dr. Santos manages complex multi-morbid patients exceptionally well. Her diabetic and hypertensive patients consistently arrive at my cardiology practice already well-controlled with optimal medication regimens and lifestyle modifications in place. She's extremely thorough with preventive screenings - catches problems like early heart disease, cancer, and kidney disease before they become serious. Standard $45 copay is very reasonable. In 8 years of receiving referrals from her practice, I have never seen a single missed diagnosis or medication error, which is remarkable. She communicates via secure messaging promptly and provides excellent documentation. Only minor issue: her administrative staff sometimes takes 2-3 days to send requested medical records, but the clinical quality is consistently outstanding."
      }
    ]
  },
  {
    id: 102,
    name: "Dr. James Wilson, MD",
    specialty: "family",
    specialtyName: "Family Medicine",
    experience: 9,
    price: 50,
    distance: 5.4,
    availability: "this-week",
    rating: 4.4,
    reviews: 187,
    avatar: "👨‍⚕️",
    gradient: "linear-gradient(135deg, #43a047 0%, #2e7d32 100%)",
    about: "Evidence-based family medicine physician with strong focus on chronic disease prevention, lifestyle medicine, and patient education.",
    address: "234 Wellness Medical Group",
    phone: "(555) 890-1234",
    insurance: "Limited Insurance Networks",
    medicalSchool: "Johns Hopkins School of Medicine",
    residency: "Mayo Clinic",
    boardCert: "American Board of Family Medicine",
    professionalReviews: [
      {
        reviewer: "Dr. Susan Taylor, MD - Internal Medicine",
        date: "1 week ago",
        rating: 4,
        text: "Dr. Wilson is academically very strong - Johns Hopkins and Mayo Clinic trained, which shows in his clinical reasoning. He takes a rigorous evidence-based approach which I really appreciate as a colleague. However, at $50 copay and limited insurance network participation, some patients face access and affordability challenges. He can sometimes be overly cautious and conservative, occasionally ordering more diagnostic tests than strictly necessary which increases overall healthcare costs. That said, his diagnostic accuracy is quite high and he catches things others might miss. Wait times in his office frequently run 30-40 minutes past scheduled appointments. Overall good physician for patients who prioritize thoroughness and have good insurance coverage or can afford out-of-pocket costs."
      }
    ]
  },
  {
    id: 103,
    name: "Dr. Rachel Cohen, MD",
    specialty: "family",
    specialtyName: "Family Medicine",
    experience: 14,
    price: 45,
    distance: 1.9,
    availability: "same-day",
    rating: 4.8,
    reviews: 356,
    avatar: "👩‍⚕️",
    gradient: "linear-gradient(135deg, #1e88e5 0%, #43a047 100%)",
    about: "Comprehensive family medicine with particular expertise in women's health, pediatric care, and geriatric medicine - true cradle to grave practice.",
    address: "567 Community Family Health",
    phone: "(555) 901-2345",
    insurance: "In-Network Most Plans",
    medicalSchool: "Stanford University School of Medicine",
    residency: "UCSF Medical Center",
    boardCert: "American Board of Family Medicine",
    professionalReviews: [
      {
        reviewer: "Dr. Michael Torres, MD - Pediatrician",
        date: "10 days ago",
        rating: 5,
        text: "Dr. Cohen provides excellent pediatric care within her comprehensive family practice. She catches developmental delays early with good screening protocols and refers appropriately to specialists when needed. Manages common childhood illnesses very well - understands the evidence on when antibiotics are truly needed versus watchful waiting. Parents consistently praise her patience and clear explanations of medical issues. Standard $45 copay with no billing surprises or hidden fees. She's been invaluable handling my overflow patients when I'm fully booked. Same-day availability is a huge asset for families with sick children. Very professional and maintains excellent collaborative communication with referring physicians."
      }
    ]
  }
];

const pediatricians = familyDoctors;
const internists = familyDoctors;
const cardiologists = familyDoctors;
