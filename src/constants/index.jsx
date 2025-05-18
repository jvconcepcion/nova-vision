import { BotMessageSquare } from "lucide-react"
import { BatteryCharging } from "lucide-react"
import { Fingerprint } from "lucide-react"
import { ShieldHalf } from "lucide-react"
import { PlugZap } from "lucide-react"
import { GlobeLock } from "lucide-react"

import user1 from "../assets/profile-pictures/user1.jpg"
import user2 from "../assets/profile-pictures/user2.jpg"
import user3 from "../assets/profile-pictures/user3.jpg"
import user4 from "../assets/profile-pictures/user4.jpg"
import user5 from "../assets/profile-pictures/user5.jpg"
import user6 from "../assets/profile-pictures/user6.jpg"

export const navItems = [
  { label: "Features", href: "#feature" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
]

export const testimonials = [
  {
    user: "Jake Thompson",
    company: "NextGen Labs",
    image: user1,
    text: "The team's ability to deliver high-quality solutions in record time has significantly boosted our productivity. Their communication was clear and consistent throughout the project.",
  },
  {
    user: "Sarah Rodriguez",
    company: "Skyline Innovations",
    image: user2,
    text: "Innovative approach combined with seamless collaboration made this partnership invaluable. They transformed our vague concepts into a cutting-edge digital platform that's revolutionized our operations.",
  },
  {
    user: "Dave Curt",
    company: "NovaTech Solutions",
    image: user3,
    text: "Exceptional service from start to finish. What impressed me most was their ability to adapt to changing requirements while maintaining the highest industry standards throughout the development process.",
  },
  {
    user: "Daniel Kim",
    company: "Eclipse Enterprises",
    image: user4,
    text: "This team combines technical expertise with strategic vision. They helped us identify opportunities we hadn't considered and delivered measurable results within aggressive timelines.",
  },
  {
    user: "Mike Martinez",
    company: "Pinnacle Studios",
    image: user5,
    text: "A perfect blend of creativity and technical mastery. Our new system not only looks fantastic but performs flawlessly under heavy demand, thanks to their meticulous implementation.",
  },
  {
    user: "Natalia Wilson",
    company: "Vertex Dynamics",
    image: user6,
    text: "Outstanding work that exceeded all benchmarks. The post-launch support and continued optimization efforts show their commitment to long-term client success.",
  },
]

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
]

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
]

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
]

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
]

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
]

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
]
