import React from "react";
import { Card, CardBody, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  skills: string[];
  logo: string;
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "Tech Solutions Inc.",
      position: "Desarrollador Frontend Senior",
      period: "Enero 2022 - Presente",
      description: "Desarrollo de aplicaciones web utilizando React, TypeScript y GraphQL. Implementación de arquitecturas escalables y optimización de rendimiento. Liderazgo técnico de un equipo de 4 desarrolladores.",
      skills: ["React", "TypeScript", "GraphQL", "Redux", "Jest"],
      logo: "lucide:code",
    },
    {
      id: 2,
      company: "Digital Innovations",
      position: "Desarrollador Full Stack",
      period: "Marzo 2020 - Diciembre 2021",
      description: "Desarrollo de soluciones web completas utilizando el stack MERN. Implementación de APIs RESTful y bases de datos NoSQL. Colaboración en equipos ágiles con metodología Scrum.",
      skills: ["MongoDB", "Express", "React", "Node.js", "Docker"],
      logo: "lucide:server",
    },
    {
      id: 3,
      company: "Creative Web Agency",
      position: "Desarrollador Frontend",
      period: "Junio 2018 - Febrero 2020",
      description: "Desarrollo de sitios web responsivos y aplicaciones SPA. Implementación de diseños UI/UX y optimización para dispositivos móviles. Colaboración con diseñadores y stakeholders.",
      skills: ["JavaScript", "HTML5", "CSS3", "Sass", "Vue.js"],
      logo: "lucide:layout",
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="section-title text-center">Experiencia Profesional</h2>
      
      <div className="relative">
        <div className="timeline-line hidden md:block"></div>
        
        {experiences.map((exp, index) => (
          <Card 
            key={exp.id} 
            className="mb-12 glass-card glow-border relative"
          >
            <div className="timeline-dot hidden md:flex"></div>
            <CardBody className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex items-start justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center shadow-neon-blue">
                    <Icon icon={exp.logo} className="text-white text-3xl" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <h3 className="text-2xl font-semibold gradient-text">{exp.position}</h3>
                    <Chip color="secondary" variant="shadow" size="sm" className="md:ml-2 bg-neon-purple/20 text-neon-purple">{exp.period}</Chip>
                  </div>
                  <h4 className="text-neon-blue/80 mb-4 text-lg">{exp.company}</h4>
                  <p className="text-foreground-400 mb-6">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Chip key={skill} variant="flat" size="sm" className="bg-dark-card border border-neon-blue/30 text-neon-blue">{skill}</Chip>
                    ))}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};