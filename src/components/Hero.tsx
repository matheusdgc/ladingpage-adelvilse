import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import therapistPortrait from "@/assets/adelvilse-profile.png";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-up">
              <Sparkles size={16} />
              Terapias Integrativas
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight animate-fade-up delay-100">
              Terapeuta Integrativa
              <span className="block text-primary mt-2">
                Adelvilse Alves Ritter
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up delay-200">
              Encontre o caminho para o seu equilíbrio interior. Através de
              técnicas holísticas e um olhar acolhedor, juntos vamos trilhar a
              jornada da sua transformação pessoal e espiritual.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
              <a
                href="https://wa.me/5519994628516"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent flex items-center justify-center gap-2 group"
              >
                Agendar Atendimento
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a href="#servicos" className="btn-outline">
                Conhecer Serviços
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 animate-fade-up delay-400">
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-primary">
                  8
                </div>
                <div className="text-sm text-muted-foreground">
                  Anos de Experiência
                </div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-base font-display font-bold text-primary">
                  Muitas
                </div>
                <div className="text-sm text-muted-foreground">
                  Vidas Transformadas
                </div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-primary">
                  9
                </div>
                <div className="text-sm text-muted-foreground">
                  Terapias Oferecidas
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up delay-200">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse-soft" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse-soft delay-500" />

              {/* Main image */}
              <div className="relative w-72 h-96 md:w-80 md:h-[420px] lg:w-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={therapistPortrait}
                  alt="Adelvilse Alves Ritter - Terapeuta Integrativa"
                  className="w-full h-full object-cover object-top"
                />

                {/* Floating badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-effect rounded-2xl px-6 py-3 text-center">
                  <p className="text-sm font-medium text-foreground">
                    Cuidando de você com amor e dedicação
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
