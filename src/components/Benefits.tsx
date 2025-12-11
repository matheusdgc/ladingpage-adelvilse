import { Check } from "lucide-react";

const benefits = [
  {
    category: "Equilíbrio Emocional",
    items: [
      "Redução de ansiedade e estresse",
      "Liberação de traumas e bloqueios",
      "Melhora da autoestima e confiança",
      "Paz interior e serenidade",
    ],
  },
  {
    category: "Harmonia Energética",
    items: [
      "Limpeza e proteção energética",
      "Alinhamento dos chakras",
      "Elevação vibracional",
      "Conexão com sua essência",
    ],
  },
  {
    category: "Crescimento Espiritual",
    items: [
      "Autoconhecimento profundo",
      "Cura de padrões ancestrais",
      "Propósito de vida mais claro",
      "Reconexão com o sagrado",
    ],
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full translate-x-1/2 blur-3xl" />

      <div className="container mx-auto relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Benefícios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mt-4">
            Uma jornada de{" "}
            <span className="text-primary">transformação</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            As terapias integrativas oferecem benefícios que vão além do tratamento 
            de sintomas, promovendo uma cura genuína e duradoura.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.category}
              className="relative p-8 rounded-3xl bg-gradient-to-b from-card to-secondary/20 shadow-card"
            >
              {/* Number decoration */}
              <div className="absolute top-6 right-6 text-6xl font-display font-bold text-primary/10">
                0{index + 1}
              </div>

              <h3 className="text-xl font-display font-semibold mb-6 text-primary">
                {benefit.category}
              </h3>

              <ul className="space-y-4">
                {benefit.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto p-8 md:p-12 rounded-3xl bg-primary/5 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl text-primary/20 font-display">
              "
            </div>
            <p className="text-xl md:text-2xl font-display italic text-foreground leading-relaxed">
              A cura verdadeira acontece quando nos permitimos olhar para dentro 
              e abraçar cada parte de quem somos.
            </p>
            <p className="mt-6 text-primary font-medium">— Dé</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
