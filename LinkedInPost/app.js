// ─── Brand Config ────────────────────────────────────────────────────────────
const COMPANIES = {
  synersys: {
    name: 'Synersys',
    tagline: 'Trusted Cyber Defense Partner for the Always On Enterprise',
    accentColor: '#f47c20',
    bgColor: '#0a1e33'
  },
  zentiti: {
    name: 'Zentiti',
    tagline: 'Smart Integration & AI Partner for the Modern Enterprise',
    accentColor: '#f47c20',
    bgColor: '#091c2e'
  }
};

// ─── Post Templates ───────────────────────────────────────────────────────────
// Each post has: text (with company takeaway at end), hashtags, image (contextual Unsplash URL)
const POSTS = {
  synersys: {
    short: [
      {
        text: `SOC teams drown in alerts. Not because the tools are bad. Because the tools are not talking to each other.\n\nCorrelating threats across endpoints, identity, cloud, and network manually is a full-time job for 10 people.\n\nAI-assisted SOC operations change that math. Fast.\n\nAt Synersys, we help enterprises run AI-assisted SOC operations that cut through the noise and act on what actually matters.`,
        hashtags: '#Cybersecurity #SOC #MSSP #ThreatDetection',
        images: [
          'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=628&fit=crop&auto=format'
        ]
      },
      {
        text: `The average ransomware dwell time before detection is still measured in days.\n\nAttackers use that time well. Reconnaissance. Lateral movement. Data staging.\n\nBy the time the alert fires, the damage is done.\n\nDetection speed is not a nice-to-have. It is the whole game.\n\nSynersys delivers 24/7 managed detection built to act in minutes, not days.`,
        hashtags: '#Ransomware #ThreatDetection #Cybersecurity #IncidentResponse',
        images: [
          'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1200&h=628&fit=crop&auto=format'
        ]
      },
      {
        text: `Mid-market companies are now the most targeted segment in cybercrime.\n\nNot because they have the most data. Because they have the least defenses.\n\nEnterprise-grade protection is no longer only for enterprises.\n\nSynersys was built to close that gap, bringing mature cyber defense within reach for mid-market organizations.`,
        hashtags: '#Cybersecurity #MidMarket #MSSP #CyberDefense',
        images: [
          'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=628&fit=crop&auto=format'
        ]
      },
      {
        text: `AI is not the future of cybersecurity.\n\nIt is the present. Attackers are already using it.\n\nThe defenders who are not will lose. Not eventually. Already.\n\nAt Synersys, we have been integrating AI into security operations long before it became an industry talking point.`,
        hashtags: '#AI #Cybersecurity #ThreatIntelligence #SOC',
        images: [
          'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&h=628&fit=crop&auto=format'
        ]
      },
      {
        text: `Zero Trust is not a product you buy.\n\nIt is a principle you build into every access decision.\n\nTrust nothing. Verify everything. Log it all.\n\nSynersys helps enterprises design and implement Zero Trust architectures that work in the real world, not just on paper.`,
        hashtags: '#ZeroTrust #IdentitySecurity #Cybersecurity #CISO',
        images: [
          'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=628&fit=crop&auto=format'
        ]
      },
      {
        text: `Cyber insurance premiums went up 50% last year.\n\nKnow what keeps them down? A documented, tested incident response plan.\n\nMost companies do not have one. Most wish they did after a breach.\n\nSynersys helps clients build the IR programs that satisfy insurers and, more importantly, actually work when it counts.`,
        hashtags: '#CyberInsurance #IncidentResponse #CISO #RiskManagement',
        images: [
          'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=628&fit=crop&auto=format'
        ]
      },
      {
        text: `3.5 million open cybersecurity jobs globally.\n\nYour adversaries are not short-staffed.\n\nAn MSSP is not outsourcing your security. It is closing a gap that hiring alone cannot fill fast enough.\n\nSynersys operates as your dedicated security team, so you stop waiting to hire and start staying protected.`,
        hashtags: '#MSSP #CyberTalent #ManagedSecurity #Cybersecurity',
        images: [
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=628&fit=crop&auto=format'
        ]
      },
      {
        text: `Compliance and security are not the same thing.\n\nCompliance gets you a certificate.\nSecurity keeps you in business.\n\nDo not confuse them.\n\nAt Synersys, we build security programs that go beyond the checklist because your adversaries certainly do.`,
        hashtags: '#Compliance #Cybersecurity #CISO #RiskManagement',
        images: [
          'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1200&h=628&fit=crop&auto=format'
        ]
      }
    ],
    medium: [
      {
        text: `Most breaches do not start with a sophisticated zero-day exploit.\n\nThey start with a phishing email. A reused password. An unpatched system nobody remembered to update.\n\nThe uncomfortable truth? The fundamentals are still where most companies are failing.\n\nMeanwhile, the industry keeps chasing the next shiny security tool. More dashboards. More alerts. More noise.\n\nWhat actually moves the needle is discipline. Consistent patching. MFA everywhere. Monitored endpoints. A SOC that knows your environment cold.\n\nSecurity is not a technology problem with a technology solution. It is an operational problem that requires operational rigor.\n\nAt Synersys, we treat security as a continuous operation, not a one-time purchase. The difference shows up when it matters most.`,
        hashtags: '#Cybersecurity #MSSP #SOC #ManagedSecurity #CyberDefense',
        images: [
          'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=628&fit=crop&auto=format'
        ]
      },
      {
        text: `A CISO told me something last year that stuck.\n\nHe said: "I have a $2M security budget and I still feel like I am bringing a knife to a gunfight."\n\nHe was not wrong.\n\nThe threat landscape has industrialized. Ransomware groups run like businesses. Dev teams, QA processes, affiliate programs, and customer support for victims.\n\nMatching that level of organization requires more than a collection of point solutions.\n\nIt requires a mature, integrated security operation. Threat intelligence that is current. Detection that is automated. Response that is rehearsed.\n\nThe gap between "we have tools" and "we have a program" is where breaches happen.\n\nSynersys bridges that gap, delivering the mature security program that most organizations need but cannot build alone.`,
        hashtags: '#MSSP #CyberDefense #Ransomware #CISO #SOC',
        images: [
          'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=1200&h=628&fit=crop&auto=format'
        ]
      },
      {
        text: `The conversation around AI in cybersecurity has gotten loud.\n\nHere is what actually matters, stripped of the hype.\n\nAI helps defenders do three things faster: detect anomalies in massive data sets, correlate signals across disconnected systems, and prioritize which alerts need a human.\n\nThat last one is critical. Alert fatigue is real. Analysts are burning out. And burned-out analysts miss things.\n\nAI does not replace the analyst. It gives them back the hours spent on false positives so they can focus on threats that matter.\n\nThe organizations ahead are not the ones with the most AI tools. They are the ones who have integrated AI into their SOC workflow in a way that actually changes how analysts work.\n\nAt Synersys, building AI-augmented security operations is not a roadmap item. It is what we do today for every client we serve.`,
        hashtags: '#AIinCybersecurity #SOC #ThreatDetection #ManagedSecurity',
        images: [
          'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=628&fit=crop&auto=format'
        ]
      },
      {
        text: `Threat actors have a process. Most companies do not.\n\nReconnaissance. Initial access. Privilege escalation. Lateral movement. Exfiltration.\n\nEvery step of that kill chain is methodical. They are not rushing. They are patient.\n\nMost incident response plans assume the attack is happening right now. The reality is it started three weeks ago and you just found out.\n\nModern security operations need to be built around that reality. Hunting for threats that have not triggered an alert yet. Checking for persistence mechanisms. Monitoring for low-and-slow data exfiltration.\n\nReactive security stops the attacks you already know about. Proactive security stops the ones you do not yet.\n\nSynersys builds proactive, always-on security operations so our clients are never the last to know.`,
        hashtags: '#ThreatHunting #SOC #Cybersecurity #MSSP #IncidentResponse',
        images: [
          'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=628&fit=crop&auto=format'
        ]
      }
    ]
  },

  zentiti: {
    short: [
      {
        text: `You cannot build an AI strategy on top of a broken data strategy.\n\nDisconnected systems. Duplicate records. Stale pipelines.\n\nAI amplifies what is already there. Make sure what is there is worth amplifying.\n\nAt Zentiti, we help enterprises fix the data foundation before the AI investment, so results actually show up.`,
        hashtags: '#DataIntegration #AI #EnterpriseData #AIStrategy',
        images: [
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=628&fit=crop&auto=format'
        ]
      },
      {
        text: `The average enterprise runs over 1,000 applications.\n\nMost were never designed to work together.\n\nIntegration is not a project. It is permanent infrastructure.\n\nZentiti helps enterprises build that infrastructure the right way, so every system you add makes your stack stronger, not more fragile.`,
        hashtags: '#iPaaS #EnterpriseIntegration #APIs #DigitalTransformation',
        images: [
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=628&fit=crop&auto=format'
        ]
      },
      {
        text: `AI agents can automate entire workflows end to end.\n\nUnless your data is not accessible.\nUnless your systems do not expose APIs.\nUnless your integration layer was built in 2012 and has not been touched since.\n\nFix the foundation first.\n\nZentiti specializes in building exactly that foundation, so your AI and automation investments deliver what they promised.`,
        hashtags: '#AIAgents #DataIntegration #Automation #APIFirst',
        images: [
          'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=1200&h=628&fit=crop&auto=format'
        ]
      },
      {
        text: `Batch processing made sense when decisions could wait overnight.\n\nReal-time business needs real-time data.\n\nEvent-driven architecture is the difference between acting on what is happening and reacting to what already happened.\n\nZentiti helps enterprises move from batch to real-time without rebuilding everything from scratch.`,
        hashtags: '#RealTimeData #DataStreaming #EventDriven #Integration',
        images: [
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=628&fit=crop&auto=format'
        ]
      },
      {
        text: `Bad data costs US businesses over $3 trillion a year.\n\nMost of it traces back to the same root cause: systems sharing the same records independently, making their own assumptions.\n\nConnect the systems. The data quality follows.\n\nZentiti builds the integrations that eliminate the source of bad data, not just the symptoms.`,
        hashtags: '#DataQuality #MasterDataManagement #EnterpriseData',
        images: [
          'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=628&fit=crop&auto=format'
        ]
      },
      {
        text: `Your legacy systems are not just technical debt.\n\nThey are blockers sitting in front of every modern capability you want to build.\n\nModernization does not mean replacing everything. It means wrapping what you have in APIs so the rest of your stack can move.\n\nZentiti helps enterprises modernize without the risk and cost of ripping out what still works.`,
        hashtags: '#LegacyModernization #APIFirst #Integration #DigitalTransformation',
        images: [
          'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=628&fit=crop&auto=format'
        ]
      },
      {
        text: `APIs are the infrastructure of the modern enterprise.\n\nDesign them well and every future integration gets easier.\nDesign them poorly and every future integration is a project.\n\nAPI governance is compounding interest on every technical decision you make.\n\nZentiti helps enterprises build API strategies that pay dividends on every initiative that follows.`,
        hashtags: '#APIs #APIManagement #EnterpriseArchitecture #Integration',
        images: [
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=628&fit=crop&auto=format'
        ]
      },
      {
        text: `The companies winning with AI right now all have one thing in common.\n\nTheir data is clean, connected, and accessible in real time.\n\nNot coincidence.\n\nZentiti partners with enterprises to build the data infrastructure that makes AI initiatives work from day one, not year three.`,
        hashtags: '#AIReadiness #DataStrategy #EnterpriseAI #DataIntegration',
        images: [
          'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=628&fit=crop&auto=format'
        ]
      }
    ],
    medium: [
      {
        text: `Everyone is chasing AI. Very few companies are ready for it.\n\nThe ones seeing real ROI share a common trait: they fixed their data infrastructure first.\n\nNot their models. Not their GPU spend. Their pipelines, their APIs, their data quality, their integration architecture.\n\nAI is a multiplier. If the underlying data is fragmented, inconsistent, or stale, better models just produce wrong answers faster.\n\nThe companies struggling with AI pilots are almost always struggling with a data problem underneath.\n\nBefore you ask "what AI should we use," ask "can our AI actually access the data it needs, in real time, with enough quality to trust the output?"\n\nMost cannot. That is the work.\n\nAt Zentiti, we help enterprises build that foundation so AI delivers on its promise, not just its pitch.`,
        hashtags: '#AIReadiness #DataIntegration #EnterpriseAI #DataStrategy',
        images: [
          'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=628&fit=crop&auto=format'
        ]
      },
      {
        text: `I talk to CTOs every week who are frustrated with the same thing.\n\nBrilliant teams. Solid budgets. But every new initiative takes longer than it should because the systems underneath do not talk to each other.\n\nNew product launch? Three months of integration work before the first line of business logic.\n\nNew analytics project? Six weeks cleaning and connecting data before any insight is generated.\n\nThis is the integration tax. Most enterprises pay it on every single project without ever addressing the root cause.\n\nAn API-first integration strategy eliminates the tax. Not all at once. But systematically, every integration you build makes the next one cheaper and faster.\n\nZentiti helps enterprises stop paying the integration tax and start compounding the returns of a connected stack.`,
        hashtags: '#APIFirst #EnterpriseIntegration #DigitalTransformation #DataStrategy',
        images: [
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=1200&h=628&fit=crop&auto=format'
        ]
      },
      {
        text: `AI agents are not science fiction anymore.\n\nThey are running in production right now, orchestrating multi-step workflows, making decisions, and acting on data without a human in the loop.\n\nBut here is the part that does not get enough attention.\n\nAn AI agent is only as capable as the systems it can access. If your CRM, ERP, and data warehouse are not exposed through clean, well-governed APIs, your agent cannot do much.\n\nAgent orchestration is the flashy part. The integration layer underneath is what makes it real.\n\nThe companies building serious agentic capabilities are investing in API infrastructure first. Without it, agents are just expensive chatbots.\n\nAt Zentiti, we build the integration backbone that gives AI agents something real to work with.`,
        hashtags: '#AIAgents #APIFirst #EnterpriseAI #DataIntegration #Automation',
        images: [
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=628&fit=crop&auto=format'
        ]
      },
      {
        text: `Digital transformation has been a goal for over a decade. Most enterprises are still not there.\n\nNot because they lack ambition or budget. Because they keep building on top of an integration architecture that was never designed for where they are going.\n\nPoint-to-point integrations made sense at 10 systems. At 500, they are a liability. Every change breaks something. Every new system is a negotiation with every existing system.\n\nA modern integration platform changes that model entirely. Hub, not web. Reusable connectors. Event-driven. Observable.\n\nIt is not the exciting part of transformation. It is the part everything else depends on.\n\nZentiti helps enterprises make that shift, replacing integration debt with a platform that accelerates every initiative that follows.`,
        hashtags: '#DigitalTransformation #Integration #EnterpriseArchitecture #iPaaS',
        images: [
          'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=628&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=628&fit=crop&auto=format'
        ]
      }
    ]
  }
};

// ─── State ────────────────────────────────────────────────────────────────────
let currentCompany  = null;
let currentLength   = null;
let currentPost     = null;
let currentImgIdx   = 0;
let usedIndices     = { synersys: { short: [], medium: [] }, zentiti: { short: [], medium: [] } };

// ─── UI Elements ──────────────────────────────────────────────────────────────
const generateBtn  = document.getElementById('generate-btn');
const resultEl     = document.getElementById('result');
const postTextEl   = document.getElementById('post-text');
const canvas       = document.getElementById('post-canvas');
const copyBtn      = document.getElementById('copy-btn');
const copyLabel    = document.getElementById('copy-label');
const downloadBtn  = document.getElementById('download-btn');
const regenBtn     = document.getElementById('regen-btn');
const newImageBtn  = document.getElementById('new-image-btn');

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
newImageBtn.addEventListener('click', cycleImage);

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
  currentPost  = pool[idx];
  currentImgIdx = 0;

  postTextEl.textContent = currentPost.text + '\n\n' + currentPost.hashtags;

  generateBtn.disabled = true;
  generateBtn.textContent = 'Loading...';

  await renderCanvas(currentPost, COMPANIES[currentCompany], currentImgIdx);

  generateBtn.disabled = false;
  generateBtn.textContent = 'Generate Post';
  copyLabel.textContent = 'Copy Text';

  resultEl.style.display = 'flex';
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ─── Cycle image only ─────────────────────────────────────────────────────────
async function cycleImage() {
  if (!currentPost) return;
  currentImgIdx = (currentImgIdx + 1) % currentPost.images.length;
  newImageBtn.disabled = true;
  newImageBtn.textContent = 'Loading...';
  await renderCanvas(currentPost, COMPANIES[currentCompany], currentImgIdx);
  newImageBtn.disabled = false;
  newImageBtn.textContent = 'Try Another Image';
}

// ─── Canvas: clean photo + subtle bottom branding ─────────────────────────────
async function renderCanvas(post, company, imgIdx = 0) {
  const W = 1200, H = 628;
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // 1. Draw background photo
  try {
    const img = await loadImage(post.images[imgIdx]);
    const scale = Math.max(W / img.width, H / img.height);
    const sw = img.width * scale, sh = img.height * scale;
    ctx.drawImage(img, (W - sw) / 2, (H - sh) / 2, sw, sh);
  } catch {
    ctx.fillStyle = company.bgColor;
    ctx.fillRect(0, 0, W, H);
  }

  // 2. Light overall dark tint so image stays visible
  ctx.fillStyle = 'rgba(6,16,28,0.45)';
  ctx.fillRect(0, 0, W, H);

  // 3. Gradient fade at bottom for branding strip
  const grad = ctx.createLinearGradient(0, H - 130, 0, H);
  grad.addColorStop(0, 'rgba(6,16,28,0)');
  grad.addColorStop(1, 'rgba(6,16,28,0.92)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, H - 130, W, 130);

  // 4. Orange top accent bar
  ctx.fillStyle = company.accentColor;
  ctx.fillRect(0, 0, W, 6);

  // 5. Company name — bottom left
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 26px Arial, sans-serif';
  ctx.fillText(company.name.toUpperCase(), 52, H - 42);

  // 6. Tagline — bottom left below name
  ctx.fillStyle = '#c0cdd8';
  ctx.font = '17px Arial, sans-serif';
  ctx.fillText(company.tagline, 52, H - 18);

  // 7. Orange bottom accent bar
  ctx.fillStyle = company.accentColor;
  ctx.fillRect(0, H - 6, W, 6);
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload  = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
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
  link.download = `${currentCompany}-linkedin-visual.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
});
