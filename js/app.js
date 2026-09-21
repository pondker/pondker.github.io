/**
 * Interactive Application Controller for Parinya Daengsawat's 3D Portfolio
 * Theme: Studio Clay & Industrial (#1E2022 / #2B2D31 / #10B981)
 */

document.addEventListener('DOMContentLoaded', () => {
  initProfileHeaderSkills();
  initFlagshipSequentialBreakdowns();
  initGalleryFilter();
  initSkillsSection();
  initExperienceTimeline();
  initMobileMenu();
  initScrollEffects();

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/* ==========================================================================
   1. HERO SOFTWARE SKILLS ROW
   ========================================================================== */
function initProfileHeaderSkills() {
  const container = document.getElementById('hero-software-icons');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.skillsWithLogos.map(skill => `
    <div 
      class="skill-badge-circle cursor-pointer group relative p-2"
      title="${skill.name} (${skill.level})"
      onclick="document.getElementById('skills').scrollIntoView({behavior: 'smooth'})"
    >
      <img 
        src="${encodeURI(skill.logo)}" 
        alt="${skill.name}" 
        class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-200" 
      />
    </div>
  `).join('');
}

/* ==========================================================================
   2. 4 FLAGSHIP MODELS WITH SLIDER & BREAKDOWN
   ========================================================================== */
const flagshipCurrentSlide = {};

function initFlagshipSequentialBreakdowns() {
  const container = document.getElementById('flagship-list-container');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.flagshipModels.map(model => renderFlagshipBlock(model)).join('');

  // Initialize all models to slide 0
  PORTFOLIO_DATA.flagshipModels.forEach(model => {
    flagshipCurrentSlide[model.id] = 0;
    updateFlagshipDisplay(model.id);
  });
}

function renderFlagshipBlock(model) {
  const totalSlides = model.slides.length;

  return `
    <article id="flagship-item-${model.id}" class="blueprint-card p-5 sm:p-8 lg:p-10 mb-8 sm:mb-12 last:mb-0">
      
      <!-- Model Header Info -->
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/15 mb-6 sm:mb-8">
        <div>
          <div class="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
            <span class="font-mono text-xs font-bold text-slate-950 px-3 py-1 rounded-full bg-emerald-400 shadow-sm">
              FLAGSHIP ${model.number}
            </span>
            <span class="text-xs font-mono text-emerald-300 px-3 py-1 rounded-full bg-[#1F2124] border border-white/15">
              ${model.badge}
            </span>
          </div>
          <h3 class="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-white tracking-tight">
            ${model.name} <span class="text-slate-300 text-base sm:text-lg lg:text-xl font-normal">(${model.thaiTitle})</span>
          </h3>
          <p class="text-xs sm:text-sm font-mono text-emerald-400 mt-1">
            ${model.tagline}
          </p>
        </div>

        <!-- Software Used Pills -->
        <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
          ${model.software.map(sw => `
            <span class="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-xs font-bold bg-[#1F2124] text-slate-200 border border-white/15 flex items-center gap-1.5 shadow-md">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              ${sw}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Main Breakdown Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        <!-- Left: Interactive Viewer with Next/Prev Arrows -->
        <div class="lg:col-span-7 space-y-4">
          
          <!-- Mode Switcher Buttons: [Textured Render] [Wireframe Topology] [360° Turntable] -->
          <div class="flex flex-wrap items-center justify-between gap-2 p-1.5 sm:p-2 rounded-2xl bg-[#141517] border border-white/10 shadow-inner">
            <div class="flex items-center gap-1 sm:gap-2 overflow-x-auto max-w-full">
              <button 
                onclick="jumpToMode('${model.id}', 'textured')"
                id="btn-mode-${model.id}-textured"
                class="mode-btn px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 border breakdown-tab-active shrink-0"
              >
                <i data-lucide="palette" class="w-3.5 h-3.5 sm:w-4 sm:h-4"></i>
                <span>Textured<span class="hidden md:inline"> Render</span></span>
              </button>
              
              <button 
                onclick="jumpToMode('${model.id}', 'wireframe')"
                id="btn-mode-${model.id}-wireframe"
                class="mode-btn px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 border bg-[#2B2D31] text-slate-300 border-white/10 hover:bg-white/10 hover:text-white shrink-0"
              >
                <i data-lucide="grid" class="w-3.5 h-3.5 sm:w-4 sm:h-4"></i>
                <span>Wireframe<span class="hidden md:inline"> Topology</span></span>
              </button>
              
              <button 
                onclick="jumpToMode('${model.id}', 'turntable')"
                id="btn-mode-${model.id}-turntable"
                class="mode-btn px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 border bg-[#2B2D31] text-slate-300 border-white/10 hover:bg-white/10 hover:text-white shrink-0"
              >
                <i data-lucide="film" class="w-3.5 h-3.5 sm:w-4 sm:h-4"></i>
                <span>360°<span class="hidden md:inline"> Turntable</span></span>
              </button>
            </div>

            <!-- Active Status Badge -->
            <div id="badge-status-${model.id}" class="hidden sm:flex px-3 py-1 rounded-full text-xs font-semibold badge-textured items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Textured Render</span>
            </div>
          </div>

          <!-- Sub-Angle Selector Container -->
          <div id="sub-selector-${model.id}" class="flex flex-wrap items-center gap-1.5 sm:gap-2 p-2 rounded-xl bg-[#191B1D] border border-white/10">
            <!-- Dynamically populated per mode -->
          </div>

          <!-- Viewer Screen Canvas with Floating Navigation Arrows -->
          <div class="viewer-container border border-white/15 aspect-[4/3] sm:aspect-[16/10] flex items-center justify-center relative group bg-[#141517] rounded-2xl overflow-hidden shadow-2xl select-none">
            
            <!-- Left Arrow (Previous Slide) -->
            <button 
              onclick="navigateSlide('${model.id}', -1)"
              aria-label="รูปก่อนหน้า (Previous)"
              class="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#2B2D31]/90 text-white hover:bg-emerald-500 hover:text-slate-950 border border-white/20 flex items-center justify-center transition-all shadow-2xl z-30 group-hover:scale-105 active:scale-95"
              title="เลื่อนไปดูรูปก่อนหน้า"
            >
              <i data-lucide="chevron-left" class="w-5 h-5 sm:w-6 sm:h-6"></i>
            </button>

            <!-- Right Arrow (Next Slide) -->
            <button 
              onclick="navigateSlide('${model.id}', 1)"
              aria-label="รูปถัดไป (Next)"
              class="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#2B2D31]/90 text-white hover:bg-emerald-500 hover:text-slate-950 border border-white/20 flex items-center justify-center transition-all shadow-2xl z-30 group-hover:scale-105 active:scale-95"
              title="เลื่อนไปดูรูปถัดไป"
            >
              <i data-lucide="chevron-right" class="w-5 h-5 sm:w-6 sm:h-6"></i>
            </button>

            <!-- Image Tag (Textured / Wireframe) -->
            <img 
              id="img-${model.id}" 
              src="" 
              alt="${model.name} 3D View" 
              class="w-full h-full object-contain p-2 transition-all duration-300"
            />

            <!-- Video Tag (Turntable MP4) -->
            <video 
              id="video-${model.id}" 
              src="" 
              controls 
              loop 
              playsinline
              preload="none"
              class="w-full h-full object-contain hidden bg-black"
            ></video>

            <!-- Floating Top-Left Slide Counter Badge -->
            <div class="absolute top-3 left-3 z-20 flex items-center gap-2">
              <span id="slide-counter-${model.id}" class="px-3 py-1 rounded-lg bg-[#1F2124]/90 backdrop-blur text-xs font-mono text-emerald-400 border border-white/15 shadow">
                1 / ${totalSlides}
              </span>
              <span id="slide-label-${model.id}" class="px-2.5 py-1 rounded-lg bg-[#1F2124]/90 backdrop-blur text-[11px] font-mono text-slate-200 border border-white/10 hidden sm:inline-block">
                Label
              </span>
            </div>

            <!-- Fullscreen Inspect Button -->
            <button 
              onclick="openCurrentSlideLightbox('${model.id}')"
              class="absolute bottom-3 right-3 z-20 px-3.5 py-2 rounded-xl bg-[#2B2D31] text-white hover:bg-emerald-500 hover:text-slate-950 font-bold text-xs border border-white/20 flex items-center gap-1.5 transition-all shadow-lg"
              title="Click to inspect full resolution"
            >
              <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
              <span>ดูภาพขนาดเต็ม</span>
            </button>
          </div>

          <!-- Dynamic Caption -->
          <div class="flex items-center justify-between text-xs text-emerald-400 px-2 font-mono">
            <span id="caption-${model.id}">คำอธิบายภาพ</span>
            <span class="text-slate-400">กดลูกศร ซ้าย-ขวา เพื่อเลื่อนดูภาพถัดไปได้ทันที</span>
          </div>

        </div>

        <!-- Right: Technical Details & Description -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Detailed Paragraph -->
          <div class="blueprint-card-inner p-6">
            <h4 class="font-heading font-bold text-base text-white mb-2 flex items-center gap-2">
              <i data-lucide="info" class="w-4 h-4 text-emerald-400"></i> รายละเอียดผลงาน
            </h4>
            <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
              ${model.description}
            </p>
          </div>

          <!-- Technical Specs Table -->
          <div class="space-y-2">
            <div class="text-xs uppercase tracking-wider text-emerald-400 font-mono font-bold flex items-center gap-2">
              <i data-lucide="check-square" class="w-3.5 h-3.5 text-white"></i> คุณสมบัติทางเทคนิค (TECHNICAL SPECS)
            </div>
            <div class="blueprint-card-inner p-5 space-y-3">
              ${Object.entries(model.specs).map(([k, v]) => `
                <div class="flex items-center justify-between py-1.5 border-b border-white/10 last:border-0 text-xs">
                  <span class="text-slate-400 font-medium">${k}</span>
                  <span class="text-white font-mono font-bold">${v}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Quick Action Buttons -->
          <div class="flex items-center gap-3 pt-2">
            <a 
              href="https://pondker1.artstation.com/" 
              target="_blank" 
              class="flex-1 py-3.5 rounded-xl text-center text-xs font-bold font-heading bg-[#1F2124] border border-white/20 hover:border-emerald-400 hover:text-emerald-300 text-white transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <i data-lucide="external-link" class="w-4 h-4"></i> ดูบน ArtStation
            </a>
            <a 
              href="#contact" 
              class="flex-1 py-3.5 rounded-xl text-center text-xs font-bold font-heading bg-emerald-500 text-slate-950 shadow-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2"
            >
              <i data-lucide="phone" class="w-4 h-4"></i> ติดต่อสอบถาม
            </a>
          </div>

        </div>

      </div>

    </article>
  `;
}

/* ==========================================================================
   SLIDER NAVIGATION LOGIC FOR FLAGSHIP MODELS
   ========================================================================== */
window.navigateSlide = function(modelId, delta) {
  const model = PORTFOLIO_DATA.flagshipModels.find(m => m.id === modelId);
  if (!model) return;

  const total = model.slides.length;
  let current = flagshipCurrentSlide[modelId] || 0;
  let nextIdx = current + delta;

  if (nextIdx >= total) nextIdx = 0;
  if (nextIdx < 0) nextIdx = total - 1;

  flagshipCurrentSlide[modelId] = nextIdx;
  updateFlagshipDisplay(modelId);
};

window.jumpToSlide = function(modelId, slideIndex) {
  flagshipCurrentSlide[modelId] = slideIndex;
  updateFlagshipDisplay(modelId);
};

window.jumpToMode = function(modelId, mode) {
  const model = PORTFOLIO_DATA.flagshipModels.find(m => m.id === modelId);
  if (!model) return;

  const targetIdx = model.slides.findIndex(s => s.mode === mode);
  if (targetIdx !== -1) {
    flagshipCurrentSlide[modelId] = targetIdx;
    updateFlagshipDisplay(modelId);
  }
};

function updateFlagshipDisplay(modelId) {
  const model = PORTFOLIO_DATA.flagshipModels.find(m => m.id === modelId);
  if (!model) return;

  const currentIdx = flagshipCurrentSlide[modelId] || 0;
  const slide = model.slides[currentIdx];
  if (!slide) return;

  const imgEl = document.getElementById(`img-${modelId}`);
  const vidEl = document.getElementById(`video-${modelId}`);
  const badgeEl = document.getElementById(`badge-status-${modelId}`);
  const captionEl = document.getElementById(`caption-${modelId}`);
  const counterEl = document.getElementById(`slide-counter-${modelId}`);
  const labelEl = document.getElementById(`slide-label-${modelId}`);
  const subSelectorEl = document.getElementById(`sub-selector-${modelId}`);

  // 1. Update Media (Image or Video)
  if (slide.type === 'video') {
    imgEl.classList.add('hidden');
    vidEl.classList.remove('hidden');

    if (!vidEl.src.includes(encodeURI(slide.src))) {
      vidEl.src = encodeURI(slide.src);
    }
    vidEl.currentTime = 0;
    vidEl.play().catch(e => console.log('Autoplay handled:', e));
  } else {
    vidEl.pause();
    vidEl.classList.add('hidden');
    imgEl.classList.remove('hidden');

    imgEl.classList.add('fade-in');
    imgEl.src = encodeURI(slide.src);
    setTimeout(() => imgEl.classList.remove('fade-in'), 350);
  }

  // 2. Update Status Badge & Counter
  if (badgeEl) {
    badgeEl.className = `px-3 py-1 rounded-full text-xs font-semibold ${slide.badgeClass} flex items-center gap-1.5`;
    badgeEl.innerHTML = `<span class="w-2 h-2 rounded-full ${slide.badgeColor}"></span> <span>${slide.badge}</span>`;
  }
  if (captionEl) {
    captionEl.textContent = slide.description;
  }
  if (counterEl) {
    counterEl.textContent = `${currentIdx + 1} / ${model.slides.length}`;
  }
  if (labelEl) {
    labelEl.textContent = slide.label;
  }

  // 3. Update Top Mode Buttons (Highlight Textured, Wireframe, or Turntable)
  ['textured', 'wireframe', 'turntable'].forEach(m => {
    const btn = document.getElementById(`btn-mode-${modelId}-${m}`);
    if (btn) {
      if (slide.mode === m) {
        btn.className = 'mode-btn px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 sm:gap-2 border breakdown-tab-active';
      } else {
        btn.className = 'mode-btn px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 sm:gap-2 border bg-[#2B2D31] text-slate-300 border-white/10 hover:bg-white/10 hover:text-white';
      }
    }
  });

  // 4. Update or Hide Sub-Selector
  if (subSelectorEl) {
    if (slide.mode === 'turntable') {
      subSelectorEl.classList.add('hidden');
    } else {
      subSelectorEl.classList.remove('hidden');

      const sameModeSlides = model.slides
        .map((s, idx) => ({ ...s, originalIndex: idx }))
        .filter(s => s.mode === slide.mode);

      if (sameModeSlides.length <= 1) {
        subSelectorEl.classList.add('hidden');
      } else {
        subSelectorEl.innerHTML = sameModeSlides.map(s => `
          <button 
            onclick="jumpToSlide('${model.id}', ${s.originalIndex})"
            class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
              s.originalIndex === currentIdx 
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md border-emerald-400' 
                : 'bg-[#2B2D31] text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
            }"
          >
            ${s.label}
          </button>
        `).join('');
      }
    }
  }

  if (window.lucide) window.lucide.createIcons();
}

/* ==========================================================================
   3. SKILLS SECTION WITH PROGRAM LOGOS
   ========================================================================== */
function initSkillsSection() {
  const container = document.getElementById('skills-logo-grid');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.skillsWithLogos.map(skill => `
    <div 
      class="blueprint-card-inner p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
      style="border-color: rgba(255, 255, 255, 0.15);"
    >
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center p-2 shadow-lg bg-white overflow-hidden">
            <img 
              src="${encodeURI(skill.logo)}" 
              alt="${skill.name}" 
              class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-200" 
            />
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#1F2124] text-emerald-300 border border-white/10 shadow-sm">
            ${skill.category}
          </span>
        </div>

        <h3 class="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
          ${skill.name}
        </h3>
        
        <div class="text-xs font-mono text-emerald-400 font-bold mt-0.5 mb-2">
          ${skill.level}
        </div>

        <p class="text-xs text-slate-300 leading-relaxed">
          ${skill.description}
        </p>
      </div>

      <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span>Industry Standard</span>
        <span class="text-emerald-400 flex items-center gap-1 font-bold">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Verified
        </span>
      </div>
    </div>
  `).join('');

  // Render Workflow Pipeline
  const workflowContainer = document.getElementById('workflow-steps');
  if (workflowContainer) {
    workflowContainer.innerHTML = PORTFOLIO_DATA.workflow.map(wf => `
      <div class="blueprint-card-inner p-5 hover:border-emerald-400/50 transition-all flex flex-col justify-between">
        <div>
          <div class="font-mono text-xs font-bold text-emerald-400 mb-2">${wf.step} // PIPELINE</div>
          <h4 class="font-heading text-base font-bold text-white mb-2">${wf.title}</h4>
          <p class="text-xs text-slate-300 leading-relaxed">${wf.desc}</p>
        </div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   4. CATEGORIZED PORTFOLIO GALLERY GRID (MY PROJECTS)
   ========================================================================== */
let activeCategory = 'all';

function initGalleryFilter() {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  renderGalleryCards(activeCategory);

  const filterButtons = document.querySelectorAll('.gallery-filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.className = 'gallery-filter-btn ref-pill-btn ref-pill-inactive';
      });
      btn.className = 'gallery-filter-btn ref-pill-btn ref-pill-active';
      
      activeCategory = btn.getAttribute('data-category');
      renderGalleryCards(activeCategory);
    });
  });
}

function renderGalleryCards(category) {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  const items = category === 'all' 
    ? PORTFOLIO_DATA.gallery 
    : PORTFOLIO_DATA.gallery.filter(item => item.category === category);

  container.innerHTML = items.map((item) => {
    const slideCount = (item.slides && item.slides.length) || (item.extraImages ? item.extraImages.length + 1 : 1);

    return `
      <div 
        onclick="openLightbox('${item.id}')"
        class="group blueprint-card-inner rounded-3xl overflow-hidden border border-white/15 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col"
      >
        <div class="relative w-full aspect-[4/3] bg-[#141517] overflow-hidden">
          <img 
            src="${encodeURI(item.image)}" 
            alt="${item.title}" 
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#141517] via-[#141517]/10 to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
          
          <!-- Top Badges -->
          <div class="absolute top-3 right-3 flex items-center gap-1.5">
            ${slideCount > 1 ? `
              <span class="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[#1F2124]/90 backdrop-blur text-emerald-300 border border-white/15 shadow flex items-center gap-1">
                <i data-lucide="images" class="w-3 h-3"></i> ${slideCount} รูป
              </span>
            ` : ''}
            ${item.youtubeUrl ? `
              <span class="px-2.5 py-1 rounded-md text-xs font-bold bg-rose-600/90 backdrop-blur text-white shadow flex items-center gap-1">
                <i data-lucide="play-circle" class="w-3 h-3"></i> YouTube
              </span>
            ` : item.video ? `
              <span class="px-2.5 py-1 rounded-md text-xs font-bold bg-purple-600/90 backdrop-blur text-white shadow flex items-center gap-1">
                <i data-lucide="play" class="w-3 h-3"></i> Video
              </span>
            ` : ''}
            <span class="px-2.5 py-1 rounded-md text-xs font-bold bg-[#2B2D31]/90 backdrop-blur text-slate-200 border border-white/15 shadow">
              ${item.categoryName}
            </span>
          </div>

          <!-- Hover Overlay -->
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#141517]/75 backdrop-blur-[2px]">
            <span class="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-extrabold text-xs shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <i data-lucide="maximize-2" class="w-4 h-4"></i> ดูรูปภาพ & รายละเอียด
            </span>
          </div>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between bg-[#1F2124]/70">
          <div>
            <h3 class="font-heading text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
              ${item.title}
            </h3>
            <p class="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
              ${item.description}
            </p>
          </div>

          <div class="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
            <div class="flex flex-wrap gap-1.5">
              ${item.software.map(sw => `
                <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-[#141517] text-slate-300 border border-white/10 font-mono">
                  ${sw}
                </span>
              `).join('')}
            </div>
            <span class="text-emerald-400 group-hover:text-emerald-300 transition-colors">
              <i data-lucide="chevron-right" class="w-4 h-4"></i>
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

/* ==========================================================================
   5. LIGHTBOX MODAL WITH MULTI-IMAGE SLIDER (กดเลื่อนเปลี่ยนรูปได้)
   ========================================================================== */
let activeLightboxItem = null;
let activeLightboxSlides = [];
let activeLightboxIndex = 0;

window.openLightbox = function(itemId) {
  const item = PORTFOLIO_DATA.gallery.find(i => i.id === itemId);
  if (!item) return;

  activeLightboxItem = item;

  // Build slides array
  if (item.slides && item.slides.length > 0) {
    activeLightboxSlides = item.slides;
  } else {
    // Fallback: build slides from image + extraImages + video
    const slides = [{
      type: 'image',
      title: item.title,
      src: item.image,
      description: item.description
    }];

    if (item.extraImages && item.extraImages.length > 0) {
      item.extraImages.forEach((extraSrc, idx) => {
        slides.push({
          type: 'image',
          title: `${item.title} (Angle ${idx + 2})`,
          src: extraSrc,
          description: item.description
        });
      });
    }

    if (item.video) {
      slides.push({
        type: 'video',
        title: `${item.title} (360° Video)`,
        src: item.video,
        description: item.description
      });
    }

    activeLightboxSlides = slides;
  }

  activeLightboxIndex = 0;
  setupAndShowModal();
};

window.openCurrentSlideLightbox = function(modelId) {
  const model = PORTFOLIO_DATA.flagshipModels.find(m => m.id === modelId);
  if (!model) return;

  activeLightboxItem = {
    title: model.name,
    categoryName: model.badge,
    software: model.software,
    description: model.description
  };

  activeLightboxSlides = model.slides.map(s => ({
    type: s.type,
    title: `${model.name} — ${s.label || s.badge}`,
    src: s.src,
    description: s.description
  }));

  activeLightboxIndex = flagshipCurrentSlide[modelId] || 0;
  setupAndShowModal();
};

function setupAndShowModal() {
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalDesc = document.getElementById('modal-desc');
  const modalSoftware = document.getElementById('modal-software');
  const prevBtn = document.getElementById('modal-prev-btn');
  const nextBtn = document.getElementById('modal-next-btn');
  const counterEl = document.getElementById('modal-slide-counter');
  const captionBar = document.getElementById('modal-slide-caption-bar');
  const thumbStrip = document.getElementById('modal-thumbnail-strip');

  if (!modal) return;

  modalTitle.textContent = activeLightboxItem.title;
  modalCategory.textContent = activeLightboxItem.categoryName || '';
  modalDesc.textContent = activeLightboxItem.description || '';

  let softwareHtml = (activeLightboxItem.software || []).map(sw => `
    <span class="px-2.5 py-1 rounded-md text-xs font-mono bg-[#141517] text-emerald-300 border border-white/10 font-bold shadow-sm">
      ${sw}
    </span>
  `).join('');

  if (activeLightboxItem.youtubeUrl) {
    softwareHtml += `
      <a 
        href="${activeLightboxItem.youtubeUrl}" 
        target="_blank" 
        class="px-2.5 py-1 rounded-md text-xs font-mono bg-rose-600 text-white font-bold shadow-sm hover:bg-rose-500 transition-colors flex items-center gap-1.5"
      >
        <i data-lucide="play-circle" class="w-3.5 h-3.5"></i> ชมคลิปเต็มบน YouTube ↗
      </a>
    `;
  }

  modalSoftware.innerHTML = softwareHtml;

  const isMultiSlide = activeLightboxSlides.length > 1;

  // Show or hide navigation controls
  if (prevBtn) prevBtn.classList.toggle('hidden', !isMultiSlide);
  if (nextBtn) nextBtn.classList.toggle('hidden', !isMultiSlide);
  if (counterEl) counterEl.classList.toggle('hidden', !isMultiSlide);
  if (captionBar) captionBar.classList.toggle('hidden', !isMultiSlide);

  // Render thumbnail strip
  if (thumbStrip) {
    if (isMultiSlide) {
      thumbStrip.classList.remove('hidden');
      thumbStrip.innerHTML = activeLightboxSlides.map((s, idx) => `
        <button 
          onclick="modalJumpToSlide(${idx})"
          id="modal-thumb-${idx}"
          class="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
            idx === activeLightboxIndex 
              ? 'border-emerald-400 ring-2 ring-emerald-400/50 opacity-100 scale-105' 
              : 'border-white/15 opacity-60 hover:opacity-100'
          }"
          title="${s.title || 'Slide ' + (idx + 1)}"
        >
          ${s.type === 'video' ? `
            <div class="w-full h-full bg-[#141517] flex items-center justify-center text-emerald-400">
              <i data-lucide="play" class="w-5 h-5"></i>
            </div>
          ` : s.type === 'youtube' ? `
            <div class="w-full h-full bg-[#141517] flex items-center justify-center text-rose-500">
              <i data-lucide="play-circle" class="w-6 h-6"></i>
            </div>
          ` : `
            <img src="${encodeURI(s.src)}" alt="thumbnail" class="w-full h-full object-cover" />
          `}
        </button>
      `).join('');
    } else {
      thumbStrip.classList.add('hidden');
      thumbStrip.innerHTML = '';
    }
  }

  renderCurrentModalSlide();

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  if (window.lucide) window.lucide.createIcons();
}

function renderCurrentModalSlide() {
  const modalContent = document.getElementById('modal-media-content');
  const counterEl = document.getElementById('modal-slide-counter');
  const captionEl = document.getElementById('modal-slide-caption');
  const slide = activeLightboxSlides[activeLightboxIndex];
  if (!slide || !modalContent) return;

  // Render Media
  if (slide.type === 'video') {
    modalContent.innerHTML = `
      <video 
        src="${encodeURI(slide.src)}" 
        controls 
        autoplay 
        loop 
        playsinline
        class="w-full h-auto max-h-[60vh] object-contain rounded-xl bg-black"
      ></video>
    `;
  } else if (slide.type === 'youtube') {
    modalContent.innerHTML = `
      <div class="w-full aspect-video max-h-[60vh] rounded-xl overflow-hidden shadow-2xl bg-black flex items-center justify-center">
        <iframe 
          src="${slide.src}" 
          title="${slide.title || 'YouTube Video'}"
          class="w-full h-full min-h-[300px] sm:min-h-[400px]"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    `;
  } else {
    modalContent.innerHTML = `
      <img 
        src="${encodeURI(slide.src)}" 
        alt="${slide.title || 'Portfolio Image'}" 
        class="w-full h-auto max-h-[60vh] object-contain rounded-xl fade-in"
      />
    `;
  }

  // Update Counter
  if (counterEl) {
    counterEl.textContent = `${activeLightboxIndex + 1} / ${activeLightboxSlides.length}`;
  }

  // Update Caption
  if (captionEl) {
    captionEl.textContent = slide.title ? `${slide.title} — ${slide.description || ''}` : (slide.description || '');
  }

  // Update Thumbnail Highlight
  activeLightboxSlides.forEach((_, idx) => {
    const thumb = document.getElementById(`modal-thumb-${idx}`);
    if (thumb) {
      if (idx === activeLightboxIndex) {
        thumb.className = 'relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer border-emerald-400 ring-2 ring-emerald-400/50 opacity-100 scale-105';
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        thumb.className = 'relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer border-white/15 opacity-60 hover:opacity-100';
      }
    }
  });

  if (window.lucide) window.lucide.createIcons();
}

window.modalNextSlide = function() {
  if (activeLightboxSlides.length <= 1) return;
  activeLightboxIndex = (activeLightboxIndex + 1) % activeLightboxSlides.length;
  renderCurrentModalSlide();
};

window.modalPrevSlide = function() {
  if (activeLightboxSlides.length <= 1) return;
  activeLightboxIndex = (activeLightboxIndex - 1 + activeLightboxSlides.length) % activeLightboxSlides.length;
  renderCurrentModalSlide();
};

window.modalJumpToSlide = function(idx) {
  if (idx >= 0 && idx < activeLightboxSlides.length) {
    activeLightboxIndex = idx;
    renderCurrentModalSlide();
  }
};

window.closeLightbox = function() {
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-media-content');
  if (modal) {
    if (modalContent) {
      const video = modalContent.querySelector('video');
      if (video) video.pause();
      modalContent.innerHTML = '';
    }
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
};

document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('project-modal');
  const isModalOpen = modal && !modal.classList.contains('hidden');

  if (e.key === 'Escape') {
    closeLightbox();
  } else if (isModalOpen && e.key === 'ArrowRight') {
    modalNextSlide();
  } else if (isModalOpen && e.key === 'ArrowLeft') {
    modalPrevSlide();
  }
});

/* ==========================================================================
   6. EXPERIENCE TIMELINE
   ========================================================================== */
function initExperienceTimeline() {
  const expContainer = document.getElementById('experience-timeline');
  if (expContainer) {
    expContainer.innerHTML = PORTFOLIO_DATA.experience.map((exp) => {
      const yearParts = exp.period.split('–');
      const startYear = yearParts[0].trim();
      const yrPrefix = startYear.slice(0, 2);
      const yrSuffix = startYear.slice(2);

      return `
        <div class="relative flex items-start gap-4 pb-8 last:pb-0 group">
          <!-- Timeline Vertical Line -->
          <div class="flex flex-col items-center shrink-0">
            <div class="ref-timeline-dot"></div>
            <div class="ref-timeline-line flex-1 mt-2 min-h-[50px] group-last:hidden"></div>
          </div>

          <!-- Timeline Year Badge & Content -->
          <div class="flex items-start gap-3 flex-1 pt-[-2px]">
            <div class="text-base font-extrabold font-heading text-white leading-none tracking-wider text-center shrink-0 pt-0.5">
              <div>${yrPrefix}</div>
              <div>${yrSuffix}</div>
            </div>

            <div class="flex-1">
              <h4 class="font-heading text-base font-bold text-white">${exp.role}</h4>
              <div class="text-xs font-semibold text-emerald-400 mb-2">${exp.company} <span class="text-slate-400 font-normal">(${exp.type})</span></div>
              <ul class="space-y-1">
                ${exp.bullets.map(b => `
                  <li class="text-xs text-slate-300 leading-relaxed flex items-start gap-1.5">
                    <span class="text-emerald-400 mt-0.5">▸</span>
                    <span>${b}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
}

/* ==========================================================================
   7. CONTACT ACTIONS (คัดลอกอีเมล & Toast)
   ========================================================================== */
window.copyEmail = function() {
  navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email).then(() => {
    showToast('คัดลอกอีเมล pondkerdang3@gmail.com เรียบร้อยแล้ว!', 'success');
  }).catch(() => {
    showToast('ไม่สามารถคัดลอกอีเมลได้อัตโนมัติ', 'error');
  });
};

function showToast(message, type = 'success') {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 px-6 py-3.5 rounded-2xl bg-[#2B2D31] text-white border border-emerald-500/40 text-sm font-bold shadow-2xl transition-all duration-300 transform translate-y-10 opacity-0 pointer-events-none flex items-center gap-3';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle' : 'alert-circle'}" class="w-5 h-5 ${type === 'success' ? 'text-emerald-400' : 'text-rose-500'}"></i>
    <span>${message}</span>
  `;

  if (window.lucide) window.lucide.createIcons();

  toast.classList.remove('translate-y-10', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0', 'pointer-events-none');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 3500);
}

/* ==========================================================================
   8. MOBILE MENU & SCROLL EFFECTS
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('mobile-drawer-close');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.toggle('hidden');
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.add('hidden');
    });
  }

  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (drawer) drawer.classList.add('hidden');
    });
  });
}

function initScrollEffects() {
  const navbar = document.getElementById('main-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('bg-[#1E2022]/90', 'backdrop-blur-md', 'shadow-xl', 'border-b', 'border-white/10');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('bg-[#1E2022]/90', 'backdrop-blur-md', 'shadow-xl', 'border-b', 'border-white/10');
      navbar.classList.add('bg-transparent');
    }
  });
}
