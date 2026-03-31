// ─── Brand Config ────────────────────────────────────────────────────────────
const COMPANIES = {
  synersys: {
    name: 'Synersys',
    tagline: 'Trusted Cyber Defense Partner for the Always On Enterprise',
    accentColor: '#f47c20',
    bgColor: '#0a1e33',
    patternType: 'circuit'
  },
  zentiti: {
    name: 'Zentiti',
    tagline: 'Smart Integration & AI Partner for the Modern Enterprise',
    accentColor: '#f47c20',
    bgColor: '#091c2e',
    patternType: 'nodes'
  }
};

// Unsplash photo IDs — cybersecurity for Synersys, data/tech for Zentiti
const SYNERSYS_IMAGES = [
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=628&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=1200&h=628&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=628&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&h=628&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1200&h=628&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=628&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=628&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=628&fit=crop&auto=format'
];

const ZENTITI_IMAGES = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=628&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=628&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=628&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=628&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=628&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=1200&h=628&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=628&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=628&fit=crop&auto=format'
];

// ─── Post Templates ───────────────────────────────────────────────────────────
const POSTS = {
  synersys: {
    short: [
      {
        text: `SOC teams drown in alerts. Not because the tools are bad. Because the tools are not talking to each other.\n\nCorrelating threats across endpoints, identity, cloud, and network manually is a full-time job for 10 people.\n\nAI-assisted SOC operations change that math. Fast.`,
        hashtags: '#Cybersecurity #SOC #MSSP #ThreatDetection'
      },
      {
        text: `The average ransomware dwell time before detection is still measured in days.\n\nAttackers use that time well. Reconnaissance. Lateral movement. Data staging.\n\nBy the time the alert fires, the damage is done.\n\nDetection speed is not a nice-to-have. It is the whole game.`,
        hashtags: '#Ransomware #ThreatDetection #Cybersecurity #IncidentResponse'
      },
      {
        text: `Mid-market companies are now the most targeted segment in cybercrime.\n\nNot because they have the most data. Because they have the least defenses.\n\nEnterprise-grade protection is no longer only for enterprises.`,
        hashtags: '#Cybersecurity #MidMarket #MSSP #CyberDefense'
      },
      {
        text: `AI is not the future of cybersecurity.\n\nIt is the present. Attackers are already using it.\n\nThe defenders who are not will lose. Not eventually. Already.`,
        hashtags: '#AI #Cybersecurity #ThreatIntelligence #SOC'
      },
      {
        text: `Zero Trust is not a product you buy.\n\nIt is a principle you build into every access decision.\n\nTrust nothing. Verify everything. Log it all.`,
        hashtags: '#ZeroTrust #IdentitySecurity #Cybersecurity #CISO'
      },
      {
        text: `Cyber insurance premiums went up 50% last year.\n\nKnow what keeps them down? A documented, tested incident response plan.\n\nMost companies do not have one. Most wish they did after a breach.`,
        hashtags: '#CyberInsurance #IncidentResponse #CISO #RiskManagement'
      },
      {
        text: `3.5 million open cybersecurity jobs globally.\n\nYour adversaries are not short-staffed.\n\nAn MSSP is not outsourcing your security. It is closing a gap that hiring cannot fill fast enough.`,
        hashtags: '#MSSP #CyberTalent #ManagedSecurity #Cybersecurity'
      },
      {
        text: `Compliance and security are not the same thing.\n\nCompliance gets you a certificate.\nSecurity keeps you in business.\n\nDo not confuse them.`,
        hashtags: '#Compliance #Cybersecurity #CISO #RiskManagement'
      }
    ],
    medium: [
      {
        text: `Most breaches do not start with a sophisticated zero-day exploit.\n\nThey start with a phishing email. A reused password. An unpatched system nobody remembered to update.\n\nThe uncomfortable truth? The fundamentals are still where most companies are failing.\n\nMeanwhile, the industry keeps chasing the next shiny security tool. More dashboards. More alerts. More noise.\n\nWhat actually moves the needle is discipline. Consistent patching. MFA everywhere. Monitored endpoints. A SOC that knows your environment cold.\n\nSecurity is not a technology problem with a technology solution. It is an operational problem that requires operational rigor.\n\nThe best security partnership is one that treats your environment like their own. Knows the normal. Catches the abnormal. Fast.`,
        hashtags: '#Cybersecurity #MSSP #SOC #ManagedSecurity #CyberDefense'
      },
      {
        text: `A CISO told me something last year that stuck.\n\nHe said: "I have a $2M security budget and I still feel like I am bringing a knife to a gunfight."\n\nHe was not wrong.\n\nThe threat landscape has industrialized. Ransomware groups run like businesses. Dev teams, QA processes, affiliate programs, and customer support for victims.\n\nMatching that level of organization requires more than a collection of point solutions.\n\nIt requires a mature, integrated security operation. Threat intelligence that is current. Detection that is automated. Response that is rehearsed.\n\nThe gap between "we have tools" and "we have a program" is where breaches happen.\n\nClose it.`,
        hashtags: '#MSSP #CyberDefense #Ransomware #CISO #SOC'
      },
      {
        text: `The conversation around AI in cybersecurity has gotten loud.\n\nHere is what actually matters, stripped of the hype.\n\nAI helps defenders do three things faster: detect anomalies in massive data sets, correlate signals across disconnected systems, and prioritize which alerts need a human.\n\nThat last one is critical. Alert fatigue is real. Analysts are burning out. And burned-out analysts miss things.\n\nAI does not replace the analyst. It gives them back the hours spent on false positives so they can focus on threats that matter.\n\nThe organizations ahead are not the ones with the most AI tools. They are the ones who integrated AI into their SOC workflow in a way that actually changes how analysts work.\n\nThere is a big difference between buying AI-powered products and running an AI-augmented security operation.\n\nKnow the difference. Build the latter.`,
        hashtags: '#AIinCybersecurity #SOC #ThreatDetection #ManagedSecurity'
      },
      {
        text: `Threat actors have a process. Most companies do not.\n\nReconnaissance. Initial access. Privilege escalation. Lateral movement. Exfiltration.\n\nEvery step of that kill chain is methodical. They are not rushing. They are patient.\n\nMost incident response plans assume the attack is happening right now. The reality is it started three weeks ago, and you just found out.\n\nModern security operations need to be built around that reality. Hunting for threats that have not triggered an alert yet. Checking for persistence mechanisms. Monitoring for low-and-slow data exfiltration.\n\nReactive security stops the attacks you already know about.\nProactive security stops the ones you do not yet.\n\nThe companies that do not get breached are not lucky. They are operationally disciplined.`,
        hashtags: '#ThreatHunting #SOC #Cybersecurity #MSSP #IncidentResponse'
      }
    ]
  },
  zentiti: {
    short: [
      {
        text: `You cannot build an AI strategy on top of a broken data strategy.\n\nDisconnected systems. Duplicate records. Stale pipelines.\n\nAI amplifies what is already there. Make sure what is there is worth amplifying.`,
        hashtags: '#DataIntegration #AI #EnterpriseData #AIStrategy'
      },
      {
        text: `The average enterprise runs over 1,000 applications.\n\nMost were never designed to work together.\n\nIntegration is not a project. It is permanent infrastructure.`,
        hashtags: '#iPaaS #EnterpriseIntegration #APIs #DigitalTransformation'
      },
      {
        text: `AI agents can automate entire workflows end to end.\n\nUnless your data is not accessible.\nUnless your systems do not expose APIs.\nUnless your integration layer was built in 2012 and has not been touched since.\n\nFix the foundation first.`,
        hashtags: '#AIAgents #DataIntegration #Automation #APIFirst'
      },
      {
        text: `Batch processing made sense when decisions could wait overnight.\n\nReal-time business needs real-time data.\n\nEvent-driven architecture is the difference between acting on what is happening and reacting to what already happened.`,
        hashtags: '#RealTimeData #DataStreaming #EventDriven #Integration'
      },
      {
        text: `Bad data costs US businesses over $3 trillion a year.\n\nMost of it traces back to the same root cause: systems sharing the same records independently, making their own assumptions.\n\nConnect the systems. The data quality follows.`,
        hashtags: '#DataQuality #MasterDataManagement #EnterpriseData'
      },
      {
        text: `Your legacy systems are not just technical debt.\n\nThey are blockers sitting in front of every modern capability you want to build.\n\nModernization does not mean replacing everything. It means wrapping what you have in APIs so the rest of your stack can move.`,
        hashtags: '#LegacyModernization #APIFirst #Integration #DigitalTransformation'
      },
      {
        text: `APIs are the infrastructure of the modern enterprise.\n\nDesign them well and every future integration gets easier.\nDesign them poorly and every future integration is a project.\n\nAPI governance is compounding interest on every technical decision you make.`,
        hashtags: '#APIs #APIManagement #EnterpriseArchitecture #Integration'
      },
      {
        text: `The companies winning with AI right now all have one thing in common.\n\nTheir data is clean, connected, and accessible in real time.\n\nNot coincidence.`,
        hashtags: '#AIReadiness #DataStrategy #EnterpriseAI #DataIntegration'
      }
    ],
    medium: [
      {
        text: `Everyone is chasing AI. Very few companies are ready for it.\n\nThe ones seeing real ROI share a common trait: they fixed their data infrastructure first.\n\nNot their models. Not their GPU spend. Their pipelines, their APIs, their data quality, their integration architecture.\n\nAI is a multiplier. If the underlying data is fragmented, inconsistent, or stale, better models just produce wrong answers faster.\n\nThe companies struggling with AI pilots are almost always struggling with a data problem underneath.\n\nBefore you ask "what AI should we use," ask "can our AI actually access the data it needs, in real time, with enough quality to trust the output?"\n\nMost cannot. That is the work.\n\nGet the foundation right. The AI returns will follow.`,
        hashtags: '#AIReadiness #DataIntegration #EnterpriseAI #DataStrategy'
      },
      {
        text: `I talk to CTOs every week who are frustrated with the same thing.\n\nBrilliant teams. Solid budgets. But every new initiative takes longer than it should because the systems underneath do not talk to each other.\n\nNew product launch? Three months of integration work before the first line of business logic.\n\nNew analytics project? Six weeks cleaning and connecting data before any insight is generated.\n\nThis is the integration tax. Most enterprises pay it on every single project without ever addressing the root cause.\n\nAn API-first integration strategy eliminates the tax. Not all at once. But systematically, every integration you build makes the next one cheaper and faster.\n\nBuild the roads first. Then everything moves faster.`,
        hashtags: '#APIFirst #EnterpriseIntegration #DigitalTransformation #DataStrategy'
      },
      {
        text: `AI agents are not science fiction anymore.\n\nThey are running in production right now, orchestrating multi-step workflows, making decisions, and acting on data without a human in the loop.\n\nBut here is the part that does not get enough attention.\n\nAn AI agent is only as capable as the systems it can access. If your CRM, ERP, and data warehouse are not exposed through clean, well-governed APIs, your agent cannot do much.\n\nAgent orchestration is the flashy part. The integration layer underneath is what makes it real.\n\nThe companies building serious agentic capabilities are investing heavily in API infrastructure. Not because it is exciting, but because without it, agents are just expensive chatbots.\n\nAudit what your systems can actually expose today. That gap is the project. Everything else is a demo.`,
        hashtags: '#AIAgents #APIFirst #EnterpriseAI #DataIntegration #Automation'
      },
      {
        text: `Digital transformation has been a goal for over a decade. Most enterprises are still not there.\n\nNot because they lack ambition or budget. Because they keep building on top of an integration architecture that was never designed for where they are going.\n\nPoint-to-point integrations made sense at 10 systems. At 500, they are a liability. Every change breaks something. Every new system is a negotiation with every existing system.\n\nA modern integration platform changes that model entirely. Hub, not web. Reusable connectors. Event-driven. Observable.\n\nIt is not the exciting part of transformation. It is the part everything else depends on.\n\nThe companies completing transformation are the ones who fixed integration first, even when it was not the shiniest thing on the roadmap.\n\nGet the platform right. The transformation follows.`,
        hashtags: '#DigitalTransformation #Integration #EnterpriseArchitecture #iPaaS'
      }
    ]
  }
};

// ─── State ────────────────────────────────────────────────────────────────────
let currentCompany  = null;
let currentLength   = null;
let currentPost     = null;
let currentImgIndex = { synersys: 0, zentiti: 0 };
let usedIndices     = { synersys: { short: [], medium: [] }, zentiti: { short: [], medium: [] } };

// ─── UI Elements ──────────────────────────────────────────────────────────────
const generateBtn = document.getElementById('generate-btn');
const resultEl    = document.getElementById('result');
const postTextEl  = document.getElementById('post-text');
const canvas      = document.getElementById('post-canvas');
const copyBtn     = document.getElementById('copy-btn');
const copyLabel   = document.getElementById('copy-label');
const downloadBtn = document.getElementById('download-btn');
const regenBtn    = document.getElementById('regen-btn');

// ─── Radio Listeners ──────────────────────────────────────────────────────────
document.querySelectorAll('input[name="company"]').forEach(r => {
  r.addEventListener('change', () => { currentCompany = r.value; checkReady(); });
});
document.querySelectorAll('input[name="length"]').forEach(r => {
  r.addEventListener('change', () => { currentLength = r.value; checkReady(); });
});

function checkReady() {
  generateBtn.disabled = !(currentCompany && currentLength);
}

generateBtn.addEventListener('click', generatePost);
regenBtn.addEventListener('click', generatePost);

// ─── Generate ─────────────────────────────────────────────────────────────────
async function generatePost() {
  const pool = POSTS[currentCompany][currentLength];
  let used   = usedIndices[currentCompany][currentLength];

  if (used.length >= pool.length) {
    usedIndices[currentCompany][currentLength] = used = [];
  }

  const available = pool.map((_, i) => i).filter(i => !used.includes(i));
  const idx = available[Math.floor(Math.random() * available.length)];
  used.push(idx);
  currentPost = pool[idx];

  const fullText = currentPost.text + '\n\n' + currentPost.hashtags;
  postTextEl.textContent = fullText;

  // Pick next image for this company
  const imgList = currentCompany === 'synersys' ? SYNERSYS_IMAGES : ZENTITI_IMAGES;
  const imgUrl  = imgList[currentImgIndex[currentCompany] % imgList.length];
  currentImgIndex[currentCompany]++;

  generateBtn.disabled = true;
  generateBtn.textContent = 'Generating...';

  await renderCanvas(currentPost, COMPANIES[currentCompany], imgUrl);

  generateBtn.disabled = false;
  generateBtn.textContent = 'Generate Post';

  resultEl.style.display = 'flex';
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  copyLabel.textContent = 'Copy Text';
}

// ─── Canvas Renderer ──────────────────────────────────────────────────────────
async function renderCanvas(post, company, imgUrl) {
  const W       = 1200;
  const PAD_X   = 70;
  const FONT_SZ = 27;
  const LINE_H  = FONT_SZ * 1.68;

  // Temp canvas to measure text height
  const tmpCtx = document.createElement('canvas').getContext('2d');
  tmpCtx.font = `${FONT_SZ}px Arial, sans-serif`;
  const bodyLines = wrapAllText(tmpCtx, post.text, W - PAD_X * 2);
  const hashLines = wrapAllText(tmpCtx, post.hashtags, W - PAD_X * 2);
  const textH = (bodyLines.length + 1.2 + hashLines.length) * LINE_H;

  const HEADER_H = 148;
  const FOOTER_H = 60;
  const H = Math.max(628, HEADER_H + textH + FOOTER_H + 40);

  canvas.width  = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // 1. Draw background photo
  try {
    const img = await loadImage(imgUrl);
    // Cover-fit the image
    const scale = Math.max(W / img.width, H / img.height);
    const sw = img.width  * scale;
    const sh = img.height * scale;
    const sx = (W - sw) / 2;
    const sy = (H - sh) / 2;
    ctx.drawImage(img, sx, sy, sw, sh);
  } catch {
    // Fallback: solid bg
    ctx.fillStyle = company.bgColor;
    ctx.fillRect(0, 0, W, H);
  }

  // 2. Dark gradient overlay so text is always readable
  const overlay = ctx.createLinearGradient(0, 0, 0, H);
  overlay.addColorStop(0, 'rgba(8,18,32,0.78)');
  overlay.addColorStop(0.4, 'rgba(8,18,32,0.82)');
  overlay.addColorStop(1, 'rgba(8,18,32,0.92)');
  ctx.fillStyle = overlay;
  ctx.fillRect(0, 0, W, H);

  // 3. Top accent bar
  ctx.fillStyle = company.accentColor;
  ctx.fillRect(0, 0, W, 7);

  // 4. Left accent stripe
  ctx.fillStyle = company.accentColor;
  ctx.fillRect(0, 0, 5, H);

  // 5. Company name
  ctx.fillStyle = company.accentColor;
  ctx.font = 'bold 48px Arial, sans-serif';
  ctx.fillText(company.name.toUpperCase(), PAD_X, 68);

  // 6. Tagline
  ctx.fillStyle = '#9ab0c8';
  ctx.font = '21px Arial, sans-serif';
  ctx.fillText(company.tagline, PAD_X, 106);

  // 7. Divider line
  ctx.strokeStyle = 'rgba(244,124,32,0.45)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(PAD_X, 130);
  ctx.lineTo(W - PAD_X, 130);
  ctx.stroke();

  // 8. Body text
  ctx.fillStyle = '#ddeaf6';
  ctx.font = `${FONT_SZ}px Arial, sans-serif`;
  let y = HEADER_H + LINE_H * 0.3;
  for (const line of bodyLines) {
    ctx.fillText(line, PAD_X, y);
    y += LINE_H;
  }

  // 9. Hashtags
  y += LINE_H * 0.5;
  ctx.fillStyle = company.accentColor;
  ctx.font = `${FONT_SZ - 4}px Arial, sans-serif`;
  for (const hline of hashLines) {
    ctx.fillText(hline, PAD_X, y);
    y += LINE_H * 0.9;
  }

  // 10. Bottom bar
  ctx.fillStyle = company.accentColor;
  ctx.fillRect(0, H - 7, W, 7);
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload  = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function wrapAllText(ctx, text, maxWidth) {
  const result = [];
  for (const para of text.split('\n')) {
    if (!para.trim()) { result.push(''); continue; }
    const words = para.split(' ');
    let line = '';
    for (const word of words) {
      const test = line ? line + ' ' + word : word;
      if (ctx.measureText(test).width > maxWidth && line) {
        result.push(line);
        line = word;
      } else {
        line = test;
      }
    }
    if (line) result.push(line);
  }
  return result;
}

// ─── Copy ─────────────────────────────────────────────────────────────────────
copyBtn.addEventListener('click', () => {
  if (!currentPost) return;
  navigator.clipboard.writeText(currentPost.text + '\n\n' + currentPost.hashtags).then(() => {
    copyLabel.textContent = 'Copied!';
    setTimeout(() => { copyLabel.textContent = 'Copy Text'; }, 2000);
  });
});

// ─── Download ─────────────────────────────────────────────────────────────────
downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = `${currentCompany}-linkedin-post.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
});
