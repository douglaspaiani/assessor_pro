import { motion, AnimatePresence } from "motion/react";
import { Helmet } from "react-helmet-async";
import { 
  Calendar, 
  Files, 
  BarChart3, 
  DollarSign, 
  Users, 
  TicketCheck, 
  Heart, 
  ChevronRight, 
  CheckCircle2, 
  Menu, 
  X,
  Laptop,
  Moon,
  Sun,
  Server,
  ShieldCheck,
  Zap,
  MessageCircle,
  Mail,
  Plus,
  Minus,
  Star,
  Search,
  Code2,
  Smartphone,
  Globe,
  Infinity as IconeInfinito,
  CreditCard,
  PencilLine,
  TrendingUp,
  Award,
  Fingerprint,
  UserRoundSearch
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import logoSite from "./images/logo.png";
import faviconSite from "./images/favicon.png";
import avatarUsuarioPadraoUm from "./images/usuario-default-1.png";
import Print1 from "./images/print1.jpg";
import Print2 from "./images/print2.jpg";
import Print3 from "./images/print3.jpg";
import Print4 from "./images/print4.jpg";
import Mobile from "./images/mobile.jpg";

const SearchEngineBox = ({ name, color, delay }: { name: string, color: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-card-surface border border-border-subtle p-6 rounded-2xl flex flex-col items-center gap-4 group hover:border-pink-accent/40 transition-all cursor-pointer"
  >
    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-2xl text-white ${color}`}>
      {name[0]}
    </div>
    <span className="font-bold text-lg">{name}</span>
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
      ))}
    </div>
    <p className="text-[10px] uppercase tracking-wider text-text-secondary">Otimização completa</p>
  </motion.div>
);

const GrowthChart = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const data = useMemo(() => [
    { name: 'Mês 1', value: 100 },
    { name: 'Mês 2', value: 120 },
    { name: 'Mês 3', value: 180 },
    { name: 'Mês 4', value: 250 },
    { name: 'Mês 5', value: 310 },
    { name: 'Mês 6', value: 420 },
  ], []);

  return (
    <div className="w-full h-[300px] mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF4D8D" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#FF4D8D" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: isDarkMode ? '#A09E9F' : '#666', fontSize: 10 }}
          />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: isDarkMode ? '#1a1617' : '#fff', 
              border: '1px solid rgba(255,77,141,0.2)',
              borderRadius: '12px',
              fontSize: '12px'
            }}
            itemStyle={{ color: '#FF4D8D' }}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#FF4D8D" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorValue)" 
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, detailedContent, delay = 0 }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className="bg-card-surface backdrop-blur-md p-8 rounded-3xl border border-border-subtle hover:border-pink-accent/50 transition-all duration-300 group cursor-pointer h-fit"
    >
      <div className="flex items-start justify-between">
        <div className="w-14 h-14 bg-pink-accent/10 rounded-2xl flex items-center justify-center mb-6 border border-pink-accent/20 group-hover:bg-pink-accent transition-colors duration-300">
          <Icon className="w-7 h-7 text-pink-accent group-hover:text-white transition-colors duration-300" />
        </div>
        {!isExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center text-text-secondary group-hover:border-pink-accent group-hover:text-pink-accent transition-colors"
          >
            <Plus className="w-4 h-4" />
          </motion.div>
        )}
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-border-subtle pt-6 mt-6"
          >
            <p className="text-sm text-text-secondary leading-relaxed">
              {detailedContent}
            </p>
            <div className="mt-6 flex items-center gap-2 text-pink-accent text-xs font-bold uppercase tracking-wider">
              Solicitar treinamento exclusivo <ChevronRight className="w-3 h-3" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border-subtle overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-pink-accent transition-colors"
      >
        <span className="text-lg font-bold">{question}</span>
        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="pb-6 text-text-secondary leading-relaxed"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TestimonialCard = ({ name, role, text, image }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="bg-card-surface backdrop-blur-md p-8 rounded-3xl border border-border-subtle relative"
  >
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-pink-accent text-pink-accent" />)}
    </div>
    <p className="text-text-secondary italic mb-8 leading-relaxed">"{text}"</p>
    <div className="flex items-center gap-4">
      <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover border-2 border-pink-accent grayscale" />
      <div>
        <h4 className="font-bold text-text-primary">{name}</h4>
        <p className="text-xs text-text-secondary uppercase tracking-wider">{role}</p>
      </div>
    </div>
  </motion.div>
);

const ModuleEditorPreview = ({ modoEscuro }: { modoEscuro: boolean }) => {
  const modulosPreview = [
    { rotulo: "Módulo Financeiro", ativo: true, atraso: 0 },
    { rotulo: "Relatórios Custom", ativo: true, atraso: 0.1 },
    { rotulo: "Ticket de Suporte", ativo: false, atraso: 0.2 },
    { rotulo: "Agenda Integrada", ativo: true, atraso: 0.3 }
  ];

  const classeContainer = modoEscuro
    ? "relative w-full max-w-[400px] h-[450px] bg-[#1a1a1a] rounded-3xl border border-white/10 p-4 shadow-2xl overflow-hidden"
    : "relative w-full max-w-[400px] h-[450px] bg-gradient-to-b from-[#ffffff] to-[#f6f0f4] rounded-3xl border border-[#e8dde4] p-4 shadow-[0_20px_55px_rgba(20,12,18,0.18)] overflow-hidden";

  const classeCabecalho = modoEscuro
    ? "flex items-center justify-between mb-6 pb-4 border-b border-white/5"
    : "flex items-center justify-between mb-6 pb-4 border-b border-[#e3d6de]";

  const classeTituloArquivo = modoEscuro
    ? "text-[10px] text-white/30 font-mono tracking-widest uppercase"
    : "text-[10px] text-[#8a7e86] font-mono tracking-widest uppercase";

  const classeModulo = modoEscuro
    ? "bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-colors"
    : "bg-[#f9f4f7] border border-[#e5d8e0] p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-white transition-colors";

  const classeTextoModulo = modoEscuro
    ? "text-sm font-medium text-white/80"
    : "text-sm font-semibold text-[#2f2930]";

  const classeRodapeCodigo = modoEscuro
    ? "mt-8 pt-6 border-t border-white/5 space-y-2"
    : "mt-8 pt-6 border-t border-[#e3d7df] space-y-2";

  const classeLinhaCodigo = modoEscuro ? "bg-white/5" : "bg-[#eadfe5]";

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      className={classeContainer}
    >
      {/* Editor Header */}
      <div className={classeCabecalho}>
        <div className="flex gap-1.5">
          <div className={`w-2.5 h-2.5 rounded-full ${modoEscuro ? "bg-red-500/50" : "bg-red-500/80"}`} />
          <div className={`w-2.5 h-2.5 rounded-full ${modoEscuro ? "bg-yellow-500/50" : "bg-yellow-500/80"}`} />
          <div className={`w-2.5 h-2.5 rounded-full ${modoEscuro ? "bg-green-500/50" : "bg-green-500/80"}`} />
        </div>
        <div className={classeTituloArquivo}>Custom_Config.json</div>
      </div>

      {/* Draggable/Animated Modules */}
      <div className="space-y-3">
        {modulosPreview.map((modulo, indice) => (
          <motion.div
            key={indice}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: modulo.atraso + 0.5 }}
            className={classeModulo}
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-pink-accent" />
              <span className={classeTextoModulo}>{modulo.rotulo}</span>
            </div>
            <div className={`w-10 h-5 rounded-full relative transition-colors ${modulo.ativo ? "bg-pink-accent" : modoEscuro ? "bg-white/10" : "bg-[#cbc0c7]"}`}>
              <motion.div 
                animate={{ x: modulo.ativo ? 20 : 0 }}
                className={`absolute top-1 left-1 w-3 h-3 rounded-full shadow-sm ${modoEscuro ? "bg-white" : "bg-white border border-[#e3d6de]"}`}
              />
            </div>
          </motion.div>
        ))}

        {/* Floating Animated "Adding" Cursor */}
        <motion.div
          animate={{ 
            y: [0, 150, 0],
            x: [0, -20, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/4 w-8 h-8 pointer-events-none"
        >
          <div className={`w-full h-full rounded-full flex items-center justify-center animate-ping ${modoEscuro ? "bg-pink-accent/20" : "bg-pink-accent/25"}`}>
            <ChevronRight className="w-4 h-4 text-pink-accent" />
          </div>
        </motion.div>

        {/* Code Snippet Below */}
        <div className={classeRodapeCodigo}>
          <motion.div 
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`h-2 w-full rounded ${classeLinhaCodigo}`} 
          />
          <motion.div 
            animate={{ opacity: [0.1, 0.5, 0.1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className={`h-2 w-3/4 rounded ${classeLinhaCodigo}`} 
          />
          <motion.div 
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className={`h-2 w-1/2 rounded ${classeLinhaCodigo}`} 
          />
        </div>
      </div>
    </motion.div>
  );
};

const screenData = [
  {
    title: "Dashboard Intuitivo",
    description: "Uma visão completa do seu negócio em tempo real. Acompanhe metas, novos processos e pendências de forma centralizada.",
    image: Print1,
    module: "Dashboard"
  },
  {
    title: "Gestão de Processos",
    description: "Organize cada etapa do salário maternidade. Status automatizados e alertas de prazos para nunca perder uma movimentação.",
    image: Print2,
    module: "Processos"
  },
  {
    title: "Agenda Inteligente",
    description: "Sincronize atendimentos e perícias. Notificações automáticas para sua equipe e para as mamães clientes.",
    image: Print3,
    module: "Agenda"
  },
  {
    title: "Painel da Mamãe",
    description: "Área exclusiva para a cliente acompanhar o status do seu pedido e enviar documentos de forma segura.",
    image: Print4,
    module: "Painel da Mamãe"
  }
];

const beneficiosLandingPageInclusa = [
  "Landing page pronta para divulgar sua assessoria e captar leads diariamente.",
  "Formulário com CTA estratégico para levar a cliente direto para o seu WhatsApp.",
  "Layout otimizado para celular, com foco em conversão e credibilidade.",
  "Estrutura preparada para SEO, acelerando sua presença no Google."
];

const tituloSeo = "Assessor Pro | Sistema para Gestão de Salário Maternidade";
const descricaoSeo = "Otimize sua assessoria com agenda inteligente, gestão de processos, relatórios e automações para salário maternidade.";
const palavrasChaveSeo = "assessoria, salário maternidade, software jurídico, gestão de processos, sistema para assessoria";
const urlCanonicaSeo = "https://ogivadigital.com/assessor-pro";
const mensagemWhatsappPredefinida = "Olá tudo bem? Tenho interesse no sistema Assessor Pro para minha acessoria maternidade.";
const linkWhatsappEspecialista = `https://wa.me/5551994727036?text=${encodeURIComponent(mensagemWhatsappPredefinida)}`;

export default function App() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const urlBaseSeo = typeof window !== "undefined" ? window.location.origin : urlCanonicaSeo;
  const imagemCompartilhamentoSeo = `${urlBaseSeo}${logoSite}`;
  const irParaTopoSite = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const abrirWhatsappEspecialista = () => {
    if (typeof window !== "undefined") {
      window.open(linkWhatsappEspecialista, "_blank", "noopener,noreferrer");
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screenData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-pink-accent selection:text-white transition-colors duration-500">
      <Helmet prioritizeSeoTags>
        <html lang="pt-BR" />
        <title>{tituloSeo}</title>
        <meta name="description" content={descricaoSeo} />
        <meta name="keywords" content={palavrasChaveSeo} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Assessor Pro" />
        <link rel="canonical" href={urlCanonicaSeo} />
        <link rel="icon" type="image/png" href={faviconSite} />
        <link rel="apple-touch-icon" href={faviconSite} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Assessor Pro" />
        <meta property="og:title" content={tituloSeo} />
        <meta property="og:description" content={descricaoSeo} />
        <meta property="og:url" content={urlCanonicaSeo} />
        <meta property="og:image" content={imagemCompartilhamentoSeo} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tituloSeo} />
        <meta name="twitter:description" content={descricaoSeo} />
        <meta name="twitter:image" content={imagemCompartilhamentoSeo} />
      </Helmet>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-bg-primary/50 backdrop-blur-xl border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            type="button"
            onClick={irParaTopoSite}
            aria-label="Voltar ao topo do site"
            className="flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-accent/60"
          >
            <motion.img
              src={logoSite}
              alt="Logo Assessor Pro"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="h-12 w-auto object-contain"
            />
          </button>
          
          <ul className="hidden lg:flex items-center gap-10">
            {["Módulos", "Faturamento", "Investimento", "Depoimentos", "FAQ"].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-[11px] uppercase tracking-[2px] font-semibold text-text-secondary hover:text-pink-accent transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full border border-border-subtle hover:border-pink-accent transition-all text-text-secondary hover:text-pink-accent"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={abrirWhatsappEspecialista}
              className="hidden md:block bg-pink-accent text-white px-6 py-2.5 rounded-full font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-pink-accent/20"
            >
              Falar com Especialista
            </button>
            <button className="lg:hidden text-text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-bg-primary/95 backdrop-blur-2xl" />
            <div className="relative pt-32 px-6 h-full flex flex-col">
              <ul className="flex flex-col gap-8">
                {["Módulos", "Faturamento", "Investimento", "Depoimentos", "FAQ"].map((item) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <a 
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-3xl font-serif text-text-primary hover:text-pink-accent transition-colors block"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto pb-20">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    abrirWhatsappEspecialista();
                  }}
                  className="w-full bg-pink-accent text-white py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-pink-accent/20"
                >
                  Agendar Demonstração
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-[12px] uppercase tracking-[2px] text-pink-accent font-bold mb-4"
            >
              Software Premium para Assessorias
            </motion.span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-8 font-normal">
              Gestão <span className="text-pink-accent font-bold">Inteligente</span> de <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="italic text-pink-soft"
              >
                Salário Maternidade
              </motion.span>
            </h1>
            <p className="text-lg text-text-secondary mb-10 max-w-lg leading-relaxed">
              Elimine o caos burocrático. Tenha uma operação digital, segura e escalável com o sistema líder de mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={abrirWhatsappEspecialista}
                className="bg-pink-accent text-white px-8 py-4 rounded-full font-bold text-sm hover:brightness-110 transition-all shadow-xl shadow-pink-accent/20 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Agende uma Demonstração
              </motion.button>
              <button
                onClick={abrirWhatsappEspecialista}
                className="px-8 py-4 rounded-full font-bold text-sm border border-border-subtle hover:border-pink-accent transition-all flex items-center justify-center gap-2 group"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                  alt="WhatsApp" 
                  className="w-5 h-5" 
                  referrerPolicy="no-referrer"
                />
                Falar no WhatsApp
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center perspective-[1000px]"
          >
             {/* MacBook Screen */}
             <div className="macbook-frame relative w-full aspect-[16/10] max-w-[550px] p-[1.5%] bg-gradient-to-b from-[#e5e7eb] to-[#9ca3af] rounded-t-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/20 overflow-hidden ring-1 ring-black/5">
                {/* Camera Lens */}
                <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full bg-[#111] z-20 border border-white/5 opacity-80" />
                
                <div className="w-full h-full bg-[#0a0a0a] rounded-[1.5rem] overflow-hidden relative shadow-inner">
                  {/* Screen Content */}
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={activeScreen}
                      src={screenData[activeScreen].image} 
                      alt="App Preview" 
                      className="w-full h-full object-cover opacity-90 brightness-110"
                      initial={{ opacity: 0, filter: "blur(4px)" }}
                      animate={{ opacity: 0.9, filter: "blur(0px)" }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                  
                  {/* Glass Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-10" />
                  <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-white/5 to-transparent skew-x-[-20deg] translate-x-[40%] pointer-events-none z-10" />

                  {/* UI Overlays (Simplified Admin Panel) */}
                  <div className="absolute inset-0 flex flex-col pointer-events-none opacity-40 mix-blend-overlay">
                    <div className="h-[30px] bg-white/20 backdrop-blur-md border-b border-white/10 w-full" />
                    <div className="flex flex-1">
                      <div className="w-[60px] bg-white/10 backdrop-blur-md border-r border-white/10 h-full" />
                      <div className="p-5 flex-1">
                        <div className="h-4 w-24 bg-white/20 mb-5 rounded" />
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="h-10 bg-white/10 rounded" />
                          <div className="h-10 bg-white/10 rounded" />
                          <div className="h-10 bg-white/10 rounded" />
                          <div className="col-span-3 h-16 bg-white/10 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
             
             {/* MacBook Base */}
             <div className="relative w-[112%] max-w-[620px]">
               <div className="macbook-base h-3 bg-gradient-to-b from-[#9ca3af] to-[#4b5563] rounded-b-xl shadow-2xl" />
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#374151] rounded-b-lg opacity-40" />
               {/* Surface Shadow */}
               <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-6 bg-black/40 blur-2xl rounded-full -z-10" />
             </div>
             
             <div className="mt-12 text-center max-w-sm">
                <p className="font-serif italic text-2xl text-pink-soft">{screenData[activeScreen].title}</p>
                <p className="text-xs text-text-secondary mt-2 tracking-wide uppercase">{screenData[activeScreen].description}</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Access Tags */}
      <section id="módulos" className="py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {[
            { label: "Agenda", icon: Calendar },
            { label: "Processos", icon: Files },
            { label: "Relatórios", icon: BarChart3 },
            { label: "Financeiro", icon: DollarSign },
            { label: "Permissões", icon: ShieldCheck },
            { label: "Tickets", icon: TicketCheck },
            { label: "Painel da Mamãe", icon: Heart },
            { label: "Assinatura de contratos", icon: PencilLine },
          ].map((feature, idx) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.05, borderColor: "#FF4D8D", color: "#FF4D8D" }}
              className="px-6 py-3 bg-card-surface border border-border-subtle rounded-lg text-[11px] uppercase tracking-[1px] text-text-secondary transition-all cursor-default flex items-center gap-2 group"
            >
              <feature.icon className="w-4 h-4 text-pink-accent/60 group-hover:text-pink-accent transition-colors" />
              {feature.label}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Functional Blocks */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Soluções <span className="italic text-pink-soft">Sob Medida</span></h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Desenvolvemos módulos específicos para o dia a dia de uma assessoria de sucesso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Calendar} 
              title="Agenda" 
              description="Controle total de agendamentos de perícias." 
              detailedContent="Sincronize sua equipe com um calendário inteligente exclusivo para perícias do INSS, evitando faltas e maximizando as aprovações."
              delay={0.1} 
            />
            <FeatureCard 
              icon={Files} 
              title="Processos" 
              description="Gestão completa de documentos e etapas." 
              detailedContent="Acompanhe cada etapa do pedido de salário maternidade com check-lists automáticos e histórico completo de movimentações."
              delay={0.2} 
            />
            <FeatureCard 
              icon={BarChart3} 
              title="Relatórios" 
              description="Insights poderosos sobre sua operação." 
              detailedContent="Gere gráficos de produtividade, taxa de sucesso por regional e previsões de faturamento com apenas um clique."
              delay={0.3} 
            />
            <FeatureCard 
              icon={DollarSign} 
              title="Financeiro" 
              description="Controle de comissões e faturamento." 
              detailedContent="Gestão total de entradas e saídas, com cálculo automático de comissões para sua rede de captadores e parceiros."
              delay={0.4} 
            />
            <FeatureCard 
              icon={PencilLine} 
              title="Assinatura de contratos" 
              description="Contratos digitais com validade jurídica." 
              detailedContent="Elimine o papel e a necessidade de deslocamento. Envie contratos para assinatura digital das mamães diretamente pelo WhatsApp."
              delay={0.5} 
            />
            <FeatureCard 
              icon={TicketCheck} 
              title="Suporte" 
              description="Sistema de tickets para atendimento ágil." 
              detailedContent="Organize as dúvidas das suas clientes em uma fila de atendimento prioritário, garantindo que ninguém fique sem resposta."
              delay={0.6} 
            />
          </div>
        </div>
      </section>

      {/* Growth & Profit Section */}
      <section id="faturamento" className="py-24 px-6 relative overflow-hidden bg-bg-dark/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="px-4 py-1.5 bg-pink-accent/10 border border-pink-accent/20 rounded-full flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-pink-accent" />
                  <span className="text-[10px] font-black text-pink-accent uppercase tracking-wider">Performance Comprovada</span>
                </div>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                Crescimento real de <span className="text-pink-accent italic">220%</span> no faturamento médio.
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed mb-10">
                Nossas assessorias parceiras não apenas gerenciam processos, elas escalam lucros. Otimize sua operação e veja os números falarem por si mesmos.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-6 bg-card-surface/50 rounded-3xl border border-border-subtle">
                  <div className="text-3xl font-black text-text-primary mb-1">220%</div>
                  <div className="text-sm text-text-secondary uppercase tracking-widest font-bold">Aumento de Lucratividade</div>
                  <p className="text-xs text-text-secondary mt-3 leading-relaxed">Média registrada em 12 meses após a implantação completa do sistema Assessor Pro.</p>
                </div>
                <div className="p-6 bg-card-surface/50 rounded-3xl border border-border-subtle">
                  <div className="text-3xl font-black text-text-primary mb-1">R$ 4.2M</div>
                  <div className="text-sm text-text-secondary uppercase tracking-widest font-bold">Processados mensalmente</div>
                  <p className="text-xs text-text-secondary mt-3 leading-relaxed">Volume total transacionado pelas assessorias que confiam em nossa infraestrutura.</p>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <button className="bg-pink-accent text-white px-8 py-4 rounded-full font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-pink-accent/20 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Ver Cases de Sucesso
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-card-surface border border-border-subtle p-10 rounded-[3rem] shadow-2xl relative"
            >
              <div className="absolute top-10 right-10 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-text-secondary opacity-60 uppercase tracking-widest">Real-time Data</span>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-1">Evolução Operacional</h3>
                <p className="text-sm text-text-secondary">Comparativo semestral pós-migração</p>
              </div>

              <GrowthChart isDarkMode={isDarkMode} />

              <div className="mt-10 pt-10 border-t border-border-subtle grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-pink-accent font-black text-lg">85%</div>
                  <div className="text-[10px] uppercase font-bold text-text-secondary">Eficiência</div>
                </div>
                <div>
                  <div className="text-pink-accent font-black text-lg">15min</div>
                  <div className="text-[10px] uppercase font-bold text-text-secondary">Tempo Resposta</div>
                </div>
                <div>
                  <div className="text-pink-accent font-black text-lg">99.9%</div>
                  <div className="text-[10px] uppercase font-bold text-text-secondary">Uptime</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Server & Maintenance Section */}
      <section id="segurança" className="py-24 px-6 bg-pink-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Server, title: "Servidor Incluso", desc: "Infraestrutura de alta performance." },
                  { icon: ShieldCheck, title: "Segurança", desc: "Criptografia de ponta a ponta." },
                  { icon: Zap, title: "Updates", desc: "Melhorias constantes sem custo." },
                  { icon: MessageCircle, title: "Suporte", desc: "Time especializado à disposição." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-card-surface rounded-2xl border border-border-subtle"
                  >
                    <item.icon className="w-8 h-8 text-pink-accent mb-4" />
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-pink-accent font-bold uppercase tracking-widest text-xs mb-4 block">Tecnologia & Confiança</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Relaxa, a gente cuida da <span className="italic text-pink-soft">Engenharia</span>.</h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Você foca no atendimento às mamães, nós cuidamos de todo o resto. O valor mensal já inclui hospedagem segura, backups automáticos e manutenção técnica vitalícia.
              </p>
              <div className="flex items-center gap-4 text-pink-accent">
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-bold">Backup em tempo real disponível em todas as contas.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landing Page Inclusa Section */}
      <section id="landing-page" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-card-surface border border-border-subtle rounded-[3rem] p-8 md:p-14 overflow-hidden">
            <div className="absolute inset-y-0 right-0 w-1/3 bg-pink-accent/10 blur-[90px] pointer-events-none" />
            <div className="grid lg:grid-cols-2 gap-14 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-pink-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="text-pink-accent w-6 h-6" />
                </div>
                <span className="inline-block mb-4 px-4 py-1.5 bg-pink-accent/10 border border-pink-accent/20 rounded-full text-[10px] uppercase tracking-widest font-black text-pink-accent">
                  Incluso no Sistema
                </span>
                <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                  Seu plano já inclui uma <span className="italic text-pink-soft">Landing Page</span> para captar novas clientes.
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  Além da plataforma de gestão, sua empresa recebe uma página profissional de vendas para atrair mamães interessadas, gerar oportunidades e manter sua agenda sempre em movimento.
                </p>
                <div className="space-y-4 mb-10">
                  {beneficiosLandingPageInclusa.map((beneficio, indice) => (
                    <div key={indice} className="flex items-start gap-3 text-text-primary">
                      <CheckCircle2 className="w-5 h-5 text-pink-accent flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{beneficio}</span>
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={abrirWhatsappEspecialista}
                  className="bg-pink-accent text-white px-8 py-4 rounded-full font-bold text-sm hover:brightness-110 transition-all shadow-xl shadow-pink-accent/20 flex items-center justify-center gap-2"
                >
                  Quero ativar minha landing page <ChevronRight className="w-5 h-5" />
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-bg-primary/70 border border-border-subtle rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl"
              >
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-border-subtle">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-text-secondary font-black">Landing Pronta</div>
                    <h3 className="text-2xl font-serif">Página de Captação</h3>
                  </div>
                  <div className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-[10px] font-black uppercase tracking-wider">
                    Ativa
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl border border-border-subtle bg-card-surface/70">
                    <div className="text-[10px] uppercase tracking-widest text-text-secondary font-black mb-1">Headline</div>
                    <p className="font-bold">Atendimento especializado em salário maternidade sem burocracia.</p>
                  </div>
                  <div className="p-4 rounded-2xl border border-border-subtle bg-card-surface/70">
                    <div className="text-[10px] uppercase tracking-widest text-text-secondary font-black mb-1">CTA principal</div>
                    <p className="font-bold">Quero falar com uma especialista agora.</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl border border-border-subtle bg-card-surface/70">
                      <div className="text-[10px] uppercase tracking-widest text-text-secondary font-black mb-1">Leads</div>
                      <p className="text-2xl font-black text-pink-accent">+48/semana</p>
                    </div>
                    <div className="p-4 rounded-2xl border border-border-subtle bg-card-surface/70">
                      <div className="text-[10px] uppercase tracking-widest text-text-secondary font-black mb-1">Conversão</div>
                      <p className="text-2xl font-black text-pink-accent">12,4%</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-pink-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Search className="text-pink-accent w-6 h-6" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Sua assessoria no <span className="italic text-pink-soft">Topo do Google</span>.</h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Não entregamos apenas um sistema, entregamos uma máquina de vendas. Seu site já vem com otimização completa (SEO) para ser encontrado por quem mais precisa.
              </p>
              <div className="space-y-4">
                {[
                  "Indexação rápida em todos os buscadores",
                  "Carregamento ultra-rápido para melhor ranking",
                  "Design focado em conversão de leads",
                  "Tags e metadados configurados por especialistas"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-text-primary font-medium">
                    <CheckCircle2 className="w-5 h-5 text-pink-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <SearchEngineBox name="Google" color="bg-blue-500" delay={0.1} />
              <SearchEngineBox name="Bing" color="bg-emerald-500" delay={0.2} />
              <SearchEngineBox name="Yahoo" color="bg-purple-600" delay={0.3} />
            </div>
          </div>
        </div>
      </section>

      {/* CPF Consultation Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="bg-card-surface border border-border-subtle p-8 rounded-[3rem] shadow-2xl relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-accent/10 rounded-xl flex items-center justify-center">
                      <Fingerprint className="text-pink-accent w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-black text-text-secondary opacity-60 tracking-widest">Módulo de Consulta</div>
                      <div className="font-bold">Análise de Crédito CPF</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-[10px] font-black uppercase tracking-tighter">Ativo</div>
                </div>

                <div className="space-y-4">
                  <div className="p-5 bg-bg-dark/40 rounded-2xl border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-white/5 flex items-center justify-center">
                        <Users className="w-6 h-6 text-text-secondary" />
                      </div>
                      <div>
                        <div className="text-sm font-bold uppercase tracking-widest">Maria Silva</div>
                        <div className="text-[10px] text-text-secondary">CPF: 000.***.***-00</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black text-pink-accent">SCORE</div>
                      <div className="text-2xl font-black text-pink-accent">842</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-bg-dark/40 rounded-2xl border border-white/5">
                      <div className="text-[10px] uppercase font-bold text-text-secondary mb-1">Inadimplência</div>
                      <div className="text-sm font-bold text-green-500">Nenhum registro</div>
                    </div>
                    <div className="p-4 bg-bg-dark/40 rounded-2xl border border-white/5">
                      <div className="text-[10px] uppercase font-bold text-text-secondary mb-1">Risco</div>
                      <div className="text-sm font-bold text-emerald-400">Muito Baixo</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex items-center gap-2 text-xs font-black text-pink-accent uppercase tracking-[2px]"
                  >
                    <Search className="w-4 h-4" />
                    Consultando base nacional...
                  </motion.div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-pink-accent/5 blur-[120px] -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="w-12 h-12 bg-pink-accent/10 rounded-xl flex items-center justify-center mb-6">
                <UserRoundSearch className="text-pink-accent w-6 h-6" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Chega de <span className="italic text-pink-soft">Inadimplência</span>.</h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Tome decisões baseadas em dados. Nosso módulo integrado de consulta de CPF permite analisar o score e o histórico de cada cliente em segundos.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Score em Tempo Real", desc: "Acesse a pontuação de crédito atualizada nacionalmente." },
                  { title: "Verificação de Antecedentes", desc: "Saiba o histórico financeiro completo antes de fechar o contrato." },
                  { title: "Assinatura intuitiva na plataforma", desc: "Processo simplificado e seguro para maior agilidade." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 bg-pink-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-pink-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary">{item.title}</h4>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Experience */}
      <section className="py-24 px-6 bg-pink-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="relative z-10 mx-auto w-full max-w-[280px] aspect-[9/19] bg-bg-dark rounded-[3rem] p-3 border-[8px] border-[#1a1a1a] shadow-2xl"
               >
                 <div className="w-full h-full bg-bg-primary rounded-[2rem] overflow-hidden relative">
                    <div className="h-6 w-1/3 bg-[#1a1a1a] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-20" />
                    <img 
                      src={Mobile}
                      alt="Mobile App" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                 </div>
               </motion.div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-pink-accent/10 rounded-full blur-[100px] -z-10" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 bg-pink-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="text-pink-accent w-6 h-6" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Acompanhamento na <span className="italic text-pink-soft">Palma da Mão</span>.</h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Reduza drasticamente as chamadas de suporte. Sua cliente tem um painel exclusivo e otimizado para celular, onde ela acompanha cada movimentação em tempo real.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                onClick={abrirWhatsappEspecialista}
                className="bg-text-primary text-bg-primary px-8 py-4 rounded-full font-bold text-sm shadow-xl flex items-center justify-center gap-2"
              >
                Agendar uma demonstração <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* OnDemand Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-bg-dark text-white rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/3 h-full bg-pink-accent opacity-5 blur-[100px]" />
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="max-w-xl">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 border border-white/10">
                  <Code2 className="text-pink-accent w-6 h-6" />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif mb-8 italic">Seu sistema, <span className="text-pink-soft font-bold">Suas Regras</span>.</h2>
                <p className="text-xl text-text-secondary mb-12 leading-relaxed">
                  Toda assessoria tem suas particularidades. Nosso serviço <strong>OnDemand</strong> permite que você solicite alterações específicas ou novos módulos que se encaixem perfeitamente no seu fluxo de trabalho.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-pink-accent/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-pink-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-lg">Customização Total</h4>
                      <p className="text-sm text-text-secondary">Alteramos layouts, campos e lógicas conforme sua necessidade.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-pink-accent/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-pink-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-lg">Novos Módulos</h4>
                      <p className="text-sm text-text-secondary">Desenvolvemos ferramentas exclusivas para o seu modelo de negócio.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex justify-end">
                <ModuleEditorPreview modoEscuro={isDarkMode} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Quem <span className="italic text-pink-soft">Usa e Confia</span></h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Veja como estamos transformando assessorias em todo o Brasil.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Camila Silva" 
              role="Fundadora da MamyCare" 
              text="O Assessor Pro mudou completamente nossa produtividade. O Painel da Mamãe reduziu em 70% as mensagens de dúvida no WhatsApp."
              image={avatarUsuarioPadraoUm}
            />
            <TestimonialCard 
              name="Beatriz Santos" 
              role="Assessora Sênior" 
              text="A facilidade de organizar os processos por etapas e ter relatórios financeiros automáticos nos permitiu escalar de 10 para 50 atendimentos por mês."
              image={avatarUsuarioPadraoUm}
            />
            <TestimonialCard 
              name="Renata Oliveira" 
              role="Diretora Jurídica" 
              text="Sistema super intuitivo. Toda a minha equipe aprendeu a usar em menos de um dia. O suporte é rápido e resolve tudo na hora."
              image={avatarUsuarioPadraoUm}
            />
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section id="investimento" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Um <span className="italic text-pink-soft">Investimento</span> que se Paga.</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Toda a potência de um sistema completo com tudo ilimitado para sua assessoria decolar.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Unlimited Everything */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-card-surface border border-border-subtle p-12 rounded-[3rem] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-pink-accent/10 rounded-xl flex items-center justify-center">
                    <IconeInfinito className="text-pink-accent w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold">Tudo Ilimitado</h3>
                </div>
                <div className="space-y-6">
                  {[
                    { label: "Processos ilimitados", icon: Files },
                    { label: "Clientes ilimitados", icon: Users },
                    { label: "Funcionários ilimitados", icon: Users },
                    { label: "Acessos ilimitados ao site", icon: Globe },
                    { label: "Site / Landing page com SEO otimizado incluso", icon: Search },
                    { label: "Armazenamento seguro ilimitado", icon: ShieldCheck }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      <div className="flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-text-secondary" />
                        <span className="font-semibold">{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12 p-6 bg-pink-accent/5 rounded-2xl border border-pink-accent/10">
                <p className="text-sm text-text-secondary italic">"Sem letras miúdas. Se o seu negócio cresce, o sistema cresce com você sem taxas extras por volume."</p>
              </div>
            </motion.div>

            {/* Pricing Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-text-primary text-bg-primary p-12 rounded-[3rem] flex flex-col justify-between shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-accent/20 blur-[100px] pointer-events-none" />
              
              <div className="relative z-10">
                <span className="inline-block px-4 py-2 bg-pink-accent text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Setup Exclusivo • Promoção</span>
                <div className="mb-1">
                  <span className="text-sm opacity-40 line-through font-bold">De R$ 3.000 por</span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black">R$ 2.000</span>
                  <span className="text-lg opacity-60 font-bold">no PIX</span>
                </div>
                <p className="text-sm opacity-60 mb-8 font-medium">Ou R$ 2.500 em até 12x no cartão</p>
                
                <div className="h-px bg-bg-primary/10 w-full mb-8" />
                
                <div className="flex items-center gap-4 mb-8 text-pink-accent">
                  <CreditCard className="w-6 h-6" />
                  <span className="font-bold">Parcelamento em até 12x no cartão</span>
                </div>

                <div className="flex flex-wrap gap-3 opacity-40">
                  {/* Mock card icons */}
                  {["Visa", "Master", "Elo", "Hiper"].map(tag => (
                    <div key={tag} className="px-3 py-1 border border-bg-primary rounded text-[10px] uppercase font-bold tracking-tighter">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-12 pt-8 border-t border-bg-primary/10">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <span className="block text-xs uppercase font-bold opacity-40 mb-1">Assinatura Mensal</span>
                    <span className="text-3xl font-black text-pink-accent">R$ 150 <span className="text-sm opacity-60 font-medium whitespace-nowrap">/ mês</span></span>
                  </div>
                  <div className="text-right text-[10px] opacity-40 max-w-[120px]">
                    Inclui suporte, servidor e atualizações vitalícias.
                  </div>
                </div>
                <button className="w-full bg-pink-accent text-white py-5 rounded-2xl font-black text-lg hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-pink-accent/30">
                  Garantir minha Vaga
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-pink-accent/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Dúvidas Frequentes</h2>
            <p className="text-text-secondary">Tudo o que você precisa saber sobre o Assessor Pro</p>
          </div>
          <div className="space-y-2">
            <FAQItem 
              question="Como funciona o pagamento do setup?" 
              answer="O setup é o investimento inicial para configurarmos seu servidor exclusivo e personalizar sua plataforma. O valor é de R$ 2.000 à vista (PIX/Boleto) ou R$ 2.500 no cartão de crédito, podendo ser parcelado em até 12x." 
            />
            <FAQItem 
              question="Posso cancelar a mensalidade quando quiser?" 
              answer="Sim, não trabalhamos com fidelidade. Se decidir parar, basta nos avisar com 30 dias de antecedência. Seus dados são exportados para você de forma íntegra." 
            />
            <FAQItem 
              question="O suporte é humanizado?" 
              answer="Com certeza. Temos um time de especialistas via WhatsApp e Tickets pronto para te atender em horário comercial, com tempo médio de resposta de 15 minutos." 
            />
            <FAQItem 
              question="O sistema é seguro?" 
              answer="Utilizamos os mesmos padrões de segurança bancários. Seus dados e das suas clientes são criptografados e hospedados em servidores Google Cloud." 
            />
          </div>
        </div>
      </section>

      {/* Floating Pricing */}
      <div id="cta-float" className="fixed bottom-10 right-10 z-40 bg-card-surface backdrop-blur-xl text-text-primary p-8 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.4)] text-center hidden lg:block w-72 border border-border-subtle transition-all duration-500">
        <span className="text-[10px] uppercase font-bold text-text-secondary tracking-wider block mb-1">Plano Ilimitado</span>
        <div className="text-[10px] line-through opacity-40 font-bold mb-1">De R$ 3.000 por</div>
        <div className="text-3xl font-black leading-none">R$ 2.000 <span className="text-xs opacity-50 font-medium">PIX</span></div>
        <span className="text-sm text-pink-accent block mt-1 font-bold italic">+ R$ 150 / mês</span>
        <button
          onClick={abrirWhatsappEspecialista}
          className="w-full mt-6 bg-pink-accent text-white py-4 rounded-full font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-pink-accent/20"
        >
          Falar com Especialista
        </button>
      </div>

      {/* Footer */}
      <footer className="py-20 px-6 bg-bg-dark/20 text-text-primary">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <img src={logoSite} alt="Logo Assessor Pro" className="h-14 w-auto object-contain" />
            <p className="text-text-secondary max-w-sm leading-relaxed text-sm mt-4">
              O sistema definitivo para assessorias que buscam excelência no atendimento e agilidade nos processos de salário maternidade.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Sistema</h4>
            <ul className="space-y-4 text-text-secondary text-sm">
              <li><a href="#módulos" className="hover:text-pink-accent transition-colors">Funcionalidades</a></li>
              <li><a href="#investimento" className="hover:text-pink-accent transition-colors">Investimento</a></li>
              <li><a href="#segurança" className="hover:text-pink-accent transition-colors">Segurança</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Contato</h4>
            <ul className="space-y-4 text-text-secondary text-sm">
              <li>
                <a href="mailto:suporte@ogivadigital.com.br" className="hover:text-pink-accent transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  suporte@ogivadigital.com.br
                </a>
              </li>
              <li>
                <a href={linkWhatsappEspecialista} target="_blank" rel="noopener noreferrer" className="hover:text-pink-accent transition-colors flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  (51) 99472-7036
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-border-subtle text-center text-text-secondary text-xs">
          <p>© 2026 Assessor Pro. Todos os direitos reservados.</p>
          <p className="mt-2 text-[10px] opacity-60">
            Um produto <a href="https://ogivadigital.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-pink-accent underline decoration-pink-accent/20 underline-offset-2 transition-colors">Ogiva Digital</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
