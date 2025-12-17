import { Phone, Instagram, Mail, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Adelvilse - Terapeuta Integrativa"
                className="h-12 w-auto brightness-0 invert"
              />
              <div>
                <span className="font-display text-2xl font-semibold block leading-tight">
                  Adelvilse
                </span>
                <p className="text-background/60 text-sm">
                  Terapeuta Integrativa
                </p>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed">
              Cuidando de você com amor, dedicação e técnicas holísticas para
              promover seu equilíbrio integral.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Navegação
            </h4>
            <nav className="space-y-3">
              {[
                { href: "#sobre", label: "Sobre" },
                { href: "#servicos", label: "Serviços" },
                { href: "#beneficios", label: "Benefícios" },
                { href: "#depoimentos", label: "Depoimentos" },
                { href: "#contato", label: "Contato" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-background/70 hover:text-background transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5519994628516"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Phone size={18} />
                (19) 9 9462-8516
              </a>
              <a
                href="https://instagram.com/adelvilsealvesritter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Instagram size={18} />
                @adelvilsealvesritter
              </a>
              <a
                href="mailto:adelvilse@gmail.com"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Mail size={18} />
                adelvilse@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {currentYear} Adelvilse Alves Ritter. Todos os direitos
            reservados.
          </p>
          <p className="text-sm text-background/50 flex items-center gap-1">
            Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/matheus-diasgomes-chichura/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-background"
            >
              Matheus D. Gomes Chichura
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
