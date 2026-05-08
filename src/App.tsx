/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Users, 
  MapPin, 
  Send, 
  Zap, 
  LayoutDashboard, 
  FileSearch, 
  Database,
  Plus,
  Search,
  MoreVertical,
  ChevronRight,
  TrendingUp,
  Flame,
  CheckCircle2,
  AlertTriangle,
  LogOut,
  Settings,
  Mail,
  RefreshCw,
  ExternalLink,
  Trash2,
  Instagram,
  FileSpreadsheet
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Page = 'overview' | 'pipeline' | 'prospecting' | 'leads' | 'campanhas';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('overview');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen bg-bg text-[#e8ebf6] font-sans selection:bg-brand/30 grain">
      {/* Sidebar */}
      <aside className="w-64 bg-bg-alt border-r border-border flex flex-col sticky top-0 h-screen z-40">
        <div className="p-6 flex items-center gap-3 border-b border-border">
          <div className="w-9 h-9 bg-linear-to-br from-brand to-warning rounded-lg flex items-center justify-center shadow-[0_0_18px_rgba(245,166,35,0.3)]">
            <Zap className="w-5 h-5 text-bg fill-current" />
          </div>
          <div>
            <h1 className="font-display font-black text-sm tracking-widest text-brand-light uppercase">Motor</h1>
            <p className="font-mono text-[10px] text-white/30 uppercase">Audiência v2</p>
          </div>
        </div>

        <nav className="flex-1 p-4 flex flex-col gap-1 overflow-y-auto">
          <SectionLabel label="Visão" />
          <NavItem 
            icon={<LayoutDashboard size={18} />} 
            label="Overview" 
            active={activePage === 'overview'} 
            onClick={() => setActivePage('overview')} 
          />
          <NavItem 
            icon={<TrendingUp size={18} />} 
            label="Pipeline" 
            active={activePage === 'pipeline'} 
            onClick={() => setActivePage('pipeline')} 
            badge="154"
          />

          <SectionLabel label="Prospecção" />
          <NavItem 
            icon={<MapPin size={18} />} 
            label="Fontes de Dados" 
            active={activePage === 'prospecting'} 
            onClick={() => setActivePage('prospecting')} 
            isNew
          />

          <SectionLabel label="Dados" />
          <NavItem 
            icon={<Users size={18} />} 
            label="Leads" 
            active={activePage === 'leads'} 
            onClick={() => setActivePage('leads')} 
          />
          <NavItem 
            icon={<Send size={18} />} 
            label="Campanhas" 
            active={activePage === 'campanhas'} 
            onClick={() => setActivePage('campanhas')} 
          />

          <SectionLabel label="Em Breve" />
          <NavItem 
            icon={<Zap size={18} />} 
            label="Orquestrador IA" 
            disabled
            badge="Fase 4"
            badgeColor="text-warning"
          />
          <NavItem 
            icon={<BarChart3 size={18} />} 
            label="CRM Outreach" 
            disabled
            badge="Fase 3"
            badgeColor="text-warning"
          />
        </nav>

        <div className="p-4 border-t border-border">
          <div className="bg-success/5 border border-success/20 rounded-full px-4 py-2 flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
            <span className="font-mono text-[11px] font-bold text-success">Motor ativo</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className={`sticky top-0 z-30 px-8 py-5 border-b border-border transition-all duration-300 ${scrolled ? 'bg-bg/80 backdrop-blur-md' : 'bg-bg'}`}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display font-bold text-lg tracking-tight uppercase">
                {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
              </h2>
              <p className="font-mono text-[10px] text-white/30 uppercase mt-1">Dados em tempo real</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setActivePage('prospecting')}
                className="flex items-center gap-2 px-4 py-2 bg-transparent border border-border rounded-lg text-xs font-semibold text-white/60 hover:text-white hover:bg-white/5 transition-all"
              >
                <Plus size={14} />
                Nova Prospecção
              </button>
              <button className="flex items-center justify-center w-9 h-9 bg-white/5 border border-border rounded-lg text-white/60 hover:text-white transition-all">
                <Settings size={18} />
              </button>
            </div>
          </div>
        </header>

        <div className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activePage === 'overview' && <OverviewPage />}
              {activePage === 'pipeline' && <PipelinePage />}
              {activePage === 'prospecting' && <ProspectingPage />}
              {activePage === 'leads' && <LeadsPage />}
              {activePage === 'campanhas' && <CampanhasPage />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

// --- Components ---

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="px-3 py-4 text-[9px] font-bold font-mono text-white/20 tracking-[0.15em] uppercase">
      {label}
    </div>
  );
}

function NavItem({ icon, label, active, onClick, badge, badgeColor, isNew, disabled }: { 
  icon: React.ReactNode, 
  label: string, 
  active?: boolean, 
  onClick?: () => void,
  badge?: string,
  badgeColor?: string,
  isNew?: boolean,
  disabled?: boolean
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all group
        ${active ? 'bg-brand/10 text-brand-light border-l-2 border-brand shadow-[inset_3px_0_0_var(--color-brand)]' : 'text-white/50 hover:text-white hover:bg-white/5'}
        ${disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      <span className={active ? 'text-brand' : 'text-white/40 group-hover:text-white'}>{icon}</span>
      <span className="flex-1 text-left">{label}</span>
      {isNew && <span className="bg-success/15 text-success text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Novo</span>}
      {badge && <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-white/5 ${badgeColor || 'text-white/40'}`}>{badge}</span>}
    </button>
  );
}

// --- Pages ---

function OverviewPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard label="Total de Leads" value="1.240" sub="No pipeline" color="border-brand shadow-[0_-2px_14px_-4px_rgba(245,166,35,0.4)]" />
        <MetricCard label="Pontuados" value="842" sub="Com score calculado" color="border-success shadow-[0_-2px_14px_-4px_rgba(45,212,191,0.4)]" />
        <MetricCard label="Score Médio" value="64" sub="Qualidade da audiência" color="border-warning shadow-[0_-2px_14px_-4px_rgba(251,191,36,0.4)]" />
        <MetricCard label="Leads HOT 🔥" value="184" sub="Score ≥ 70" color="border-danger shadow-[0_-2px_14px_-4px_rgba(255,107,115,0.4)]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-bg-alt border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-white/50">Funil do Pipeline</h3>
              <button className="text-[10px] font-mono text-brand font-bold uppercase hover:text-brand-light transition-all flex items-center gap-1">
                Ver Pipeline <ChevronRight size={12} />
              </button>
            </div>
            
            <div className="space-y-4">
              <FunnelStep label="Capturado" count={1240} pct={100} color="bg-accent/20" textColor="text-accent" />
              <FunnelStep label="Validado" count={980} pct={79} color="bg-accent/30" textColor="text-accent" />
              <FunnelStep label="Deduplicado" count={882} pct={71} color="bg-[#a78bfa]/20" textColor="text-[#a78bfa]" />
              <FunnelStep label="Pontuado" count={842} pct={68} color="bg-success/20" textColor="text-success" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-bg-alt border border-border rounded-xl p-6">
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-white/50 mb-6">Leads Recentes</h3>
            <div className="space-y-3">
              {[
                { name: 'Loja da Maria', source: 'Google Maps', score: 82, temp: 'HOT' },
                { name: 'Barbearia VIP', source: 'Instagram', score: 45, temp: 'WARM' },
                { name: 'Clínica Sorriso', source: 'CSV', score: 71, temp: 'HOT' },
                { name: 'Estética Glow', source: 'WhatsApp', score: 28, temp: 'COLD' },
                { name: 'Pet Shop Amigo', source: 'Manual', score: 64, temp: 'WARM' },
              ].map((lead, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-bg border border-border rounded-lg hover:bg-white/5 transition-all group cursor-pointer">
                  <div className="w-9 h-9 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center font-display font-bold text-xs text-brand">
                    {lead.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold truncate">{lead.name}</h4>
                    <p className="text-[10px] text-white/30 font-mono">{lead.source}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-xs font-mono font-bold ${lead.score >= 70 ? 'text-success' : lead.score >= 40 ? 'text-warning' : 'text-accent'}`}>{lead.score}</div>
                    <span className={`text-[8px] font-bold px-1 rounded ${lead.temp === 'HOT' ? 'bg-success/10 text-success' : lead.temp === 'WARM' ? 'bg-warning/10 text-warning' : 'bg-accent/10 text-accent'}`}>{lead.temp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PipelinePage() {
  const stages = [
    { label: 'Capturado', count: 1240, color: 'border-accent/40 bg-accent/5' },
    { label: 'Validado', count: 980, color: 'border-accent/60 bg-accent/10' },
    { label: 'Deduplicado', count: 882, color: 'border-[#a78bfa]/40 bg-[#a78bfa]/5' },
    { label: 'Pontuado', count: 842, color: 'border-success/40 bg-success/5' },
    { label: 'Descartado', count: 358, color: 'border-danger/20 bg-danger/5' },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stages.map((stage, i) => (
          <div key={i} className={`p-4 rounded-xl border ${stage.color} flex flex-col gap-1 transition-transform hover:scale-[1.02]`}>
            <span className="text-[9px] font-bold font-mono tracking-widest uppercase opacity-60">{stage.label}</span>
            <span className="font-display font-black text-3xl tracking-tight leading-none">{stage.count}</span>
          </div>
        ))}
      </div>

      <div className="bg-bg-alt border border-border rounded-xl p-8">
        <h3 className="font-display text-xs font-bold uppercase tracking-widest text-white/50 mb-8">Distribuição de Temperatura</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <TempDistributionCard label="HOT 🔥" count={184} color="text-success" bg="bg-success/5" border="border-success/20" />
          <TempDistributionCard label="WARM 🌡️" count={458} color="text-warning" bg="bg-warning/5" border="border-warning/20" />
          <TempDistributionCard label="COLD 🧊" count={658} color="text-accent" bg="bg-accent/5" border="border-accent/20" />
        </div>
      </div>
    </div>
  );
}

function ProspectingPage() {
  const [activeTab, setActiveTab] = useState<'maps' | 'csv' | 'manual' | 'integrations'>('maps');

  return (
    <div className="space-y-6">
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        <button 
          onClick={() => setActiveTab('maps')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${activeTab === 'maps' ? 'bg-brand/10 border-brand/30 text-brand-light' : 'bg-bg-alt border-border text-white/50'}`}
        >
          <MapPin size={14} /> Google Maps
        </button>
        <button 
          onClick={() => setActiveTab('csv')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${activeTab === 'csv' ? 'bg-brand/10 border-brand/30 text-brand-light' : 'bg-bg-alt border-border text-white/50'}`}
        >
          <FileSpreadsheet size={14} /> CSV
        </button>
        <button 
          onClick={() => setActiveTab('manual')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${activeTab === 'manual' ? 'bg-brand/10 border-brand/30 text-brand-light' : 'bg-bg-alt border-border text-white/50'}`}
        >
          <Plus size={14} /> Manual
        </button>
        <button 
          onClick={() => setActiveTab('integrations')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${activeTab === 'integrations' ? 'bg-brand/10 border-brand/30 text-brand-light' : 'bg-bg-alt border-border text-white/50'}`}
        >
          <Zap size={14} /> Integrações
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-bg-alt border border-border rounded-xl p-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-3 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[10px] font-bold font-mono text-accent">Google Places API v2</span>
            </div>

            <div className="space-y-4">
              <FormGroup label="1. Nicho / Segmento" hint="Selecione um nicho">
                <div className="flex flex-wrap gap-2 mb-3">
                  {['💅 Nail Designer', '✂️ Barbearia', '✨ Estética', '🏋️ Academia', '🐾 Pet Shop'].map((niche, i) => (
                    <button key={i} className="px-3 py-1.5 bg-bg border border-border rounded-full text-[11px] font-semibold text-white/40 hover:text-white hover:border-brand/40 transition-all">
                      {niche}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input type="text" placeholder="Qualquer nicho... ex: salão de beleza" className="flex-1 bg-bg border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand/50 transition-all" />
                  <button className="p-2.5 bg-white/5 border border-border rounded-lg text-white/40 hover:text-white transition-all">
                    <Plus size={20} />
                  </button>
                </div>
              </FormGroup>

              <FormGroup label="2. Localização" hint="Cidade ou Bairro">
                <input type="text" defaultValue="São Paulo, SP" className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand/50 transition-all font-mono" />
              </FormGroup>

              <FormGroup label="Bairros" hint="Um por linha - multiplica as buscas">
                <textarea rows={3} placeholder="Moema&#10;Pinheiros&#10;Itaim Bibi" className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand/50 transition-all font-mono leading-relaxed" />
              </FormGroup>

              <FormGroup label="Configurações">
                <div className="grid grid-cols-2 gap-4">
                  <select className="bg-bg border border-border rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-brand/50 transition-all cursor-pointer">
                    <option>10 resultados p/ busca</option>
                    <option>20 resultados p/ busca</option>
                    <option>50 resultados p/ busca</option>
                  </select>
                  <select className="bg-bg border border-border rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-brand/50 transition-all cursor-pointer">
                    <option>Sem campanha</option>
                    <option>Campanha Q1</option>
                  </select>
                </div>
              </FormGroup>

              <button className="w-full py-3 bg-brand text-bg font-display font-black text-xs uppercase tracking-widest rounded-xl hover:bg-brand-light transition-all shadow-lg shadow-brand/20 active:scale-95">
                Buscar no Google Maps
              </button>
            </div>
          </div>

          <div className="bg-bg border border-border rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-mono text-[9px] font-bold text-white/20 uppercase tracking-widest">Logs em Tempo Real</h3>
              <button className="text-[9px] font-mono text-white/20 hover:text-danger">Limpar</button>
            </div>
            <div className="font-mono text-[10px] space-y-1.5 h-32 overflow-y-auto no-scrollbar">
              <div className="text-white/30">[14:32:01] <span className="text-brand">INFO</span> Motor de busca inicializado.</div>
              <div className="text-white/30">[14:32:05] <span className="text-success">SUCCESS</span> Conexão com Google API estabelecida.</div>
              <div className="text-white/30">[14:32:10] <span className="text-accent">SEARCH</span> Iniciando busca: "Nail Designer em Pinheiros"...</div>
              <div className="text-white/30">[14:32:15] <span className="text-success">RESULT</span> +12 estabelecimentos encontrados.</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-bg-alt border border-border rounded-xl min-h-[500px] flex flex-col overflow-hidden">
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-white/50">Resultados da Busca</h3>
              <button className="bg-success text-bg text-[10px] font-black uppercase px-3 py-1.5 rounded-lg shadow-lg shadow-success/20">Importar Todos</button>
            </div>
            
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-16 h-16 bg-white/5 border border-border rounded-2xl flex items-center justify-center text-white/20">
                <Search size={32} />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm uppercase text-white/50">Nenhuma busca realizada</h4>
                <p className="text-xs text-white/20 mt-1">Configure o nicho e localização ao lado <br/> para iniciar a prospecção.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadsPage() {
  return (
    <div className="bg-bg-alt border border-border rounded-xl overflow-hidden">
      <div className="p-4 border-b border-border flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={14} />
          <input type="text" placeholder="Buscar lead..." className="w-full bg-bg border border-border rounded-lg pl-9 pr-4 py-2 text-xs focus:outline-none focus:border-brand/50" />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <select className="flex-1 md:w-40 bg-bg border border-border rounded-lg px-3 py-2 text-[10px] font-mono text-white/50">
            <option>Todos os stages</option>
            <option>Capturado</option>
            <option>Pontuado</option>
          </select>
          <select className="flex-1 md:w-40 bg-bg border border-border rounded-lg px-3 py-2 text-[10px] font-mono text-white/50">
            <option>Todas temperaturas</option>
            <option>HOT 🔥</option>
            <option>WARM 🌡️</option>
            <option>COLD 🧊</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-4 font-mono text-[9px] font-bold text-white/20 uppercase tracking-widest">Lead</th>
              <th className="px-6 py-4 font-mono text-[9px] font-bold text-white/20 uppercase tracking-widest">Score</th>
              <th className="px-6 py-4 font-mono text-[9px] font-bold text-white/20 uppercase tracking-widest">Stage</th>
              <th className="px-6 py-4 font-mono text-[9px] font-bold text-white/20 uppercase tracking-widest">Fonte</th>
              <th className="px-6 py-4 font-mono text-[9px] font-bold text-white/20 uppercase tracking-widest">Localização</th>
              <th className="px-6 py-4 font-mono text-[9px] font-bold text-white/20 uppercase tracking-widest">Ações</th>
            </tr>
          </thead>
          <tbody className="text-[11px]">
            {[
              { name: 'Loja da Maria', email: 'contato@maria.com', score: 82, stage: 'Pontuado', temp: 'HOT', source: 'Maps', locale: 'Pinheiros, SP' },
              { name: 'Barbearia VIP', email: 'vip@barba.com', score: 45, stage: 'Validado', temp: 'WARM', source: 'Instagram', locale: 'Moema, SP' },
              { name: 'Estética Glow', email: 'glow@glow.com', score: 28, stage: 'Capturado', temp: 'COLD', source: 'WhatsApp', locale: 'Itaim, SP' },
              { name: 'Clínica Sorriso', email: 'contato@sorriso.com', score: 71, stage: 'Pontuado', temp: 'HOT', source: 'CSV', locale: 'Centro, SP' },
              { name: 'Academia Fit', email: 'fit@fit.com', score: 54, stage: 'Deduplicado', temp: 'WARM', source: 'Maps', locale: 'Butantã, SP' },
            ].map((lead, i) => (
              <tr key={i} className="border-b border-border/50 hover:bg-white/[0.02] group transition-colors cursor-pointer">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center font-display font-bold text-[10px] text-white/40">{lead.name[0]}</div>
                    <div>
                      <div className="font-bold">{lead.name}</div>
                      <div className="text-[9px] text-white/20 font-mono">{lead.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full ${lead.score >= 70 ? 'bg-success' : lead.score >= 40 ? 'bg-warning' : 'bg-accent'}`} style={{ width: `${lead.score}%` }} />
                    </div>
                    <span className={`font-mono font-bold ${lead.score >= 70 ? 'text-success' : lead.score >= 40 ? 'text-warning' : 'text-accent'}`}>{lead.score}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-white/5 text-white/40 px-2 py-0.5 rounded uppercase font-bold text-[8px]">{lead.stage}</span>
                    <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${lead.temp === 'HOT' ? 'bg-success/10 text-success' : lead.temp === 'WARM' ? 'bg-warning/10 text-warning' : 'bg-accent/10 text-accent'}`}>{lead.temp}</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-mono text-white/30">{lead.source}</td>
                <td className="px-6 py-4 font-mono text-white/30">{lead.locale}</td>
                <td className="px-6 py-4">
                   <div className="flex gap-2">
                    <button className="p-1.5 bg-white/5 border border-border rounded text-white/30 hover:text-white hover:border-brand/40 transition-all">
                      <Mail size={12} />
                    </button>
                    <button className="p-1.5 bg-white/5 border border-border rounded text-white/30 hover:text-danger hover:border-danger/30 transition-all">
                      <Trash2 size={12} />
                    </button>
                   </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CampanhasPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { name: 'Automação MEI', status: 'Active', offers: 3, compatibility: 84, leads: 124 },
        { name: 'Nail Designer Q2', status: 'Paused', offers: 1, compatibility: 72, leads: 82 },
        { name: 'Lançamento Mentor', status: 'Draft', offers: 0, compatibility: 0, leads: 0 },
      ].map((camp, i) => (
        <div key={i} className="bg-bg-alt border border-border rounded-xl p-6 flex flex-col gap-6 relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display font-bold text-sm tracking-tight">{camp.name}</h3>
              <p className="font-mono text-[9px] text-white/30 uppercase mt-1">/{camp.name.toLowerCase().replace(/ /g, '-')}</p>
            </div>
            <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase ${camp.status === 'Active' ? 'bg-success/10 text-success' : camp.status === 'Paused' ? 'bg-warning/10 text-warning' : 'bg-white/5 text-white/40'}`}>
              {camp.status}
            </span>
          </div>

          <div className="space-y-4">
             <div className="bg-brand/5 border border-brand/10 rounded-lg p-3">
                <div className="text-[9px] font-bold font-mono text-white/20 uppercase tracking-widest mb-1">Oferta Principal</div>
                <div className="text-[11px] text-brand-light leading-relaxed">Automação de agendamentos via WhatsApp IA.</div>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-[9px] font-bold font-mono text-white/10 uppercase">Métricas</div>
                  <div className="text-xs font-display font-bold">{camp.leads} <span className="text-[10px] text-white/20 font-sans font-normal">Leads</span></div>
                </div>
                <div className="space-y-1">
                  <div className="text-[9px] font-bold font-mono text-white/10 uppercase">Compatibilidade</div>
                  <div className="text-xs font-display font-bold text-success">{camp.compatibility}%</div>
                </div>
             </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-brand text-bg font-display font-bold text-[10px] uppercase rounded-lg hover:bg-brand-light transition-all flex items-center justify-center gap-1.5">
              <Zap size={12} fill="currentColor" /> Analisar
            </button>
            <button className="p-2 bg-white/5 border border-border rounded-lg text-white/40 hover:text-white transition-all">
              <Settings size={14} />
            </button>
          </div>
        </div>
      ))}
      
      <button className="border-2 border-dashed border-border rounded-xl p-6 flex flex-col items-center justify-center text-center gap-2 text-white/10 hover:text-white/30 hover:border-white/20 transition-all group">
        <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:scale-110 transition-transform">
          <Plus size={24} />
        </div>
        <span className="font-display text-xs font-bold uppercase tracking-widest">Nova Campanha</span>
      </button>
    </div>
  );
}

// --- Helpers ---

function MetricCard({ label, value, sub, color }: { label: string, value: string, sub: string, color: string }) {
  return (
    <div className={`bg-bg-alt border border-border rounded-xl p-6 relative overflow-hidden flex flex-col gap-2 ${color}`}>
      <span className="text-[9px] font-bold font-mono text-white/30 tracking-[0.12em] uppercase">{label}</span>
      <span className="font-display font-black text-4xl tracking-tighter leading-none">{value}</span>
      <span className="text-[10px] text-white/20">{sub}</span>
    </div>
  );
}

function FunnelStep({ label, count, pct, color, textColor }: { label: string, count: number, pct: number, color: string, textColor: string }) {
  return (
    <div className="flex items-center gap-3 group">
      <div className="w-24 text-right font-mono text-[10px] text-white/40 uppercase font-bold">{label}</div>
      <div className="flex-1 h-8 bg-bg rounded-lg overflow-hidden border border-border relative">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full ${color} flex items-center px-4 relative z-10`}
        >
          <span className={`text-[11px] font-bold font-mono ${textColor}`}>{count}</span>
        </motion.div>
      </div>
      <div className="w-10 text-[10px] font-bold font-mono text-white/20">{pct}%</div>
    </div>
  );
}

function TempDistributionCard({ label, count, color, bg, border }: { label: string, count: number, color: string, bg: string, border: string }) {
  return (
    <div className={`flex-1 p-4 rounded-xl border ${bg} ${border} text-center`}>
      <div className={`text-[9px] font-bold font-mono tracking-widest uppercase opacity-60 mb-1 ${color}`}>{label}</div>
      <div className="font-display font-black text-2xl">{count}</div>
      <div className="text-[9px] text-white/20 uppercase font-mono mt-1">Leads qualificados</div>
    </div>
  );
}

function FormGroup({ label, hint, children }: { label: string, hint?: string, children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-[10px] font-bold font-mono text-white/20 uppercase tracking-wider">{label}</label>
        {hint && <span className="text-[10px] text-white/20">{hint}</span>}
      </div>
      {children}
    </div>
  );
}
