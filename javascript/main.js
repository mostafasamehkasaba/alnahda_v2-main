// ط§ظ„ظ„ط؛ط©
let currentLang = "en";
let translations = {};
let swipers = [];

try {
  const savedLang = localStorage.getItem("siteLang");
  if (savedLang) currentLang = savedLang;
} catch (e) {}

try {
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
} catch (e) {}

fetch("translations.json")
  .then((response) => response.json())
  .then((data) => {
    translations = data;
    setLanguage(currentLang);
  });

function toggleLanguage() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  setLanguage(currentLang);
}

function setLanguage(lang) {
  // Helper function: ظٹطھط£ظƒط¯ ط¥ظ† ط§ظ„ط¹ظ†طµط± ظ…ظˆط¬ظˆط¯ ظ‚ط¨ظ„ ظ…ط§ ظٹط؛ظٹط±ظ‡
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  const setHTML = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };

  // Navbar + Home
  setText("Alnahda", translations[lang].Alnahda);
  setText("Alnahdaa", translations[lang].Alnahdaa);
  setText("HOME", translations[lang].HOME);
  setText("ABOUT", translations[lang].ABOUT);
  setText("ABOUTS", translations[lang].ABOUTS);
  setText("SERVICES", translations[lang].SERVICES);
  setText("FINISHES", translations[lang].FINISHES);
  setText("EXPORTS", translations[lang].EXPORTS);
  setText("RAISED", translations[lang].RAISED);
  setText("WOODEN", translations[lang].WOODEN);
  setText("LABS", translations[lang].LABS);
  setText("GENREAL", translations[lang].GENREAL);
  setText("OTHER", translations[lang].OTHER);
  setText("Contact", translations[lang].Contact);
  setText("ContactUs", translations[lang].ContactUs);
  setText("WelcomeTo", translations[lang].WelcomeTo);
  setText("WelcomeDe", translations[lang].WelcomeDe);

  // About Section
  setText("AboutTitle", translations[lang].AboutTitle);
  setText("AboutDesc", translations[lang].AboutDesc);
  setText("AboutDetails", translations[lang].AboutDetails);
  setText("AboutContact", translations[lang].AboutContact);

  // Services Section
  setText("ServicesTitle", translations[lang].ServicesTitle);
  setText("ServiceFinishesTitle", translations[lang].ServiceFinishesTitle);
  setText("ServiceFinishesDesc", translations[lang].ServiceFinishesDesc);
  setText("ServiceFinishesLink", translations[lang].ServiceFinishesLink);
  setText("ServiceRaisedTitle", translations[lang].ServiceRaisedTitle);
  setText("ServiceRaisedDesc", translations[lang].ServiceRaisedDesc);
  setText("ServiceRaisedLink", translations[lang].ServiceRaisedLink);
  setText("ServiceWoodTitle", translations[lang].ServiceWoodTitle);
  setText("ServiceWoodDesc", translations[lang].ServiceWoodDesc);
  setText("ServiceWoodLink", translations[lang].ServiceWoodLink);
  setText("ServiceLabsTitle", translations[lang].ServiceLabsTitle);
  setText("ServiceLabsLink", translations[lang].ServiceLabsLink);
  setText("ServiceContractTitle", translations[lang].ServiceContractTitle);
  setText("ServiceContractLink", translations[lang].ServiceContractLink);
  setText("ServiceMarbleTitle", translations[lang].ServiceMarbleTitle);
  setText("ServiceMarbleLink", translations[lang].ServiceMarbleLink);

  // Feature Section
  setText("FeatureTitle", translations[lang].FeatureTitle);
  setText("FeatureDesc", translations[lang].FeatureDesc);
  setText("FeatureCreative", translations[lang].FeatureCreative);
  setText("FeatureDesigners", translations[lang].FeatureDesigners);
  setText("FeatureFree", translations[lang].FeatureFree);
  setText("FeatureConsultation", translations[lang].FeatureConsultation);
  setText("FeatureWork", translations[lang].FeatureWork);
  setText("FeatureOnTime", translations[lang].FeatureOnTime);
  setText("FeatureCustomer", translations[lang].FeatureCustomer);
  setText("FeatureSupport", translations[lang].FeatureSupport);

  // Projects Section
  setText("ProjectsTitle", translations[lang].ProjectsTitle);
  setText("Project1Category", translations[lang].Project1Category);
  setText("Project1Title", translations[lang].Project1Title);
  setText("Project2Category", translations[lang].Project2Category);
  setText("Project2Title", translations[lang].Project2Title);
  setText("Project3Category", translations[lang].Project3Category);
  setText("Project3Title", translations[lang].Project3Title);
  setText("Project1More", translations[lang].ProjectMore);
  setText("Project2More", translations[lang].ProjectMore);
  setText("Project3More", translations[lang].ProjectMore);

  // Team Section
  setText("TeamTitle", translations[lang].TeamTitle);
  setText("TeamMember1Name", translations[lang].TeamMember1Name);
  setText("TeamMember2Name", translations[lang].TeamMember2Name);
  setText("TeamMember3Name", translations[lang].TeamMember3Name);

  // Footer Section
  setText("FooterAddressTitle", translations[lang].FooterAddressTitle);
  setHTML(
    "FooterAddress",
    `<i class="fa fa-map-marker-alt me-3"></i> ${translations[lang].FooterAddress}`,
  );
  setHTML(
    "FooterPhone",
    `<i class="fa fa-phone-alt me-3"></i> ${translations[lang].FooterPhone}`,
  );
  setHTML(
    "FooterEmail",
    `<i class="fa fa-envelope me-3"></i> ${translations[lang].FooterEmail}`,
  );
  setText("FooterServicesTitle", translations[lang].FooterServicesTitle);
  setText("FooterFinishes", translations[lang].FooterFinishes);
  setText("FooterRaised", translations[lang].FooterRaised);
  setText("FooterWooden", translations[lang].FooterWooden);
  setText("FooterLabs", translations[lang].FooterLabs);
  setText("FooterContract", translations[lang].FooterContract);
  setText("FooterLinksTitle", translations[lang].FooterLinksTitle);
  setText("FooterHome", translations[lang].FooterHome);
  setText("FooterAbout", translations[lang].FooterAbout);
  setText("FooterContact", translations[lang].FooterContact);
  setText("FooterOther", translations[lang].FooterOther);
  setText("FooterCopy", translations[lang].FooterCopy);

  setText("PageAboutDE", translations[lang].PageAboutDE);
  setText("PageAboutH", translations[lang].PageAboutH);
  setText("AboutHeroTag", translations[lang].AboutHeroTag);
  setText("AboutStatYears", translations[lang].AboutStatYears);
  setText("AboutStatProjects", translations[lang].AboutStatProjects);
  setText("AboutStatClients", translations[lang].AboutStatClients);
  setText("AboutHeroBadge", translations[lang].AboutHeroBadge);
  setText("AboutStoryCard1Title", translations[lang].AboutStoryCard1Title);
  setText("AboutStoryCard1Desc", translations[lang].AboutStoryCard1Desc);
  setText("AboutStoryCard2Title", translations[lang].AboutStoryCard2Title);
  setText("AboutStoryCard2Desc", translations[lang].AboutStoryCard2Desc);
  setText("AboutValuesNote", translations[lang].AboutValuesNote);

  setText("ContactHeroTitle", translations[lang].ContactHeroTitle);
  setText("ContactSectionTitle", translations[lang].ContactSectionTitle);
  setText("ContactAddress1", translations[lang].ContactAddress1);
  setText("ContactAddress2", translations[lang].ContactAddress2);
  setText("ContactAddress3", translations[lang].ContactAddress3);
  setText("ContactPhone1", translations[lang].ContactPhone1);
  setText("ContactPhone2", translations[lang].ContactPhone2);

  setText("Finishes", translations[lang].Finishes);
  setText("FinishesTitle", translations[lang].FinishesTitle);
  setText("PageFinishesTitle", translations[lang].PageFinishesTitle);
  setText("PageFinishesDesc", translations[lang].PageFinishesDesc);
  setText("FinishesHeroTag", translations[lang].FinishesHeroTag);
  setText("FinishesHeroGalleryBtn", translations[lang].FinishesHeroGalleryBtn);
  setText("FinishesHeroContactBtn", translations[lang].FinishesHeroContactBtn);
  setText("FinishesMetricYears", translations[lang].FinishesMetricYears);
  setText("FinishesMetricSpaces", translations[lang].FinishesMetricSpaces);
  setText("FinishesMetricSupport", translations[lang].FinishesMetricSupport);
  setText("FinishesHeroCardTitle", translations[lang].FinishesHeroCardTitle);
  setText("FinishesHeroCardDesc", translations[lang].FinishesHeroCardDesc);
  setText("FinishesPillRetail", translations[lang].FinishesPillRetail);
  setText("FinishesPillHealthcare", translations[lang].FinishesPillHealthcare);
  setText("FinishesPillResidential", translations[lang].FinishesPillResidential);
  setText("FinishesIntroOverlay", translations[lang].FinishesIntroOverlay);
  setText("FinishesHighlightsTitle", translations[lang].FinishesHighlightsTitle);
  setText("FinishesHighlightsDesc", translations[lang].FinishesHighlightsDesc);
  setText("FinishesHighlight1Title", translations[lang].FinishesHighlight1Title);
  setText("FinishesHighlight1Desc", translations[lang].FinishesHighlight1Desc);
  setText("FinishesHighlight2Title", translations[lang].FinishesHighlight2Title);
  setText("FinishesHighlight2Desc", translations[lang].FinishesHighlight2Desc);
  setText("FinishesHighlight3Title", translations[lang].FinishesHighlight3Title);
  setText("FinishesHighlight3Desc", translations[lang].FinishesHighlight3Desc);
  setText("FinishesCarouselTitle", translations[lang].FinishesCarouselTitle);
  setText("FinishesCarouselDesc", translations[lang].FinishesCarouselDesc);
  setText("FinishesGalleryTitle", translations[lang].FinishesGalleryTitle);
  setText("FinishesGalleryDesc", translations[lang].FinishesGalleryDesc);

  setText("Floors", translations[lang].Floors);
  setText("RaisedFloors", translations[lang].RaisedFloors);
  setText("FloorsTitle", translations[lang].FloorsTitle);
  setText("RaisedHeroTag", translations[lang].RaisedHeroTag);
  setText("RaisedHeroGalleryBtn", translations[lang].RaisedHeroGalleryBtn);
  setText("RaisedHeroQuoteBtn", translations[lang].RaisedHeroQuoteBtn);
  setText("RaisedMetricYears", translations[lang].RaisedMetricYears);
  setText("RaisedMetricSites", translations[lang].RaisedMetricSites);
  setText("RaisedMetricSupport", translations[lang].RaisedMetricSupport);
  setText("RaisedHeroCardTitle", translations[lang].RaisedHeroCardTitle);
  setText("RaisedHeroCardDesc", translations[lang].RaisedHeroCardDesc);
  setText("RaisedSectionDesc", translations[lang].RaisedSectionDesc);
  setText("RaisedFeatureAirflow", translations[lang].RaisedFeatureAirflow);
  setText("RaisedFeatureLoad", translations[lang].RaisedFeatureLoad);
  setText("RaisedFeatureAccess", translations[lang].RaisedFeatureAccess);
  setText("RaisedMediaBadge", translations[lang].RaisedMediaBadge);
  setText("RaisedGalleryTitle", translations[lang].RaisedGalleryTitle);
  setText("RaisedGalleryDesc", translations[lang].RaisedGalleryDesc);

  setText("WoodenWork", translations[lang].WoodenWork);
  setText("WoodenWorkTitle", translations[lang].WoodenWorkTitle);
  setText("Woodendoors", translations[lang].Woodendoors);
  setText("Woodenbindings", translations[lang].Woodenbindings);
  setText("WoodHeroTag", translations[lang].WoodHeroTag);
  setText("WoodHeroDoorsBtn", translations[lang].WoodHeroDoorsBtn);
  setText("WoodHeroBindingsBtn", translations[lang].WoodHeroBindingsBtn);
  setText("WoodMetricYears", translations[lang].WoodMetricYears);
  setText("WoodMetricDoors", translations[lang].WoodMetricDoors);
  setText("WoodMetricSupport", translations[lang].WoodMetricSupport);
  setText("WoodHeroCardTitle", translations[lang].WoodHeroCardTitle);
  setText("WoodHeroCardDesc", translations[lang].WoodHeroCardDesc);
  setText("WoodSectionDesc", translations[lang].WoodSectionDesc);
  setText("WoodFeatureSolid", translations[lang].WoodFeatureSolid);
  setText("WoodFeatureStains", translations[lang].WoodFeatureStains);
  setText("WoodFeatureHardware", translations[lang].WoodFeatureHardware);
  setText("WoodMediaBadge", translations[lang].WoodMediaBadge);
  setText("WoodBindingsDesc", translations[lang].WoodBindingsDesc);
  setText("WoodPillPanels", translations[lang].WoodPillPanels);
  setText("WoodPillCabinetry", translations[lang].WoodPillCabinetry);
  setText("WoodPillJoinery", translations[lang].WoodPillJoinery);

  setText("Lab", translations[lang].Lab);
  setText("Lab", translations[lang].Lab);
  setText("Labs", translations[lang].Labs);
  setText("LabTitle", translations[lang].LabTitle);
  setText("LabsHeroTag", translations[lang].LabsHeroTag);
  setText("LabsHeroGalleryBtn", translations[lang].LabsHeroGalleryBtn);
  setText("LabsHeroContactBtn", translations[lang].LabsHeroContactBtn);
  setText("LabsMetricProjects", translations[lang].LabsMetricProjects);
  setText("LabsMetricYears", translations[lang].LabsMetricYears);
  setText("LabsMetricClients", translations[lang].LabsMetricClients);
  setText("LabsHeroCardTitle", translations[lang].LabsHeroCardTitle);
  setText("LabsHeroCardDesc", translations[lang].LabsHeroCardDesc);
  setText("LabsSectionDesc", translations[lang].LabsSectionDesc);
  setText("LabsFeatureSurface", translations[lang].LabsFeatureSurface);
  setText("LabsFeatureVentilation", translations[lang].LabsFeatureVentilation);
  setText("LabsFeatureSafety", translations[lang].LabsFeatureSafety);
  setText("LabsMediaBadge", translations[lang].LabsMediaBadge);
  setText("LabsHighlightsTitle", translations[lang].LabsHighlightsTitle);
  setText("LabsHighlightsDesc", translations[lang].LabsHighlightsDesc);
  setText("LabsGalleryTitle", translations[lang].LabsGalleryTitle);
  setText("LabsGalleryDesc", translations[lang].LabsGalleryDesc);

  setText("General", translations[lang].General);
  setText("GeneralTitle", translations[lang].GeneralTitle);
  setText("Faculty", translations[lang].Faculty);
  setText("Outpatient", translations[lang].Outpatient);
  setText("location", translations[lang].location);
  setText("Aqwaz", translations[lang].Aqwaz);
  setText("Shawashna", translations[lang].Shawashna);
  setText("Kom", translations[lang].Kom);
  setText("Qababat", translations[lang].Qababat);
  setText("Qababat", translations[lang].Qababat);
  setText("Matatros", translations[lang].Matatros);
  setText("ContractHeroTag", translations[lang].ContractHeroTag);
  setText("ContractHeroProjectsBtn", translations[lang].ContractHeroProjectsBtn);
  setText("ContractHeroQuoteBtn", translations[lang].ContractHeroQuoteBtn);
  setText("ContractMetricProjects", translations[lang].ContractMetricProjects);
  setText("ContractMetricYears", translations[lang].ContractMetricYears);
  setText("ContractMetricClients", translations[lang].ContractMetricClients);
  setText("ContractHeroCardTitle", translations[lang].ContractHeroCardTitle);
  setText("ContractHeroCardDesc", translations[lang].ContractHeroCardDesc);
  setText("ContractSectionTitle", translations[lang].ContractSectionTitle);
  setText("ContractSectionDesc", translations[lang].ContractSectionDesc);
  setText(
    "ContractProjectFacultyLabel",
    translations[lang].ContractProjectFacultyLabel,
  );
  setText(
    "ContractProjectOutpatientLabel",
    translations[lang].ContractProjectOutpatientLabel,
  );
  setText(
    "ContractProjectLocationLabel",
    translations[lang].ContractProjectLocationLabel,
  );
  setText("ContractProjectAqwazLabel", translations[lang].ContractProjectAqwazLabel);
  setText(
    "ContractProjectShawashnaLabel",
    translations[lang].ContractProjectShawashnaLabel,
  );
  setText("ContractProjectKomLabel", translations[lang].ContractProjectKomLabel);
  setText(
    "ContractProjectQababatLabel",
    translations[lang].ContractProjectQababatLabel,
  );
  setText(
    "ContractProjectMatatrosLabel",
    translations[lang].ContractProjectMatatrosLabel,
  );

  setText("ServicesT", translations[lang].ServicesT);
  setText("Marble", translations[lang].Marble);
  setText("MatatrosTitle", translations[lang].MatatrosTitle);
  setText("Lumi", translations[lang].Lumi);
  setText("LumiTitle", translations[lang].LumiTitle);
  setText("off", translations[lang].off);
  setText("on", translations[lang].on);
  setText("Other", translations[lang].Other);
  setText("OtherHeroTag", translations[lang].OtherHeroTag);
  setText("OtherHeroSubtitle", translations[lang].OtherHeroSubtitle);
  setText("OtherHeroMarbleBtn", translations[lang].OtherHeroMarbleBtn);
  setText("OtherHeroGalleryBtn", translations[lang].OtherHeroGalleryBtn);
  setText("OtherHeroCardTitle", translations[lang].OtherHeroCardTitle);
  setText("OtherHeroCardDesc", translations[lang].OtherHeroCardDesc);
  setText("OtherMarbleBadge", translations[lang].OtherMarbleBadge);
  setText("OtherPillPremium", translations[lang].OtherPillPremium);
  setText("OtherPillEdges", translations[lang].OtherPillEdges);
  setText("OtherPillLuxury", translations[lang].OtherPillLuxury);
  setText("OtherGalleryDesc", translations[lang].OtherGalleryDesc);

  // ط²ط± ط§ظ„ظ„ط؛ط©
  setText("langBtn", translations[lang].button);

  // ط¶ط¨ط· ط§طھط¬ط§ظ‡ ط§ظ„طµظپط­ط©
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  try {
    localStorage.setItem("siteLang", lang);
  } catch (e) {}

  initSwipers();
}

function initSwipers() {
  if (typeof Swiper === "undefined") return;

  if (swipers.length) {
    swipers.forEach((instance) => instance.destroy(true, true));
    swipers = [];
  }

  const swiperEls = document.querySelectorAll(".mySwiper");
  if (!swiperEls.length) return;

  swiperEls.forEach((el) => {
    el.querySelectorAll("img.lazy-img[data-src]").forEach((img) => {
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
      img.classList.add("loaded");
    });

    el.dir = document.documentElement.dir || "ltr";
    const isContract = el.classList.contains("contract-swiper");
    const baseConfig = {
      loop: true,
      spaceBetween: isContract ? 14 : 30,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: el.querySelector(".swiper-pagination"),
        clickable: true,
      },
      navigation: {
        nextEl: el.querySelector(".swiper-button-next"),
        prevEl: el.querySelector(".swiper-button-prev"),
      },
      rtl: document.documentElement.dir === "rtl",
      observer: true,
      observeParents: true,
    };

    const instance = new Swiper(el, {
      ...baseConfig,
      breakpoints: isContract
        ? {
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }
        : {
            0: { slidesPerView: 1 },
            760: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          },
    });

    swipers.push(instance);
  });
}

// ط²ط±ط§ط± ط§ظ„طھط¨ط¯ظٹظ„
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("langBtn");
  if (btn) btn.addEventListener("click", toggleLanguage);

  const revealSelectors = [
    ".section-title",
    ".service-item",
    ".feature-box",
    ".portfolio-card",
    ".team-item",
    ".gallery-item",
    ".about-text",
    ".about-img",
    ".home-about-copy",
    ".home-about-figure",
    ".why-pro-card",
    ".why-pro-image",
    ".feature-img",
    ".content",
    ".contact-text",
  ];

  const revealTargets = document.querySelectorAll(revealSelectors.join(","));
  revealTargets.forEach((el, index) => {
    el.classList.add("reveal");
    if (index % 3 === 1) el.classList.add("delay-1");
    if (index % 3 === 2) el.classList.add("delay-2");
  });

  if (revealTargets.length) {
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            } else {
              entry.target.classList.remove("is-visible");
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
      );

      revealTargets.forEach((el) => observer.observe(el));
    } else {
      revealTargets.forEach((el) => el.classList.add("is-visible"));
    }
  }

  const heroContent = document.querySelector(".content");
  if (heroContent && "IntersectionObserver" in window) {
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heroContent.classList.add("hero-animate");
          } else {
            heroContent.classList.remove("hero-animate");
          }
        });
      },
      { threshold: 0.4 },
    );
    heroObserver.observe(heroContent);
  } else if (heroContent) {
    heroContent.classList.add("hero-animate");
  }
});

// navbar effects

const navEl = document.getElementById("navEl");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    navEl.classList.add("navbar-scrolled");
  } else if (window.scrollY < 100) {
    navEl.classList.remove("navbar-scrolled");
  }
});

const button = document.getElementById("toggler");
button.addEventListener("click", () => {
  if (button.getAttribute("aria-expanded") === "true") {
    navEl.classList.add("navbar-scrolled");
  } else if (window.scrollY < 80) {
    navEl.classList.remove("navbar-scrolled");
  }
});

// gotopbtn

const gotopbtn = document.getElementById("gotopbtn");
let showAfter = 400;

const updateShowAfter = () => {
  const hero = document.querySelector(".video-container");
  if (hero) {
    showAfter = Math.max(200, hero.offsetHeight - 50);
  }
};

if (gotopbtn) {
  updateShowAfter();
  gotopbtn.style.display = "none";

  window.addEventListener("load", updateShowAfter);
  window.addEventListener("resize", updateShowAfter);
  window.addEventListener("scroll", () => {
    if (window.scrollY > showAfter) {
      gotopbtn.style.display = "block";
    } else {
      gotopbtn.style.display = "none";
    }
  });
}

// img-gallery (modal + carousel)
let gallerySwiper = null;

const buildGallerySlides = (images) =>
  images
    .map((img) => {
      const src = img.getAttribute("data-src") || img.getAttribute("src") || "";
      const alt = img.getAttribute("alt") || "gallery";
      return `<div class="swiper-slide"><img src="${src}" alt="${alt}"></div>`;
    })
    .join("");

document.addEventListener("click", function (e) {
  const target = e.target;
  if (!target.classList.contains("gallery-item")) return;

  const modalEl = document.getElementById("gallery-modal");
  if (!modalEl) return;

  const galleryImages = Array.from(document.querySelectorAll(".gallery-item"));
  const startIndex = Math.max(0, galleryImages.indexOf(target));

  const swiperEl = modalEl.querySelector(".gallery-modal-swiper");
  const swiperWrapper = swiperEl?.querySelector(".swiper-wrapper");

  if (swiperWrapper) {
    swiperWrapper.innerHTML = buildGallerySlides(galleryImages);
  } else {
    const fallbackImg = modalEl.querySelector(".modal-img");
    if (fallbackImg) {
      fallbackImg.src =
        target.getAttribute("data-src") || target.getAttribute("src") || "";
    }
  }

  const myModal = new bootstrap.Modal(modalEl);
  myModal.show();

  if (swiperEl && typeof Swiper !== "undefined") {
    gallerySwiper = new Swiper(swiperEl, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      initialSlide: startIndex,
      pagination: {
        el: swiperEl.querySelector(".swiper-pagination"),
        clickable: true,
      },
      navigation: {
        nextEl: swiperEl.querySelector(".swiper-button-next"),
        prevEl: swiperEl.querySelector(".swiper-button-prev"),
      },
      rtl: document.documentElement.dir === "rtl",
      observer: true,
      observeParents: true,
    });
  }
});

document.addEventListener("hidden.bs.modal", (e) => {
  if (e.target?.id !== "gallery-modal") return;
  if (gallerySwiper) {
    gallerySwiper.destroy(true, true);
    gallerySwiper = null;
  }
  const wrapper = e.target.querySelector(".gallery-modal-swiper .swiper-wrapper");
  if (wrapper) wrapper.innerHTML = "";
});
document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // 1) Swiper init (ط¨ط¹ط¯ DOM)
  // =========================
  initSwipers();

  // =========================
  // 2) Lazy images
  // =========================
  const lazyImages = document.querySelectorAll("img.lazy-img[data-src]");

  if (!lazyImages.length) return;

  const loadImg = (img) => {
    if (!img.dataset.src) {
      img.classList.add("loaded");
      return;
    }
    img.src = img.dataset.src;
    img.removeAttribute("data-src");
    img.classList.add("loaded");

    // ظ…ظ‡ظ… ط¬ط¯ظ‹ط§ ظ„ظ„ط³ظ„ط§ظٹط¯ط± ط¨ط¹ط¯ طھط­ظ…ظٹظ„ ط§ظ„طµظˆط±ط©
    img.addEventListener(
      "load",
      () => {
        if (swipers.length) {
          swipers.forEach((instance) => instance.update());
        }
      },
      { once: true }
    );
  };

  const markLoaded = (img) => {
    img.classList.add("loaded");
  };

  lazyImages.forEach((img) => {
    if (img.complete && img.naturalWidth > 0) {
      markLoaded(img);
    } else {
      img.addEventListener("load", () => markLoaded(img), { once: true });
    }
  });

  // fallback ظ„ظˆ ط§ظ„ظ…طھطµظپط­ ظ…ط´ ط¨ظٹط¯ط¹ظ… IntersectionObserver
  if (!("IntersectionObserver" in window)) {
    lazyImages.forEach(loadImg);
    return;
  }

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadImg(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "200px 0px",
      threshold: 0.01,
    }
  );

  lazyImages.forEach((img) => imageObserver.observe(img));

  const forceLoadRemaining = () => {
    document
      .querySelectorAll("img.lazy-img[data-src]")
      .forEach((img) => loadImg(img));
  };

  window.addEventListener(
    "load",
    () => {
      setTimeout(forceLoadRemaining, 1200);
    },
    { once: true }
  );
});


// Auto-play videos when they enter the viewport
document.addEventListener("DOMContentLoaded", () => {
  const viewVideos = document.querySelectorAll("video[data-autoplay='in-view']");
  if (!viewVideos.length) return;

  if ("IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const vid = entry.target;
          if (entry.isIntersecting) {
            const playPromise = vid.play();
            if (playPromise && typeof playPromise.catch === "function") {
              playPromise.catch(() => {});
            }
          } else {
            vid.pause();
          }
        });
      },
      { threshold: 0.35 }
    );

    viewVideos.forEach((vid) => videoObserver.observe(vid));
  } else {
    viewVideos.forEach((vid) => vid.play());
  }
});
