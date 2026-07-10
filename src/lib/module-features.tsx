export interface ModuleFeature {
  name: string;
  description: string;
}

export interface ModuleConfig {
  slug: string;
  title: string;
  description: string;
  features: ModuleFeature[];
}

export const moduleCatalogue: Record<string, ModuleConfig> = {
  "hr-payroll": {
    slug: "hr-payroll",
    title: "hr & Payroll",
    description:
      "Manage staff records, attendance, shifts, payroll runs and growth — end to end.",
    features: [
      { name: "Employee Management", description: "Central directory of every staff member, role and department." },
      { name: "Employee Documents", description: "Store and manage employee documents such as contracts, ID proofs and certificates." },
      { name: "Role Management", description: "Define roles and permission sets across the organisation." },
      { name: "Attendance", description: "Daily staff attendance with regularisation workflows." },
      { name: "Biometric Logs", description: "Monitor biometric punch-in and punch-out records for every employee." },
      { name: "Shift Management", description: "Plan and rotate shifts across wardens and support staff." },
      { name: "Shift Calendar", description: "View and manage employee shifts with an interactive calendar." },
      { name: "Leave Management", description: "Leave requests, approvals, balances and policies." },
      { name: "Payroll", description: "Automated monthly payroll runs with statutory deductions." },
      { name: "Payroll Approval Workflow", description: "Configure multi-level approvals before processing payroll." },
      { name: "Salary Slip", description: "Generate and share digital salary slips instantly." },
      { name: "Performance Review", description: "Structured appraisal cycles and feedback tracking." },
      { name: "Loan & Advance", description: "Track employee loans and salary advances against payroll." },
      { name: "Recruitment Management", description: "Job postings, applicant tracking and hiring pipeline." },
      { name: "Employee Self Service Portal", description: "Staff can view payslips, apply leave and update details." },
      { name: "Asset Assignment", description: "Assign and track hostel assets issued to staff." },
      { name: "Training Management", description: "Plan onboarding and ongoing staff training programs." },
      { name: "HR Analytics", description: "Headcount, attrition, payroll cost and attendance insights." },
    ],
  },
  admissions: {
    slug: "admissions",
    title: "Admission Management",
    description:
      "Take applications online, verify documents and onboard new residents without paperwork.",
    features: [
      { name: "Online Admission", description: "Public application form for prospective residents." },
      { name: "Online Payment", description: "Accept admission and booking fees securely through online payment gateways." },
      { name: "Waiting List", description: "Automatically maintain and manage applicants when hostel capacity is full." },
      { name: "Document Upload", description: "Collect ID proofs, photos and certificates digitally." },
      { name: "KYC Verification", description: "Verify applicant identity before confirming a seat." },
      { name: "Room Allocation", description: "Assign rooms and beds at the point of admission." },
      { name: "QR Admission Slip", description: "Generate QR-enabled admission slips for quick verification and check-in." },
      { name: "ID Card Generation", description: "Auto-generate resident ID cards on confirmation." },
      { name: "Admission Status Timeline", description: "Multi-step approval pipeline from enquiry to enrolment." },
      { name: "Digital Consent Forms", description: "E-sign hostel rules, guardian consent and policies." },
      { name: "Admission Analytics", description: "Track funnel conversion, seasonal demand and dropouts." },
    ],
  },
  residents: {
    slug: "residents",
    title: "Resident Management",
    description:
      "A single profile for every resident — academics, medical history, guardians and more.",
    features: [
      { name: "Resident Profile", description: "Unified profile with contact, room and status details." },
      { name: "Parent Login", description: "Provide parents with secure access to resident information and updates." },
      { name: "Academic Details", description: "Track institution, course and academic year." },
      { name: "Emergency Contact", description: "Maintain verified emergency contact details for every resident." },
      { name: "Medical Records", description: "Store allergies, conditions and emergency medical notes." },
      { name: "Guardian Details", description: "Parent/guardian contacts with verified relationships." },
      { name: "Vehicle Details", description: "Record and manage resident vehicle information for security and parking." },
      { name: "Hostel Agreement", description: "Digitally manage hostel agreements, policies and resident acknowledgements." },
      { name: "Digital Signature", description: "Capture legally valid digital signatures for forms and approvals." },
      { name: "History Tracking", description: "Full timeline of stay, transfers and status changes." },
      { name: "Student Wallet", description: "Prepaid in-app wallet for mess, laundry and fines." },
      { name: "Disciplinary Records", description: "Log warnings, violations and disciplinary actions." },
      { name: "Achievement Tracking", description: "Recognise academic and extracurricular achievements." },
    ],
  },
  "rooms-beds": {
    slug: "rooms-beds",
    title: "Room and Bed Management",
    description:
      "Manage buildings, floors, rooms and beds with smart, automated allocation.",
    features: [
      { name: "Building Management", description: "Organise hostel inventory by building or block." },
      { name: "Floor Management", description: "Track floor-wise capacity and layout." },
      { name: "Room Management", description: "Configure room types, capacity and pricing." },
      { name: "Bed Allocation", description: "Allocate and reassign individual beds to residents." },
      { name: "Cleaning Schedule", description: "Plan and monitor room cleaning schedules for housekeeping staff." },
      { name: "Room Maintenance", description: "Track maintenance requests, repairs and room service history." },
      { name: "Room Transfer", description: "Process room change requests with approvals." },
      { name: "Electricity Reading", description: "Record and analyze room-wise electricity meter readings." },
      { name: "Damage History", description: "Maintain a complete history of room damages and repair records." },
      { name: "Room Vacancy Tracking", description: "Real-time view of vacant vs occupied beds." },
      { name: "Smart Allocation Engine", description: "Auto-suggest optimal bed allocation based on preferences." },
      { name: "Guest Room Booking", description: "Book short-stay guest rooms for visiting parents." },
     ],
  },
  "fees-accounting": {
    slug: "fees-accounting",
    title: "Fees & Accounting",
    description:
      "Collect fees, manage finances and stay GST-compliant — all from one ledger.",
    features: [
      { name: "Fee Collection", description: "Collect one-time, recurring and partial fee payments." },
      { name: "Payment Link", description: "Generate secure payment links for quick online fee collection." },
      { name: "Installments", description: "Split fees into flexible installment plans." },
      { name: "Razorpay Integration", description: "Collect hostel fees securely using Razorpay payment gateway." },
      { name: "Late Fine", description: "Auto-apply late fines based on configurable rules." },
      { name: "Security Deposit", description: "Track refundable deposits per resident." },
      { name: "Refund Management", description: "Manage refunds with complete approval and transaction tracking." },
      { name: "Auto Reminder", description: "Automatically notify residents about upcoming and overdue fee payments." },
      { name: "GST Billing", description: "GST-compliant invoices for every transaction." },
      { name: "P&L", description: "Live profit & loss statement for the hostel." },
      { name: "Balance Sheet", description: "Assets, liabilities and equity at a glance." },
      { name: "Expense Management", description: "Record and categorise day-to-day operating expenses." },
      { name: "Budget Planning", description: "Set and track monthly/annual budgets by category." },
      { name: "UPI Auto Reconciliation", description: "Auto-match UPI payments against fee records." },
      { name: "Scholarship Management", description: "Apply scholarships and fee waivers per resident." },
      { name: "Revenue Analytics", description: "Revenue trends, collection rate and forecasting." },
    ],
  },
  "attendance-security": {
    slug: "attendance-security",
    title: "Attendance & Security",
    description:
      "Modern check-in methods and round-the-clock security monitoring.",
    features: [
      { name: "QR Attendance", description: "Mark attendance via scannable QR codes." },
      { name: "Face Attendance", description: "Contactless face-recognition attendance." },
      { name: "Live Location", description: "Track resident location during attendance using GPS verification." },
      { name: "Night Roll Call", description: "Conduct digital night attendance to ensure resident presence." },
      { name: "Biometric Integration", description: "Connect fingerprint/biometric devices at gates." },
      { name: "Geo Fencing", description: "Location-based check-in validation near campus." },
      { name: "Curfew Monitoring", description: "Flag residents missing curfew automatically." },
      { name: "Digital Gate Pass", description: "Issue and verify digital outpasses." },
      { name: "Check-In/Check-Out Approval", description: "Warden approval workflow for late entries/exits." },
      { name: "SOS Alert", description: "Instant emergency alert button for residents." },
      { name: "CCTV Integration", description: "View live and recorded CCTV feeds in-app." },
      { name: "Device Logs", description: "Maintain logs of attendance devices and authentication activities." },
      { name: "Auto Absent", description: "Automatically mark absentees based on configurable attendance rules." },
      { name: "Audit Logs", description: "Tamper-proof logs of every security event." },
      { name: "RFID Access Control", description: "RFID-based door and gate access control." },
    ],
  },
  visitors: {
    slug: "visitors",
    title: "Visitor Management",
    description:
      "Track every visitor, parcel and guest with a complete digital paper trail.",
    features: [
      { name: "Visitor Registration", description: "Capture visitor identity and purpose at the gate." },
      { name: "OTP Verification", description: "Verify visitor identity using one-time password authentication." },
      { name: "QR Visitor Pass", description: "Generate scannable passes for approved visitors." },
      { name: "Face Capture", description: "Capture visitor photographs during registration for enhanced security." },
      { name: "Vehicle Entry", description: "Record visitor vehicle details during entry and exit." },
      { name: "Approval Workflow", description: "Resident or warden approval before entry." },
      { name: "Visitor History", description: "Searchable log of all past visits." },
      { name: "Visitor Blacklist", description: "Block and monitor unauthorized or restricted visitors." },
      { name: "Courier & Parcel Management", description: "Log incoming parcels and notify residents." },
      { name: "Guest Tracking", description: "Track overnight guests and duration of stay." },
    ],
  },
  mess: {
    slug: "mess",
    title: "Mess Management",
    description:
      "Plan menus, track meals and cut food wastage with data-driven mess operations.",
    features: [
      { name: "Menu Planning", description: "Plan weekly/monthly menus by meal slot." },
      { name: "Meal Attendance", description: "Track who's eating which meal, in real time." },
      { name: "QR Meal Scan", description: "Verify meal attendance instantly by scanning resident QR codes." },
      { name: "Food Inventory", description: "Manage raw material stock for the kitchen." },
      { name: "Mess Billing", description: "Auto-generate mess bills from meal attendance." },
      { name: "Daily Menu App", description: "Publish daily meal menus through the resident mobile application." },
      { name: "Diet Management", description: "Special diet plans for allergies or preferences." },
      { name: "Meal Pre-Booking", description: "Residents pre-book or skip meals in advance." },
      { name: "Food Wastage Tracking", description: "Log and analyse daily food wastage." },
      { name: "Nutrition Analysis", description: "Nutritional breakdown of planned menus." },
      { name: "Vendor Purchase", description: "Manage food procurement, purchase orders and vendor transactions." },
      { name: "Vendor Billing", description: "Manage and reconcile bills from food vendors." },
      { name: "Food Rating", description: "Collect resident ratings and feedback for every meal served." },
    ],
  },
  inventory: {
    slug: "inventory",
    title: "Inventory & Assets",
    description:
      "Track every asset, purchase order and maintenance schedule in one place.",
    features: [
      { name: "Asset Tracking", description: "Register and track all hostel assets." },
      { name: "Furniture Tracking", description: "Track furniture allocation by room." },
      { name: "Purchase Orders", description: "Raise and approve purchase orders." },
      { name: "Vendor Management", description: "Maintain vendor directory and contracts." },
      { name: "Stock Alerts", description: "Low-stock alerts for consumables." },
      { name: "QR Asset Tracking", description: "Scan QR tags to locate or audit assets." },
      { name: "Maintenance Scheduling", description: "Schedule preventive maintenance tasks." },
      { name: "AMC Tracking", description: "Track annual maintenance contracts and renewals." },
    ],
  },
  "health-wellness": {
    slug: "health-wellness",
    title: "Health & Wellness",
    description:
      "Keep medical records current and respond faster in emergencies.",
    features: [
      { name: "Health Checkup Records", description: "Store periodic health checkup results." },
      { name: "Medicine Reminder", description: "Remind residents to take prescribed medicines." },
      { name: "Medical Emergency Alerts", description: "Instantly alert wardens and guardians in emergencies." },
      { name: "Hospital Tie-Ups", description: "Directory of partner hospitals for quick referral." },
      { name: "Vaccination Records", description: "Track vaccination history and due dates." },
    ],
  },
  "student-productivity": {
    slug: "student-productivity",
    title: "Student Productivity",
    description:
      "Help residents study, learn and stay engaged outside the classroom.",
    features: [
      { name: "Study Room Booking", description: "Reserve quiet study rooms by time slot." },
      { name: "Hostel Library   ", description: "Browse and issue books from the hostel library." },
      { name: "Online Learning Portal", description: "Access curated learning resources in-app." },
      { name: "Assignment Sharing", description: "Share and submit assignments digitally." },
      { name: "Event Management", description: "Organise and RSVP to hostel events." },
      { name: "Activity Management", description: "Manage clubs, sports and extracurriculars." },
    ],
  },
  "parent-engagement": {
    slug: "parent-engagement",
    title: "Parent Engagement",
    description:
      "Keep parents informed with live updates — no phone calls needed.",
    features: [
      { name: "Live Attendance Tracking", description: "Real-time attendance visibility for parents." },
      { name: "Live Fee Status", description: "Parents see dues and payment history instantly." },
      { name: "Approval Requests", description: "Parents approve outings, leave and guest visits." },
      { name: "Monthly Reports", description: "Automated monthly summary reports for parents." },
    ],
  },
  "whatsapp-automation": {
    slug: "whatsapp-automation",
    title: "Whatsapp Automation",
    description: "Automate reminders, receipts and alerts directly on WhatsApp.",
    features: [
      { name: "Fee Reminder", description: "Auto-send fee due reminders on WhatsApp." },
      { name: "Receipt Sharing", description: "Share payment receipts instantly via WhatsApp." },
      { name: "Attendance Alert", description: "Notify guardians of attendance status." },
      { name: "Complaint Update", description: "Send ticket status updates automatically." },
      { name: "AI Chatbot", description: "Handle common queries with an AI WhatsApp bot." },
      { name: "Broadcast Notifications", description: "Send announcements to all residents at once." },
    ],
  },
  "ai-modules": {
    slug: "ai-modules",
    title: "AI Modules",
    description: "Predictive, AI-powered intelligence layered across the platform.",
    features: [
      { name: "Occupancy Prediction", description: "Forecast upcoming occupancy trends." },
      { name: "Revenue Forecast", description: "Predict future revenue based on historical data." },
      { name: "Defaulter Prediction", description: "Flag residents likely to default on fees." },
      { name: "Maintenance Prediction", description: "Predict asset failures before they happen." },
      { name: "AI Room Allocation", description: "Optimise room allocation using AI matching." },
      { name: "AI Warden Assistant", description: "AI assistant to help wardens with daily tasks." },
      { name: "AI Voice Assistant", description: "Voice-driven queries and commands." },
      { name: "AI Occupancy Optimization", description: "Continuously optimise occupancy for revenue." },
    ],
  },
  "multi-branch": {
    slug: "multi-branch",
    title: "Multi Branch & Franchise",
    description: "Run multiple hostels or franchise locations from one console.",
    features: [
      { name: "Central Dashboard", description: "Single view across all branches and franchises." },
      { name: "Branch Comparison", description: "Compare performance metrics across branches." },
      { name: "Franchise Management", description: "Onboard and manage franchise partners." },
      { name: "White Label SaaS", description: "Offer the platform under your own brand." },
      { name: "Multi Hostel Management", description: "Operate several hostel properties centrally." },
      { name: "Royalty Management", description: "Track and collect franchise royalty payments." },
    ],
  },
  "enterprise-saas": {
    slug: "enterprise-saas",
    title: "Enterprise & SaaS Features",
    description: "Enterprise-grade controls, integrations and resilience.",
    features: [
      { name: "Multi Language", description: "Support residents and staff in multiple languages." },
      { name: "Multi Currency", description: "Bill and report across multiple currencies." },
      { name: "API Marketplace", description: "Connect third-party apps via open APIs." },
      { name: "Third Party Integrations", description: "Pre-built integrations with popular tools." },
      { name: "Custom Report Builder", description: "Build custom reports without engineering help." },
      { name: "Role Based Access Control", description: "Granular permissions across every module." },
      { name: "Cloud Backup", description: "Automated, encrypted cloud backups." },
      { name: "Disaster Recovery", description: "Recover quickly with multi-region failover." },
    ],
  },
   "security": {
    slug:"security",
    title:"Security",
    description:"Security and authentication features.",
    features:[
      { name:"Audit Logs", description:"Maintain tamper-proof logs of all important system and user activities."},
      { name:"Session Management", description:"View, monitor and control active user login sessions."},
      { name:"Device Login History", description:"Track login history across all registered user devices."},
      { name:"IP Tracking", description:"Monitor login IP addresses and detect suspicious access attempts."},
      { name:"Two-Factor Authentication", description:"Secure user accounts with OTP-based two-factor authentication."},
    ],
  },
   complaints: {
    slug: "complaints",
    title: "Complaints & HelpDesk",
    description:
      "Raise, escalate and resolve complaints with SLA-backed accountability.",
    features: [
      { name: "Complaint Ticket", description: "Raise tickets categorised by issue type." },
      { name: "Photo Upload", description: "Allow residents to attach photos while submitting complaints." },
      { name: "Voice Complaint", description: "Enable residents to raise complaints using voice recordings." },
      { name: "Escalation", description: "Auto-escalate unresolved tickets up the chain." },
      { name: "Ticket Priority", description: "Assign and manage complaint priority based on urgency and impact." },
      { name: "Resolution Tracking", description: "Track status from open to resolved." },
      { name: "Feedback", description: "Collect resident satisfaction ratings post-resolution." },
      { name: "Service Requests", description: "Handle non-complaint requests like repairs." },
      { name: "SLA Monitoring", description: "Monitor response and resolution time targets." },
      { name: "AI Resolution Suggestions", description: "AI-suggested fixes based on past similar tickets." },
    ],
  },
};

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getFeatureBySlug(
  moduleSlug: string,
  featureSlug: string
): { config: ModuleConfig; feature: ModuleFeature } | undefined {
  const config = moduleCatalogue[moduleSlug];
  if (!config) return undefined;
  const feature = config.features.find((f) => slugify(f.name) === featureSlug);
  if (!feature) return undefined;
  return { config, feature };
}

export function getModuleConfig(
  moduleSlug: string
): ModuleConfig | undefined {
  return moduleCatalogue[moduleSlug];
}

export function getAllModuleSlugs(): string[] {
  return Object.keys(moduleCatalogue);
}

