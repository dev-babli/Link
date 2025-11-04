"use client";

import { EnhancedEnhancedIndustryPageTemplate } from "@/components/EnhancedEnhancedIndustryPageTemplate";

export default function EducationPage() {
  return (
    <EnhancedIndustryPageTemplate
      title="Education & E-learning"
      subtitle="Digital Learning Solutions"
      description="Transform education delivery with innovative EdTech solutions. We build learning management systems, interactive learning platforms, and educational technology that enhances student engagement, improves outcomes, and scales educational access."
      heroImage="/images/industry_cards/Education and Elearning.webp"
      keyStats={[
        { value: "30+", label: "Education Projects" },
        { value: "500K+", label: "Students Served" },
        { value: "85%", label: "Engagement Rate" },
        { value: "15+", label: "Education Clients" },
      ]}
      challenges={[
        "Engaging students in online and hybrid learning environments",
        "Managing course content and learning materials",
        "Tracking student progress and assessment",
        "Ensuring accessibility and inclusivity",
        "Scaling learning platforms for large student populations",
        "Integrating with existing school systems (SIS, LMS)",
        "Providing real-time feedback and analytics",
        "Supporting various learning styles and formats",
      ]}
      solutions={[
        {
          title: "Learning Management Systems (LMS)",
          description: "Comprehensive platforms for creating, delivering, and managing courses with content libraries, assignments, assessments, and gradebooks."
        },
        {
          title: "Virtual Classrooms",
          description: "Interactive video conferencing platforms with whiteboards, screen sharing, breakout rooms, and real-time collaboration tools for online learning."
        },
        {
          title: "Student Information Systems (SIS)",
          description: "Centralized systems for managing student records, enrollment, attendance, transcripts, and administrative processes."
        },
        {
          title: "Adaptive Learning Platforms",
          description: "AI-powered learning systems that personalize content delivery, adjust difficulty levels, and provide targeted recommendations based on student performance."
        },
        {
          title: "Assessment & Testing Platforms",
          description: "Secure online testing platforms with proctoring, plagiarism detection, automated grading, and detailed analytics."
        },
        {
          title: "Educational Analytics",
          description: "Data analytics platforms that track student engagement, identify at-risk students, measure learning outcomes, and provide insights for educators."
        },
      ]}
      caseStudies={[
        {
          title: "University System - LMS Implementation",
          description: "Deployed a comprehensive learning management system across 12 campuses, supporting 100,000+ students with integrated course management, assessments, and analytics.",
          result: "Improved student engagement by 65%, reduced administrative workload by 40%, and increased course completion rates by 25%"
        },
        {
          title: "K-12 School District - Virtual Learning Platform",
          description: "Built a customized virtual learning platform with interactive lessons, virtual classrooms, and parent portals for a district serving 25,000 students.",
          result: "Enabled seamless remote learning, increased parent engagement by 50%, and improved student attendance by 30%"
        },
        {
          title: "Corporate Training Platform - Skills Development",
          description: "Developed an enterprise learning platform with micro-learning modules, skill assessments, and certification tracking for a Fortune 500 company.",
          result: "Trained 50,000+ employees, improved skill certification rates by 85%, and reduced training costs by 45%"
        },
      ]}
      expertise={[
        "Learning Management Systems",
        "Virtual Classrooms",
        "Student Information Systems",
        "Adaptive Learning",
        "Assessment Platforms",
        "Educational Analytics",
        "Content Management",
        "Gamification",
        "Mobile Learning",
        "SCORM Compliance",
        "Learning Analytics",
        "Student Portals",
      ]}
    />
  );
}
