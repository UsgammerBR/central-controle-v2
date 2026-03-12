
import { AppData, EquipmentItem } from './types';
import { CATEGORIES } from './constants';

export const getFormattedDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const isChristmasPeriod = (): boolean => {
  const now = new Date();
  const month = now.getMonth(); 
  return month === 11; // Dezembro inteiro
};

export const isItemActive = (item: EquipmentItem): boolean => 
    (item.contract && item.contract.trim() !== '') || 
    (item.serial && item.serial.trim() !== '') || 
    item.photos.length > 0;

export const generateMonthlyTxt = (data: AppData, date: Date) => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const monthName = date.toLocaleDateString('pt-BR', { month: 'long' }).toUpperCase();
    
    let txt = `================================================\n`;
    txt += `   CONTROLE DE EQUIPAMENTOS - ${monthName} ${year}\n`;
    txt += `================================================\n\n`;

    const sortedDates = Object.keys(data).sort();
    let hasData = false;

    sortedDates.forEach(dateStr => {
        const d = new Date(dateStr + 'T12:00:00');
        if (d.getMonth() === month && d.getFullYear() === year) {
            const dayData = data[dateStr];
            const dayItems: { cat: string, item: EquipmentItem }[] = [];
            
            CATEGORIES.forEach(cat => {
                (dayData?.[cat] || []).filter(isItemActive).forEach(item => {
                    dayItems.push({ cat, item });
                });
            });

            if (dayItems.length > 0) {
                hasData = true;
                txt += `DIA ${d.getDate()} (${d.toLocaleDateString('pt-BR', { weekday: 'long' }).toUpperCase()})\n`;
                txt += `------------------------------------------------\n`;
                
                dayItems.sort((a, b) => (a.item.createdAt || 0) - (b.item.createdAt || 0)).forEach(({ cat, item }) => {
                    const time = new Date(item.createdAt || Date.now()).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
                    txt += `[${time}] ${cat.padEnd(10)} | CTR: ${(item.contract || '---').padEnd(10)} | SN: ${item.serial || '---'}\n`;
                });
                txt += `\n`;
            }
        }
    });

    if (!hasData) txt += `Nenhum registro encontrado para este mês.\n`;

    txt += `\n================================================\n`;
    txt += `RESUMO DO FLUXO OPERACIONAL\n`;
    txt += `------------------------------------------------\n`;
    let totalGeral = 0;
    CATEGORIES.forEach(cat => {
        let count = 0;
        sortedDates.forEach(dateStr => {
            const d = new Date(dateStr + 'T12:00:00');
            if (d.getMonth() === month && d.getFullYear() === year) {
                count += (data[dateStr]?.[cat] || []).filter(isItemActive).length;
            }
        });
        txt += `${cat.padEnd(15)}: ${String(count).padStart(3)} itens\n`;
        totalGeral += count;
    });
    txt += `------------------------------------------------\n`;
    txt += `VOLUME TOTAL    : ${String(totalGeral).padStart(3)} itens\n`;
    txt += `================================================\n`;

    return txt;
};

export const generateMonthlyReport = (data: AppData, date: Date) => {
    const month = date.getMonth();
    const year = date.getFullYear();
    let report = `Relatório Mensal - ${date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}\n\n`;
    const totals: Record<string, number> = {};
    
    CATEGORIES.forEach(cat => {
        report += `--- ${cat.toUpperCase()} ---\n`;
        let catEntries = 0;
        
        const sortedDates = Object.keys(data).sort();
        
        sortedDates.forEach(dateStr => {
            const d = new Date(dateStr + 'T12:00:00');
            if (d.getMonth() === month && d.getFullYear() === year) {
                const dayData = data[dateStr]?.[cat] || [];
                dayData.filter(isItemActive).forEach(item => {
                    const time = new Date(item.createdAt || Date.now()).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
                    report += `Data: ${d.toLocaleDateString('pt-BR')} | Hora: ${time}\n`;
                    report += `Contrato: ${item.contract || '-'} | Serial: ${item.serial || '-'}\n`;
                    report += `----------------------------\n`;
                    catEntries++;
                });
            }
        });
        
        totals[cat] = catEntries;
        if (catEntries === 0) report += `Nenhum registro.\n`;
        report += `\n`;
    });

    report += `\n============================\n`;
    report += `RESUMO DE TOTAIS DO MÊS\n`;
    report += `============================\n`;
    CATEGORIES.forEach(cat => {
        report += `TOTAL ${cat.toUpperCase()}: ${totals[cat]}\n`;
    });
    report += `============================\n`;
    
    return report;
};
