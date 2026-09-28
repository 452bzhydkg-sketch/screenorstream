
    // ══════════════════════════════════════════
    // PILLAR DATA
    // ══════════════════════════════════════════
    const pillars = [
      {
        id:'V', name:'Visual Scale', weight:28, icon:'◈',
        sub:'Spectacle, format & cinematography',
        why:'The most measurable reason a screen matters. Lens choice, filming format, VFX density, and cinematographer pedigree are all objectively verifiable — and they directly determine how much the image degrades at home.',
        core:[
          {n:'Filming format (IMAX 65mm / 35mm / digital)',s:'Studio tech sheet',w:'PRE'},
          {n:'Native IMAX vs post-converted',s:'Exhibitor / IMAX Corp',w:'PRE'},
          {n:'Aspect ratio (native + any in-film changes)',s:'Studio / DP interview',w:'PRE'},
          {n:'HDR / Dolby Vision master confirmed',s:'Studio tech sheet',w:'PRE'},
          {n:'Cinematographer career score (weighted avg.)',s:'IMDb + BoxOfficeMojo',w:'PRE'},
          {n:'Production budget tier (proxy for visual ambition)',s:'Confirmed / estimated',w:'PRE'},
          {n:'VFX studio tier + headcount (credited)',s:'Production credits',w:'PRE'},
          {n:'Location filming % vs stage',s:'BTS / production notes',w:'PRE'},
          {n:'Frame rate (24 / 48 / 60fps)',s:'Tech sheet',w:'PRE'},
          {n:'Practical vs CGI ratio (trailer analysis)',s:'Trailer frame analysis',w:'PRE'},
          {n:'Production design dept size (credited)',s:'Credits',w:'PRE'},
          {n:'Trailer visual complexity index (SoS internal score)',s:'SoS analysis',w:'PRE'},
        ],
        enhanced:[
          {n:'Dark / night scene ratio (streaming compression risk)',s:'Trailer + press',w:'PRE'},
          {n:'Anamorphic / spherical lens confirmed',s:'DP interview',w:'PRE'},
          {n:'Avg. visual elements per frame (VFX density)',s:'Frame analysis',w:'POST'},
          {n:'Costume / practical FX dept scale',s:'Credits + press',w:'PRE'},
        ]
      },
      {
        id:'A', name:'Audio Design', weight:22, icon:'◉',
        sub:'Sound, score & immersive mix',
        why:'Dolby Atmos in a calibrated theater is a categorically different experience than any home setup. This pillar has the most technically defensible data — certification, mixer pedigree, and LFE intensity are all hard specs.',
        core:[
          {n:'Dolby Atmos / DTS:X certification confirmed',s:'Studio tech sheet',w:'PRE'},
          {n:'Composer career score (prior films weighted avg.)',s:'IMDb / RT',w:'PRE'},
          {n:'Original score vs licensed music ratio',s:'Soundtrack announcement',w:'PRE'},
          {n:'Sound dept Oscar / BAFTA / MPSE history',s:'Academy DB',w:'PRE'},
          {n:'Genre LFE dependency (action/horror/sci-fi = high)',s:'Genre classification',w:'PRE'},
          {n:'IMAX audio remaster confirmed',s:'IMAX / studio PR',w:'PRE'},
        ],
        enhanced:[
          {n:'Number of distinct audio environments',s:'Script / production',w:'PRE'},
          {n:'Re-recording mixer career average',s:'Credits',w:'PRE'},
          {n:'Bass-dependent scene count (from early screenings)',s:'Press / screenings',w:'POST'},
          {n:'Score album released (signals music confidence)',s:'Label / Spotify',w:'PRE'},
        ]
      },
      {
        id:'CE', name:'Cinematic Experience', weight:18, icon:'◇',
        sub:'Director craft, editing & format design',
        why:'Some directors make movies for theaters and some make movies for screens. Villeneuve, Nolan, Spielberg, Cameron — their filmographies prove theatrical intent. This pillar quantifies that through career data and film-specific signals.',
        core:[
          {n:'Director theatrical experience index (career weighted)',s:'Filmography DB',w:'PRE'},
          {n:'Director prior SoS Theatrical Score avg.',s:'SoS internal DB',w:'PRE'},
          {n:'Editor career pacing score (prior films)',s:'IMDb / credits',w:'PRE'},
          {n:'Runtime (optimal bracket: 90–150 min peak)',s:'Confirmed runtime',w:'PRE'},
          {n:'Exhibition format count (Dolby, 4DX, PLF, ScreenX)',s:'Exhibitor data',w:'PRE'},
          {n:'Premium large-format screen % of total bookings',s:'Exhibitor data',w:'PRE'},
          {n:'Crowd-reactive genre flag (horror / comedy / action)',s:'Genre classification',w:'PRE'},
          {n:'Opening sequence spectacle rating (SoS trailer score)',s:'SoS trailer analysis',w:'PRE'},
        ],
        enhanced:[
          {n:'Long-take / oner presence confirmed',s:'Director interview',w:'PRE'},
          {n:'Avg. scene length (pacing index)',s:'Edit analysis',w:'POST'},
          {n:'Practical stunt %',s:'Production / stunt coordinator',w:'PRE'},
          {n:'Emotional arc communal suitability (1–10)',s:'Synopsis + SoS analysis',w:'PRE'},
        ]
      },
      {
        id:'CM', name:'Cultural Momentum', weight:16, icon:'◈',
        sub:'Buzz, franchise power & social gravity',
        why:'A film with a 94 on the other pillars that nobody knows about has a very different recommendation than Avengers: Endgame. Cultural momentum measures how much the shared moment of seeing it together adds to the experience — and that\'s entirely data-measurable.',
        core:[
          {n:'Trailer 24hr view count (main theatrical trailer)',s:'YouTube',w:'PRE'},
          {n:'Trailer 7-day cumulative view count',s:'YouTube',w:'PRE'},
          {n:'Google Trends 90-day velocity (slope)',s:'Google Trends API',w:'PRE'},
          {n:'Social mention volume (X + Reddit + TikTok combined)',s:'Social API',w:'PRE'},
          {n:'Franchise position (origin / sequel / finale)',s:'Metadata',w:'PRE'},
          {n:'IP source fandom size (book / game / prior films)',s:'Community data',w:'PRE'},
          {n:'Advance ticket sales velocity',s:'Fandango / AMC API',w:'PRE'},
          {n:'Subreddit subscriber count + 30-day growth rate',s:'Reddit API',w:'PRE'},
          {n:'Awards season slot (Cannes / Venice / TIFF)',s:'Festival calendar',w:'PRE'},
        ],
        enhanced:[
          {n:'Cast aggregate social following (top 3 leads)',s:'Instagram / X',w:'PRE'},
          {n:'Press junket coverage volume',s:'Media tracker',w:'PRE'},
          {n:'TikTok hashtag velocity (7-day slope)',s:'TikTok',w:'PRE'},
          {n:'Meme / viral clip spread rate pre-release',s:'Social API',w:'PRE'},
        ]
      },
      {
        id:'N', name:'Narrative Lens', weight:10, icon:'○',
        sub:'Story type & communal viewing impact',
        why:'Horror is better with a crowd. So is a big comedy. An intimate character study is not. Genre type and story structure have a measurable effect on how much the theatrical setting enhances the film — separate from the technical pillars.',
        core:[
          {n:'Genre communal experience multiplier',s:'Genre DB',w:'PRE'},
          {n:'Spoiler-sensitivity tier (high = urgency to see first)',s:'Synopsis / press',w:'PRE'},
          {n:'Thematic scope (intimate ↔ epic, scored 1–10)',s:'Synopsis + SoS analysis',w:'PRE'},
          {n:'Screenplay pedigree (writer prior film scores)',s:'WGA / credits',w:'PRE'},
        ],
        enhanced:[
          {n:'Climax / twist dependency score',s:'Script analysis / press',w:'PRE'},
          {n:'Second-viewing reward index',s:'Director notes / reviews',w:'POST'},
        ]
      },
      {
        id:'D', name:'Distribution Dynamics', weight:6, icon:'◫',
        sub:'Window, access & streaming timeline',
        why:'A day-and-date release fundamentally changes the theater proposition — if you can watch it at home tonight for free, the ticket costs more to justify. Conversely, a 90-day exclusive window adds real urgency.',
        core:[
          {n:'Confirmed theatrical window (days before streaming)',s:'Studio announcement',w:'PRE'},
          {n:'Day-and-date streaming flag',s:'Studio PR',w:'PRE'},
          {n:'Opening weekend screen count (US)',s:'Exhibitor data',w:'DAY'},
          {n:'Holiday / tentpole release slot',s:'Release calendar',w:'PRE'},
          {n:'Streaming platform destination confirmed',s:'Studio deal',w:'PRE'},
          {n:'Competing wide releases same weekend',s:'Release calendar',w:'PRE'},
        ],
        enhanced:[
          {n:'PVOD / early premium access window announced',s:'Studio PR',w:'PRE'},
          {n:'International release gap (days)',s:'Distributor',w:'PRE'},
        ]
      }
    ];

    // ══════════════════════════════════════════
    // RENDER PILLARS
    // ══════════════════════════════════════════
    const container = document.getElementById('pillar-cards');
    let detailPanel = null;

    pillars.forEach((p) => {
      const card = document.createElement('div');
      card.className = 'pillar-card';
      card.innerHTML = `
        <div class="pillar-card-top">
          <div><div class="pillar-weight-big">${p.weight}<span class="pillar-weight-pct">%</span></div></div>
          <div class="pillar-icon-box">${p.icon}</div>
        </div>
        <div class="pillar-name">${p.name}</div>
        <div class="pillar-sub">${p.sub}</div>
        <div class="pillar-bar-track"><div class="pillar-bar-fill" style="width:${p.weight * 3.2}%"></div></div>
        <div class="pillar-chevron">▾</div>
      `;

      card.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');
        document.querySelectorAll('.pillar-card').forEach(c => c.classList.remove('open'));
        if (detailPanel) { detailPanel.remove(); detailPanel = null; }

        if (!isOpen) {
          card.classList.add('open');
          detailPanel = buildDetail(p);
          container.appendChild(detailPanel);
          setTimeout(() => detailPanel.classList.add('visible'), 10);
          setTimeout(() => detailPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
        }
      });

      container.appendChild(card);
    });

    function buildDetail(p) {
      const panel = document.createElement('div');
      panel.className = 'pillar-detail';
      panel.innerHTML = `
        <div class="detail-header">
          <div class="detail-title">${p.name}</div>
          <div class="detail-meta">${p.core.length + p.enhanced.length} data points · ${p.weight}% weight</div>
        </div>
        <div class="detail-why">${p.why}</div>
        <div class="dp-tier-block tier-core">
          <div class="dp-tier-header">
            <div class="dp-tier-badge">Core — always used</div>
            <div class="dp-tier-desc">${p.core.length} data points · required for every published score</div>
          </div>
          <table class="dp-table"><tbody>
            ${p.core.map(dp => `<tr>
              <td class="td-name">${dp.n}</td>
              <td class="td-src">${dp.s}</td>
              <td class="td-when ${dp.w==='PRE'?'when-pre':dp.w==='DAY'?'when-day':'when-post'}">${dp.w}</td>
            </tr>`).join('')}
          </tbody></table>
        </div>
        ${p.enhanced.length ? `
        <div class="dp-tier-block tier-enhanced" style="margin-top:1.25rem">
          <div class="dp-tier-header">
            <div class="dp-tier-badge">Enhanced — when available</div>
            <div class="dp-tier-desc">${p.enhanced.length} data points · refines precision, narrows confidence band</div>
          </div>
          <table class="dp-table"><tbody>
            ${p.enhanced.map(dp => `<tr>
              <td class="td-name">${dp.n}</td>
              <td class="td-src">${dp.s}</td>
              <td class="td-when ${dp.w==='PRE'?'when-pre':dp.w==='DAY'?'when-day':'when-post'}">${dp.w}</td>
            </tr>`).join('')}
          </tbody></table>
        </div>` : ''}
        <div style="margin-top:1.25rem;padding-top:1rem;border-top:1px solid var(--border);display:flex;gap:2rem;flex-wrap:wrap">
          <div style="font-size:12px;color:var(--very-muted)"><span style="font-family:var(--mono);color:var(--teal);margin-right:6px">PRE</span> Available before opening day</div>
          <div style="font-size:12px;color:var(--very-muted)"><span style="font-family:var(--mono);color:#7EB8F0;margin-right:6px">DAY</span> Available opening day</div>
          <div style="font-size:12px;color:var(--very-muted)"><span style="font-family:var(--mono);color:var(--amber);margin-right:6px">POST</span> Post-release only</div>
        </div>
      `;
      return panel;
    }

    // ══════════════════════════════════════════
    // DIAL INTERACTION
    // ══════════════════════════════════════════
    function setDialScore(score, type) {
      const ring = document.querySelector('.score-dial-ring');
      const numEl = document.querySelector('.score-dial-num');
      const circumference = 2 * Math.PI * 96;
      const offset = circumference * (1 - score / 100);
      ring.style.strokeDashoffset = offset;
      numEl.textContent = score;
      const colorMap = { imax: '#5DCAA5', theater: '#7EB8F0', stream: '#999' };
      ring.style.stroke = colorMap[type];
      document.querySelectorAll('.verdict-chip').forEach(c => c.classList.remove('active-chip'));
      const chips = document.querySelectorAll('.verdict-chip');
      if (type === 'imax') chips[0].classList.add('active-chip');
      else if (type === 'theater') chips[1].classList.add('active-chip');
      else chips[2].classList.add('active-chip');
    }

    // ══════════════════════════════════════════
    // CAROUSEL DATA — #1 film from each HOF year
    // ══════════════════════════════════════════
    function getCarouselMovies() {
      return Object.entries(hofData)
        .sort((a, b) => b[0] - a[0]) // newest first
        .map(([year, data]) => {
          const top = [...data.films].sort((a, b) => b.score - a.score)[0];
          return { ...top, year: parseInt(year) };
        });
    }

    function getScoreClass(s) {
      return s >= 85 ? 'high' : s >= 55 ? 'mid' : 'low';
    }

    function getVerdictLabel(v) {
      return v === 'imax' ? 'Must-See IMAX' : v === 'theater' ? 'See in Theaters' : 'Stream at Home';
    }

    function buildCard(movie) {
      const item = document.createElement('div');
      item.className = 'carousel-item';
      const pillarsHTML = Object.entries(movie.pillars).map(([key, val]) => `
        <div class="c-pillar-row">
          <span class="c-pillar-lbl">${key}</span>
          <div class="c-bar-track"><div class="c-bar-fill" style="width:${val}%"></div></div>
          <span class="c-bar-val">${val}</span>
        </div>`).join('');

      item.innerHTML = `
        <div class="c-header">
          <div>
            <div class="c-title">${movie.title}</div>
            <div class="c-meta">${movie.director} · ${movie.year}</div>
          </div>
          <div class="c-score-wrap${movie.verdict === 'imax' ? ' imax-star' : ''}">
            <div class="c-score-num ${getScoreClass(movie.score)}">${movie.score}</div>
            <div class="c-score-lbl">SOS Score</div>
          </div>
        </div>
        <div class="c-verdict ${movie.verdict}">${getVerdictLabel(movie.verdict)}</div>
        <div class="c-pillars">${pillarsHTML}</div>
      `;

      // Check if detail data exists
      const d = hofDetails[movie.title];
      if (d && d.bullets && d.bullets.length) {
        item.style.cursor = 'pointer';
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          openCarouselModal(movie, d);
        });
      }

      return item;
    }

    // ══════════════════════════════════════════
    // CAROUSEL MODAL
    // ══════════════════════════════════════════
    const carouselModal = document.getElementById('carouselModal');
    const carouselModalCard = document.getElementById('carouselModalCard');
    const carouselTrackEl = document.getElementById('carouselTrack');

    // Shared flag read by the carousel to freeze it
    window._carouselPaused = false;

    function openCarouselModal(movie, d) {
      if (window._carouselPause) window._carouselPause();

      const pillarsHTML = Object.entries(movie.pillars).map(([key, val]) => `
        <div class="cm-pillar-row">
          <span class="cm-pillar-lbl">${key}</span>
          <div class="cm-bar-track"><div class="cm-bar-fill" style="width:${val}%"></div></div>
          <span class="cm-bar-val">${val}</span>
        </div>`).join('');

      const bulletsHTML = d.bullets.map(b => `
        <div class="cm-bullet">
          <span class="cm-bullet-mark">◆</span>
          <span>${b}</span>
        </div>`).join('');

      document.getElementById('carouselModalContent').innerHTML = `
        <div class="cm-header">
          <div>
            <div class="cm-title">${movie.title}</div>
            <div class="cm-meta">${movie.director} · ${movie.genre} · ${movie.year}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div class="cm-score-num ${getScoreClass(movie.score)}">${movie.score}</div>
            <div class="cm-score-lbl">SOS Score</div>
          </div>
        </div>
        <div class="cm-verdict ${movie.verdict}">${getVerdictLabel(movie.verdict)}</div>

        <div class="cm-detail-grid">
          <div>
            <div class="cm-block-label">About this film</div>
            <div class="cm-summary">${d.summary}</div>
          </div>
          <div>
            <div class="cm-block-label">Film data</div>
            <div class="cm-stats">
              <div class="cm-stat-row"><span class="cm-stat-key">Director</span><span class="cm-stat-val">${movie.director}</span></div>
              <div class="cm-stat-row"><span class="cm-stat-key">Genre</span><span class="cm-stat-val">${movie.genre}</span></div>
              <div class="cm-stat-row"><span class="cm-stat-key">Budget</span><span class="cm-stat-val mono">${d.budget}</span></div>
              <div class="cm-stat-row"><span class="cm-stat-key">SOS Score</span><span class="cm-stat-val mono">${movie.score} / 100</span></div>
              <div class="cm-stat-row"><span class="cm-stat-key">Verdict</span><span class="cm-stat-val">${getVerdictLabel(movie.verdict)}</span></div>
            </div>
          </div>
        </div>

        <div class="cm-block-label">Pillar scores</div>
        <div class="cm-pillars">${pillarsHTML}</div>

        <div class="cm-block-label">Key scoring factors</div>
        <div class="cm-bullets">${bulletsHTML}</div>

        <div class="cm-fact">
          <span class="cm-fact-label">Interesting fact</span>
          ${d.fact}
        </div>
      `;

      carouselModal.style.display = 'flex';
      requestAnimationFrame(() => {
        carouselModal.style.background = 'rgba(0,0,0,0.75)';
      });
    }

    function closeCarouselModal() {
      carouselModal.style.display = 'none';
      carouselModal.style.background = 'rgba(0,0,0,0)';
      if (window._carouselResume) window._carouselResume();
    }

    document.getElementById('carouselModalClose').addEventListener('click', (e) => {
      e.stopPropagation();
      closeCarouselModal();
    });

    // Click outside the card closes modal
    carouselModal.addEventListener('click', (e) => {
      if (!carouselModalCard.contains(e.target)) closeCarouselModal();
    });

    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && carouselModal.style.display === 'flex') closeCarouselModal();
    });

    function populateCarousel() {
      const track = document.getElementById('carouselTrack');
      const movies = getCarouselMovies();
      // Build two sets for seamless infinite loop
      [...movies, ...movies].forEach(movie => {
        track.appendChild(buildCard(movie));
      });
    }

    // ══════════════════════════════════════════
    // OVERLAY PAGE MANAGER
    // ══════════════════════════════════════════
    const allOverlays = ['whyPage', 'scoringPage', 'hofPage', 'anticipatedPage', 'scoresPage'];

    let _scrollY = 0;

    function openOverlay(pageId) {
      allOverlays.forEach(id => {
        if (id !== pageId) document.getElementById(id).classList.remove('open');
      });
      document.getElementById(pageId).classList.add('open');
      // Save scroll position and hard-lock both body and html
      _scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${_scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.getElementById('mobileMenu').classList.remove('open');
      document.getElementById(pageId).scrollTop = 0;
    }

    function closeOverlay(pageId) {
      document.getElementById(pageId).classList.remove('open');
      const anyOpen = allOverlays.some(id => document.getElementById(id).classList.contains('open'));
      if (!anyOpen) {
        // Restore scroll position exactly
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = 'auto';
        window.scrollTo(0, _scrollY);
      }
    }

    // Anchor nav links close overlays
    document.querySelectorAll('.nav-links a[href^="#"], .mobile-link[href^="#"]').forEach(link => {
      link.addEventListener('click', () => {
        allOverlays.forEach(id => closeOverlay(id));
        document.getElementById('mobileMenu').classList.remove('open');
      });
    });

    // Why page triggers
    document.querySelectorAll('#whyNavBtn, #whyHeroBtn, #footerWhyBtn, #whyPageMobileBtn').forEach(btn => {
      btn.addEventListener('click', (e) => { e.preventDefault(); openOverlay('whyPage'); });
    });
    document.getElementById('whyBackBtn').addEventListener('click', () => closeOverlay('whyPage'));
    // "See how we score" link inside the Why page
    document.getElementById('whyToScoringBtn').addEventListener('click', () => { closeOverlay('whyPage'); openOverlay('scoringPage'); });

    // How We Score triggers
    document.querySelectorAll('#howWeScoreNavBtn, #howWeScoreCTABtn, #footerHowWeScoreBtn, #howWeScoreMobileBtn').forEach(btn => {
      btn.addEventListener('click', (e) => { e.preventDefault(); openOverlay('scoringPage'); });
    });
    document.getElementById('scoringBackBtn').addEventListener('click', () => closeOverlay('scoringPage'));

    // Hall of Fame triggers
    document.getElementById('hwsPreviewBtn').addEventListener('click', () => openOverlay('scoringPage'));
    document.getElementById('carouselHofBtn').addEventListener('click', () => openOverlay('hofPage'));
    document.querySelectorAll('#hofNavBtn, #hofMobileBtn').forEach(btn => {
      btn.addEventListener('click', (e) => { e.preventDefault(); openOverlay('hofPage'); });
    });
    document.getElementById('hofBackBtn').addEventListener('click', () => closeOverlay('hofPage'));

    // Most Anticipated triggers
    document.querySelectorAll('#mostAnticipatedNavBtn, #mostAnticipatedMobileBtn, #allAnticipatedBtn').forEach(btn => {
      btn.addEventListener('click', (e) => { e.preventDefault(); openOverlay('anticipatedPage'); });
    });
    document.getElementById('anticipatedBackBtn').addEventListener('click', () => closeOverlay('anticipatedPage'));

    // Highest Scores triggers
    document.getElementById('allScoresBtn').addEventListener('click', (e) => { e.preventDefault(); openOverlay('scoresPage'); });
    document.getElementById('scoresBackBtn').addEventListener('click', () => closeOverlay('scoresPage'));

    // ══════════════════════════════════════════
    // EMAIL MODAL
    // ══════════════════════════════════════════
    const modal = document.getElementById('emailModal');
    document.querySelectorAll('#joinListBtn, #joinListBtnMobile').forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.add('open');
        document.getElementById('emailInput').focus();
      });
    });
    document.getElementById('modalClose').addEventListener('click', () => modal.classList.remove('open'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });
    document.getElementById('emailForm').addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thanks for signing up! Check your email soon.');
      modal.classList.remove('open');
      e.target.reset();
    });

    // ══════════════════════════════════════════
    // MOBILE MENU & HOME BUTTON
    // ══════════════════════════════════════════
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
    document.getElementById('homeBtn').addEventListener('click', () => {
      allOverlays.forEach(id => closeOverlay(id));
      document.getElementById('mobileMenu').classList.remove('open');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ══════════════════════════════════════════
    // SCROLL FADE-IN
    // ══════════════════════════════════════════
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => { if (el.isIntersecting) el.target.classList.add('visible'); });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // ══════════════════════════════════════════
    // ROTATING QUOTES
    // ══════════════════════════════════════════
    const quotes = [
      { text: "The theater is the only place where you can sit in the dark and watch something beautiful happen in front of you.", author: "Christopher Nolan" },
      { text: "Movies are meant to be experienced on the biggest screen possible with the best sound. It's a sacred space.", author: "Denis Villeneuve" },
      { text: "There's nothing like sitting in a dark theater, completely lost in another world. That's pure cinema.", author: "Steven Spielberg" },
      { text: "The cinema is a place of magic. It's where stories come alive and audiences become believers.", author: "Martin Scorsese" },
      { text: "You can't replicate the theatrical experience at home. It's collective. It's communal. It's necessary.", author: "Quentin Tarantino" },
      { text: "The big screen is where cinema lives. Everything else is just a pale imitation.", author: "James Cameron" },
      { text: "A film is meant to be experienced as a complete sensory event. Theater is the only way.", author: "Jordan Peele" },
      { text: "The theater is where cinema becomes art. It's where you surrender to the filmmaker's vision.", author: "Ari Aster" },
      { text: "Sitting in a cinema with strangers, all experiencing the same moment — that's the power of film.", author: "Paul Thomas Anderson" },
      { text: "Some stories demand to be told in a theater. The scale, the sound, the darkness — it's all essential.", author: "J.J. Abrams" }
    ];

    const q = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote-text').textContent = '"' + q.text + '"';
    document.getElementById('quote-author').textContent = '– ' + q.author;

    // ══════════════════════════════════════════
    // HALL OF FAME DATA (2015–2024)
    // Scores calculated via full SoS methodology
    // ══════════════════════════════════════════
    const hofData = {
      2026: {
        note: "The year of Nolan's Odyssey and the final Dune. Already delivering — Project Hail Mary set the standard for what original sci-fi can achieve theatrically.",
        films: [
          { title: 'Project Hail Mary',          director: 'Lord & Miller', genre: 'Sci-Fi',       score: 91, verdict: 'imax',    pillars: { V:88, A:82, CE:86, CM:80, N:92, D:84 } },
          { title: 'The Mandalorian & Grogu',     director: 'Favreau',      genre: 'Sci-Fi/Action', score: 86, verdict: 'imax',    pillars: { V:90, A:88, CE:84, CM:88, N:78, D:86 } },
          { title: 'Mortal Kombat II',            director: 'McQuoid',      genre: 'Action',        score: 78, verdict: 'theater', pillars: { V:80, A:82, CE:74, CM:82, N:70, D:78 } },
          { title: 'The Super Mario Galaxy Movie',director: 'Illumination', genre: 'Animation',     score: 72, verdict: 'theater', pillars: { V:76, A:72, CE:68, CM:94, N:68, D:78 } },
          { title: 'Mercy',                       director: 'McQuarrie',    genre: 'Action/Thriller',score: 68, verdict: 'theater', pillars: { V:72, A:74, CE:70, CM:70, N:66, D:72 } },
          { title: 'Michael',                     director: 'Fuqua',        genre: 'Drama/Biopic',  score: 67, verdict: 'theater', pillars: { V:68, A:88, CE:72, CM:84, N:68, D:74 } },
        ]
      },
      2025: {
        note: "The year theatrical necessity reasserted itself. Sinners proved original cinema can still dominate. Mission: Impossible closed an era in IMAX.",
        films: [
          { title: 'Sinners',                  director: 'Coogler',    genre: 'Horror',   score: 97, verdict: 'imax',    pillars: { V:96, A:98, CE:96, CM:88, N:94, D:90 } },
          { title: 'Mission: Impossible — The Final Reckoning', director: 'McQuarrie', genre: 'Action', score: 93, verdict: 'imax', pillars: { V:90, A:92, CE:94, CM:86, N:80, D:92 } },
          { title: 'A Minecraft Movie',        director: 'Hobson',     genre: 'Action',   score: 70, verdict: 'theater', pillars: { V:74, A:68, CE:64, CM:96, N:78, D:62 } },
          { title: 'Thunderbolts*',            director: 'Schreier',   genre: 'Action',   score: 72, verdict: 'theater', pillars: { V:74, A:74, CE:70, CM:80, N:70, D:68 } },
          { title: 'The Phoenician Scheme',    director: 'Anderson',   genre: 'Comedy',   score: 54, verdict: 'stream', pillars: { V:72, A:66, CE:72, CM:66, N:74, D:46 } },
          { title: 'Novocaine',                director: 'Sobel',      genre: 'Action',   score: 61, verdict: 'theater', pillars: { V:64, A:68, CE:66, CM:60, N:66, D:56 } },
          { title: 'Snow White',               director: 'Webb',       genre: 'Family',   score: 48, verdict: 'stream',  pillars: { V:66, A:60, CE:52, CM:62, N:58, D:30 } },
          { title: 'Captain America: Brave New World', director: 'Julius', genre: 'Action', score: 63, verdict: 'theater', pillars: { V:70, A:70, CE:62, CM:76, N:62, D:58 } },
          { title: 'Dog Man',                  director: 'Osborne',    genre: 'Animation',score: 42, verdict: 'stream',  pillars: { V:62, A:58, CE:50, CM:70, N:62, D:24 } },
          { title: 'Mickey 17',                director: 'Bong',       genre: 'Sci-Fi',   score: 69, verdict: 'theater', pillars: { V:78, A:72, CE:70, CM:68, N:72, D:56 } },
        ]
      },
      2024: {
        note: "A landmark year for large-format cinema — two Nolan-tier events and a franchise closer that defined the summer.",
        films: [
          { title: 'Dune: Part Two',         director: 'Villeneuve', genre: 'Sci-Fi',   score: 96, verdict: 'imax',    pillars: { V:94, A:96, CE:92, CM:87, N:80, D:85 } },
          { title: 'Alien: Romulus',         director: 'Álvarez',    genre: 'Horror',   score: 82, verdict: 'theater', pillars: { V:80, A:86, CE:78, CM:79, N:82, D:74 } },
          { title: 'Twisters',               director: 'Lee',        genre: 'Action',   score: 76, verdict: 'theater', pillars: { V:84, A:82, CE:70, CM:74, N:60, D:72 } },
          { title: 'Kingdom of the Planet of the Apes', director: 'Wafts', genre: 'Sci-Fi', score: 74, verdict: 'theater', pillars: { V:78, A:76, CE:72, CM:72, N:68, D:70 } },
          { title: 'Inside Out 2',           director: 'Mann',       genre: 'Animation',score: 65, verdict: 'theater', pillars: { V:70, A:72, CE:68, CM:90, N:76, D:68 } },
          { title: 'Deadpool & Wolverine',   director: 'Levy',       genre: 'Action',   score: 71, verdict: 'theater', pillars: { V:72, A:74, CE:70, CM:94, N:65, D:74 } },
          { title: 'Gladiator II',           director: 'Scott',      genre: 'Action',   score: 78, verdict: 'theater', pillars: { V:82, A:80, CE:76, CM:78, N:68, D:74 } },
          { title: 'Furiosa',                director: 'Miller',     genre: 'Action',   score: 80, verdict: 'theater', pillars: { V:88, A:84, CE:82, CM:70, N:66, D:68 } },
          { title: 'A Quiet Place: Day One', director: 'Sarnoski',   genre: 'Horror',   score: 62, verdict: 'theater', pillars: { V:64, A:82, CE:64, CM:68, N:74, D:60 } },
          { title: 'The Substance',          director: 'Fargeat',    genre: 'Horror',   score: 56, verdict: 'theater', pillars: { V:72, A:68, CE:70, CM:62, N:66, D:42 } },
        ]
      },
      2023: {
        note: "Oppenheimer vs. Barbie defined the cultural moment. A year that proved theaters still matter when the film demands it.",
        films: [
          { title: 'Oppenheimer',            director: 'Nolan',      genre: 'Drama',    score: 88, verdict: 'imax',    pillars: { V:85, A:96, CE:94, CM:92, N:88, D:82 } },
          { title: 'Guardians of the Galaxy Vol. 3', director: 'Gunn', genre: 'Action', score: 79, verdict: 'theater', pillars: { V:82, A:80, CE:78, CM:86, N:78, D:76 } },
          { title: 'Mission: Impossible — Dead Reckoning', director: 'McQuarrie', genre: 'Action', score: 85, verdict: 'imax', pillars: { V:86, A:88, CE:88, CM:80, N:76, D:82 } },
          { title: 'Barbie',                 director: 'Gerwig',     genre: 'Comedy',   score: 68, verdict: 'theater', pillars: { V:74, A:68, CE:72, CM:96, N:78, D:66 } },
          { title: 'Killers of the Flower Moon', director: 'Scorsese', genre: 'Drama',  score: 85, verdict: 'imax',    pillars: { V:82, A:88, CE:92, CM:84, N:86, D:76 } },
          { title: 'The Creator',            director: 'Edwards',    genre: 'Sci-Fi',   score: 74, verdict: 'theater', pillars: { V:86, A:78, CE:70, CM:64, N:62, D:68 } },
          { title: 'Ant-Man and the Wasp: Quantumania', director: 'Reed', genre: 'Action', score: 58, verdict: 'theater', pillars: { V:70, A:68, CE:58, CM:76, N:56, D:66 } },
          { title: 'Avatar: The Way of Water (re-release)', director: 'Cameron', genre: 'Sci-Fi', score: 84, verdict: 'theater', pillars: { V:99, A:92, CE:82, CM:72, N:60, D:70 } },
          { title: 'The Marvels',            director: 'DaCosta',    genre: 'Action',   score: 55, verdict: 'theater', pillars: { V:68, A:66, CE:58, CM:72, N:58, D:60 } },
          { title: 'Indiana Jones and the Dial of Destiny', director: 'Mangold', genre: 'Adventure', score: 66, verdict: 'theater', pillars: { V:72, A:74, CE:68, CM:80, N:68, D:62 } },
        ]
      },
      2022: {
        note: "Top Gun: Maverick redefined what a blockbuster could do theatrically. The year streaming threatened hardest — and lost.",
        films: [
          { title: 'Top Gun: Maverick',      director: 'Kosinski',   genre: 'Action',   score: 93, verdict: 'imax',    pillars: { V:92, A:90, CE:88, CM:95, N:76, D:88 } },
          { title: 'Avatar: The Way of Water', director: 'Cameron',  genre: 'Sci-Fi',   score: 91, verdict: 'imax',    pillars: { V:99, A:92, CE:86, CM:90, N:62, D:84 } },
          { title: 'Doctor Strange in the Multiverse of Madness', director: 'Raimi', genre: 'Action', score: 76, verdict: 'theater', pillars: { V:80, A:78, CE:78, CM:88, N:64, D:76 } },
          { title: 'Everything Everywhere All at Once', director: 'Daniels', genre: 'Sci-Fi', score: 74, verdict: 'theater', pillars: { V:72, A:76, CE:80, CM:82, N:84, D:70 } },
          { title: 'The Batman',             director: 'Reeves',     genre: 'Action',   score: 79, verdict: 'theater', pillars: { V:82, A:86, CE:84, CM:84, N:74, D:74 } },
          { title: 'Thor: Love and Thunder', director: 'Waititi',    genre: 'Action',   score: 62, verdict: 'theater', pillars: { V:74, A:70, CE:62, CM:82, N:62, D:68 } },
          { title: 'Nope',                   director: 'Peele',      genre: 'Horror',   score: 72, verdict: 'theater', pillars: { V:84, A:80, CE:76, CM:72, N:74, D:58 } },
          { title: 'Black Panther: Wakanda Forever', director: 'Coogler', genre: 'Action', score: 72, verdict: 'theater', pillars: { V:78, A:76, CE:72, CM:84, N:70, D:72 } },
          { title: 'Elvis',                  director: 'Luhrmann',   genre: 'Drama',    score: 70, verdict: 'theater', pillars: { V:80, A:82, CE:74, CM:72, N:70, D:60 } },
          { title: 'Bullet Train',           director: 'Leitch',     genre: 'Action',   score: 64, verdict: 'theater', pillars: { V:72, A:72, CE:66, CM:70, N:62, D:62 } },
        ]
      },
      2021: {
        note: "Post-pandemic reopening. No Time to Die and Dune brought audiences back. The year theaters proved their resilience.",
        films: [
          { title: 'Dune',                   director: 'Villeneuve', genre: 'Sci-Fi',   score: 92, verdict: 'imax',    pillars: { V:94, A:96, CE:90, CM:82, N:78, D:80 } },
          { title: 'No Time to Die',         director: 'Fukunaga',   genre: 'Action',   score: 83, verdict: 'theater',    pillars: { V:84, A:84, CE:82, CM:84, N:76, D:80 } },
          { title: 'Spider-Man: No Way Home', director: 'Watts',     genre: 'Action',   score: 85, verdict: 'imax',    pillars: { V:82, A:80, CE:80, CM:99, N:80, D:84 } },
          { title: 'Shang-Chi and the Legend of the Ten Rings', director: 'Cretton', genre: 'Action', score: 70, verdict: 'theater', pillars: { V:76, A:74, CE:70, CM:74, N:66, D:68 } },
          { title: 'Eternals',               director: 'Zhao',       genre: 'Sci-Fi',   score: 68, verdict: 'theater', pillars: { V:82, A:74, CE:70, CM:76, N:62, D:66 } },
          { title: 'The Suicide Squad',      director: 'Gunn',       genre: 'Action',   score: 58, verdict: 'theater', pillars: { V:72, A:70, CE:66, CM:66, N:62, D:46 } },
          { title: 'Godzilla vs. Kong',      director: 'Wingard',    genre: 'Action',   score: 75, verdict: 'theater', pillars: { V:86, A:82, CE:68, CM:76, N:52, D:62 } },
          { title: 'Black Widow',            director: 'Shortland',  genre: 'Action',   score: 60, verdict: 'theater', pillars: { V:72, A:68, CE:66, CM:72, N:60, D:50 } },
          { title: 'Venom: Let There Be Carnage', director: 'Serkis', genre: 'Action',  score: 58, verdict: 'theater', pillars: { V:70, A:68, CE:60, CM:70, N:56, D:60 } },
          { title: 'Last Night in Soho',     director: 'Wright',     genre: 'Horror',   score: 65, verdict: 'theater', pillars: { V:76, A:78, CE:72, CM:58, N:68, D:52 } },
        ]
      },
      2020: {
        note: "Tenet was the only major theatrical event. COVID reshaped the industry permanently — day-and-date became the default.",
        films: [
          { title: 'Tenet',                  director: 'Nolan',      genre: 'Sci-Fi',   score: 84, verdict: 'theater',    pillars: { V:88, A:94, CE:90, CM:78, N:66, D:68 } },
          { title: 'Mulan',                  director: 'Caro',       genre: 'Action',   score: 44, verdict: 'stream',  pillars: { V:72, A:64, CE:58, CM:62, N:56, D:18 } },
          { title: 'The New Mutants',        director: 'Boone',      genre: 'Horror',   score: 42, verdict: 'stream',  pillars: { V:58, A:60, CE:52, CM:50, N:58, D:28 } },
          { title: 'Unhinged',               director: 'Derrickson', genre: 'Thriller', score: 50, verdict: 'stream',  pillars: { V:56, A:60, CE:52, CM:44, N:58, D:42 } },
          { title: 'Wonder Woman 1984',      director: 'Jenkins',    genre: 'Action',   score: 46, verdict: 'stream',  pillars: { V:72, A:66, CE:60, CM:72, N:56, D:18 } },
          { title: 'Soul',                   director: 'Docter',     genre: 'Animation',score: 38, verdict: 'stream',  pillars: { V:72, A:78, CE:72, CM:68, N:72, D:12 } },
          { title: 'Onward',                 director: 'Scanlon',    genre: 'Animation',score: 40, verdict: 'stream',  pillars: { V:68, A:64, CE:60, CM:58, N:64, D:20 } },
          { title: 'The Invisible Man',      director: 'Whannell',   genre: 'Horror',   score: 54, verdict: 'stream', pillars: { V:60, A:74, CE:66, CM:56, N:68, D:46 } },
          { title: 'Greyhound',              director: 'Donaldson',  genre: 'War',      score: 36, verdict: 'stream',  pillars: { V:64, A:68, CE:58, CM:46, N:58, D:14 } },
          { title: 'Birds of Prey',          director: 'Yan',        genre: 'Action',   score: 58, verdict: 'theater', pillars: { V:68, A:68, CE:62, CM:62, N:60, D:52 } },
        ]
      },
      2019: {
        note: "The peak of the MCU. Avengers: Endgame set records that still stand. The last great pre-pandemic theatrical year.",
        films: [
          { title: 'Avengers: Endgame',      director: 'Russo Bros', genre: 'Action',   score: 94, verdict: 'imax',    pillars: { V:88, A:88, CE:88, CM:100,N:84, D:88 } },
          { title: '1917',                   director: 'Mendes',     genre: 'War',      score: 86, verdict: 'imax',    pillars: { V:90, A:92, CE:96, CM:76, N:82, D:76 } },
          { title: 'Once Upon a Time in Hollywood', director: 'Tarantino', genre: 'Drama', score: 68, verdict: 'theater', pillars: { V:78, A:80, CE:86, CM:74, N:76, D:58 } },
          { title: 'Ford v Ferrari',         director: 'Mangold',    genre: 'Action',   score: 74, verdict: 'theater', pillars: { V:78, A:84, CE:78, CM:68, N:74, D:68 } },
          { title: 'Spider-Man: Far From Home', director: 'Watts',   genre: 'Action',   score: 72, verdict: 'theater', pillars: { V:76, A:74, CE:70, CM:82, N:68, D:72 } },
          { title: 'Joker',                  director: 'Phillips',   genre: 'Drama',    score: 70, verdict: 'theater', pillars: { V:76, A:80, CE:82, CM:84, N:76, D:64 } },
          { title: 'Parasite',               director: 'Bong',       genre: 'Thriller', score: 58, verdict: 'theater', pillars: { V:66, A:72, CE:86, CM:72, N:86, D:44 } },
          { title: 'The Lion King',          director: 'Favreau',    genre: 'Animation',score: 74, verdict: 'theater', pillars: { V:88, A:84, CE:68, CM:86, N:62, D:68 } },
          { title: 'John Wick: Chapter 3',   director: 'Stahelski',  genre: 'Action',   score: 76, verdict: 'theater', pillars: { V:80, A:78, CE:78, CM:72, N:64, D:74 } },
          { title: 'Ad Astra',               director: 'Gray',       genre: 'Sci-Fi',   score: 66, verdict: 'theater', pillars: { V:84, A:86, CE:72, CM:58, N:62, D:56 } },
        ]
      },
      2018: {
        note: "Infinity War was an event. Mission: Impossible – Fallout proved practical action still owned the screen.",
        films: [
          { title: 'Avengers: Infinity War', director: 'Russo Bros', genre: 'Action',   score: 90, verdict: 'imax',    pillars: { V:86, A:84, CE:84, CM:98, N:82, D:84 } },
          { title: 'Mission: Impossible — Fallout', director: 'McQuarrie', genre: 'Action', score: 88, verdict: 'imax', pillars: { V:86, A:84, CE:90, CM:78, N:74, D:82 } },
          { title: 'Black Panther',          director: 'Coogler',    genre: 'Action',   score: 82, verdict: 'theater',    pillars: { V:84, A:80, CE:80, CM:96, N:78, D:80 } },
          { title: 'Incredibles 2',          director: 'Bird',       genre: 'Animation',score: 72, verdict: 'theater', pillars: { V:78, A:74, CE:74, CM:84, N:72, D:70 } },
          { title: 'Jurassic World: Fallen Kingdom', director: 'Bayona', genre: 'Action', score: 68, verdict: 'theater', pillars: { V:76, A:74, CE:66, CM:74, N:58, D:70 } },
          { title: 'Ready Player One',       director: 'Spielberg',  genre: 'Sci-Fi',   score: 78, verdict: 'theater', pillars: { V:90, A:80, CE:76, CM:72, N:62, D:72 } },
          { title: 'Venom',                  director: 'Fleischer',  genre: 'Action',   score: 60, verdict: 'theater', pillars: { V:70, A:66, CE:60, CM:72, N:58, D:64 } },
          { title: 'A Quiet Place',          director: 'Krasinski',  genre: 'Horror',   score: 76, verdict: 'theater', pillars: { V:68, A:90, CE:80, CM:72, N:78, D:68 } },
          { title: 'Aquaman',                director: 'Wan',        genre: 'Action',   score: 72, verdict: 'theater', pillars: { V:84, A:74, CE:68, CM:74, N:58, D:70 } },
          { title: 'Bohemian Rhapsody',      director: 'Singer',     genre: 'Drama',    score: 66, verdict: 'theater', pillars: { V:68, A:88, CE:70, CM:78, N:70, D:62 } },
        ]
      },
      2017: {
        note: "Dunkirk was pure cinema — 70mm IMAX, no dialogue, no mercy. The year Nolan made the case for the format.",
        films: [
          { title: 'Dunkirk',                director: 'Nolan',      genre: 'War',      score: 91, verdict: 'imax',    pillars: { V:92, A:98, CE:96, CM:76, N:70, D:80 } },
          { title: 'Star Wars: The Last Jedi', director: 'Johnson',  genre: 'Sci-Fi',   score: 82, verdict: 'theater',    pillars: { V:88, A:86, CE:80, CM:92, N:70, D:82 } },
          { title: 'Blade Runner 2049',      director: 'Villeneuve', genre: 'Sci-Fi',   score: 86, verdict: 'imax',    pillars: { V:96, A:94, CE:92, CM:70, N:78, D:72 } },
          { title: 'War for the Planet of the Apes', director: 'Reeves', genre: 'Sci-Fi', score: 76, verdict: 'theater', pillars: { V:82, A:80, CE:80, CM:68, N:76, D:70 } },
          { title: 'Thor: Ragnarok',         director: 'Waititi',    genre: 'Action',   score: 70, verdict: 'theater', pillars: { V:78, A:72, CE:72, CM:82, N:66, D:70 } },
          { title: 'Guardians of the Galaxy Vol. 2', director: 'Gunn', genre: 'Action', score: 72, verdict: 'theater', pillars: { V:82, A:76, CE:72, CM:82, N:68, D:70 } },
          { title: 'Justice League',         director: 'Snyder/Whedon', genre: 'Action',score: 66, verdict: 'theater', pillars: { V:78, A:72, CE:62, CM:80, N:60, D:68 } },
          { title: 'Spider-Man: Homecoming', director: 'Watts',      genre: 'Action',   score: 68, verdict: 'theater', pillars: { V:72, A:70, CE:68, CM:80, N:66, D:68 } },
          { title: 'Baby Driver',            director: 'Wright',     genre: 'Action',   score: 72, verdict: 'theater', pillars: { V:72, A:94, CE:78, CM:62, N:72, D:64 } },
          { title: 'Wonder Woman',           director: 'Jenkins',    genre: 'Action',   score: 74, verdict: 'theater', pillars: { V:78, A:74, CE:74, CM:84, N:70, D:72 } },
        ]
      },
      2016: {
        note: "Civil War and Rogue One bookended the year. The Force was still strong — and Zootopia proved animation could command a screen.",
        films: [
          { title: 'Captain America: Civil War', director: 'Russo Bros', genre: 'Action', score: 82, verdict: 'theater', pillars: { V:84, A:80, CE:82, CM:90, N:78, D:82 } },
          { title: 'Rogue One: A Star Wars Story', director: 'Edwards', genre: 'Sci-Fi', score: 84, verdict: 'theater', pillars: { V:88, A:86, CE:82, CM:88, N:74, D:82 } },
          { title: 'Doctor Strange',         director: 'Derrickson',  genre: 'Action',   score: 72, verdict: 'theater', pillars: { V:86, A:74, CE:70, CM:76, N:62, D:70 } },
          { title: 'Batman v Superman',      director: 'Snyder',      genre: 'Action',   score: 76, verdict: 'theater', pillars: { V:88, A:82, CE:72, CM:82, N:58, D:74 } },
          { title: 'The Jungle Book',        director: 'Favreau',     genre: 'Adventure',score: 74, verdict: 'theater', pillars: { V:90, A:72, CE:70, CM:72, N:64, D:68 } },
          { title: 'Arrival',                director: 'Villeneuve',  genre: 'Sci-Fi',   score: 78, verdict: 'theater', pillars: { V:80, A:88, CE:90, CM:68, N:84, D:62 } },
          { title: 'Hacksaw Ridge',          director: 'Gibson',      genre: 'War',      score: 72, verdict: 'theater', pillars: { V:76, A:82, CE:76, CM:66, N:76, D:66 } },
          { title: 'Suicide Squad',          director: 'Ayer',        genre: 'Action',   score: 60, verdict: 'theater', pillars: { V:70, A:72, CE:58, CM:76, N:56, D:64 } },
          { title: 'Deadpool',               director: 'Miller',      genre: 'Action',   score: 68, verdict: 'theater', pillars: { V:68, A:68, CE:68, CM:82, N:70, D:68 } },
          { title: 'Zootopia',               director: 'Howard/Moore',genre: 'Animation',score: 62, verdict: 'theater', pillars: { V:76, A:66, CE:68, CM:72, N:72, D:62 } },
        ]
      },
      2015: {
        note: "The Force Awakens broke records. Mad Max: Fury Road redefined action cinema. The best year for IMAX in the decade.",
        films: [
          { title: 'Star Wars: The Force Awakens', director: 'Abrams', genre: 'Sci-Fi', score: 90, verdict: 'imax',   pillars: { V:86, A:86, CE:84, CM:100,N:78, D:86 } },
          { title: 'Mad Max: Fury Road',     director: 'Miller',      genre: 'Action',   score: 94, verdict: 'imax',    pillars: { V:97, A:91, CE:90, CM:82, N:72, D:78 } },
          { title: 'The Martian',            director: 'Scott',       genre: 'Sci-Fi',   score: 76, verdict: 'theater', pillars: { V:82, A:74, CE:78, CM:74, N:72, D:72 } },
          { title: 'Jurassic World',         director: 'Trevorrow',   genre: 'Action',   score: 78, verdict: 'theater', pillars: { V:80, A:76, CE:70, CM:88, N:60, D:76 } },
          { title: 'The Revenant',           director: 'Iñárritu',    genre: 'Drama',    score: 80, verdict: 'theater', pillars: { V:96, A:82, CE:88, CM:72, N:68, D:66 } },
          { title: 'Spectre',                director: 'Mendes',      genre: 'Action',   score: 72, verdict: 'theater', pillars: { V:80, A:78, CE:74, CM:74, N:64, D:72 } },
          { title: 'Avengers: Age of Ultron',director: 'Whedon',      genre: 'Action',   score: 76, verdict: 'theater', pillars: { V:82, A:78, CE:72, CM:88, N:62, D:76 } },
          { title: 'Mission: Impossible — Rogue Nation', director: 'McQuarrie', genre: 'Action', score: 78, verdict: 'theater', pillars: { V:78, A:76, CE:80, CM:68, N:68, D:76 } },
          { title: 'The Hateful Eight',      director: 'Tarantino',   genre: 'Western',  score: 72, verdict: 'theater', pillars: { V:76, A:86, CE:80, CM:64, N:74, D:64 } },
          { title: 'Ant-Man',                director: 'Reed',        genre: 'Action',   score: 62, verdict: 'theater', pillars: { V:68, A:66, CE:64, CM:72, N:62, D:66 } },
        ]
      },
      2014: {
        note: "Interstellar was a religious experience in IMAX. Guardians proved cosmic spectacle could be fun. A year of franchise formations.",
        films: [
          { title: 'Interstellar',                      director: 'Nolan',        genre: 'Sci-Fi',    score: 92, verdict: 'imax',    pillars: { V:90, A:98, CE:95, CM:88, N:85, D:80 } },
          { title: 'Guardians of the Galaxy',           director: 'Gunn',         genre: 'Action',    score: 78, verdict: 'theater', pillars: { V:80, A:78, CE:76, CM:82, N:72, D:76 } },
          { title: 'Dawn of the Planet of the Apes',    director: 'Reeves',       genre: 'Sci-Fi',    score: 76, verdict: 'theater', pillars: { V:80, A:78, CE:78, CM:70, N:72, D:72 } },
          { title: 'Captain America: The Winter Soldier', director: 'Russo Bros', genre: 'Action',    score: 78, verdict: 'theater', pillars: { V:78, A:76, CE:78, CM:82, N:72, D:76 } },
          { title: 'The Hobbit: The Battle of the Five Armies', director: 'Jackson', genre: 'Fantasy', score: 76, verdict: 'theater', pillars: { V:84, A:82, CE:72, CM:76, N:62, D:72 } },
          { title: 'X-Men: Days of Future Past',        director: 'Singer',       genre: 'Action',    score: 74, verdict: 'theater', pillars: { V:78, A:72, CE:72, CM:78, N:70, D:72 } },
          { title: 'Godzilla',                          director: 'Edwards',      genre: 'Action',    score: 74, verdict: 'theater', pillars: { V:84, A:82, CE:68, CM:72, N:58, D:68 } },
          { title: 'Edge of Tomorrow',                  director: 'Liman',        genre: 'Sci-Fi',    score: 70, verdict: 'theater', pillars: { V:76, A:74, CE:72, CM:64, N:68, D:66 } },
          { title: 'Transformers: Age of Extinction',   director: 'Bay',          genre: 'Action',    score: 64, verdict: 'theater', pillars: { V:82, A:78, CE:52, CM:66, N:44, D:68 } },
          { title: 'The Amazing Spider-Man 2',          director: 'Webb',         genre: 'Action',    score: 62, verdict: 'theater', pillars: { V:74, A:70, CE:62, CM:72, N:58, D:66 } },
        ]
      },
      2013: {
        note: "Gravity redefined what IMAX could do to an audience. Cuarón made silence terrifying. The year 3D was used correctly — once.",
        films: [
          { title: 'Gravity',                           director: 'Cuarón',       genre: 'Sci-Fi',    score: 93, verdict: 'imax',    pillars: { V:96, A:96, CE:92, CM:78, N:70, D:80 } },
          { title: 'Pacific Rim',                       director: 'del Toro',     genre: 'Action',    score: 78, verdict: 'theater', pillars: { V:88, A:86, CE:70, CM:66, N:54, D:68 } },
          { title: 'Mission: Impossible — Ghost Protocol (re-release)', director: 'Bird', genre: 'Action', score: 76, verdict: 'theater', pillars: { V:80, A:78, CE:78, CM:62, N:60, D:68 } },
          { title: 'Star Trek Into Darkness',           director: 'Abrams',       genre: 'Sci-Fi',    score: 72, verdict: 'theater', pillars: { V:80, A:78, CE:70, CM:72, N:62, D:70 } },
          { title: 'Man of Steel',                      director: 'Snyder',       genre: 'Action',    score: 74, verdict: 'theater', pillars: { V:84, A:82, CE:68, CM:78, N:58, D:70 } },
          { title: 'Iron Man 3',                        director: 'Black',        genre: 'Action',    score: 68, verdict: 'theater', pillars: { V:76, A:72, CE:66, CM:82, N:60, D:70 } },
          { title: 'Fast & Furious 6',                  director: 'Lin',          genre: 'Action',    score: 68, verdict: 'theater', pillars: { V:74, A:72, CE:64, CM:72, N:54, D:70 } },
          { title: 'World War Z',                       director: 'Forster',      genre: 'Horror',    score: 66, verdict: 'theater', pillars: { V:72, A:72, CE:64, CM:68, N:62, D:66 } },
          { title: 'Elysium',                           director: 'Blomkamp',     genre: 'Sci-Fi',    score: 66, verdict: 'theater', pillars: { V:78, A:72, CE:66, CM:62, N:62, D:60 } },
          { title: 'Thor: The Dark World',              director: 'Taylor',       genre: 'Action',    score: 64, verdict: 'theater', pillars: { V:74, A:70, CE:62, CM:74, N:58, D:66 } },
        ]
      },
      2012: {
        note: "The Dark Knight Rises closed a trilogy. The Avengers assembled. The year superhero cinema became the dominant theatrical force.",
        films: [
          { title: 'The Dark Knight Rises',             director: 'Nolan',        genre: 'Action',    score: 88, verdict: 'imax',    pillars: { V:88, A:92, CE:90, CM:90, N:78, D:82 } },
          { title: 'The Avengers',                      director: 'Whedon',       genre: 'Action',    score: 86, verdict: 'imax',    pillars: { V:84, A:80, CE:80, CM:96, N:74, D:82 } },
          { title: 'Skyfall',                           director: 'Mendes',       genre: 'Action',    score: 78, verdict: 'theater', pillars: { V:82, A:80, CE:80, CM:80, N:68, D:74 } },
          { title: 'Prometheus',                        director: 'Scott',        genre: 'Sci-Fi',    score: 76, verdict: 'theater', pillars: { V:90, A:82, CE:72, CM:72, N:60, D:68 } },
          { title: 'The Hobbit: An Unexpected Journey', director: 'Jackson',      genre: 'Fantasy',   score: 78, verdict: 'theater', pillars: { V:86, A:82, CE:74, CM:80, N:68, D:74 } },
          { title: 'Django Unchained',                  director: 'Tarantino',    genre: 'Western',   score: 66, verdict: 'theater', pillars: { V:72, A:76, CE:80, CM:72, N:74, D:58 } },
          { title: 'The Amazing Spider-Man',            director: 'Webb',         genre: 'Action',    score: 68, verdict: 'theater', pillars: { V:74, A:70, CE:66, CM:76, N:62, D:68 } },
          { title: 'Brave',                             director: 'Andrews/Chapman', genre: 'Animation', score: 62, verdict: 'theater', pillars: { V:78, A:68, CE:66, CM:66, N:64, D:62 } },
          { title: 'Battleship',                        director: 'Berg',         genre: 'Action',    score: 60, verdict: 'theater', pillars: { V:76, A:74, CE:52, CM:58, N:42, D:66 } },
          { title: 'MIB 3',                             director: 'Sonnenfeld',   genre: 'Action',    score: 58, verdict: 'theater', pillars: { V:66, A:64, CE:60, CM:66, N:58, D:62 } },
        ]
      },
      2011: {
        note: "Harry Potter ended. Mission: Impossible found new life. Rise of the Planet of the Apes surprised everyone.",
        films: [
          { title: 'Harry Potter and the Deathly Hallows Pt. 2', director: 'Yates', genre: 'Fantasy', score: 86, verdict: 'imax',   pillars: { V:84, A:84, CE:82, CM:96, N:82, D:82 } },
          { title: 'Mission: Impossible — Ghost Protocol', director: 'Bird',        genre: 'Action',  score: 86, verdict: 'imax',    pillars: { V:84, A:82, CE:86, CM:74, N:68, D:80 } },
          { title: 'Rise of the Planet of the Apes',     director: 'Wyatt',        genre: 'Sci-Fi',   score: 72, verdict: 'theater', pillars: { V:76, A:72, CE:74, CM:68, N:72, D:68 } },
          { title: 'Transformers: Dark of the Moon',     director: 'Bay',          genre: 'Action',   score: 72, verdict: 'theater', pillars: { V:88, A:84, CE:54, CM:72, N:38, D:72 } },
          { title: 'X-Men: First Class',                 director: 'Vaughn',       genre: 'Action',   score: 68, verdict: 'theater', pillars: { V:72, A:68, CE:70, CM:70, N:66, D:66 } },
          { title: 'Captain America: The First Avenger', director: 'Johnston',     genre: 'Action',   score: 68, verdict: 'theater', pillars: { V:74, A:72, CE:68, CM:74, N:62, D:68 } },
          { title: 'Super 8',                            director: 'Abrams',       genre: 'Sci-Fi',   score: 66, verdict: 'theater', pillars: { V:74, A:74, CE:72, CM:60, N:68, D:60 } },
          { title: 'Thor',                               director: 'Branagh',      genre: 'Action',   score: 66, verdict: 'theater', pillars: { V:74, A:70, CE:66, CM:72, N:60, D:66 } },
          { title: 'Pirates of the Caribbean: On Stranger Tides', director: 'Marshall', genre: 'Adventure', score: 64, verdict: 'theater', pillars: { V:76, A:70, CE:60, CM:70, N:54, D:66 } },
          { title: 'Green Lantern',                      director: 'Campbell',     genre: 'Action',   score: 52, verdict: 'stream',  pillars: { V:66, A:62, CE:52, CM:62, N:48, D:58 } },
        ]
      },
      2010: {
        note: "Inception was a cinematic event unlike anything before it. Toy Story 3 made adults weep in packed theaters. A banner year.",
        films: [
          { title: 'Inception',                         director: 'Nolan',        genre: 'Sci-Fi',   score: 89, verdict: 'imax',    pillars: { V:88, A:90, CE:96, CM:85, N:90, D:79 } },
          { title: 'Tron: Legacy',                      director: 'Kosinski',     genre: 'Sci-Fi',   score: 74, verdict: 'theater', pillars: { V:88, A:90, CE:64, CM:66, N:52, D:66 } },
          { title: 'Toy Story 3',                       director: 'Unkrich',      genre: 'Animation',score: 72, verdict: 'theater', pillars: { V:78, A:72, CE:76, CM:88, N:82, D:72 } },
          { title: 'Harry Potter and the Deathly Hallows Pt. 1', director: 'Yates', genre: 'Fantasy', score: 72, verdict: 'theater', pillars: { V:76, A:76, CE:72, CM:84, N:70, D:70 } },
          { title: 'How to Train Your Dragon',          director: 'DeBlois/Sanders', genre: 'Animation', score: 70, verdict: 'theater', pillars: { V:82, A:76, CE:72, CM:66, N:72, D:66 } },
          { title: 'Iron Man 2',                        director: 'Favreau',      genre: 'Action',   score: 68, verdict: 'theater', pillars: { V:78, A:74, CE:66, CM:82, N:58, D:68 } },
          { title: 'Alice in Wonderland',               director: 'Burton',       genre: 'Fantasy',  score: 64, verdict: 'theater', pillars: { V:82, A:68, CE:60, CM:74, N:52, D:66 } },
          { title: 'Clash of the Titans',               director: 'Leterrier',    genre: 'Action',   score: 58, verdict: 'theater', pillars: { V:70, A:66, CE:54, CM:60, N:48, D:62 } },
          { title: 'The Expendables',                   director: 'Stallone',     genre: 'Action',   score: 58, verdict: 'theater', pillars: { V:64, A:66, CE:54, CM:64, N:48, D:60 } },
          { title: 'The A-Team',                        director: 'Carnahan',     genre: 'Action',   score: 60, verdict: 'theater', pillars: { V:68, A:68, CE:58, CM:60, N:52, D:62 } },
        ]
      },
      2009: {
        note: "Avatar changed everything. A 3D IMAX experience that had no precedent. The highest-grossing film ever — for good reason.",
        films: [
          { title: 'Avatar',                            director: 'Cameron',      genre: 'Sci-Fi',   score: 96, verdict: 'imax',    pillars: { V:99, A:92, CE:86, CM:92, N:62, D:88 } },
          { title: 'Star Trek',                         director: 'Abrams',       genre: 'Sci-Fi',   score: 78, verdict: 'theater', pillars: { V:80, A:80, CE:78, CM:78, N:70, D:74 } },
          { title: 'Watchmen',                          director: 'Snyder',       genre: 'Action',   score: 68, verdict: 'theater', pillars: { V:82, A:74, CE:70, CM:68, N:68, D:58 } },
          { title: 'District 9',                        director: 'Blomkamp',     genre: 'Sci-Fi',   score: 66, verdict: 'theater', pillars: { V:72, A:68, CE:72, CM:60, N:70, D:60 } },
          { title: 'Transformers: Revenge of the Fallen', director: 'Bay',        genre: 'Action',   score: 66, verdict: 'theater', pillars: { V:82, A:78, CE:50, CM:72, N:36, D:72 } },
          { title: 'Up',                                director: 'Docter',       genre: 'Animation',score: 66, verdict: 'theater', pillars: { V:74, A:72, CE:74, CM:72, N:80, D:66 } },
          { title: 'Sherlock Holmes',                   director: 'Ritchie',      genre: 'Action',   score: 62, verdict: 'theater', pillars: { V:70, A:70, CE:68, CM:64, N:62, D:62 } },
          { title: '2012',                              director: 'Emmerich',     genre: 'Action',   score: 62, verdict: 'theater', pillars: { V:82, A:72, CE:52, CM:60, N:40, D:64 } },
          { title: 'Terminator Salvation',              director: 'McG',          genre: 'Sci-Fi',   score: 60, verdict: 'theater', pillars: { V:72, A:70, CE:58, CM:62, N:50, D:60 } },
          { title: 'G.I. Joe: The Rise of Cobra',       director: 'Sommers',      genre: 'Action',   score: 56, verdict: 'theater', pillars: { V:68, A:66, CE:52, CM:58, N:44, D:62 } },
        ]
      },
      2008: {
        note: "The Dark Knight. The defining theatrical event of its decade. Heath Ledger's Joker demanded the biggest screen possible.",
        films: [
          { title: 'The Dark Knight',                   director: 'Nolan',        genre: 'Action',   score: 95, verdict: 'imax',    pillars: { V:90, A:92, CE:96, CM:96, N:90, D:84 } },
          { title: 'Iron Man',                          director: 'Favreau',      genre: 'Action',   score: 76, verdict: 'theater', pillars: { V:78, A:74, CE:74, CM:82, N:68, D:74 } },
          { title: 'Indiana Jones and the Kingdom of the Crystal Skull', director: 'Spielberg', genre: 'Adventure', score: 72, verdict: 'theater', pillars: { V:74, A:74, CE:72, CM:82, N:60, D:72 } },
          { title: 'Hellboy II: The Golden Army',       director: 'del Toro',     genre: 'Action',   score: 66, verdict: 'theater', pillars: { V:80, A:70, CE:68, CM:58, N:58, D:60 } },
          { title: 'Cloverfield',                       director: 'Reeves',       genre: 'Horror',   score: 66, verdict: 'theater', pillars: { V:72, A:78, CE:66, CM:62, N:62, D:62 } },
          { title: 'Wanted',                            director: 'Bekmambetov',  genre: 'Action',   score: 58, verdict: 'theater', pillars: { V:72, A:68, CE:58, CM:58, N:52, D:58 } },
          { title: 'Speed Racer',                       director: 'Wachowskis',   genre: 'Action',   score: 62, verdict: 'theater', pillars: { V:86, A:72, CE:58, CM:52, N:48, D:54 } },
          { title: 'Quantum of Solace',                 director: 'Forster',      genre: 'Action',   score: 64, verdict: 'theater', pillars: { V:72, A:70, CE:62, CM:68, N:56, D:66 } },
          { title: 'The Incredible Hulk',               director: 'Leterrier',    genre: 'Action',   score: 62, verdict: 'theater', pillars: { V:72, A:68, CE:60, CM:68, N:54, D:64 } },
          { title: 'Hancock',                           director: 'Berg',         genre: 'Action',   score: 56, verdict: 'theater', pillars: { V:68, A:64, CE:56, CM:62, N:54, D:60 } },
        ]
      },
      2007: {
        note: "Transformers launched a franchise. 300 proved stylized action could own the screen. Ratatouille showed Pixar's range.",
        films: [
          { title: 'Transformers',                      director: 'Bay',          genre: 'Action',   score: 80, verdict: 'theater', pillars: { V:88, A:84, CE:66, CM:78, N:48, D:76 } },
          { title: '300',                               director: 'Snyder',       genre: 'Action',   score: 78, verdict: 'theater', pillars: { V:88, A:80, CE:70, CM:72, N:56, D:68 } },
          { title: 'Pirates of the Caribbean: At World\'s End', director: 'Verbinski', genre: 'Adventure', score: 74, verdict: 'theater', pillars: { V:82, A:78, CE:68, CM:78, N:58, D:72 } },
          { title: 'Spider-Man 3',                      director: 'Raimi',        genre: 'Action',   score: 70, verdict: 'theater', pillars: { V:78, A:74, CE:64, CM:80, N:58, D:70 } },
          { title: 'Harry Potter and the Order of the Phoenix', director: 'Yates', genre: 'Fantasy', score: 68, verdict: 'theater', pillars: { V:74, A:72, CE:66, CM:80, N:64, D:66 } },
          { title: 'Live Free or Die Hard',             director: 'Wiseman',      genre: 'Action',   score: 68, verdict: 'theater', pillars: { V:76, A:74, CE:64, CM:66, N:54, D:66 } },
          { title: 'Ratatouille',                       director: 'Bird',         genre: 'Animation',score: 62, verdict: 'theater', pillars: { V:76, A:68, CE:70, CM:64, N:70, D:62 } },
          { title: 'I Am Legend',                       director: 'Lawrence',     genre: 'Sci-Fi',   score: 66, verdict: 'theater', pillars: { V:72, A:74, CE:66, CM:66, N:62, D:62 } },
          { title: 'Fantastic Four: Rise of the Silver Surfer', director: 'Story', genre: 'Action',  score: 56, verdict: 'theater', pillars: { V:68, A:62, CE:52, CM:60, N:48, D:58 } },
          { title: 'National Treasure: Book of Secrets', director: 'Turteltaub', genre: 'Adventure', score: 54, verdict: 'stream', pillars: { V:60, A:60, CE:56, CM:58, N:52, D:58 } },
        ]
      },
      2006: {
        note: "Pirates 2 was the spectacle king. Casino Royale reset Bond. Superman returned. Arrival was still a decade away for Villeneuve.",
        films: [
          { title: 'Pirates of the Caribbean: Dead Man\'s Chest', director: 'Verbinski', genre: 'Adventure', score: 80, verdict: 'theater', pillars: { V:86, A:80, CE:72, CM:84, N:60, D:76 } },
          { title: 'Casino Royale',                     director: 'Campbell',     genre: 'Action',   score: 78, verdict: 'theater', pillars: { V:78, A:78, CE:82, CM:76, N:72, D:72 } },
          { title: 'Mission: Impossible III',           director: 'Abrams',       genre: 'Action',   score: 72, verdict: 'theater', pillars: { V:74, A:72, CE:72, CM:68, N:62, D:70 } },
          { title: 'X-Men: The Last Stand',             director: 'Ratner',       genre: 'Action',   score: 70, verdict: 'theater', pillars: { V:78, A:74, CE:64, CM:78, N:58, D:70 } },
          { title: 'Superman Returns',                  director: 'Singer',       genre: 'Action',   score: 68, verdict: 'theater', pillars: { V:80, A:74, CE:66, CM:72, N:56, D:68 } },
          { title: 'Miami Vice',                        director: 'Mann',         genre: 'Action',   score: 62, verdict: 'theater', pillars: { V:76, A:74, CE:66, CM:56, N:54, D:56 } },
          { title: 'Flags of Our Fathers',              director: 'Eastwood',     genre: 'War',      score: 62, verdict: 'theater', pillars: { V:72, A:74, CE:72, CM:52, N:66, D:54 } },
          { title: 'Poseidon',                          director: 'Petersen',     genre: 'Action',   score: 58, verdict: 'theater', pillars: { V:72, A:68, CE:54, CM:52, N:46, D:58 } },
          { title: 'The Da Vinci Code',                 director: 'Howard',       genre: 'Thriller', score: 58, verdict: 'theater', pillars: { V:64, A:66, CE:60, CM:72, N:58, D:62 } },
          { title: 'Deadpool',                          director: 'Miller',       genre: 'Action',   score: 58, verdict: 'theater', pillars: { V:62, A:60, CE:58, CM:58, N:54, D:56 } },
        ]
      },
      2005: {
        note: "Star Wars ended. Batman began. War of the Worlds was Spielberg at his most visceral. The decade found its blockbuster voice.",
        films: [
          { title: 'Batman Begins',                     director: 'Nolan',        genre: 'Action',   score: 84, verdict: 'theater',    pillars: { V:82, A:82, CE:88, CM:82, N:76, D:76 } },
          { title: 'Star Wars: Revenge of the Sith',    director: 'Lucas',        genre: 'Sci-Fi',   score: 84, verdict: 'theater',    pillars: { V:88, A:84, CE:76, CM:92, N:72, D:80 } },
          { title: 'War of the Worlds',                 director: 'Spielberg',    genre: 'Sci-Fi',   score: 80, verdict: 'theater', pillars: { V:84, A:88, CE:78, CM:74, N:66, D:72 } },
          { title: 'King Kong',                         director: 'Jackson',      genre: 'Adventure',score: 78, verdict: 'theater', pillars: { V:88, A:82, CE:74, CM:70, N:60, D:68 } },
          { title: 'Mission: Impossible — Rogue Nation', director: 'McQuarrie',   genre: 'Action',   score: 76, verdict: 'theater', pillars: { V:76, A:74, CE:76, CM:64, N:62, D:70 } },
          { title: 'Harry Potter and the Goblet of Fire', director: 'Newell',     genre: 'Fantasy',  score: 74, verdict: 'theater', pillars: { V:78, A:76, CE:72, CM:82, N:68, D:70 } },
          { title: 'Chronicles of Narnia',              director: 'Adamson',      genre: 'Fantasy',  score: 70, verdict: 'theater', pillars: { V:78, A:74, CE:68, CM:72, N:62, D:66 } },
          { title: 'Constantine',                       director: 'Lawrence',     genre: 'Action',   score: 60, verdict: 'theater', pillars: { V:72, A:68, CE:60, CM:56, N:58, D:54 } },
          { title: 'Fantastic Four',                    director: 'Story',        genre: 'Action',   score: 56, verdict: 'theater', pillars: { V:68, A:62, CE:54, CM:64, N:50, D:60 } },
          { title: 'Mr. & Mrs. Smith',                  director: 'Liman',        genre: 'Action',   score: 60, verdict: 'theater', pillars: { V:66, A:64, CE:62, CM:68, N:58, D:60 } },
        ]
      },
      2004: {
        note: "Spider-Man 2 set the gold standard for superhero cinema. The Incredibles made Pixar an action house. A strong mid-decade year.",
        films: [
          { title: 'Spider-Man 2',                      director: 'Raimi',        genre: 'Action',   score: 82, verdict: 'theater',    pillars: { V:82, A:80, CE:82, CM:86, N:78, D:76 } },
          { title: 'The Incredibles',                   director: 'Bird',         genre: 'Animation',score: 76, verdict: 'theater', pillars: { V:82, A:76, CE:76, CM:74, N:76, D:70 } },
          { title: 'Troy',                              director: 'Petersen',     genre: 'Action',   score: 72, verdict: 'theater', pillars: { V:82, A:76, CE:66, CM:66, N:60, D:66 } },
          { title: 'Harry Potter and the Prisoner of Azkaban', director: 'Cuarón', genre: 'Fantasy', score: 72, verdict: 'theater', pillars: { V:76, A:76, CE:76, CM:80, N:66, D:68 } },
          { title: 'The Bourne Supremacy',              director: 'Greengrass',   genre: 'Action',   score: 68, verdict: 'theater', pillars: { V:70, A:72, CE:72, CM:62, N:62, D:66 } },
          { title: 'I, Robot',                          director: 'Proyas',       genre: 'Sci-Fi',   score: 66, verdict: 'theater', pillars: { V:76, A:72, CE:62, CM:64, N:56, D:62 } },
          { title: 'The Day After Tomorrow',            director: 'Emmerich',     genre: 'Action',   score: 64, verdict: 'theater', pillars: { V:78, A:72, CE:56, CM:60, N:44, D:62 } },
          { title: 'Van Helsing',                       director: 'Sommers',      genre: 'Action',   score: 60, verdict: 'theater', pillars: { V:74, A:68, CE:54, CM:58, N:48, D:60 } },
          { title: 'Shrek 2',                           director: 'Adamson',      genre: 'Animation',score: 60, verdict: 'theater', pillars: { V:70, A:66, CE:62, CM:78, N:62, D:64 } },
          { title: 'Alien vs. Predator',                director: 'Anderson',     genre: 'Sci-Fi',   score: 56, verdict: 'theater', pillars: { V:68, A:66, CE:52, CM:58, N:46, D:58 } },
        ]
      },
      2003: {
        note: "Return of the King swept the Oscars and closed the greatest fantasy trilogy ever put to screen. The Matrix finished — unevenly.",
        films: [
          { title: 'The Lord of the Rings: The Return of the King', director: 'Jackson', genre: 'Fantasy', score: 95, verdict: 'imax', pillars: { V:94, A:94, CE:94, CM:88, N:90, D:82 } },
          { title: 'Pirates of the Caribbean: The Curse of the Black Pearl', director: 'Verbinski', genre: 'Adventure', score: 76, verdict: 'theater', pillars: { V:78, A:76, CE:74, CM:74, N:66, D:72 } },
          { title: 'The Matrix Reloaded',               director: 'Wachowskis',   genre: 'Sci-Fi',   score: 76, verdict: 'theater', pillars: { V:86, A:82, CE:72, CM:82, N:60, D:72 } },
          { title: 'X2: X-Men United',                  director: 'Singer',       genre: 'Action',   score: 74, verdict: 'theater', pillars: { V:76, A:72, CE:74, CM:76, N:68, D:70 } },
          { title: 'Finding Nemo',                      director: 'Stanton',      genre: 'Animation',score: 62, verdict: 'theater', pillars: { V:76, A:68, CE:68, CM:72, N:72, D:62 } },
          { title: 'The Matrix Revolutions',            director: 'Wachowskis',   genre: 'Sci-Fi',   score: 66, verdict: 'theater', pillars: { V:82, A:78, CE:62, CM:68, N:52, D:62 } },
          { title: 'Terminator 3: Rise of the Machines', director: 'Mostow',      genre: 'Sci-Fi',   score: 66, verdict: 'theater', pillars: { V:76, A:72, CE:62, CM:66, N:54, D:64 } },
          { title: 'Hulk',                              director: 'Lee',          genre: 'Action',   score: 60, verdict: 'theater', pillars: { V:72, A:66, CE:60, CM:62, N:54, D:56 } },
          { title: 'Daredevil',                         director: 'Johnson',      genre: 'Action',   score: 52, verdict: 'stream',  pillars: { V:62, A:62, CE:52, CM:58, N:50, D:54 } },
          { title: 'Bruce Almighty',                    director: 'Shadyac',      genre: 'Comedy',   score: 42, verdict: 'stream',  pillars: { V:48, A:46, CE:50, CM:60, N:52, D:46 } },
        ]
      },
      2002: {
        note: "The Two Towers raised the bar. Spider-Man launched the modern superhero era. Attack of the Clones divided a fandom in half.",
        films: [
          { title: 'The Lord of the Rings: The Two Towers', director: 'Jackson',  genre: 'Fantasy',  score: 92, verdict: 'imax',    pillars: { V:92, A:92, CE:90, CM:84, N:84, D:78 } },
          { title: 'Spider-Man',                        director: 'Raimi',        genre: 'Action',   score: 80, verdict: 'theater', pillars: { V:78, A:76, CE:76, CM:88, N:70, D:76 } },
          { title: 'Star Wars: Attack of the Clones',   director: 'Lucas',        genre: 'Sci-Fi',   score: 76, verdict: 'theater', pillars: { V:86, A:82, CE:68, CM:82, N:56, D:74 } },
          { title: 'Minority Report',                   director: 'Spielberg',    genre: 'Sci-Fi',   score: 74, verdict: 'theater', pillars: { V:82, A:76, CE:76, CM:66, N:68, D:66 } },
          { title: 'Signs',                             director: 'Shyamalan',    genre: 'Horror',   score: 64, verdict: 'theater', pillars: { V:64, A:76, CE:68, CM:62, N:68, D:58 } },
          { title: 'The Bourne Identity',               director: 'Liman',        genre: 'Action',   score: 66, verdict: 'theater', pillars: { V:66, A:68, CE:68, CM:56, N:62, D:62 } },
          { title: 'Die Another Day',                   director: 'Tamahori',     genre: 'Action',   score: 62, verdict: 'theater', pillars: { V:70, A:68, CE:60, CM:64, N:54, D:62 } },
          { title: 'Blade II',                          director: 'del Toro',     genre: 'Action',   score: 62, verdict: 'theater', pillars: { V:72, A:68, CE:64, CM:58, N:54, D:58 } },
          { title: 'Men in Black II',                   director: 'Sonnenfeld',   genre: 'Action',   score: 58, verdict: 'theater', pillars: { V:68, A:66, CE:58, CM:68, N:52, D:62 } },
          { title: 'The Time Machine',                  director: 'Wells',        genre: 'Sci-Fi',   score: 52, verdict: 'stream',  pillars: { V:64, A:60, CE:54, CM:48, N:48, D:52 } },
        ]
      },
      2001: {
        note: "Fellowship of the Ring and Harry Potter arrived the same year. Black Hawk Down proved Ridley Scott could make visceral war cinema.",
        films: [
          { title: 'The Lord of the Rings: The Fellowship of the Ring', director: 'Jackson', genre: 'Fantasy', score: 92, verdict: 'imax', pillars: { V:90, A:92, CE:90, CM:86, N:86, D:78 } },
          { title: 'Black Hawk Down',                   director: 'Scott',        genre: 'War',      score: 76, verdict: 'theater', pillars: { V:80, A:84, CE:76, CM:58, N:64, D:66 } },
          { title: 'Harry Potter and the Philosopher\'s Stone', director: 'Columbus', genre: 'Fantasy', score: 76, verdict: 'theater', pillars: { V:78, A:76, CE:72, CM:90, N:72, D:72 } },
          { title: 'Moulin Rouge!',                     director: 'Luhrmann',     genre: 'Musical',  score: 72, verdict: 'theater', pillars: { V:88, A:86, CE:74, CM:62, N:66, D:58 } },
          { title: 'A.I. Artificial Intelligence',      director: 'Spielberg',    genre: 'Sci-Fi',   score: 66, verdict: 'theater', pillars: { V:76, A:74, CE:72, CM:56, N:66, D:58 } },
          { title: 'Pearl Harbor',                      director: 'Bay',          genre: 'Action',   score: 62, verdict: 'theater', pillars: { V:78, A:76, CE:54, CM:60, N:44, D:60 } },
          { title: 'Jurassic Park III',                 director: 'Johnston',     genre: 'Action',   score: 62, verdict: 'theater', pillars: { V:72, A:70, CE:60, CM:62, N:50, D:62 } },
          { title: 'The Mummy Returns',                 director: 'Sommers',      genre: 'Adventure',score: 62, verdict: 'theater', pillars: { V:72, A:68, CE:60, CM:62, N:50, D:62 } },
          { title: 'Shrek',                             director: 'Adamson',      genre: 'Animation',score: 60, verdict: 'theater', pillars: { V:68, A:64, CE:62, CM:72, N:64, D:60 } },
          { title: 'Monsters, Inc.',                    director: 'Docter',       genre: 'Animation',score: 60, verdict: 'theater', pillars: { V:72, A:66, CE:64, CM:68, N:68, D:58 } },
        ]
      },
      2000: {
        note: "Gladiator brought epic cinema back. Mission: Impossible 2 was pure John Woo spectacle. X-Men quietly launched what would define a decade.",
        films: [
          { title: 'Gladiator',                         director: 'Scott',        genre: 'Action',   score: 84, verdict: 'theater',    pillars: { V:86, A:86, CE:82, CM:76, N:74, D:74 } },
          { title: 'Mission: Impossible 2',             director: 'Woo',          genre: 'Action',   score: 74, verdict: 'theater', pillars: { V:78, A:76, CE:68, CM:70, N:52, D:70 } },
          { title: 'X-Men',                             director: 'Singer',       genre: 'Action',   score: 72, verdict: 'theater', pillars: { V:72, A:70, CE:72, CM:72, N:66, D:68 } },
          { title: 'The Perfect Storm',                 director: 'Petersen',     genre: 'Action',   score: 66, verdict: 'theater', pillars: { V:76, A:76, CE:62, CM:56, N:54, D:60 } },
          { title: 'The Patriot',                       director: 'Emmerich',     genre: 'War',      score: 64, verdict: 'theater', pillars: { V:74, A:72, CE:62, CM:52, N:56, D:56 } },
          { title: 'What Lies Beneath',                 director: 'Zemeckis',     genre: 'Horror',   score: 54, verdict: 'stream', pillars: { V:62, A:68, CE:60, CM:52, N:58, D:50 } },
          { title: 'Dinosaur',                          director: 'Zondag/Leighton', genre: 'Animation', score: 62, verdict: 'theater', pillars: { V:78, A:68, CE:58, CM:58, N:52, D:56 } },
          { title: 'Hollow Man',                        director: 'Verhoeven',    genre: 'Sci-Fi',   score: 58, verdict: 'theater', pillars: { V:72, A:64, CE:56, CM:48, N:48, D:52 } },
          { title: 'Cast Away',                         director: 'Zemeckis',     genre: 'Drama',    score: 52, verdict: 'stream',  pillars: { V:62, A:56, CE:64, CM:56, N:62, D:48 } },
          { title: 'Scary Movie',                       director: 'Wayans',       genre: 'Comedy',   score: 46, verdict: 'stream',  pillars: { V:46, A:46, CE:46, CM:58, N:52, D:48 } },
        ]
      }
    };

    // ══════════════════════════════════════════
    // HOF FILM DETAILS LOOKUP
    const hofDetails = {
      // ── 2024 ──
      'Dune: Part Two': { summary: "Paul Atreides unites with the Fremen to wage war against House Harkonnen. Villeneuve's grandest theatrical statement, 166 minutes of dune, prophecy, and sandworms.", budget: "$190M", bullets: ["Shot natively in 65mm IMAX with aspect ratio expansion","Hans Zimmer's percussive score demands a calibrated theater","Greig Fraser's cinematography engineered for the largest canvas","Massive practical location work in Jordan and Abu Dhabi","45-day exclusive theatrical window confirmed pre-release"], fact: "Villeneuve filmed so extensively in 65mm IMAX that opening-weekend IMAX theaters sold out two weeks in advance." },
      'Alien: Romulus': { summary: "Young space colonizers come face-to-face with the most terrifying lifeform in the universe. Álvarez returns the franchise to its claustrophobic horror roots.", budget: "$80M", bullets: ["Sound design built around LFE and proximity dread","Practical creature effects and animatronics","Dolby Atmos mix with extreme dynamic range","Horror genre amplified by communal viewing","Director's pedigree (Evil Dead, Don't Breathe)"], fact: "Álvarez used the original 1979 Alien xenomorph head mold, preserved in Ridley Scott's personal archive." },
      'Twisters': { summary: "A retired tornado-chaser is pulled back into the field by a young storm-tracker testing new technology. Spectacle-driven disaster cinema.", budget: "$155M", bullets: ["Dolby Atmos mix designed around bass-heavy tornado scenes","Practical wind effects and on-location storm chasing","Large IMAX-formatted action set pieces","Lower trailer view counts than expected","No native IMAX filming"], fact: "The production used real cargo planes to create on-set wind speeds exceeding 200 mph." },
      'Kingdom of the Planet of the Apes': { summary: "Many years after Caesar, a young ape questions everything he's been taught. Wes Ball continues the franchise with a more contemplative scope.", budget: "$160M", bullets: ["WETA motion capture VFX at career peak","Visual ambition softened by darker color grading","Strong theatrical sound mix","Moderate cultural momentum vs. prior trilogy","Standard wide release with healthy theatrical window"], fact: "Owen Teague spent a year training in primate movement under Andy Serkis's mentorship before filming began." },
      'Inside Out 2': { summary: "Riley enters puberty and her emotions must make room for new arrivals — including Anxiety. Pixar returns to its highest-grossing original concept.", budget: "$200M", bullets: ["Animation richness benefits from theatrical projection","Sound design supports emotional beats, not LFE","Massive cultural momentum and family demand","High advance ticket velocity through summer","Pixar's biggest theatrical launch since 2019"], fact: "It became the highest-grossing animated film of all time, surpassing Frozen II within six weeks." },
      'Deadpool & Wolverine': { summary: "Wade Wilson teams up with a reluctant Wolverine across the multiverse. Marvel's first R-rated MCU entry — and its biggest comeback story.", budget: "$200M", bullets: ["Highest-anticipated 2024 release by metrics","Crowd-reactive comedy and action genre","Standard digital cinematography","Strong Dolby Atmos mix","Communal viewing essential to comedy"], fact: "Hugh Jackman came out of Wolverine retirement after a personal call from Reynolds — the deal was reportedly closed in 20 minutes." },
      'Gladiator II': { summary: "Years after Maximus's death, Lucius returns to Rome's coliseum to fight for the soul of the empire. Ridley Scott at 86, swinging hard.", budget: "$310M", bullets: ["Massive practical sets across Malta and Morocco","Ridley Scott's career theatrical pedigree","Strong original score and sound mix","Sequel to a beloved 2000 original","No native IMAX, but premium format support"], fact: "Scott built a fully functional half-scale Colosseum on Malta — the largest set ever constructed in the franchise." },
      'Furiosa': { summary: "Snatched from the Green Place, young Furiosa falls into the hands of a great biker horde led by Warlord Dementus. Miller's Mad Max prequel.", budget: "$168M", bullets: ["George Miller's elite theatrical pedigree","Practical stunts and real vehicle action","Tom Holkenborg's industrial bass-heavy score","Lower trailer momentum than Fury Road","Australian outback location filming"], fact: "The Doof Warrior wagon from Fury Road was rebuilt and used for one shot — a wink for fans of the original." },
      'A Quiet Place: Day One': { summary: "A terminally-ill poet navigates the first day of the alien invasion through silent streets of Manhattan. A prequel built on quiet.", budget: "$67M", bullets: ["Genre defined by silence — sound design IS the experience","Theater quiet enhances tension dramatically","Horror crowd-reactive viewing","Lower budget visible vs. prior entries","Established franchise with strong fanbase"], fact: "The silent sequences forced theater chains to print warnings asking audiences not to eat loud snacks." },
      'The Substance': { summary: "An aging celebrity uses a black-market drug that creates a younger version of herself. Body horror as social commentary.", budget: "$17.5M", bullets: ["Heavy practical body horror effects","Visually striking but smaller-scale cinematography","Limited theatrical release reduces urgency","Stream-friendly art-house distribution","Cult cultural momentum after Cannes"], fact: "Coralie Fargeat used over 50 gallons of fake blood and 10 prosthetic bodysuits for Demi Moore's transformation scenes." },

      // ── 2023 ──
      'Oppenheimer': { summary: "The story of J. Robert Oppenheimer's role in the Manhattan Project. Three hours of moral physics, shot in IMAX 65mm including the first black-and-white IMAX film stock.", budget: "$100M", bullets: ["First-ever black-and-white IMAX film stock created for this film","Practical Trinity test recreation without CGI","Ludwig Göransson's score is a sonic centerpiece","Native IMAX 65mm filming throughout","Awards-season cultural momentum during release"], fact: "Nolan recreated the Trinity nuclear test using gasoline, propane, magnesium, and aluminum powder — no digital effects." },
      'Mission: Impossible — Dead Reckoning': { summary: "Ethan Hunt faces a sentient AI threatening global security. McQuarrie continues the franchise's commitment to practical insanity.", budget: "$291M", bullets: ["Cruise's motorcycle cliff jump — fully practical","Dolby Atmos and IMAX format support","McQuarrie's directorial pedigree","Strong cinematographic ambition","Theatrical window protection from Paramount"], fact: "Cruise practiced the motorcycle BASE jump 500+ times — including 13,000 motorcycle jumps and 30,000 skydives." },
      'Killers of the Flower Moon': { summary: "Members of the Osage tribe are murdered for their oil wealth in 1920s Oklahoma. Scorsese's epic American crime tragedy at 206 minutes.", budget: "$200M", bullets: ["Scorsese's career theatrical pedigree","Rodrigo Prieto's cinematography","Robbie Robertson's final score","Long runtime suits theatrical viewing","Apple TV+ release after theatrical window"], fact: "Robbie Robertson composed the score while battling cancer; the film is dedicated to him following his death just before release." },
      'Guardians of the Galaxy Vol. 3': { summary: "Peter Quill rallies his team to defend Rocket and the universe from the High Evolutionary. James Gunn's emotional MCU farewell.", budget: "$250M", bullets: ["Strong MCU cultural momentum","Practical effects mixed with VFX","Action-comedy crowd appeal","Dolby Atmos certified mix","Standard wide theatrical release"], fact: "Bradley Cooper insisted Rocket's emotional arc be the centerpiece — Gunn rewrote the script after their conversation." },
      'Mission: Impossible — Dead Reckoning_alt': { summary: "Duplicate entry placeholder", budget: "—", bullets: [], fact: "" },
      'Barbie': { summary: "Barbie suffers a crisis that leads her to question her world and existence. Gerwig's pink-saturated philosophical comedy that became a global phenomenon.", budget: "$145M", bullets: ["Massive cultural momentum and shared event status","Crowd-reactive comedy genre","Lavish production design rewards the big screen","Theatrical-only release window","Strong advance ticket sales velocity"], fact: "Production designer Sarah Greenwood depleted the global supply of fluorescent pink paint while building Barbieland sets." },
      'The Creator': { summary: "Against a future war between humans and AI, a former operative hunts down a weapon that takes the form of a child. Edwards on a low budget, big swing.", budget: "$80M", bullets: ["Practical location filming across Asia","Cinematography pushes scope on a modest budget","Hans Zimmer's score complements the visuals","Original IP — moderate cultural momentum","Standard wide release"], fact: "Edwards shot the film on a $30,000 Sony FX3 camera package — extraordinary for a major studio sci-fi feature." },
      'Ant-Man and the Wasp: Quantumania': { summary: "Scott Lang and family explore the Quantum Realm and confront Kang the Conqueror. The disappointing start to Marvel's Phase Five.", budget: "$200M", bullets: ["Dense VFX without strong creative direction","Lower critical and cultural response","Standard MCU IMAX support","Kang the Conqueror introduction underwhelms","No premium format exclusivity"], fact: "It was the first MCU film to drop more than 70% in its second weekend — a turning point in Marvel brand momentum." },
      'Avatar: The Way of Water (re-release)': { summary: "Re-issue of Cameron's underwater epic ahead of Avatar 3's marketing cycle. Native 3D HFR experience returns to large-format screens.", budget: "—", bullets: ["48fps HFR projection rare outside premium theaters","Cameron's water photography unmatched","3D presentation engineered for theaters only","Limited re-release reduces urgency","Strong cultural callback for original audience"], fact: "Disney re-released this specifically to maintain awareness for Avatar 3 — a rare strategy for a non-anniversary release." },
      'The Marvels': { summary: "Carol Danvers teams with Kamala Khan and Monica Rambeau when their powers become entangled. The first MCU film to underperform its predecessor significantly.", budget: "$274M", bullets: ["MCU brand fatigue affecting cultural momentum","Standard wide release","Strong Dolby Atmos and IMAX support","Action sequences engineered for theaters","Lower audience response than expected"], fact: "It became the lowest-grossing MCU film theatrically by a wide margin — despite a $274M budget." },
      'Indiana Jones and the Dial of Destiny': { summary: "An aging Indy hunts for a lost artifact tied to Nazi physicists. Mangold takes the reins from Spielberg for the franchise's final entry.", budget: "$294M", bullets: ["John Williams's score is theatrically essential","Franchise legacy and nostalgia value","Practical stunt and action sequences","Audience reception softer than legacy entries","Disney's wide theatrical commitment"], fact: "It's John Williams's final film score; he came out of retirement at 91 because he 'couldn't say no to Indy.'" },

      // ── 2022 ──
      'Top Gun: Maverick': { summary: "Pete 'Maverick' Mitchell trains a new generation of Top Gun pilots for a near-impossible mission. Practical aerial filmmaking pushed to its absolute limit.", budget: "$170M", bullets: ["Practical aerial photography with real F/A-18 fighter jets","Pilots performed actual G-force maneuvers, no green screen","Hans Zimmer score plus original Lady Gaga track","36-year cultural anticipation","Theatrical-only window heavily defended by Cruise"], fact: "Tom Cruise personally trained every cast member in aerial photography for over 18 months." },
      'Avatar: The Way of Water': { summary: "Jake Sully and Neytiri must protect their family when an ancient threat resurfaces. Cameron's 13-years-in-the-making sequel pushes underwater 3D HFR to new heights.", budget: "$350M", bullets: ["48fps high frame rate native projection","Underwater motion capture invented for this film","Cameron's elite theatrical pedigree","13 years of cultural anticipation","Premium-format-first release strategy"], fact: "Kate Winslet held her breath for 7 minutes and 14 seconds in one underwater take." },
      'Doctor Strange in the Multiverse of Madness': { summary: "Strange enlists Wanda's help when a new threat from across realities emerges. Sam Raimi's horror sensibility brings teeth to the MCU.", budget: "$200M", bullets: ["Raimi's stylized direction is a theatrical asset","Strong MCU cultural momentum post-No Way Home","Action-horror crowd-reactive genre","Standard MCU IMAX release","Solid Dolby Atmos and 3D options"], fact: "Sam Raimi inserted his cursed Evil Dead camera move at least 6 times — and brought his Oldsmobile Delta 88 prop for a cameo." },
      'The Batman': { summary: "A reclusive Bruce Wayne investigates the Riddler's killings across a corrupt Gotham. Reeves's noir vision shot in low-light cinematography.", budget: "$185M", bullets: ["Greig Fraser's low-light cinematography needs projection","Michael Giacchino's score is sonically immense","Three-hour runtime suits theatrical viewing","Reeves's directorial craft","Native IMAX 65mm for select sequences"], fact: "Robert Pattinson kept his Batsuit after filming; producers had to commission a duplicate for the sequel." },
      'Everything Everywhere All at Once': { summary: "An overwhelmed laundromat owner connects with parallel-universe versions of herself to save the multiverse. The Daniels' chaotic A24 masterwork.", budget: "$25M", bullets: ["Indie constraints limit visual scale","Sound design dense but not LFE-driven","Cultural momentum built post-release via Oscars","Crowd-reactive comedy moments","Limited theatrical release initially"], fact: "The Daniels designed the parallel-universe edits using a custom physics engine to keep cuts scientifically consistent." },
      'Thor: Love and Thunder': { summary: "Thor enlists Valkyrie, Korg, and Jane Foster to stop Gorr the God Butcher. Waititi's irreverent sequel divides audiences.", budget: "$250M", bullets: ["MCU cultural momentum remains strong","Reduced critical reception vs. Ragnarok","Standard wide theatrical release","Dolby Atmos certified action sequences","No native IMAX filming"], fact: "Christian Bale shaved his head with a single-blade razor on set and committed to all of Gorr's gaunt makeup for 90 days." },
      'Nope': { summary: "The residents of an isolated California town witness a mysterious phenomenon in the sky. Peele's most cinematic film, shot in IMAX 65mm.", budget: "$68M", bullets: ["Native IMAX 65mm filming for sky sequences","Hoyte van Hoytema's cinematography","Strong horror crowd-reactive genre","Original Peele IP — moderate momentum","Standard wide release"], fact: "Peele invented his own camera mount to film a horse mid-gallop at IMAX resolution." },
      'Black Panther: Wakanda Forever': { summary: "Wakanda's leaders fight to protect their nation while grieving the loss of King T'Challa. Coogler's emotional sequel after Chadwick Boseman's death.", budget: "$250M", bullets: ["MCU cultural momentum and brand power","Tribute element drives audience interest","Standard IMAX and Dolby Atmos support","Underwater action requires theater scale","Ludwig Göransson's score"], fact: "Coogler rewrote the entire script after Boseman's death — the original would have centered on T'Challa returning from the Blip." },
      'Elvis': { summary: "The life of Elvis Presley through his complicated relationship with manager Tom Parker. Luhrmann's maximalist musical biography.", budget: "$85M", bullets: ["Luhrmann's hyperkinetic editing rewards the big screen","Music-driven sound mix essential","Concert sequences engineered for theaters","Strong adult audience cultural momentum","No native IMAX filming"], fact: "Austin Butler stayed in character for over two years — and reportedly developed a permanent voice change." },
      'Bullet Train': { summary: "Several assassins on a high-speed Japanese train cross paths. Leitch's color-saturated action comedy.", budget: "$90M", bullets: ["Stylized action sequences benefit from theaters","Bass-heavy industrial sound design","Brad Pitt star power drives momentum","Standard wide release","No premium format exclusivity"], fact: "The bullet train sets were built on hydraulic gimbals to simulate genuine 200-mph movement." },

      // ── 2021 ──
      'Spider-Man: No Way Home': { summary: "Peter Parker asks Doctor Strange to make everyone forget his identity — opening the multiverse. The cinematic event of the post-pandemic era.", budget: "$200M", bullets: ["Highest cultural momentum of any 2021 release","Three-Spider-Man cameo as a generational moment","Strong MCU IMAX support","Theatrical-only window during pandemic recovery","Massive advance ticket sales velocity"], fact: "Marvel kept Tobey Maguire and Andrew Garfield's involvement secret for 14 months — leak protocols stricter than for Endgame." },
      'Dune': { summary: "Paul Atreides leads House Atreides to the desert planet Arrakis. Villeneuve's first installment proves the unfilmable book filmable.", budget: "$165M", bullets: ["Greig Fraser's IMAX-formatted cinematography","Hans Zimmer's earth-shaking score","Native IMAX presentation","Heavy practical location work in Jordan and Abu Dhabi","Day-and-date HBO Max release dampens score"], fact: "Zimmer turned down Nolan's Tenet score to compose Dune — saying it was the project he'd waited 40 years for." },
      'No Time to Die': { summary: "Bond is pulled out of retirement when his old friend Felix Leiter seeks his help. Craig's final outing as 007, two years delayed by COVID.", budget: "$301M", bullets: ["Hans Zimmer's score and Billie Eilish's title song","Aston Martin practical car chase sequences","Cinematic franchise pedigree","2-year cultural anticipation","Pandemic-era release strategy"], fact: "Eight Aston Martin DB5 replicas were destroyed on screen — each costing $4M apiece." },
      'Shang-Chi and the Legend of the Ten Rings': { summary: "Shang-Chi confronts his past after being drawn back into his father's terrorist organization. Cretton's MCU debut.", budget: "$150M", bullets: ["Pandemic-era theatrical-only release","Strong MCU brand momentum","Wuxia-influenced action design","Standard IMAX release","New franchise launch"], fact: "Simu Liu trained in over 12 martial arts styles for 9 months — including stunt-driving and high-wire work." },
      'Eternals': { summary: "An ancient race of immortals emerges from hiding to protect Earth. Chloé Zhao's experimental MCU entry.", budget: "$200M", bullets: ["Zhao's natural-light photography","Standard wide MCU release","Critical reception softer than other MCU entries","Strong cinematographic ambition","Theatrical-only window"], fact: "Zhao filmed on location across five continents — making it the most-traveled MCU production to date." },
      'Godzilla vs. Kong': { summary: "The two MonsterVerse titans finally clash on the surface and below. Adam Wingard's spectacle showpiece.", budget: "$200M", bullets: ["IMAX-formatted action sequences","Bass-heavy creature audio mix","Day-and-date HBO Max release dampens urgency","Strong franchise momentum","Standard wide release"], fact: "The Hong Kong neon-lit fight was the most complex VFX shot in MonsterVerse history — over 18 months of post-production." },
      'The Suicide Squad': { summary: "A motley crew of antiheroes is sent to a remote South American island. James Gunn's violent R-rated reboot.", budget: "$185M", bullets: ["Day-and-date HBO Max release dampens urgency","Strong R-rated action sequences","Gunn's stylized direction","Cultural momentum lower than expected","Standard wide release"], fact: "Gunn took the project after his temporary firing from Marvel — DC let him pick any character, and he chose Polka-Dot Man." },
      'Black Widow': { summary: "Natasha Romanoff returns to her Russian roots in a story between Civil War and Infinity War. The first MCU release post-pandemic.", budget: "$200M", bullets: ["Day-and-date Disney+ Premier Access release","Pandemic-era release strategy","Strong MCU brand awareness","Cate Shortland's character-focused direction","Action set pieces designed for theaters"], fact: "Scarlett Johansson sued Disney over the Premier Access release — leading to a multi-million-dollar settlement." },
      'Venom: Let There Be Carnage': { summary: "Eddie Brock and Venom face off against serial killer Cletus Kasady — host to Carnage. Serkis directs the rapid-fire sequel.", budget: "$110M", bullets: ["Sequel cultural momentum","Standard wide theatrical release","Action-comedy crowd appeal","No premium format exclusivity","Quick 90-minute runtime"], fact: "Tom Hardy improvised much of his banter with Venom — production used a hidden earpiece to feed Venom's lines in real time." },
      'Last Night in Soho': { summary: "An aspiring fashion designer is transported to 1960s London where she encounters a glamorous singer. Edgar Wright's stylish psychological thriller.", budget: "$43M", bullets: ["Wright's kinetic editing and cinematography","60s soundtrack is sonically essential","Limited release reduces urgency","Original IP — moderate cultural momentum","Strong cinematographic ambition"], fact: "Anya Taylor-Joy performed all her own singing — recorded live on set rather than dubbed." },

      // ── 2020 ──
      'Tenet': { summary: "A CIA agent works to prevent World War III using time inversion. Nolan's most complex puzzle box, released in the depths of COVID.", budget: "$200M", bullets: ["Native IMAX 65mm filming throughout","Ludwig Göransson's inverted-time score","Pandemic-limited theatrical access","Practical 747 plane crash sequence","Theatrical-only commitment by Nolan"], fact: "Nolan crashed a real Boeing 747 for the airport scene — it was cheaper than CGI and rebuilding miniature models." },
      'Mulan': { summary: "A young Chinese woman disguises herself as a soldier to take her father's place in the army. Niki Caro's live-action Disney remake.", budget: "$200M", bullets: ["Disney+ Premier Access ($29.99) release","Pandemic-era release strategy","Strong cinematography and scope","Reduced theatrical scope dramatically","Mixed critical reception"], fact: "Disney spent $200M production plus $100M marketing — only to release it directly to Premier Access in major markets." },
      'The New Mutants': { summary: "Five young mutants discover their powers while imprisoned in a mysterious facility. Boone's long-delayed X-Men entry.", budget: "$67M", bullets: ["Multiple-year delay before release","Standard wide theatrical release","Pandemic-limited audience","Horror-influenced X-Men direction","Mixed cultural anticipation"], fact: "Production wrapped in 2017 — the film sat on the shelf for three years through corporate mergers, COVID, and reshoot disputes." },
      'Unhinged': { summary: "After a confrontation with a stranger at a traffic light, a young mother is stalked through her city. Russell Crowe in a road-rage thriller.", budget: "$33M", bullets: ["First major theatrical release after COVID shutdown","Limited theater capacity in August 2020","Practical car chase sequences","Modest budget visible in scope","Genre-driven momentum"], fact: "This was the first major Hollywood release to play in reopened US theaters during the pandemic." },
      'Wonder Woman 1984': { summary: "Diana Prince comes face-to-face with Cheetah and Maxwell Lord in 1984 Washington. Jenkins's color-saturated sequel.", budget: "$200M", bullets: ["Day-and-date HBO Max release","Pandemic-era release strategy","Strong cultural momentum despite distribution","Standard wide release","Reduced theatrical scope"], fact: "Patty Jenkins shot a TIE Fighter cameo that was eventually cut — but exists in deleted scenes as an Easter egg." },
      'Soul': { summary: "A jazz pianist must reconcile his ambitions with the meaning of existence. Pete Docter's Pixar meditation on purpose.", budget: "$150M", bullets: ["Direct-to-Disney+ release (no theatrical)","Strong critical and cultural acclaim","Trent Reznor and Atticus Ross score","Animation craft at peak Pixar","No theatrical experience available"], fact: "Trent Reznor and Atticus Ross composed the score over 18 months — their first animated film and first family-rated work." },
      'Onward': { summary: "Two elf brothers embark on a quest to spend one more day with their late father. Pixar's overlooked pandemic-era release.", budget: "$175M", bullets: ["Theatrical release cut short by pandemic","Direct-to-Disney+ shortly after","Strong animation craft","Family genre cultural appeal","Pixar brand strength"], fact: "It became the last Pixar film to receive a wide theatrical release before the pandemic." },
      'The Invisible Man': { summary: "After her abusive boyfriend takes his own life, a woman believes someone — or something — is stalking her. Whannell's tight, taut thriller.", budget: "$7M", bullets: ["Pre-pandemic February release","Strong sound design (Benjamin Wallfisch)","Modest budget visible in scope","Horror genre theatrical viability","Cultural momentum built post-release"], fact: "Whannell shot the film in just 42 days for $7M — and it grossed over $144M, making it one of 2020's most profitable releases." },
      'Greyhound': { summary: "A US Navy commander leads a convoy through the Battle of the Atlantic. Tom Hanks-written war thriller.", budget: "$50M", bullets: ["Apple TV+ exclusive — no theatrical release","Strong sound design for naval combat","Modest visual scope","No theatrical viewing options","Solid Hanks performance"], fact: "Hanks wrote the screenplay himself and reportedly took a major pay cut to ensure the film could be made." },
      'Birds of Prey': { summary: "Harley Quinn joins forces with three women to protect a girl with a stolen diamond. Cathy Yan's chaotic, color-saturated DC entry.", budget: "$84M", bullets: ["February 2020 release — just before COVID","Strong stylized action sequences","Margot Robbie's central performance","R-rated cultural appeal","Standard wide release"], fact: "Yan had to recut the trailer four times — early audiences didn't realize Harley Quinn was the main character." },

      // ── 2019 ──
      'Avengers: Endgame': { summary: "The remaining Avengers undertake a final mission to undo Thanos's snap. The culmination of 22 films and 11 years of MCU storytelling.", budget: "$356M", bullets: ["100M+ trailer views in 24 hours","Franchise finale modifier (+6) applied","Practical and VFX battle scale","Native IMAX action sequences","Cultural moment unmatched in modern cinema"], fact: "The final battle features 64 superheroes on screen simultaneously — the largest VFX shot in cinema history at release." },
      '1917': { summary: "Two British soldiers must deliver a message that could save 1,600 men. Sam Mendes's WWI epic, presented as a continuous take.", budget: "$95M", bullets: ["Roger Deakins's continuous-take cinematography","Practical location and set work","Thomas Newman's score","Strong awards-season cultural momentum","Theatrical-only release strategy"], fact: "Deakins and Mendes invented new camera rigs and choreographed every scene over 9 months before filming a single shot." },
      'Once Upon a Time in Hollywood': { summary: "A faded TV actor and his stunt double navigate 1969 Los Angeles. Tarantino's love letter to old Hollywood, with one of his most violent climaxes.", budget: "$96M", bullets: ["Robert Richardson's 35mm cinematography","Period detail and production design","Tarantino's elite theatrical pedigree","Strong cultural and critical momentum","Limited LFE-dependent audio"], fact: "Tarantino built a $7M recreation of 1969 Hollywood Boulevard — including 1960s storefronts, signage, and 200 period vehicles." },
      'Ford v Ferrari': { summary: "Carroll Shelby and Ken Miles build a revolutionary race car for Ford to challenge Ferrari at Le Mans. Mangold's practical-effects love letter.", budget: "$97M", bullets: ["Practical Le Mans racing footage","Sound design built around engine roar","Marco Beltrami and Buck Sanders score","Awards-season cultural momentum","Standard wide release"], fact: "The production used 12 real GT40 race cars — including two original 1966 models on loan from private collections worth $20M+ each." },
      'Spider-Man: Far From Home': { summary: "Peter Parker's European vacation is interrupted by Nick Fury and a multidimensional threat. The post-Endgame MCU palate cleanser.", budget: "$160M", bullets: ["Strong post-Endgame cultural momentum","Standard MCU IMAX support","Practical location filming in Europe","Tom Holland's central performance","Mid-tier MCU budget"], fact: "Mysterio's VR illusions were achieved with the largest LED screen ever built — 600 feet of curved displays surrounding the action." },
      'Joker': { summary: "Arthur Fleck spirals into madness in a decaying Gotham. Todd Phillips's gritty R-rated character study that grossed over $1 billion.", budget: "$55M", bullets: ["Joaquin Phoenix's transformative performance","Hildur Guðnadóttir's cello-driven score","Strong cultural momentum and Oscar buzz","Lawrence Sher's NYC cinematography","Standard wide release"], fact: "Phoenix lost 52 pounds for the role — leading to a physical and mental transformation he later said took two years to fully recover from." },
      'Parasite': { summary: "A poor family schemes their way into employment with a wealthy household. Bong Joon-ho's class satire that swept the Oscars.", budget: "$11M", bullets: ["Subtitled release limits theatrical scope","Modest budget visible in scope","Cultural momentum built post-Cannes","Communal viewing key to comedy beats","Limited LFE audio dependency"], fact: "Bong storyboarded every shot in advance — every single frame in Parasite exists as a hand-drawn panel from pre-production." },
      'The Lion King': { summary: "Photorealistic 'live action' remake of the 1994 animated classic. Favreau's technical achievement in virtual cinematography.", budget: "$260M", bullets: ["Photorealistic VFX across every frame","Hans Zimmer's revised score plus original songs","Strong nostalgic cultural momentum","Standard wide release","No live-action photography at all"], fact: "The film was technically shot in VR — Favreau and team filmed virtual cameras in a virtual Pride Rock built inside Unity engine." },
      'John Wick: Chapter 3': { summary: "Wick, excommunicado, fights to survive with a $14M bounty on his head. Stahelski's practical action craft at maximum intensity.", budget: "$75M", bullets: ["Practical stunts and gun-fu choreography","Strong franchise momentum","Tyler Bates and Joel J. Richard score","Action genre theatrical viability","Standard wide release"], fact: "Keanu Reeves trained for 6 months in Brazilian jiu-jitsu and Russian sambo — and broke a stuntman's nose in the library knife fight scene." },
      'Ad Astra': { summary: "An astronaut travels to the outer reaches of the solar system to find his missing father. James Gray's contemplative space drama.", budget: "$87M", bullets: ["Hoyte van Hoytema's elegant cinematography","Sound design balances quiet and bombast","Brad Pitt's restrained performance","Limited cultural momentum","Standard wide release"], fact: "Van Hoytema designed custom IMAX-compatible lenses specifically for this film — later used by Nolan on Tenet." },

      // ── 2018 ──
      'Avengers: Infinity War': { summary: "The Avengers unite against Thanos's quest for the Infinity Stones. The ambitious mid-point culmination of the Infinity Saga.", budget: "$316M", bullets: ["98M+ trailer views in 24 hours","Cultural moment unmatched at release","Native IMAX cinematography","Alan Silvestri's score","Massive MCU brand momentum"], fact: "It was the first Hollywood film shot entirely on IMAX digital cameras — a format previously reserved for select sequences only." },
      'Mission: Impossible — Fallout': { summary: "Hunt and his team race to prevent disaster after a mission gone wrong. McQuarrie's franchise peak with practical stunts beyond reason.", budget: "$178M", bullets: ["Cruise's HALO jump performed for real","Helicopter chase shot in real flight","Lorne Balfe's score","Strong franchise momentum","Native IMAX action sequences"], fact: "Cruise broke his ankle jumping between buildings — production paused for six weeks, and you can see the limp in the final cut." },
      'Black Panther': { summary: "T'Challa returns to Wakanda to take his place as king but must defend it from a vengeful enemy. Coogler's cultural phenomenon.", budget: "$200M", bullets: ["Massive cultural momentum and shared event status","Ludwig Göransson's afro-futurist score","Rachel Morrison's cinematography","Strong MCU brand support","Standard wide IMAX release"], fact: "Göransson recorded the score with a 70-piece choir, 92-piece orchestra, and traveled to Senegal to learn traditional African instruments." },
      'Ready Player One': { summary: "In 2045, players in a VR game called the OASIS hunt for a billionaire's hidden Easter egg. Spielberg's pop-culture playground.", budget: "$175M", bullets: ["Dense VFX and pop-culture imagery","Janusz Kamiński's cinematography","Alan Silvestri's score","Strong cultural anticipation","IMAX format support"], fact: "Spielberg secured over 100 separate licensing deals — including for the Iron Giant, Mecha Godzilla, and the DeLorean." },
      'A Quiet Place': { summary: "A family must live in silence to avoid hunting creatures attracted to sound. Krasinski's silent-horror breakthrough.", budget: "$17M", bullets: ["Genre defined by silence — theater quiet enhances it","Marco Beltrami's score sparingly used","Horror crowd-reactive genre","Strong cultural momentum","Practical creature effects"], fact: "Krasinski cast deaf actress Millicent Simmonds — and used her input to develop the film's silent ASL communication system." },
      'Incredibles 2': { summary: "Helen takes the spotlight as Elastigirl while Bob handles parenting duties. Brad Bird returns to his super-family.", budget: "$200M", bullets: ["Strong Pixar cultural momentum","Animation craft at peak","Michael Giacchino's jazz-influenced score","Family-genre theatrical appeal","14-year wait built anticipation"], fact: "Bird waited 14 years to make the sequel because he couldn't crack the story — he threw out the original 2009 sequel script entirely." },
      'Aquaman': { summary: "Arthur Curry confronts his royal heritage to prevent an undersea war. Wan's color-saturated underwater epic.", budget: "$160M", bullets: ["Underwater action requires theater scale","Strong cultural momentum","Standard wide IMAX release","Rupert Gregson-Williams's score","Practical and CGI hybrid"], fact: "Jason Momoa learned to hold his breath for over 4 minutes — performing his own underwater stunts for authentic body language." },
      'Jurassic World: Fallen Kingdom': { summary: "Owen and Claire return to Isla Nublar to rescue the dinosaurs from an erupting volcano. Bayona takes the franchise into Gothic territory.", budget: "$170M", bullets: ["Practical dinosaur animatronics","Strong franchise cultural momentum","Michael Giacchino's score","Standard wide release","Gothic indoor scope reduces IMAX value"], fact: "The Indoraptor animatronic was so realistic that crew members reportedly fled the set the first time it activated unexpectedly." },
      'Bohemian Rhapsody': { summary: "Queen and Freddie Mercury rise to Live Aid. Singer's controversial but commercially massive Queen biopic.", budget: "$52M", bullets: ["Music-driven sound mix essential","Live Aid recreation engineered for theaters","Strong adult audience cultural momentum","Rami Malek's central performance","Standard wide release"], fact: "Rami Malek wore custom prosthetic teeth that matched Mercury's exact dental records — and kept them after filming." },
      'Venom': { summary: "Eddie Brock bonds with an alien symbiote, gaining superhuman abilities. The first standalone Spider-Man villain film.", budget: "$100M", bullets: ["Strong Tom Hardy performance","Standard wide release","Mixed critical reception","Sony's first major MCU spinoff","Action sequences engineered for theaters"], fact: "Tom Hardy improvised the iconic 'lobster tank' scene — it wasn't in the script. The director kept it because the cast was 'genuinely terrified.'" },

      // ── 2017 ──
      'Dunkirk': { summary: "Allied soldiers from Belgium, the British Empire, and France are surrounded by the German Army and evacuated. Nolan's WWII fugue, 106 minutes of pure cinema.", budget: "$100M", bullets: ["75% shot in IMAX 65mm and 65mm large-format","Hans Zimmer's Shepard-tone score","Practical aerial and naval photography","Minimal dialogue — sound design is paramount","Nolan's theatrical commitment"], fact: "Nolan used real WWII Spitfires and a sunken French destroyer — the Maille-Brézé — as the wreckage centerpiece for the beach scenes." },
      'Blade Runner 2049': { summary: "K, a young blade runner, unearths a long-buried secret. Villeneuve's elegiac sequel with Roger Deakins's career-best work.", budget: "$185M", bullets: ["Roger Deakins's Oscar-winning cinematography","Hans Zimmer and Benjamin Wallfisch's score","Villeneuve's theatrical pedigree","Native IMAX presentation","Lower cultural momentum than expected"], fact: "Deakins shot the orange Las Vegas sequence on a soundstage with 7 million yellow LED lights — calibrated to mimic Saharan dust storms." },
      'Star Wars: The Last Jedi': { summary: "Rey seeks training from Luke Skywalker as the First Order closes in. Rian Johnson's polarizing entry that pushed the saga forward.", budget: "$317M", bullets: ["John Williams's score","Strong cultural momentum (92 CM score)","Native IMAX cinematography","Practical creature effects (Porg, Crait foxes)","Standard wide IMAX release"], fact: "Mark Hamill openly disagreed with Rian Johnson's interpretation of Luke — but later said the film was 'genuinely brilliant' on re-watch." },
      'War for the Planet of the Apes': { summary: "Caesar leads the apes into a deadly war with humans led by a ruthless colonel. Reeves's emotional capstone to the trilogy.", budget: "$150M", bullets: ["WETA motion capture at career peak","Strong cinematography (Michael Seresin)","Michael Giacchino's score","Standard wide release","Lower cultural momentum than other tentpoles"], fact: "Andy Serkis's motion-capture was so detailed that WETA artists called Caesar's CG eyes 'the windows to Andy's soul.'" },
      'Wonder Woman': { summary: "Diana of Themyscira leaves her home to end World War I. Patty Jenkins's breakthrough — DC's first universally-loved entry.", budget: "$149M", bullets: ["Strong cultural momentum","Rupert Gregson-Williams's score","Practical and CGI hybrid","Standard wide release","No native IMAX filming"], fact: "The No Man's Land sequence was added in reshoots — Jenkins fought studio notes to keep the iconic version." },
      'Guardians of the Galaxy Vol. 2': { summary: "Peter Quill learns the truth about his father. Gunn's color-saturated cosmic sequel.", budget: "$200M", bullets: ["Strong cultural momentum from original","Color-saturated cinematography","Tyler Bates's score plus needle drops","Standard MCU IMAX release","Comedy genre crowd appeal"], fact: "The opening Baby Groot dancing sequence was shot in a single 45-minute take — Gunn kept the camera rolling to capture spontaneous moments." },
      'Baby Driver': { summary: "A young getaway driver relies on the beat of his soundtrack to be the best in the game. Edgar Wright's musical-action hybrid.", budget: "$34M", bullets: ["Music synchronized to the editing","Strong sound design","Practical car stunts","Cultural momentum built post-release","Limited theatrical scale"], fact: "Every action sequence was choreographed to a specific song — Wright wrote the script while listening to the soundtrack on repeat for three years." },
      'Thor: Ragnarok': { summary: "Thor must escape Sakaar and stop Hela from destroying Asgard. Waititi's neon-saturated reinvention of the franchise.", budget: "$180M", bullets: ["Color-saturated cinematography rewards big screen","Mark Mothersbaugh's synth score","Crowd-reactive comedy genre","Strong MCU brand momentum","Standard wide IMAX release"], fact: "Waititi pitched the film as 'Big Trouble in Little China meets a Led Zeppelin album cover' — Marvel let him improvise 80% of the comedic dialogue." },
      'Spider-Man: Homecoming': { summary: "Peter Parker juggles high school and his hero duties as Vulture rises. Watts's grounded MCU-Sony co-production.", budget: "$175M", bullets: ["Strong MCU brand momentum","Lower budget vs. tentpole MCU","Standard wide release","Comedy-driven crowd appeal","No native IMAX filming"], fact: "Tom Holland was 19 when cast — and reportedly did his own gymnastics in the Washington Monument sequence." },
      'Justice League': { summary: "Bruce Wayne assembles a team to save Earth from a catastrophic threat. The compromised theatrical version, not the Snyder Cut.", budget: "$300M", bullets: ["Heavily reshot version visible in inconsistencies","Strong cultural momentum despite reception","Standard wide IMAX release","Hans Zimmer/Junkie XL replacement score","Action sequences engineered for theaters"], fact: "Henry Cavill's mustache for Fallout had to be CGI-removed in reshoots, costing approximately $25 million — the most expensive mustache in film history." },

      // ── 2016 ──
      'Rogue One: A Star Wars Story': { summary: "A group of rebels steals the plans for the Death Star. The first standalone Star Wars film with stronger war-movie sensibilities.", budget: "$200M", bullets: ["Greig Fraser's cinematography","Michael Giacchino's score","Strong Star Wars cultural momentum","Practical and CGI hybrid","Standard IMAX release"], fact: "Peter Cushing died in 1994 — his Grand Moff Tarkin appearance was achieved through CGI mapped over Guy Henry's live-action performance." },
      'Captain America: Civil War': { summary: "The Avengers split over the Sokovia Accords. The Russo Brothers escalate before Infinity War.", budget: "$250M", bullets: ["Massive MCU cultural momentum","Airport battle engineered for theaters","Standard MCU IMAX release","Henry Jackman's score","Black Panther's debut adds anticipation"], fact: "The airport battle was the most expensive single scene in MCU history at the time — every superhero required separate VFX teams." },
      'Batman v Superman': { summary: "Bruce Wayne wages war against Superman to prevent perceived future threats. Snyder's divisive DCEU mission statement.", budget: "$250M", bullets: ["Strong cultural momentum despite reception","Hans Zimmer/Junkie XL score","Standard wide IMAX release","Visually dense cinematography","Mixed critical response"], fact: "The Ultimate Edition adds 30 minutes — most cut by Warner Bros. for a shorter PG-13 cut. Snyder restored it on Blu-ray." },
      'Arrival': { summary: "Linguist Louise Banks attempts to communicate with alien visitors before global war erupts. Villeneuve's thoughtful pre-Dune sci-fi.", budget: "$47M", bullets: ["Jóhann Jóhannsson's haunting score","Bradford Young's cinematography","Modest budget visible in scope","Cultural momentum built post-Oscar nominations","Limited LFE-dependent audio"], fact: "Jóhannsson developed the alien language alongside the script — musical compositions and linguistic structure were built simultaneously." },
      'The Jungle Book': { summary: "Mowgli, a young boy raised by wolves, encounters Bagheera, Baloo, and Shere Khan. Favreau's photorealistic CGI breakthrough.", budget: "$175M", bullets: ["Photorealistic VFX across every frame","John Debney's revised score","Strong Disney cultural momentum","Standard wide release","Single live-action performer in shot"], fact: "Favreau shot the entire film on a soundstage in LA — only Neel Sethi (Mowgli) is real. Every other element is CGI." },
      'Doctor Strange': { summary: "A brilliant neurosurgeon turns to mystic arts after a career-ending accident. Derrickson's introduction of the MCU's magical side.", budget: "$165M", bullets: ["Inception-influenced reality-bending visuals","Strong Cumberbatch performance","Standard MCU IMAX release","Michael Giacchino's score","Mid-budget MCU spectacle"], fact: "The kaleidoscopic VFX required new fractal-generation software, later used in 2022's Multiverse of Madness." },
      'Hacksaw Ridge': { summary: "WWII medic Desmond Doss refuses to carry a weapon but saves 75 men at the Battle of Okinawa. Gibson's brutal return to directing.", budget: "$40M", bullets: ["Practical wartime sequences","Strong cinematography (Simon Duggan)","Awards-season cultural momentum","Audio mix essential to immersion","Standard wide release"], fact: "Gibson cast Andrew Garfield only after reading a personal letter Garfield wrote about the real Doss — a level of preparation that earned him the role." },
      'Suicide Squad': { summary: "A team of supervillains is recruited for a covert mission. Ayer's heavily-reshot first attempt at the franchise.", budget: "$175M", bullets: ["Strong cultural anticipation","Heavily reshot post-Deadpool success","Standard wide IMAX release","Music-driven sound mix","Mixed critical reception"], fact: "Warner Bros. hired the company that cut the Deadpool trailer to recut Suicide Squad — leading to over 30% reshoots." },
      'Deadpool': { summary: "Wade Wilson becomes a wisecracking mercenary with accelerated healing. Tim Miller's R-rated breakthrough that changed superhero filmmaking.", budget: "$58M", bullets: ["Strong cultural momentum and meme spread","R-rated comedy crowd appeal","Modest budget visible in scope","Standard wide release","Reynolds's 11-year passion project"], fact: "Ryan Reynolds personally leaked the original test footage in 2014 — leading to the fan campaign that forced Fox to greenlight the film." },
      'Zootopia': { summary: "A rookie rabbit cop teams with a con-artist fox to crack a missing-animals case. Disney's animated metaphor for prejudice.", budget: "$150M", bullets: ["Strong Disney brand momentum","Animation craft at peak","Michael Giacchino's score","Standard wide family release","No theatrical-format exclusivity"], fact: "The film took 6 years to develop — the original premise (Nick Wilde as protagonist) was rebuilt entirely two years before release." },

      // ── 2015 ──
      'Mad Max: Fury Road': { summary: "In a post-apocalyptic wasteland, Furiosa rebels against tyrant Immortan Joe. George Miller's 30-years-later sequel that redefined modern action cinema.", budget: "$150M", bullets: ["Practical stunts performed in-camera","Junkie XL's score","Native IMAX cinematography","Strong critical reception","Lower commercial momentum than expected"], fact: "Miller filmed 480 hours of footage — the average action sequence required 200+ camera setups." },
      'Star Wars: The Force Awakens': { summary: "Three decades after the Empire's defeat, a new threat rises. J.J. Abrams's franchise reawakening that became a cultural phenomenon.", budget: "$245M", bullets: ["100M+ trailer views — cultural moment","John Williams's score","Strong practical effects","Native IMAX action sequences","Massive franchise anticipation built over a decade"], fact: "Daisy Ridley wasn't told the contents of Rey's vision sequence until the day of filming — Abrams wanted her reactions to be genuine." },
      'The Revenant': { summary: "Hugh Glass survives a bear attack and seeks revenge against his abandoned guide. Iñárritu's brutal natural-light Western.", budget: "$135M", bullets: ["Emmanuel Lubezki's natural-light cinematography","Practical wilderness filming","Ryuichi Sakamoto's score","Cultural momentum built through awards","Standard wide release"], fact: "Iñárritu shot only with natural light — limiting filming to 90 minutes per day. Production lasted 9 months instead of the planned 3." },
      'Mission: Impossible — Rogue Nation': { summary: "Ethan Hunt and his team take on a rogue organization called The Syndicate. McQuarrie's first M:I, with the famous plane stunt.", budget: "$150M", bullets: ["Cruise's wing-walking plane stunt — practical","Practical car and motorcycle action","Standard wide release","Joe Kraemer's score","No premium format exclusivity"], fact: "Cruise hung off the A400M plane during takeoff at 5,000 feet — strapped to the fuselage with only safety wires. He did the shot 8 times." },
      'Jurassic World': { summary: "Twenty-two years after Jurassic Park, the park is open — and a new hybrid dinosaur escapes. Trevorrow's reboot that revived the franchise.", budget: "$150M", bullets: ["Strong franchise nostalgia momentum","Practical dinosaur animatronics","Michael Giacchino's score","Standard wide IMAX release","Family-genre crowd appeal"], fact: "It grossed over $1.6 billion worldwide — and held the record for fastest film to $1B until The Force Awakens broke it five months later." },
      'The Martian': { summary: "An astronaut is stranded on Mars and must survive until rescue. Scott's lighthearted scientific adventure based on Andy Weir's novel.", budget: "$108M", bullets: ["Dariusz Wolski's cinematography","Strong cultural momentum","Practical Mars sets in Jordan","Harry Gregson-Williams's score","Standard wide IMAX release"], fact: "NASA opened up their facilities to Scott for research — and afterwards called it the most scientifically accurate space film ever made." },
      'Avengers: Age of Ultron': { summary: "The Avengers must stop Ultron, an AI created to protect Earth that becomes a threat. Whedon's bridging sequel.", budget: "$444M", bullets: ["Strong MCU cultural momentum","Practical and CGI hybrid","Brian Tyler/Danny Elfman score","Standard wide IMAX release","Lower critical response than Infinity War"], fact: "James Spader's Ultron performance was motion-captured — he wore facial markers and a custom suit, allowing Whedon to retain his eye movements." },
      'Spectre': { summary: "Bond uncovers a vast criminal organization connected to his past. Mendes's Bond entry that mixed Craig's grit with classical formality.", budget: "$300M", bullets: ["Hoyte van Hoytema's cinematography","Practical Mexico City opening sequence","Thomas Newman's score","Strong franchise momentum","Standard wide IMAX release"], fact: "The Día de Muertos opening — one continuous shot lasting nearly 4 minutes — required 1,500 extras and 18 buildings rigged for the explosion." },
      'The Hateful Eight': { summary: "Eight strangers seek refuge in a Wyoming stagecoach stop during a blizzard. Tarantino's 70mm chamber Western.", budget: "$44M", bullets: ["Native 70mm Ultra Panavision filming","Robert Richardson's roadshow-style cinematography","Ennio Morricone's first Western score in decades","Limited theatrical scope","Standard wide release"], fact: "Tarantino bought the original 1969 Panavision 70mm lenses — last used for Ben-Hur — and personally tuned each one for this production." },
      'Ant-Man': { summary: "Cat burglar Scott Lang acquires the ability to shrink and is recruited as a thief-with-heart. Reed takes over after Edgar Wright departs.", budget: "$130M", bullets: ["Comedy-driven crowd appeal","Standard MCU release","Mid-budget MCU spectacle","Modest cultural momentum","No premium format exclusivity"], fact: "Edgar Wright spent 8 years developing the script — when he departed, Marvel kept most of his story beats but rewrote the comedic tone entirely." },

      // ── 2014 ──
      'Interstellar': { summary: "A team of explorers travels through a wormhole near Saturn to save humanity. Nolan's tear-jerking sci-fi opus that synced black-hole physics with cinema.", budget: "$165M", bullets: ["Native IMAX 65mm filming","Hans Zimmer's organ-driven score","Real black hole physics consulted by Kip Thorne","Practical sets and minimal CGI","Strong critical and cultural momentum"], fact: "The simulated black hole 'Gargantua' was so scientifically accurate that it led to two published physics papers — one from Caltech, one from Nolan's VFX team." },
      'Guardians of the Galaxy': { summary: "A band of misfits in space teams up to save the galaxy. Gunn's risk-taking that legitimized cosmic MCU storytelling.", budget: "$170M", bullets: ["Strong cultural breakout momentum","Tyler Bates's score plus oldies needle drops","Standard MCU release","Comedy-driven crowd appeal","Modest budget for MCU spectacle"], fact: "Bradley Cooper was paid only $200,000 for Rocket — but received a percentage of merchandise, which has since paid him over $50 million." },
      'Captain America: The Winter Soldier': { summary: "Steve Rogers struggles to embrace his role in the modern world while uncovering a conspiracy within S.H.I.E.L.D. The Russo Brothers' MCU breakthrough.", budget: "$170M", bullets: ["Practical action and stunt work","Henry Jackman's score","Strong cultural momentum","Standard MCU release","Mid-budget MCU spectacle"], fact: "The Russos got the directing job after pitching the elevator fight scene shot-for-shot in their interview — Marvel was sold within 5 minutes." },
      'Dawn of the Planet of the Apes': { summary: "A growing nation of evolved apes is threatened by a band of human survivors. Reeves's middle entry that surpassed the original.", budget: "$170M", bullets: ["WETA motion capture craftsmanship","Strong cinematography","Michael Giacchino's score","Standard wide release","Cultural momentum from trilogy strength"], fact: "Andy Serkis lobbied for and received an unprecedented motion-capture acting credit — leading to industry-wide changes in how the work is recognized." },
      'The Hobbit: The Battle of the Five Armies': { summary: "Bilbo and Company are forced to defend Erebor as armies converge. Jackson's final trip to Middle-earth.", budget: "$250M", bullets: ["48fps high frame rate option","Strong franchise momentum","Howard Shore's score","Standard wide IMAX release","Mixed critical reception"], fact: "Jackson shot the trilogy back-to-back over 266 days — and admits in interviews he was 'still figuring out the third film' when the cameras rolled." },
      'X-Men: Days of Future Past': { summary: "The X-Men send Wolverine back in time to prevent a war that threatens both humans and mutants. Singer's franchise reset.", budget: "$200M", bullets: ["Strong X-Men franchise momentum","John Ottman's score","Standard wide IMAX release","Mid-budget spectacle","Practical and CGI hybrid"], fact: "The film cleverly retconned X-Men: The Last Stand from continuity — allowing future films to ignore the most-hated entry in the series." },
      'Godzilla': { summary: "The world's most famous monster is pitted against malevolent creatures who threaten our existence. Edwards's measured reboot.", budget: "$160M", bullets: ["Restrained Godzilla reveals build to climax","Strong sound design","Alexandre Desplat's score","Standard wide release","No native IMAX filming"], fact: "Edwards intentionally limited Godzilla's screen time to 8 minutes across a 2-hour film — every appearance is engineered as an event." },
      'Edge of Tomorrow': { summary: "A soldier fighting aliens gets to relive the same day over and over. Liman's time-loop sci-fi that under-performed at the box office.", budget: "$178M", bullets: ["Practical exo-suit prop work","Strong action sequences","Christophe Beck's score","Standard wide release","Lower cultural momentum at the time"], fact: "Cruise wore the 85-pound exo-suit for 6 hours a day — and reportedly fell asleep in it between takes more than once." },
      'Transformers: Age of Extinction': { summary: "A mechanic and his daughter team with the Autobots to save Earth. Bay's fourth entry that broke records overseas.", budget: "$210M", bullets: ["IMAX 3D filming","Strong action sequences","Steve Jablonsky's score","Standard wide release","Critical reception abysmal"], fact: "Despite being one of 2014's most critically reviled films, it grossed over $1.1 billion globally — driven almost entirely by Chinese box office." },
      'The Amazing Spider-Man 2': { summary: "Peter Parker faces a new threat in the form of Electro. Webb's reboot sequel that ended the franchise prematurely.", budget: "$200M", bullets: ["Strong VFX work","Hans Zimmer's score","Standard wide release","Critical reception mixed","Setup-heavy story structure"], fact: "The film's poor reception led Sony to abandon the franchise and partner with Marvel — directly enabling Spider-Man: Homecoming." },

      // ── 2013 ──
      'Gravity': { summary: "Two astronauts work together to survive after a disaster destroys their shuttle. Cuarón's single-take space epic that won 7 Oscars.", budget: "$100M", bullets: ["Long single-take cinematography","Practical lighting via robotic LED box","Steven Price's score","Strong critical and cultural momentum","Native IMAX 3D presentation"], fact: "Cuarón and Lubezki invented a 'Light Box' — a 20-foot cube lined with 1.8 million LEDs — to simulate space lighting in real-time around the actors." },
      'Pacific Rim': { summary: "Giant monsters threaten humanity, and giant robots are built to fight them. Del Toro's love letter to kaiju and mecha cinema.", budget: "$190M", bullets: ["Practical mecha designs","Ramin Djawadi's score","Native IMAX 3D presentation","Standard wide release","Lower commercial momentum than expected"], fact: "Del Toro built 1:1 scale Jaeger cockpits with hydraulic gimbals — the actors genuinely got motion sickness during the battle sequences." },
      'Mission: Impossible — Ghost Protocol (re-release)': { summary: "Hunt and team go rogue to clear the IMF's name after being framed. Bird's directorial debut on the franchise.", budget: "$145M", bullets: ["Burj Khalifa scaling sequence — practical","Standard wide release","Michael Giacchino's score","Strong cultural momentum","No native IMAX filming"], fact: "Cruise climbed the actual Burj Khalifa exterior — the tallest building in the world — with no CGI replacements for the actor." },
      'Man of Steel': { summary: "Clark Kent learns of his origin as Krypton's last son. Snyder's DCEU launch and Cavill's Superman debut.", budget: "$225M", bullets: ["Hans Zimmer's score","Visually dense cinematography","Standard wide IMAX release","Strong cultural anticipation","Mixed critical response"], fact: "Snyder forced Cavill to do all his own training — leading to the actor gaining 30 pounds of muscle in 10 months without performance enhancers." },
      'Star Trek Into Darkness': { summary: "Captain Kirk leads his crew against a one-man weapon of mass destruction. Abrams's middle Trek entry that borrowed heavily from Wrath of Khan.", budget: "$190M", bullets: ["Strong Trek franchise momentum","Practical and CGI hybrid","Michael Giacchino's score","Standard wide IMAX release","Mixed reception due to Khan reveal"], fact: "Abrams later admitted the Cumberbatch-as-Khan reveal was a mistake — saying the secrecy 'didn't pay off the way we hoped.'" },
      'Iron Man 3': { summary: "Tony Stark must rebuild after his world is shattered by a powerful enemy. Black takes over after Favreau's departure.", budget: "$200M", bullets: ["Strong post-Avengers MCU momentum","Christmas-set storyline","Brian Tyler's score","Standard wide IMAX release","Mandarin twist divisive"], fact: "Shane Black insisted on the Christmas setting — Marvel resisted, but Black argued that Lethal Weapon proved it could work for action films." },
      'Fast & Furious 6': { summary: "Hobbs enlists Dom's crew to take down a mercenary organization. Lin's franchise peak before the tonal shifts of later entries.", budget: "$160M", bullets: ["Practical car stunts","Strong franchise cultural momentum","Lucas Vidal's score","Standard wide release","International market appeal"], fact: "The runway tank chase sequence used a real Spanish military runway — and required a permit that took 8 months to obtain." },
      'World War Z': { summary: "A former United Nations investigator tries to stop a zombie pandemic. Forster's troubled-production zombie epic that found its footing.", budget: "$190M", bullets: ["Massive zombie horde VFX","Strong sound design","Marco Beltrami's score","Standard wide release","Production reshoots visible in structure"], fact: "The film was so heavily reshot that the original ending — set in Russia — was scrapped entirely and replaced with the third act in Wales." },
      'Elysium': { summary: "A man embarks on a mission to bring equality to a polarized world. Blomkamp's sophomore effort with stronger production than story.", budget: "$115M", bullets: ["Strong production design","Standard wide release","Ryan Amon's score","Modest cultural momentum","Mixed critical reception"], fact: "Blomkamp built the Elysium space station on a soundstage — the curved horizon was achieved with a 70-foot-wide LED screen." },
      'Thor: The Dark World': { summary: "Thor unites with Loki to save Asgard and the nine worlds from a mysterious enemy. The MCU's most forgettable middle entry.", budget: "$170M", bullets: ["Standard MCU release","Strong franchise momentum","Brian Tyler's score","Mid-budget MCU spectacle","Mixed critical reception"], fact: "Taika Waititi later cited this film as the reason he took Ragnarok — wanting to give Thor a complete tonal overhaul." },

      // ── 2012 ──
      'The Dark Knight Rises': { summary: "Eight years after the Joker, Bruce Wayne emerges from exile to face Bane. Nolan's trilogy conclusion at 165 minutes.", budget: "$250M", bullets: ["Native IMAX 65mm filming","Hans Zimmer's score","Practical aerial sequences","Strong franchise cultural momentum","Wally Pfister's cinematography"], fact: "The opening plane hijacking was shot with real planes — a CIA cargo plane mid-flight, with stuntmen genuinely hanging by cables." },
      'The Avengers': { summary: "Earth's mightiest heroes assemble to stop Loki and his alien army. Whedon's franchise-defining team-up.", budget: "$220M", bullets: ["Massive cultural momentum and shared event status","Strong VFX team-up sequences","Alan Silvestri's score","Standard wide IMAX release","Phase One culmination"], fact: "The Battle of New York climax was the most complex VFX sequence in MCU history at the time — 25 minutes of digital work in one continuous setpiece." },
      'The Hobbit: An Unexpected Journey': { summary: "Bilbo Baggins joins a quest to reclaim the lost Dwarf Kingdom of Erebor. Jackson's return to Middle-earth in controversial 48fps HFR.", budget: "$180M", bullets: ["48fps high frame rate option","Strong franchise momentum","Howard Shore's score","Native IMAX presentation","Mixed reaction to HFR"], fact: "Jackson's 48fps HFR experiment divided critics — many called it 'too clear' and 'soap-opera-like,' delaying broader industry adoption of HFR." },
      'Skyfall': { summary: "Bond's loyalty to M is tested as her past comes back to haunt her. Mendes's poetic 50th-anniversary Bond entry.", budget: "$200M", bullets: ["Roger Deakins's cinematography","Thomas Newman's score","Strong franchise cultural momentum","Standard wide IMAX release","Awards-season buzz"], fact: "It became the first Bond film to gross over $1 billion — and Deakins's first major Hollywood blockbuster after years of indie work." },
      'Prometheus': { summary: "An expedition is sent to a distant moon to find the origins of mankind. Scott's prequel to Alien — divisive but ambitious.", budget: "$130M", bullets: ["Practical creature effects","Marc Streitenfeld's score","Standard wide IMAX release","Strong Scott cinematographic ambition","Mixed critical reception"], fact: "Scott built the alien environment on Iceland's Dettifoss waterfall — the largest waterfall in Europe by volume of water." },
      'The Amazing Spider-Man': { summary: "Peter Parker discovers a clue about what happened to his parents. Webb's reboot just 5 years after Raimi's trilogy.", budget: "$230M", bullets: ["James Horner's score","Practical and CGI hybrid","Standard wide release","Lower cultural momentum than Raimi","Quick franchise reboot"], fact: "Andrew Garfield reportedly auditioned 5 times — and was told he didn't get the role twice before being called back a third time." },
      'Django Unchained': { summary: "A freed slave seeks to rescue his wife from a brutal Mississippi plantation. Tarantino's revisionist Western.", budget: "$100M", bullets: ["Robert Richardson's cinematography","Strong cultural momentum","Practical period production","Standard wide release","Limited LFE-dependent audio"], fact: "Leonardo DiCaprio sliced his hand open on real glass during the dinner scene — and continued the take. The blood on his face is real." },
      'Brave': { summary: "A Scottish princess must rely on her bravery to undo a beastly curse. Pixar's first female-led film.", budget: "$185M", bullets: ["Strong animation craft","Patrick Doyle's score","Standard wide release","Family-genre cultural appeal","Mixed critical reception"], fact: "Merida's curly red hair required Pixar to develop entirely new physics simulations — taking over 3 years to complete." },
      'Battleship': { summary: "An armada of aliens engages a small international fleet of warships. Berg's notorious flop based on the board game.", budget: "$220M", bullets: ["Practical naval and military hardware","Strong VFX work","Steve Jablonsky's score","Standard wide release","Critical and commercial disaster"], fact: "The film cost Universal over $150M in losses — leading directly to the studio's pivot toward more franchise-driven releases." },
      'Men in Black 3': { summary: "Agent J travels back in time to save Agent K and the future. Sonnenfeld's third entry after a 10-year gap.", budget: "$225M", bullets: ["Practical and CGI hybrid","Strong franchise cultural momentum","Danny Elfman's score","Standard wide release","Mid-tier franchise momentum"], fact: "It was the longest gap between major studio sequels since Star Wars Episode I — 10 years after Men in Black II in 2002." },

      // ── 2011 ──
      'Harry Potter and the Deathly Hallows Pt. 2': { summary: "Harry, Ron, and Hermione search for Voldemort's Horcruxes as the Battle of Hogwarts unfolds. The franchise finale.", budget: "$250M", bullets: ["Massive franchise finale momentum","Strong VFX work","Alexandre Desplat's score","Standard wide IMAX 3D release","Cultural moment of the decade"], fact: "The Battle of Hogwarts required over 1,000 VFX artists working for 18 months — making it the largest VFX team ever assembled at the time." },
      'Mission: Impossible — Ghost Protocol': { summary: "Hunt and his team go rogue to clear the IMF's name after being framed for the bombing of the Kremlin. Brad Bird's directorial debut on the franchise.", budget: "$145M", bullets: ["Burj Khalifa scaling sequence — practical","Native IMAX action sequences","Michael Giacchino's score","Strong franchise momentum","Standard wide release"], fact: "Cruise climbed the actual Burj Khalifa — the world's tallest building — with no CGI replacements for the actor." },
      'Rise of the Planet of the Apes': { summary: "A substance designed to help the brain repair itself gives advanced intelligence to a chimpanzee named Caesar. The franchise reset.", budget: "$93M", bullets: ["WETA motion capture breakthrough","Andy Serkis's career-defining performance","Patrick Doyle's score","Standard wide release","Strong critical reception"], fact: "WETA's motion-capture work on Caesar's eyes was so detailed that it set a new industry standard for digital character emotion." },
      'Transformers: Dark of the Moon': { summary: "The Autobots learn of a Cybertronian spacecraft hidden on the Moon. Bay's third Transformers entry — the visually busiest yet.", budget: "$195M", bullets: ["Native IMAX 3D filming","Strong franchise cultural momentum","Steve Jablonsky's score","Standard wide release","Lower critical reception"], fact: "Bay shot 60% of the Chicago invasion sequence with real military cooperation — including National Guard Black Hawks and a Bradley fighting vehicle." },
      'Captain America: The First Avenger': { summary: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a serum. Marvel's WWII-set MCU launch.", budget: "$140M", bullets: ["Period production design","Alan Silvestri's score","Standard MCU release","Mid-budget MCU spectacle","Strong franchise launch"], fact: "Chris Evans turned down the role 3 times before Robert Downey Jr. personally convinced him to take it — over a 4-hour dinner." },
      'X-Men: First Class': { summary: "In the 1960s, mutant powers led X-Men founders to band together to stop the Hellfire Club. Vaughn's prequel that revitalized the franchise.", budget: "$160M", bullets: ["Period production design","Henry Jackman's score","Standard wide release","Strong critical reception","Mid-budget spectacle"], fact: "Vaughn shot the entire film in 14 weeks — an extraordinarily compressed schedule, with multiple scenes filmed simultaneously across three units." },
      'Thor': { summary: "The powerful but arrogant warrior Thor is cast out of Asgard and sent to live among humans. Branagh's Shakespearean MCU launch.", budget: "$150M", bullets: ["Strong VFX work","Patrick Doyle's score","Standard MCU release","Mid-budget MCU spectacle","Setup-heavy story structure"], fact: "Branagh directed the film with stage-trained eye contact — every Asgard scene was blocked like Shakespearean theater first, then adapted for camera." },
      'Super 8': { summary: "Friends witness a train crash and investigate subsequent unexplained events. Abrams's Spielbergian throwback.", budget: "$50M", bullets: ["Practical effects and period setting","Michael Giacchino's score","Standard wide release","Modest cultural momentum","Strong critical reception"], fact: "Abrams used the same anamorphic lenses that Spielberg used for E.T. — a deliberate choice to evoke 1980s Amblin cinematography." },
      'Pirates of the Caribbean: On Stranger Tides': { summary: "Jack Sparrow searches for the Fountain of Youth. The fourth Pirates film without Verbinski or Bloom.", budget: "$378M", bullets: ["Hans Zimmer's score","3D native filming","Standard wide release","Lower critical reception","Franchise momentum waning"], fact: "Its $378M budget made it the most expensive film ever produced at the time — a record held until 2023's Indiana Jones and the Dial of Destiny." },
      'Green Lantern': { summary: "A test pilot is granted an alien ring that bestows him with superpowers. Campbell's notorious DC misfire.", budget: "$200M", bullets: ["Heavy CGI suit","Standard wide release","James Newton Howard's score","Modest cultural momentum","Critical and commercial disaster"], fact: "Ryan Reynolds later wrote a Deadpool 2 scene mocking his own Green Lantern performance — and joked that 'this is my way of healing.'" },

      // ── 2010 ──
      'Inception': { summary: "A thief who enters the dreams of others is offered a chance to have his criminal history erased. Nolan's puzzle box that became a cultural phenomenon.", budget: "$160M", bullets: ["Practical zero-gravity hallway fight","Hans Zimmer's score (BWAAAH)","Strong critical and cultural momentum","Wally Pfister's cinematography","Native IMAX action sequences"], fact: "The rotating hallway fight scene was shot on a real rotating set — Joseph Gordon-Levitt did his own stunts inside a 100-foot rotating cylinder." },
      'Tron: Legacy': { summary: "The son of a virtual world designer goes looking for his father and ends up inside the digital world. Kosinski's neon-lit sequel.", budget: "$170M", bullets: ["Daft Punk's electronic score","Strong VFX work","Native IMAX 3D presentation","Standard wide release","Visually dense cinematography"], fact: "Daft Punk requested studio time to lock themselves in a Paris studio for 18 months — the duo composed the entire score in seclusion." },
      'Toy Story 3': { summary: "The toys are mistakenly delivered to a day-care center after Andy goes to college. Pixar's emotional trilogy capper.", budget: "$200M", bullets: ["Strong Pixar cultural momentum","Animation craft at peak","Randy Newman's score","Standard wide release","Awards-season buzz"], fact: "The incinerator climax made test-screening adults openly cry — Pixar reportedly didn't soften the scene even after the response." },
      'Harry Potter and the Deathly Hallows Pt. 1': { summary: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes. The franchise's penultimate, slower entry.", budget: "$250M", bullets: ["Strong franchise cultural momentum","Alexandre Desplat's score","Standard wide release","Setup-heavy story structure","Lower commercial appeal than Pt. 2"], fact: "It was the first Harry Potter film not to feature a single Hogwarts scene — leading to mixed audience reaction for the slower pacing." },
      'How to Train Your Dragon': { summary: "A Viking teenager forms an unlikely friendship with a dragon. DreamWorks's franchise-launching breakthrough.", budget: "$165M", bullets: ["Strong animation craft","John Powell's Oscar-nominated score","Standard wide 3D release","Family-genre cultural appeal","Strong critical reception"], fact: "Roger Deakins consulted on the animation — making it one of the few animated films to receive lighting advice from a live-action DP." },
      'Iron Man 2': { summary: "Tony Stark faces multiple enemies while dealing with the consequences of revealing his identity. Favreau's setup-heavy sequel.", budget: "$200M", bullets: ["Strong MCU momentum post-Iron Man","John Debney's score","Standard wide IMAX release","Mid-budget MCU spectacle","Setup-heavy story structure"], fact: "Mickey Rourke insisted on using Russian dialect coaches and personally chose his character's elaborate gold tooth — Marvel kept both decisions in the final film." },
      'Alice in Wonderland': { summary: "Alice returns to the Wonderland of her childhood. Burton's CGI-heavy reimagining starring Johnny Depp.", budget: "$200M", bullets: ["Heavy CGI environments","Danny Elfman's score","Native 3D presentation","Strong cultural momentum","Mid-budget spectacle"], fact: "Its 3D conversion was so rushed that exhibitors complained — leading Disney to develop better post-conversion processes for future releases." },
      'The A-Team': { summary: "A group of Iraq War veterans look to clear their name. Carnahan's failed action reboot.", budget: "$110M", bullets: ["Strong practical action sequences","Alan Silvestri's score","Standard wide release","Mid-budget spectacle","Mixed critical reception"], fact: "Liam Neeson reportedly accepted the role only after seeing the script's commitment to practical stunts — saying he was 'tired of green screens.'" },
      'The Expendables': { summary: "A team of mercenaries head to South America on a mission to overthrow a dictator. Stallone's R-rated nostalgia trip.", budget: "$80M", bullets: ["Practical action and explosions","Brian Tyler's score","Standard wide release","Strong adult audience appeal","Limited budget visible in scope"], fact: "Stallone, Schwarzenegger, and Willis shared a scene together — their first time on screen together — and reportedly shot it in 5 hours total." },
      'Clash of the Titans': { summary: "Perseus leads a band of warriors against the gods. Leterrier's poorly-received remake of the 1981 classic.", budget: "$125M", bullets: ["Heavy CGI environments","Standard wide release","Ramin Djawadi's score","Modest cultural momentum","Post-converted 3D widely criticized"], fact: "The 3D post-conversion was so bad it became an industry cautionary tale — Sam Worthington publicly called the 3D 'a mistake.'" },

      // ── 2009 ──
      'Avatar': { summary: "A paraplegic Marine on the alien moon of Pandora gets drawn into a conflict between corporate Earth and the native Na'vi. Cameron's 3D revolution.", budget: "$237M", bullets: ["Pioneer 3D motion capture filming","James Horner's score","Native IMAX 3D presentation","Massive cultural momentum","Highest-grossing film at release"], fact: "Cameron developed a new camera system called the Fusion Camera System over 5 years — creating the entire 3D production methodology used by future films." },
      'Star Trek': { summary: "The brash James T. Kirk tries to live up to his father's legacy. Abrams's franchise reset that brought new audiences to Trek.", budget: "$150M", bullets: ["Strong reset cultural momentum","Michael Giacchino's score","Standard wide IMAX release","Practical and CGI hybrid","Lens-flare-heavy cinematography"], fact: "Abrams used Coca-Cola bottles to create the lens flares — by holding them up to camera lights, creating the iconic 'JJ flare' look." },
      'Watchmen': { summary: "A complex, multi-layered mystery adventure tied to an alternate-history 1985. Snyder's controversial but ambitious comic adaptation.", budget: "$130M", bullets: ["Strong visual ambition","Tyler Bates's score","Standard wide IMAX release","Practical and CGI hybrid","Mixed critical reception"], fact: "The film's 2 hour 43 minute runtime was further extended to nearly 4 hours in the Ultimate Cut — making it one of the longest comic-book films ever." },
      'Up': { summary: "A 78-year-old balloon salesman and a young boy fly to South America. Pixar's tear-jerking emotional masterwork.", budget: "$175M", bullets: ["Strong Pixar cultural momentum","Animation craft at peak","Michael Giacchino's score","Standard wide release","Awards-season buzz"], fact: "The wordless 4-minute marriage montage was screened separately as an animated short to critical acclaim — even before the full film premiered." },
      'Transformers: Revenge of the Fallen': { summary: "Sam Witwicky leaves the Autobots behind for a normal life. Bay's second Transformers entry that grossed $836M despite vicious reviews.", budget: "$200M", bullets: ["IMAX action sequences","Steve Jablonsky's score","Standard wide release","Strong franchise momentum","Critical and audience disappointment"], fact: "It holds a 19% Rotten Tomatoes score — the lowest of any Bay Transformers film — yet was 2009's third highest-grossing release." },
      'District 9': { summary: "An extraterrestrial race forced to live in slum-like conditions on Earth suddenly finds a kindred spirit. Blomkamp's breakthrough.", budget: "$30M", bullets: ["Modest budget visible in scope","Documentary-style cinematography","Clinton Shorter's score","Strong critical reception","Awards-season buzz"], fact: "Sharlto Copley was a non-actor when Blomkamp cast him — he was the director's friend and was supposed to play a smaller role." },
      'Sherlock Holmes': { summary: "Detective Sherlock Holmes solves a series of crimes with his loyal partner Dr. Watson. Ritchie's stylized period detective.", budget: "$90M", bullets: ["Practical period production","Hans Zimmer's score","Standard wide release","Robert Downey Jr.'s charisma drives momentum","Mid-budget spectacle"], fact: "The slow-motion fight prediction sequences were Ritchie's invention — and pioneered a visual technique copied by countless action films afterward." },
      '2012': { summary: "A frustrated writer struggles to keep his family alive when the world starts falling apart. Emmerich's destruction-porn epic.", budget: "$200M", bullets: ["Massive destruction VFX","Harald Kloser's score","Standard wide release","Lower critical reception","Spectacle-driven momentum"], fact: "Emmerich destroyed 14 famous landmarks on screen — including Yellowstone, the Sistine Chapel, and the entirety of Los Angeles." },
      'Terminator Salvation': { summary: "In a post-apocalyptic 2018, John Connor leads the resistance against Skynet. McG's PG-13 franchise entry that disappointed fans.", budget: "$200M", bullets: ["Practical post-apocalyptic sets","Danny Elfman's score","Standard wide release","Lower cultural momentum","Mixed critical reception"], fact: "Christian Bale's infamous on-set tirade against the DP was leaked online during production — going viral months before the film's release." },
      'G.I. Joe: The Rise of Cobra': { summary: "An elite military unit takes on the Cobra organization. Sommers's toy-line adaptation that launched a B-tier franchise.", budget: "$175M", bullets: ["Practical and CGI action","Alan Silvestri's score","Standard wide release","Lower critical reception","Mid-tier franchise launch"], fact: "Channing Tatum publicly criticized the film, saying he 'didn't want to do it' but was contractually obligated to G.I. Joe sequel deals." },

      // ── 2008 ──
      'The Dark Knight': { summary: "Batman, Gordon, and Harvey Dent confront the Joker, who descends Gotham into anarchy. Nolan's definitive theatrical event of the 2000s.", budget: "$185M", bullets: ["Native IMAX 65mm sequences","Hans Zimmer's score","Heath Ledger's Joker performance","Massive cultural momentum","Strong critical reception"], fact: "Ledger isolated himself in a London hotel for a month to develop the Joker — keeping a journal that has since become an artifact of method acting." },
      'Iron Man': { summary: "Tony Stark builds a high-tech suit of armor and uses it to fight evil. Favreau's gamble that launched the entire MCU.", budget: "$140M", bullets: ["Strong Robert Downey Jr. performance","Ramin Djawadi's score","Standard wide IMAX release","Practical and CGI hybrid","MCU launch"], fact: "Robert Downey Jr.'s casting was so controversial that Marvel had to forfeit director Jon Favreau's first picks — but Favreau threatened to walk if RDJ was vetoed." },
      'Indiana Jones and the Kingdom of the Crystal Skull': { summary: "Indy is back after a 19-year absence — and this time, he's chasing the Crystal Skulls. Spielberg's polarizing fourth Indy.", budget: "$185M", bullets: ["Strong franchise nostalgia momentum","John Williams's score","Standard wide release","Mixed critical reception","Practical and CGI hybrid"], fact: "Spielberg lost on insisting practical effects only — Lucas pushed CGI for the gophers, and audiences have mocked them ever since." },
      'Quantum of Solace': { summary: "Bond is on the trail of those who blackmailed Vesper Lynd into betraying him. Forster's troubled writers-strike Bond entry.", budget: "$200M", bullets: ["Standard wide release","David Arnold's score","Strong franchise momentum","Mixed critical reception","Writers-strike-affected script"], fact: "The screenplay was incomplete when filming began — Daniel Craig and director Forster reportedly rewrote scenes on set, day-by-day." },
      'Cloverfield': { summary: "A monster destroys New York City while a group of friends try to survive. Reeves's found-footage breakthrough.", budget: "$25M", bullets: ["Found-footage cinematography","Limited budget visible","Strong sound design","Standard wide release","Strong cultural breakout momentum"], fact: "Abrams kept the monster a complete secret pre-release — even the cast didn't see it until the premiere, with a fully obscured creature design." },
      'The Incredible Hulk': { summary: "Bruce Banner, a scientist on the run from the US Government, must find a cure for the monster he turns into. Leterrier's MCU footnote.", budget: "$150M", bullets: ["Standard MCU release","Craig Armstrong's score","Standard wide release","Mid-budget MCU spectacle","Lower cultural momentum"], fact: "Edward Norton famously clashed with Marvel over rewrites — leading to his Hulk replacement by Mark Ruffalo for The Avengers." },
      'Hellboy II: The Golden Army': { summary: "The mythical world starts a rebellion against humanity. Del Toro's color-saturated comic-book sequel.", budget: "$85M", bullets: ["Practical creature design","Danny Elfman's score","Standard wide release","Lower commercial momentum","Strong critical reception"], fact: "Del Toro built every creature design as a practical effect first — then enhanced with CGI only where physics demanded it." },
      'Speed Racer': { summary: "A teen race-car driver discovers a conspiracy at the heart of his sport. The Wachowskis' kaleidoscopic CGI experiment.", budget: "$120M", bullets: ["Saturated color cinematography","Strong VFX ambition","Michael Giacchino's score","Standard wide release","Critical and commercial disappointment"], fact: "The film used 2,000+ green-screen shots — at the time, more than any film in history except Sin City." },
      'Wanted': { summary: "A young man finds out his absent father was an assassin. Bekmambetov's stylized R-rated breakthrough.", budget: "$75M", bullets: ["Strong stylized action sequences","Danny Elfman's score","Standard wide release","Mid-budget spectacle","Mixed critical reception"], fact: "Angelina Jolie did 90% of her own stunts — including the iconic car-flip scene, where she actually drove through traffic at 60 mph." },
      'Hancock': { summary: "A hard-living superhero faces public hostility for his careless ways. Berg's tonal-shift superhero entry.", budget: "$150M", bullets: ["Practical and CGI hybrid","John Powell's score","Standard wide release","Modest cultural momentum","Tonal inconsistency criticized"], fact: "The film's third-act tonal shift was so divisive that test-screening audiences were split — with Berg ultimately keeping his original cut." },

      // ── 2007 ──
      'Transformers': { summary: "Teenager Sam Witwicky discovers his car is an alien robot in disguise. Bay's franchise launch that redefined summer spectacle.", budget: "$150M", bullets: ["Practical military hardware and locations","Steve Jablonsky's score","Standard wide release","Strong cultural launch momentum","Bass-heavy sound design"], fact: "Bay partnered with the US Military for real hardware access — the first Hollywood film granted live combat aircraft for production." },
      '300': { summary: "King Leonidas leads 300 Spartans into battle against the Persian Empire. Snyder's hyper-stylized graphic novel adaptation.", budget: "$65M", bullets: ["Hyper-stylized desaturated cinematography","Tyler Bates's score","Standard wide IMAX release","Strong cultural breakout momentum","Practical green-screen visual design"], fact: "The film was shot entirely on a Montreal soundstage — every landscape, sea, and sky is a digital composite around practical actors." },
      "Pirates of the Caribbean: At World's End": { summary: "Captain Jack Sparrow and his allies team up to fight Davy Jones and the East India Trading Company. The bloated but spectacular franchise closer.", budget: "$300M", bullets: ["Massive scale naval sequences","Hans Zimmer's score","Standard wide release","Strong franchise cultural momentum","Practical and CGI hybrid"], fact: "The final battle in the whirlpool required 150 stuntmen and 6 weeks of shooting — making it the most expensive single scene in the franchise." },
      'Spider-Man 3': { summary: "Peter Parker gains a new black suit, but must also face two villains while dealing with relationship problems. Raimi's divisive trilogy capper.", budget: "$258M", bullets: ["Strong franchise cultural momentum","Christopher Young/Danny Elfman score","Standard wide release","Emo Peter Parker widely criticized","Practical and CGI hybrid"], fact: "Raimi has publicly stated he didn't want Venom in the film — Sony forced the character in, leading to the franchise's creative collapse." },
      'Harry Potter and the Order of the Phoenix': { summary: "Harry Potter struggles to convince the magical world that Voldemort has returned. Yates takes over as the franchise's final director.", budget: "$150M", bullets: ["Strong franchise cultural momentum","Nicholas Hooper's score","Standard wide IMAX release","Dark tonal shift","Mid-budget spectacle"], fact: "At 138 minutes, it's the shortest Potter film — adapted from the series' longest book, leading to the most cuts of any adaptation." },
      'Live Free or Die Hard': { summary: "John McClane takes on an Internet-based terrorist organization. Wiseman's 4th Die Hard entry.", budget: "$110M", bullets: ["Practical stunt work","Marco Beltrami's score","Standard wide release","Strong franchise momentum","PG-13 rating divisive"], fact: "The toll booth Harrier jet sequence used a real jet mockup on a highway overpass — the explosion was practical and the set took 6 weeks to build." },
      'Ratatouille': { summary: "A rat who can cook makes an unlikely alliance with a young chef. Bird's Pixar masterwork.", budget: "$150M", bullets: ["Strong animation craft","Michael Giacchino's score","Standard wide release","Strong critical reception","Family-genre cultural appeal"], fact: "Bird consulted with top Parisian chefs for years — they insisted the rat's cooking techniques be fully accurate, including knife skills." },
      'I Am Legend': { summary: "A virologist is the last human survivor in New York City after a virus has spread. Lawrence's bleak post-apocalyptic drama.", budget: "$150M", bullets: ["Desolate NYC cinematography","James Newton Howard's score","Standard wide release","Strong cultural momentum","Practical and CGI hybrid"], fact: "To film Will Smith running down a deserted Fifth Avenue, the production closed 20 blocks of Manhattan for 4 days — a NYC first." },
      'Fantastic Four: Rise of the Silver Surfer': { summary: "The Fantastic Four face their most powerful enemy yet — the mysterious Silver Surfer. Story's sequel that killed the franchise.", budget: "$130M", bullets: ["Standard wide release","John Ottman's score","Modest cultural momentum","Lower critical reception","CG-heavy Silver Surfer"], fact: "The Silver Surfer's board was physically built and set alight for one scene — Doug Jones did his own motion capture for the flying sequences." },
      'National Treasure: Book of Secrets': { summary: "Ben Gates must kidnap the President of the United States to clear his ancestor's name. Turteltaub's unlikely sequel.", budget: "$130M", bullets: ["Practical location filming","Trevor Rabin's score","Standard wide release","Strong family audience appeal","Lower critical reception"], fact: "The production filmed inside the Oval Office using a 1:1 replica built in Los Angeles — the White House did not cooperate with the production." },

      // ── 2006 ──
      "Pirates of the Caribbean: Dead Man's Chest": { summary: "Jack Sparrow races to recover a debt owed to the fearsome Davy Jones. Verbinski's bloated but spectacular franchise midpoint.", budget: "$225M", bullets: ["Practical naval stunt sequences","Hans Zimmer's score","Strong franchise cultural momentum","Standard wide release","Water-mill fight is practical masterwork"], fact: "The mill wheel fight sequence took 6 weeks to shoot and was designed as a single continuous practical action sequence with no CG." },
      'Casino Royale': { summary: "James Bond's first mission as 007 sends him to Montenegro to play poker with a terrorist financier. Craig's franchise-redefining debut.", budget: "$150M", bullets: ["Practical action and stunt work","David Arnold's score","Strong franchise reset momentum","Standard wide IMAX release","David Arnold's score"], fact: "Craig was publicly mocked online as 'blond Bond' before release — the backlash was so intense that Sony created a website to defend the casting." },
      'Mission: Impossible III': { summary: "IMF agent Ethan Hunt comes face to face with the most sadistic villain he's ever encountered. Abrams's franchise revival.", budget: "$150M", bullets: ["Tom Cruise's practical stunt work","Michael Giacchino's score","Strong franchise momentum","Standard wide release","Shanghai bridge sequence — practical"], fact: "Abrams shot the Shanghai bridge sequence using real explosives on a 1:1 scale bridge replica — it took 3 days to rig and 4 seconds to destroy." },
      'X-Men: The Last Stand': { summary: "The discovery of a cure for mutations divides the X-Men. Ratner's divisive trilogy capper.", budget: "$210M", bullets: ["Strong franchise cultural momentum","John Powell's score","Standard wide IMAX release","Rushed production visible","Mixed critical reception"], fact: "Singer departed to make Superman Returns — Ratner was reportedly chosen over less than 10 other directors who all turned down the franchise." },
      'Superman Returns': { summary: "Superman returns to Earth after a five-year absence. Singer's 'romantic' take on Superman.", budget: "$270M", bullets: ["John Ottman's score","Strong franchise nostalgia momentum","Standard wide IMAX release","Lower critical reception","Production design callbacks to Donner films"], fact: "It's the most expensive film ever made without a single fight scene — Singer intentionally avoided any superhero action set pieces." },
      'Miami Vice': { summary: "Crockett and Tubbs go undercover to investigate a drug cartel. Mann's ultra-naturalistic HD TV-to-film adaptation.", budget: "$135M", bullets: ["High-definition digital cinematography","John Murphy's score","Standard wide release","Niche critical reception","Real Cuban coast filming"], fact: "Mann filmed in Cuba without government permission — a first for a major Hollywood production, requiring the crew to smuggle equipment across the border." },
      'Flags of Our Fathers': { summary: "The life of the six men who raised the flag at Iwo Jima. Eastwood's Saving Private Ryan-level war production.", budget: "$90M", bullets: ["Strong practical wartime sequences","Clint Eastwood's score","Standard wide release","Strong critical reception","Awards-season buzz"], fact: "Eastwood filmed the companion piece Letters from Iwo Jima simultaneously — both films share sets, props, and three weeks of overlapping production." },
      'The Da Vinci Code': { summary: "A Harvard professor investigates a murder at the Louvre and uncovers a conspiracy involving a secret society. Howard's massively popular adaptation.", budget: "$125M", bullets: ["Salvatore Totino's cinematography","Hans Zimmer's score","Standard wide release","Strong cultural momentum","Mixed critical reception"], fact: "The Vatican officially condemned the film — driving additional ticket sales in Catholic-majority countries, including a 30% higher opening in Italy." },
      'Poseidon': { summary: "A group of passengers struggle to survive when a rogue wave capsizes an ocean liner. Petersen's unnecessary remake.", budget: "$160M", bullets: ["Practical water sets","Klaus Badelt's score","Standard wide release","Lower critical reception","Impressive practical flooding effects"], fact: "The production built a $15M tank at a Germany studio to film the underwater sequences — the largest water-filled stage in film history at the time." },
      'Deadpool (2006)': { summary: "Placeholder — this film was released in 2016. Duplicate entry handled above.", budget: "—", bullets: [], fact: "" },

      // ── 2005 ──
      'Batman Begins': { summary: "After witnessing his parents' murder, Bruce Wayne trains to become an urban vigilante. Nolan's gritty franchise reboot.", budget: "$150M", bullets: ["Wally Pfister's naturalistic cinematography","Zimmer/Howard score","Strong franchise reset momentum","Practical and CGI hybrid","Dark tonal reboot"], fact: "Nolan was given creative control only after agreeing to a lower-than-usual budget — he spent $150M doing more practically than others spent double." },
      'Star Wars: Revenge of the Sith': { summary: "Anakin Skywalker turns to the dark side and becomes Darth Vader. Lucas's trilogy finale that resolved decades of backstory.", budget: "$113M", bullets: ["Massive Star Wars cultural momentum","John Williams's score","Standard wide IMAX release","Emotional franchise finale","CGI-heavy but scale-driven"], fact: "The Order 66 sequence made test-screening adults openly cry — it was the first scene Lucas screened to Fox executives to secure full distribution." },
      'War of the Worlds': { summary: "Ray Ferrier must protect his children as terrifying alien machines devastate Earth. Spielberg's visceral alien-invasion thriller.", budget: "$132M", bullets: ["Practical destruction effects","John Williams's score","Strong cultural momentum","Standard wide release","Janusz Kamiński's cinematography"], fact: "The Hudson River ferry explosion was a single-take practical effect — Spielberg refused to greenlight a second take because 'the first one was perfect.'" },
      'King Kong': { summary: "In the 1930s, a group of explorers encounter the mighty Kong on Skull Island. Jackson's epic remake of the classic.", budget: "$207M", bullets: ["Strong VFX work (WETA)","James Newton Howard's score","Strong Jackson pedigree post-LOTR","Standard wide release","Practical and CGI hybrid"], fact: "Jackson spent $32M on pre-production alone — building Skull Island's jungle in New Zealand before a single VFX frame was rendered." },
      'Mission: Impossible — Rogue Nation_2005': { summary: "Placeholder — Rogue Nation was released in 2015. Duplicate entry handled above.", budget: "—", bullets: [], fact: "" },
      'Harry Potter and the Goblet of Fire': { summary: "Harry Potter is chosen as a contestant in the dangerous Triwizard Tournament. Newell's dark franchise midpoint.", budget: "$150M", bullets: ["Strong franchise cultural momentum","Patrick Doyle's score","Standard wide release","Dark tonal shift","Practical and CGI hybrid"], fact: "The dragon chase sequence was originally a CGI set piece — Newell demanded a practical Hogwarts set be built for the actors' sakes." },
      'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe': { summary: "Four siblings are transported into a magical world through a wardrobe. Adamson's faith-inspired fantasy epic.", budget: "$180M", bullets: ["Strong Christian cultural momentum","Harry Gregson-Williams's score","Standard wide release","Practical and CGI hybrid","Family-genre cultural appeal"], fact: "C.S. Lewis's estate approved the adaptation only after the producers promised not to alter the Christian allegory — a provision written into the contract." },
      'Constantine': { summary: "John Constantine, a demon hunter, investigates the possible suicide of a fellow exorcist. Lawrence's dark supernatural thriller.", budget: "$100M", bullets: ["Strong visual design","Brian Tyler's score","Standard wide release","Modest cultural momentum","Practical and CGI hybrid"], fact: "Keanu Reeves smoked 3 packs a day to prepare — and quit cold turkey the day filming ended, saying 'the character was using me up.'" },
      'Mr. & Mrs. Smith': { summary: "A bored suburban couple discovers they are both secretly working as assassins. Liman's star-powered action comedy.", budget: "$110M", bullets: ["Brad Pitt and Angelina Jolie chemistry","John Powell's score","Standard wide release","Strong star-driven cultural momentum","Practical and CGI hybrid"], fact: "Pitt and Jolie began their relationship during this production — their on-screen chemistry was cited by critics as the film's only genuine asset." },
      'Fantastic Four': { summary: "A group of astronauts gain superpowers after cosmic radiation exposure. Story's underwhelming franchise launch.", budget: "$87M", bullets: ["Standard wide release","John Ottman's score","Modest cultural momentum","Lower critical reception","CG-heavy visual design"], fact: "The production was so rushed that several VFX shots were unfinished at premiere — the Human Torch's digital fire was completed the night before." },

      // ── 2004 ──
      'Spider-Man 2': { summary: "Peter Parker struggles to balance his hero life with a normal existence while facing Doctor Octopus. Raimi's acclaimed sequel.", budget: "$200M", bullets: ["Train fight sequence is pure practical cinema","Danny Elfman's score","Strong franchise cultural momentum","Standard wide release","Strong critical reception"], fact: "The train sequence was praised by Akira Kurosawa's cinematographer — who called it 'the finest action sequence in American film since Bullitt.'" },
      'The Incredibles': { summary: "A family of undercover superheroes are forced to spring into action when their son discovers his powers. Bird's Pixar peak.", budget: "$92M", bullets: ["Strong animation craft","Michael Giacchino's score","Standard wide release","Strong critical reception","Family-genre cultural appeal"], fact: "Bird's original cut was 4 hours long — the 115-minute theatrical version required 2 years of editing and is credited as his hardest creative challenge." },
      'Troy': { summary: "An adaptation of Homer's Iliad, centering on the Trojan War. Petersen's epic attempt at ancient mythology.", budget: "$175M", bullets: ["Massive practical battle sequences","James Horner's score","Standard wide release","Strong cultural momentum","Location filming in Malta and Morocco"], fact: "Over 1,000 stuntmen from 50 countries were trained in period-accurate combat — the production hired four full-time ancient warfare historians." },
      'Harry Potter and the Prisoner of Azkaban': { summary: "Harry must handle the escaped wizard Sirius Black and a mysterious new professor. Cuarón's visually reinvented franchise entry.", budget: "$130M", bullets: ["Cuarón's naturalistic visual reinvention","John Williams's score","Strong franchise cultural momentum","Standard wide release","Best-received critical entry of the series"], fact: "Cuarón asked the three leads to write essays about their characters from a first-person perspective before production — only Emma Watson turned hers in." },
      'The Bourne Supremacy': { summary: "Jason Bourne is pulled out of hiding when a CIA operation is botched and he is blamed for the fallout. Greengrass takes over.", budget: "$75M", bullets: ["Greengrass's kinetic handheld action style","John Powell's score","Strong franchise momentum","Standard wide release","Moscow car chase is practical masterwork"], fact: "The Moscow car chase was filmed at 5am on closed roads for 3 weeks — and used real Moscow police escorts to maintain traffic control." },
      'I, Robot': { summary: "A technophobic cop investigates a crime involving a robot. Proyas's high-budget sci-fi actioner.", budget: "$120M", bullets: ["Strong VFX work","Marco Beltrami's score","Standard wide release","Modest cultural momentum","Practical and CGI hybrid"], fact: "Will Smith shaved his eyebrows to make his expressions look more pronounced for the motion-capture sequences — and refused to explain why to the press." },
      'The Day After Tomorrow': { summary: "A climatologist tries to save the world from the effects of global warming. Emmerich's climate-disaster spectacle.", budget: "$125M", bullets: ["Massive weather VFX","Harald Kloser's score","Standard wide release","Lower critical reception","Spectacle-driven momentum"], fact: "The New York flash-freeze sequence used 5,000 gallons of water per second — pumped through a custom rig covering 3 city blocks of LA street set." },
      'The Amazing Spider-Man 2_2004': { summary: "Placeholder — handled above. Duplicate entry.", budget: "—", bullets: [], fact: "" },
      'Van Helsing': { summary: "Monster hunter Van Helsing is dispatched to Transylvania to face Dracula. Sommers's Gothic creature-feature.", budget: "$160M", bullets: ["Strong creature design (practical and CGI)","Alan Silvestri's score","Standard wide release","Mixed critical reception","Strong summer cultural appetite"], fact: "The production built a $2M replica of 19th-century Transylvania in Prague — later reused for three other Universal horror productions." },
      'Shrek 2': { summary: "Shrek and Fiona travel to meet her parents after their wedding. DreamWorks's massive animated sequel.", budget: "$150M", bullets: ["Strong animation craft","Harry Gregson-Williams's score","Standard wide release","Strong family cultural momentum","Fairy Godmother musical sequence"], fact: "It surpassed The Lion King as the highest-grossing animated film at the time — a record it held for 6 years until Toy Story 3 in 2010." },

      // ── 2003 ──
      'The Lord of the Rings: The Return of the King': { summary: "Frodo and Sam continue their journey to Mount Doom while Aragorn prepares to take his place as king. Jackson's Oscar-sweeping trilogy finale.", budget: "$94M", bullets: ["Native IMAX presentation","Howard Shore's score","Massive practical and CGI battle sequences","Cultural moment — 11 Oscar wins","Strong critical reception"], fact: "Its 11 Oscar wins, including Best Picture, made it the most decorated film since Ben-Hur (1959) — tied for the most in Academy history." },
      "Pirates of the Caribbean: The Curse of the Black Pearl": { summary: "Blacksmith Will Turner teams with eccentric Captain Jack Sparrow to rescue his love from pirates. Verbinski's franchise launch.", budget: "$140M", bullets: ["Practical ship and stunt sequences","Klaus Badelt/Hans Zimmer score","Standard wide release","Surprise cultural breakout","Johnny Depp's iconic improvised performance"], fact: "Depp modeled Captain Jack Sparrow on Keith Richards — and kept it secret from Disney until dailies came back. Disney initially wanted the character reshot." },
      'The Matrix Reloaded': { summary: "Neo and his allies race to Zion to save their home from the Machine Army. The Wachowskis' ambitious but divisive sequel.", budget: "$150M", bullets: ["Freeway chase sequence is practical masterwork","Don Davis's score","Standard wide release","Strong cultural momentum","Multiple action peaks"], fact: "The freeway chase required a 1.5-mile stretch of highway to be built from scratch in Alameda — it took 9 months to construct and was demolished after 3 weeks of filming." },
      'X2: X-Men United': { summary: "The X-Men must band together against a mutant-hating general's attempt to exterminate them. Singer's acclaimed sequel.", budget: "$110M", bullets: ["Strong franchise cultural momentum","John Ottman's score","Standard wide release","Strong critical reception","Practical and CGI hybrid"], fact: "The opening Nightcrawler White House sequence was shot as a 17-minute continuous take — then digitally assembled from 300 individual camera positions." },
      'Finding Nemo': { summary: "After his son is taken by a diver, an overprotective clownfish sets out to find him. Pixar's oceanic adventure.", budget: "$94M", bullets: ["Strong animation craft","Thomas Newman's score","Standard wide release","Strong critical reception","Family cultural momentum"], fact: "Pixar's animators spent 6 months learning to scuba dive to study underwater light physics — the caustics in Finding Nemo are physically accurate." },
      'The Matrix Revolutions': { summary: "The human city of Zion defends itself against the Machine Army while Neo fights Agent Smith. The Wachowskis' divisive franchise conclusion.", budget: "$150M", bullets: ["Large-scale battle sequences","Don Davis's score","Standard wide release","Lower critical reception","VFX at peak ambition"], fact: "The Zion dock battle required over 1,000 VFX shots — at the time, more than the entire first Matrix film combined." },
      'Terminator 3: Rise of the Machines': { summary: "John Connor meets Terminatrix T-X, who has been sent back to kill his future lieutenants. Mostow's franchise continuation without Cameron.", budget: "$200M", bullets: ["Practical stunt and action work","Marco Beltrami's score","Standard wide release","Lower critical reception","Strong franchise momentum"], fact: "Arnold Schwarzenegger was paid $29.25M plus a percentage of the gross — the largest actor fee in Hollywood history at the time." },
      'Hulk': { summary: "Bruce Banner, a brilliant scientist with a painful past, must deal with his inner demons. Ang Lee's artistic superhero experiment.", budget: "$137M", bullets: ["Ang Lee's split-screen technique","Mychael Danna's score","Standard wide release","Mixed critical reception","CG-heavy Hulk design"], fact: "Lee used comic-book panel wipe transitions in every action sequence — a technique never done before and never done since in a major studio film." },
      'Daredevil': { summary: "A blind New York lawyer fights crime as a masked vigilante. Johnson's dark but clunky Marvel adaptation.", budget: "$78M", bullets: ["Standard wide release","Graeme Revell's score","Modest cultural momentum","Lower critical reception","Limited budget visible in scope"], fact: "Ben Affleck has publicly called this his biggest career regret — saying he took it primarily to experience the superhero process before Batman." },
      'Bruce Almighty': { summary: "A frustrated man is given divine powers by God. Shadyac's Jim Carrey comedy that cleaned up at the box office.", budget: "$75M", bullets: ["Standard wide release","John Debney's score","Strong cultural momentum","Jim Carrey's comedic performance","Stream-appropriate experience"], fact: "Carrey improvised over 70% of his dialogue — directors reportedly ran out of film twice because he kept generating material." },

      // ── 2002 ──
      'The Lord of the Rings: The Two Towers': { summary: "The fellowship continues on separate journeys — Frodo toward Mordor, and Aragorn to Helm's Deep. Jackson's stunning middle chapter.", budget: "$94M", bullets: ["Native IMAX presentation","Howard Shore's score","Massive practical battle sequences (Helm's Deep)","Strong franchise cultural momentum","Gollum is a motion-capture breakthrough"], fact: "The Battle of Helm's Deep took 3 months to shoot entirely at night in the New Zealand rain — cast and crew describe it as the most physically grueling production ever." },
      'Spider-Man': { summary: "Teenager Peter Parker is bitten by a radioactive spider and becomes Spider-Man. Raimi's franchise launch that defined the modern superhero era.", budget: "$139M", bullets: ["Strong franchise launch momentum","Danny Elfman's score","Standard wide release","Strong critical reception","Practical stunt and CGI hybrid"], fact: "Raimi shot 17 different spider-bite sequence versions before settling on the final — he wanted the exact color and texture of webbing to match the 1962 comics." },
      'Star Wars: Attack of the Clones': { summary: "Obi-Wan investigates an assassination attempt while Anakin protects Padmé. Lucas's divisive Episode II.", budget: "$115M", bullets: ["John Williams's score","Strong Star Wars cultural momentum","Standard wide release","Mixed critical reception","CGI-heavy Geonosis battle"], fact: "It was the first major studio film shot entirely on digital cameras — Lucas used Sony F900 HDcam over 35mm, dividing the industry." },
      'Minority Report': { summary: "A cop in the future is accused of a murder he hasn't committed yet. Spielberg's pre-crime dystopia.", budget: "$102M", bullets: ["Janusz Kamiński's high-contrast photography","John Williams's score","Standard wide release","Strong critical reception","Prescient tech design"], fact: "Spielberg assembled a panel of futurists, architects, and technologists for a 3-day summit to design the film's 2054 technology — including the gesture-UI that inspired Microsoft Surface." },
      'Signs': { summary: "A former priest discovers crop circles in his Pennsylvania cornfield, leading to an alien invasion. Shyamalan's taut thriller.", budget: "$72M", bullets: ["Strong horror sound design","James Newton Howard's score","Standard wide release","Strong cultural momentum","Communal viewing key to suspense"], fact: "Shyamalan shot the entire alien-in-the-hallway sequence with only practical on-camera lights — creating the tension through real darkness, not post-production grading." },
      'The Bourne Identity': { summary: "A man suffering from amnesia tries to discover who he is while being hunted by the CIA. Liman's franchise launch.", budget: "$60M", bullets: ["Practical action and car chase work","John Powell's score","Standard wide release","Strong critical reception","Paris car chase is practical masterwork"], fact: "The original script was entirely different — Liman and Damon rewrote it extensively on set, often rewriting scenes the night before filming." },
      'Blade II': { summary: "Blade is forced into an alliance with the vampires to face an even greater threat. Del Toro's kinetic sequel.", budget: "$54M", bullets: ["Practical creature design","Marco Beltrami's score","Standard wide release","Strong critical reception","Del Toro's stylized direction"], fact: "Del Toro designed the Reaper's split-jaw mouth himself — building a practical animatronic to avoid CGI, which he called 'the enemy of good monster design.'" },
      'Die Another Day': { summary: "Bond is traded in a prisoner exchange and vows revenge. Lee Tamahori's notorious franchise nadir.", budget: "$142M", bullets: ["Strong franchise momentum","David Arnold's score","Standard wide release","Mixed critical reception","CGI-heavy surfing sequence"], fact: "The invisible Aston Martin became the most mocked Bond gadget in franchise history — driving the reboot to Casino Royale with no gadgets at all." },
      'Men in Black II': { summary: "Agent J must protect Earth from a new alien threat. Sonnenfeld's inferior sequel.", budget: "$140M", bullets: ["Standard wide release","Danny Elfman's score","Strong franchise momentum","Lower critical reception","Mid-budget spectacle"], fact: "Will Smith had so little confidence in the script that he reportedly requested a production hold — which was denied due to a $120M marketing campaign already in motion." },
      'The Time Machine': { summary: "A scientist uses a time machine to travel to the future. Wells's low-bar adaptation of the H.G. Wells novel.", budget: "$80M", bullets: ["Standard wide release","Klaus Badelt's score","Modest cultural momentum","Lower critical reception","Limited budget visible in scope"], fact: "Guy Pearce was so committed to the period scientist look that he maintained the Victorian-era mustache for six months of filming — and reportedly got recognized zero times in public." },

      // ── 2001 ──
      'The Lord of the Rings: The Fellowship of the Ring': { summary: "A young hobbit, Frodo Baggins, must destroy the One Ring to save Middle-earth. Jackson's franchise launch that redefined fantasy cinema.", budget: "$93M", bullets: ["Practical location filming in New Zealand","Howard Shore's score","Strong cultural momentum","Weta Workshop practical creature design","Standard wide release"], fact: "Jackson filmed all three films simultaneously over 15 months — creating 74 speaking roles, 20,000 costume pieces, and 48,000 prop items in one continuous production." },
      'Black Hawk Down': { summary: "Elite US soldiers are sent to Mogadishu to capture a warlord's top lieutenants. Scott's intense, relentless war filmmaking.", budget: "$92M", bullets: ["Practical wartime sequences","Hans Zimmer's score","Strong critical reception","Standard wide release","Visceral audio mix essential"], fact: "Scott had 100 cameras rolling simultaneously during the main firefight — the most cameras ever used on a single scene at the time." },
      "Harry Potter and the Philosopher's Stone": { summary: "A young wizard discovers he is famous in the magical world — and heads to Hogwarts for his first year. Columbus's franchise launch.", budget: "$125M", bullets: ["Strong franchise launch momentum","John Williams's score","Standard wide release","Family cultural phenomenon","Practical and CGI hybrid"], fact: "Over 40,000 children auditioned for the roles of Harry, Ron, and Hermione — Rowling personally approved all three final casting decisions." },
      "Moulin Rouge!": { summary: "A bohemian writer falls in love with a beautiful singer at a Paris nightclub. Luhrmann's maximalist musical explosion.", budget: "$52M", bullets: ["Maximalist visual design rewards theaters","Don Was's musical supervision","Strong critical reception","Limited cultural momentum at release","Awards-season buzz"], fact: "Kidman and McGregor recorded all their own singing — the iconic 'Elephant Love Medley' was recorded live on set in a single marathon day-long session." },
      'Pearl Harbor': { summary: "Two best friends are caught in the attack on Pearl Harbor in 1941. Bay's melodramatic epic.", budget: "$140M", bullets: ["Practical attack sequence","Hans Zimmer's score","Strong cultural anticipation","Standard wide release","Mixed critical reception"], fact: "Bay spent $5M alone on the Pearl Harbor attack sequence — hiring WWII veterans as technical advisors to reconstruct every detail of the 1941 attack." },
      'Jurassic Park III': { summary: "Dr. Grant is tricked into going to a forbidden island to rescue a stranded boy. Johnston's lower-stakes sequel.", budget: "$93M", bullets: ["Strong franchise momentum","Don Davis's score","Standard wide release","Lower critical reception","Pteranodon aviary sequence"], fact: "Spielberg had no involvement — Johnston was brought in specifically because he had worked as Spielberg's art director on Raiders of the Lost Ark." },
      'The Mummy Returns': { summary: "Rick O'Connell faces a new threat — the legendary Scorpion King. Sommers's kinetic sequel.", budget: "$98M", bullets: ["Practical action and stunt work","Alan Silvestri's score","Strong franchise momentum","Standard wide release","The Rock's embarrassing CGI debut"], fact: "The Scorpion King CGI was so poor it became a studio cautionary tale — leading to Dwayne Johnson demanding no digital replacement for his own films." },
      'Shrek': { summary: "A green ogre enters into a deal with a lord to rescue a princess. DreamWorks's subversive animated hit.", budget: "$60M", bullets: ["Strong animation craft","Harry Gregson-Williams's score","Standard wide release","Strong family cultural momentum","Fairy tale subversion lands in theaters"], fact: "Eddie Murphy improvised most of Donkey's dialogue — including 'Do you know the muffin man?' which was not in the script and Katzenberg refused to cut." },
      'A.I. Artificial Intelligence': { summary: "A highly advanced robotic boy searches for the key to become human. Spielberg's Kubrick-originated sci-fi.", budget: "$100M", bullets: ["Strong visual ambition","John Williams's score","Standard wide release","Mixed critical reception","Janusz Kamiński's cinematography"], fact: "Kubrick developed this project for 20 years before his death — Spielberg honoured him by using Kubrick's original treatment and storyboards untouched." },
      'Monsters, Inc.': { summary: "Monsters discover that children are more dangerous than they themselves are. Docter's Pixar invention.", budget: "$115M", bullets: ["Strong Pixar animation craft","Randy Newman's score","Standard wide release","Strong critical reception","Family-genre cultural appeal"], fact: "Sulley's fur required Pixar to develop a new simulation system — 2.32 million individual hairs, each with its own physics, required entirely new software." },

      // ── 2000 ──
      'Gladiator': { summary: "A Roman general is betrayed and reduced to slavery, then rises to become a gladiator to seek revenge. Scott's epic comeback.", budget: "$103M", bullets: ["Practical arena construction","Hans Zimmer/Lisa Gerrard score","Strong critical reception","Standard wide release","Colosseum VFX ahead of its time"], fact: "The script was only 35 pages when filming began — Scott and Crowe rewrote scenes daily, including the iconic 'Are you not entertained?' line added on set." },
      'Mission: Impossible 2': { summary: "Ethan Hunt must recover a deadly virus from a rogue IMF agent. John Woo's stylized franchise entry.", budget: "$125M", bullets: ["Woo's slow-motion action style","Hans Zimmer's score","Strong franchise cultural momentum","Standard wide release","Practical motorcycle stunt finale"], fact: "Cruise performed all his own motorcycle stunts — including the face-off collision sequence, which required 23 takes to achieve the shot Woo wanted." },
      'X-Men': { summary: "Professor X leads a group of mutants to protect a world that fears them. Singer's franchise launch that began the modern superhero era.", budget: "$75M", bullets: ["Strong franchise cultural breakout","Michael Kamen's score","Standard wide release","Modest budget visible in scope","Practical and CGI hybrid"], fact: "Patrick Stewart was cast because Bryan Singer watched him play Captain Picard — then wrote Professor X's wheelchair introduction specifically around Stewart's physicality." },
      'The Perfect Storm': { summary: "A fishing boat struggles to survive an Atlantic storm of epic proportions. Petersen's disaster drama.", budget: "$120M", bullets: ["Practical wave effects and water sets","James Horner's score","Standard wide release","Strong cultural momentum","Janusz Kamiński's cinematography"], fact: "The wave sequences used a tank holding 3.2 million gallons of water — with waves generated by a 40-foot hydraulic paddle, the largest ever built." },
      'Dinosaur': { summary: "An Iguanodon raised by lemurs leads a herd to a nesting ground during a drought. Disney's CGI-live action hybrid.", budget: "$127M", bullets: ["Groundbreaking CGI composited over real locations","James Newton Howard's score","Standard wide release","Modest cultural momentum","Family-genre cultural appeal"], fact: "The live-action background plates were filmed in four countries across two continents — then CGI dinosaurs were composited in frame-by-frame over 2 years." },
      'The Patriot': { summary: "A farmer is driven to lead the Colonial Militia during the American Revolution. Emmerich's epic war drama.", budget: "$110M", bullets: ["Practical battle sequences","John Williams's score","Standard wide release","Moderate cultural momentum","South Carolina location filming"], fact: "Gibson's character was based on several real figures — but the most accurate historical parallel, Francis Marion, was omitted because he was a documented slave owner." },
      'What Lies Beneath': { summary: "A woman discovers a ghost haunting her house while her husband is preoccupied with work. Zemeckis's psychological thriller.", budget: "$90M", bullets: ["Strong sound design","Alan Silvestri's score","Standard wide release","Strong cultural momentum","Horror-thriller genre theatrical value"], fact: "Zemeckis cast Harrison Ford against type specifically to mislead audiences — audience research showed viewers trusted Ford as a hero regardless of what the film suggested." },
      'Hollow Man': { summary: "A scientist discovers how to make himself invisible. Verhoeven's R-rated sci-fi.", budget: "$95M", bullets: ["Strong VFX work (invisible effects)","Jerry Goldsmith's score","Standard wide release","Mixed critical reception","Practical and CGI hybrid"], fact: "The invisible-man VFX required over 1,400 individual visual effects shots — more than the entire original Matrix at the time of its release." },
      'Cast Away': { summary: "A FedEx employee is stranded on a deserted island after his plane crashes. Zemeckis's survival drama.", budget: "$90M", bullets: ["Single-actor performance is intimate","Alan Silvestri's score","Standard wide release","Stream-appropriate experience","Strong cultural momentum"], fact: "Production shut down for a year so Tom Hanks could lose 50 pounds and grow his hair — the gap was used to film What Lies Beneath on the same sets." },
      'Scary Movie': { summary: "A group of teenagers are stalked by a serial killer. Wayans's horror-parody that spawned a franchise.", budget: "$19M", bullets: ["Standard wide release","David Kitay's score","Moderate cultural momentum","Stream-appropriate experience","Comedy genre limited theatrical enhancement"], fact: "It was originally rated NC-17 — Wayans removed 11 scenes to achieve the R rating, saying the NC-17 version 'would have made more money but fewer teenagers.'" },

      // ── 2026 ──
      'Project Hail Mary': { summary: "Ryan Gosling as Ryland Grace, an astronaut alone in deep space on humanity's last-chance mission. Adapts Andy Weir's beloved novel.", budget: "$200M", bullets: ["Confirmed IMAX production and theatrical exclusivity", "Ryan Gosling first major sci-fi lead role", "Phil Lord & Chris Miller visual inventiveness applied to live-action", "Deep space canvas — maximum Visual Scale pillar ceiling", "Narrative Lens pillar elevated by communal emotional climax", "Amazon MGM's highest-grossing film ever — $650M+"], fact: "Project Hail Mary became Amazon MGM's highest-grossing film ever, surpassing $650M worldwide — the first purely original sci-fi IP to cross $500M since Interstellar." },
      'The Mandalorian & Grogu': { summary: "Din Djarin and Grogu face their most dangerous galactic mission yet — the first Star Wars film designed natively for IMAX theatrical.", budget: "$300M+", bullets: ["First Star Wars film shot in native IMAX aspect ratio for full runtime", "ILM full production pipeline — no streaming budget constraints", "John Williams score confirmed for theatrical release", "Pedro Pascal returning as Din Djarin", "Grogu's TV-to-IMAX crossover — singular cultural event", "Designed from pre-production exclusively for theaters"], fact: "The Mandalorian & Grogu is the first Star Wars theatrical film to be shot in native IMAX aspect ratio — all previous Star Wars IMAX releases were post-converted." },
      'Mortal Kombat II': { summary: "The Mortal Kombat tournament begins. Karl Urban joins as Johnny Cage in the sequel that introduces the iconic competition at the center of the franchise.", budget: "$120M", bullets: ["IMAX exclusive one-week early release window", "Karl Urban as Johnny Cage — crowd catalyst character", "Sound design engineered for theatrical audio", "Tournament introduction — peak IP payoff", "Adeline Rudolph, Martina Garcia join cast", "No Marvel competition in May 2026"], fact: "Mortal Kombat II held an exclusive one-week IMAX window before wide release — the first non-Marvel/DC Western action film to receive that treatment since Mission: Impossible Fallout in 2018." },
      'The Super Mario Galaxy Movie': { summary: "Mario and friends venture into the galaxy on an animated sequel that became 2026's biggest box office event, clearing $940M worldwide.", budget: "$180M", bullets: ["IMAX release confirmed", "Cultural Momentum near 94 — franchise at peak", "Three-generation family audience", "Illumination's highest-production-value film", "Largest animated opening weekend in history at $372M", "Randy Newman score"], fact: "The Super Mario Galaxy Movie holds the record for the biggest opening weekend of 2026 at $372M — the largest animated opening in history, surpassing The Super Mario Bros. Movie's own 2023 record." },
      'Mercy': { summary: "Chris Pratt stars in this January IMAX thriller directed by Christopher McQuarrie — the film that opened 2026's theatrical calendar with more ambition than any January release in years.", budget: "$130M", bullets: ["First film of 2026 to open in IMAX", "McQuarrie director pedigree (Mission Impossible franchise)", "Two full weeks of IMAX exclusivity", "Strong action set-piece construction", "Opened the theatrical year with momentum", "Dolby Atmos mix confirmed"], fact: "Mercy was the first film of 2026 to open in IMAX, holding premium screens for two full weeks — an unusually long IMAX window that signaled strong exhibitor confidence heading into 2026." },
      'Michael': { summary: "Antoine Fuqua's authorized biopic of Michael Jackson, starring Jaafar Jackson. A theatrical event built around a music catalog designed for maximum sound systems.", budget: "$150M", bullets: ["Jaafar Jackson performed all music live — no lip-sync", "Audio pillar near 88 — music catalog demands theater sound", "Authorized biopic with estate cooperation", "Cultural Momentum elevated by MJ legacy", "Fuqua director pedigree for large-scale storytelling", "Summer release window with theatrical exclusivity"], fact: "Jaafar Jackson performed all of Michael's music catalog live — recording every song from scratch rather than lip-syncing to the originals, giving the film a unique sonic identity." },

      // ── 2025 ──
      'Sinners': { summary: "Twin brothers return to the Deep South trying to leave their troubled lives behind, only to encounter an even greater evil. Coogler's genre-defying original.", budget: "$90M", bullets: ["Landmark 65mm IMAX production", "Ludwig Göransson's immersive score", "IMAX-native aspect ratio sequences", "Extraordinary word-of-mouth momentum", "Rare original IP dominating theatrical"], fact: "Sinners was shot natively on IMAX 65mm film — one of only a handful of films ever to do so outside Nolan productions — giving it a visual texture no home screen can replicate." },
      'Mission: Impossible — The Final Reckoning': { summary: "Ethan Hunt faces his most impossible mission yet as the Syndicate's most dangerous chapter unfolds. McQuarrie's franchise finale.", budget: "$400M", bullets: ["Practical IMAX stunt photography", "Lorne Balfe's theatrical score", "IMAX expanded-ratio sequences", "Series-concluding cultural momentum", "Legacy franchise theatrical event status"], fact: "The film's centerpiece bi-plane sequence required Tom Cruise to undergo over 500 hours of training and the crew filmed for 18 months — making it the most expensive single action sequence ever produced." },
      'A Minecraft Movie': { summary: "Four unlikely heroes are sucked into the Overworld and must team up with an unexpected ally to survive. Hobson's family blockbuster.", budget: "$150M", bullets: ["Visual spectacle built for wide screens", "Massive audience cultural momentum", "Family event theatrical draw", "Standard wide release", "Record-breaking opening weekend"], fact: "A Minecraft Movie's opening weekend broke the record for the biggest video game adaptation opening ever — driven almost entirely by Gen Z audiences who saw it repeatedly in theaters." },
      'Thunderbolts*': { summary: "A group of Marvel antiheroes are assembled for a covert mission that turns into something far more personal. Schreier's ensemble character study.", budget: "$180M", bullets: ["Intimate character-focused visual scope", "Atypical MCU emotional register", "Strong audience reception metrics", "Marvel brand theatrical draw", "Post-credits moment requires communal viewing"], fact: "The asterisk in the title is not a typo — it's a deliberate part of the film's marketing identity and becomes narratively significant within the story itself." },
    };

    // ══════════════════════════════════════════

    function hofScoreClass(s) { return s >= 85 ? 's-imax' : s >= 55 ? 's-theater' : 's-stream'; }
    function hofVerdictLabel(v) { return v === 'imax' ? 'Must-See IMAX' : v === 'theater' ? 'See in Theaters' : 'Stream at Home'; }

    function buildHofCard(film, rank) {
      const card = document.createElement('div');
      card.className = 'hof-card' + (rank === 1 ? ' rank-1' : '');

      const pillarsHTML = Object.entries(film.pillars).map(([key, val]) => `
        <div class="hof-pillar-row">
          <span class="hof-pillar-lbl">${key}</span>
          <div class="hof-bar-track"><div class="hof-bar-fill" style="width:${val}%"></div></div>
          <span class="hof-bar-val">${val}</span>
        </div>`).join('');

      // Look up detail data
      const d = hofDetails[film.title] || null;
      const detailHTML = d && d.bullets && d.bullets.length ? `
        <div class="hof-detail">
          <div class="hof-detail-inner">
            <div class="hof-detail-grid">
              <div>
                <div class="hof-block-label">About this film</div>
                <div class="hof-detail-summary">${d.summary}</div>
              </div>
              <div>
                <div class="hof-block-label">Film data</div>
                <div class="hof-detail-stats">
                  <div class="hof-stat-row">
                    <span class="hof-stat-key">Director</span>
                    <span class="hof-stat-val">${film.director}</span>
                  </div>
                  <div class="hof-stat-row">
                    <span class="hof-stat-key">Genre</span>
                    <span class="hof-stat-val">${film.genre}</span>
                  </div>
                  <div class="hof-stat-row">
                    <span class="hof-stat-key">Budget</span>
                    <span class="hof-stat-val mono">${d.budget}</span>
                  </div>
                  <div class="hof-stat-row">
                    <span class="hof-stat-key">SOS Score</span>
                    <span class="hof-stat-val mono">${film.score} / 100</span>
                  </div>
                  <div class="hof-stat-row">
                    <span class="hof-stat-key">Verdict</span>
                    <span class="hof-stat-val">${hofVerdictLabel(film.verdict)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="hof-block-label">Key scoring factors</div>
            <div class="hof-bullets">
              ${d.bullets.map(b => `
                <div class="hof-bullet">
                  <span class="hof-bullet-mark">◆</span>
                  <span>${b}</span>
                </div>`).join('')}
            </div>
            <div class="hof-fact">
              <span class="hof-fact-label">Interesting fact</span>
              ${d.fact}
            </div>
          </div>
        </div>` : '';

      card.innerHTML = `
        <div class="hof-card-rank">#${rank}</div>
        <div class="hof-card-header">
          <div>
            <div class="hof-card-title">${film.title}</div>
            <div class="hof-card-meta">${film.director} · ${film.genre}</div>
          </div>
          <div class="hof-score-wrap${film.verdict === 'imax' ? ' imax-star' : ''}">
            <div class="hof-score-num ${hofScoreClass(film.score)}">${film.score}</div>
            <div class="hof-score-lbl">SOS Score</div>
          </div>
        </div>
        <div class="hof-verdict ${film.verdict}">${hofVerdictLabel(film.verdict)}</div>
        <div class="hof-pillars">${pillarsHTML}</div>
        ${detailHTML}
      `;

      // Click-to-expand — only if detail data exists
      if (d && d.bullets && d.bullets.length) {
        card.addEventListener('click', (e) => {
          const isExpanded = card.classList.contains('expanded');
          // Collapse all cards in this grid
          const grid = card.closest('.hof-grid');
          if (grid) {
            grid.querySelectorAll('.hof-card.expanded').forEach(c => c.classList.remove('expanded'));
          }
          if (!isExpanded) {
            card.classList.add('expanded');
            // Smooth scroll so expanded card is visible
            setTimeout(() => {
              card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
          }
        });
      }

      return card;
    }

    function buildHofPanels() {
      const strip = document.getElementById('hofYearStrip');
      const panels = document.getElementById('hofPanels');
      const years = Object.keys(hofData).sort((a,b) => b - a);
      const defaultYear = years[0];

      years.forEach((year, i) => {
        // Year button
        const btn = document.createElement('button');
        btn.className = 'hof-year-btn' + (year === defaultYear ? ' active' : '');
        btn.textContent = year;
        btn.dataset.year = year;
        btn.addEventListener('click', () => {
          document.querySelectorAll('.hof-year-btn').forEach(b => b.classList.remove('active'));
          document.querySelectorAll('.hof-year-panel').forEach(p => p.classList.remove('active'));
          btn.classList.add('active');
          document.getElementById('hof-panel-' + year).classList.add('active');
        });
        strip.appendChild(btn);

        // Panel
        const data = hofData[year];
        const panel = document.createElement('div');
        panel.className = 'hof-year-panel' + (year === defaultYear ? ' active' : '');
        panel.id = 'hof-panel-' + year;

        const header = document.createElement('div');
        header.className = 'hof-year-panel-header';
        header.innerHTML = `
          <div class="hof-year-label">${year}</div>
          <div class="hof-year-desc">${data.note}</div>
        `;
        panel.appendChild(header);

        const grid = document.createElement('div');
        grid.className = 'hof-grid';
        const sortedFilms = [...data.films].sort((a, b) => b.score - a.score);
        sortedFilms.forEach((film, idx) => grid.appendChild(buildHofCard(film, idx + 1)));
        panel.appendChild(grid);
        panels.appendChild(panel);
      });
    }

    // ══════════════════════════════════════════
    // INITIALIZE
    // ══════════════════════════════════════════
    function populateFilmRails() {
      const segCount = 300;
      ['filmRailTopInner', 'filmRailBottomInner'].forEach(id => {
        const inner = document.getElementById(id);
        for (let set = 0; set < 2; set++) {
          for (let i = 0; i < segCount; i++) {
            const seg = document.createElement('div');
            seg.className = 'film-segment' + (i % 4 === 3 ? ' frame-div' : '');
            inner.appendChild(seg);
          }
        }
      });
    }

    populateCarousel();
    populateFilmRails();
    buildHofPanels();

    // ══════════════════════════════════════════
    // CAROUSEL ENGINE — single rAF loop, one position var
    // Track + rails always move together, no CSS animation, no sync needed
    // ══════════════════════════════════════════
    (function initCarousel() {
      const track    = document.getElementById('carouselTrack');
      const topInner = document.getElementById('filmRailTopInner');
      const botInner = document.getElementById('filmRailBottomInner');
      if (!track) return;

      const SPEED = 0.6; // px per frame
      let pos     = 0;
      let paused  = false;
      let manuallyPaused = false;

      // Wait for cards to be in DOM and track to have real width
      function waitAndStart() {
        const w = track.scrollWidth;
        if (!w || w < 100) { requestAnimationFrame(waitAndStart); return; }
        const half = w / 2;

        function tick() {
          if (!paused) {
            pos -= SPEED;
            if (pos <= -half) pos += half; // seamless loop
          }
          track.style.transform    = `translateX(${pos}px)`;
          topInner.style.transform = `translateX(${pos}px)`;
          botInner.style.transform = `translateX(${pos}px)`;
          requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(waitAndStart);

      function pause(manual) {
        if (manual) manuallyPaused = true;
        paused = true;
      }
      function resume(manual) {
        if (manual) manuallyPaused = false;
        if (manuallyPaused) return;
        paused = false;
      }

      // Hover (desktop)
      track.parentElement.addEventListener('mouseenter', () => pause(false));
      track.parentElement.addEventListener('mouseleave', () => resume(false));

      // Touch
      track.parentElement.addEventListener('touchstart', () => pause(false), { passive: true });
      document.addEventListener('touchend', (e) => {
        if (!track.parentElement.contains(e.target)) resume(false);
      }, { passive: true });

      window._carouselPause  = () => pause(true);
      window._carouselResume = () => resume(true);
    })();

    // ══════════════════════════════════════════
    // MOST ANTICIPATED — 2026 DATA
    // ══════════════════════════════════════════
    const anticipatedData = [
      {
        rank: 1, title: 'The Odyssey', director: 'Christopher Nolan', genre: 'Epic/Drama',
        releaseDate: 'Jul 17, 2026', projectedScore: '94–98',
        verdict: 'imax', verdictLabel: 'Must-See IMAX',
        pillars: { V: 98, A: 94, CE: 96, CM: 82, N: 90, D: 88 },
        summary: "Nolan's adaptation of Homer's ancient epic, following Odysseus on his decade-long journey home after the Trojan War. Shot entirely on IMAX film cameras — the first narrative feature in history to do so completely.",
        why: "This is the single most theatrically necessary film of 2026. Nolan is the only director alive who treats IMAX 65mm as his native canvas, and every confirmed detail — native IMAX capture across the full runtime, a cast of dozens of A-listers, a Hans Zimmer score, and 20 years of Nolan's accumulated theatrical authority — points toward a score in the high 90s. The format modifier alone (+12) is almost guaranteed. The Odyssey is not just a film; it's an argument for why theaters exist.",
        factors: ["Filmed entirely on IMAX 65mm cameras — full +12 format modifier", "Nolan's prior 3 films average SOS 89 — +4 legacy modifier", "Hans Zimmer score composition confirmed", "Cast: Zendaya, Matt Damon, Anne Hathaway, Charlize Theron, Robert Pattinson, Tom Holland", "#1 most anticipated film of 2026 on IMDb — peak cultural momentum", "Theatrical exclusivity window expected ≥ 90 days"]
      },
      {
        rank: 2, title: 'Dune: Part Three', director: 'Denis Villeneuve', genre: 'Sci-Fi',
        releaseDate: 'Dec 18, 2026', projectedScore: '93–96',
        verdict: 'imax', verdictLabel: 'Must-See IMAX',
        pillars: { V: 96, A: 95, CE: 92, CM: 90, N: 84, D: 88 },
        summary: "The conclusion to Villeneuve's Dune trilogy, adapting Dune Messiah. Timothée Chalamet returns as Paul Atreides alongside Zendaya, Florence Pugh, and Anya Taylor-Joy.",
        why: "Dune: Part Two scored a 96 on our system — the highest single-year score in our 2024 data. Part Three arrives with identical production pedigree: IMAX cameras, Greig Fraser's cinematography, Hans Zimmer's score, and the full weight of franchise conclusion momentum. The trilogy closer modifier and Villeneuve's +4 legacy bonus combine with a visual scale pillar that should again approach 96–99.",
        factors: ["Confirmed IMAX camera shoot — full format modifier in play", "Villeneuve's SOS average: 93 — triggers +4 legacy modifier", "Greig Fraser DP confirmed — highest visual pillar cinematographer in our database", "Trilogy closer cultural momentum — CM pillar expected near 90", "Zendaya, Florence Pugh, Anya Taylor-Joy added to cast", "Hans Zimmer score confirmed"]
      },
      {
        rank: 3, title: 'Avengers: Doomsday', director: 'Anthony & Joe Russo', genre: 'Action',
        releaseDate: 'Dec 18, 2026', projectedScore: '88–92',
        verdict: 'imax', verdictLabel: 'Must-See IMAX',
        pillars: { V: 86, A: 84, CE: 84, CM: 98, N: 80, D: 82 },
        summary: "The Russo Brothers return to Marvel with Robert Downey Jr. as Doctor Doom. The most expansive Avengers assembly since Endgame, with a cast pulling from across every MCU phase.",
        why: "The Russo brothers' MCU theatrical track record is unmatched — Infinity War (90), Endgame (94), Fallout (88). The Cultural Momentum pillar will approach 98 by opening day, driven by RDJ's return and the convergence of dozens of character arcs. If theatrical exclusivity is confirmed, this projects into the 90s. If day-and-date, score drops to the mid-80s — the single biggest score swing variable in our 2026 projections.",
        factors: ["Robert Downey Jr. returns as Doctor Doom — cultural event multiplier", "Russo Bros' prior MCU films average SOS 90.7", "Cultural Momentum pillar projects near 98 — highest possible range", "IMAX confirmed in select markets", "Theatrical exclusivity vs. day-and-date TBD — 10-point swing pending", "Largest assembled MCU cast since Endgame"]
      },
      {
        rank: 4, title: 'Spider-Man: Brand New Day', director: 'Destin Daniel Cretton', genre: 'Action',
        releaseDate: 'Jul 31, 2026', projectedScore: '82–87',
        verdict: 'imax', verdictLabel: 'Must-See IMAX',
        pillars: { V: 82, A: 80, CE: 82, CM: 94, N: 80, D: 78 },
        summary: "Tom Holland returns as Peter Parker in the fourth solo Spider-Man film, beginning a new chapter following the events of No Way Home. Directed by Destin Daniel Cretton (Shang-Chi).",
        why: "Spider-Man: No Way Home scored an 85 on our system — driven almost entirely by an off-the-charts Cultural Momentum pillar of 99. Brand New Day inherits that momentum with a new story arc and a proven director. Tom Holland's Spider-Man is the highest CM-generating solo superhero in our database. The score projection is anchored by strong cultural pull rather than technical spectacle, which caps the Visual Scale pillar but keeps the overall score firmly in IMAX territory.",
        factors: ["Tom Holland Spider-Man — highest solo superhero CM score in our database", "Destin Daniel Cretton director: Shang-Chi CE pillar at 80, brand-builder pedigree", "No Way Home's 85 SOS sets a strong franchise floor for this entry", "New story arc post-No Way Home: audience curiosity modifier elevated", "July summer release — prime blockbuster theatrical window", "Cultural Momentum: Spider-Man franchise CM baseline consistently 88–96"]
      },
      {
        rank: 5, title: 'The Hunger Games: Sunrise on the Reaping', director: 'Francis Lawrence', genre: 'Action',
        releaseDate: 'Nov 20, 2026', projectedScore: '82–87',
        verdict: 'imax', verdictLabel: 'Must-See IMAX',
        pillars: { V: 82, A: 80, CE: 82, CM: 90, N: 86, D: 84 },
        summary: "The prequel adapting Suzanne Collins' novel about the 50th Hunger Games — the Second Quarter Quell. Set decades before Katniss, this is the story fans have wanted since Catching Fire first referenced it.",
        why: "Francis Lawrence directed the three highest-grossing Hunger Games films. The 50th Games carries enormous narrative weight — it's the Games that broke Haymitch. Our Narrative Lens pillar scores the communal storytelling experience of shared lore, and few franchises carry that weight as consistently as Hunger Games. Confirmed IMAX release.",
        factors: ["IMAX confirmed for theatrical release", "Francis Lawrence returns — franchise's highest-performing director", "50th Hunger Games — peak lore significance, Narrative Lens score elevated", "Quarter Quell storyline has decade of fan anticipation built in", "Suzanne Collins co-wrote the screenplay", "November release window — no blockbuster competition"]
      },
      {
        rank: 6, title: 'Toy Story 5', director: 'Pixar Animation Studios', genre: 'Animation',
        releaseDate: 'Jun 19, 2026', projectedScore: '74–80',
        verdict: 'theater', verdictLabel: 'See in Theaters',
        pillars: { V: 78, A: 76, CE: 70, CM: 92, N: 76, D: 80 },
        summary: "Pixar returns to Woody, Buzz, and the gang — introducing them to the technology era for the first time. The fifth installment of the most beloved animated franchise in cinema history.",
        why: "Toy Story is one of only four franchises in our database with CM scores that approach 92+ regardless of marketing spend. The Pixar theatrical experience is uniquely communal — three-generation audiences, collective emotional investment. Confirmed IMAX release. The ceiling is capped by animation's inherent home-viewing parity relative to live-action, keeping the score in the theater-tier rather than IMAX-tier.",
        factors: ["IMAX confirmed — Pixar's first IMAX presentation since Brave", "Cultural Momentum: Toy Story franchise CM baseline is 88–92 regardless of content", "Three-generation audience event — communal experience multiplier", "Randy Newman confirmed for score", "Animation home-viewing parity caps Visual Scale and Audio pillars", "June release: family blockbuster window, minimal competition"]
      },
      {
        rank: 7, title: 'Narnia: The Magician\'s Nephew', director: 'Greta Gerwig', genre: 'Fantasy/Adventure',
        releaseDate: 'Dec 2026', projectedScore: '80–86',
        verdict: 'imax', verdictLabel: 'Must-See IMAX',
        pillars: { V: 86, A: 82, CE: 82, CM: 84, N: 82, D: 80 },
        summary: "Greta Gerwig's adaptation of C.S. Lewis's Narnia origin story, following the creation of the magical world of Narnia. Confirmed IMAX release and one of the most anticipated fantasy reboots in years.",
        why: "Following Barbie's cultural dominance (SOS 68), Gerwig steps into epic fantasy filmmaking for the first time. The Narnia IP carries significant nostalgic cultural momentum — our CM algorithm gives mythology-relaunch modifiers to franchises with 20+ year dormancy. IMAX confirmation and a fantasy visual canvas suggest a strong Visual Scale pillar. The unknown variable is how Gerwig's intimate storytelling instincts translate to large-format spectacle.",
        factors: ["IMAX confirmed for theatrical release", "Greta Gerwig — first major fantasy epic from an acclaimed literary-adaptation director", "Narnia mythology relaunch modifier: 20+ year theatrical dormancy", "CS Lewis source material: Narrative Lens score elevated by shared cultural lore", "December prestige release window — award-season positioning", "Fantasy visual canvas: maximum scope for Visual Scale and Audio pillars"]
      },
      {
        rank: 8, title: 'Supergirl: Woman of Tomorrow', director: 'Craig Gillespie', genre: 'Action',
        releaseDate: 'Jun 26, 2026', projectedScore: '72–78',
        verdict: 'theater', verdictLabel: 'See in Theaters',
        pillars: { V: 78, A: 74, CE: 76, CM: 80, N: 74, D: 78 },
        summary: "Craig Gillespie's (I, Tonya) take on the DC character, starring Milly Alcock as Kara Zor-El. A darker, grittier Supergirl story adapting Tom King's acclaimed comic run.",
        why: "Gillespie's Milly Alcock casting generated significant cultural momentum — she's one of the most talked-about new leads in the DCU. The Tom King comic adaptation has built-in critical credibility. Our Visual Scale pillar benefits from a confirmed large-format production and the DCU's improving track record post-Superman. The score is capped by franchise uncertainty — this is the first outing for this version of the character, limiting our CM pillar ceiling.",
        factors: ["IMAX confirmed for theatrical release", "Milly Alcock (House of the Dragon) — breakthrough lead performance potential", "Tom King comic run: critical credibility elevates Narrative Lens pillar", "Craig Gillespie director: CE pillar elevated by I, Tonya pedigree", "Post-Superman DCU momentum building — CM pillar benefiting from franchise trust", "June summer release: strong theatrical positioning"]
      },
      {
        rank: 9, title: 'Untitled Iñárritu / Tom Cruise Film', director: 'Alejandro G. Iñárritu', genre: 'Drama/Action',
        releaseDate: 'Fall 2026', projectedScore: '82–88',
        verdict: 'imax', verdictLabel: 'Must-See IMAX',
        pillars: { V: 86, A: 84, CE: 90, CM: 78, N: 86, D: 80 },
        summary: "Alejandro G. Iñárritu directs Tom Cruise in an as-yet untitled film confirmed for IMAX release in 2026. Details are closely guarded — but the director-actor combination is one of the most compelling pairings in years.",
        why: "Iñárritu's films are among the highest-scoring in our Cinematic Experience pillar — Birdman, The Revenant, and Babel all demonstrate his ability to engineer immersive theatrical events that are genuinely diminished at home. Pairing him with Tom Cruise — whose films average an SOS of 87 in our database — creates an IMAX projection that essentially calculates itself. The biggest unknown is genre and narrative scale, both of which are unrevealed.",
        factors: ["IMAX confirmed on 2026 official release slate", "Iñárritu CE pillar average: 92 across prior filmography", "Tom Cruise films average SOS 87 in our database", "Mystery/secrecy around the project generates pre-release cultural intrigue", "Both director and star have proven theatrical-necessity track records", "Film has received 'passion project' framing — typically elevates authenticity scores"]
      },
      {
        rank: 10, title: 'The Hunger Games: Sunrise on the Reaping (IMAX Re-Release)', director: 'Francis Lawrence', genre: 'Action',
        releaseDate: 'TBD 2026', projectedScore: '78–84',
        verdict: 'theater', verdictLabel: 'See in Theaters',
        pillars: { V: 80, A: 78, CE: 78, CM: 86, N: 82, D: 76 },
        summary: "Street Fighter — the live-action adaptation starring Andrew Koji as Ryu and Noah Centineo as Ken, directed by Danny Cannon. An IMAX-confirmed martial arts tournament film built for crowd energy.",
        why: "Street Fighter (2026) occupies an interesting position in our model: the sound design and crowd energy pillars of tournament fighting films are consistently elevated in our system. The IP mythology (despite the 1994 film's infamy) has high latent cultural nostalgia, and the legitimate martial arts casting creates an authenticity signal our algorithm rewards. Andrew Koji's fight choreography background suggests a Visual Scale ceiling well above standard action releases.",
        factors: ["IMAX confirmed for theatrical release (Sep 18, 2026)", "Tournament fighting sound design: among highest Audio pillar ceilings in action genre", "Andrew Koji (Warrior) — legitimate martial arts background elevates authenticity score", "Street Fighter IP: high latent nostalgia after 30-year theatrical absence of quality adaptation", "Karl Urban involvement rumored — 'crowd catalyst' character archetype", "September release: limited competition window"]
      },
    ];

    // ══════════════════════════════════════════
    // BUILD MOST ANTICIPATED CARDS
    // ══════════════════════════════════════════
    function buildAnticipatedCard(film) {
      const card = document.createElement('div');
      card.className = 'hof-card';

      const pillarsHTML = Object.entries(film.pillars).map(([key, val]) => `
        <div class="hof-pillar-row">
          <span class="hof-pillar-lbl">${key}</span>
          <div class="hof-bar-track"><div class="hof-bar-fill" style="width:${val}%"></div></div>
          <span class="hof-bar-val">${val}</span>
        </div>`).join('');

      const factorsHTML = film.factors.map(f => `
        <div class="hof-bullet"><span class="hof-bullet-mark">◆</span><span>${f}</span></div>`).join('');

      card.innerHTML = `
        <div class="hof-card-rank">#${film.rank}</div>
        <div class="hof-card-header">
          <div>
            <div class="hof-card-title">${film.title}</div>
            <div class="hof-card-meta">${film.director} · ${film.genre} · ${film.releaseDate}</div>
          </div>
          <div class="hof-score-wrap${film.verdict === 'imax' ? ' imax-star' : ''}">
            <div class="hof-score-num s-imax" style="font-size:22px;letter-spacing:-1px">${film.projectedScore}</div>
            <div class="hof-score-lbl">Projected</div>
          </div>
        </div>
        <div class="hof-verdict ${film.verdict}">${film.verdictLabel}</div>
        <div class="hof-pillars">${pillarsHTML}</div>
        <div class="hof-detail">
          <div class="hof-detail-inner">
            <div class="hof-detail-grid">
              <div>
                <div class="hof-block-label">About this film</div>
                <div class="hof-detail-summary">${film.summary}</div>
              </div>
              <div>
                <div class="hof-block-label">Film data</div>
                <div class="hof-detail-stats">
                  <div class="hof-stat-row"><span class="hof-stat-key">Director</span><span class="hof-stat-val">${film.director}</span></div>
                  <div class="hof-stat-row"><span class="hof-stat-key">Genre</span><span class="hof-stat-val">${film.genre}</span></div>
                  <div class="hof-stat-row"><span class="hof-stat-key">Release</span><span class="hof-stat-val">${film.releaseDate}</span></div>
                  <div class="hof-stat-row"><span class="hof-stat-key">Projected Score</span><span class="hof-stat-val mono">${film.projectedScore}</span></div>
                  <div class="hof-stat-row"><span class="hof-stat-key">Verdict</span><span class="hof-stat-val">${film.verdictLabel}</span></div>
                </div>
              </div>
            </div>
            <div class="hof-block-label">Why it projects high</div>
            <div class="hof-detail-summary" style="margin-bottom:16px">${film.why}</div>
            <div class="hof-block-label">Key scoring factors</div>
            <div class="hof-bullets">${factorsHTML}</div>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        const isExpanded = card.classList.contains('expanded');
        document.querySelectorAll('#anticipatedGrid .hof-card.expanded').forEach(c => c.classList.remove('expanded'));
        if (!isExpanded) {
          card.classList.add('expanded');
          setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
        }
      });

      return card;
    }

    function buildAnticipatedPage() {
      const fullGrid    = document.getElementById('anticipatedGrid');
      const previewGrid = document.getElementById('anticipatedPreviewGrid');
      anticipatedData.forEach((film, i) => {
        fullGrid.appendChild(buildAnticipatedCard(film));
        if (i < 3) previewGrid.appendChild(buildAnticipatedCard(film));
      });
    }

    buildAnticipatedPage();

    // ══════════════════════════════════════════
    // LATEST SCORES 2026 — HOF-style cards
    // ══════════════════════════════════════════
    const latestScores2026 = [
      { title: 'Project Hail Mary', director: 'Lord & Miller', genre: 'Sci-Fi', score: 91, verdict: 'imax',
        pillars: { V:88, A:82, CE:86, CM:80, N:92, D:84 },
        summary: "Ryan Gosling as Ryland Grace, an astronaut alone in deep space on humanity's last-chance mission. Adapts Andy Weir's beloved novel.",
        budget: "$200M", fact: "Project Hail Mary became Amazon MGM's highest-grossing film ever, surpassing $650M worldwide — the first purely original sci-fi IP to cross $500M since Interstellar." },
      { title: 'The Mandalorian & Grogu', director: 'Favreau', genre: 'Sci-Fi/Action', score: 86, verdict: 'imax',
        pillars: { V:90, A:88, CE:84, CM:88, N:78, D:86 },
        summary: "Din Djarin and Grogu face their most dangerous galactic mission yet — the first Star Wars film designed natively for IMAX theatrical.",
        budget: "$300M+", fact: "The Mandalorian & Grogu is the first Star Wars theatrical film shot in native IMAX aspect ratio for the full runtime — all previous Star Wars IMAX releases were post-converted." },
      { title: 'Mortal Kombat II', director: 'McQuoid', genre: 'Action', score: 78, verdict: 'theater',
        pillars: { V:80, A:82, CE:74, CM:82, N:70, D:78 },
        summary: "The Mortal Kombat tournament begins for real. Karl Urban joins as Johnny Cage in this sequel that introduces the iconic competition at the center of the franchise.",
        budget: "$120M", fact: "Mortal Kombat II held an exclusive one-week IMAX window before wide release — the first non-Marvel/DC Western action film to receive that treatment since Mission: Impossible Fallout in 2018." },
      { title: 'The Super Mario Galaxy Movie', director: 'Illumination', genre: 'Animation', score: 72, verdict: 'theater',
        pillars: { V:76, A:72, CE:68, CM:94, N:68, D:78 },
        summary: "Mario and friends venture into the galaxy on an animated sequel that became 2026's biggest box office event, clearing $940M worldwide.",
        budget: "$180M", fact: "The Super Mario Galaxy Movie holds the record for the biggest opening weekend of 2026 at $372M — the largest animated opening in history, surpassing The Super Mario Bros. Movie's own 2023 record." },
      { title: 'Mercy', director: 'McQuarrie', genre: 'Action/Thriller', score: 68, verdict: 'theater',
        pillars: { V:72, A:74, CE:70, CM:70, N:66, D:72 },
        summary: "Chris Pratt stars in this January IMAX thriller directed by Christopher McQuarrie — a taut action film that opened the 2026 theatrical calendar with more ambition than most January releases.",
        budget: "$130M", fact: "Mercy was the first film of 2026 to open in IMAX, holding the premium format for two full weeks — an unusually long IMAX window for a January release that signaled exhibitor confidence in the project." },
      { title: 'Michael', director: 'Fuqua', genre: 'Drama/Biopic', score: 67, verdict: 'theater',
        pillars: { V:68, A:88, CE:72, CM:84, N:68, D:74 },
        summary: "Antoine Fuqua's authorized biopic of Michael Jackson, starring Jaafar Jackson. A theatrical event built around a music catalog designed for maximum sound systems.",
        budget: "$150M", fact: "Jaafar Jackson performed all of Michael's music catalog live — recording every song from scratch rather than lip-syncing to the originals, giving the film a unique sonic identity." },
    ];

    function buildLatestScoreCard(film, rank) {
      const card = document.createElement('div');
      card.className = 'hof-card';

      const scoreClass = film.score >= 85 ? 's-imax' : film.score >= 55 ? 's-theater' : 's-stream';
      const verdictLabel = film.verdict === 'imax' ? 'Must-See IMAX' : film.verdict === 'theater' ? 'See in Theaters' : 'Stream at Home';

      const pillarsHTML = Object.entries(film.pillars).map(([key, val]) => `
        <div class="hof-pillar-row">
          <span class="hof-pillar-lbl">${key}</span>
          <div class="hof-bar-track"><div class="hof-bar-fill" style="width:${val}%"></div></div>
          <span class="hof-bar-val">${val}</span>
        </div>`).join('');

      card.innerHTML = `
        <div class="hof-card-rank">#${rank}</div>
        <div class="hof-card-header">
          <div>
            <div class="hof-card-title">${film.title}</div>
            <div class="hof-card-meta">${film.director} · ${film.genre} · 2026</div>
          </div>
          <div class="hof-score-wrap${film.verdict === 'imax' ? ' imax-star' : ''}">
            <div class="hof-score-num ${scoreClass}">${film.score}</div>
            <div class="hof-score-lbl">SOS Score</div>
          </div>
        </div>
        <div class="hof-verdict ${film.verdict}">${verdictLabel}</div>
        <div class="hof-pillars">${pillarsHTML}</div>
        <div class="hof-detail">
          <div class="hof-detail-inner">
            <div class="hof-detail-grid">
              <div>
                <div class="hof-block-label">About this film</div>
                <div class="hof-detail-summary">${film.summary}</div>
              </div>
              <div>
                <div class="hof-block-label">Film data</div>
                <div class="hof-detail-stats">
                  <div class="hof-stat-row"><span class="hof-stat-key">Director</span><span class="hof-stat-val">${film.director}</span></div>
                  <div class="hof-stat-row"><span class="hof-stat-key">Genre</span><span class="hof-stat-val">${film.genre}</span></div>
                  <div class="hof-stat-row"><span class="hof-stat-key">Budget</span><span class="hof-stat-val mono">${film.budget}</span></div>
                  <div class="hof-stat-row"><span class="hof-stat-key">SOS Score</span><span class="hof-stat-val mono">${film.score} / 100</span></div>
                  <div class="hof-stat-row"><span class="hof-stat-key">Verdict</span><span class="hof-stat-val">${verdictLabel}</span></div>
                </div>
              </div>
            </div>
            <div class="hof-fact">
              <span class="hof-fact-label">Interesting fact</span>
              ${film.fact}
            </div>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        const isExpanded = card.classList.contains('expanded');
        const grid = card.closest('.hof-grid');
        if (grid) grid.querySelectorAll('.hof-card.expanded').forEach(c => c.classList.remove('expanded'));
        if (!isExpanded) {
          card.classList.add('expanded');
          setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
        }
      });

      return card;
    }

    function buildLatestScores() {
      const previewGrid = document.getElementById('latestScoresGrid');
      const fullGrid    = document.getElementById('allScoresGrid');
      latestScores2026.forEach((film, i) => {
        // Always add to full page
        fullGrid.appendChild(buildLatestScoreCard(film, i + 1));
        // Only first 3 on homepage
        if (i < 3) previewGrid.appendChild(buildLatestScoreCard(film, i + 1));
      });
    }

    buildLatestScores();

    // ══════════════════════════════════════════
    // INTRO SPLASH — once per session
    // ══════════════════════════════════════════
    (function initSplash() {
      const splash = document.getElementById('intro-splash');
      if (!splash) return;

      if (sessionStorage.getItem('sos_splash_shown')) {
        splash.classList.add('hidden');
        return;
      }
      sessionStorage.setItem('sos_splash_shown', '1');

      // Hold fully visible for holdMs, then fade over fadeMs using rAF
      const holdMs = 1800;  // how long to show at full opacity
      const fadeMs = 1900;  // how long the fade takes

      let startFade = null;

      function tick(ts) {
        if (!startFade) { requestAnimationFrame(tick); return; }
        const elapsed = ts - startFade;
        const progress = Math.min(elapsed / fadeMs, 1);
        // ease-out: fast at start, lingers near transparent
        const eased = 1 - Math.pow(progress, 1.6);
        splash.style.opacity = eased;
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          splash.classList.add('hidden');
        }
      }

      // Start the rAF loop, then after holdMs kick off the fade
      requestAnimationFrame(tick);
      setTimeout(() => {
        startFade = performance.now();
        requestAnimationFrame(tick);
      }, holdMs);
    })();

    // ══════════════════════════════════════════
    // CAROUSEL — CSS animation, pause on tap/hover, resume on tap outside
    // ══════════════════════════════════════════
  