import { Heart, Star, Users, Leaf } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Acolhimento",
      description:
        "Cada pessoa é única e merece ser ouvida com amor e respeito.",
    },
    {
      icon: Star,
      title: "Excelência",
      description:
        "Formação contínua e dedicação para oferecer o melhor cuidado.",
    },
    {
      icon: Users,
      title: "Conexão",
      description: "Criamos juntos um espaço seguro para sua transformação.",
    },
    {
      icon: Leaf,
      title: "Integralidade",
      description:
        "Tratamos corpo, mente e espiritualidade como um todo harmonioso.",
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Sobre Mim
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mt-4 leading-tight">
                Uma jornada dedicada ao{" "}
                <span className="text-primary">seu bem-estar</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Olá, meu nome é{" "}
                <strong className="text-foreground">Adelvilse</strong> e sou
                terapeuta. Há 8 anos venho dedicando minha vida a ajudar pessoas
                a encontrarem seu equilíbrio interior e reconectarem-se com sua
                essência mais profunda.
              </p>
              <p>
                Minha abordagem é holística e integrativa, combinando diversas
                técnicas terapêuticas para atender às necessidades únicas de
                cada pessoa. Acredito que a cura verdadeira acontece quando
                tratamos o ser humano em sua totalidade: corpo, mente, emoções e
                espiritualidade.
              </p>
              <p>
                Em cada atendimento, crio um espaço acolhedor e seguro, onde
                você pode se expressar livremente e encontrar as respostas que
                busca. Minha missão é ser uma facilitadora no seu processo de
                autoconhecimento e transformação.
              </p>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-foreground">
              "Acredito que cada pessoa carrega dentro de si a capacidade de
              curar-se. Meu papel é apenas iluminar o caminho."
            </blockquote>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-card shadow-card card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
