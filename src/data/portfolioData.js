export const portfolioData = {
  personal: {
    name: "Sneh",
    title: "Software Engineer",
    roles: ["Distributed Systems", "High-Scale Kafka Pipelines", "Performance-First Web Apps"],
    tagline: "Software Engineer @ Coinbase | Distributed Systems | Kafka | GraphQL",
    bio: "I architect high-performance, distributed systems that scale to millions. Focused on observability, reliability, and engineering excellence.",
    email: "snehshah1675@gmail.com", // Placeholder based on common developer patterns or use sneh@example.com
    github: "https://github.com/Sneh16Shah",
    linkedin: "https://www.linkedin.com/in/snehshah16/",
    twitter: "https://x.com/SnehShah1675",
    resume: "https://drive.google.com/file/d/1kEyDaOi5VfsX28laJWlBSc9pCEVkYlv7/view?usp=sharing"
  },
  experience: [
    {
      company: "Coinbase",
      logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/coinbase-logo-icon.png",
      role: "Software Engineer",
      period: "Jun 2024 - Present",
      location: "Remote - India",
      techStack: ["Golang", "Kafka", "GraphQL", "Datadog", "Amplitude", "GitHub Actions"],
      metrics: {
        users: "1B+ users",
        impact: "2M+ users impacted via language picker"
      },
      points: [
        "Architected a scalable Kafka-based consumer-producer system for Equities Onboarding with Datadog and Amplitude monitoring.",
        "Revamped liquidation calculation system using GraphQL, improving performance for approximately 1B users.",
        "Delivered a unified internationalization platform with automated GitHub Actions pipelines for 100+ services.",
        "Developed an AI-assisted localization bug detection system simulating real user journeys to automate Jira reporting.",
        "Launched a mobile language picker impacting 2M+ users, resolving complex multi-language notification issues."
      ]
    },
    {
      company: "Rubrik",
      logo: "https://www.rubrik.com/content/dam/rubrik/brand/logos/logomark/Rubrik_Logomark_Gradient.png",
      role: "Software Engineer Intern",
      period: "Jan 2024 - Jun 2024",
      location: "Bengaluru, India",
      techStack: ["Golang", "AWS/AZURE/GCP", "React"],
      metrics: {
        savings: "300+ resources optimized",
        efficiency: "Significant cost reduction in computation"
      },
      points: [
        "Designed a system identifying 300+ leaked cloud resources within a month, optimizing customer spend.",
        "Implemented automatic failure-skipping logic to significantly reduce computation costs.",
        "Built an error-handling framework with actionable UI guidance, reducing engineering workload.",
        "Developed a scalable action-item system supporting 500+ error types with direct troubleshooting links."
      ]
    },
    {
      company: "Razorpay",
      logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/razorpay-icon.png",
      role: "Software Development Engineer Intern",
      period: "May 2023 - July 2023",
      location: "Bengaluru, India",
      techStack: ["Golang", "Postman"],
      metrics: {
        gateways: "25+ gateways integrated",
        speed: "Real-time anomaly detection"
      },
      points: [
        "Built a backend system detecting refund movement across 25+ gateways with real-time Slack anomaly alerts."
      ]
    }
  ],
  education: [
    {
      institution: "IIIT Allahabad",
      degree: "BTech in Information Technology",
      period: "2020 - 2024",
      gpa: "8.94/10"
    }
  ],
  projects: [
    {
      title: "RailView",
      description: "Full-stack railway review platform with robust authentication, authorization, and CRUD features.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://railviews.onrender.com/",
      github: "https://github.com/Sneh16Shah/RailView"
    }
  ],
  skills: {
    foundations: [
      { name: "Golang", proficiency: 95, frequency: "Daily" },
      { name: "JavaScript", proficiency: 90, frequency: "Daily" },
      { name: "TypeScript", proficiency: 85, frequency: "Daily" },
      { name: "Python", proficiency: 80, frequency: "Weekly" },
      { name: "SQL", proficiency: 85, frequency: "Regular" }
    ],
    infrastructure: [
      { name: "Kafka", proficiency: 90, frequency: "Daily" },
      { name: "GraphQL", proficiency: 85, frequency: "Daily" },
      { name: "Node.js", proficiency: 85, frequency: "Weekly" },
      { name: "Git", proficiency: 95, frequency: "Daily" },
      { name: "GitHub Actions", proficiency: 80, frequency: "Weekly" },
      { name: "Docker", proficiency: 75, frequency: "Regular" }
    ],
    observability: [
      { name: "Datadog", proficiency: 85, frequency: "Daily" },
      { name: "Amplitude", proficiency: 80, frequency: "Daily" },
      { name: "MongoDB", proficiency: 80, frequency: "Weekly" }
    ]
  },
  achievements: [
    {
      title: "IEEE Publication",
      platform: "IEEE",
      description: "Hard Exudates Segmentation From Retinal Fundus Images, 2023.",
      rank: "Published Author",
      link: "https://ieeexplore.ieee.org/abstract/document/10455339"
    },
    {
      title: "CodeChef",
      platform: "CodeChef",
      description: "Global Ranks 39, 77 (9,000+ participants).",
      rank: "Global Top 100",
      link: "https://codeforces.com/profile/Sneh16"
    },
    {
      title: "LeetCode",
      platform: "LeetCode",
      description: "Knight (Rating: 2100), Global Ranks 300, 731, 948, 1100.",
      rank: "Knight (Top 0.5%)",
      link: "https://leetcode.com/u/Sneh_1610/"
    },
    {
      title: "Google Kick Start",
      platform: "Google",
      description: "Global Rank 1965 in Round D.",
      rank: "Global Top 2000"
    },
    {
      title: "JEE-MAIN",
      platform: "NTA",
      description: "All India Rank (AIR) 1675 among 1M+ candidates.",
      rank: "Top 0.17%"
    }
  ]
};
