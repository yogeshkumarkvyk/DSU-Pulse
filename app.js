const iconPaths = {
  campus: '<path d="M3 10.5 12 4l9 6.5"/><path d="M5 10v9h14v-9M9 19v-5h6v5M8 11h.01M16 11h.01"/>',
  home: '<path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9M9 20v-6h6v6"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 20c.5-4 3.3-6 8-6s7.5 2 8 6"/>',
  chevron: '<path d="m7 10 5 5 5-5"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5m6 6-6-6 6-6"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15"/>',
  pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  bag: '<path d="M5 8h14l1 13H4L5 8ZM9 8a3 3 0 0 1 6 0"/>',
  box: '<path d="m12 3 9 5-9 5-9-5 9-5ZM3 8v9l9 5 9-5V8M12 13v9"/>',
  alert: '<path d="M12 3 2.8 20h18.4L12 3Z"/><path d="M12 9v4M12 17h.01"/>',
  chat: '<path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-5.5A7.5 7.5 0 1 1 20 11.5Z"/><path d="M8 11h8M8 14h5"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5v-17Z"/><path d="M4 17a2.5 2.5 0 0 1 2.5-2.5H20"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3"/>',
  coffee: '<path d="M4 9h13v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9ZM17 11h1a3 3 0 0 1 0 6h-2M7 4v2M11 4v2M15 4v2"/>',
  key: '<circle cx="8" cy="15" r="5"/><path d="m11.5 11.5 8-8 2 2-2 2 2 2-2 2-2-2-4.5 4.5"/>',
  headphones: '<path d="M3 13v-1a9 9 0 0 1 18 0v1M3 13h4v7H5a2 2 0 0 1-2-2v-5ZM21 13h-4v7h2a2 2 0 0 0 2-2v-5Z"/>',
  laptop: '<rect x="4" y="4" width="16" height="12" rx="1.5"/><path d="M2 20h20l-2-4H4l-2 4Z"/>',
  flask: '<path d="M9 3h6M10 3v6L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9V3M7 16h10"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  eyeOff: '<path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.2A11 11 0 0 1 12 5c6.5 0 10 7 10 7a15 15 0 0 1-3 3.8M6.2 6.2C3.5 8 2 12 2 12s3.5 7 10 7a10 10 0 0 0 4.2-.9"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  logout: '<path d="M10 17l5-5-5-5M15 12H3M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  send: '<path d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13"/>',
  spark: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 16l1 2.5 2.5 1-2.5 1L19 23l-1-2.5-2.5-1 2.5-1L19 16Z"/>',
  sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M2 14h4M10 8h4M18 16h4"/>',
  heart: '<path d="M20.8 8.8c0 5.4-8.8 11.2-8.8 11.2S3.2 14.2 3.2 8.8a4.8 4.8 0 0 1 8.8-2.6 4.8 4.8 0 0 1 8.8 2.6Z"/>',
  route: '<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h5a3 3 0 0 0 0-6h-2a3 3 0 0 1 0-6h5"/>',
  refresh: '<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.6 9A7 7 0 0 1 18 6l2 6M4 12l2 6a7 7 0 0 0 12.4-3"/>',
};
const I = (name, cls = '') => `<svg class="icon ${cls}" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.info}</svg>`;
const esc = (value = '') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const today = new Date();
const isoToday = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
const apptDefault = new Date(today.getFullYear(),today.getMonth(),today.getDate()+4);
const defaultAppointmentDate = `${apptDefault.getFullYear()}-${String(apptDefault.getMonth()+1).padStart(2,'0')}-${String(apptDefault.getDate()).padStart(2,'0')}`;
const monthShort = d => new Date(`${d}T12:00:00`).toLocaleDateString('en-US',{month:'short'});
const dayNum = d => new Date(`${d}T12:00:00`).getDate();
const prettyDate = d => new Date(`${d}T12:00:00`).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
const timeNow = () => new Date().toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'});

const navItems = [
  { id:'dashboard',label:'Home',icon:'home',group:'STUDENT HUB' },
  { id:'lost',label:'Lost & found',icon:'key',group:'STUDENT HUB' },
  { id:'marketplace',label:'Marketplace',icon:'bag',group:'STUDENT HUB' },
  { id:'navigation',label:'Campus map',icon:'map',group:'STUDENT HUB' },
  { id:'complaints',label:'Requests',icon:'alert',group:'CAMPUS LIFE' },
  { id:'groups',label:'Group projects',icon:'users',group:'CAMPUS LIFE' },
  { id:'events',label:'Events',icon:'calendar',group:'CAMPUS LIFE' },
  { id:'appointments',label:'Appointments',icon:'clock',group:'CAMPUS LIFE' },
];
const pageInfo = {
  dashboard:['Your campus, in one place','A clear view of what’s happening and what needs your attention.'],
  lost:['Lost & found','A campus-wide board for things misplaced or waiting to be claimed.'],
  marketplace:['Student marketplace','Buy, sell, and pass along useful things within the student community.'],
  navigation:['Campus map','Find your destination and get a simple walking route around campus.'],
  complaints:['Requests & reports','Track campus issues and service requests from one place.'],
  groups:['Group projects','Keep team tasks, members, and deadlines moving together.'],
  events:['Campus events','Discover what’s on and keep the events you plan to attend close by.'],
  appointments:['Appointments','Choose a campus service and reserve a convenient time.'],
};

const state = {
  authenticated:false, authScreen:'login', activePage:'dashboard', accountType:'student', user:{name:'Maya Chen',email:'maya.chen@dsu.edu.in',id:'S2408172',major:'Environmental Design',year:'Year 2'},
  passwordShown:false, menu:null, modal:null, toastTimer:null, searchResults:[],
  lostTab:'all', lostQuery:'', lostLocation:'all', lostCategory:'all', lostDate:'all',
  marketTab:'browse', marketQuery:'', marketCategory:'all', marketCondition:'all', marketPrice:'all',
  requestTab:'all', selectedDestination:'library', selectedEventCategory:'all', eventTab:'discover', eventQuery:'',
  events:[
    {id:'ev1',title:'Lantern Walk on the Quad',date:'2026-11-21',time:'6:30 PM',venue:'Founders Quad',category:'Community',desc:'A gentle evening walk through campus with lanterns, warm drinks, and live student music.',spots:48,registered:false},
    {id:'ev2',title:'Design Futures: Open Studio',date:'2026-11-22',time:'2:00 PM',venue:'Marlow Design Hall',category:'Academic',desc:'Explore student work, meet the studio mentors, and try a quick creative workshop.',spots:18,registered:true},
    {id:'ev3',title:'Dayananda Sagar University Night Market',date:'2026-11-25',time:'5:00 PM',venue:'Student Union Courtyard',category:'Community',desc:'Student makers, local food stalls, acoustic sets, and small-batch campus merch.',spots:0,registered:false},
    {id:'ev4',title:'Mindful Minutes: Garden Reset',date:'2026-11-27',time:'12:15 PM',venue:'Glasshouse Garden',category:'Wellbeing',desc:'Take a screen break with guided breathing and a relaxed campus garden loop.',spots:32,registered:false},
    {id:'ev5',title:'Civic Tech Student Showcase',date:'2026-11-30',time:'4:00 PM',venue:'Innovation Commons',category:'Academic',desc:'Student teams share small digital tools designed to improve everyday community life.',spots:23,registered:false},
  ],
  lostItems:[
    {id:'lf1',title:'Silver keys with a blue tag',kind:'Found',location:'East Library, level 2',date:'2026-11-19',category:'Keys',desc:'A small set of three silver keys on a blue fabric loop. Handed to the library welcome desk.',status:'Waiting to be claimed',tone:'tone-yellow',icon:'key'},
    {id:'lf2',title:'Black wireless headphones',kind:'Lost',location:'Science Building, room 204',date:'2026-11-18',category:'Electronics',desc:'Over-ear headphones in a dark gray case. Last seen after the 11:00 lecture.',status:'Reported lost',tone:'tone-blue',icon:'headphones'},
    {id:'lf3',title:'Green field notebook',kind:'Found',location:'West Garden benches',date:'2026-11-17',category:'Books & notes',desc:'Pocket-sized green notebook with a leaf pattern. No personal details shared publicly.',status:'Waiting to be claimed',tone:'tone-peach',icon:'book'},
    {id:'lf4',title:'USB-C laptop charger',kind:'Lost',location:'Student Union, cafe',date:'2026-11-16',category:'Electronics',desc:'White 65W charger and cable, likely left near the large window table.',status:'Reported lost',tone:'tone-blue',icon:'laptop'},
    {id:'lf5',title:'Clear water bottle',kind:'Found',location:'Arts Center foyer',date:'2026-11-15',category:'Personal items',desc:'Clear bottle with a teal lid. Collected at the Arts Center reception desk.',status:'Waiting to be claimed',tone:'tone-yellow',icon:'box'},
  ],
  listings:[
    {id:'m1',title:'Calculus, Early Transcendentals',price:32,condition:'Very good',category:'Books',seller:'Noah R.',initials:'NR',tone:'tone-blue',icon:'book',desc:'Clean pages with only a few pencil notes in the first chapters. Can meet by the library.'},
    {id:'m2',title:'Desk lamp, warm dimmable',price:18,condition:'Like new',category:'Home',seller:'Priya S.',initials:'PS',tone:'tone-yellow',icon:'spark',desc:'Soft warm light with three brightness levels. Compact base, works perfectly.'},
    {id:'m3',title:'Field sketching set',price:24,condition:'Good',category:'Art supplies',seller:'Leo M.',initials:'LM',tone:'tone-peach',icon:'image',desc:'Pencil case, sketchbook, and a few graphite pencils. Great for quick studies.'},
    {id:'m4',title:'Scientific calculator',price:21,condition:'Very good',category:'Electronics',seller:'Hana K.',initials:'HK',tone:'tone-lilac',icon:'flask',desc:'All keys work and screen is clear. Includes a protective slide cover.'},
    {id:'m5',title:'Ceramic pour-over set',price:16,condition:'Good',category:'Home',seller:'Sam T.',initials:'ST',tone:'tone-peach',icon:'coffee',desc:'Dripper, matching cup, and a small stack of filters. Gently used.'},
  ],
  requests:[
    {id:'NB-24091',title:'Lamp out in Cedar Hall study room',category:'Facilities',location:'Cedar Hall · Room 118',date:'2026-11-18',priority:'Normal',status:'In progress',desc:'The desk lamp by the north window stopped working. The room is still usable, but the back table is quite dim.',updates:[['Received','Your report was added to the demo request list.','Nov 18 · 9:14 AM'],['In progress','Facilities review is shown as underway in this sample timeline.','Nov 19 · 1:40 PM']]},
    {id:'NB-24073',title:'Add recycling bin near studio',category:'Sustainability',location:'Marlow Design Hall · Studio 3',date:'2026-11-12',priority:'Low',status:'Received',desc:'A recycling bin near the studio tables would make it easier to sort cardboard and paper after model-making.',updates:[['Received','Your report was added to the demo request list.','Nov 12 · 3:32 PM']]},
    {id:'NB-23998',title:'Water fountain filter check',category:'Facilities',location:'Science Building · Ground floor',date:'2026-11-04',priority:'Normal',status:'Resolved',desc:'The fountain near the south entrance had a slow stream and needed a filter check.',updates:[['Received','Your report was added to the demo request list.','Nov 4 · 10:06 AM'],['In progress','The sample ticket was marked for a facilities check.','Nov 5 · 2:18 PM'],['Resolved','The sample issue is now marked complete.','Nov 8 · 11:20 AM']]},
  ],
  projects:[
    {id:'p1',name:'Green Routes — campus access guide',course:'DES 214 · Community Systems',deadline:'2026-11-27',members:[['MC','Maya'],['PS','Priya'],['JL','Jordan'],['AR','Amir']],tasks:[{id:'t1',title:'Map the step-free entrances',status:'done',due:'Nov 18',owner:'Priya'},{id:'t2',title:'Photograph the north connector',status:'doing',due:'Nov 22',owner:'Maya'},{id:'t3',title:'Draft wayfinding notes',status:'todo',due:'Nov 24',owner:'Jordan'},{id:'t4',title:'Review the guide with the team',status:'todo',due:'Nov 26',owner:'Amir'}]},
    {id:'p2',name:'Materials Library catalog refresh',course:'DES 201 · Studio Practice',deadline:'2026-12-03',members:[['MC','Maya'],['HK','Hana'],['ST','Sam']],tasks:[{id:'t5',title:'Choose the material tags',status:'done',due:'Nov 20',owner:'Hana'},{id:'t6',title:'Add sample records',status:'doing',due:'Nov 28',owner:'Maya'}]},
  ],
  appointments:[
    {id:'A-4182',department:'Academic advising',date:'2026-11-24',time:'10:30 AM',status:'Upcoming'},
    {id:'A-4021',department:'Student wellbeing',date:'2026-11-07',time:'1:00 PM',status:'Completed'},
  ],
  chat:[{role:'assistant',text:'Hi Maya — I’m the DSU Pulse demo assistant. I can point you to student services, events, map locations, or appointment options. What would you like to find?',time:timeNow()}],
  destinations:[
    {id:'library',name:'East Library',type:'Study & research',icon:'book',building:'Library Quarter',hours:'Open until 11:00 PM',x:40,y:45,dist:'5 min walk'},
    {id:'cafeteria',name:'Harbor Café',type:'Food & drink',icon:'coffee',building:'Student Union',hours:'Open until 7:00 PM',x:71,y:56,dist:'3 min walk'},
    {id:'design',name:'Marlow Design Hall',type:'Academic building',icon:'building',building:'Arts Walk',hours:'Open until 9:00 PM',x:30,y:72,dist:'8 min walk'},
    {id:'advising',name:'Student Advising',type:'Student services',icon:'users',building:'North Commons · Room 120',hours:'Open until 5:00 PM',x:67,y:28,dist:'6 min walk'},
    {id:'wellbeing',name:'Wellbeing Center',type:'Student services',icon:'heart',building:'Garden Walk',hours:'Open until 6:00 PM',x:52,y:83,dist:'9 min walk'},
  ],
};

function brand(compact = false) {
  return `<a class="brand" href="#" aria-label="DSU Pulse home"><span class="brand-mark">${I('campus')}</span><span class="brand-name">DSU Pulse${compact?'':'<small>STUDENT HUB</small>'}</span></a>`;
}

function renderAuth() {
  const root = document.getElementById('app');
  if (state.authScreen === 'recovery') {
    root.innerHTML = `<main class="auth-layout">
      <section class="auth-story"><div>${brand()}</div><div class="story-copy"><span class="eyebrow"><i class="eyebrow-dot"></i> A calmer way to campus</span><h1>Good things happen when campus connects.</h1><p>One student hub for the services, people, and places that make Dayananda Sagar University yours.</p><div class="story-features"><div class="story-feature"><span class="feature-icon">${I('map')}</span>Find your way around campus</div><div class="story-feature"><span class="feature-icon">${I('calendar')}</span>Stay close to events and teams</div></div></div><div class="story-foot">A student-only demo experience · Dayananda Sagar University</div></section>
      <section class="auth-panel"><div class="auth-card"><div class="auth-mobile-brand">${brand()}</div><button class="auth-back" data-action="auth-back">${I('back')} Back to sign in</button><h2>Reset your password</h2><p class="auth-subtitle">Enter your student email or university ID. We’ll show a confirmation for this demo flow.</p><form id="recovery-form" novalidate><div class="form-field"><label for="recovery-id">Student email or university ID</label><div class="input-wrap">${I('user')}<input id="recovery-id" name="identity" autocomplete="username" placeholder="name@student.dsu.edu.in" required /></div></div><div class="auth-error" id="recovery-error" role="alert"></div><button class="btn btn-block" type="submit">Send reset instructions ${I('arrow')}</button></form><div class="recovery-success" id="recovery-success" role="status">If this student account is in the DSU Pulse demo, password reset instructions would be sent. No email was sent from this prototype.</div><div class="auth-note">${I('info')}<span>This recovery screen is part of a prototype. It does not contact university identity services.</span></div></div></section></main>`;
    return;
  }
  root.innerHTML = `<main class="auth-layout">
    <section class="auth-story"><div>${brand()}</div><div class="story-copy"><span class="eyebrow"><i class="eyebrow-dot"></i> Dayananda Sagar University</span><h1>Make campus feel a little closer.</h1><p>Everything you need to navigate student life, all in one thoughtful place. Find your people, your next event, and your way around.</p><div class="story-features"><div class="story-feature"><span class="feature-icon">${I('map')}</span>Find places and campus services</div><div class="story-feature"><span class="feature-icon">${I('users')}</span>Keep group work moving</div><div class="story-feature"><span class="feature-icon">${I('spark')}</span>Stay in the loop, your way</div></div></div><div class="story-foot">A student-only demo experience · Dayananda Sagar University</div></section>
    <section class="auth-panel"><div class="auth-card"><div class="auth-mobile-brand">${brand()}</div><span class="eyebrow"><i class="eyebrow-dot"></i> DSU Pulse access</span><h2 style="margin-top:14px">Welcome back</h2><p class="auth-subtitle">Sign in with your Dayananda Sagar University account to continue.</p>
      <div class="segmented account-switch" role="group" aria-label="Choose account type"><button class="segment ${state.accountType==='student'?'active':''}" data-account-type="student">Student</button><button class="segment ${state.accountType==='admin'?'active':''}" data-account-type="admin">Admin</button></div>
      <form id="signin-form" novalidate><div class="form-field"><label for="identity">${state.accountType==='student'?'Student email or university ID':'Admin email or university ID'}</label><div class="input-wrap">${I('user')}<input id="identity" name="identity" autocomplete="username" placeholder="${state.accountType==='student'?'name@student.dsu.edu.in':'name@dsu.edu.in'}" required /></div></div><div class="form-field"><label for="password">Password</label><div class="input-wrap">${I('lock')}<input id="password" name="password" type="password" autocomplete="current-password" placeholder="Enter your password" required /><button class="input-trailing" type="button" aria-label="Show password" data-action="toggle-password">${I('eye')}</button></div></div><div class="auth-options"><label class="check-label"><input type="checkbox" name="remember" /> Remember me</label><button class="text-button" type="button" data-action="recover">Forgot password?</button></div><div class="auth-error" id="signin-error" role="alert"></div><button class="btn btn-block" type="submit" id="signin-submit">Sign in ${I('arrow')}</button></form>
      <div class="auth-divider">OR TRY THE PROTOTYPE</div><button class="demo-button" data-action="demo-signin">Continue with a sample ${state.accountType==='student'?'student':'admin'} account</button>
      <div class="auth-note">${I('info')}<span>Student and admin access are simulated for this prototype; university credentials are not verified. Demo changes stay in this browser session.</span></div></div></section></main>`;
}

function renderShell() {
  const root = document.getElementById('app');
  const groups = ['STUDENT HUB','CAMPUS LIFE'];
  root.innerHTML = `<div class="shell"><aside class="sidebar" id="sidebar">${brand()}${groups.map(group=>`<div class="nav-label">${group}</div><nav class="nav-list" aria-label="${group.toLowerCase()}">${navItems.filter(n=>n.group===group).map(n=>`<button class="nav-link ${state.activePage===n.id?'active':''}" data-page="${n.id}" ${state.activePage===n.id?'aria-current="page"':''}>${I(n.icon)}<span>${n.label}</span></button>`).join('')}</nav>`).join('')}<div class="nav-spacer"></div><div class="sidebar-bottom"><div class="campus-status"><i class="status-dot"></i><div><strong>Dayananda Sagar University campus</strong><span>Open · Student services online</span></div></div><div class="sidebar-foot"><span>DSU Pulse demo</span><span>v1.0</span></div></div></aside><div class="mobile-scrim" id="mobile-scrim" data-action="close-mobile"></div>
  <div class="main-area"><header class="topbar"><div class="topbar-left"><button class="mobile-menu" aria-label="Open navigation" aria-controls="sidebar" aria-expanded="false" data-action="open-mobile">${I('menu')}</button><div class="global-search"><span class="search-icon" aria-hidden="true">${I('search')}</span><input id="global-search-input" type="search" autocomplete="off" placeholder="Search campus services…" aria-label="Search campus services" /><kbd class="search-shortcut">/</kbd><div class="search-popover" id="search-popover"></div></div></div><div class="topbar-right"><div class="menu-anchor"><button class="icon-button" aria-label="Notifications" data-menu-toggle="notifications">${I('bell')}<i class="notification-dot"></i></button><div class="utility-menu" id="menu-notifications"><div class="menu-head"><strong>Notifications</strong><span>Recent updates for you</span></div><div class="notification-item"><strong>Design Futures: Open Studio</strong><span>You’re registered · Sunday at 2:00 PM</span></div><div class="notification-item"><strong>Request NB-24091 updated</strong><span>Your facilities request is in progress.</span></div><div class="notification-item"><strong>New on the campus board</strong><span>A set of keys was found at the East Library.</span></div></div></div><span class="top-divider"></span><div class="menu-anchor"><button class="profile-trigger" data-menu-toggle="profile" aria-label="Student profile menu"><span class="avatar">MC</span><span class="profile-copy"><strong>${esc(state.user.name)}</strong><span>Student · Year 2</span></span>${I('chevron')}</button><div class="utility-menu" id="menu-profile"><div class="menu-head"><strong>${esc(state.user.name)}</strong><span>${esc(state.user.email)}</span></div><button class="menu-action" data-action="profile">${I('user')} Student profile</button><button class="menu-action danger" data-action="signout">${I('logout')} Sign out</button></div></div></div></header><main id="page-content" class="page-wrap"></main></div></div>`;
  renderPage();
}

function heading(page = state.activePage, action = '') {
  const [title, description] = pageInfo[page];
  const html = `<div class="page-heading"><div><span class="eyebrow"><i class="eyebrow-dot"></i> Dayananda Sagar University</span><h1>${title}</h1><p>${description}</p></div>${action?`<div class="heading-actions">${action}</div>`:''}</div>`;
  return html;
}
function actionBtn(label, action, icon = 'plus', secondary = false) { return `<button class="btn ${secondary?'btn-secondary':''}" data-action="${action}">${I(icon)} ${label}</button>`; }
function statusPill(status) {
  const key = status.toLowerCase();
  const tone = key.includes('progress') || key.includes('upcoming') || key.includes('found') ? 'teal' : key.includes('resolved') || key.includes('completed') || key.includes('registered') || key==='done' ? 'blue' : key.includes('full') || key.includes('lost') || key.includes('high') ? 'amber' : 'gray';
  return `<span class="pill ${tone}">${esc(status)}</span>`;
}
function fmtMoney(n) { return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(Number(n)||0); }
function renderPage() {
  if (!state.authenticated) return renderAuth();
  const main = document.getElementById('page-content'); if (!main) return;
  const pages = { dashboard:renderDashboard, lost:renderLost, marketplace:renderMarketplace, navigation:renderNavigation, complaints:renderComplaints, groups:renderGroups, events:renderEvents, appointments:renderAppointments };
  main.innerHTML = (pages[state.activePage] || renderDashboard)();
}

function renderDashboard() {
  const events = state.events.filter(e=>new Date(`${e.date}T23:59:00`) >= new Date()).slice(0,3);
  const activeRequests = state.requests.filter(r=>r.status!=='Resolved').slice(0,2);
  return `${heading('dashboard')}<section class="welcome-card"><div class="welcome-copy"><div class="welcome-date">${new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'})}</div><h2>Good morning, ${esc(state.user.name.split(' ')[0])} <span aria-hidden="true">✦</span></h2><p>Small steps make a good campus day. Here’s your Dayananda Sagar University, at a glance.</p><button class="welcome-action" data-page="appointments">Plan your day ${I('arrow')}</button></div><div class="campus-note">${I('pin')}<strong>A note from campus</strong><span>The library’s quiet floor is open late this week for project season.</span></div></section>
  <section style="margin-top:25px"><div class="section-title"><div><h2>Quick actions</h2><p>Pick up where campus life needs you</p></div></div><div class="quick-grid"><button class="quick-action" data-action="report-lost"><span class="quick-icon">${I('key')}</span><span><strong>Report an item</strong><span>Lost or found</span></span></button><button class="quick-action" data-page="marketplace"><span class="quick-icon">${I('bag')}</span><span><strong>Browse marketplace</strong><span>Student listings</span></span></button><button class="quick-action" data-action="new-request"><span class="quick-icon">${I('alert')}</span><span><strong>Submit a request</strong><span>Tell us what needs attention</span></span></button><button class="quick-action" data-page="appointments"><span class="quick-icon">${I('calendar')}</span><span><strong>Book a time</strong><span>Student services</span></span></button></div></section>
  <section class="grid-2" style="margin-top:25px"><div class="stack"><div class="card card-pad"><div class="section-title"><div><h2>Coming up</h2><p>A few good things on the calendar</p></div><button class="section-link" data-page="events">All events ${I('chevronRight')}</button></div>${events.length?`<div class="event-list">${events.map(e=>`<div class="event-row"><div class="event-date"><strong>${dayNum(e.date)}</strong><span>${monthShort(e.date)}</span></div><div class="event-info"><strong>${esc(e.title)}</strong><span>${esc(e.time)} · ${esc(e.venue)}</span></div>${e.registered?'<span class="pill teal">Registered</span>':''}</div>`).join('')}</div>`:`<div class="empty-state"><div class="empty-icon">${I('calendar')}</div><h3>A little breathing room</h3><p>No upcoming events are on your calendar. Browse what’s happening around campus.</p><button class="btn btn-secondary" data-page="events">Explore events ${I('arrow')}</button></div>`}</div>
  <div class="card card-pad"><div class="section-title"><div><h2>Your open requests</h2><p>Everything you’ve asked campus to help with</p></div><button class="section-link" data-page="complaints">View all ${I('chevronRight')}</button></div>${activeRequests.length?`<div class="request-list">${activeRequests.map(r=>`<div class="request-row"><span class="request-icon">${I('alert')}</span><span class="request-main"><strong>${esc(r.title)}</strong><span>${esc(r.id)} · ${prettyDate(r.date)}</span></span>${statusPill(r.status)}</div>`).join('')}</div>`:`<div class="empty-state"><div class="empty-icon">${I('check')}</div><h3>You’re all caught up</h3><p>New requests you submit will appear here with their latest status.</p></div>`}</div></div>
  <aside class="stack"><div class="card card-pad"><div class="section-title"><div><h2>Campus pulse</h2><p>Useful campus notes for today</p></div>${I('spark')}</div><div class="activity-list"><div class="activity-row"><span class="activity-icon">${I('book')}</span><span class="activity-main"><strong>Study spaces are open late</strong><span>East Library · until 11:00 PM</span></span></div><div class="activity-row"><span class="activity-icon">${I('calendar')}</span><span class="activity-main"><strong>Lantern Walk is tomorrow</strong><span>Founders Quad · 6:30 PM</span></span></div><div class="activity-row"><span class="activity-icon">${I('coffee')}</span><span class="activity-main"><strong>Harbor Café has a new menu</strong><span>Student Union · see today’s specials</span></span></div></div></div><div class="card card-pad"><div class="section-title"><div><h2>Your project tasks</h2><p>A gentle nudge for Green Routes</p></div><button class="section-link" data-page="groups">Open team ${I('chevronRight')}</button></div><div class="activity-row" style="padding-bottom:0;border:0"><span class="activity-icon">${I('map')}</span><span class="activity-main"><strong>Photograph the north connector</strong><span>Due Nov 22 · assigned to you</span></span></div><div class="progress-line"><span style="width:28%"></span></div><div class="tiny muted" style="margin-top:8px">1 of 4 tasks complete</div></div><div class="calendar-mini">${I('info')} Sample campus information · updates aren’t live</div></aside></section>`;
}

function lostCard(item) {
  return `<article class="listing-card"><div class="listing-art ${item.tone}"><span class="art-label">${statusPill(item.kind)}</span><span class="art-icon">${I(item.icon)}</span></div><div class="listing-body"><div class="listing-title-row"><h3>${esc(item.title)}</h3></div><div class="listing-meta"><span>${esc(item.location)}</span><i class="dot-sep"></i><span>${prettyDate(item.date)}</span></div><p class="tiny" style="color:#687681;line-height:1.55;margin:0 0 11px">${esc(item.desc)}</p><div class="listing-footer"><span class="tiny muted">${esc(item.status)}</span><button class="small-action" data-detail-lost="${item.id}">View details ${I('chevronRight')}</button></div></div></article>`;
}
function renderLost() {
  let list = [...state.lostItems];
  if (state.lostTab==='lost') list=list.filter(i=>i.kind==='Lost');
  if (state.lostTab==='found') list=list.filter(i=>i.kind==='Found');
  if (state.lostTab==='mine') list=list.filter(i=>i.mine);
  if (state.lostQuery) { const q=state.lostQuery.toLowerCase(); list=list.filter(i=>`${i.title} ${i.location} ${i.category} ${i.desc}`.toLowerCase().includes(q)); }
  if (state.lostLocation!=='all') list=list.filter(i=>i.location.toLowerCase().includes(state.lostLocation));
  if (state.lostCategory!=='all') list=list.filter(i=>i.category===state.lostCategory);
  if (state.lostDate!=='all') { const days=Number(state.lostDate); const cutoff=new Date(today.getFullYear(),today.getMonth(),today.getDate()-days); list=list.filter(i=>new Date(`${i.date}T23:59:00`)>=cutoff); }
  return `${heading('lost',actionBtn('Report an item','report-lost','plus'))}<div class="toolbar"><div class="segmented"><button class="segment ${state.lostTab==='all'?'active':''}" data-lost-tab="all">All items</button><button class="segment ${state.lostTab==='lost'?'active':''}" data-lost-tab="lost">Lost</button><button class="segment ${state.lostTab==='found'?'active':''}" data-lost-tab="found">Found</button><button class="segment ${state.lostTab==='mine'?'active':''}" data-lost-tab="mine">My reports</button></div><input class="control search-control" type="search" data-filter="lost-query" value="${esc(state.lostQuery)}" placeholder="Search items or places" aria-label="Search lost and found items" /><select class="control" data-filter="lost-category" aria-label="Filter by item type"><option value="all">All item types</option>${['Electronics','Keys','Books & notes','Personal items','Other'].map(c=>`<option ${state.lostCategory===c?'selected':''}>${c}</option>`).join('')}</select><select class="control" data-filter="lost-location" aria-label="Filter by location"><option value="all">All locations</option><option value="library" ${state.lostLocation==='library'?'selected':''}>Library</option><option value="student union" ${state.lostLocation==='student union'?'selected':''}>Student Union</option><option value="garden" ${state.lostLocation==='garden'?'selected':''}>Garden</option><option value="science" ${state.lostLocation==='science'?'selected':''}>Science Building</option></select><select class="control" data-filter="lost-date" aria-label="Filter by report date"><option value="all">Any date</option><option value="7" ${state.lostDate==='7'?'selected':''}>Past 7 days</option><option value="30" ${state.lostDate==='30'?'selected':''}>Past 30 days</option></select></div><div class="inline-message" style="margin-bottom:14px">${I('info')} For privacy, public reports don’t show contact details. Claim conversations are simulated in this prototype.</div>${list.length?`<div class="item-grid">${list.map(lostCard).join('')}</div>`:`<div class="card empty-state"><div class="empty-icon">${I('key')}</div><h3>No matching reports</h3><p>Try a different filter, or add a report to help the campus community.</p><button class="btn" data-action="report-lost">Report an item ${I('plus')}</button></div>`}`;
}

function marketCard(item) {
  return `<article class="listing-card"><div class="listing-art ${item.tone}"><span class="art-label"><span class="pill teal">${esc(item.category)}</span></span><span class="art-icon">${I(item.icon)}</span></div><div class="listing-body"><div class="listing-title-row"><h3>${esc(item.title)}</h3><span class="listing-price">${fmtMoney(item.price)}</span></div><div class="listing-meta"><span>${esc(item.condition)}</span><i class="dot-sep"></i><span>${esc(item.category)}</span>${item.mine?'<i class="dot-sep"></i><span>Active listing</span>':''}</div><p class="tiny" style="color:#687681;line-height:1.55;margin:0 0 11px">${esc(item.desc)}</p><div class="listing-footer"><span class="seller-mini"><i class="seller-avatar">${esc(item.initials)}</i>${esc(item.seller)}</span>${item.mine?`<button class="small-action" data-edit-market="${item.id}">${I('sliders')} Edit</button>`:`<button class="small-action" data-detail-market="${item.id}">View item ${I('chevronRight')}</button>`}</div></div></article>`;
}
function renderMarketplace() {
  let list=[...state.listings];
  if (state.marketTab==='mine') list=list.filter(i=>i.mine);
  if (state.marketQuery) { const q=state.marketQuery.toLowerCase(); list=list.filter(i=>`${i.title} ${i.category} ${i.seller} ${i.desc}`.toLowerCase().includes(q)); }
  if (state.marketCategory!=='all') list=list.filter(i=>i.category===state.marketCategory);
  if (state.marketCondition!=='all') list=list.filter(i=>i.condition===state.marketCondition);
  if (state.marketPrice==='under20') list=list.filter(i=>i.price<20);
  if (state.marketPrice==='20plus') list=list.filter(i=>i.price>=20);
  return `${heading('marketplace',actionBtn('Create listing','new-listing','plus'))}<div class="toolbar"><div class="segmented"><button class="segment ${state.marketTab==='browse'?'active':''}" data-market-tab="browse">Browse</button><button class="segment ${state.marketTab==='mine'?'active':''}" data-market-tab="mine">My listings</button></div><input class="control search-control" type="search" data-filter="market-query" value="${esc(state.marketQuery)}" placeholder="Search student listings" aria-label="Search marketplace" /><select class="control" data-filter="market-category" aria-label="Filter by category"><option value="all">All categories</option>${['Books','Home','Art supplies','Electronics'].map(c=>`<option ${state.marketCategory===c?'selected':''}>${c}</option>`).join('')}</select><select class="control" data-filter="market-price" aria-label="Filter by price"><option value="all">Any price</option><option value="under20" ${state.marketPrice==='under20'?'selected':''}>Under $20</option><option value="20plus" ${state.marketPrice==='20plus'?'selected':''}>$20 and up</option></select><select class="control" data-filter="market-condition" aria-label="Filter by condition"><option value="all">Any condition</option>${['Like new','Very good','Good'].map(c=>`<option ${state.marketCondition===c?'selected':''}>${c}</option>`).join('')}</select></div><div class="inline-message" style="margin-bottom:14px">${I('info')} Student-to-student listings are sample content. Interest messages are not sent outside this demo.</div>${list.length?`<div class="item-grid">${list.map(marketCard).join('')}</div>`:`<div class="card empty-state"><div class="empty-icon">${I('bag')}</div><h3>${state.marketTab==='mine'?'Your shelf is waiting':'No listings found'}</h3><p>${state.marketTab==='mine'?'Create a listing to pass something useful to another student.':'Try another search or category filter.'}</p>${state.marketTab==='mine'?`<button class="btn" data-action="new-listing">Create a listing ${I('plus')}</button>`:''}</div>`}`;
}

function mapSvg() {
  const dests=state.destinations;
  const pins=dests.map(d=>`<g class="map-pin" tabindex="0" role="button" aria-label="${esc(d.name)}" data-destination="${d.id}"><circle cx="${d.x}%" cy="${d.y}%" r="${state.selectedDestination===d.id?12:9}" fill="${state.selectedDestination===d.id?'#168b83':'#fff'}" stroke="#17877d" stroke-width="2.5"/><circle cx="${d.x}%" cy="${d.y}%" r="3" fill="${state.selectedDestination===d.id?'#fff':'#168b83'}"/><text x="${d.x+2}%" y="${d.y-2}%" class="map-pin-label">${esc(d.name)}</text></g>`).join('');
  return `<svg class="map-svg" viewBox="0 0 900 540" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustrative Dayananda Sagar University campus map"><rect width="900" height="540" fill="#e9f0ea"/><path d="M0 75 C180 105 240 40 375 80 S660 130 900 65M0 480 C170 435 245 500 405 453 S690 400 900 460" fill="none" stroke="#d3e4d6" stroke-width="46"/><path d="M-30 280 C140 225 230 328 370 260 S610 190 930 300M300 -30 C330 140 460 220 420 570M665 -20 C600 160 700 280 610 570" fill="none" stroke="#fffdf8" stroke-width="32"/><path d="M-30 280 C140 225 230 328 370 260 S610 190 930 300M300 -30 C330 140 460 220 420 570M665 -20 C600 160 700 280 610 570" fill="none" stroke="#d8ded5" stroke-width="2" stroke-dasharray="4 6"/><g fill="#d7e3d7"><rect x="96" y="92" width="110" height="63" rx="12"/><rect x="465" y="98" width="130" height="76" rx="12"/><rect x="704" y="95" width="116" height="64" rx="12"/><rect x="121" y="360" width="115" height="66" rx="12"/><rect x="493" y="366" width="125" height="68" rx="12"/><rect x="708" y="362" width="105" height="65" rx="12"/></g><g fill="#b6d5ba"><ellipse cx="270" cy="180" rx="75" ry="40"/><ellipse cx="766" cy="267" rx="53" ry="38"/><ellipse cx="306" cy="410" rx="47" ry="25"/></g><path d="M${dests.find(d=>d.id==='library').x*9} ${dests.find(d=>d.id==='library').y*5.4} Q440 235 ${dests.find(d=>d.id===state.selectedDestination).x*9} ${dests.find(d=>d.id===state.selectedDestination).y*5.4}" fill="none" stroke="#168b83" stroke-width="5" stroke-linecap="round" stroke-dasharray="3 10"/>${pins}<text x="36" y="518" fill="#7e9888" font-size="11" font-family="DM Sans">FOUNDERS QUAD</text><text x="653" y="516" fill="#7e9888" font-size="11" font-family="DM Sans">GARDEN WALK</text></svg>`;
}
function renderNavigation() {
  const d=state.destinations.find(x=>x.id===state.selectedDestination)||state.destinations[0];
  return `${heading('navigation')}<div class="inline-message" style="margin-bottom:14px">${I('info')} Illustrative sample map for Dayananda Sagar University. Replace with verified campus map data before launch.</div><div class="map-layout"><div class="map-card">${mapSvg()}<span class="map-overlay-label">${I('map')} NORTHBRIDGE · SAMPLE MAP</span><div class="map-zoom"><button aria-label="Zoom in" data-action="zoom-in">+</button><button aria-label="Zoom out" data-action="zoom-out">−</button></div></div><aside class="card card-pad"><div class="section-title"><div><h2>Find a place</h2><p>Choose a destination for a walking route</p></div></div><input class="control" id="destination-search" type="search" placeholder="Search campus places" aria-label="Search destinations" /><div class="destination-list" id="destination-list">${state.destinations.map(x=>`<button class="destination-option ${x.id===state.selectedDestination?'active':''}" data-destination="${x.id}"><span class="icon-wrap">${I(x.icon)}</span><span><strong>${esc(x.name)}</strong><span>${esc(x.type)}</span></span></button>`).join('')}</div><div id="destination-detail">${destinationDetail(d)}</div></aside></div>`;
}
function destinationDetail(d) {
  return `<div class="route-banner">${I('route')}<span><strong>${esc(d.dist)} from the central quad</strong><br/>Step-free route available</span></div><div class="tiny muted" style="margin-bottom:9px"><strong style="color:var(--ink)">${esc(d.building)}</strong><br/>${esc(d.hours)}</div><ol class="route-steps"><li>Start at the central quad path</li><li>Follow the covered garden walk</li><li>Turn toward ${esc(d.name)}</li></ol>`;
}

function renderComplaints() {
  let rows=[...state.requests];
  if(state.requestTab==='open') rows=rows.filter(r=>r.status!=='Resolved');
  if(state.requestTab==='resolved') rows=rows.filter(r=>r.status==='Resolved');
  return `${heading('complaints',actionBtn('New request','new-request','plus'))}<div class="inline-message warning" style="margin-bottom:15px">${I('info')} Requests submitted here are saved only in this prototype; they aren’t sent to a university service team.</div><div class="tab-row"><button class="tab-button ${state.requestTab==='all'?'active':''}" data-request-tab="all">All requests (${state.requests.length})</button><button class="tab-button ${state.requestTab==='open'?'active':''}" data-request-tab="open">Open (${state.requests.filter(r=>r.status!=='Resolved').length})</button><button class="tab-button ${state.requestTab==='resolved'?'active':''}" data-request-tab="resolved">Resolved</button></div><div class="card table-wrap"><table class="data-table"><thead><tr><th>Request</th><th>Reference</th><th>Submitted</th><th>Category</th><th>Status</th><th></th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${esc(r.title)}</strong><div class="tiny muted" style="margin-top:4px">${esc(r.location)}</div></td><td>${esc(r.id)}</td><td>${prettyDate(r.date)}</td><td>${esc(r.category)}</td><td>${statusPill(r.status)}</td><td><button class="text-link" data-detail-request="${r.id}">Details</button></td></tr>`).join('')}</tbody></table>${rows.length?'':`<div class="empty-state"><div class="empty-icon">${I('check')}</div><h3>Nothing in this view</h3><p>New requests will show here as their status changes.</p></div>`}</div>`;
}

function projectProgress(p) { const total=p.tasks.length; const done=p.tasks.filter(t=>t.status==='done').length; return total?Math.round(done/total*100):0; }
function renderGroups() {
  const p=state.projects[0];
  const action=`<button class="btn btn-secondary" data-action="new-task">${I('plus')} Add task</button><button class="btn" data-action="new-team">${I('users')} New team</button>`;
  return `${heading('groups',action)}<div class="grid-2"><div class="card card-pad"><div class="request-detail-head"><div><span class="eyebrow"><i class="eyebrow-dot"></i> ${esc(p.course)}</span><h2 style="margin:8px 0 5px;font:700 18px 'Manrope',sans-serif">${esc(p.name)}</h2><div class="tiny muted">Deadline ${prettyDate(p.deadline)}</div></div><div class="member-stack" aria-label="${p.members.length} project members">${p.members.map(m=>`<i class="seller-avatar" title="${esc(m[1])}">${esc(m[0])}</i>`).join('')}</div></div><div class="progress-line" style="margin-top:17px"><span style="width:${projectProgress(p)}%"></span></div><div class="project-meta"><span>${projectProgress(p)}% complete</span><span>${p.members.length} team members</span><span>${p.tasks.filter(t=>t.status!=='done').length} tasks remaining</span></div></div><div class="card card-pad"><div class="section-title"><div><h2>Team workspace</h2><p>Keep responsibilities clear and manageable</p></div>${I('users')}</div><div class="activity-list"><div class="activity-row"><span class="activity-icon">${I('calendar')}</span><span class="activity-main"><strong>Next deadline</strong><span>${prettyDate(p.deadline)}</span></span></div><div class="activity-row"><span class="activity-icon">${I('chat')}</span><span class="activity-main"><strong>Shared notes</strong><span>Team updates stay in this demo</span></span></div></div></div></div><section style="margin-top:21px"><div class="section-title"><div><h2>Project tasks</h2><p>Move a task along as the team makes progress</p></div></div><div class="kanban">${[['todo','To do'],['doing','In progress'],['done','Done']].map(([status,label])=>{const tasks=p.tasks.filter(t=>t.status===status);return `<div class="kanban-column"><div class="kanban-head">${label}<span class="kanban-count">${tasks.length}</span></div>${tasks.map(t=>`<div class="task-card"><strong>${esc(t.title)}</strong><span>${esc(t.owner)} · Due ${esc(t.due)}</span>${status!=='done'?`<button class="task-toggle" data-task-done="${t.id}">Mark complete ${I('check')}</button>`:`<span class="pill blue" style="margin-top:8px">Complete</span>`}</div>`).join('')||`<div class="tiny muted" style="padding:8px 3px">Nothing here yet.</div>`}</div>`}).join('')}</div></section><section style="margin-top:22px"><div class="section-title"><div><h2>Your teams</h2><p>Projects you’re part of this term</p></div></div><div class="grid-3">${state.projects.map(x=>`<div class="card card-pad"><span class="pill ${x.id===p.id?'teal':'gray'}">${esc(x.course.split(' · ')[0])}</span><h3 style="margin:11px 0 5px;font:700 12px 'Manrope',sans-serif">${esc(x.name)}</h3><div class="tiny muted">Due ${prettyDate(x.deadline)}</div><div class="progress-line"><span style="width:${projectProgress(x)}%"></span></div><div class="project-meta"><span>${projectProgress(x)}% complete</span><span>${x.members.length} members</span></div></div>`).join('')}<button class="card empty-state" style="border-style:dashed;box-shadow:none;color:inherit" data-action="new-team"><div class="empty-icon">${I('plus')}</div><h3>Start a team</h3><p>Set up a space for a new class project.</p></button></div></section>`;
}

function eventCard(e) {
  return `<article class="listing-card"><div class="listing-art ${e.category==='Academic'?'tone-blue':e.category==='Wellbeing'?'tone-lilac':'tone-peach'}"><span class="art-label">${e.spots===0?'<span class="pill coral">Full</span>':`<span class="pill teal">${esc(e.category)}</span>`}</span><span class="art-icon">${I(e.category==='Academic'?'book':e.category==='Wellbeing'?'heart':'calendar')}</span><div style="position:absolute;right:12px;bottom:11px;display:grid;place-items:center;width:42px;height:47px;border:1px solid rgba(255,255,255,.8);border-radius:10px;color:#236d66;background:rgba(255,255,255,.88)"><strong style="font:700 15px 'Manrope'">${dayNum(e.date)}</strong><span style="font-size:8px;text-transform:uppercase;font-weight:700">${monthShort(e.date)}</span></div></div><div class="listing-body"><div class="listing-title-row"><h3>${esc(e.title)}</h3></div><div class="listing-meta"><span>${esc(e.time)}</span><i class="dot-sep"></i><span>${esc(e.venue)}</span></div><p class="tiny" style="color:#687681;line-height:1.55;margin:0 0 11px">${esc(e.desc)}</p><div class="listing-footer"><span>${e.registered?'<span class="pill blue">Registered</span>':e.spots===0?'<span class="tiny muted">No spaces left</span>':`<span class="tiny muted">${e.spots} spots open</span>`}</span><button class="small-action" data-detail-event="${e.id}">Details ${I('chevronRight')}</button></div></div></article>`;
}
function renderEvents() {
  let events=[...state.events];
  if(state.eventTab==='registered') events=events.filter(e=>e.registered);
  if(state.eventQuery) { const q=state.eventQuery.toLowerCase();events=events.filter(e=>`${e.title} ${e.venue} ${e.category} ${e.desc}`.toLowerCase().includes(q)); }
  if(state.selectedEventCategory!=='all') events=events.filter(e=>e.category===state.selectedEventCategory);
  return `${heading('events')}<div class="tab-row"><button class="tab-button ${state.eventTab==='discover'?'active':''}" data-event-tab="discover">Discover</button><button class="tab-button ${state.eventTab==='registered'?'active':''}" data-event-tab="registered">My registrations (${state.events.filter(e=>e.registered).length})</button></div><div class="toolbar"><input class="control search-control" type="search" data-filter="event-query" value="${esc(state.eventQuery)}" placeholder="Search events or venues" aria-label="Search events" /><select class="control" data-filter="event-category" aria-label="Filter event category"><option value="all">All categories</option>${['Academic','Community','Wellbeing'].map(c=>`<option ${state.selectedEventCategory===c?'selected':''}>${c}</option>`).join('')}</select><span class="calendar-mini">${I('info')} Sample events for November 2026</span></div>${events.length?`<div class="item-grid">${events.map(eventCard).join('')}</div>`:`<div class="card empty-state"><div class="empty-icon">${I('calendar')}</div><h3>${state.eventTab==='registered'?'No registrations yet':'No events match'}</h3><p>${state.eventTab==='registered'?'Register for an event and it will be easy to find here.':'Try another category or search term.'}</p>${state.eventTab==='registered'?`<button class="btn btn-secondary" data-event-tab="discover">Browse events ${I('arrow')}</button>`:''}</div>`}`;
}

function renderAppointments() {
  const upcoming=state.appointments.filter(a=>a.status==='Upcoming');
  const past=state.appointments.filter(a=>a.status!=='Upcoming');
  const dateValue = document.getElementById('appointment-date')?.value || defaultAppointmentDate;
  const slots=['9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','1:30 PM','2:00 PM','2:30 PM'];
  const slotMinutes = time => { const [clock,meridiem]=time.split(' ');let [h,m]=clock.split(':').map(Number);if(meridiem==='PM'&&h!==12)h+=12;if(meridiem==='AM'&&h===12)h=0;return h*60+m; };
  const currentMinutes=today.getHours()*60+today.getMinutes();
  const dateIsToday=dateValue===isoToday;
  return `${heading('appointments')}<div class="inline-message" style="margin-bottom:15px">${I('info')} Availability and wait times are sample data. Booking creates a local demo confirmation only.</div><div class="grid-2"><section class="card card-pad"><div class="section-title"><div><h2>Book an appointment</h2><p>Pick a department, date, and available time</p></div>${I('calendar')}</div><form id="appointment-form"><div class="form-grid"><div><label class="control-label" for="appointment-department">Department</label><select id="appointment-department" name="department" class="control" required><option>Academic advising</option><option>Student wellbeing</option><option>Financial support</option><option>Accessibility services</option><option>International student office</option></select></div><div><label class="control-label" for="appointment-date">Date</label><input id="appointment-date" class="control" name="date" type="date" min="${isoToday}" value="${dateValue}" required /></div></div><div class="slot-label">Available times · sample slots</div><div class="form-grid" style="gap:8px">${slots.map((s,i)=>{const unavailable=i===7||(dateIsToday&&slotMinutes(s)<=currentMinutes);return `<label class="appointment-slot ${unavailable?'disabled':''}" style="cursor:${unavailable?'not-allowed':'pointer'}"><span><strong>${s}</strong><span>${unavailable?'Unavailable':'Sample opening'}</span></span><input type="radio" name="time" value="${s}" ${i===1&&!unavailable?'checked':''} ${unavailable?'disabled':''} aria-label="${s}" /></label>`}).join('')}</div><div id="appointment-error" class="auth-error" role="alert" style="margin:12px 0 0"></div><div class="form-actions"><button class="btn" type="submit">Confirm appointment ${I('arrow')}</button></div></form></section><aside class="card card-pad"><div class="section-title"><div><h2>Before you book</h2><p>A few details to help you plan</p></div>${I('info')}</div><div class="activity-list"><div class="activity-row"><span class="activity-icon">${I('clock')}</span><span class="activity-main"><strong>Sample wait: about 10 min</strong><span>Academic advising desk · illustrative estimate</span></span></div><div class="activity-row"><span class="activity-icon">${I('pin')}</span><span class="activity-main"><strong>Student Services Center</strong><span>North Commons, ground floor</span></span></div><div class="activity-row"><span class="activity-icon">${I('refresh')}</span><span class="activity-main"><strong>Need to change plans?</strong><span>Your prototype booking can be cancelled in this demo.</span></span></div></div></aside></div><section style="margin-top:23px"><div class="section-title"><div><h2>Your appointments</h2><p>Upcoming visits and recent appointments</p></div></div><div class="grid-2"><div class="card card-pad"><div class="section-title"><div><h2>Upcoming</h2></div><span class="pill teal">${upcoming.length} scheduled</span></div>${upcoming.length?upcoming.map(a=>`<div class="appointment-slot"><span><strong>${esc(a.department)}</strong><span>${prettyDate(a.date)} · ${esc(a.time)} · Ref ${esc(a.id)}</span></span><button class="small-action" data-cancel-appointment="${a.id}">Cancel</button></div>`).join(''):`<div class="empty-state"><div class="empty-icon">${I('calendar')}</div><h3>No upcoming appointments</h3><p>Choose a sample time above to add one to your list.</p></div>`}</div><div class="card card-pad"><div class="section-title"><div><h2>Past appointments</h2></div></div>${past.map(a=>`<div class="appointment-slot"><span><strong>${esc(a.department)}</strong><span>${prettyDate(a.date)} · ${esc(a.time)}</span></span>${statusPill(a.status)}</div>`).join('')||'<div class="tiny muted">Past visits will appear here.</div>'}</div></div></section>`;
}

function renderAssistant() {
  return `${heading('assistant')}<div class="inline-message warning" style="margin-bottom:14px">${I('info')} Demo assistant · answers are scripted examples and don’t use live university records.</div><div class="chat-shell"><section class="card chat-card"><div class="chat-header"><span class="assistant-avatar">${I('spark')}</span><span><strong>DSU Pulse assistant</strong><span>Demo guide · Sample responses</span></span></div><div class="chat-log" id="chat-log">${state.chat.map(m=>`<div class="chat-message ${m.role==='user'?'user':''}">${esc(m.text)}<div class="chat-time">${m.role==='user'?'You':'DSU Pulse assistant'} · ${esc(m.time)}</div></div>`).join('')}</div><form class="chat-compose" id="chat-form"><label class="sr-only" for="chat-input">Ask the campus assistant</label><input id="chat-input" name="message" placeholder="Ask about campus life…" autocomplete="off" required /><button class="btn" type="submit" aria-label="Send message">${I('send')}</button></form></section><aside><div class="card card-pad"><div class="section-title"><div><h2>Try asking</h2><p>Choose a common campus question</p></div></div><div class="suggestion-list">${['Where can I report a lost item?','What events are coming up?','How do I get to the library?','How do I submit a facilities request?','Where can I book an appointment?','How do I find my project tasks?'].map(s=>`<button class="suggestion-button" data-chat-suggestion="${esc(s)}">${esc(s)}</button>`).join('')}</div></div><div class="card card-pad" style="margin-top:13px"><div class="activity-row" style="padding:0;border:0"><span class="activity-icon">${I('info')}</span><span class="activity-main"><strong>Need a direct route?</strong><span>Use the campus map and explore destinations yourself.</span><button class="section-link" data-page="navigation" style="margin-top:7px;padding:0">Open campus map ${I('chevronRight')}</button></span></div></div></aside></div>`;
}

function showToast(message, error=false) {
  const region=document.getElementById('toast-region');
  const toast=document.createElement('div'); toast.className=`toast ${error?'error':''}`; toast.innerHTML=`${I(error?'alert':'check')}<span>${esc(message)}</span>`; region.appendChild(toast);
  setTimeout(()=>toast.remove(),4200);
}
function openModal(title, subtitle, body, wide=false) {
  closeModal(); state.modal=true;
  document.body.insertAdjacentHTML('beforeend',`<div class="modal-backdrop" id="modal-backdrop" role="presentation"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" ${wide?'style="width:min(100%,680px)"':''}><header class="modal-head"><div><h2 id="modal-title">${title}</h2><p>${subtitle}</p></div><button class="modal-close" data-action="close-modal" aria-label="Close dialog">${I('close')}</button></header><div class="modal-body">${body}</div></section></div>`);
  document.querySelector('#modal-backdrop .modal-close')?.focus();
}
function closeModal() { document.getElementById('modal-backdrop')?.remove(); state.modal=null; }
function reportModal() {
  openModal('Report an item','Help a student reunite with something important.',`<form id="report-form"><div class="form-grid"><div><label class="control-label" for="report-kind">Report type</label><select class="control" id="report-kind" name="kind"><option>Lost</option><option>Found</option></select></div><div><label class="control-label" for="report-category">Item type</label><select class="control" id="report-category" name="category"><option>Electronics</option><option>Keys</option><option>Books & notes</option><option>Personal items</option><option>Other</option></select></div><div class="span-2"><label class="control-label" for="report-title">Item name</label><input class="control" id="report-title" name="title" placeholder="e.g. Blue notebook" required maxlength="70" /></div><div><label class="control-label" for="report-location">Location</label><input class="control" id="report-location" name="location" placeholder="Where was it last seen?" required /></div><div><label class="control-label" for="report-date">Date</label><input class="control" type="date" id="report-date" name="date" max="${isoToday}" value="${isoToday}" required /></div><div class="span-2"><label class="control-label" for="report-desc">Description</label><textarea class="control" id="report-desc" name="desc" placeholder="Add helpful details without sharing private information." required maxlength="280"></textarea><div class="form-help">Keep personal contact information private. Claims are handled in this demo.</div></div></div><div class="form-actions"><button class="btn btn-secondary" type="button" data-action="close-modal">Cancel</button><button class="btn" type="submit">Submit report ${I('arrow')}</button></div></form>`);
}
function listingModal(item=null) {
  openModal(item?'Edit listing':'Create a listing','Pass a useful item along to another Dayananda Sagar University student.',`<form id="listing-form" data-listing-id="${item?item.id:''}"><div class="form-grid"><div class="span-2"><label class="control-label" for="listing-title">Item title</label><input class="control" id="listing-title" name="title" value="${esc(item?.title||'')}" placeholder="What are you selling?" required maxlength="70" /></div><div><label class="control-label" for="listing-price">Price (USD)</label><input class="control" id="listing-price" name="price" type="number" min="0" max="10000" value="${item?.price||''}" placeholder="0" required /></div><div><label class="control-label" for="listing-condition">Condition</label><select class="control" id="listing-condition" name="condition" required>${['Like new','Very good','Good'].map(x=>`<option ${item?.condition===x?'selected':''}>${x}</option>`).join('')}</select></div><div><label class="control-label" for="listing-category">Category</label><select class="control" id="listing-category" name="category" required>${['Books','Home','Art supplies','Electronics','Other'].map(x=>`<option ${item?.category===x?'selected':''}>${x}</option>`).join('')}</select></div><div class="span-2"><label class="control-label" for="listing-desc">Description</label><textarea class="control" id="listing-desc" name="desc" placeholder="Share condition, useful details, and a campus-friendly handoff idea." required maxlength="280">${esc(item?.desc||'')}</textarea></div></div><div class="inline-message" style="margin-top:12px">Listing images are represented with a category illustration in this prototype.</div><div class="form-actions"><button class="btn btn-secondary" type="button" data-action="close-modal">Cancel</button><button class="btn" type="submit">Save listing ${I('arrow')}</button></div></form>`);
}
function requestModal() {
  openModal('New campus request','Describe the issue and where it needs attention.',`<form id="complaint-form"><div class="form-grid"><div class="span-2"><label class="control-label" for="request-title">Request title</label><input class="control" id="request-title" name="title" placeholder="A short summary of the issue" required maxlength="90" /></div><div><label class="control-label" for="request-category">Category</label><select class="control" id="request-category" name="category"><option>Facilities</option><option>Technology</option><option>Safety</option><option>Sustainability</option><option>Accessibility</option><option>Other</option></select></div><div><label class="control-label" for="request-priority">Priority</label><select class="control" id="request-priority" name="priority"><option>Normal</option><option>Low</option><option>High</option></select></div><div class="span-2"><label class="control-label" for="request-location">Campus location</label><input class="control" id="request-location" name="location" placeholder="Building and room or nearby landmark" required /></div><div class="span-2"><label class="control-label" for="request-desc">What happened?</label><textarea class="control" id="request-desc" name="desc" placeholder="Add details that will help the team understand the request." required maxlength="500"></textarea></div></div><div class="inline-message warning" style="margin-top:12px">This creates a sample ticket in your session. It won’t be sent to university staff.</div><div class="form-actions"><button class="btn btn-secondary" type="button" data-action="close-modal">Cancel</button><button class="btn" type="submit">Create request ${I('arrow')}</button></div></form>`);
}
function teamModal() {
  openModal('Create a team','Start a space for a class project or shared task.',`<form id="team-form"><div class="form-grid"><div class="span-2"><label class="control-label" for="team-name">Team or project name</label><input class="control" id="team-name" name="name" placeholder="e.g. Studio research sprint" required /></div><div><label class="control-label" for="team-course">Course or context</label><input class="control" id="team-course" name="course" placeholder="e.g. DES 214" required /></div><div><label class="control-label" for="team-deadline">Deadline</label><input class="control" id="team-deadline" name="deadline" type="date" min="${isoToday}" required /></div><div class="span-2"><label class="control-label" for="team-members">Invite students (optional)</label><input class="control" id="team-members" name="members" placeholder="Student emails separated by commas" /><div class="form-help">Invitations are not sent in this demo.</div></div></div><div class="form-actions"><button class="btn btn-secondary" type="button" data-action="close-modal">Cancel</button><button class="btn" type="submit">Create team ${I('arrow')}</button></div></form>`);
}
function taskModal() {
  openModal('Add a task','Make the next step easy for the team to see.',`<form id="task-form"><div class="form-grid"><div class="span-2"><label class="control-label" for="task-title">Task</label><input class="control" id="task-title" name="title" placeholder="What needs to get done?" required maxlength="90" /></div><div><label class="control-label" for="task-owner">Assign to</label><input class="control" id="task-owner" name="owner" placeholder="Student name" value="Maya" /></div><div><label class="control-label" for="task-due">Due date</label><input class="control" id="task-due" name="due" type="date" min="${isoToday}" required /></div></div><div class="form-actions"><button class="btn btn-secondary" type="button" data-action="close-modal">Cancel</button><button class="btn" type="submit">Add task ${I('arrow')}</button></div></form>`);
}

function showDetail(type, id) {
  if(type==='lost') {
    const item=state.lostItems.find(x=>x.id===id); if(!item)return;
    openModal(item.title,`${item.kind} · ${prettyDate(item.date)}`,`<div class="listing-art ${item.tone}" style="height:155px;border-radius:12px"><span class="art-icon">${I(item.icon)}</span></div><div class="grid-2" style="margin-top:15px"><div><div class="eyebrow"><i class="eyebrow-dot"></i> ${esc(item.category)}</div><p style="font-size:12px;line-height:1.7;color:#536270">${esc(item.desc)}</p></div><div><div class="tiny muted">Last seen / found at</div><strong style="display:block;margin:5px 0 12px;font-size:11px">${esc(item.location)}</strong>${statusPill(item.status)}</div></div><div class="inline-message" style="margin-top:14px">Personal contact details are kept private. The claim action is a demo and does not contact the reporter.</div><div class="form-actions"><button class="btn btn-secondary" data-action="close-modal">Close</button><button class="btn" data-action="claim-item">${I('chat')} Express interest</button></div>`); return;
  }
  if(type==='market') {
    const item=state.listings.find(x=>x.id===id); if(!item)return;
    openModal(item.title,`${item.category} · ${item.condition}`,`<div class="listing-art ${item.tone}" style="height:160px;border-radius:12px"><span class="art-icon">${I(item.icon)}</span></div><div class="request-detail-head" style="margin-top:15px"><div><span class="tiny muted">Asking price</span><div style="font:700 23px 'Manrope';color:var(--teal-dark)">${fmtMoney(item.price)}</div></div><span class="seller-mini"><i class="seller-avatar">${esc(item.initials)}</i>${esc(item.seller)} · Student</span></div><p style="font-size:12px;line-height:1.7;color:#536270">${esc(item.desc)}</p><div class="inline-message">Interest is saved only in this demo. No message is sent to ${esc(item.seller)}.</div><div class="form-actions"><button class="btn btn-secondary" data-action="close-modal">Close</button><button class="btn" data-action="express-interest" data-item="${item.id}">${I('chat')} Express interest</button></div>`); return;
  }
  if(type==='event') {
    const e=state.events.find(x=>x.id===id); if(!e)return;
    openModal(e.title,`${prettyDate(e.date)} · ${e.time}`,`<div class="listing-art ${e.category==='Academic'?'tone-blue':e.category==='Wellbeing'?'tone-lilac':'tone-peach'}" style="height:150px;border-radius:12px"><span class="art-icon">${I('calendar')}</span></div><div class="grid-2" style="margin-top:15px"><div><span class="pill teal">${esc(e.category)}</span><p style="font-size:12px;line-height:1.7;color:#536270">${esc(e.desc)}</p></div><div><div class="tiny muted">Where</div><strong style="display:block;margin:5px 0 12px;font-size:11px">${esc(e.venue)}</strong><div class="tiny muted">Availability</div><strong style="display:block;margin-top:5px;font-size:11px">${e.spots?`${e.spots} sample spots open`:'Full'}</strong></div></div><div class="inline-message">Registration is simulated and stays in this session.</div><div class="form-actions"><button class="btn btn-secondary" data-action="close-modal">Close</button>${e.spots===0&&!e.registered?'<button class="btn" disabled>Event full</button>':`<button class="btn" data-register-event="${e.id}">${I(e.registered?'check':'calendar')} ${e.registered?'Cancel registration':'Register'}</button>`}</div>`); return;
  }
  if(type==='request') {
    const r=state.requests.find(x=>x.id===id); if(!r)return;
    openModal(`${r.id} · ${r.title}`,`${r.category} · Submitted ${prettyDate(r.date)}`,`<div class="request-detail-head"><div><span class="tiny muted">Location</span><strong style="display:block;margin-top:5px;font-size:11px">${esc(r.location)}</strong></div>${statusPill(r.status)}</div><p style="color:#5a6874;font-size:11px;line-height:1.7">${esc(r.desc)}</p><div class="tiny muted" style="margin-top:17px;font-weight:700;text-transform:uppercase;letter-spacing:.6px">Status updates</div><ol class="timeline">${r.updates.map(u=>`<li><strong>${esc(u[0])}</strong>${esc(u[1])}<span>${esc(u[2])}</span></li>`).join('')}</ol><div class="inline-message warning" style="margin-top:17px">This request timeline is a sample. Updates are not provided by a real university team.</div><div class="form-actions"><button class="btn btn-secondary" data-action="close-modal">Close</button></div>`,true);
  }
}

function navigate(page) {
  if(!pageInfo[page]) return;
  state.activePage=page; state.menu=null;
  document.getElementById('menu-profile')?.classList.remove('is-open'); document.getElementById('menu-notifications')?.classList.remove('is-open');
  closeMobileMenu();
  document.querySelectorAll('.nav-link').forEach(n=>{n.classList.toggle('active',n.dataset.page===page); if(n.dataset.page===page)n.setAttribute('aria-current','page');else n.removeAttribute('aria-current');});
  renderPage(); window.scrollTo({top:0,behavior:'smooth'});
}
function closeMobileMenu() {
  document.getElementById('sidebar')?.classList.remove('is-open');
  document.getElementById('mobile-scrim')?.classList.remove('is-visible');
  const toggle=document.querySelector('.mobile-menu');
  toggle?.setAttribute('aria-expanded','false');
  toggle?.setAttribute('aria-label','Open navigation');
}
function handleGlobalSearch(value) {
  const pop=document.getElementById('search-popover'); if(!pop)return;
  const q=value.trim().toLowerCase();
  if(!q){pop.classList.remove('is-open');return;}
  const pageResults=navItems.filter(n=>`${n.label} ${pageInfo[n.id][0]} ${pageInfo[n.id][1]}`.toLowerCase().includes(q)).map(n=>({label:n.label,sub:'Campus service',icon:n.icon,page:n.id}));
  const content=[];
  state.events.filter(e=>`${e.title} ${e.venue}`.toLowerCase().includes(q)).slice(0,2).forEach(e=>content.push({label:e.title,sub:'Event',icon:'calendar',page:'events'}));
  state.lostItems.filter(i=>`${i.title} ${i.location}`.toLowerCase().includes(q)).slice(0,2).forEach(i=>content.push({label:i.title,sub:'Lost & found',icon:'key',page:'lost'}));
  state.listings.filter(i=>`${i.title} ${i.category}`.toLowerCase().includes(q)).slice(0,2).forEach(i=>content.push({label:i.title,sub:'Marketplace',icon:'bag',page:'marketplace'}));
  const results=[...pageResults,...content].slice(0,6);
  pop.innerHTML=results.length?results.map(r=>`<button class="search-result" data-search-page="${r.page}">${I(r.icon)}<span><strong>${esc(r.label)}</strong><span class="muted" style="margin-left:7px">${esc(r.sub)}</span></span></button>`).join(''):`<div class="search-empty">No matches. Try a service, event, or item.</div>`;
  pop.classList.add('is-open');
}
function assistantReply(text) {
  const t=text.toLowerCase();
  if(t.includes('lost')||t.includes('found')||t.includes('item')) return 'Open Lost & found from the student hub to browse recent reports. You can also add a lost or found report. This demo keeps reports in your session and doesn’t share personal contact details.';
  if(t.includes('event')||t.includes('happen')) return `The next sample event is ${state.events[0].title} on ${prettyDate(state.events[0].date)} at ${state.events[0].time}. Browse Events to see the full list and try a demo registration.`;
  if(t.includes('library')||t.includes('way')||t.includes('map')||t.includes('direction')) return 'The East Library is on the Library Quarter side of the central quad. Open Campus map to select the library and view an illustrative walking route.';
  if(t.includes('complaint')||t.includes('request')||t.includes('facility')||t.includes('issue')) return 'Use Requests & reports to create a sample campus ticket. Add the category, building location, details, and a priority; the ticket and its updates remain local to this prototype.';
  if(t.includes('appointment')||t.includes('book')||t.includes('time')||t.includes('advis')) return 'Open Appointments, choose a department and a future date, then select an available sample time. The confirmation is only stored in this demo session.';
  if(t.includes('project')||t.includes('task')||t.includes('team')||t.includes('group')) return 'Your Green Routes project is on the Group projects page. It includes a sample task board, team members, and due dates. You can add a task or mark one complete.';
  if(t.includes('market')||t.includes('sell')||t.includes('buy')) return 'Browse student listings in the Marketplace. You can filter by category and condition, view item details, express interest (demo only), or add your own sample listing.';
  return 'I can help with the campus map, lost and found, marketplace, requests, group projects, events, and appointments. Try one of the suggested questions or open the matching service from navigation.';
}
function sendChat(text) {
  const clean=text.trim(); if(!clean)return;
  state.chat.push({role:'user',text:clean,time:timeNow()});
  state.chat.push({role:'assistant',text:assistantReply(clean),time:timeNow()});
  renderPage(); const log=document.getElementById('chat-log');if(log)log.scrollTop=log.scrollHeight;
}

document.addEventListener('click', e => {
  const target=e.target.closest('button,#mobile-scrim,[data-page],[data-destination],[data-detail-lost],[data-detail-market],[data-edit-market],[data-detail-event],[data-detail-request],[data-register-event],[data-chat-suggestion],[data-task-done],[data-cancel-appointment],[data-search-page]');
  if(!target)return;
  if(target.dataset.page){e.preventDefault();navigate(target.dataset.page);return;}
  if(target.dataset.accountType){state.accountType=target.dataset.accountType;renderAuth();return;}
  if(target.dataset.searchPage){navigate(target.dataset.searchPage);document.getElementById('global-search-input').value='';document.getElementById('search-popover')?.classList.remove('is-open');return;}
  if(target.dataset.menuToggle){
    const key=target.dataset.menuToggle;document.querySelectorAll('.utility-menu').forEach(m=>m.classList.remove('is-open'));const menu=document.getElementById(`menu-${key}`);menu?.classList.toggle('is-open');state.menu=menu?.classList.contains('is-open')?key:null;return;
  }
  if(target.dataset.lostTab){state.lostTab=target.dataset.lostTab;renderPage();return;}
  if(target.dataset.marketTab){state.marketTab=target.dataset.marketTab;renderPage();return;}
  if(target.dataset.requestTab){state.requestTab=target.dataset.requestTab;renderPage();return;}
  if(target.dataset.eventTab){state.eventTab=target.dataset.eventTab;renderPage();return;}
  if(target.dataset.destination){state.selectedDestination=target.dataset.destination;renderPage();return;}
  if(target.dataset.detailLost){showDetail('lost',target.dataset.detailLost);return;}
  if(target.dataset.detailMarket){showDetail('market',target.dataset.detailMarket);return;}
  if(target.dataset.editMarket){const item=state.listings.find(x=>x.id===target.dataset.editMarket);if(item)listingModal(item);return;}
  if(target.dataset.detailEvent){showDetail('event',target.dataset.detailEvent);return;}
  if(target.dataset.detailRequest){showDetail('request',target.dataset.detailRequest);return;}
  if(target.dataset.registerEvent){const ev=state.events.find(x=>x.id===target.dataset.registerEvent);if(ev){ev.registered=!ev.registered;if(ev.registered)ev.spots=Math.max(0,ev.spots-1);else ev.spots++;closeModal();renderPage();showToast(ev.registered?'Registration saved in this demo.':'Demo registration cancelled.');}return;}
  if(target.dataset.chatSuggestion){sendChat(target.dataset.chatSuggestion);return;}
  if(target.dataset.taskDone){for(const p of state.projects){const task=p.tasks.find(t=>t.id===target.dataset.taskDone);if(task){task.status='done';break;}}renderPage();showToast('Task marked complete in your demo workspace.');return;}
  if(target.dataset.cancelAppointment){state.appointments=state.appointments.filter(a=>a.id!==target.dataset.cancelAppointment);renderPage();showToast('Demo appointment cancelled.');return;}
  const action=target.dataset.action;
  if(action==='toggle-password') {state.passwordShown=!state.passwordShown;const input=document.getElementById('password');if(input)input.type=state.passwordShown?'text':'password';target.innerHTML=I(state.passwordShown?'eyeOff':'eye');target.setAttribute('aria-label',state.passwordShown?'Hide password':'Show password');return;}
  if(action==='recover'){state.authScreen='recovery';renderAuth();return;}
  if(action==='auth-back'){state.authScreen='login';renderAuth();return;}
  if(action==='demo-signin'){state.user=state.accountType==='admin'?{name:'Jordan Lee',email:'jordan.lee@dsu.edu.in',id:'ADM-104',major:'Campus Services',year:'Admin'}:{name:'Maya Chen',email:'maya.chen@student.dsu.edu.in',id:'S2408172',major:'Environmental Design',year:'Year 2'};state.authenticated=true;state.activePage='dashboard';renderShell();showToast(`Welcome to the DSU Pulse ${state.accountType} demo.`);return;}
  if(action==='signout'){state.authenticated=false;state.authScreen='login';state.menu=null;renderAuth();return;}
  if(action==='open-mobile'){document.getElementById('sidebar')?.classList.add('is-open');document.getElementById('mobile-scrim')?.classList.add('is-visible');target.setAttribute('aria-expanded','true');target.setAttribute('aria-label','Close navigation');return;}
  if(action==='close-mobile'){closeMobileMenu();return;}
  if(action==='close-modal'){closeModal();return;}
  if(action==='report-lost'){reportModal();return;}
  if(action==='new-listing'){listingModal();return;}
  if(action==='new-request'){requestModal();return;}
  if(action==='new-team'){teamModal();return;}
  if(action==='new-task'){taskModal();return;}
  if(action==='profile'){closeModal();openModal('Student profile','Your DSU Pulse student account information.',`<div class="activity-row" style="padding-top:0"><span class="avatar">MC</span><span class="activity-main"><strong>${esc(state.user.name)}</strong><span>${esc(state.user.email)}</span></span></div><div class="table-wrap"><table class="data-table"><tbody><tr><td>University ID</td><td><strong>${esc(state.user.id)}</strong></td></tr><tr><td>Program</td><td><strong>${esc(state.user.major)}</strong></td></tr><tr><td>Year</td><td><strong>${esc(state.user.year)}</strong></td></tr><tr><td>Access</td><td>Student demo</td></tr></tbody></table></div><div class="inline-message" style="margin-top:13px">Profile details are sample content for the prototype.</div>`);return;}
  if(action==='express-interest'||action==='claim-item'){closeModal();showToast('Interest saved locally. No message was sent.');return;}
  if(action==='zoom-in'||action==='zoom-out'){showToast('Illustrative map zoom controls are for preview only.');return;}
});

document.addEventListener('input', e => {
  const el=e.target;
  if(el.id==='global-search-input'){handleGlobalSearch(el.value);return;}
  if(el.dataset.filter==='lost-query'){state.lostQuery=el.value;const pos=el.selectionStart;renderPage();const n=document.querySelector('[data-filter="lost-query"]');if(n){n.focus();n.setSelectionRange(pos,pos);}return;}
  if(el.dataset.filter==='market-query'){state.marketQuery=el.value;const pos=el.selectionStart;renderPage();const n=document.querySelector('[data-filter="market-query"]');if(n){n.focus();n.setSelectionRange(pos,pos);}return;}
  if(el.dataset.filter==='event-query'){state.eventQuery=el.value;const pos=el.selectionStart;renderPage();const n=document.querySelector('[data-filter="event-query"]');if(n){n.focus();n.setSelectionRange(pos,pos);}return;}
  if(el.id==='destination-search'){
    const q=el.value.toLowerCase();document.querySelectorAll('.destination-option').forEach(btn=>{btn.style.display=btn.innerText.toLowerCase().includes(q)?'flex':'none';});return;
  }
});
document.addEventListener('change', e => {
  const el=e.target;
  if(el.dataset.filter==='lost-location'){state.lostLocation=el.value;renderPage();}
  if(el.dataset.filter==='lost-category'){state.lostCategory=el.value;renderPage();}
  if(el.dataset.filter==='lost-date'){state.lostDate=el.value;renderPage();}
  if(el.dataset.filter==='market-category'){state.marketCategory=el.value;renderPage();}
  if(el.dataset.filter==='market-condition'){state.marketCondition=el.value;renderPage();}
  if(el.dataset.filter==='market-price'){state.marketPrice=el.value;renderPage();}
  if(el.dataset.filter==='event-category'){state.selectedEventCategory=el.value;renderPage();}
  if(el.id==='appointment-date'){
    const chosen=el.value;if(chosen&&chosen<isoToday){el.value=isoToday;showToast('Choose today or a future date.',true);}
    renderPage();
  }
});
document.addEventListener('submit', e => {
  const form=e.target; e.preventDefault();
  if(form.id==='signin-form'){
    const identity=form.identity.value.trim();const password=form.password.value;const error=document.getElementById('signin-error');
    if(!identity||!password){error.textContent='Enter your student email or ID and password to continue.';error.classList.add('is-visible');(!identity?form.identity:form.password).focus();return;}
    if(password.length<6){error.textContent='Use at least 6 characters for the demo password.';error.classList.add('is-visible');form.password.focus();return;}
    const btn=document.getElementById('signin-submit');btn.disabled=true;btn.innerHTML=`${I('refresh')} Opening your student hub…`;
    const name=identity.includes('@')?identity.split('@')[0].split(/[._-]/).map(x=>x.charAt(0).toUpperCase()+x.slice(1)).join(' '):'Student';
    state.user={name:name==='Maya Chen'?'Maya Chen':name,email:identity.includes('@')?identity:`${identity}@${state.accountType==='student'?'student.':''}dsu.edu.in`,id:identity.includes('@')?(state.accountType==='admin'?'ADM-104':'S2408172'):identity,major:state.accountType==='admin'?'Campus Services':'Environmental Design',year:state.accountType==='admin'?'Admin':'Year 2'};
    setTimeout(()=>{state.authenticated=true;state.activePage='dashboard';renderShell();showToast('You’re signed in to the DSU Pulse demo.');},650);return;
  }
  if(form.id==='recovery-form'){
    const identity=form.identity.value.trim();const err=document.getElementById('recovery-error');if(!identity){err.textContent='Enter your student email or university ID.';err.classList.add('is-visible');form.identity.focus();return;}document.getElementById('recovery-success').classList.add('is-visible');return;
  }
  if(form.id==='report-form'){
    const fd=new FormData(form);const item={id:`lf${Date.now()}`,title:fd.get('title').trim(),kind:fd.get('kind'),location:fd.get('location').trim(),date:fd.get('date'),category:fd.get('category'),desc:fd.get('desc').trim(),status:fd.get('kind')==='Found'?'Waiting to be claimed':'Reported lost',tone:fd.get('kind')==='Found'?'tone-yellow':'tone-blue',icon:fd.get('category')==='Keys'?'key':fd.get('category')==='Electronics'?'laptop':fd.get('category')==='Books & notes'?'book':'box',mine:true};state.lostItems.unshift(item);closeModal();navigate('lost');state.lostTab='mine';renderPage();showToast('Your report is saved in this demo.');return;
  }
  if(form.id==='listing-form'){
    const fd=new FormData(form);const id=form.dataset.listingId;const category=fd.get('category');const item={id:id||`m${Date.now()}`,title:fd.get('title').trim(),price:Number(fd.get('price')),condition:fd.get('condition'),category,seller:state.user.name.split(' ')[0],initials:state.user.name.split(' ').map(x=>x[0]).join('').slice(0,2).toUpperCase(),tone:category==='Books'?'tone-blue':category==='Electronics'?'tone-lilac':category==='Home'?'tone-yellow':'tone-peach',icon:category==='Books'?'book':category==='Electronics'?'laptop':category==='Home'?'coffee':'image',desc:fd.get('desc').trim(),mine:true,status:'Active'};const index=state.listings.findIndex(x=>x.id===id);if(index>=0)state.listings[index]=item;else state.listings.unshift(item);closeModal();state.marketTab='mine';navigate('marketplace');showToast('Listing saved in your demo workspace.');return;
  }
  if(form.id==='complaint-form'){
    const fd=new FormData(form);const id=`NB-${String(24100+state.requests.length).padStart(5,'0')}`;state.requests.unshift({id,title:fd.get('title').trim(),category:fd.get('category'),location:fd.get('location').trim(),date:isoToday,priority:fd.get('priority'),status:'Received',desc:fd.get('desc').trim(),updates:[['Received','Your report was added to the demo request list.',`${monthShort(isoToday)} ${dayNum(isoToday)} · ${timeNow()}`]],mine:true});closeModal();navigate('complaints');showToast(`Sample request ${id} created for this session.`);return;
  }
  if(form.id==='team-form'){
    const fd=new FormData(form);state.projects.unshift({id:`p${Date.now()}`,name:fd.get('name').trim(),course:fd.get('course').trim(),deadline:fd.get('deadline'),members:[['MC','Maya']],tasks:[]});closeModal();renderPage();showToast('Your sample team is ready. No invitations were sent.');return;
  }
  if(form.id==='task-form'){
    const fd=new FormData(form);const due=fd.get('due');state.projects[0].tasks.push({id:`t${Date.now()}`,title:fd.get('title').trim(),status:'todo',due:prettyDate(due),owner:fd.get('owner').trim()||'Maya'});closeModal();renderPage();showToast('Task added to your demo project.');return;
  }
  if(form.id==='appointment-form'){
    const fd=new FormData(form);const error=document.getElementById('appointment-error');const date=fd.get('date');const time=fd.get('time');if(!time){error.textContent='Choose one of the available sample times.';error.classList.add('is-visible');return;}if(!date||date<isoToday){error.textContent='Choose today or a future date.';error.classList.add('is-visible');return;}const id=`A-${Math.floor(1000+Math.random()*8999)}`;state.appointments.unshift({id,department:fd.get('department'),date,time,status:'Upcoming'});renderPage();showToast(`Appointment ${id} confirmed in this demo.`);return;
  }
  if(form.id==='chat-form'){const text=form.message.value;sendChat(text);return;}
});
document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){closeModal();document.querySelectorAll('.utility-menu').forEach(m=>m.classList.remove('is-open'));document.getElementById('search-popover')?.classList.remove('is-open');closeMobileMenu();}
  if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)&&state.authenticated){e.preventDefault();document.getElementById('global-search-input')?.focus();}
  if((e.key==='Enter'||e.key===' ')&&e.target.matches('.map-pin')){e.preventDefault();state.selectedDestination=e.target.dataset.destination;renderPage();}
});
document.addEventListener('click', e=>{
  if(!e.target.closest('.menu-anchor') && !e.target.closest('[data-menu-toggle]')) document.querySelectorAll('.utility-menu').forEach(m=>m.classList.remove('is-open'));
  if(!e.target.closest('.global-search')) document.getElementById('search-popover')?.classList.remove('is-open');
  if(e.target.id==='modal-backdrop') closeModal();
});

renderAuth();
