import React from "react";
import { Card, CardBody, CardFooter, Button, Link, Image, Chip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/react";
import { Icon } from "@iconify/react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
  liveUrl: string;
}

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "Panel de administración para tiendas online con análisis de ventas, gestión de inventario y seguimiento de pedidos en tiempo real.",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1",
      tags: ["React", "TypeScript", "Recharts", "Firebase"],
      demoUrl: "#",
      codeUrl: "#",
      liveUrl: "https://dashboard-example.com",
    },
    {
      id: 2,
      title: "App de Gestión de Tareas",
      description: "Aplicación para organizar tareas con funcionalidades de arrastrar y soltar, etiquetas personalizadas y recordatorios.",
      image: "https://img.heroui.chat/image/ai?w=600&h=400&u=2",
      tags: ["React", "Redux", "Node.js", "MongoDB"],
      demoUrl: "#",
      codeUrl: "#",
      liveUrl: "https://tasks-app-example.com",
    },
    {
      id: 3,
      title: "Plataforma de Aprendizaje",
      description: "Plataforma educativa con cursos interactivos, seguimiento de progreso y sistema de certificación.",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3",
      tags: ["Vue.js", "Express", "PostgreSQL", "AWS"],
      demoUrl: "#",
      codeUrl: "#",
      liveUrl: "https://learning-platform-example.com",
    },
  ];

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2 className="section-title text-center">Proyectos Destacados</h2>
      
      <div className="grid grid-cols-1 gap-12">
        {projects.map((project) => (
          <Card 
            key={project.id} 
            className="col-span-1 glass-card glow-border overflow-hidden"
          >
            <CardBody className="p-0">
              <div className="relative">
                <Image
                  removeWrapper
                  alt={project.title}
                  className="w-full h-80 object-cover"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-deep-blue/80 to-transparent flex items-end">
                  <div className="p-8 w-full">
                    <h3 className="text-3xl font-bold gradient-text mb-4">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag) => (
                        <Chip key={tag} variant="shadow" size="sm" className="bg-neon-blue/20 text-neon-blue border border-neon-blue/30">{tag}</Chip>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
            <CardBody className="p-8">
              <p className="text-foreground-400 mb-6 text-lg">{project.description}</p>
            </CardBody>
            <CardFooter className="flex flex-wrap justify-between gap-4 px-8 pb-8">
              <Button 
                onPress={() => handleOpenModal(project)}
                color="secondary" 
                variant="shadow"
                startContent={<Icon icon="lucide:eye" />}
                className="bg-gradient-to-r from-neon-purple to-neon-blue text-white border-none shadow-neon-purple"
              >
                Visitar Sitio
              </Button>
              <Button 
                as={Link} 
                href={project.demoUrl} 
                color="primary" 
                variant="shadow"
                startContent={<Icon icon="lucide:external-link" />}
                isExternal
                className="bg-gradient-to-r from-neon-blue to-neon-purple text-white border-none shadow-neon-blue"
              >
                Ver Demo
              </Button>
              <Button 
                as={Link} 
                href={project.codeUrl} 
                variant="bordered"
                startContent={<Icon icon="lucide:github" />}
                isExternal
                className="border-neon-blue/50 text-neon-blue hover:shadow-neon-blue"
              >
                Ver Código
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        size="5xl"
        scrollBehavior="inside"
        classNames={{
          base: "bg-dark-card border border-white/10",
          header: "border-b border-white/10",
          footer: "border-t border-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h2 className="text-2xl gradient-text">{selectedProject?.title}</h2>
              </ModalHeader>
              <ModalBody>
                <div className="relative w-full h-[60vh] bg-deep-blue/80 rounded-lg overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-10 bg-deep-blue flex items-center px-4 gap-2 z-10">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 text-center text-xs text-white/70 truncate">
                      {selectedProject?.liveUrl}
                    </div>
                  </div>
                  <div className="absolute inset-0 pt-10 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Icon icon="lucide:lock" className="text-6xl text-neon-blue mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Acceso Privado</h3>
                      <p className="text-foreground-400 mb-6">
                        Este proyecto está disponible solo para visitantes autorizados. 
                        Contacta conmigo para obtener acceso.
                      </p>
                      <Button
                        as={Link}
                        href={selectedProject?.liveUrl}
                        isExternal
                        color="primary"
                        variant="shadow"
                        startContent={<Icon icon="lucide:external-link" />}
                        className="bg-gradient-to-r from-neon-blue to-neon-purple text-white border-none shadow-neon-blue"
                      >
                        Solicitar Acceso
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">Descripción</h3>
                  <p className="text-foreground-400">{selectedProject?.description}</p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-2">Tecnologías</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject?.tags.map((tag) => (
                      <Chip key={tag} variant="shadow" className="bg-neon-blue/20 text-neon-blue border border-neon-blue/30">{tag}</Chip>
                    ))}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button 
                  color="danger" 
                  variant="light" 
                  onPress={onClose}
                >
                  Cerrar
                </Button>
                <Button
                  as={Link}
                  href={selectedProject?.liveUrl}
                  isExternal
                  color="primary"
                  variant="shadow"
                  startContent={<Icon icon="lucide:external-link" />}
                  className="bg-gradient-to-r from-neon-blue to-neon-purple text-white border-none shadow-neon-blue"
                >
                  Solicitar Acceso
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};