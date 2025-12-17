import {
  Phone,
  Instagram,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";
import logo from "@/assets/logo.png";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: "(19) 9 9462-8516",
      href: "https://wa.me/5519994628516",
      primary: true,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@adelvilsealvesritter",
      href: "https://instagram.com/adelvilsealvesritter",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "adelvilse@gmail.com",
      href: "mailto:adelvilse@gmail.com",
    },
  ];

  return (
    <section
      id="contato"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="container mx-auto relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mt-4">
            Vamos iniciar sua <span className="text-primary">jornada?</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Estou aqui para te acolher. Entre em contato e vamos conversar sobre
            como posso te ajudar nesse caminho de transformação.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Cards */}
          <div className="space-y-6">
            {contactInfo.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-6 p-6 rounded-2xl transition-all duration-300 group ${
                  contact.primary
                    ? "bg-primary text-primary-foreground hover:shadow-elevated"
                    : "bg-card shadow-card hover:shadow-elevated"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    contact.primary
                      ? "bg-primary-foreground/20"
                      : "bg-primary/10"
                  }`}
                >
                  <contact.icon
                    className={`w-6 h-6 ${
                      contact.primary
                        ? "text-primary-foreground"
                        : "text-primary"
                    }`}
                  />
                </div>
                <div>
                  <p
                    className={`text-sm ${
                      contact.primary
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {contact.label}
                  </p>
                  <p
                    className={`text-lg font-semibold ${
                      contact.primary
                        ? "text-primary-foreground"
                        : "text-foreground"
                    }`}
                  >
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Additional info */}
            <div className="p-6 rounded-2xl bg-secondary/50 space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Horário de Atendimento</p>
                  <p className="text-sm text-muted-foreground">
                    Segunda, Quarta e Sexta • 8h às 18h
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Atendimento</p>
                  <p className="text-sm text-muted-foreground">
                    Presencial e Online
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full" />

            <div className="relative text-center space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center p-4">
                <img
                  src={logo}
                  alt="Adelvilse"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-semibold">
                Pronta para sua transformação?
              </h3>

              <p className="text-muted-foreground">
                O primeiro passo é sempre o mais importante. Clique no botão
                abaixo e vamos conversar sobre como posso te ajudar.
              </p>

              <a
                href="https://wa.me/5519994628516?text=Olá Adelvilse! Gostaria de agendar uma sessão."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Phone size={18} />
                Agendar Atendimento
              </a>

              <p className="text-xs text-muted-foreground">
                Atendimento humanizado • Primeira consulta com avaliação
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
