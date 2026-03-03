
import { EquipmentCategory } from './types';

export const CATEGORIES: EquipmentCategory[] = [
  EquipmentCategory.BOX,
  EquipmentCategory.BOX_SOUND,
  EquipmentCategory.CONTROLE,
  EquipmentCategory.CAMERA,
  EquipmentCategory.CHIP,
];

export const HOLIDAYS_SP: Record<string, { name: string; icon: string; color: string; description: string; type: 'holiday' | 'event' }> = {
  "01-01": { 
    name: "Ano Novo", 
    icon: "🎆", 
    color: "bg-red-600",
    type: 'holiday',
    description: "Confraternização Universal - Início do ano novo."
  },
  "06-01": { 
    name: "Dia de Reis", 
    icon: "👑", 
    color: "bg-amber-500",
    type: 'event',
    description: "Celebração da visita dos Reis Magos."
  },
  "25-01": { 
    name: "Aniversário de SP", 
    icon: "🏙️", 
    color: "bg-blue-600",
    type: 'holiday',
    description: "Feriado Municipal - Fundação da cidade de São Paulo."
  },
  "30-01": { 
    name: "Dia da Saudade", 
    icon: "🫂", 
    color: "bg-indigo-400",
    type: 'event',
    description: "Dia de recordar momentos e pessoas queridas."
  },
  "14-02": { 
    name: "São Valentim", 
    icon: "💌", 
    color: "bg-pink-500",
    type: 'event',
    description: "Valentine's Day - Dia dos Namorados internacional."
  },
  "16-02": { 
    name: "Carnaval", 
    icon: "🎭", 
    color: "bg-purple-600",
    type: 'event',
    description: "Ponto Facultativo - Segunda-feira de Carnaval."
  },
  "17-02": { 
    name: "Carnaval", 
    icon: "🎭", 
    color: "bg-purple-600",
    type: 'holiday',
    description: "Feriado - Terça-feira de Carnaval."
  },
  "18-02": { 
    name: "Quarta de Cinzas", 
    icon: "⛪", 
    color: "bg-slate-500",
    type: 'event',
    description: "Ponto Facultativo até as 14h."
  },
  "08-03": { 
    name: "Dia da Mulher", 
    icon: "👩", 
    color: "bg-pink-600",
    type: 'event',
    description: "Dia Internacional da Mulher."
  },
  "15-03": { 
    name: "Dia do Consumidor", 
    icon: "🛍️", 
    color: "bg-emerald-500",
    type: 'event',
    description: "Dia Mundial dos Direitos do Consumidor."
  },
  "20-03": { 
    name: "Início do Outono", 
    icon: "🍂", 
    color: "bg-orange-500",
    type: 'event',
    description: "Equinócio de Outono no Hemisfério Sul."
  },
  "01-04": { 
    name: "Dia da Mentira", 
    icon: "🤡", 
    color: "bg-orange-400",
    type: 'event',
    description: "Dia das pegadinhas e brincadeiras."
  },
  "03-04": { 
    name: "Sexta-feira Santa", 
    icon: "✝️", 
    color: "bg-red-700",
    type: 'holiday',
    description: "Feriado Nacional - Paixão de Cristo."
  },
  "05-04": { 
    name: "Páscoa", 
    icon: "🐰", 
    color: "bg-sky-400",
    type: 'event',
    description: "Domingo de Páscoa."
  },
  "19-04": { 
    name: "Povos Indígenas", 
    icon: "🏹", 
    color: "bg-orange-600",
    type: 'event',
    description: "Dia dos Povos Indígenas (antigo Dia do Índio)."
  },
  "21-04": { 
    name: "Tiradentes", 
    icon: "⚖️", 
    color: "bg-red-600",
    type: 'holiday',
    description: "Feriado Nacional - Inconfidência Mineira."
  },
  "22-04": { 
    name: "Descobrimento", 
    icon: "⛵", 
    color: "bg-blue-500",
    type: 'event',
    description: "Chegada dos portugueses ao Brasil em 1500."
  },
  "23-04": { 
    name: "Dia de São Jorge", 
    icon: "🐉", 
    color: "bg-red-500",
    type: 'event',
    description: "Dia de São Jorge, o Santo Guerreiro."
  },
  "01-05": { 
    name: "Dia do Trabalho", 
    icon: "🛠️", 
    color: "bg-red-600",
    type: 'holiday',
    description: "Feriado Nacional - Dia Mundial do Trabalho."
  },
  "10-05": { 
    name: "Dia das Mães", 
    icon: "❤️", 
    color: "bg-pink-500",
    type: 'event',
    description: "Homenagem às mães (2º domingo de maio)."
  },
  "22-05": { 
    name: "Dia do Abraço", 
    icon: "🫂", 
    color: "bg-amber-400",
    type: 'event',
    description: "Dia Internacional do Abraço."
  },
  "04-06": { 
    name: "Corpus Christi", 
    icon: "🍷", 
    color: "bg-amber-600",
    type: 'holiday',
    description: "Feriado Municipal em SP - Celebração religiosa."
  },
  "05-06": { 
    name: "Meio Ambiente", 
    icon: "🌱", 
    color: "bg-green-500",
    type: 'event',
    description: "Dia Mundial do Meio Ambiente."
  },
  "12-06": { 
    name: "Dia dos Namorados", 
    icon: "💘", 
    color: "bg-red-400",
    type: 'event',
    description: "Celebração do amor entre casais."
  },
  "21-06": { 
    name: "Início do Inverno", 
    icon: "❄️", 
    color: "bg-blue-300",
    type: 'event',
    description: "Solstício de Inverno no Hemisfério Sul."
  },
  "24-06": { 
    name: "Dia de São João", 
    icon: "🔥", 
    color: "bg-orange-500",
    type: 'event',
    description: "Festa Junina - Dia de São João."
  },
  "09-07": { 
    name: "Revolução de 1932", 
    icon: "🎖️", 
    color: "bg-slate-800",
    type: 'holiday',
    description: "Feriado Estadual SP - Revolução Constitucionalista."
  },
  "13-07": { 
    name: "Dia do Rock", 
    icon: "🎸", 
    color: "bg-black",
    type: 'event',
    description: "Dia Mundial do Rock."
  },
  "20-07": { 
    name: "Dia do Amigo", 
    icon: "🤝", 
    color: "bg-sky-500",
    type: 'event',
    description: "Celebração da amizade."
  },
  "26-07": { 
    name: "Dia dos Avós", 
    icon: "👵", 
    color: "bg-stone-500",
    type: 'event',
    description: "Homenagem aos avós."
  },
  "09-08": { 
    name: "Dia dos Pais", 
    icon: "👨", 
    color: "bg-blue-500",
    type: 'event',
    description: "Homenagem aos pais (2º domingo de agosto)."
  },
  "11-08": { 
    name: "Dia do Estudante", 
    icon: "📚", 
    color: "bg-indigo-500",
    type: 'event',
    description: "Dia do Estudante e do Advogado."
  },
  "15-08": { 
    name: "Dia da Informática", 
    icon: "💻", 
    color: "bg-blue-400",
    type: 'event',
    description: "Dia da Informática."
  },
  "07-09": { 
    name: "Independência", 
    icon: "🇧🇷", 
    color: "bg-green-700",
    type: 'holiday',
    description: "Feriado Nacional - Independência do Brasil."
  },
  "15-09": { 
    name: "Dia do Cliente", 
    icon: "🤝", 
    color: "bg-indigo-500",
    type: 'event',
    description: "Homenagem aos clientes."
  },
  "22-09": { 
    name: "Início da Primavera", 
    icon: "🌸", 
    color: "bg-pink-300",
    type: 'event',
    description: "Equinócio de Primavera no Hemisfério Sul."
  },
  "30-09": { 
    name: "Dia da Secretária", 
    icon: "📋", 
    color: "bg-slate-400",
    type: 'event',
    description: "Homenagem às secretárias."
  },
  "12-10": { 
    name: "Nossa Sra. Aparecida", 
    icon: "🙏", 
    color: "bg-blue-700",
    type: 'holiday',
    description: "Feriado Nacional - Padroeira do Brasil / Dia das Crianças."
  },
  "15-10": { 
    name: "Dia do Professor", 
    icon: "🍎", 
    color: "bg-amber-500",
    type: 'event',
    description: "Homenagem aos profissionais da educação."
  },
  "18-10": { 
    name: "Dia do Médico", 
    icon: "🩺", 
    color: "bg-red-400",
    type: 'event',
    description: "Homenagem aos profissionais da medicina."
  },
  "28-10": { 
    name: "Servidor Público", 
    icon: "💼", 
    color: "bg-indigo-400",
    type: 'event',
    description: "Dia do Servidor Público."
  },
  "31-10": { 
    name: "Halloween", 
    icon: "🎃", 
    color: "bg-orange-600",
    type: 'event',
    description: "Dia das Bruxas / Dia do Saci."
  },
  "02-11": { 
    name: "Finados", 
    icon: "🕯️", 
    color: "bg-gray-700",
    type: 'holiday',
    description: "Feriado Nacional - Dia de Finados."
  },
  "15-11": { 
    name: "Proclamação da República", 
    icon: "🏛️", 
    color: "bg-emerald-700",
    type: 'holiday',
    description: "Feriado Nacional - Proclamação da República."
  },
  "19-11": { 
    name: "Dia da Bandeira", 
    icon: "🚩", 
    color: "bg-green-600",
    type: 'event',
    description: "Homenagem ao símbolo nacional."
  },
  "20-11": { 
    name: "Consciência Negra", 
    icon: "✊🏿", 
    color: "bg-stone-900",
    type: 'holiday',
    description: "Feriado Nacional - Dia de Zumbi e da Consciência Negra."
  },
  "08-12": { 
    name: "Dia da Família", 
    icon: "👨‍👩‍👧‍👦", 
    color: "bg-blue-400",
    type: 'event',
    description: "Dia Nacional da Família."
  },
  "21-12": { 
    name: "Início do Verão", 
    icon: "☀️", 
    color: "bg-yellow-400",
    type: 'event',
    description: "Solstício de Verão no Hemisfério Sul."
  },
  "24-12": { 
    name: "Véspera de Natal", 
    icon: "🎅", 
    color: "bg-red-400",
    type: 'event',
    description: "Véspera de Natal."
  },
  "25-12": { 
    name: "Natal", 
    icon: "🎄", 
    color: "bg-red-600",
    type: 'holiday',
    description: "Feriado Nacional - Natal."
  },
  "31-12": { 
    name: "Véspera de Ano Novo", 
    icon: "🥂", 
    color: "bg-yellow-600",
    type: 'event',
    description: "Véspera de Ano Novo."
  }
};
