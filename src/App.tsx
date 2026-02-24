import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Users, 
  MessageCircle, 
  Navigation,
  ChevronRight,
  Menu,
  X,
  Star,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const BUSINESS_NAME = "Disk Van D17";
const OWNER_NAME = "Márcio Lacerda";
const PHONE_NUMBER = "(99) 98473-6577";
const WHATSAPP_LINK = "https://wa.me/5599984736577";
const ROUTES = [
  { name: "Imperatriz", icon: <MapPin className="w-5 h-5" /> },
  { name: "Porto Franco", icon: <Navigation className="w-5 h-5" /> },
  { name: "Estreito", icon: <MapPin className="w-5 h-5" /> }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled ? "bg-white/80 backdrop-blur-md border-slate-200 py-3" : "bg-transparent border-transparent py-5"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Navigation className="text-white w-6 h-6" />
            </div>
            <span className={cn("font-bold text-xl tracking-tight", scrolled ? "text-slate-900" : "text-white")}>
              {BUSINESS_NAME}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className={cn("text-sm font-medium hover:text-blue-600 transition-colors", scrolled ? "text-slate-600" : "text-white/90")}>Início</a>
            <a href="#rotas" className={cn("text-sm font-medium hover:text-blue-600 transition-colors", scrolled ? "text-slate-600" : "text-white/90")}>Rotas</a>
            <a href="#sobre" className={cn("text-sm font-medium hover:text-blue-600 transition-colors", scrolled ? "text-slate-600" : "text-white/90")}>Sobre</a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Reservar Agora
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className={scrolled ? "text-slate-900" : "text-white"} /> : <Menu className={scrolled ? "text-slate-900" : "text-white"} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-slate-900">Início</a>
              <a href="#rotas" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-slate-900">Rotas</a>
              <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-slate-900">Sobre</a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-4 rounded-xl text-center font-bold text-lg flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Falar com Márcio
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/van-transport/1920/1080?blur=2" 
            className="w-full h-full object-cover opacity-40"
            alt="Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Viagens Diárias</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Sua Viagem <span className="text-blue-500">Segura</span> e Confortável.
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed font-medium">
              Transporte profissional entre <span className="text-white font-bold">Imperatriz</span> e <span className="text-white font-bold">Estreito</span> via Porto Franco. Com {OWNER_NAME}, você chega ao seu destino com pontualidade e tranquilidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/30"
              >
                <MessageCircle className="w-6 h-6" />
                Consultar Horários
              </a>
              <a 
                href="#rotas"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3"
              >
                Ver Itinerário
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 left-0 right-0 z-10 hidden lg:block">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-3 gap-8 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600/20 p-3 rounded-2xl">
                  <ShieldCheck className="text-blue-500 w-8 h-8" />
                </div>
                <div>
                  <div className="text-white font-bold text-xl">100% Seguro</div>
                  <div className="text-slate-400 text-sm">Viagens monitoradas</div>
                </div>
              </div>
              <div className="flex items-center gap-4 border-x border-white/10 px-8">
                <div className="bg-blue-600/20 p-3 rounded-2xl">
                  <Clock className="text-blue-500 w-8 h-8" />
                </div>
                <div>
                  <div className="text-white font-bold text-xl">Pontualidade</div>
                  <div className="text-slate-400 text-sm">Horários rigorosos</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-600/20 p-3 rounded-2xl">
                  <Users className="text-blue-500 w-8 h-8" />
                </div>
                <div>
                  <div className="text-white font-bold text-xl">Conforto</div>
                  <div className="text-slate-400 text-sm">Ar-condicionado e poltronas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section id="rotas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Itinerário Principal</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Nossas Paradas</h3>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2 hidden md:block" />
            
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {ROUTES.map((route, idx) => (
                <motion.div 
                  key={route.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 border border-slate-200 p-8 rounded-3xl text-center group hover:border-blue-500 transition-all hover:shadow-2xl hover:shadow-blue-600/5"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {route.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">{route.name}</h4>
                  <p className="text-slate-500 text-sm">Embarque e desembarque em pontos estratégicos da cidade.</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-20 bg-slate-900 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h4 className="text-3xl font-bold text-white mb-6">Precisa de uma viagem especial?</h4>
              <p className="text-slate-400 text-lg mb-8">Também realizamos fretamentos para eventos, excursões e viagens particulares. Entre em contato para um orçamento personalizado.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-blue-500 w-5 h-5" />
                  Casamentos e Eventos
                </li>
                <li className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-blue-500 w-5 h-5" />
                  Excursões Religiosas
                </li>
                <li className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-blue-500 w-5 h-5" />
                  Transporte de Funcionários
                </li>
              </ul>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all"
              >
                Solicitar Orçamento
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/van-interior/800/600" 
                  className="w-full h-full object-cover"
                  alt="Interior da Van"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features / About Section */}
      <section id="sobre" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl" />
              <img 
                src="https://picsum.photos/seed/driver-marcio/600/800" 
                className="relative z-10 rounded-[3rem] shadow-2xl w-full object-cover aspect-[3/4]"
                alt="Márcio Lacerda"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-10 -right-6 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-[240px]">
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-slate-700 text-sm font-medium italic">"O Márcio é super atencioso e a van está sempre impecável. Recomendo a todos!"</p>
                <div className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">— Cliente Satisfeito</div>
              </div>
            </div>

            <div>
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Quem Somos</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-8">Compromisso com sua Jornada</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Com anos de experiência nas estradas do Maranhão, o {BUSINESS_NAME} nasceu do desejo de oferecer um transporte digno, seguro e confortável para a população da região.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-blue-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-slate-900 mb-1">Segurança em Primeiro Lugar</h5>
                    <p className="text-slate-500">Veículos com manutenção em dia e motorista profissional treinado.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-blue-600">
                    <Users className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-slate-900 mb-1">Atendimento Humanizado</h5>
                    <p className="text-slate-500">Tratamos cada passageiro com o respeito e a atenção que merece.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-blue-600">
                    <Navigation className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-slate-900 mb-1">Conhecimento da Região</h5>
                    <p className="text-slate-500">Sabemos os melhores caminhos para garantir uma viagem rápida e suave.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Pronto para viajar?</h2>
          <p className="text-blue-100 text-xl mb-12 font-medium">Garanta seu lugar agora mesmo pelo WhatsApp. Atendimento rápido e prático.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all shadow-2xl flex items-center justify-center gap-4"
            >
              <MessageCircle className="w-7 h-7" />
              Chamar no WhatsApp
            </a>
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-blue-200 text-sm font-bold uppercase tracking-widest mb-1">Ou ligue para</span>
              <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="text-white text-2xl font-black hover:text-blue-100 transition-colors flex items-center gap-2">
                <Phone className="w-5 h-5" />
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Navigation className="text-white w-5 h-5" />
                </div>
                <span className="font-bold text-xl text-white tracking-tight">
                  {BUSINESS_NAME}
                </span>
              </div>
              <p className="max-w-sm mb-8">
                Transporte de passageiros com qualidade, segurança e o melhor preço da região. Conectando Imperatriz a Estreito todos os dias.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h6 className="text-white font-bold mb-6">Links Rápidos</h6>
              <ul className="space-y-4">
                <li><a href="#inicio" className="hover:text-blue-500 transition-colors">Início</a></li>
                <li><a href="#rotas" className="hover:text-blue-500 transition-colors">Rotas</a></li>
                <li><a href="#sobre" className="hover:text-blue-500 transition-colors">Sobre Nós</a></li>
                <li><a href={WHATSAPP_LINK} className="hover:text-blue-500 transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h6 className="text-white font-bold mb-6">Contato Direto</h6>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-500 mt-1" />
                  <span>{PHONE_NUMBER}</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                  <span>Imperatriz - MA<br />Terminal Rodoviário</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <p>© {new Date().getFullYear()} {BUSINESS_NAME}. Todos os direitos reservados.</p>
            <p>Desenvolvido com carinho para {OWNER_NAME}.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold whitespace-nowrap">
          Falar com Márcio
        </span>
      </a>
    </div>
  );
}
