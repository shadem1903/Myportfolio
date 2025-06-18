import React from "react";
import { Card, CardBody, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
  icon: string;
}

export const Education: React.FC = () => {
  const education: Education[] = [
    {
      id: 1,
      degree: "Máster en Ingeniería de Software",
      institution: "Universidad Tecnológica",
      period: "2016 - 2018",
      description: "Especialización en desarrollo web y arquitectura de software. Proyecto final sobre optimización de rendimiento en aplicaciones React.",
      icon: "lucide:graduation-cap",
    },
    {
      id: 2,
      degree: "Ingeniería en Sistemas Computacionales",
      institution: "Universidad Nacional",
      period: "2012 - 2016",
      description: "Formación en fundamentos de programación, estructuras de datos, bases de datos y desarrollo de software.",
      icon: "lucide:book-open",
    },
  ];

  const certifications = [
    "AWS Certified Developer Associate",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "React Advanced Patterns",
    "TypeScript Professional Developer"
  ];

  return (
    <div>
      <h2 className="section-title text-center">Educación</h2>
      
      <div className="relative">
        <div className="timeline-line hidden md:block"></div>
        
        {education.map((edu) => (
          <Card 
            key={edu.id} 
            className="mb-12 glass-card glow-border relative"
          >
            <div className="timeline-dot hidden md:flex"></div>
            <CardBody className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex items-start justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center shadow-neon-blue">
                    <Icon icon={edu.icon} className="text-white text-3xl" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <h3 className="text-2xl font-semibold gradient-text">{edu.degree}</h3>
                    <Chip color="secondary" variant="shadow" size="sm" className="md:ml-2 bg-neon-purple/20 text-neon-purple">{edu.period}</Chip>
                  </div>
                  <h4 className="text-neon-blue/80 mb-4 text-lg">{edu.institution}</h4>
                  <p className="text-foreground-400">{edu.description}</p>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      
      <Card className="mt-12 glass-card glow-border">
        <CardBody className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center shadow-neon-blue">
              <Icon icon="lucide:award" className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold gradient-text">Certificaciones</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, index) => (
              <Chip key={index} variant="shadow" className="mb-2 bg-neon-purple/20 text-neon-purple border border-neon-purple/30">
                {cert}
              </Chip>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};