'use strict';
// All project content is local; no external APIs, analytics, or private endpoints.
const projects = [
  {
    "id": "release",
    "title": "Release Assistant",
    "category": "AGENTIC AI / ENTERPRISE",
    "filters": [
      "agents",
      "tools"
    ],
    "subtitle": "Release intelligence from the systems teams already use.",
    "description": "An agentic application that brings Jira issues, GitLab changes, and QA data into one workflow for release preparation and stakeholder reporting.",
    "tags": [
      "Python",
      "FastAPI",
      "MCP",
      "Angular",
      "Bedrock",
      "LiteLLM",
      "Keycloak",
      "AWS EKS"
    ],
    "impact": "~70% fewer candidate tickets for commit analysis",
    "date": "MAY 2025 — PRESENT",
    "problem": "Release teams need to reconcile issues, commits, deployed tags, vulnerabilities, and test executions. The information is spread across systems, making release preparation and review difficult to follow.",
    "architecture": "An Angular interface calls FastAPI services and agent workflows. Two MCP servers expose Jira and GitLab tools. Amazon Bedrock or LiteLLM supplies the model layer; Keycloak handles authentication and AWS EKS hosts the application.",
    "details": [
      "Built Jira and GitLab MCP integrations for issue, commit, merge-request, tag, and deployment data.",
      "Implemented release notes, environment-tag comparisons, sprint analytics, vulnerability reporting, and XRAY test-execution analysis.",
      "Filtered for tickets with commits before downstream commit analysis, focusing the workflow on relevant code changes.",
      "Generated Word and CSV reports with supporting issue and repository links, delivered through S3 downloads."
    ],
    "outcome": "Reduced the candidate set for commit analysis from about 1,000 tickets to 300—approximately 70% fewer candidates. This measures processing scope, not an unmeasured reduction in runtime or cost. The reports bring supporting evidence together for stakeholder review.",
    "art": "release"
  },
  {
    "id": "atlas",
    "title": "Code Atlas",
    "category": "RAG / CODE INTELLIGENCE",
    "filters": [
      "rag",
      "tools"
    ],
    "subtitle": "A practical starting point for unfamiliar code.",
    "description": "A repository-grounded RAG assistant that lets developers ask questions about GitHub source code and receive answers informed by relevant implementation context.",
    "tags": [
      "GitHub",
      "RAG",
      "Code embeddings",
      "Vector database",
      "LLM integration"
    ],
    "impact": "Repository context for developer onboarding",
    "date": "ENTERPRISE PROJECT",
    "problem": "A new developer must understand an existing codebase before changing it. Finding the right files and following implementation details can be difficult when knowledge is distributed across a repository.",
    "architecture": "GitHub source code is ingested and prepared for retrieval. Embeddings are stored in a vector database. A question retrieves relevant code, which is passed to the language model as context for its answer.",
    "details": [
      "Built the ingestion path from GitHub source code to a searchable vector database.",
      "Connected retrieval with LLM response generation so answers use repository content as context.",
      "Enabled natural-language questions about existing implementations through a conversational interface.",
      "Designed the workflow around developer onboarding and code exploration, giving newcomers a way to identify relevant implementation context."
    ],
    "outcome": "Provides a conversational entry point into unfamiliar repositories. Developers can use the retrieved context and explanation to decide which implementation details to investigate next.",
    "art": "code"
  },
  {
    "id": "ltsa",
    "title": "LTSA AI Assistant",
    "category": "RAG / ENTERPRISE KNOWLEDGE",
    "filters": [
      "rag"
    ],
    "subtitle": "Enterprise knowledge with retrieval and evaluation.",
    "description": "An enterprise knowledge assistant supporting LTSA and LT Examination workflows, with Amazon OpenSearch and Amazon Bedrock Knowledge Bases at the retrieval layer.",
    "tags": [
      "Amazon OpenSearch",
      "Bedrock Knowledge Bases",
      "LangChain",
      "Cohere",
      "Ragas",
      "Langfuse"
    ],
    "impact": "Retrieval, guardrails, and response evaluation",
    "date": "JAN 2024 — APR 2025",
    "problem": "Users need relevant information from enterprise documents in the context of a conversation. Building that experience requires attention to what is retrieved, how it is ranked, and how the generated response is assessed.",
    "architecture": "Document ingestion, chunking, and embeddings support retrieval through Amazon OpenSearch and Amazon Bedrock Knowledge Bases. Semantic and hybrid retrieval, metadata filtering, and Cohere reranking supply context to the response workflow.",
    "details": [
      "Developed ingestion, chunking, embeddings, and semantic/hybrid retrieval for enterprise documents.",
      "Used metadata filters and Cohere reranking to refine the context provided to the model.",
      "Implemented conversational context and NeMo Guardrails to shape response behavior.",
      "Evaluated responses with Ragas and instrumented workflows with Langfuse for trace review and investigation."
    ],
    "outcome": "Connected the full knowledge-assistant workflow—from documents and retrieval to conversational responses and quality checks. Evaluation and tracing make the system’s behavior easier to inspect as it evolves.",
    "art": "rag"
  },
  {
    "id": "bpmn",
    "title": "BPMN 3.0 Agent Workflow",
    "category": "AGENTIC AI / PROCESS AUTOMATION",
    "filters": [
      "agents"
    ],
    "subtitle": "Separate generation with a validation gate.",
    "description": "A process-diagram workflow where diagram elements and edges are generated separately, validated, regenerated when invalid, and merged only after validation succeeds.",
    "tags": [
      "Agent workflow",
      "Diagram generation",
      "Edge generation",
      "Validation",
      "Regeneration"
    ],
    "impact": "Validation gates the final merge",
    "date": "ENTERPRISE WORKFLOW PROJECT",
    "problem": "Generating a process diagram requires both the right diagram elements and the right connections. Combining unchecked outputs can carry errors into the final workflow.",
    "architecture": "A process description feeds separate diagram and edge agents. A validation agent checks their outputs. Invalid outputs return to generation and validation. Only valid outputs proceed to merge into the final diagram.",
    "details": [
      "Separated diagram generation from edge generation so each output can be checked before it is combined.",
      "Added a validation agent to assess the generated diagram and connections.",
      "Routed invalid outputs through regeneration and revalidation rather than treating the first generation as final.",
      "Merged the accepted diagram and edges only after successful validation."
    ],
    "outcome": "The workflow makes validation a prerequisite for the final merge. The walkthrough below shows both the successful path and the regeneration loop; it is an architecture demonstration rather than a live model execution.",
    "art": "bpmn"
  },
  {
    "id": "lightcode",
    "title": "Lightcode",
    "category": "DEVELOPER TOOLS / OPEN SOURCE",
    "filters": [
      "agents",
      "tools"
    ],
    "subtitle": "A coding agent you can inspect and run.",
    "description": "My independent, open-source AI coding agent, with terminal and browser interfaces, permission-controlled tools, and persistent conversation history.",
    "tags": [
      "TypeScript",
      "React",
      "Bun",
      "Hono",
      "Prisma",
      "SQLite"
    ],
    "impact": "Public source · terminal and browser interfaces",
    "date": "INDEPENDENT PROJECT",
    "problem": "A coding agent needs more than a chat interface: it must work with tools, manage context, preserve session history, and give the user control over execution.",
    "architecture": "Terminal and localhost browser clients share a Hono/Bun API and one agent engine. SQLite stores sessions. File, shell, Git, web, and MCP tools run through permission controls, with model access through supported providers and compatible endpoints.",
    "details": [
      "Built terminal and browser interfaces over a shared local API and agent engine.",
      "Implemented permission-controlled tools, reusable skills, and runtime model switching.",
      "Added token estimation, stale-output pruning, and summarization while retaining complete session history in SQLite.",
      "Published the package as @kmugalkhod/lightcode on npm and made the source available on GitHub."
    ],
    "outcome": "A public codebase demonstrating full-stack product development and agent infrastructure together: interfaces, API design, persistence, tools, and context management.",
    "art": "terminal",
    "repo": "https://github.com/kmugalkhod/lightcode"
  },
  {
    "id": "catalog",
    "title": "API Catalog",
    "category": "DEVELOPER TOOLS / API GOVERNANCE",
    "filters": [
      "tools"
    ],
    "subtitle": "API quality checks built into delivery.",
    "description": "An API Catalog POC with a reusable GitLab pipeline for validating OpenAPI specifications and publishing versioned documentation to S3 on release tags.",
    "tags": [
      "OpenAPI",
      "Spectral",
      "GitLab CI/CD",
      "AWS S3"
    ],
    "impact": "20 Spectral rules integrated into CI",
    "date": "ENTERPRISE POC",
    "problem": "Teams need API documentation they can discover and track by version, along with clear feedback when specifications fail quality checks.",
    "architecture": "A catalog frontend and backend sit alongside reusable GitLab CI components. A dedicated validation stage runs Spectral rules. Release-tag pipelines generate and publish versioned documentation to S3.",
    "details": [
      "Built the catalog POC with frontend and backend services.",
      "Created a reusable GitLab pipeline for specification validation and documentation publishing.",
      "Developed and integrated 20 Spectral rules to surface OpenAPI specification issues.",
      "Separated validation into a visible pipeline stage and tied versioned publication to release tags."
    ],
    "outcome": "Delivered a working catalog POC and reusable pipeline that connects API documentation with validation and release versions. Specification issues are surfaced during the delivery process.",
    "art": "pipeline"
  }
];

function illustration(type) {
  const paths={
    release:'<rect x="4" y="3" width="16" height="18" rx="3"/><path d="m8 9 2 2 5-5M8 16h8"/>',
    code:'<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18"/>',
    rag:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/>',
    bpmn:'<rect x="2" y="3" width="7" height="6" rx="1"/><rect x="15" y="3" width="7" height="6" rx="1"/><rect x="8" y="16" width="8" height="6" rx="1"/><path d="M5 9v4h14V9m-7 4v3"/>',
    terminal:'<rect x="2" y="4" width="20" height="16" rx="3"/><path d="m6 9 3 3-3 3m6 0h5"/>',
    pipeline:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18m-12 0v12m4-8h4m-4 4h4"/>'
  };
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+paths[type]+'</svg>';
}
const overview={
  release:{color:'blue',text:'Connects Jira, GitLab, and QA data to generate traceable release notes, tag comparisons, and stakeholder reports.'},
  atlas:{color:'violet',text:'Turns GitHub source code into a searchable knowledge base so developers can ask implementation questions and explore unfamiliar repositories.'},
  ltsa:{color:'teal',text:'Connects enterprise documents to conversational answers using OpenSearch and Bedrock Knowledge Bases, with reranking and quality checks.'},
  bpmn:{color:'amber',text:'Generates diagram elements and edges separately, checks their validity, and regenerates invalid outputs before the final merge.'},
  lightcode:{color:'slate',text:'A coding agent with shared terminal and browser sessions, permission-controlled tools, provider switching, and persistent history.'},
  catalog:{color:'coral',text:'A catalog and reusable delivery pipeline that checks OpenAPI specifications and publishes versioned documentation on release tags.'}
};
const grid=document.querySelector('#project-grid');
projects.forEach((project,index)=>{
  const card=document.createElement('article');
  card.className='project-card';card.dataset.id=project.id;
  card.innerHTML=`<span class="icon-tile ${overview[project.id].color}" aria-hidden="true">${illustration(project.art)}</span><div class="row-copy"><div class="row-heading"><h3>${project.title}</h3>${project.repo?'<span class="open-badge">Open source</span>':''}</div><p class="card-description">${overview[project.id].text}</p><p class="project-evidence">${project.impact}</p></div><button class="details-button" data-project="${project.id}" aria-label="Explore ${project.title}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12"/></svg></button>`;
  grid.append(card);
});
const filterButtons=[...document.querySelectorAll('[data-filter]')];
filterButtons.forEach(button=>button.addEventListener('click',()=>{
  const filter=button.dataset.filter;
  filterButtons.forEach(other=>{const active=other===button;other.classList.toggle('active',active);other.setAttribute('aria-pressed',String(active));});
  let count=0;
  document.querySelectorAll('.project-card').forEach(card=>{
    const project=projects.find(item=>item.id===card.dataset.id);
    card.hidden=filter!=='all'&&!project.filters.includes(filter);
    card.classList.remove('reveal');if(!card.hidden){count++;void card.offsetWidth;card.classList.add('reveal');}
  });
  document.querySelector('#result-count').textContent=`${count} project${count===1?'':'s'}`;
}));

const navigation=document.querySelector('#navigation');

const dialog=document.querySelector('#project-dialog');
const dialogContent=document.querySelector('#dialog-content');
let previousFocus=null;
const flowMarkup=`<div class="dialog-flow"><h3>Follow the agent workflow</h3><p>Interactive architecture walkthrough · Illustrative, not a live AI execution</p><div class="flow-stages"><div class="flow-stage" data-stage="diagram"><strong>01 / Diagram agent</strong>Generate diagram elements</div><div class="flow-stage" data-stage="edges"><strong>01 / Edge agent</strong>Generate connections separately</div><div class="flow-stage" data-stage="validate"><strong>02 / Validation agent</strong>Check both outputs</div><div class="flow-stage" data-stage="regenerate"><strong>↶ / Regenerate</strong>Invalid → generate and validate again</div><div class="flow-stage" data-stage="merge"><strong>03 / Merge valid outputs</strong>Combine diagram + edges → final diagram</div></div><div class="flow-status" aria-live="polite"></div><div class="flow-controls"><button class="flow-next">Start walkthrough →</button><div class="branch-controls" hidden><button data-result="invalid">Try invalid result ↶</button><button data-result="valid">Mark outputs valid ✓</button></div><button class="flow-reset">Reset</button></div><p class="flow-description">Process description → separate diagram and edge generation → validation. Invalid results go back to generation and validation. Valid outputs proceed to merge. There is no merge before successful validation.</p></div>`;

function openProject(id){
  const project=projects.find(item=>item.id===id);if(!project)return;
  previousFocus=document.activeElement;
  dialogContent.innerHTML=`<p class="eyebrow">${project.category} · ${project.date}</p><h2 id="dialog-title">${project.title}</h2><p class="dialog-summary">${project.description}</p><div class="dialog-grid"><div><h3 class="detail-heading">WHY IT MATTERS</h3><p>${project.problem}</p></div><div><h3 class="detail-heading">HOW IT WORKS</h3><p>${project.architecture}</p></div><div><h3 class="detail-heading">WHAT I BUILT</h3><ul>${project.details.map(detail=>`<li>${detail}</li>`).join('')}</ul></div><div><h3 class="detail-heading">RESULT & VALUE</h3><p>${project.outcome}</p></div></div><div class="tags">${project.tags.map(tag=>`<span>${tag}</span>`).join('')}</div>${project.id==='bpmn'?flowMarkup:''}<div class="modal-links">${project.repo?`<a href="${project.repo}" target="_blank" rel="noopener noreferrer">View source on GitHub ↗</a>`:'<a href="mailto:kmugalkhod@gmail.com">Discuss this project ↗</a>'}</div><p class="dialog-footnote">${project.repo?'Independent open-source project.':'Enterprise work at Cybage.'}</p>`;
  dialog.showModal();dialog.scrollTop=0;
  if(location.hash!=='#project-'+id)history.replaceState(null,'','#project-'+id);
  if(project.id==='bpmn')setupFlow();
  document.querySelector('.dialog-close').focus({preventScroll:true});
}
grid.addEventListener('click',event=>{const button=event.target.closest('[data-project]');if(button)openProject(button.dataset.project);});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{const bounds=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom))dialog.close();});
dialog.addEventListener('close',()=>{
  if(location.hash.startsWith('#project-'))history.replaceState(null,'',location.pathname+location.search);
  previousFocus?.focus({preventScroll:true});
});
// Shareable project links, e.g. https://kmugalkhod.github.io/#project-lightcode
function openProjectFromHash(){
  const match=location.hash.match(/^#project-([\w-]+)$/);
  if(match&&projects.some(item=>item.id===match[1])&&!dialog.open){
    document.querySelector('#work').scrollIntoView({behavior:'instant'});
    openProject(match[1]);
  }
}
window.addEventListener('hashchange',openProjectFromHash);
openProjectFromHash();

function setupFlow(){
  let stage='ready',attempt=1;
  const next=dialog.querySelector('.flow-next');
  const branch=dialog.querySelector('.branch-controls');
  const status=dialog.querySelector('.flow-status');
  function render(){
    const active={ready:[],generate:['diagram','edges'],validate:['validate'],invalid:['regenerate'],valid:['validate'],merged:['merge']}[stage];
    dialog.querySelectorAll('[data-stage]').forEach(node=>node.classList.toggle('active',active.includes(node.dataset.stage)));
    const text={ready:'Start with a business-process description. The two generation agents work separately.',generate:`Attempt ${attempt}: diagram elements and edges are generated separately. Next, validate both outputs.`,validate:`Attempt ${attempt}: validation is the gate. Choose an outcome to explore either branch.`,invalid:`Attempt ${attempt}: invalid output. Return to generation—nothing is merged.`,valid:`Attempt ${attempt}: both outputs are valid. They can now be merged.`,merged:'Complete: validated diagram elements and edges are merged into the final diagram.'};
    status.textContent=text[stage];
    next.hidden=stage==='validate'||stage==='merged';
    branch.hidden=stage!=='validate';
    branch.style.display=stage==='validate'?'flex':'none';
    next.textContent={ready:'Start walkthrough →',generate:'Validate outputs →',invalid:'Regenerate outputs ↶',valid:'Merge valid outputs →'}[stage]||'Continue →';
  }
  next.addEventListener('click',()=>{if(stage==='ready')stage='generate';else if(stage==='generate')stage='validate';else if(stage==='invalid'){attempt++;stage='generate';}else if(stage==='valid')stage='merged';render();if(stage==='validate')branch.querySelector('button').focus();else if(stage==='merged')dialog.querySelector('.flow-reset').focus();});
  branch.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{stage=button.dataset.result;render();next.focus();}));
  dialog.querySelector('.flow-reset').addEventListener('click',()=>{stage='ready';attempt=1;render();next.focus();});
  render();
}

document.querySelector('#copy-email').addEventListener('click',async()=>{
  const status=document.querySelector('#copy-status');
  try{await navigator.clipboard.writeText('kmugalkhod@gmail.com');status.textContent='Email copied to clipboard.';}
  catch{status.textContent='Copy manually: kmugalkhod@gmail.com';}
});

const themeToggle=document.querySelector('#theme-toggle');
function applyTheme(theme){
  const value=theme==='light'?'light':'dark';
  document.documentElement.dataset.theme=value;
  const label=value==='dark'?'Switch to light theme':'Switch to dark theme';
  themeToggle.setAttribute('aria-label',label);
  themeToggle.setAttribute('title',label);
  document.querySelector('meta[name="theme-color"]').setAttribute('content',value==='dark'?'#141414':'#f6f5f3');
}
// The inline head script already picked the saved or system theme; sync the toggle with it.
applyTheme(document.documentElement.dataset.theme);
const systemLight=window.matchMedia('(prefers-color-scheme: light)');
systemLight.addEventListener?.('change',event=>{
  let saved=null;try{saved=localStorage.getItem('kunal-portfolio-theme');}catch{}
  if(!saved)applyTheme(event.matches?'light':'dark');
});
themeToggle.addEventListener('click',()=>{
  const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';
  applyTheme(theme);
  try{localStorage.setItem('kunal-portfolio-theme',theme);}catch{}
});

const sectionLinks=[...navigation.querySelectorAll('a')];
const observedSections=['home','work','journey','contact'].map(id=>document.getElementById(id));
if('IntersectionObserver' in window){
  const sectionObserver=new IntersectionObserver(entries=>{
    const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
    if(!visible.length)return;
    const id=visible[0].target.id;
    sectionLinks.forEach(link=>{if(link.getAttribute('href')==='#'+id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
  },{rootMargin:'-5% 0px -55% 0px',threshold:0});
  observedSections.forEach(section=>{if(section)sectionObserver.observe(section);});
}
sectionLinks.forEach(link=>link.addEventListener('click',()=>{
  sectionLinks.forEach(item=>item.removeAttribute('aria-current'));
  link.setAttribute('aria-current','location');
}));
