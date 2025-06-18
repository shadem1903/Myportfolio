import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Header: React.FC = () => {
  return (
    <Navbar maxWidth="xl" className="bg-deep-blue/50 backdrop-blur-md border-b border-white/5">
      <NavbarBrand>
        <Link href="#" className="font-bold text-inherit flex items-center gap-2 magnetic-element">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
            <Icon icon="lucide:code" className="text-white text-xl" />
          </div>
          <span className="text-white text-xl">Mi Portafolio</span>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            as={Link} 
            href="#contacto" 
            variant="flat"
            endContent={<Icon icon="lucide:mail" />}
            className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-white border border-white/10 hover:shadow-neon-blue"
          >
            Contacto
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};