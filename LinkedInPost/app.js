// ─── Brand Config ───────────────────────────────────────────────────────────
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

// ─── Post Templates ──────────────────────────────────────────────────────────
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
        text: `Compliance and security are not the same thing.\n\nCompliance gets you a certificate.\n\nSecurity keeps you in business.\n\nDo not confuse them.`,
        hashtags: '#Compliance #Cybersecurity #CISO #RiskManagement'
      }
    ],
    medium: [
      {
        text: `Most breaches do not start with a sophisticated zero-day exploit.\n\nThey start with a phishing email. A reused password. An unpatched system nobody remembered to update.\n\nThe uncomfortable truth? The fundamentals are still where most companies are failing.\n\nMeanwhile, the industry keeps chasing the next shiny security tool. More dashboards. More alerts. More noise.\n\nWhat actually moves the needle is discipline. Consistent patching. MFA everywhere. Monitored endpoints. A SOC that knows your environment cold.\n\nSecurity is not a technology problem with a technology solution. It is an operational problem that requires operational rigor.\n\nThe best security partnership you can have is one that treats your environment like their own. Knows the normal. Catches the abnormal. Fast.`,
        hashtags: '#Cybersecurity #MSSP #SOC #ManagedSecurity #CyberDefense'
      },
      {
        text: `A CISO told me something last year that stuck.\n\nHe said: "I have a $2M security budget and I still feel like I am bringing a knife to a gunfight."\n\nHe was not wrong.\n\nThe threat landscape has industrialized. Ransomware groups run like businesses. They have dev teams, QA processes, affiliate programs, and customer support for victims.\n\nMatching that level of organization requires more than a collection of point solutions.\n\nIt requires a mature, integrated security operation. Threat intelligence that is current. Detection that is automated. Response that is rehearsed.\n\nFor most companies, building that in-house is not realistic. That is exactly what an MSSP delivers.\n\nThe gap between "we have tools" and "we have a program" is where breaches happen. Close it.`,
        hashtags: '#MSSP #CyberDefense #Ransomware #CISO #SOC'
      },
      {
        text: `The conversation around AI in cybersecurity has gotten loud. Here is what actually matters, stripped of the hype.\n\nAI helps defenders do three things faster: detect anomalies in massive data sets, correlate signals across disconnected systems, and prioritize which alerts actually need a human.\n\nThat last one is critical. Alert fatigue is real. Analysts are burning out. And burned-out analysts miss things.\n\nAI does not replace the analyst. It gives them back the hours they were spending on false positives, so they can focus on the threats that matter.\n\nThe organizations ahead of the curve are not the ones with the most AI tools. They are the ones who have integrated AI into their SOC workflow in a way that actually changes how analysts work.\n\nThere is a big difference between buying AI-powered products and running an AI-augmented security operation. Know the difference. Build the latter.`,
        hashtags: '#AIinCybersecurity #SOC #ThreatDetection #ManagedSecurity'
      },
      {
        text: `Threat actors have a process. Most companies do not.\n\nReconnaissance. Initial access. Privilege escalation. Lateral movement. Exfiltration.\n\nEvery step of that kill chain is methodical. They are not rushing. They are patient.\n\nMost incident response plans assume the attack is happening right now. The reality is it started three weeks ago, and you just found out.\n\nModern security operations need to be built around that reality. Hunting for threats that have not triggered an alert yet. Checking for persistence mechanisms. Monitoring for low-and-slow data exfiltration.\n\nReactive security stops the attacks you already know about. Proactive security stops the ones you do not yet.\n\nThe companies that do not get breached are not lucky. They are operationally disciplined.`,
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
        text: `Batch processing made sense when decisions could wait overnight.\n\nReal-time business needs real-time data.\n\nEvent-driven architecture is not a buzzword. It is the difference between acting on what is happening and reacting to what already happened.`,
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
        text: `APIs are the infrastructure of the modern enterprise.\n\nDesign them well and every future integration gets easier.\nDesign them poorly and every future integration is a project.\n\nAPI governance is not bureaucracy. It is compounding interest on every technical decision you make.`,
        hashtags: '#APIs #APIManagement #EnterpriseArchitecture #Integration'
      },
      {
        text: `The companies winning with AI right now all have one thing in common.\n\nTheir data is clean, connected, and accessible in real time.\n\nNot coincidence.`,
        hashtags: '#AIReadiness #DataStrategy #EnterpriseAI #DataIntegration'
      }
    ],
    medium: [
      {
        text: `Everyone is chasing AI. Very few companies are ready for it.\n\nThe ones seeing real ROI from AI share a common trait: they fixed their data infrastructure first.\n\nNot their models. Not their GPU spend. Their pipelines, their APIs, their data quality, their integration architecture.\n\nAI is a multiplier. If the underlying data is fragmented, inconsistent, or stale, better models just produce wrong answers faster.\n\nThe companies struggling with AI pilots are almost always struggling with a data problem underneath.\n\nBefore you ask "what AI should we use," ask "can our AI actually access the data it needs, in real time, with enough quality to trust the output?"\n\nMost cannot. That is the work. Get the foundation right. The AI returns will follow.`,
        hashtags: '#AIReadiness #DataIntegration #EnterpriseAI #DataStrategy'
      },
      {
        text: `I talk to CTOs every week who are frustrated with the same thing.\n\nTheir teams are brilliant. Their budgets are solid. But every new initiative takes longer than it should because the systems underneath do not talk to each other.\n\nNew product launch? Three months of integration work before the first line of business logic.\n\nNew analytics project? Six weeks cleaning and connecting data before any insight is generated.\n\nThis is the integration tax. And most enterprises pay it on every single project without ever addressing the root cause.\n\nAn API-first integration strategy eliminates the tax. Not all at once. But systematically, every integration you build makes the next one cheaper and faster.\n\nThe enterprises moving fastest are not the ones with the biggest teams. They are the ones who invested in their integration platform before they needed it.\n\nBuild the roads first. Then everything moves faster.`,
        hashtags: '#APIFirst #EnterpriseIntegration #DigitalTransformation #DataStrategy'
      },
      {
        text: `AI agents are not science fiction anymore.\n\nThey are running in production at companies right now, orchestrating multi-step workflows, making decisions, and acting on data without a human in the loop.\n\nBut here is the part that does not get enough attention.\n\nAn AI agent is only as capable as the systems it can access. If your CRM, ERP, and data warehouse are not exposed through clean, well-governed APIs, your agent cannot do much.\n\nAgent orchestration is the flashy part. The integration layer underneath is what makes it real.\n\nThe companies building serious agentic capabilities are investing heavily in API infrastructure. Not because it is exciting, but because without it, agents are just expensive chatbots.\n\nIf you are serious about AI agents in your enterprise, start by auditing what your systems can actually expose today. That gap is the project. Everything else is a demo.`,
        hashtags: '#AIAgents #APIFirst #EnterpriseAI #DataIntegration #Automation'
      },
      {
        text: `Digital transformation has been a goal for over a decade. Most enterprises are still not there.\n\nNot because they lack ambition or budget. Because they keep building on top of an integration architecture that was never designed for where they are going.\n\nPoint-to-point integrations made sense at 10 systems. At 500, they are a liability. Every change breaks something. Every new system is a negotiation with every existing system.\n\nA modern integration platform changes that model entirely. Hub, not web. Reusable connectors. Event-driven. Observable.\n\nIt is not the exciting part of transformation. It is the part everything else depends on.\n\nThe companies completing transformation initiatives are the ones who made the hard decision to fix integration first, even when it was not the shiniest thing on the roadmap.\n\nGet the platform right. The transformation follows.`,
        hashtags: '#DigitalTransformation #Integration #EnterpriseArchitecture #iPaaS'
      }
    ]
  }
};

// ─── State ───────────────────────────────────────────────────────────────────
let currentCompany = null;
let currentLength  = null;
let currentPost    = null;
let usedIndices    = { synersys: { short: [], medium: [] }, zentiti: { short: [], medium: [] } };

// ─── UI Elements ─────────────────────────────────────────────────────────────
const generateBtn = document.getElementById('generate-btn');
const resultEl    = document.getElementById('result');
const postTextEl  = document.getElementById('post-text');
const canvas      = document.getElementById('post-canvas');
const copyBtn     = document.getElementById('copy-btn');
const copyLabel   = document.getElementById('copy-label');
const downloadBtn = document.getElementById('download-btn');
const regenBtn    = document.getElementById('regen-btn');

// ─── Radio Listeners ─────────────────────────────────────────────────────────
document.querySelectorAll('input[name="company"]').forEach(r => {
  r.addEventListener('change', () => {
    currentCompany = r.value;
    checkReady();
  });
});

document.querySelectorAll('input[name="length"]').forEach(r => {
  r.addEventListener('change', () => {
    currentLength = r.value;
    checkReady();
  });
});

function checkReady() {
  generateBtn.disabled = !(currentCompany && currentLength);
}

generateBtn.addEventListener('click', generatePost);
regenBtn.addEventListener('click', generatePost);

// ─── Generate ────────────────────────────────────────────────────────────────
function generatePost() {
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

  renderCanvas(currentPost, COMPANIES[currentCompany]);

  resultEl.style.display = 'flex';
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  copyLabel.textContent = 'Copy Text';
}

// ─── Canvas Renderer ─────────────────────────────────────────────────────────
function renderCanvas(post, company) {
  const W = 1200;
  const HEADER_H = 140;
  const FOOTER_H = 72;
  const PAD_X = 70;
  const BODY_FONT = 28;
  const LINE_H = BODY_FONT * 1.65;
  const MAX_TEXT_W = W - PAD_X * 2;

  const ctx = canvas.getContext('2d');

  // Measure text height first
  canvas.width = W;
  canvas.height = 100;
  ctx.font = `${BODY_FONT}px Arial, sans-serif`;
  const lines = wrapAllText(ctx, post.text, MAX_TEXT_W);
  const hashLines = wrapAllText(ctx, post.hashtags, MAX_TEXT_W);

  const textBlockH = (lines.length + 1 + hashLines.length) * LINE_H;
  const H = Math.max(628, HEADER_H + textBlockH + FOOTER_H + 60);
  canvas.width  = W;
  canvas.height = H;

  // Background
  ctx.fillStyle = company.bgColor;
  ctx.fillRect(0, 0, W, H);

  // Background pattern
  if (company.patternType === 'circuit') {
    drawCircuitPattern(ctx, W, H);
  } else {
    drawNodesPattern(ctx, W, H);
  }

  // Subtle dark overlay for readability
  const overlay = ctx.createLinearGradient(0, 0, 0, H);
  overlay.addColorStop(0, 'rgba(9,28,46,0.55)');
  overlay.addColorStop(1, 'rgba(9,28,46,0.75)');
  ctx.fillStyle = overlay;
  ctx.fillRect(0, 0, W, H);

  // Top accent bar
  ctx.fillStyle = company.accentColor;
  ctx.fillRect(0, 0, W, 7);

  // Left accent stripe
  ctx.fillStyle = company.accentColor;
  ctx.fillRect(0, 0, 5, H);

  // Company name
  ctx.fillStyle = company.accentColor;
  ctx.font = 'bold 46px Arial, sans-serif';
  ctx.fillText(company.name.toUpperCase(), PAD_X, 66);

  // Tagline
  ctx.fillStyle = '#8fa8c2';
  ctx.font = '22px Arial, sans-serif';
  ctx.fillText(company.tagline, PAD_X, 104);

  // Divider
  ctx.strokeStyle = 'rgba(244,124,32,0.4)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(PAD_X, HEADER_H - 12);
  ctx.lineTo(W - PAD_X, HEADER_H - 12);
  ctx.stroke();

  // Post body text
  ctx.fillStyle = '#dde8f4';
  ctx.font = `${BODY_FONT}px Arial, sans-serif`;
  let y = HEADER_H + LINE_H;
  for (const line of lines) {
    ctx.fillText(line, PAD_X, y);
    y += LINE_H;
  }

  // Hashtags
  y += LINE_H * 0.4;
  ctx.fillStyle = company.accentColor;
  ctx.font = `${BODY_FONT - 4}px Arial, sans-serif`;
  for (const hline of hashLines) {
    ctx.fillText(hline, PAD_X, y);
    y += LINE_H;
  }

  // Bottom bar
  ctx.fillStyle = company.accentColor;
  ctx.fillRect(0, H - 7, W, 7);
}

function wrapAllText(ctx, text, maxWidth) {
  const paragraphs = text.split('\n');
  const result = [];
  for (const para of paragraphs) {
    if (para.trim() === '') { result.push(''); continue; }
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

// ─── Circuit Board Pattern ────────────────────────────────────────────────────
function drawCircuitPattern(ctx, W, H) {
  ctx.save();
  ctx.globalAlpha = 0.18;
  ctx.strokeStyle = '#f47c20';
  ctx.lineWidth = 1.2;

  const seed = 42;
  const nodes = [];
  const rng = seededRng(seed);

  for (let i = 0; i < 28; i++) {
    nodes.push({ x: rng() * W, y: rng() * H });
  }

  // Draw connections between nearby nodes
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 220) {
        ctx.beginPath();
        // Right-angle routing style
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }

  // Draw nodes
  ctx.globalAlpha = 0.35;
  for (const n of nodes) {
    ctx.beginPath();
    ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#f47c20';
    ctx.fill();
  }

  ctx.restore();
}

// ─── Data Nodes Pattern ───────────────────────────────────────────────────────
function drawNodesPattern(ctx, W, H) {
  ctx.save();
  ctx.globalAlpha = 0.18;
  ctx.strokeStyle = '#4a90d9';
  ctx.lineWidth = 1.2;

  const rng = seededRng(99);
  const nodes = [];

  for (let i = 0; i < 24; i++) {
    nodes.push({ x: rng() * W, y: rng() * H });
  }

  // Draw curved connections
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      if (Math.sqrt(dx * dx + dy * dy) < 260) {
        const cx = (nodes[i].x + nodes[j].x) / 2 + (rng() - 0.5) * 60;
        const cy = (nodes[i].y + nodes[j].y) / 2 + (rng() - 0.5) * 60;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.quadraticCurveTo(cx, cy, nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }

  // Draw nodes with glow rings
  for (const n of nodes) {
    ctx.globalAlpha = 0.1;
    ctx.beginPath();
    ctx.arc(n.x, n.y, 12, 0, Math.PI * 2);
    ctx.fillStyle = '#4a90d9';
    ctx.fill();

    ctx.globalAlpha = 0.4;
    ctx.beginPath();
    ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#f47c20';
    ctx.fill();
  }

  ctx.restore();
}

// Simple seeded RNG (mulberry32)
function seededRng(seed) {
  let s = seed;
  return function() {
    s |= 0; s = s + 0x6D2B79F5 | 0;
    let t = Math.imul(s ^ s >>> 15, 1 | s);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

// ─── Copy ────────────────────────────────────────────────────────────────────
copyBtn.addEventListener('click', () => {
  if (!currentPost) return;
  const text = currentPost.text + '\n\n' + currentPost.hashtags;
  navigator.clipboard.writeText(text).then(() => {
    copyLabel.textContent = 'Copied!';
    setTimeout(() => { copyLabel.textContent = 'Copy Text'; }, 2000);
  });
});

// ─── Download ────────────────────────────────────────────────────────────────
downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = `${currentCompany}-linkedin-post.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
});
