"use client"

import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack"

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Research and Analysis",
    description:
      "With your vision in mind, we enter the Research and Analysis phase. Here, we examine your competitors, industry trends, and user preferences. This informed approach ensures your website stands out and provides an excellent user experience.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: "process-2",
    title: "Wireframing and Prototyping",
    description:
      "We move on to Wireframing and Prototyping, where we create skeletal representations of your website's pages. These visual indigoprints allow us to test and refine the user experience before diving into design.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "process-3",
    title: "Design Creation",
    description:
      "Now, it's time for the Design Creation phase. Our talented designers bring your vision to life. We focus on aesthetics, ensuring your website not only looks stunning but also aligns perfectly with your brand identity.",
    image: "https://images.unsplash.com/photo-1561070791-2526def94a69?q=80&w=2056&auto=format&fit=crop",
  },
  {
    id: "process-4",
    title: "Development and Testing",
    description:
      "In the Development and Testing phase, our skilled developers turn designs into a fully functional website. Rigorous testing ensures everything works seamlessly, providing an exceptional user experience.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: "process-5",
    title: "Launch and Support",
    description:
      "Our commitment continues beyond launch. We offer post-launch support to address questions, provide assistance, and ensure your website remains updated and optimized. The Website Design Process isn't just about creating a website; it's about crafting a digital experience that resonates, engages, and converts.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
  },
]

const WORK_PROJECTS = [
  {
    id: "work-project-3",
    title: "YCF DEV",
    services: ["Portfolio", "Partnership", "UI UX Design"],
    imageUrl:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "work-project-1",
    title: "Stridath Ecommerce",
    services: ["E-Commerce", "Branding", "UI UX Design", "Development"],
    imageUrl:
      "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "work-project-2",
    title: "Marketing Agency",
    services: ["Partnership", "UI UX Design", "Development"],
    imageUrl:
      "https://images.unsplash.com/photo-1683803055067-1ca1c17cb2b9?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

const ACHIEVEMENTS = [
  {
    id: "achivement-1",
    title: "4",
    description: "site of the day",
    bg: "rgb(58,148,118)",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    id: "achivement-2",
    title: "60+",
    description: "website created",
    bg: "rgb(195,97,158)",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: "achivement-3",
    title: "5+",
    description: "years of experience",
    bg: "rgb(202,128,53)",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "achivement-4",
    title: "6+",
    description: "component created",
    bg: "rgb(135,95,195)",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
  },
]

export const Process = () => {
  return (
    <div className="w-full bg-white px-4 py-12 text-gray-900 sm:px-6 md:px-8 xl:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 xl:gap-16">
          <div className="left-0 top-0 md:sticky md:h-[calc(100vh-6rem)] md:py-12">
            <div className="flex h-full flex-col justify-center">
              <h5 className="mb-4 text-xs uppercase tracking-wide text-gray-600">our process</h5>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Planning your{" "}
                <span className="text-indigo-600">project development</span> journey
              </h2>
              <p className="max-w-prose text-sm leading-relaxed text-gray-600 sm:text-base">
                Our journey begins with a deep dive into your vision. In the
                Discovery phase, we engage in meaningful conversations to grasp your
                brand identity, goals, and the essence you want to convey. This
                phase sets the stage for all that follows.
              </p>
            </div>
          </div>
          <ContainerScroll className="min-h-[300vh] space-y-6 py-8 md:min-h-[400vh] md:space-y-8 md:py-12">
            {PROCESS_PHASES.map((phase, index) => (
              <CardSticky
                key={phase.id}
                index={index + 2}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-0 shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="relative h-48 w-full overflow-hidden sm:h-56 md:h-64">
                  <img
                    src={phase.image}
                    alt={phase.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 right-4">
                    <span className="text-3xl font-bold text-white sm:text-4xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h2 className="mb-4 text-xl font-bold tracking-tighter text-gray-900 sm:text-2xl">
                    {phase.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                    {phase.description}
                  </p>
                </div>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>
      </div>
    </div>
  )
}

export const Work = () => {
  return (
    <div className="w-full bg-white px-4 py-12 text-gray-900 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-12">
          <h5 className="mb-4 text-xs uppercase tracking-wide text-gray-600">latest projects</h5>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Get a glimpse of <span className="text-indigo-600">our work</span>
          </h2>
          <p className="mx-auto max-w-prose text-sm leading-relaxed text-gray-600 sm:text-base">
            From ecommerce to startup landing pages and singl/multi page websites,
            building fully responsive and functional website that showcase your
            product and your unique identity.
          </p>
        </div>
        <ContainerScroll className="min-h-[300vh] py-6 sm:min-h-[400vh] md:min-h-[500vh] md:py-12">
          {WORK_PROJECTS.map((project, index) => (
            <CardSticky
              key={project.id}
              index={index}
              className="group w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-shadow hover:shadow-xl"
              incrementY={60}
              incrementZ={5}
            >
              <div className="relative h-64 w-full overflow-hidden sm:h-80">
                <img
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width="100%"
                  height="100%"
                  src={project.imageUrl}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 bg-white px-4 py-4 sm:px-6 sm:py-5">
                <h2 className="text-xl font-bold tracking-tighter text-gray-900 sm:text-2xl">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <div
                      key={service}
                      className="flex rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 sm:rounded-xl sm:px-4"
                    >
                      <span className="tracking-tight">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </div>
  )
}

export const Achievements = () => {
  return (
    <div className="w-full bg-white px-4 py-12 text-gray-900 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-12">
          <h5 className="mb-4 text-xs uppercase tracking-wide text-gray-600">achievements</h5>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Our <span className="text-indigo-600">milestones</span>
          </h2>
        </div>
        <ContainerScroll className="min-h-[300vh] place-items-center space-y-6 py-6 text-center sm:min-h-[400vh] md:space-y-8 md:py-12">
          {ACHIEVEMENTS.map((achievement, index) => (
            <CardSticky
              key={achievement.id}
              incrementY={20}
              index={index + 2}
              className="group relative flex h-64 w-full max-w-md flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-shadow hover:shadow-xl sm:h-72 sm:w-[420px]"
              style={{ rotate: index + 2 }}
            >
              <div className="absolute inset-0">
                <img
                  src={achievement.image}
                  alt={achievement.description}
                  className="h-full w-full object-cover opacity-20 transition-opacity duration-300 group-hover:opacity-30"
                />
              </div>
              <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                <div className="text-left">
                  <h1 className="text-5xl font-semibold text-gray-900 sm:text-6xl">
                    {achievement.title}
                  </h1>
                </div>
                <div className="text-right">
                  <h3 className="max-w-[10ch] text-wrap text-2xl font-semibold capitalize tracking-tight text-gray-800 sm:text-3xl">
                    {achievement.description}
                  </h3>
                </div>
              </div>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </div>
  )
}

