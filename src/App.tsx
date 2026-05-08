import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Users, 
  MapPin, 
  Send, 
  Zap, 
  LayoutDashboard, 
  Plus,
  Search,
  ChevronRight,
  TrendingUp,
  Settings,
  Mail,
  Trash2,
  FileSpreadsheet,
  ChevronDown,
  Download,
  MoreVertical,
  Circle,
  X,
  AlertCircle,
  CheckCircle2,
  Calendar,
  Bell,
  Star,
  Clock,
  Instagram,
  Linkedin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Page = 'overview' | 'pipeline' | 'fontes' | 'leads' | 'campanhas' | 'orquestrador';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('overview');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div className={`flex text-text min-h-screen font-sans selection:bg-brand/30 overflow-hidden relative ${activePage === 'orquestrador' ? 'bg-black' : 'bg-[#030303]'}`}>
      {/* Mesh Background Effect */}
      {activePage !== 'orquestrador' && <div className="mesh-bg" />}
      
      {/* Intense Red Overlay for Landing Screens */}
      {((activePage === 'campanhas')) && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 blur-[120px] rounded-full opacity-30" />
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand/5 blur-[100px] rounded-full opacity-20" />
        </div>
      )}
      
      {/* Sidebar */}
      <aside className={`w-[230px] flex flex-col h-screen sticky top-0 z-40 shrink-0 ${activePage === 'orquestrador' ? 'bg-black border-r border-white/[0.02]' : 'bg-[#080808] border-r border-white/[0.04]'}`}>
        {/* Logo Section */}
        <div className="p-5 flex items-center gap-2.5">
          <div className="w-[28px] h-[28px] rounded-lg bg-linear-to-br from-brand to-[#b8302f] flex items-center justify-center shadow-[0_0_15px_rgba(255,99,99,0.25)]">
            <span className="text-white text-base font-semibold leading-none">ॐ</span>
          </div>
          <div className="flex-1">
            <h1 className="text-[13px] font-bold text-white tracking-tight leading-tight">Ohm</h1>
          </div>
          <div className="flex items-center gap-1.5 opacity-40 hover:opacity-100 transition-opacity">
            <Search size={14} className="text-white cursor-pointer" />
            <Plus size={14} className="text-white cursor-pointer" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2.5 overflow-y-auto no-scrollbar space-y-0.5">
          <SectionLabel label="Visão" />
          <NavItem 
            icon={<LayoutDashboard size={14} />} 
            label="Overview" 
            active={activePage === 'overview'} 
            onClick={() => setActivePage('overview')} 
          />
          <NavItem 
            icon={<TrendingUp size={14} />} 
            label="Pipeline" 
            active={activePage === 'pipeline'} 
            onClick={() => setActivePage('pipeline')} 
            badge="154"
          />

          <SectionLabel label="Prospecção" />
          <NavItem 
            icon={<MapPin size={14} />} 
            label="Fontes de Dados" 
            active={activePage === 'fontes'} 
            onClick={() => setActivePage('fontes')} 
            isNew
          />

          <SectionLabel label="Dados" />
          <NavItem 
            icon={<Users size={14} />} 
            label="Leads" 
            active={activePage === 'leads'} 
            onClick={() => setActivePage('leads')} 
          />
          <NavItem 
            icon={<Send size={14} />} 
            label="Campanhas" 
            active={activePage === 'campanhas'} 
            onClick={() => setActivePage('campanhas')} 
          />

          <SectionLabel label="Em Breve" />
          <NavItem 
            icon={<Zap size={14} />} 
            label="Orquestrador IA" 
            active={activePage === 'orquestrador'}
            onClick={() => setActivePage('orquestrador')}
            badge="F4"
          />
          <NavItem 
            icon={<BarChart3 size={14} />} 
            label="CRM Outreach" 
            disabled
            badge="F3"
          />
        </nav>

        {/* Bottom Area */}
        <div className="p-3 mt-auto border-t border-white/[0.04] space-y-3 bg-[#080808]/80 backdrop-blur-md">
          <div className="bg-[#0c1a14] border border-success/20 rounded-full px-3 py-1.5 flex items-center justify-between group cursor-default shadow-sm">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-1.5 h-1.5 rounded-full bg-success shadow-[0_0_8px_rgba(0,217,126,0.6)]" />
                <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-success animate-ping opacity-40" />
              </div>
              <span className="text-[10px] font-bold text-success/90 uppercase tracking-widest">Motor ativo</span>
            </div>
            <span className="text-[9px] font-mono text-success/30 font-semibold">99.9%</span>
          </div>

          <div className="p-2.5 bg-white/[0.01] border border-white/[0.04] rounded-xl flex items-center gap-3 group cursor-pointer hover:bg-white/[0.03] hover:border-white/[0.08] transition-all shadow-lg active:scale-[0.98]">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#FF6363] to-[#FF8585] flex items-center justify-center text-[11px] font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_12px_rgba(255,99,99,0.2)]">RZ</div>
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-bold text-white tracking-tight leading-none mb-0.5">Renê</div>
              <div className="text-[10px] text-text-muted font-medium">Plano Pro</div>
            </div>
            <ChevronRight size={13} className="text-white/10 group-hover:text-white/40 transition-colors" />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={`flex-1 flex flex-col h-screen relative overflow-hidden ${activePage === 'orquestrador' ? 'bg-black' : ''}`}>
        {/* Top Bar / Search */}
        <header className={`h-11 flex items-center justify-between px-4 shrink-0 transition-shadow ${activePage === 'orquestrador' ? 'bg-black' : 'bg-bg/80 backdrop-blur-xl border-b border-white/[0.06]'}`}>
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <span className="font-mono text-[10px] text-[#555] ml-3.5">ohm.app/{activePage}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-md px-2.5 py-1 text-[11px] text-[#777] min-w-[280px]">
              <Search size={11} />
              <span className="flex-1">Buscar leads, campanhas ou comandos...</span>
              <kbd className="font-mono text-[10px] bg-white/[0.06] border border-white/[0.1] rounded px-1.5 py-0.5 text-[#999]">⌘K</kbd>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className={`flex-1 overflow-y-auto no-scrollbar ${activePage === 'orquestrador' ? 'p-0' : 'p-7 pb-10'}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
            >
              {/* Header Title Section */}
              <div className={`flex items-start justify-between mb-5.5 ${activePage === 'orquestrador' ? 'px-7 pt-7' : ''}`}>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-[21px] font-medium text-white tracking-tight leading-none uppercase">
                      {activePage === 'fontes' ? 'Fontes de Dados' : activePage}
                    </h2>
                    <span className="font-mono text-[10px] text-[#888] bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded-[5px]">
                      últimos 30 dias
                    </span>
                  </div>
                  <p className="text-xs text-[#777]">
                    {activePage === 'overview' && 'Bem-vindo de volta. Aqui está o que aconteceu enquanto você esteve fora.'}
                    {activePage === 'pipeline' && 'Controle o fluxo dos seus leads através dos estágios de conversão.'}
                    {activePage === 'fontes' && 'Configure suas fontes e automatize a coleta de novos leads.'}
                    {activePage === 'leads' && 'Base completa de contatos qualificados e prospectados.'}
                    {activePage === 'campanhas' && 'Gerencie suas estratégias de abordagem e métricas de sucesso.'}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.08] text-[#ccc] text-[11px] px-2.5 py-1.5 rounded-md hover:bg-white/[0.08] transition-all">
                    <Download size={11} /> Exportar
                  </button>
                  <button className="flex items-center gap-1.5 bg-linear-to-b from-brand to-[#d94e4e] shadow-[0_0_0_1px_rgba(255,99,99,0.3),0_8px_24px_-8px_rgba(255,99,99,0.4)] text-white text-[11px] font-medium px-3 py-1.5 rounded-md hover:brightness-110 transition-all glass-border">
                    <Plus size={11} strokeWidth={3} /> Nova campanha
                  </button>
                </div>
              </div>

              {activePage === 'overview' && <OverviewPage />}
              {activePage === 'pipeline' && <PipelinePage />}
              {activePage === 'fontes' && <ProspectingPage />}
              {activePage === 'leads' && <LeadsPage />}
              {activePage === 'campanhas' && <CampaignsPage />}
              {activePage === 'orquestrador' && <OrquestradorPage />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Status */}
        <footer className={`h-7 flex items-center justify-between px-4 text-[10px] text-[#666] shrink-0 ${activePage === 'orquestrador' ? 'bg-black' : 'bg-white/[0.01] border-t border-white/[0.05]'}`}>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />
              Gemini conectado
            </span>
            <span className="opacity-30">•</span>
            <span className="font-mono">v2.0.0-beta</span>
          </div>
          <div>Pressione <kbd className="font-mono text-[9px] bg-white/5 border border-white/10 rounded px-1 py-0.5 text-[#999] mx-1">⌘K</kbd> para comandos</div>
        </footer>
      </main>
    </div>
  );
}

// Side Components
function SectionLabel({ label }: { label: string }) {
  return (
    <div className="px-3 pt-5 pb-2 text-[10px] font-bold text-white/20 tracking-[0.2em] uppercase">
      {label}
    </div>
  );
}

function NavItem({ icon, label, active, onClick, badge, isNew, disabled }: { 
  icon: React.ReactNode, 
  label: string, 
  active?: boolean, 
  onClick?: () => void,
  badge?: string,
  isNew?: boolean,
  disabled?: boolean
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-all group relative overflow-hidden
        ${active ? 'text-white' : 'text-text-muted hover:text-white'}
        ${disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      {active && (
        <>
          <div className="absolute inset-x-0 inset-y-0 bg-white/[0.03] rounded-lg pointer-events-none" />
          <div className="absolute left-0 top-1.5 bottom-1.5 w-[2px] bg-brand rounded-full shadow-[0_0_8px_rgba(255,99,99,0.8)]" />
        </>
      )}
      
      <span className={`relative z-10 transition-colors ${active ? 'text-brand' : 'text-white/20 group-hover:text-white/60'}`}>
        {icon}
      </span>
      <span className="relative z-10 flex-1 text-left tracking-tight">{label}</span>
      
      {isNew && (
        <span className="relative z-10 bg-success/10 text-success text-[10px] px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wider scale-90">
          NEW
        </span>
      )}
      
      {badge && (
        <span className="relative z-10 font-mono text-[10px] font-bold text-[#444] group-hover:text-[#666] bg-white/[0.04] px-1.5 py-0.5 rounded transition-colors">
          {badge}
        </span>
      )}
    </button>
  );
}

function OverviewPage() {
  return (
    <div className="space-y-4.5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5">
        <KPIStat label="Pipeline" value="154" trend="+24" sub="esta semana" icon={<TrendingUp size={13} />} />
        <KPIStat label="Conversão" value="18.2" unit="%" trend="+0.5pp" sub="vs. mês ant." icon={<BarChart3 size={13} />} />
        <KPIStat 
          label="Fontes ativas" 
          value="7" 
          total="/12" 
          sub="coletando" 
          icon={<MapPin size={13} color="#FF6363" />} 
          active 
        />
        <KPIStat label="Score IA" value="8.4" total="/10" sub="qualidade alta" success icon={<Zap size={13} color="#FF6363" fill="#FF6363" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-2.5">
        <div className="glass-border bg-white/[0.02] rounded-xl p-3.5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-mono text-[10px] font-bold text-[#aaa] uppercase tracking-widest">Funil do Pipeline</h3>
            <span className="text-[10px] text-[#666]">154 leads totais</span>
          </div>
          <div className="space-y-1.5">
            <HorizontalFunnelStep label="Novo" count={62} pct={100} />
            <HorizontalFunnelStep label="Contato" count={43} pct={70} opacity={0.85} />
            <HorizontalFunnelStep label="Qualif." count={29} pct={48} opacity={0.7} />
            <HorizontalFunnelStep label="Negoc." count={15} pct={25} opacity={0.55} />
            <HorizontalFunnelStep label="Fechado" count={5} pct={9} isSuccess />
          </div>
        </div>

        <div className="glass-border bg-white/[0.02] rounded-xl p-3.5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <h3 className="font-mono text-[10px] font-bold text-[#aaa] uppercase tracking-widest">Fontes de dados</h3>
              <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />
            </div>
            <button className="text-[10px] text-brand hover:text-brand-light transition-all">
              + Nova
            </button>
          </div>
          <div className="space-y-1.5">
            <SourceMiniItem label="LinkedIn Sales Nav" color="#0077B5" icon={<Circle size={13} />} active />
            <SourceMiniItem label="Instagram" color="#E1306C" icon={<Circle size={13} />} active />
            <SourceMiniItem label="Google Maps" color="#4285F4" icon={<MapPin size={13} />} active />
            <SourceMiniItem label="Apollo.io" color="#888" icon={<TrendingUp size={13} />} status="pausada" />
          </div>
        </div>
      </div>

      <div className="glass-border bg-white/[0.02] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between p-3 border-b border-white/[0.04]">
          <div className="flex items-center gap-2">
            <h3 className="font-mono text-[10px] font-bold text-[#aaa] uppercase tracking-widest leading-none">Leads recentes</h3>
            <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />
            <span className="font-mono text-[10px] text-success font-bold">3 novos</span>
          </div>
          <button className="text-[11px] text-brand hover:text-brand-light transition-all flex items-center gap-1">
            Ver todos <ChevronRight size={11} strokeWidth={2.5} />
          </button>
        </div>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-white/[0.04]">
              <th className="font-mono text-[9px] font-bold text-[#666] uppercase tracking-[0.1em] px-3.5 py-1.5">Lead</th>
              <th className="font-mono text-[9px] font-bold text-[#666] uppercase tracking-[0.1em] px-3.5 py-1.5">Fonte</th>
              <th className="font-mono text-[9px] font-bold text-[#666] uppercase tracking-[0.1em] px-3.5 py-1.5">Score</th>
              <th className="font-mono text-[9px] font-bold text-[#666] uppercase tracking-[0.1em] px-3.5 py-1.5">Status</th>
              <th className="font-mono text-[9px] font-bold text-[#666] uppercase tracking-[0.1em] px-3.5 py-1.5 text-right">Quando</th>
            </tr>
          </thead>
          <tbody className="text-[11.5px]">
            <RecentLeadRow name="Marina Costa" email="marina@nubank.com.br" score={9.4} status="Negociando" source="LinkedIn" time="2 min" color="bg-linear-to-br from-[#5B8FF9] to-[#2D5BD9]" />
            <RecentLeadRow name="Ricardo Almeida" email="ricardo@stone.com" score={7.8} status="Contato" source="Instagram" time="14 min" color="bg-linear-to-br from-brand to-[#d94e4e]" />
            <RecentLeadRow name="Juliana Souza" email="ju@vtex.com" score={8.8} status="Qualificado" source="Google Maps" time="38 min" color="bg-linear-to-br from-[#A78BFA] to-[#7C3AED]" />
            <RecentLeadRow name="Pedro Tavares" email="pedro@magalu.com" score={6.2} status="Novo" source="LinkedIn" time="1 h" color="bg-linear-to-br from-orange-400 to-[#F59E0B]" />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PipelinePage() {
  return (
    <div className="space-y-4.5">
      <div className="grid grid-cols-5 gap-2.5">
        <PipelineStageCard label="Capturado" count={1240} growth="+12%" color="border-accent/40 bg-accent/5" />
        <PipelineStageCard label="Validado" count={980} growth="+8%" color="border-accent/60 bg-accent/10" />
        <PipelineStageCard label="Deduplicado" count={882} growth="+5%" color="border-[#a78bfa]/40 bg-[#a78bfa]/5" />
        <PipelineStageCard label="Pontuado" count={842} growth="+15%" color="border-success/40 bg-success/5" />
        <PipelineStageCard label="Descartado" count={358} growth="-2%" color="border-danger/20 bg-danger/5" />
      </div>

      <div className="glass-border bg-white/[0.02] rounded-xl p-6">
        <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#aaa] mb-6">Distribuição de Temperatura</h3>
        <div className="grid grid-cols-3 gap-4">
          <TempStat label="🔥 HOT" count={184} labelColor="text-success" bg="bg-success/5" border="border-success/20" />
          <TempStat label="🌡️ WARM" count={458} labelColor="text-warning" bg="bg-warning/5" border="border-warning/20" />
          <TempStat label="🧊 COLD" count={658} labelColor="text-accent" bg="bg-accent/5" border="border-accent/20" />
        </div>
      </div>
    </div>
  );
}

function ProspectingPage() {
  const [mapsTags, setMapsTags] = useState<string[]>(['aberto agora', 'bem avaliado']);
  const [socialTags, setSocialTags] = useState<string[]>(['tem instagram', 'link bio']);
  
  const handleAddTag = (list: string[], setList: (l: string[]) => void, value: string) => {
    const trimmed = value.trim();
    if (trimmed && !list.includes(trimmed)) {
      setList([...list, trimmed]);
    }
  };

  const handleRemoveTag = (list: string[], setList: (l: string[]) => void, item: string) => {
    setList(list.filter(t => t !== item));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 items-start"
    >
      <div className="space-y-6">
        <div className="glass-border bg-[#0C0C0C]/50 backdrop-blur-md rounded-xl p-6 space-y-6">
          <div className="space-y-5">
            <FormGroup label="1. Nicho / Segmento">
              <input 
                type="text" 
                placeholder="Ex: Salão de Beleza, Academia, Clínica..." 
                className="w-full bg-white/[0.02] border border-white/[0.08] rounded-lg px-3 py-2 text-[13px] text-white placeholder-white/20 focus:outline-none focus:border-brand/40 focus:bg-white/[0.04] transition-all" 
              />
            </FormGroup>

            <FormGroup label="2. Localização Principal">
              <input 
                type="text" 
                defaultValue="São Paulo, SP" 
                className="w-full bg-white/[0.02] border border-white/[0.08] rounded-lg px-3 py-2 text-[13px] text-white font-mono focus:outline-none focus:border-brand/40 focus:bg-white/[0.04] transition-all" 
              />
            </FormGroup>

            <FormGroup label="3. Micro-localizações (Bairros)">
              <textarea 
                rows={3} 
                placeholder="Moema&#10;Pinheiros&#10;Itaim Bibi" 
                className="w-full bg-white/[0.02] border border-white/[0.08] rounded-lg px-3 py-2 text-[13px] text-white font-mono focus:outline-none focus:border-brand/40 focus:bg-white/[0.04] transition-all resize-none leading-relaxed" 
              />
              <p className="text-[10px] text-text-muted mt-2 italic font-medium flex items-center gap-1">
                <AlertCircle size={10} /> Busca recursiva por região.
              </p>
            </FormGroup>

            <div className="h-px bg-white/[0.04] my-2" />

            <FormGroup label="Tags de Busca (Google Maps)">
              <div className="flex flex-wrap gap-2 mb-3">
                <AnimatePresence>
                  {mapsTags.map((tag) => (
                    <motion.button 
                      key={tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      onClick={() => handleRemoveTag(mapsTags, setMapsTags, tag)}
                      className="group flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] rounded-md text-[11px] text-text-dim hover:text-white hover:border-white/20 transition-all cursor-pointer"
                    >
                      {tag} 
                      <X size={10} className="text-white/20 group-hover:text-danger transition-colors" />
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>
              <div className="relative group/input">
                <Plus size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 group-focus-within/input:text-brand transition-colors" />
                <input 
                  type="text" 
                  placeholder="Novo critério..." 
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleAddTag(mapsTags, setMapsTags, (e.target as HTMLInputElement).value);
                      (e.target as HTMLInputElement).value = '';
                    }
                  }}
                  className="w-full bg-white/[0.015] border border-white/[0.04] border-dashed rounded-lg pl-9 pr-3 py-2 text-[11px] text-text-dim placeholder:text-white/10 focus:outline-none focus:border-white/20 transition-all font-mono" 
                />
              </div>
            </FormGroup>

            <FormGroup label="Tags Sociais (Insta, Linkedin, Site)">
               <div className="flex flex-wrap gap-2 mb-3">
                <AnimatePresence>
                  {socialTags.map((tag) => (
                    <motion.button 
                      key={tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      onClick={() => handleRemoveTag(socialTags, setSocialTags, tag)}
                      className="group flex items-center gap-1.5 px-2.5 py-1 bg-brand/10 border border-brand/20 rounded-md text-[11px] text-brand-light hover:text-white hover:border-brand/40 transition-all cursor-pointer"
                    >
                      {tag}
                      <X size={10} className="text-brand/40 group-hover:text-danger transition-colors" />
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>
              <div className="relative group/input">
                <Plus size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 group-focus-within/input:text-brand transition-colors" />
                <input 
                  type="text" 
                  placeholder="Novo filtro social..." 
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleAddTag(socialTags, setSocialTags, (e.target as HTMLInputElement).value);
                      (e.target as HTMLInputElement).value = '';
                    }
                  }}
                  className="w-full bg-white/[0.015] border border-white/[0.04] border-dashed rounded-lg pl-9 pr-3 py-2 text-[11px] text-text-dim placeholder:text-white/10 focus:outline-none focus:border-white/20 transition-all font-mono" 
                />
              </div>
              <p className="text-[10px] text-text-muted mt-2 italic flex items-center gap-1.5">
                <CheckCircle2 size={10} className="text-success/50" /> Extração de metadados e validação social.
              </p>
            </FormGroup>

            <button className="w-full py-3 bg-linear-to-b from-brand to-[#d94e4e] shadow-[0_8px_32px_rgba(255,99,99,0.2)] text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-lg hover:brightness-110 active:scale-[0.98] transition-all glass-border">
              Executar Prospecção Automática
            </button>
          </div>
        </div>

        <div className="bg-[#050506]/80 backdrop-blur-md border border-white/[0.04] rounded-xl p-4 overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-success shadow-[0_0_8px_rgba(0,217,126,0.5)]" />
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Engine Status</span>
            </div>
            <div className="font-mono text-[9px] text-text-muted opacity-50 pr-1">104 ms</div>
          </div>
          <div className="font-mono text-[10px] text-[#444] h-20 overflow-y-auto no-scrollbar space-y-1.5 pt-1">
             <div className="flex gap-2 items-start">
               <span className="text-white/10 select-none">14:32:01</span> 
               <span className="text-brand shrink-0">WRK</span> 
               <span className="text-text-muted">Processador pronto. Aguardando gatilho de busca...</span>
             </div>
          </div>
        </div>
      </div>

      <div className="glass-border bg-[#0C0C0C]/30 backdrop-blur-sm rounded-xl flex flex-col h-full min-h-[600px] border border-white/[0.02]">
        <div className="px-6 py-4 border-b border-white/[0.03] flex items-center justify-between bg-white/[0.01]">
          <div className="flex items-center gap-3">
            <h3 className="font-mono text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Queue</h3>
            <div className="px-1.5 py-0.5 bg-white/[0.04] border border-white/[0.08] rounded text-[9px] font-mono text-[#555]">0 items</div>
          </div>
          <div className="flex items-center gap-4">
             <button className="text-[10px] text-text-muted font-bold uppercase hover:text-white transition-colors cursor-not-allowed flex items-center gap-2">
               <BarChart3 size={12} />
               Exportar CSV
             </button>
             <div className="w-px h-3 bg-white/[0.05]" />
             <button className="text-[10px] text-brand font-extrabold uppercase opacity-30 cursor-not-allowed">Importar Todos</button>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center p-20 text-center group cursor-default">
            <motion.div 
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-white/5 mb-6 group-hover:scale-105 group-hover:bg-white/[0.03] group-hover:text-brand/40 transition-all duration-700"
            >
              <Search size={28} />
            </motion.div>
            <h4 className="text-[15px] font-medium text-white/40 tracking-tight">O motor de busca está quente.</h4>
            <p className="text-[12px] text-text-muted mt-2 max-w-[320px] leading-relaxed">
              Personalize os nichos e as fontes de dados para iniciar o mapeamento.
            </p>
        </div>
      </div>
    </motion.div>
  );
}

function CampaignsPage() {
  const [view, setView] = useState<'landing' | 'create' | 'list'>('landing');

  if (view === 'create') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-6xl mx-auto py-2 px-4"
      >
        <div className="glass-border bg-[#0C0C0C]/80 backdrop-blur-2xl rounded-[24px] p-10 border border-white/[0.05] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            
            {/* 1. Nome da Campanha */}
            <div className="space-y-2">
              <FormLabel num="1" label="NOME DA CAMPANHA" />
              <input 
                type="text" 
                placeholder="Ex: Black Friday Lead Gen / iGaming CPA BR / Clínica Estética SP" 
                className="w-full bg-white/[0.02] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-white/10 focus:outline-none focus:border-brand/40 transition-all font-mono" 
              />
            </div>

            {/* 2. Descrição Geral */}
            <div className="space-y-2">
              <FormLabel num="2" label="DESCRIÇÃO GERAL DA CAMPANHA" />
              <textarea 
                rows={2}
                placeholder="Explique a campanha como se estivesse explicando para uma IA estrategista. Qual o objetivo? O que está sendo vendido? Como funciona a oferta?"
                className="w-full bg-white/[0.02] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-white/10 focus:outline-none focus:border-brand/40 transition-all resize-none leading-relaxed"
              />
            </div>

            {/* 3. Objetivo Principal */}
            <div className="space-y-3">
              <FormLabel num="3" label="OBJETIVO PRINCIPAL" />
              <div className="flex flex-wrap gap-2">
                {['Leads', 'Vendas', 'CPA', 'RevShare', 'Tráfego', 'Branding', 'WhatsApp', 'Cadastro', 'Instalação App'].map(obj => (
                  <SelectTag key={obj} label={obj} />
                ))}
                <div className="flex items-center gap-2 ml-1">
                  <SelectTag label="Outro:" />
                  <input type="text" placeholder="Digite aqui" className="bg-transparent border-b border-white/10 text-[11px] focus:outline-none focus:border-brand/40 w-20" />
                </div>
              </div>
            </div>

            {/* 4. Produto / Serviço */}
            <div className="space-y-2">
              <FormLabel num="4" label="PRODUTO / SERVIÇO" />
              <textarea 
                rows={3}
                placeholder="O que exatamente está sendo ofertado?"
                className="w-full bg-white/[0.02] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-white/10 focus:outline-none focus:border-brand/40 transition-all resize-none leading-relaxed"
              />
            </div>

            {/* 5. Público-Alvo */}
            <div className="space-y-2">
              <FormLabel num="5" label="PÚBLICO-ALVO PRINCIPAL" />
              <textarea 
                rows={3}
                placeholder="Quem são as pessoas ideais dessa campanha?"
                className="w-full bg-white/[0.02] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-white/10 focus:outline-none focus:border-brand/40 transition-all resize-none leading-relaxed"
              />
            </div>

            {/* 6. Dores do Público */}
            <div className="space-y-2">
              <FormLabel num="6" label="DORES DO PÚBLICO" />
              <textarea 
                rows={3}
                placeholder="Quais dores, desejos ou problemas essa campanha resolve?"
                className="w-full bg-white/[0.02] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-white/10 focus:outline-none focus:border-brand/40 transition-all resize-none leading-relaxed"
              />
            </div>

            {/* 7. Benefícios / Promessa */}
            <div className="space-y-2">
              <FormLabel num="7" label="BENEFÍCIOS / PROMESSA" />
              <textarea 
                rows={3}
                placeholder="O que o usuário ganha? Qual transformação ou resultado?"
                className="w-full bg-white/[0.02] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-white/10 focus:outline-none focus:border-brand/40 transition-all resize-none leading-relaxed"
              />
            </div>

            {/* 8. Possíveis Clientes */}
            <div className="space-y-2">
              <FormLabel num="8" label="POSSÍVEIS CLIENTES / PERSONAS" />
              <textarea 
                rows={3}
                placeholder="Descreva perfis de clientes ideais. Ex: Homem 25-40 que aposta esportiva, Mulher dona de clínica, Nail designer iniciante..."
                className="w-full bg-white/[0.02] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-white/10 focus:outline-none focus:border-brand/40 transition-all resize-none leading-relaxed"
              />
            </div>

            {/* 9. Segmentação de Idade */}
            <div className="space-y-3">
              <FormLabel num="9" label="SEGMENTAÇÃO DE IDADE" />
              <div className="flex flex-wrap gap-2">
                {['18-24', '25-34', '35-44', '45-54', '55+'].map(age => (
                  <SelectTag key={age} label={age} />
                ))}
              </div>
            </div>

            {/* 10. Gênero */}
            <div className="space-y-3">
              <FormLabel num="10" label="GÊNERO" />
              <div className="flex flex-wrap gap-2">
                {['Masculino', 'Feminino', 'Ambos'].map(gender => (
                  <SelectTag key={gender} label={gender} />
                ))}
              </div>
            </div>

            {/* 11. Localização */}
            <div className="space-y-2">
              <FormLabel num="11" label="LOCALIZAÇÃO" />
              <input 
                type="text" 
                placeholder="País, estado, cidade ou região" 
                className="w-full bg-white/[0.02] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-white/10 focus:outline-none focus:border-brand/40 transition-all" 
              />
            </div>

            {/* 12. Micro-Localizações */}
            <div className="space-y-2">
              <FormLabel num="12" label="MICRO-LOCALIZAÇÕES" />
              <textarea 
                rows={2}
                placeholder="Bairros, regiões específicas ou áreas premium."
                className="w-full bg-white/[0.02] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-white/10 focus:outline-none focus:border-brand/40 transition-all resize-none leading-relaxed" 
              />
            </div>

          </div>

          <div className="mt-16 flex justify-center gap-4">
            <button 
              onClick={() => setView('landing')}
              className="px-12 py-4 bg-white/5 border border-white/10 text-white text-[13px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white/10 transition-all active:scale-95"
            >
              voltar
            </button>
            <button 
              onClick={() => setView('landing')}
              className="px-20 py-4 bg-white text-black text-[13px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#eee] transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] active:scale-95"
            >
              save
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (view === 'list') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Suas Campanhas</h2>
          <button onClick={() => setView('landing')} className="text-xs text-white bg-white/5 border border-white/10 px-4 py-2 rounded-lg">Voltar</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           <div className="glass-border bg-white/[0.01] border border-white/[0.03] rounded-xl p-5 hover:bg-white/[0.03] transition-all cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className="px-2 py-0.5 bg-success/10 border border-success/20 rounded text-[9px] font-bold text-success uppercase tracking-widest">Ativa</div>
            </div>
            <h3 className="text-sm font-bold text-white mb-2">Automação MEI</h3>
            <p className="text-[11px] text-text-muted leading-relaxed line-clamp-2">Automação de agendamentos via WhatsApp IA.</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none">
        <span className="text-[400px] leading-none">ॐ</span>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10"
      >
        <h1 className="text-[64px] font-extrabold text-white leading-[0.95] tracking-[-0.04em] mb-4">
          qual campanha deseja <br /> <span className="text-brand">começar</span>
        </h1>
        <p className="text-lg text-text-muted font-medium mb-12">iniciar nova campanha com</p>
        
        <div className="flex items-center gap-6 justify-center">
          <button 
            onClick={() => setView('create')}
            className="w-48 py-3.5 bg-white text-black text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#eee] transition-all shadow-[0_20px_40px_rgba(255,255,255,0.15)] active:scale-95"
          >
            criar
          </button>
          <button 
            onClick={() => setView('list')}
            className="w-48 py-3.5 bg-white text-black text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#eee] transition-all shadow-[0_20px_40px_rgba(255,255,255,0.15)] active:scale-95"
          >
            ver lista
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function OrquestradorPage() {
  const [view, setView] = useState<'selection' | 'running'>('selection');
  const [selectedId, setSelectedId] = useState<number | null>(null);

  if (view === 'running') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-24 h-24 rounded-full border-t-2 border-brand animate-spin" />
        <h2 className="text-xl font-bold text-white mt-8 tracking-tight">Orquestrador Ativo</h2>
        <p className="text-text-muted mt-2">Processando leads e automatizando interações...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 relative overflow-hidden bg-black">
      <div className="absolute bottom-[-8%] right-[-2%] w-[65%] h-[115%] pointer-events-none select-none overflow-hidden flex items-end justify-end z-0">
        <div className="relative w-full h-full flex justify-end">
           <img 
            src="https://i.imgur.com/hA0nOUr.png" 
            alt="Buddha silhouette"
            className="w-full h-full object-contain object-right-bottom contrast-125 brightness-110 opacity-[0.25] mix-blend-screen scale-110 origin-bottom-right"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-x-0 bottom-0 h-96 bg-linear-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-[50%] bg-linear-to-r from-black to-transparent" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-6xl mx-auto"
      >
        <span className="text-brand font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block opacity-60">IA Orchestrator</span>
        <h1 className="text-[56px] font-extrabold text-white leading-[1.05] tracking-tight mb-6">
          selecione a campanha para <br /> começar com o <span className="text-brand">orquestrador</span>
        </h1>
        <p className="text-[#888] text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          acesse o banco, e qualifique leads compatíveis com a campanha estrategicamente usando inteligência artificial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {[1, 2, 3].map(i => (
            <div 
              key={i} 
              onClick={() => setSelectedId(i)}
              className={`glass-border border rounded-2xl p-6 text-left transition-all group cursor-pointer relative overflow-hidden ${
                selectedId === i 
                ? 'bg-brand/5 border-brand/50 shadow-[0_0_20px_rgba(255,99,99,0.1)]' 
                : 'bg-[#0C0C0C]/40 border-white/[0.03] hover:bg-white/[0.03] hover:border-brand/20'
              }`}
            >
               <div className="flex justify-between items-start mb-6">
                 <div className="px-2 py-0.5 bg-success/10 border border-success/20 rounded text-[9px] font-bold text-success capitalize">ATIVA</div>
                 <div className="text-[9px] font-mono text-text-muted">ID: #492{i}</div>
               </div>
               <div className="space-y-1 mb-6">
                 <div className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">Estratégia</div>
                 <div className="text-xs font-semibold text-white/80 group-hover:text-brand transition-colors">Automação agendamentos WhatsApp IA</div>
               </div>
               <div className="grid grid-cols-2 gap-4 border-t border-white/[0.03] pt-4">
                  <div>
                    <div className="text-[14px] font-bold text-white">124</div>
                    <div className="text-[9px] text-[#444] uppercase font-mono">Leads</div>
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-success/80">9.4</div>
                    <div className="text-[9px] text-[#444] uppercase font-mono">Score Médio</div>
                  </div>
               </div>
               
               {selectedId === i && (
                 <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_rgba(255,99,99,0.8)]" />
               )}
            </div>
          ))}
        </div>

        <button 
          onClick={() => selectedId && setView('running')}
          disabled={!selectedId}
          className={`px-16 py-4 text-sm font-bold uppercase tracking-[0.2em] rounded-full transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] active:scale-95 ${
            selectedId 
            ? 'bg-white text-black hover:bg-[#eee] cursor-pointer' 
            : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'
          }`}
        >
          começar
        </button>
      </motion.div>
    </div>
  );
}

function LeadsPage() {
  return (
    <div className="glass-border bg-white/[0.02] rounded-xl overflow-hidden shadow-2xl">
      <div className="flex items-center gap-3 p-3 border-b border-white/[0.04] bg-white/[0.01]">
        <div className="relative flex-1 max-w-sm">
          <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/20" />
          <input type="text" placeholder="Filtrar leads..." className="w-full bg-white/[0.03] border border-white/[0.08] rounded-md pl-8 pr-3 py-1.5 text-xs text-white placeholder-white/20" />
        </div>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/[0.04]">
            <th className="font-mono text-[9px] font-bold text-[#666] uppercase tracking-[0.1em] px-4 py-2">Lead</th>
            <th className="font-mono text-[9px] font-bold text-[#666] uppercase tracking-[0.1em] px-4 py-2">Qualificação</th>
            <th className="font-mono text-[9px] font-bold text-[#666] uppercase tracking-[0.1em] px-4 py-2">Canal</th>
            <th className="font-mono text-[9px] font-bold text-[#666] uppercase tracking-[0.1em] px-3 py-2 text-right">Ação</th>
          </tr>
        </thead>
        <tbody className="text-[11.5px]">
          <LeadTableRow name="Studio Nails" locale="Pinheiros, SP" score={92} temp="HOT" source="Maps" srcColor="text-blue-400" />
          <LeadTableRow name="Barber Pro" locale="Moema, SP" score={45} temp="WARM" source="Instagram" srcColor="text-pink-400" />
          <LeadTableRow name="Estética Advanced" locale="Centro, SP" score={78} temp="HOT" source="WhatsApp" srcColor="text-emerald-400" />
        </tbody>
      </table>
    </div>
  );
}

// Sub-components
function KPIStat({ label, value, unit, total, trend, sub, icon, active, success }: { 
  label: string, value: string, unit?: string, total?: string, trend?: string, sub: string, icon: React.ReactNode, active?: boolean, success?: boolean
}) {
  return (
    <div className={`glass-border border border-white/[0.02] rounded-xl p-3.5 group hover:bg-white/[0.03] transition-all ${success ? 'bg-success/[0.02]' : 'bg-white/[0.015]'}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[9px] font-bold text-text-muted uppercase tracking-[0.12em]">{label}</span>
        <span className="opacity-20 group-hover:opacity-60 transition-opacity">{icon}</span>
      </div>
      <div className="text-[24px] font-semibold text-white tracking-tighter leading-none">
        {value}{unit && <span className="text-sm text-text-muted ml-0.5">{unit}</span>}{total && <span className="text-sm text-[#444]">{total}</span>}
      </div>
      <div className="flex items-center gap-1.5 mt-2 min-h-[14px]">
        {trend && (
          <span className={`font-mono text-[10px] font-bold flex items-center gap-0.5 ${trend.includes('+') ? 'text-success' : 'text-danger'}`}>
             {trend}
          </span>
        )}
        {active && <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />}
        <span className="text-[10px] text-text-muted truncate font-medium">{sub}</span>
      </div>
    </div>
  );
}

function HorizontalFunnelStep({ label, count, pct, opacity, isSuccess }: { label: string, count: number, pct: number, opacity?: number, isSuccess?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-[10px] text-[#aaa] w-14 shrink-0">{label}</span>
      <div className="flex-1 h-4 bg-white/[0.04] rounded-sm overflow-hidden flex">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={isSuccess ? 'bg-success' : 'bg-brand'}
          style={{ opacity: opacity || 1 }}
        />
      </div>
      <span className="font-mono text-[11px] font-bold text-white w-7 text-right">{count}</span>
    </div>
  );
}

function SourceMiniItem({ label, color, icon, active, status }: { label: string, color: string, icon: React.ReactNode, active?: boolean, status?: string }) {
  return (
    <div className={`flex items-center gap-2 px-2 py-1.5 bg-white/[0.02] border border-white/[0.05] rounded-md ${!active && 'opacity-50'}`}>
      <span className="flex-shrink-0" style={{ color }}>{icon}</span>
      <span className="flex-1 text-[11px] text-[#ccc] truncate">{label}</span>
      {active && <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />}
      {status && <span className="text-[9px] text-[#666] font-mono">{status}</span>}
    </div>
  );
}

function RecentLeadRow({ name, email, score, status, source, time, color }: { name: string, email: string, score: number, status: string, source: string, time: string, color: string }) {
  return (
    <tr className="hover:bg-white/[0.025] transition-colors border-b border-white/[0.03]">
      <td className="px-3.5 py-2.5">
        <div className="flex items-center gap-2">
          <div className={`w-5.5 h-5.5 rounded flex items-center justify-center font-bold text-[9px] text-white ${color}`}>
            {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div>
            <div className="text-white font-medium">{name}</div>
            <div className="font-mono text-[10px] text-[#666] tracking-tight">{email}</div>
          </div>
        </div>
      </td>
      <td className="px-3.5 py-2.5">
        <span className="text-[#aaa] font-mono text-[11px] whitespace-nowrap">{source}</span>
      </td>
      <td className="px-3.5 py-2.5">
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
            <div className="h-full bg-success" style={{ width: `${score * 10}%` }} />
          </div>
          <span className="font-mono font-bold text-success text-[10px]">{score}</span>
        </div>
      </td>
      <td className="px-3.5 py-2.5 text-right">
        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${status === 'Novo' ? 'bg-white/[0.04] text-[#aaa]' : status === 'Contato' ? 'bg-accent/10 text-accent' : 'bg-brand/10 text-brand'}`}>
          {status}
        </span>
      </td>
      <td className="px-3.5 py-2.5 text-right font-mono text-[10px] text-[#666]">{time}</td>
    </tr>
  );
}

function PipelineStageCard({ label, count, growth, color }: { label: string, count: number, growth: string, color: string }) {
  return (
    <div className={`p-4 rounded-xl border ${color} flex flex-col gap-1 transition-transform hover:translate-y-[-2px]`}>
       <span className="font-mono text-[9px] font-bold text-white/30 uppercase tracking-widest">{label}</span>
       <span className="text-[26px] font-medium text-white tracking-tight leading-none">{count}</span>
       <span className={`text-[10px] font-mono font-bold ${growth.includes('+') ? 'text-success' : 'text-danger'}`}>{growth}</span>
    </div>
  );
}

function TempStat({ label, count, labelColor, bg, border }: { label: string, count: number, labelColor: string, bg: string, border: string }) {
  return (
    <div className={`p-4 rounded-xl border ${bg} ${border} text-center`}>
      <span className={`font-mono text-[10px] font-bold tracking-widest uppercase mb-1.5 block ${labelColor}`}>{label}</span>
      <span className="text-[28px] font-medium text-white tracking-tight">{count}</span>
    </div>
  );
}

function LeadTableRow({ name, locale, score, temp, source, srcColor }: { name: string, locale: string, score: number, temp: string, source: string, srcColor: string }) {
  return (
    <tr className="border-b border-white/[0.03] hover:bg-white/[0.015] transition-colors cursor-pointer group">
      <td className="px-4 py-3">
        <div className="font-medium text-white">{name}</div>
        <div className="text-[10px] text-white/20 font-mono italic">{locale}</div>
      </td>
      <td className="px-4 py-3">
         <div className="flex items-center gap-2">
           <div className="w-10 h-1 bg-white/5 rounded-full overflow-hidden">
             <div className={`h-full ${score >= 70 ? 'bg-success' : 'bg-warning'}`} style={{ width: `${score}%` }} />
           </div>
           <span className={`font-mono font-bold text-[10px] ${score >= 70 ? 'text-success' : 'text-warning'}`}>{score}</span>
         </div>
      </td>
      <td className="px-4 py-3">
         <span className={`font-mono text-[10px] ${srcColor}`}>{source}</span>
      </td>
      <td className="px-4 py-3 text-right">
        <button className="p-1.5 text-white/10 hover:text-white transition-colors">
          <MoreVertical size={14} />
        </button>
      </td>
    </tr>
  );
}

function FormGroup({ label, children }: { label: string, children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="font-mono text-[9px] font-bold text-white/20 uppercase tracking-[0.08em] block ml-0.5">{label}</label>
      {children}
    </div>
  );
}

function FormLabel({ num, label }: { num: string, label: string }) {
  return (
    <label className="font-mono text-[10px] font-bold text-white/30 uppercase tracking-[0.1em] block ml-0.5">
      {num}. {label}
    </label>
  );
}

function SelectTag({ label }: { label: string }) {
  const [selected, setSelected] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setSelected(!selected)}
      className={`px-3 py-1.5 rounded-lg border text-[11px] font-medium transition-all ${
        selected 
          ? 'bg-brand/20 border-brand text-brand shadow-[0_0_12px_rgba(255,99,99,0.2)]' 
          : 'bg-white/[0.02] border-white/10 text-white/40 hover:border-white/20'
      }`}
    >
      {label}
    </button>
  );
}
