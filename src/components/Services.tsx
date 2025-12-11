import {
  Brain,
  Sparkles,
  Users,
  Orbit,
  Eye,
  RotateCcw,
  Radio,
  Flower2,
  CircleDot,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Psicanalista",
    description:
      "Exploramos juntos o inconsciente para compreender padrões de comportamento e promover autoconhecimento profundo.",
    benefits: ["Autoconhecimento", "Resolução de conflitos", "Desenvolvimento pessoal"],
  },
  {
    icon: Sparkles,
    title: "Reiki",
    description:
      "Técnica de canalização de energia universal que promove relaxamento, equilíbrio e bem-estar em todos os níveis.",
    benefits: ["Relaxamento profundo", "Equilíbrio energético", "Alívio do estresse"],
  },
  {
    icon: Users,
    title: "Constelação Familiar",
    description:
      "Movimento de Reconexão de Alma que revela dinâmicas ocultas do sistema familiar, promovendo cura ancestral.",
    benefits: ["Cura de padrões", "Paz familiar", "Libertação de bloqueios"],
  },
  {
    icon: Orbit,
    title: "Apometria",
    description:
      "Técnica espiritual que trabalha a liberação de energias densas e o realinhamento dos corpos sutis.",
    benefits: ["Limpeza energética", "Proteção espiritual", "Harmonização"],
  },
  {
    icon: Eye,
    title: "Hipnose",
    description:
      "Acesso ao subconsciente para reprogramar crenças limitantes e trabalhar questões emocionais profundas.",
    benefits: ["Mudança de hábitos", "Superação de medos", "Autoconfiança"],
  },
  {
    icon: RotateCcw,
    title: "Regressão",
    description:
      "Jornada ao passado para compreender e curar traumas que influenciam o presente, incluindo vidas passadas.",
    benefits: ["Cura de traumas", "Compreensão de padrões", "Libertação emocional"],
  },
  {
    icon: Radio,
    title: "Mesa Radiônica Arcturiana",
    description:
      "Ferramenta quântica de alta frequência para diagnóstico e tratamento energético em múltiplas dimensões.",
    benefits: ["Tratamento quântico", "Elevação vibracional", "Cura multidimensional"],
  },
  {
    icon: Flower2,
    title: "Benzimento",
    description:
      "Prática ancestral de cura através de orações e ervas, aliviando males do corpo e da alma.",
    benefits: ["Proteção espiritual", "Alívio de males", "Tradição ancestral"],
  },
  {
    icon: CircleDot,
    title: "Magia das Mandalas",
    description:
      "Arte terapêutica que utiliza símbolos sagrados para meditação, autoconhecimento e manifestação de intenções.",
    benefits: ["Foco e meditação", "Expressão criativa", "Manifestação"],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mt-4">
            Terapias para sua{" "}
            <span className="text-primary">transformação</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Cada terapia é uma ferramenta poderosa de cura. Juntos, encontraremos 
            o caminho ideal para sua jornada de autoconhecimento e bem-estar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 md:p-8 rounded-2xl bg-card shadow-card card-hover relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-display font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="px-3 py-1 rounded-full bg-sky-soft text-primary text-xs font-medium"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Não sabe qual terapia é ideal para você?
          </p>
          <a
            href="https://wa.me/5519994628516?text=Olá! Gostaria de saber mais sobre as terapias oferecidas."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
