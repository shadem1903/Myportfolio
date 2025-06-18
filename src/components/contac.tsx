import React from "react";
import { Card, CardBody, Input, Textarea, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div>
      <h2 className="section-title text-center">Contacto</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 glass-card glow-border">
          <CardBody className="p-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center mb-6 shadow-neon-blue">
                <Icon icon="lucide:mail" className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 gradient-text">Email</h3>
              <p className="text-foreground-400">daniielmelliizo@gmail.com</p>
            </div>
          </CardBody>
        </Card>
        
        <Card className="col-span-1 glass-card glow-border">
          <CardBody className="p-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center mb-6 shadow-neon-blue">
                <Icon icon="lucide:phone" className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 gradient-text">Teléfono</h3>
              <p className="text-foreground-400">+52 3222690879</p>
            </div>
          </CardBody>
        </Card>
        
        <Card className="col-span-1 glass-card glow-border">
          <CardBody className="p-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center mb-6 shadow-neon-blue">
                <Icon icon="lucide:map-pin" className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 gradient-text">Ubicación</h3>
              <p className="text-foreground-400">Colombia, Popayán</p>
            </div>
          </CardBody>
        </Card>
      </div>
      
      <Card className="mt-12 glass-card glow-border">
        <CardBody className="p-8">
          <h3 className="text-2xl font-semibold mb-8 gradient-text text-center">Envíame un mensaje</h3>
          
          {isSubmitted ? (
            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-white p-6 rounded-xl flex items-center gap-3 border border-neon-blue/30">
              <Icon icon="lucide:check-circle" className="text-2xl text-neon-blue" />
              <span className="text-lg">¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Input
                  name="name"
                  label="Nombre"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="bordered"
                  classNames={{
                    input: "bg-dark-card",
                    inputWrapper: "bg-dark-card border-white/10 focus-within:border-neon-blue/50 group-data-[focus=true]:bg-dark-card"
                  }}
                />
                <Input
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="bordered"
                  classNames={{
                    input: "bg-dark-card",
                    inputWrapper: "bg-dark-card border-white/10 focus-within:border-neon-blue/50 group-data-[focus=true]:bg-dark-card"
                  }}
                />
              </div>
              <div className="mb-6">
                <Input
                  name="subject"
                  label="Asunto"
                  placeholder="Asunto del mensaje"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  variant="bordered"
                  classNames={{
                    input: "bg-dark-card",
                    inputWrapper: "bg-dark-card border-white/10 focus-within:border-neon-blue/50 group-data-[focus=true]:bg-dark-card"
                  }}
                />
              </div>
              <div className="mb-8">
                <Textarea
                  name="message"
                  label="Mensaje"
                  placeholder="Escribe tu mensaje aquí..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minRows={5}
                  variant="bordered"
                  classNames={{
                    input: "bg-dark-card",
                    inputWrapper: "bg-dark-card border-white/10 focus-within:border-neon-blue/50 group-data-[focus=true]:bg-dark-card"
                  }}
                />
              </div>
              <Button
                type="submit"
                className="w-full shadow-neon-blue bg-gradient-to-r from-neon-blue to-neon-purple text-white border-none"
                size="lg"
                isLoading={isSubmitting}
                endContent={!isSubmitting && <Icon icon="lucide:send" />}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          )}
        </CardBody>
      </Card>
    </div>
  );
};