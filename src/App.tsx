import React from "react";
import { Tabs, Tab, Card, CardBody, Button, Link, Avatar, Badge } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Experience } from "./components/experience";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Education } from "./components/education";
import { Contact } from "./components/contac";
import { Footer } from "./components/footer";
import { CustomCursor } from "./components/custom-cursor";
import { ParticlesBackground } from "./components/particles-background";
import { StarField } from "./components/star-field";

export default function App() {
  const [selected, setSelected] = React.useState("sobre-mi");

  return (
    <div className="min-h-screen bg-space-gradient relative overflow-hidden">
      <CustomCursor />
      <StarField />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-glow opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-glow opacity-30 blur-3xl -z-10"></div>
      
      <Header />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Tabs 
          aria-label="Secciones" 
          selectedKey={selected} 
          onSelectionChange={setSelected}
          variant="underlined"
          color="primary"
          classNames={{
            tabList: "flex justify-center gap-6 mb-12 border-b border-white/10 pb-2 w-full overflow-x-auto scrollbar-hide",
            tab: "nav-tab whitespace-nowrap",
            cursor: "hidden"
          }}
        >
          <Tab key="sobre-mi" title={
            <div className="flex items-center gap-2">
              <Icon icon="lucide:user" className="text-lg" />
              <span>Sobre Mí</span>
            </div>
          }>
            <div className="max-w-3xl mx-auto">
              <Card className="mb-8 bg-content1 shadow-lg">
                <CardBody className="p-8">
                  <h2 className="text-2xl font-semibold mb-4 gradient-text">Acerca de mí</h2>
                  <p className="text-foreground-500 mb-4">
                    Soy un desarrollador web apasionado por crear experiencias digitales atractivas y funcionales. 
                    Con experiencia en tecnologías frontend y backend, me especializo en construir aplicaciones web 
                    modernas y responsivas que resuelven problemas reales.
                  </p>
                  <p className="text-foreground-500 mb-4">
                    Mi enfoque combina habilidades técnicas con un ojo para el diseño, lo que me permite 
                    desarrollar interfaces que no solo funcionan bien, sino que también ofrecen una excelente 
                    experiencia de usuario.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    <Button 
                      as={Link} 
                      href="#contacto" 
                      color="primary" 
                      endContent={<Icon icon="lucide:mail" />}
                      className="shadow-lg"
                    >
                      Contáctame
                    </Button>
                    <Button 
                      as={Link} 
                      href="#" 
                      variant="bordered" 
                      endContent={<Icon icon="lucide:download" />}
                      className="border-primary text-primary"
                    >
                      Descargar CV
                    </Button>
                  </div>
                </CardBody>
              </Card>
              <Education />
            </div>
          </Tab>
          <Tab key="experiencia" title={
            <div className="flex items-center gap-2">
              <Icon icon="lucide:briefcase" className="text-lg" />
              <span>Experiencia</span>
            </div>
          }>
            <div className="max-w-3xl mx-auto">
              <Experience />
            </div>
          </Tab>
          <Tab key="habilidades" title={
            <div className="flex items-center gap-2">
              <Icon icon="lucide:code" className="text-lg" />
              <span>Habilidades</span>
            </div>
          }>
            <div className="max-w-3xl mx-auto">
              <Skills />
            </div>
          </Tab>
          <Tab key="proyectos" title={
            <div className="flex items-center gap-2">
              <Icon icon="lucide:folder" className="text-lg" />
              <span>Proyectos</span>
            </div>
          }>
            <div className="max-w-3xl mx-auto">
              <Projects />
            </div>
          </Tab>
          <Tab key="contacto" title={
            <div className="flex items-center gap-2">
              <Icon icon="lucide:mail" className="text-lg" />
              <span>Contacto</span>
            </div>
          }>
            <div className="max-w-3xl mx-auto">
              <Contact />
            </div>
          </Tab>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
}