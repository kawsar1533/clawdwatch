import 'dotenv/config';

/**
 * 🦀 CLAWDWATCH
 * The all-seeing OSINT agent
 */

console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║     ██████╗██╗      █████╗ ██╗    ██╗██████╗              ║
║    ██╔════╝██║     ██╔══██╗██║    ██║██╔══██╗             ║
║    ██║     ██║     ███████║██║ █╗ ██║██║  ██║             ║
║    ██║     ██║     ██╔══██║██║███╗██║██║  ██║             ║
║    ╚██████╗███████╗██║  ██║╚███╔███╔╝██████╔╝             ║
║     ╚═════╝╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝ ╚═════╝              ║
║                    WATCH                                   ║
║                                                           ║
║        🦀 The All-Seeing OSINT Agent 🦀                   ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`);

interface IntelSource {
  name: string;
  type: 'flight' | 'ship' | 'satellite' | 'social' | 'news';
  status: 'active' | 'pending' | 'error';
}

const sources: IntelSource[] = [
  { name: 'ADS-B Exchange', type: 'flight', status: 'pending' },
  { name: 'MarineTraffic', type: 'ship', status: 'pending' },
  { name: 'Sentinel Hub', type: 'satellite', status: 'pending' },
  { name: 'Twitter/X', type: 'social', status: 'pending' },
  { name: 'Telegram', type: 'social', status: 'pending' },
  { name: 'Reuters', type: 'news', status: 'pending' },
  { name: 'Al Jazeera', type: 'news', status: 'pending' },
];

async function initClawdwatch() {
  console.log('🦀 Initializing Clawdwatch...\n');
  
  console.log('📡 Intelligence Sources:');
  console.log('─'.repeat(50));
  
  for (const source of sources) {
    const icon = getSourceIcon(source.type);
    const status = source.status === 'active' ? '✅' : '⏳';
    console.log(`  ${icon} ${source.name.padEnd(20)} ${status} ${source.status}`);
  }
  
  console.log('─'.repeat(50));
  console.log('\n🔍 Clawdwatch is ready. Watching...\n');
  console.log('💡 Tip: Configure your .env file to enable data sources.\n');
}

function getSourceIcon(type: string): string {
  const icons: Record<string, string> = {
    flight: '🛩️ ',
    ship: '🚢',
    satellite: '🛰️ ',
    social: '📱',
    news: '📰',
  };
  return icons[type] || '📡';
}

// Start the agent
initClawdwatch().catch(console.error);
