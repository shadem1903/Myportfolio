import React from "react";
import { Card, CardBody, Progress, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

interface SkillCategory {
  id: number;
  name: string;
  icon: string;
  skills: {
    name: string;
    level: number;
    icon?: string;
  }[];
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      name: "Frontend",
      icon: "lucide:layout",
      skills: [
        { name: "React", level: 90, icon: "logos:react" },
        { name: "TypeScript", level: 85, icon: "logos:typescript-icon" },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90, icon: "logos:javascript" },
        { name: "Vue.js", level: 75, icon: "logos:vue" },
      ],
    },
    {
      id: 2,
      name: "Backend",
      icon: "lucide:server",
      skills: [
        { name: "Node.js", level: 85, icon: "logos:nodejs-icon" },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75, icon: "logos:mongodb" },
        { name: "PostgreSQL", level: 70, icon: "logos:postgresql" },
        { name: "GraphQL", level: 65, icon: "logos:graphql" },
      ],
    },
    {
      id: 3,
      name: "Herramientas",
      icon: "lucide:tool",
      skills: [
        { name: "Git", level: 90, icon: "logos:git-icon" },
        { name: "Docker", level: 75, icon: "logos:docker-icon" },
        { name: "Jest", level: 80 },
        { name: "Webpack", level: 70, icon: "logos:webpack" },
        { name: "CI/CD", level: 65 },
      ],
    },
  ];

  return (
    <div>
      <h2 className="section-title text-center">Habilidades Técnicas</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <Card key={category.id} className="col-span-1 glass-card glow-border">
            <CardBody className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center shadow-neon-blue">
                  <Icon icon={category.icon} className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-semibold gradient-text">{category.name}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="mb-3">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        {skill.icon && (
                          <Icon icon={skill.icon} className="text-xl" />
                        )}
                        <span className="font-medium text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm text-neon-blue font-medium">{skill.level}%</span>
                    </div>
                    <div className="progress-bar-wrapper">
                      <div 
                        className="progress-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      
      <Card className="mt-10 glass-card glow-border">
        <CardBody className="p-8">
          <h3 className="text-2xl font-semibold mb-6 gradient-text">Otras Habilidades</h3>
          <div className="flex flex-wrap gap-3">
            <Chip color="primary" variant="shadow" className="text-sm bg-neon-blue/20 text-neon-blue border border-neon-blue/30">UI/UX Design</Chip>
            <Chip color="primary" variant="shadow" className="text-sm bg-neon-blue/20 text-neon-blue border border-neon-blue/30">Responsive Design</Chip>
            <Chip color="primary" variant="shadow" className="text-sm bg-neon-blue/20 text-neon-blue border border-neon-blue/30">SEO</Chip>
            <Chip color="primary" variant="shadow" className="text-sm bg-neon-blue/20 text-neon-blue border border-neon-blue/30">Agile/Scrum</Chip>
            <Chip color="secondary" variant="shadow" className="text-sm bg-neon-purple/20 text-neon-purple border border-neon-purple/30">Team Leadership</Chip>
            <Chip color="secondary" variant="shadow" className="text-sm bg-neon-purple/20 text-neon-purple border border-neon-purple/30">Project Management</Chip>
            <Chip color="secondary" variant="shadow" className="text-sm bg-neon-purple/20 text-neon-purple border border-neon-purple/30">Performance Optimization</Chip>
            <Chip color="secondary" variant="shadow" className="text-sm bg-neon-purple/20 text-neon-purple border border-neon-purple/30">Accessibility</Chip>
            <Chip color="primary" variant="shadow" className="text-sm bg-neon-blue/20 text-neon-blue border border-neon-blue/30">Cross-browser Compatibility</Chip>
            <Chip color="primary" variant="shadow" className="text-sm bg-neon-blue/20 text-neon-blue border border-neon-blue/30">Mobile-first Development</Chip>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};