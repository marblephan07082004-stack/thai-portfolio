// Edit this file to update the whole site.

export const profile = {
  name: "Thai Bao Ngoc Phan",
  shortName: "Thai Phan",
  title: "Mechanical Engineering Student, UCLA",
  goal: "Seeking a Summer 2027 Mechanical Engineering internship",
  summary:
    "I design parts and assemblies in SolidWorks and Onshape, check them against drawings and tolerances, and test ideas with MATLAB and Simulink. At AIG Tech I turned functional requirements into manufacturable conveyor and tooling designs.",
  location: "Los Angeles + San Jose, CA",
  email: "ptbngoc0708@gmail.com",
  phone: "408-386-8675",
  linkedin: "https://linkedin.com/in/tbngoc102",
  github: "https://github.com/marblephan07082004-stack",
  status: "US Permanent Resident",
};

export const education = [
  {
    school: "University of California, Los Angeles (UCLA)",
    degree: "B.S. in Mechanical Engineering",
    date: "Expected June 2028",
    detail: "UCLA Samueli Engineering Scholarship",
  },
  {
    school: "De Anza College, Cupertino, CA",
    degree: "Associate Degree in Mathematics and Engineering",
    date: "June 2026",
    detail: "GPA 3.8 · Dean's List, all quarters",
  },
];

export const experience = [
  {
    role: "Mechanical Design Intern",
    org: "Applied Innovation Group Inc. (AIG Tech), Santa Clara, CA",
    date: "Oct 2025 – Apr 2026",
    points: [
      "Designed and revised 16–20 SolidWorks part models and assemblies for conveyor and automation-line components and custom assembly-station tooling, translating functional requirements into manufacturable 3D designs.",
      "Interpreted engineering drawings, specifications, and technical documentation to verify dimensions, tolerances, fits, and mating interfaces, then revised CAD models for proper function, clearance, and assembly.",
      "Researched and selected off-the-shelf components, including fasteners and bearings, and integrated them into assemblies with appropriate mates, interfaces, and clearances.",
    ],
    tools: ["SolidWorks", "Engineering Drawings", "GD&T", "Component Selection"],
  },
  {
    role: "Semiconductor Training Fellow",
    org: "ChipMango, Remote",
    date: "Jul 2026 – Sep 2026",
    points: [
      "Completed a 4-week microelectronics program covering semiconductor physics, diodes, BJT/FET transistors, and DC/AC circuit analysis.",
      "Ran SPICE simulations of transistor and diode circuits and applied Boolean algebra, sequential logic, and Verilog/VHDL basics to digital design.",
      "Completed all 8 assessments and the final to earn ChipMango certification.",
    ],
    tools: ["SPICE", "Verilog", "VHDL", "FPGA/ASIC verification"],
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  imageAlt: string;
  summary: string;
  role: string[];
  highlights: string[];
  tools: string[];
  repo?: string;
  repoLabel?: string;
  results?: {
    caption: string;
    image?: string;
    imageAlt?: string;
    columns: string[];
    rows: string[][];
    note?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "electric-blue-stormcaster",
    title: "Electric Blue “Stormcaster”",
    subtitle: "UCLA HAcK 2026 · 48-hour hardware competition",
    date: "Jul – Aug 2026",
    image: "/images/stormcaster.jpg",
    imageAlt:
      "Stormcaster, a cloud-shaped instrument with eight colored raindrop keys hanging below it",
    summary:
      "A cloud-shaped electronic instrument with eight raindrop keys (C4–C5), a lightning-bolt slider for volume, three sound-effect switches, and LEDs behind star cut-outs that light when a note plays. Built by a team of four (mechanical, computer science, electrical) and performed live on stage.",
    role: ["CAD in Onshape", "Team website"],
    highlights: [
      "Laser-cut wood top and bottom shells to save 3D-printing time; 3D-printed side shells that snap together on pins so the cloud opens and closes.",
      "Redesigned the side shells after testing so the key tubes sit low enough for the buttons to touch the playing surface.",
      "Trimmed the raindrop key covers to leave room for the tube stopper, and engraved note names so the performer can read them.",
      "Raspberry Pi Pico 2 W drives 23 GPIO pins: amplifier, 8 keys, 8 LEDs, 3 effect switches, and 1 volume potentiometer.",
      "Fixed noisy audio by switching the amplifier from forced breadboard contact to header pins, on mentor advice.",
    ],
    tools: ["Onshape", "3D printing", "Laser cutting", "Raspberry Pi Pico 2 W", "Python", "HTML/CSS", "GitHub"],
    repo: "https://github.com/LilaForsythe/Hack_ElectricBlue_Summer2026",
    repoLabel: "Team repository",
  },
  {
    slug: "quarter-car-suspension",
    title: "Quarter-Car Suspension Simulation",
    subtitle: "MathWorks Engineering Project Group · Remote",
    date: "Jul – Aug 2026",
    image: "",
    imageAlt: "",
    summary:
      "A model-based design study of one corner of a car. I built the sprung and unsprung masses, a parameterized spring-damper, and tire compliance in Simscape Multibody, then wrote a MATLAB test suite that runs five road profiles and scores comfort, suspension travel, and tire deflection against pass/fail limits.",
    role: ["Simscape Multibody model", "Road test suite", "Scoring and test runner", "Parameter sweep", "Robustness check"],
    highlights: [
      "Model: 300 kg sprung mass and 40 kg unsprung mass, with baseline Ks = 12,000 N/m, Cs = 1,000 N·s/m, tire stiffness Kt = 190,000 N/m, and tire damping Ct = 100 N·s/m.",
      "Road suite (roadSuite.m): speed bump and pothole (5 cm half-sine, 0.5 s), rough road (about ±1 cm random noise smoothed with a moving average), washboard (2 cm at 4 Hz), and two bumps in sequence to check recovery.",
      "Scoring (scoreSuspension.m): logs sprung-mass acceleration, suspension travel, and tire deflection, then computes RMS comfort, max travel, max tire deflection, and a combined score.",
      "Test runner (runAllTests.m): runs all five roads, checks limits (comfort ≤ 2.0, travel ≤ 0.08 m, tire deflection ≤ 0.03 m), and saves a summary table and chart.",
      "Tuning (tuneSuspension.m): swept 25 Ks/Cs combinations (Ks 12,000–20,000 N/m, Cs 1,000–3,000 N·s/m). Comfort and travel met their limits everywhere, but tire deflection failed on impulsive roads in every combination. The lowest worst-case score came from Ks = 12,000 and Cs = 1,000.",
      "Robustness (robustnessTest.m): raised the sprung mass 25% and reran the suite. The pass rate stayed at 2 of 5 roads, with the same three impulsive cases failing.",
      "Conclusion: road holding is limited by tire stiffness and damping (Kt/Ct), which were outside the tuning scope. Next step is to add Kt/Ct to the sweep and run the ±10% Ks/Cs Monte Carlo study.",
    ],
    tools: ["MATLAB", "Simulink", "Simscape Multibody", "Simulink.SimulationInput"],
    repo: "https://github.com/poopylaw/QuarterCar3",
    repoLabel: "Project repository",
    results: {
      caption: "Results at baseline (Ks = 12,000, Cs = 1,000)",
      image: "/images/quartercar-scores.png",
      imageAlt:
        "Bar chart of suspension score by road case. Pothole, speed bump, and washboard are near 0.056, two bumps is about 0.057, and rough road is lowest at about 0.016.",
      columns: ["Road case", "Comfort RMS", "Max travel (m)", "Max tire deflection (m)", "Score", "Pass"],
      rows: [
        ["Speed bump", "0.0054", "1.93e-4", "0.0501", "0.0556", "No"],
        ["Pothole", "0.0054", "1.93e-4", "0.0501", "0.0556", "No"],
        ["Rough road", "0.0104", "6.60e-5", "0.0053", "0.0158", "Yes"],
        ["Washboard", "0.0350", "4.46e-4", "0.0201", "0.0556", "Yes"],
        ["Two bumps", "0.0071", "1.93e-4", "0.0501", "0.0574", "No"],
      ],
      note: "Lower score is better. Tire deflection on the three impulsive roads is about 0.05 m against a 0.03 m limit.",
    },
  },
  {
    slug: "med4u-pill-dispenser",
    title: "MED4Ü Automatic Pill Dispenser",
    subtitle: "De Anza College · E10 Introduction to Engineering · Dec 2024",
    date: "Fall 2024",
    image: "/images/med4u-cad.png",
    imageAlt:
      "SolidWorks model of the dispenser: a square base plate with a ring-shaped tray, a rotating arm, and a pill chute with a raised lip",
    summary:
      "A motor-driven rotating dispenser that releases the right dose at a scheduled time, then alerts the user with a beeping buzzer and a flashing red LED. Pills drop into a larger chute so they are easier to grab. Built by a team of seven.",
    role: ["CAD in SolidWorks", "Market survey and research"],
    highlights: [
      "Problem: about 59% of patients on maintenance medication have forgotten a dose (Express Scripts). In our 15-person survey, 91.7% had forgotten a dose at least rarely.",
      "Hardware: Arduino Uno, DS3231 real-time clock, 16x2 LCD, servo to rotate the compartments, push button, buzzer, and LED.",
      "Firmware keeps time on the RTC, turns the servo in 45° steps, flashes the LED and sounds the buzzer, and waits for a button press to confirm.",
      "Tracked the build with a Gantt chart and parts budget. Total project cost: $65.19.",
    ],
    tools: ["SolidWorks", "Arduino", "C++", "DS3231 RTC", "Servo motor"],
  },
];

export const skills = [
  { group: "CAD and design", items: ["SolidWorks (part modeling, assemblies)", "Onshape", "Engineering drawings", "GD&T", "Component selection"] },
  { group: "Analysis and simulation", items: ["MATLAB", "Simulink", "Simscape Multibody", "SPICE"] },
  { group: "Fabrication and electronics", items: ["3D printing", "Laser cutting", "Raspberry Pi Pico", "Arduino", "Verilog / VHDL basics"] },
  { group: "Software", items: ["Python", "HTML/CSS", "GitHub", "Microsoft Excel, PowerPoint, Word"] },
  { group: "Languages", items: ["Vietnamese (native)", "English (fluent)"] },
];

export const involvement = [
  {
    role: "Manager, Cashier and Barista",
    org: "The Sweet Corners, San Jose, CA",
    date: "Aug 2024 – Jun 2026",
    text: "Managed opening and closing, scheduled shifts, and ordered ingredients before stock ran out. Processed $1,000+ in orders per day.",
  },
  {
    role: "VSA Volunteer",
    org: "De Anza College and Yerba Buena High School",
    date: "Apr 2022 – May 2026",
    text: "150+ hours supporting community events, including the Walk to End Alzheimer's.",
  },
  {
    role: "Election Officer",
    org: "Santa Clara County General Election",
    date: "Oct – Nov 2022",
    text: "30+ hours supporting voter services in English and Vietnamese.",
  },
];
