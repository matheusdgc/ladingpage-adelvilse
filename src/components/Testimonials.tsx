import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Clara S.",
    text: "A Dé tem uma energia maravilhosa e um dom especial para ajudar as pessoas. Depois das sessões de Constelação Familiar, consegui entender padrões que me acompanhavam há anos. Me sinto leve e renovada.",
    therapy: "Constelação Familiar",
    rating: 5,
  },
  {
    name: "Roberto M.",
    text: "Procurei a Dé para sessões de hipnose e o resultado foi transformador. Consegui superar medos que me limitavam há muito tempo. Profissional extremamente competente e acolhedora.",
    therapy: "Hipnose",
    rating: 5,
  },
  {
    name: "Ana Paula F.",
    text: "O Reiki com a Dé é uma experiência única de paz e renovação. Cada sessão me reconecta comigo mesma e me dá forças para enfrentar os desafios do dia a dia. Recomendo de olhos fechados!",
    therapy: "Reiki",
    rating: 5,
  },
  {
    name: "Fernanda L.",
    text: "A Mesa Radiônica Arcturiana foi uma descoberta incrível. Senti mudanças profundas na minha energia e disposição. A Dé explica tudo com muita clareza e carinho.",
    therapy: "Mesa Radiônica",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mt-4">
            Histórias de{" "}
            <span className="text-primary">transformação</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Cada pessoa que passa pelo meu consultório carrega uma história única. 
            Aqui estão algumas das transformações que tive o privilégio de presenciar.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 md:p-8 rounded-2xl bg-card shadow-card card-hover"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold-soft text-gold-soft"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.therapy}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-display font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
