const container = document.getElementById("container");
const cssArr = [];
for (let i = 0; i < container.children.length; i++) {
  const child = {};
  const el = container.children[i].children[1].children[0];
  child.name = el.getAttribute("title");
  child.url = el.getAttribute("href");
  cssArr.push(child);
}
const strCssArr = JSON.stringify(cssArr, null, "  ");
console.log(strCssArr);

[
  {
    name: "Latest draft of Web Share API formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-web-share-20200606/",
  },
  {
    name:
      "Latest draft of CSS Inline Layout Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-css-inline-3-20200604/",
  },
  {
    name: "Latest draft of WebDriver formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-webdriver2-20200604/",
  },
  {
    name:
      "Latest draft of Challenges with Accessibility Guidelines Conformance and Testing, and Approaches for Mitigating Them formally approved by the group",
    url:
      "https://www.w3.org/TR/2020/WD-accessibility-conformance-challenges-20200604/",
  },
  {
    name:
      "Latest draft of CSS Overflow Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-css-overflow-3-20200603/",
  },
  {
    name:
      "Latest draft of Clipboard API and events formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-clipboard-apis-20200603/",
  },
  {
    name:
      "Latest draft of Media Queries Level 5 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-mediaqueries-5-20200603/",
  },
  {
    name:
      "Latest draft of CSS Containment Module Level 2 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-css-contain-2-20200603/",
  },
  {
    name: "Latest draft of Web Notifications formally approved by the group",
    url: "https://www.w3.org/TR/2020/SPSD-notifications-20200602/",
  },
  {
    name: "Latest draft of Encoding formally approved by the group",
    url: "https://www.w3.org/TR/2020/NOTE-encoding-20200602/",
  },
  {
    name:
      "Latest draft of Cross-Origin Resource Sharing formally approved by the group",
    url: "https://www.w3.org/TR/2020/SPSD-cors-20200602/",
  },
  {
    name: "Latest draft of Progress Events formally approved by the group",
    url: "https://www.w3.org/TR/2020/SPSD-progress-events-20200602/",
  },
  {
    name:
      "Latest draft of HTML Accessibility API Mappings 1.0 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-html-aam-1.0-20200601/",
  },
  {
    name:
      "Latest draft of Requirements for Chinese Text Layout中文排版需求 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-clreq-20200601/",
  },
  {
    name:
      "Latest draft of Internationalization Best Practices for Spec Developers formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-international-specs-20200529/",
  },
  {
    name:
      "Latest draft of Indic Layout Requirements formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-ilreq-20200529/",
  },
  {
    name:
      "Latest draft of Requirements for Hangul Text Layout and Typography : 한국어 텍스트 레이아웃 및 타이포그래피를 위한 요구사항 formally approved by the group",
    url: "https://www.w3.org/TR/2020/NOTE-klreq-20200527/",
  },
  {
    name:
      "Latest draft of Ethiopic Layout Requirements formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-elreq-20200526/",
  },
  {
    name:
      "Latest draft of CSS Box Sizing Module Level 4 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-css-sizing-4-20200526/",
  },
  {
    name: "Latest draft of Web App Manifest formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-appmanifest-20200525/",
  },
  {
    name: "Latest draft of ARIA in HTML formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-html-aria-20200520/",
  },
  {
    name: "Latest draft of Image Resource formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-image-resource-20200520/",
  },
  {
    name:
      "Latest draft of Text Layout Requirements for the Arabic Script formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-alreq-20200520/",
  },
  {
    name:
      "Latest draft of Language enablement index formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-typography-20200520/",
  },
  {
    name:
      "Latest draft of CSS Positioned Layout Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-css-position-3-20200519/",
  },
  {
    name:
      "Latest draft of CSS Display Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2020/CR-css-display-3-20200519/",
  },
  {
    name: "Latest draft of DOM formally approved by the group",
    url: "https://www.w3.org/TR/2020/PR-dom-20200514/",
  },
  {
    name:
      "Latest draft of Self-Review Questionnaire: Security and Privacy formally approved by the group",
    url:
      "https://www.w3.org/TR/2020/NOTE-security-privacy-questionnaire-20200508/",
  },
  {
    name:
      "Latest draft of JSON-LD 1.1 Processing Algorithms and API formally approved by the group",
    url: "https://www.w3.org/TR/2020/PR-json-ld11-api-20200507/",
  },
  {
    name: "Latest draft of JSON-LD 1.1 Framing formally approved by the group",
    url: "https://www.w3.org/TR/2020/PR-json-ld11-framing-20200507/",
  },
  {
    name: "Latest draft of Streaming JSON-LD formally approved by the group",
    url: "https://www.w3.org/TR/2020/NOTE-json-ld11-streaming-20200507/",
  },
  {
    name: "Latest draft of JSON-LD 1.1 formally approved by the group",
    url: "https://www.w3.org/TR/2020/PR-json-ld11-20200507/",
  },
  {
    name:
      "Latest draft of CSS Text Decoration Module Level 4 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-css-text-decor-4-20200506/",
  },
  {
    name: "Latest draft of Server Timing formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-server-timing-20200430/",
  },
  {
    name:
      "Latest draft of CSS Ruby Layout Module Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-css-ruby-1-20200429/",
  },
  {
    name:
      "Latest draft of CSS Text Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-css-text-3-20200429/",
  },
  {
    name:
      "Latest draft of Use Cases and Requirements for Decentralized Identifiers formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-did-use-cases-20200425/",
  },
  {
    name: "Latest draft of User Timing Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-user-timing-3-20200421/",
  },
  {
    name:
      "Latest draft of CSS Box Model Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-css-box-3-20200421/",
  },
  {
    name:
      "Latest draft of Decentralized Identifiers (DIDs) v1.0 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-did-core-20200421/",
  },
  {
    name:
      "Latest draft of CSS Box Model Module Level 4 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-css-box-4-20200421/",
  },
  {
    name:
      "Latest draft of CSS Box Alignment Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-css-align-3-20200421/",
  },
  {
    name:
      "Latest draft of The Screen Orientation API formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-screen-orientation-20200417/",
  },
  {
    name:
      "Latest draft of Web of Things (WoT) Thing Description formally approved by the group",
    url: "https://www.w3.org/TR/2020/REC-wot-thing-description-20200409/",
  },
  {
    name:
      "Latest draft of Web of Things (WoT) Architecture formally approved by the group",
    url: "https://www.w3.org/TR/2020/REC-wot-architecture-20200409/",
  },
  {
    name:
      "Latest draft of Scalable Video Coding (SVC) Extension for WebRTC formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-webrtc-svc-20200408/",
  },
  {
    name:
      "Latest draft of CSS Color Adjustment Module Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-css-color-adjust-1-20200402/",
  },
  {
    name:
      "Latest draft of Making content usable for people with cognitive and learning disabilities formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-coga-usable-20200327/",
  },
  {
    name: "Latest draft of Time Ontology in OWL formally approved by the group",
    url: "https://www.w3.org/TR/2020/CR-owl-time-20200326/",
  },
  {
    name:
      "Latest draft of TTML Profiles for Internet Media Subtitles and Captions 1.2 formally approved by the group",
    url: "https://www.w3.org/TR/2020/CR-ttml-imsc1.2-20200324/",
  },
  {
    name:
      "Latest draft of Lightweight Packaging Format (LPF) formally approved by the group",
    url: "https://www.w3.org/TR/2020/NOTE-lpf-20200319/",
  },
  {
    name:
      "Latest draft of RTC Accessibility User Requirements formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-raur-20200319/",
  },
  {
    name: "Latest draft of Audiobooks formally approved by the group",
    url: "https://www.w3.org/TR/2020/CR-audiobooks-20200317/",
  },
  {
    name:
      "Latest draft of Pronunciation Gap Analysis formally approved by the group",
    url: "https://www.w3.org/TR/2020/NOTE-pronunciation-gap-analysis-20200317/",
  },
  {
    name: "Latest draft of Publication Manifest formally approved by the group",
    url: "https://www.w3.org/TR/2020/CR-pub-manifest-20200317/",
  },
  {
    name:
      "Latest draft of Pronunciation Use Cases formally approved by the group",
    url: "https://www.w3.org/TR/2020/NOTE-pronunciation-use-cases-20200317/",
  },
  {
    name: "Latest draft of W3C DOM 4.1 formally approved by the group",
    url: "https://www.w3.org/TR/2020/NOTE-dom41-20200317/",
  },
  {
    name: "Latest draft of CSS Speech Module formally approved by the group",
    url: "https://www.w3.org/TR/2020/CR-css-speech-1-20200310/",
  },
  {
    name:
      "Latest draft of Explainer: Improving Spoken Presentation on the Web formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-pronunciation-explainer-20200310/",
  },
  {
    name:
      "Latest draft of Pronunciation Gap Analysis and Use Cases formally approved by the group",
    url:
      "https://www.w3.org/TR/2020/WD-pronunciation-gap-analysis-and-use-cases-20200310/",
  },
  {
    name:
      "Latest draft of CSS Color Module Level 5 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-css-color-5-20200303/",
  },
  {
    name:
      "Latest draft of CSS Conditional Rules Module Level 4 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-css-conditional-4-20200303/",
  },
  {
    name:
      "Latest draft of CSS Transforms Module Level 2 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-css-transforms-2-20200303/",
  },
  {
    name:
      "Latest draft of Web Content Accessibility Guidelines (WCAG) 2.2 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-WCAG22-20200227/",
  },
  {
    name: "Latest draft of Selection API formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-selection-api-20200226/",
  },
  {
    name: "Latest draft of Gamepad formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-gamepad-20200225/",
  },
  {
    name:
      "Latest draft of Resource Timing Level 2 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-resource-timing-2-20200218/",
  },
  {
    name:
      "Latest draft of MediaStreamTrack Content Hints formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-mst-content-hint-20200214/",
  },
  {
    name:
      "Latest draft of XR Accessibility User Requirements formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-xaur-20200213/",
  },
  {
    name:
      "Latest draft of Payment Method: Basic Card formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-payment-method-basic-card-20200213/",
  },
  {
    name: "Latest draft of Resize Observer formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-resize-observer-1-20200211/",
  },
  {
    name:
      "Latest draft of CSS Scroll Anchoring Module Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-css-scroll-anchoring-1-20200211/",
  },
  {
    name:
      "Latest draft of Trace Context - Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2020/REC-trace-context-1-20200206/",
  },
  {
    name:
      "Latest draft of Data Catalog Vocabulary (DCAT) - Version 2 formally approved by the group",
    url: "https://www.w3.org/TR/2020/REC-vocab-dcat-2-20200204/",
  },
  {
    name: "Latest draft of Push API formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-push-api-20200204/",
  },
  {
    name:
      "Latest draft of Data Catalog Vocabulary (DCAT) formally approved by the group",
    url: "https://www.w3.org/TR/2020/SPSD-vocab-dcat-20200204/",
  },
  {
    name: "Latest draft of Media Capabilities formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-media-capabilities-20200130/",
  },
  {
    name: "Latest draft of Picture-in-Picture formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-picture-in-picture-20200130/",
  },
  {
    name:
      "Latest draft of Media Session Standard formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-mediasession-20200130/",
  },
  {
    name:
      "Latest draft of Web of Things (WoT) Binding Templates formally approved by the group",
    url: "https://www.w3.org/TR/2020/NOTE-wot-binding-templates-20200130/",
  },
  {
    name:
      "Latest draft of Requirements for Personalization Semantics formally approved by the group",
    url:
      "https://www.w3.org/TR/2020/WD-personalization-semantics-requirements-1.0-20200130/",
  },
  {
    name:
      "Latest draft of Timed Text Markup Language 2 (TTML2) (2nd Edition) formally approved by the group",
    url: "https://www.w3.org/TR/2020/CR-ttml2-20200128/",
  },
  {
    name:
      "Latest draft of Personalization Semantics Explainer 1.0 formally approved by the group",
    url:
      "https://www.w3.org/TR/2020/WD-personalization-semantics-1.0-20200127/",
  },
  {
    name:
      "Latest draft of Personalization Semantics Content Module 1.0 formally approved by the group",
    url:
      "https://www.w3.org/TR/2020/WD-personalization-semantics-content-1.0-20200127/",
  },
  {
    name:
      "Latest draft of CSS Basic User Interface Module Level 4 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-css-ui-4-20200124/",
  },
  {
    name:
      "Latest draft of WebRTC Priority Control API formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-webrtc-priority-20200123/",
  },
  {
    name:
      "Latest draft of Navigation Timing Level 2 formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-navigation-timing-2-20200121/",
  },
  {
    name:
      "Latest draft of Extensions to the Semantic Sensor Network Ontology formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-vocab-ssn-ext-20200116/",
  },
  {
    name:
      "Latest draft of Identifiers for WebRTC's Statistics API formally approved by the group",
    url: "https://www.w3.org/TR/2020/CR-webrtc-stats-20200114/",
  },
  {
    name:
      "Latest draft of Fetch Metadata Request Headers formally approved by the group",
    url: "https://www.w3.org/TR/2020/WD-fetch-metadata-20200110/",
  },
  {
    name:
      "Latest draft of The Profiles Vocabulary formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-dx-prof-20191218/",
  },
  {
    name:
      "Latest draft of Core Accessibility API Mappings 1.2 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-core-aam-1.2-20191218/",
  },
  {
    name:
      "Latest draft of WAI-ARIA Authoring Practices 1.2 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/",
  },
  {
    name:
      "Latest draft of Accessible Rich Internet Applications (WAI-ARIA) 1.2 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-wai-aria-1.2-20191218/",
  },
  {
    name:
      "Latest draft of WebRTC 1.0: Real-time Communication Between Browsers formally approved by the group",
    url: "https://www.w3.org/TR/2019/CR-webrtc-20191213/",
  },
  {
    name: "Latest draft of Orientation Sensor formally approved by the group",
    url: "https://www.w3.org/TR/2019/CR-orientation-sensor-20191212/",
  },
  {
    name: "Latest draft of Generic Sensor API formally approved by the group",
    url: "https://www.w3.org/TR/2019/CR-generic-sensor-20191212/",
  },
  {
    name: "Latest draft of Accelerometer formally approved by the group",
    url: "https://www.w3.org/TR/2019/CR-accelerometer-20191212/",
  },
  {
    name: "Latest draft of Gyroscope formally approved by the group",
    url: "https://www.w3.org/TR/2019/CR-gyroscope-20191212/",
  },
  {
    name: "Latest draft of Payment Request API formally approved by the group",
    url: "https://www.w3.org/TR/2019/CR-payment-request-20191212/",
  },
  {
    name:
      "Latest draft of Pointer Events Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-pointerevents3-20191212/",
  },
  {
    name:
      "Latest draft of CSS Writing Modes Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2019/REC-css-writing-modes-3-20191210/",
  },
  {
    name:
      "Latest draft of Inaccessibility of CAPTCHA formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-turingtest-20191209/",
  },
  {
    name:
      "Latest draft of WebCGM 1.0 Second Release formally approved by the group",
    url: "https://www.w3.org/TR/2019/SPSD-WebCGM-20191205",
  },
  {
    name: "Latest draft of WebCGM 2.0 formally approved by the group",
    url: "https://www.w3.org/TR/2019/SPSD-webcgm20-20191205/",
  },
  {
    name:
      "Latest draft of WebAssembly Core Specification formally approved by the group",
    url: "https://www.w3.org/TR/2019/REC-wasm-core-1-20191205/",
  },
  {
    name:
      "Latest draft of WebAssembly JavaScript Interface formally approved by the group",
    url: "https://www.w3.org/TR/2019/REC-wasm-js-api-1-20191205/",
  },
  {
    name: "Latest draft of WebAssembly Web API formally approved by the group",
    url: "https://www.w3.org/TR/2019/REC-wasm-web-api-1-20191205/",
  },
  {
    name:
      "Latest draft of CSS Grid Layout Module Level 2 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-css-grid-2-20191203/",
  },
  {
    name:
      "Latest draft of Content Negotiation by Profile formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-dx-prof-conneg-20191126/",
  },
  {
    name:
      "Latest draft of Web Authentication: An API for accessing Public Key Credentials - Level 2 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-webauthn-2-20191126/",
  },
  {
    name:
      "Latest draft of CSS Spatial Navigation Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-css-nav-1-20191126/",
  },
  {
    name: "Latest draft of High Resolution Time formally approved by the group",
    url: "https://www.w3.org/TR/2019/SPSD-hr-time-1-20191121/",
  },
  {
    name:
      "Latest draft of High Resolution Time Level 2 formally approved by the group",
    url: "https://www.w3.org/TR/2019/REC-hr-time-2-20191121/",
  },
  {
    name:
      "Latest draft of CSS Containment Module Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2019/REC-css-contain-1-20191121/",
  },
  {
    name:
      "Latest draft of Trace Context Protocols Registry formally approved by the group",
    url:
      "https://www.w3.org/TR/2019/NOTE-trace-context-protocols-registry-20191119/",
  },
  {
    name:
      "Latest draft of Verifiable Credentials Data Model 1.0 formally approved by the group",
    url: "https://www.w3.org/TR/2019/REC-vc-data-model-20191119/",
  },
  {
    name: "Latest draft of Screen Capture formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-screen-capture-20191119/",
  },
  {
    name: "Latest draft of Service Workers 1 formally approved by the group",
    url: "https://www.w3.org/TR/2019/CR-service-workers-1-20191119/",
  },
  {
    name:
      "Latest draft of CSS Text Module Level 4 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-css-text-4-20191113/",
  },
  {
    name:
      "Latest draft of CSS Fonts Module Level 4 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-css-fonts-4-20191113/",
  },
  {
    name:
      "Latest draft of Web of Things (WoT) Security and Privacy Guidelines formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-wot-security-20191106/",
  },
  {
    name:
      "Latest draft of CSS Color Module Level 4 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-css-color-4-20191105/",
  },
  {
    name:
      "Latest draft of Accessibility Conformance Testing (ACT) Rules Format 1.0 formally approved by the group",
    url: "https://www.w3.org/TR/2019/REC-act-rules-format-1.0-20191031/",
  },
  {
    name:
      "Latest draft of Web of Things (WoT) Scripting API formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-wot-scripting-api-20191028/",
  },
  {
    name:
      "Latest draft of CSS Properties and Values API Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-css-properties-values-api-1-20191025/",
  },
  {
    name:
      "Latest draft of Performance Timeline Level 2 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-performance-timeline-2-20191024/",
  },
  {
    name: "Latest draft of Payment Handler API formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-payment-handler-20191021/",
  },
  {
    name:
      "Latest draft of CSS Multi-column Layout Module Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-css-multicol-1-20191015/",
  },
  {
    name: "Latest draft of WebXR Device API formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-webxr-20191010/",
  },
  {
    name:
      "Latest draft of WebXR Augmented Reality Module - Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-webxr-ar-module-1-20191010/",
  },
  {
    name:
      "Latest draft of WebXR Gamepads Module - Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-webxr-gamepads-module-1-20191010/",
  },
  {
    name:
      "Latest draft of CSS Images Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2019/CR-css-images-3-20191010/",
  },
  {
    name:
      "Latest draft of Verifiable Credentials Implementation Guidelines 1.0 formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-vc-imp-guide-20190924/",
  },
  {
    name:
      "Latest draft of Verifiable Credentials Use Cases formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-vc-use-cases-20190924/",
  },
  {
    name:
      "Latest draft of HTML Accessibility API Mappings 1.0 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-html-aam-1.0-20190913/",
  },
  {
    name:
      "Latest draft of MiniApp Standardization White Paper formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-mini-app-white-paper-20190912/",
  },
  {
    name: "Latest draft of File API formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-FileAPI-20190911/",
  },
  {
    name:
      "Latest draft of Payment Method Identifiers formally approved by the group",
    url: "https://www.w3.org/TR/2019/CR-payment-method-id-20190905/",
  },
  {
    name:
      "Latest draft of Pronunciation User Scenarios formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-pronunciation-user-scenarios-20190905/",
  },
  {
    name: "Latest draft of Pointer Lock 2.0 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-pointerlock-2-20190828/",
  },
  {
    name:
      "Latest draft of CSS Lists Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-css-lists-3-20190817/",
  },
  {
    name:
      "Latest draft of WAI-ARIA Authoring Practices 1.1 formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190814/",
  },
  {
    name:
      "Latest draft of CSS Text Decoration Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2019/CR-css-text-decor-3-20190813/",
  },
  {
    name: "Latest draft of Web Publications formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-wpub-20190813/",
  },
  {
    name:
      "Latest draft of Web Publications Use Cases and Requirements formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-pwp-ucr-20190813/",
  },
  {
    name:
      "Latest draft of CSS Generated Content Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-css-content-3-20190802/",
  },
  {
    name:
      "Latest draft of CSS Writing Modes Level 4 formally approved by the group",
    url: "https://www.w3.org/TR/2019/CR-css-writing-modes-4-20190730/",
  },
  {
    name:
      "Latest draft of CSS Table Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-css-tables-3-20190727/",
  },
  {
    name:
      "Latest draft of Timing Entry Names Registry formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-timing-entrytypes-registry-20190723/",
  },
  {
    name:
      "Latest draft of CSS Syntax Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2019/CR-css-syntax-3-20190716/",
  },
  {
    name:
      "Latest draft of Personalization Tools 1.0 formally approved by the group",
    url:
      "https://www.w3.org/TR/2019/WD-personalization-semantics-tools-1.0-20190711/",
  },
  {
    name:
      "Latest draft of Accessible Name and Description Computation 1.2 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-accname-1.2-20190711/",
  },
  {
    name:
      "Latest draft of Personalization Help and Support 1.0 formally approved by the group",
    url:
      "https://www.w3.org/TR/2019/WD-personalization-semantics-help-1.0-20190711/",
  },
  {
    name:
      "Latest draft of Media Capture and Streams formally approved by the group",
    url: "https://www.w3.org/TR/2019/CR-mediacapture-streams-20190702/",
  },
  {
    name: "Latest draft of Resource Hints formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-resource-hints-20190702/",
  },
  {
    name: "Latest draft of Preload formally approved by the group",
    url: "https://www.w3.org/TR/2019/CR-preload-20190626/",
  },
  {
    name:
      "Latest draft of CSS Animation Worklet API formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-css-animation-worklet-1-20190625/",
  },
  {
    name:
      "Latest draft of Strings on the Web: Language and Direction Metadata formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-string-meta-20190611/",
  },
  {
    name:
      "Latest draft of CSS Overscroll Behavior Module Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-css-overscroll-1-20190606/",
  },
  {
    name:
      "Latest draft of CSS Values and Units Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2019/CR-css-values-3-20190606/",
  },
  {
    name:
      "Latest draft of Intersection Observer formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-intersection-observer-20190531/",
  },
  {
    name: "Latest draft of Input Events Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-input-events-1-20190530/",
  },
  {
    name: "Latest draft of Input Events Level 2 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-input-events-2-20190530/",
  },
  {
    name: "Latest draft of UI Events formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-uievents-20190530/",
  },
  {
    name:
      "Latest draft of CSS Intrinsic & Extrinsic Sizing Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-css-sizing-3-20190522/",
  },
  {
    name: "Latest draft of Media Timed Events formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-media-timed-events-20190516/",
  },
  {
    name:
      "Latest draft of Character Model for the World Wide Web 1.0: Resource Identifiers formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-charmod-resid-20190502/",
  },
  {
    name:
      "Latest draft of CSS Easing Functions Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2019/CR-css-easing-1-20190430/",
  },
  {
    name: "Latest draft of Feature Policy formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-feature-policy-1-20190416/",
  },
  {
    name:
      "Latest draft of DeviceOrientation Event Specification formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-orientation-event-20190416/",
  },
  {
    name:
      "Latest draft of Accessibility Conformance Testing (ACT) Rules: Common Input Aspects formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-act-rules-aspects-20190416/",
  },
  {
    name:
      "Latest draft of TTML Media Type Definition and Profile Registry formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-ttml-profile-registry-20190411/",
  },
  {
    name:
      "Latest draft of WebVTT: The Web Video Text Tracks Format formally approved by the group",
    url: "https://www.w3.org/TR/2019/CR-webvtt1-20190404/",
  },
  {
    name: "Latest draft of Pointer Events formally approved by the group",
    url: "https://www.w3.org/TR/2019/SPSD-pointerevents1-20190404/",
  },
  {
    name: "Latest draft of Pointer Events formally approved by the group",
    url: "https://www.w3.org/TR/2019/REC-pointerevents2-20190404/",
  },
  {
    name:
      "Latest draft of Non-element Selectors Module Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-selectors-nonelement-1-20190402/",
  },
  {
    name:
      "Latest draft of Mitigating Browser Fingerprinting in Web Specifications formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-fingerprinting-guidance-20190328/",
  },
  {
    name:
      "Latest draft of SVG Filter Requirements formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-SVGFilterReqs12-20190328/",
  },
  {
    name: "Latest draft of Media Access Events formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-MediaAccessEvents-20190328/",
  },
  {
    name:
      "Latest draft of CSS Scroll Snap Module Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2019/CR-css-scroll-snap-1-20190319/",
  },
  {
    name: "Latest draft of Magnetometer formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-magnetometer-20190307/",
  },
  {
    name: "Latest draft of Ambient Light Sensor formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-ambient-light-20190307/",
  },
  {
    name: "Latest draft of Proximity Sensor formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-proximity-20190305/",
  },
  {
    name:
      "Latest draft of Web Authentication:An API for accessing Public Key Credentials Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2019/REC-webauthn-1-20190304/",
  },
  {
    name: "Latest draft of User Timing formally approved by the group",
    url: "https://www.w3.org/TR/2019/SPSD-user-timing-1-20190226/",
  },
  {
    name: "Latest draft of User Timing Level 2 formally approved by the group",
    url: "https://www.w3.org/TR/2019/REC-user-timing-2-20190226/",
  },
  {
    name:
      "Latest draft of CSS Pseudo-Elements Module Level 4 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-css-pseudo-4-20190225/",
  },
  {
    name:
      "Latest draft of CSS Transforms Module Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2019/CR-css-transforms-1-20190214/",
  },
  {
    name:
      "Latest draft of Character Model for the World Wide Web: String Matching formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-charmod-norm-20190204/",
  },
  {
    name:
      "Latest draft of CSS Values and Units Module Level 4 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-css-values-4-20190131/",
  },
  {
    name:
      "Latest draft of Tracking Compliance and Scope formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-tracking-compliance-20190122/",
  },
  {
    name: "Latest draft of CSS Snapshot 2018 formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-css-2018-20190122/",
  },
  {
    name:
      "Latest draft of Credential Management Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2019/WD-credential-management-1-20190117/",
  },
  {
    name:
      "Latest draft of Dataset Exchange Use Cases and Requirements formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-dcat-ucr-20190117/",
  },
  {
    name:
      "Latest draft of Tracking Preference Expression (DNT) formally approved by the group",
    url: "https://www.w3.org/TR/2019/NOTE-tracking-dnt-20190117/",
  },
  {
    name: "Latest draft of Geolocation Sensor formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-geolocation-sensor-20181219/",
  },
  {
    name:
      "Latest draft of Accessible Name and Description Computation 1.1 formally approved by the group",
    url: "https://www.w3.org/TR/2018/REC-accname-1.1-20181218/",
  },
  {
    name:
      "Latest draft of CSS Fragmentation Module Level 4 formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-css-break-4-20181218/",
  },
  {
    name:
      "Latest draft of Motion Path Module Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-motion-1-20181218/",
  },
  {
    name:
      "Latest draft of Filter Effects Module Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-filter-effects-1-20181218/",
  },
  {
    name:
      "Latest draft of WebRTC Next Version Use Cases formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-webrtc-nv-use-cases-20181211/",
  },
  {
    name:
      "Latest draft of Cognitive Accessibility Roadmap and Gap Analysis formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-coga-gap-analysis-20181211/",
  },
  {
    name:
      "Latest draft of CSS Fragmentation Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2018/CR-css-break-3-20181204/",
  },
  {
    name:
      "Latest draft of Geometry Interfaces Module Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2018/CR-geometry-1-20181204/",
  },
  {
    name: "Latest draft of Selectors Level 4 formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-selectors-4-20181121/",
  },
  {
    name:
      "Latest draft of CSS Flexible Box Layout Module Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/",
  },
  {
    name: "Latest draft of CSS Shadow Parts formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-css-shadow-parts-1-20181115/",
  },
  {
    name:
      "Latest draft of TTML Profiles for Internet Media Subtitles and Captions 1.1 formally approved by the group",
    url: "https://www.w3.org/TR/2018/REC-ttml-imsc1.1-20181108/",
  },
  {
    name:
      "Latest draft of Timed Text Markup Language 1 (TTML1) (Third Edition) formally approved by the group",
    url: "https://www.w3.org/TR/2018/REC-ttml1-20181108/",
  },
  {
    name: "Latest draft of Selectors Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2018/REC-selectors-3-20181106/",
  },
  {
    name: "Latest draft of HTML 5.3 formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-html53-20181018/",
  },
  {
    name:
      "Latest draft of CSS Paged Media Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-css-page-3-20181018/",
  },
  {
    name:
      "Latest draft of Content Security Policy Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-CSP3-20181015/",
  },
  {
    name:
      "Latest draft of CSS Animations Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-css-animations-1-20181011/",
  },
  {
    name: "Latest draft of Web Animations formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-web-animations-1-20181011/",
  },
  {
    name:
      "Latest draft of Packaged Web Apps (Widgets) - Packaging and XML Configuration (Second Edition) formally approved by the group",
    url: "https://www.w3.org/TR/2018/OBSL-widgets-20181011/",
  },
  {
    name:
      "Latest draft of The 'view-mode' Media Feature formally approved by the group",
    url: "https://www.w3.org/TR/2018/OBSL-view-mode-20181011/",
  },
  {
    name:
      "Latest draft of Widget Access Request Policy formally approved by the group",
    url: "https://www.w3.org/TR/2018/OBSL-widgets-access-20181011/",
  },
  {
    name: "Latest draft of Widget Interface formally approved by the group",
    url: "https://www.w3.org/TR/2018/OBSL-widgets-apis-20181011/",
  },
  {
    name: "Latest draft of CSS Transitions formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-css-transitions-1-20181011/",
  },
  {
    name:
      "Latest draft of XML Digital Signatures for Widgets formally approved by the group",
    url: "https://www.w3.org/TR/2018/OBSL-widgets-digsig-20181011/",
  },
  {
    name:
      "Latest draft of Scalable Vector Graphics (SVG) 2 formally approved by the group",
    url: "https://www.w3.org/TR/2018/CR-SVG2-20181004/",
  },
  {
    name:
      "Latest draft of Graphics Accessibility API Mappings formally approved by the group",
    url: "https://www.w3.org/TR/2018/REC-graphics-aam-1.0-20181002/",
  },
  {
    name:
      "Latest draft of WAI-ARIA Graphics Module formally approved by the group",
    url: "https://www.w3.org/TR/2018/REC-graphics-aria-1.0-20181002/",
  },
  {
    name:
      "Latest draft of Identity for WebRTC 1.0 formally approved by the group",
    url: "https://www.w3.org/TR/2018/CR-webrtc-identity-20180927/",
  },
  {
    name: "Latest draft of Using ARIA formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-using-aria-20180927/",
  },
  {
    name:
      "Latest draft of CSS Scrollbars Module Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-css-scrollbars-1-20180925/",
  },
  {
    name: "Latest draft of Reporting API formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-reporting-1-20180925/",
  },
  {
    name: "Latest draft of Device Memory formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-device-memory-1-20180925/",
  },
  {
    name:
      "Latest draft of Network Error Logging formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-network-error-logging-1-20180925/",
  },
  {
    name: "Latest draft of IMSC1.1 Requirements formally approved by the group",
    url: "https://www.w3.org/TR/2018/NOTE-imsc-1.1-reqs-20180925/",
  },
  {
    name:
      "Latest draft of CSS Fonts Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/",
  },
  {
    name: "Latest draft of Web Audio API formally approved by the group",
    url: "https://www.w3.org/TR/2018/CR-webaudio-20180918/",
  },
  {
    name:
      "Latest draft of Cascading Style Sheets, level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2018/SPSD-CSS1-20180913/",
  },
  {
    name:
      "Latest draft of An RDF Schema for P3P formally approved by the group",
    url: "https://www.w3.org/TR/2018/NOTE-p3p-rdfschema-20180830/",
  },
  {
    name:
      "Latest draft of P3P Guiding Principles formally approved by the group",
    url: "https://www.w3.org/TR/2018/NOTE-P3P10-principles-20180830/",
  },
  {
    name:
      "Latest draft of The Platform for Privacy Preferences 1.0 (P3P1.0) Specification formally approved by the group",
    url: "https://www.w3.org/TR/2018/OBSL-P3P-20180830/",
  },
  {
    name:
      "Latest draft of The Platform for Privacy Preferences 1.1 (P3P1.1) Specification formally approved by the group",
    url: "https://www.w3.org/TR/2018/NOTE-P3P11-20180830/",
  },
  {
    name:
      "Latest draft of CSS Cascading and Inheritance Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/",
  },
  {
    name:
      "Latest draft of CSS Cascading and Inheritance Level 4 formally approved by the group",
    url: "https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/",
  },
  {
    name:
      "Latest draft of CSS Logical Properties and Values Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-css-logical-1-20180827/",
  },
  {
    name:
      "Latest draft of CSS Painting API Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/",
  },
  {
    name:
      "Latest draft of EXI for JSON (EXI4JSON) formally approved by the group",
    url: "https://www.w3.org/TR/2018/NOTE-exi-for-json-20180726/",
  },
  {
    name:
      "Latest draft of Web Payments Use Cases 1.0 formally approved by the group",
    url: "https://www.w3.org/TR/2018/NOTE-web-payments-use-cases-20180719/",
  },
  {
    name:
      "Latest draft of TTML Profiles for Internet Media Subtitles and Captions 1.0 (IMSC1) formally approved by the group",
    url: "https://www.w3.org/TR/2018/SPSD-ttml-imsc1-20180626/",
  },
  {
    name: "Latest draft of Packaging on the Web formally approved by the group",
    url: "https://www.w3.org/TR/2018/NOTE-web-packaging-20180626/",
  },
  {
    name:
      "Latest draft of Vehicle Information API Specification formally approved by the group",
    url: "https://www.w3.org/TR/2018/NOTE-vehicle-information-api-20180626/",
  },
  {
    name:
      "Latest draft of CSS Basic User Interface Module Level 3 (CSS3 UI) formally approved by the group",
    url: "https://www.w3.org/TR/2018/REC-css-ui-3-20180621/",
  },
  {
    name:
      "Latest draft of CSS Color Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2018/REC-css-color-3-20180619/",
  },
  {
    name: "Latest draft of Canonical EXI formally approved by the group",
    url: "https://www.w3.org/TR/2018/REC-exi-c14n-20180607/",
  },
  {
    name: "Latest draft of WebDriver formally approved by the group",
    url: "https://www.w3.org/TR/2018/REC-webdriver1-20180605/",
  },
  {
    name:
      "Latest draft of Web Content Accessibility Guidelines (WCAG) 2.1 formally approved by the group",
    url: "https://www.w3.org/TR/2018/REC-WCAG21-20180605/",
  },
  {
    name:
      "Latest draft of SVG Accessibility API Mappings formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-svg-aam-1.0-20180510/",
  },
  {
    name: "Latest draft of Custom Elements formally approved by the group",
    url: "https://www.w3.org/TR/2018/NOTE-custom-elements-20180503/",
  },
  {
    name: "Latest draft of HTML Microdata formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-microdata-20180426/",
  },
  {
    name:
      "Latest draft of TTML Profiles for Internet Media Subtitles and Captions 1.0.1 (IMSC1) formally approved by the group",
    url: "https://www.w3.org/TR/2018/REC-ttml-imsc1.0.1-20180424/",
  },
  {
    name:
      "Latest draft of CSS Layout API Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/",
  },
  {
    name: "Latest draft of DOMMatrix interface formally approved by the group",
    url: "https://www.w3.org/TR/2018/NOTE-matrix-20180412/",
  },
  {
    name: "Latest draft of CSS Typed OM Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/",
  },
  {
    name:
      "Latest draft of HTML 4.01 Specification formally approved by the group",
    url: "https://www.w3.org/TR/2018/SPSD-html401-20180327/",
  },
  {
    name:
      "Latest draft of XHTML™ 1.1 - Module-based XHTML - Second Edition formally approved by the group",
    url: "http://www.w3.org/TR/2018/SPSD-xhtml11-20180327/",
  },
  {
    name:
      "Latest draft of XHTML™ Modularization 1.1 - Second Edition formally approved by the group",
    url: "http://www.w3.org/TR/2018/SPSD-xhtml-modularization-20180327/",
  },
  {
    name:
      "Latest draft of XHTML-Print - Second Edition formally approved by the group",
    url: "http://www.w3.org/TR/2018/SPSD-xhtml-print-20180327/",
  },
  {
    name: "Latest draft of HTML5 formally approved by the group",
    url: "https://www.w3.org/TR/2018/SPSD-html5-20180327/",
  },
  {
    name:
      "Latest draft of XHTML™ Basic 1.1 - Second Edition formally approved by the group",
    url: "http://www.w3.org/TR/2018/SPSD-xhtml-basic-20180327/",
  },
  {
    name:
      "Latest draft of HTML 4.0 Recommendation formally approved by the group",
    url: "https://www.w3.org/TR/2018/SPSD-html40-20180327/",
  },
  {
    name:
      "Latest draft of XHTML™ 1.0 The Extensible HyperText Markup Language (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2018/SPSD-xhtml1-20180327/",
  },
  {
    name:
      "Latest draft of HTML 3.2 Reference Specification formally approved by the group",
    url: "https://www.w3.org/TR/2018/SPSD-html32-20180315/",
  },
  {
    name: "Latest draft of Shadow DOM formally approved by the group",
    url: "https://www.w3.org/TR/2018/NOTE-shadow-dom-20180301/",
  },
  {
    name: "Latest draft of WOFF File Format 2.0 formally approved by the group",
    url: "https://www.w3.org/TR/2018/REC-WOFF2-20180301/",
  },
  {
    name:
      "Latest draft of ODRL Information Model 2.2 formally approved by the group",
    url: "https://www.w3.org/TR/2018/REC-odrl-model-20180215/",
  },
  {
    name:
      "Latest draft of ODRL Vocabulary & Expression 2.2 formally approved by the group",
    url: "https://www.w3.org/TR/2018/REC-odrl-vocab-20180215/",
  },
  {
    name:
      "Latest draft of Vehicle Information Service Specification formally approved by the group",
    url: "https://www.w3.org/TR/2018/CR-vehicle-information-service-20180213/",
  },
  {
    name: "Latest draft of HTML Media Capture formally approved by the group",
    url: "https://www.w3.org/TR/2018/REC-html-media-capture-20180201/",
  },
  {
    name:
      "Latest draft of Indexed Database API 2.0 formally approved by the group",
    url: "https://www.w3.org/TR/2018/REC-IndexedDB-2-20180130/",
  },
  {
    name: "Latest draft of Packaging on the Web formally approved by the group",
    url: "https://www.w3.org/TR/2018/NOTE-web-packaging-20180130/",
  },
  {
    name: "Latest draft of WebSub formally approved by the group",
    url: "https://www.w3.org/TR/2018/REC-websub-20180123/",
  },
  {
    name: "Latest draft of ActivityPub formally approved by the group",
    url: "https://www.w3.org/TR/2018/REC-activitypub-20180123/",
  },
  {
    name: "Latest draft of IndieAuth formally approved by the group",
    url: "https://www.w3.org/TR/2018/NOTE-indieauth-20180123/",
  },
  {
    name: "Latest draft of Post Type Discovery formally approved by the group",
    url: "https://www.w3.org/TR/2018/NOTE-post-type-discovery-20180118/",
  },
  {
    name:
      "Latest draft of JF2 Post Serialization Format formally approved by the group",
    url: "https://www.w3.org/TR/2018/NOTE-jf2-20180110/",
  },
  {
    name:
      "Latest draft of Packaged Web Publications formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-pwpub-20180104/",
  },
  {
    name:
      "Latest draft of Web Annotation Extensions for Web Publications formally approved by the group",
    url: "https://www.w3.org/TR/2018/WD-wpub-ann-20180104/",
  },
  {
    name: "Latest draft of Social Web Protocols formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-social-web-protocols-20171225/",
  },
  {
    name: "Latest draft of HTML 5.2 formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-html52-20171214/",
  },
  {
    name:
      "Latest draft of CSS Counter Styles Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2017/CR-css-counter-styles-3-20171214/",
  },
  {
    name:
      "Latest draft of Core Accessibility API Mappings 1.1 formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-core-aam-1.1-20171214/",
  },
  {
    name:
      "Latest draft of Digital Publishing Accessibility API Mappings formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-dpub-aam-1.0-20171214/",
  },
  {
    name:
      "Latest draft of CSS Grid Layout Module Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2017/CR-css-grid-1-20171214/",
  },
  {
    name:
      "Latest draft of Accessible Rich Internet Applications (WAI-ARIA) 1.1 formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-wai-aria-1.1-20171214/",
  },
  {
    name: "Latest draft of Wake Lock API formally approved by the group",
    url: "https://www.w3.org/TR/2017/CR-wake-lock-20171214/",
  },
  {
    name:
      "Latest draft of Digital Publishing WAI-ARIA Module 1.0 formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-dpub-aria-1.0-20171214/",
  },
  {
    name:
      "Latest draft of Web Payments HTTP API 1.0 formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-webpayments-http-api-20171212/",
  },
  {
    name:
      "Latest draft of Payment Method Manifest formally approved by the group",
    url: "https://www.w3.org/TR/2017/WD-payment-method-manifest-20171212/",
  },
  {
    name: "Latest draft of Clear Site Data formally approved by the group",
    url: "https://www.w3.org/TR/2017/WD-clear-site-data-20171130/",
  },
  {
    name: "Latest draft of Remote Playback API formally approved by the group",
    url: "https://www.w3.org/TR/2017/CR-remote-playback-20171019/",
  },
  {
    name:
      "Latest draft of Semantic Sensor Network Ontology formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-vocab-ssn-20171019/",
  },
  {
    name:
      "Latest draft of CSS Backgrounds and Borders Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/",
  },
  {
    name:
      "Latest draft of Page Visibility Level 2 formally approved by the group",
    url: "https://www.w3.org/TR/2017/PR-page-visibility-2-20171017/",
  },
  {
    name: "Latest draft of Vehicle Data formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-vehicle-data-20171012/",
  },
  {
    name:
      "Latest draft of Cooperative Scheduling of Background Tasks formally approved by the group",
    url: "https://www.w3.org/TR/2017/PR-requestidlecallback-20171010/",
  },
  {
    name:
      "Latest draft of Audio Output Devices API formally approved by the group",
    url: "https://www.w3.org/TR/2017/CR-audio-output-20171003/",
  },
  {
    name: "Latest draft of HTML 5.1 2nd Edition formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-html51-20171003/",
  },
  {
    name:
      "Latest draft of Spatial Data on the Web Best Practices formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-sdw-bp-20170928/",
  },
  {
    name:
      "Latest draft of Publishing and Using Earth Observation Data with the RDF Data Cube and the Discrete Global Grid System formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-eo-qb-20170928/",
  },
  {
    name:
      "Latest draft of QB4ST: RDF Data Cube extensions for spatio-temporal components formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-qb4st-20170928/",
  },
  {
    name: "Latest draft of Permissions formally approved by the group",
    url: "https://www.w3.org/TR/2017/WD-permissions-20170925/",
  },
  {
    name:
      "Latest draft of Encrypted Media Extensions formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-encrypted-media-20170918/",
  },
  {
    name:
      "Latest draft of Using the ITU BT.2100 PQ EOTF with the PNG Format formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-png-hdr-pq-20170911/",
  },
  {
    name: "Latest draft of Long Tasks API 1 formally approved by the group",
    url: "https://www.w3.org/TR/2017/WD-longtasks-1-20170907/",
  },
  {
    name: "Latest draft of Paint Timing 1 formally approved by the group",
    url: "https://www.w3.org/TR/2017/WD-paint-timing-20170907/",
  },
  {
    name:
      "Latest draft of Media Capture from DOM Elements formally approved by the group",
    url: "https://www.w3.org/TR/2017/WD-mediacapture-fromelement-20170906/",
  },
  {
    name:
      "Latest draft of Media Queries Level 4 formally approved by the group",
    url: "https://www.w3.org/TR/2017/CR-mediaqueries-4-20170905/",
  },
  {
    name:
      "Latest draft of Motion Sensors Explainer formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-motion-sensors-20170830/",
  },
  {
    name:
      "Latest draft of High Resolution Time Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-hr-time-3-20170803/",
  },
  {
    name:
      "Latest draft of SHACL Use Cases and Requirements formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-shacl-ucr-20170720/",
  },
  {
    name:
      "Latest draft of Shapes Constraint Language (SHACL) formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-shacl-20170720/",
  },
  {
    name:
      "Latest draft of SHACL Abstract Syntax -- Note on Status of Obsolete Proposal formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-shacl-abstract-syntax-20170720/",
  },
  {
    name:
      "Latest draft of Unicode in XML and other Markup Languages formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-unicode-xml-20170713/",
  },
  {
    name:
      "Latest draft of Overview of the CoverageJSON format formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-covjson-overview-20170711/",
  },
  {
    name:
      "Latest draft of Geolocation API Specification Level 2 formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-geolocation-API-v2-20170706/",
  },
  {
    name:
      'Latest draft of "MediaStream Image Capture" formally approved by the group',
    url: "https://www.w3.org/TR/2017/WD-image-capture-20170621/",
  },
  {
    name:
      "Latest draft of MediaStream Recording formally approved by the group",
    url: "https://www.w3.org/TR/2017/WD-mediastream-recording-20170621/",
  },
  {
    name:
      "Latest draft of XQuery Scripting Extension 1.0 Requirements formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-xquery-sx-10-requirements-20170620/",
  },
  {
    name:
      "Latest draft of XQuery Scripting Extension 1.0 Use Cases formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-xquery-sx-10-use-cases-20170620/",
  },
  {
    name: "Latest draft of FindText API formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-findtext-20170620/",
  },
  {
    name:
      "Latest draft of CSS Overflow Module Level 4 formally approved by the group",
    url: "https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/",
  },
  {
    name:
      "Latest draft of SHACL Advanced Features formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-shacl-af-20170608/",
  },
  {
    name:
      "Latest draft of SHACL JavaScript Extensions formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-shacl-js-20170608/",
  },
  {
    name:
      "Latest draft of XSL Transformations (XSLT) Version 3.0 formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-xslt-30-20170608/",
  },
  {
    name:
      "Latest draft of Cloud Browser Architecture formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-cloud-browser-arch-20170608/",
  },
  {
    name:
      "Latest draft of UI Events KeyboardEvent code Values formally approved by the group",
    url: "https://www.w3.org/TR/2017/CR-uievents-code-20170601/",
  },
  {
    name: "Latest draft of Presentation API formally approved by the group",
    url: "https://www.w3.org/TR/2017/CR-presentation-api-20170601/",
  },
  {
    name:
      "Latest draft of UI Events KeyboardEvent key Values formally approved by the group",
    url: "https://www.w3.org/TR/2017/CR-uievents-key-20170601/",
  },
  {
    name: "Latest draft of Geofencing API formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-geofencing-20170530/",
  },
  {
    name: "Latest draft of Activity Vocabulary formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-activitystreams-vocabulary-20170523/",
  },
  {
    name: "Latest draft of Activity Streams 2.0 formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-activitystreams-core-20170523/",
  },
  {
    name: "Latest draft of Micropub formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-micropub-20170523/",
  },
  {
    name:
      "Latest draft of TV Control API Specification formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-tvcontrol-api-20170518/",
  },
  {
    name:
      "Latest draft of Linked Data Notifications formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-ldn-20170502/",
  },
  {
    name:
      "Latest draft of Web Publications for the Open Web Platform: Vision And Technical Challenges formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-pwp-20170502/",
  },
  {
    name:
      "Latest draft of Media Capture Depth Stream Extensions formally approved by the group",
    url: "https://www.w3.org/TR/2017/WD-mediacapture-depth-20170418/",
  },
  {
    name:
      "Latest draft of CSS Image Values and Replaced Content Module Level 4 formally approved by the group",
    url: "https://www.w3.org/TR/2017/WD-css-images-4-20170413/",
  },
  {
    name: "Latest draft of Beacon formally approved by the group",
    url: "https://www.w3.org/TR/2017/CR-beacon-20170413/",
  },
  {
    name:
      "Latest draft of CSS Fill and Stroke Module Level 3 formally approved by the group",
    url: "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/",
  },
  {
    name:
      "Latest draft of Resource Timing Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2017/CR-resource-timing-1-20170330/",
  },
  {
    name: "Latest draft of XQueryX 3.1 formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-xqueryx-31-20170321/",
  },
  {
    name:
      "Latest draft of XPath and XQuery Functions and Operators 3.1 formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-xpath-functions-31-20170321/",
  },
  {
    name:
      "Latest draft of XQuery 3.1: An XML Query Language formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-xquery-31-20170321/",
  },
  {
    name:
      "Latest draft of XML Path Language (XPath) 3.1 formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-xpath-31-20170321/",
  },
  {
    name:
      "Latest draft of XSLT and XQuery Serialization 3.1 formally approved by the group",
    url:
      "https://www.w3.org/TR/2017/REC-xslt-xquery-serialization-31-20170321/",
  },
  {
    name:
      "Latest draft of XQuery and XPath Data Model 3.1 formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-xpath-datamodel-31-20170321/",
  },
  {
    name: "Latest draft of CSS Rhythmic Sizing formally approved by the group",
    url: "https://www.w3.org/TR/2017/WD-css-rhythm-1-20170302/",
  },
  {
    name:
      "Latest draft of Requirements for Internationalization Tag Set (ITS) 2.0 formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-its2req-20170302/",
  },
  {
    name:
      "Latest draft of Metadata for the Multilingual Web - Usage Scenarios and Implementations formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-mlw-metadata-us-impl-20170302/",
  },
  {
    name:
      "Latest draft of Web Annotation Data Model formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-annotation-model-20170223/",
  },
  {
    name: "Latest draft of Selectors and States formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-selectors-states-20170223/",
  },
  {
    name:
      "Latest draft of POE Use Cases and Requirements formally approved by the group",
    url: "https://www.w3.org/TR/2017/WD-poe-ucr-20170223/",
  },
  {
    name:
      "Latest draft of Web Annotation Protocol formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-annotation-protocol-20170223/",
  },
  {
    name:
      "Latest draft of Web Annotation Vocabulary formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-annotation-vocab-20170223/",
  },
  {
    name:
      "Latest draft of Embedding Web Annotations in HTML formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-annotation-html-20170223/",
  },
  {
    name:
      "Latest draft of Ready-made Counter Styles formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-predefined-counter-styles-20170216/",
  },
  {
    name:
      "Latest draft of Developers' Guide to Features of Web Accessibility Evaluation Tools formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-WAET-20170202/",
  },
  {
    name:
      "Latest draft of Pointer Methods in RDF 1.0 formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-Pointers-in-RDF10-20170202/",
  },
  {
    name:
      "Latest draft of HTTP Vocabulary in RDF 1.0 formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-HTTP-in-RDF10-20170202/",
  },
  {
    name:
      "Latest draft of Developer Guide for Evaluation and Report Language (EARL) 1.0 formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-EARL10-Guide-20170202/",
  },
  {
    name:
      "Latest draft of Requirements for the Evaluation and Report Language (EARL) 1.0 formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-EARL10-Requirements-20170202/",
  },
  {
    name:
      "Latest draft of Discovery & Registration of Multimodal Modality Components formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-mmi-mc-discovery-20170202/",
  },
  {
    name:
      "Latest draft of Evaluation and Report Language (EARL) 1.0 Schema formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-EARL10-Schema-20170202/",
  },
  {
    name:
      "Latest draft of EMMA: Extensible MultiModal Annotation markup language Version 2.0 formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-emma20-20170202/",
  },
  {
    name:
      "Latest draft of Representing Content in RDF 1.0 formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-Content-in-RDF10-20170202/",
  },
  {
    name: "Latest draft of CSS Snapshot 2017 formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-css-2017-20170131/",
  },
  {
    name:
      "Latest draft of Data on the Web Best Practices formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-dwbp-20170131/",
  },
  {
    name: "Latest draft of Web Cryptography API formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-WebCryptoAPI-20170126/",
  },
  {
    name: "Latest draft of Referrer Policy formally approved by the group",
    url: "https://www.w3.org/TR/2017/CR-referrer-policy-20170126/",
  },
  {
    name:
      "Latest draft of XQuery Update Facility 3.0 formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-xquery-update-30-20170124/",
  },
  {
    name:
      "Latest draft of XQuery Update Facility 3.0 Requirements and Use Cases formally approved by the group",
    url:
      "https://www.w3.org/TR/2017/NOTE-xquery-update-30-requirements-use-cases-20170124/",
  },
  {
    name:
      "Latest draft of Network Service Discovery formally approved by the group",
    url: "https://www.w3.org/TR/2017/NOTE-discovery-api-20170112/",
  },
  {
    name: "Latest draft of Webmention formally approved by the group",
    url: "https://www.w3.org/TR/2017/REC-webmention-20170112/",
  },
  {
    name:
      "Latest draft of CSS Round Display Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2016/WD-css-round-display-1-20161222/",
  },
  {
    name:
      "Latest draft of Content Security Policy Level 2 formally approved by the group",
    url: "https://www.w3.org/TR/2016/REC-CSP2-20161215/",
  },
  {
    name:
      "Latest draft of Data on the Web Best Practices: Data Quality Vocabulary formally approved by the group",
    url: "https://www.w3.org/TR/2016/NOTE-vocab-dqv-20161215/",
  },
  {
    name:
      "Latest draft of Data on the Web Best Practices: Dataset Usage Vocabulary formally approved by the group",
    url: "https://www.w3.org/TR/2016/NOTE-vocab-duv-20161215/",
  },
  {
    name: "Latest draft of WebIDL Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2016/REC-WebIDL-1-20161215/",
  },
  {
    name:
      "Latest draft of XQuery 3.1 Requirements and Use Cases formally approved by the group",
    url: "https://www.w3.org/TR/2016/NOTE-xquery-31-requirements-20161213/",
  },
  {
    name: "Latest draft of URL formally approved by the group",
    url: "https://www.w3.org/TR/2016/NOTE-url-1-20161206/",
  },
  {
    name: "Latest draft of Streams API formally approved by the group",
    url: "https://www.w3.org/TR/2016/NOTE-streams-api-20161129/",
  },
  {
    name:
      "Latest draft of Media Source Extensions™ formally approved by the group",
    url: "https://www.w3.org/TR/2016/REC-media-source-20161117/",
  },
  {
    name:
      "Latest draft of Geolocation API Specification 2nd Edition formally approved by the group",
    url: "https://www.w3.org/TR/2016/REC-geolocation-API-20161108/",
  },
  {
    name: "Latest draft of Pointer Lock formally approved by the group",
    url: "https://www.w3.org/TR/2016/REC-pointerlock-20161027/",
  },
  {
    name:
      "Latest draft of Spatial Data on the Web Use Cases & Requirements formally approved by the group",
    url: "https://www.w3.org/TR/2016/NOTE-sdw-ucr-20161025/",
  },
  {
    name:
      "Latest draft of Vibration API (Second Edition) formally approved by the group",
    url: "https://www.w3.org/TR/2016/REC-vibration-20161018/",
  },
  {
    name:
      "Latest draft of Web Payments Overview 1.0 formally approved by the group",
    url: "https://www.w3.org/TR/2016/NOTE-webpayments-overview-20161013/",
  },
  {
    name:
      "Latest draft of Techniques for WCAG 2.0 formally approved by the group",
    url: "https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/",
  },
  {
    name:
      "Latest draft of Understanding WCAG 2.0 formally approved by the group",
    url: "https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/",
  },
  {
    name:
      "Latest draft of XMLHttpRequest Level 1 formally approved by the group",
    url: "https://www.w3.org/TR/2016/NOTE-XMLHttpRequest-20161006/",
  },
  {
    name:
      "Latest draft of Media Source Extensions Byte Stream Format Registry formally approved by the group",
    url:
      "https://www.w3.org/TR/2016/NOTE-mse-byte-stream-format-registry-20161004/",
  },
  {
    name:
      "Latest draft of WebM Byte Stream Format formally approved by the group",
    url:
      "https://www.w3.org/TR/2016/NOTE-mse-byte-stream-format-webm-20161004/",
  },
  {
    name:
      "Latest draft of ISO BMFF Byte Stream Format formally approved by the group",
    url:
      "https://www.w3.org/TR/2016/NOTE-mse-byte-stream-format-isobmff-20161004/",
  },
  {
    name:
      "Latest draft of MPEG-2 TS Byte Stream Format formally approved by the group",
    url:
      "https://www.w3.org/TR/2016/NOTE-mse-byte-stream-format-mp2t-20161004/",
  },
  {
    name:
      "Latest draft of MPEG Audio Byte Stream Format formally approved by the group",
    url:
      "https://www.w3.org/TR/2016/NOTE-mse-byte-stream-format-mpeg-audio-20161004/",
  },
  {
    name: "Latest draft of Secure Contexts formally approved by the group",
    url: "https://www.w3.org/TR/2016/CR-secure-contexts-20160915/",
  },
  {
    name:
      "Latest draft of Encrypted Media Extensions Stream Format Registry formally approved by the group",
    url: "https://www.w3.org/TR/2016/NOTE-eme-stream-registry-20160915/",
  },
  {
    name: "Latest draft of WebM Stream Format formally approved by the group",
    url: "https://www.w3.org/TR/2016/NOTE-eme-stream-webm-20160915/",
  },
  {
    name:
      "Latest draft of ISO Common Encryption ('cenc') Protection Scheme for ISO Base Media File Format Stream Format formally approved by the group",
    url: "https://www.w3.org/TR/2016/NOTE-eme-stream-mp4-20160915/",
  },
  {
    name:
      'Latest draft of "cenc" Initialization Data Format formally approved by the group',
    url: "https://www.w3.org/TR/2016/NOTE-eme-initdata-cenc-20160915/",
  },
  {
    name:
      'Latest draft of "keyids" Initialization Data Format formally approved by the group',
    url: "https://www.w3.org/TR/2016/NOTE-eme-initdata-keyids-20160915/",
  },
  {
    name:
      "Latest draft of Web Payments HTTP Messages 1.0 formally approved by the group",
    url: "https://www.w3.org/TR/2016/WD-webpayments-http-messages-20160915/",
  },
  {
    name:
      "Latest draft of Encrypted Media Extensions Initialization Data Format Registry formally approved by the group",
    url: "https://www.w3.org/TR/2016/NOTE-eme-initdata-registry-20160915/",
  },
  {
    name:
      'Latest draft of "webm" Initialization Data Format formally approved by the group',
    url: "https://www.w3.org/TR/2016/NOTE-eme-initdata-webm-20160915/",
  },
  {
    name:
      "Latest draft of Entry Point Regulation formally approved by the group",
    url: "https://www.w3.org/TR/2016/NOTE-epr-20160913/",
  },
  {
    name:
      "Latest draft of Content Security Policy: Cookie Controls formally approved by the group",
    url: "https://www.w3.org/TR/2016/NOTE-csp-cookies-20160913/",
  },
  {
    name:
      "Latest draft of Content Security Policy Pinning formally approved by the group",
    url: "https://www.w3.org/TR/2016/NOTE-csp-pinning-20160913/",
  },
  {
    name:
      "Latest draft of Content Security Policy: Embedded Enforcement formally approved by the group",
    url: "https://www.w3.org/TR/2016/WD-csp-embedded-enforcement-20160909/",
  },
  {
    name: "Latest draft of Mixed Content formally approved by the group",
    url: "https://www.w3.org/TR/2016/CR-mixed-content-20160802/",
  },
  {
    name:
      "Latest draft of XProc 2.0: Standard Step Library formally approved by the group",
    url: "http://www.w3.org/TR/2016/NOTE-xproc20-steps-20160721/",
  },
  {
    name:
      "Latest draft of XML Inclusions (XInclude) Version 1.1 formally approved by the group",
    url: "http://www.w3.org/TR/2016/NOTE-xinclude-11-20160721/",
  },
  {
    name:
      "Latest draft of XProc 2.0: An XML Pipeline Language formally approved by the group",
    url: "http://www.w3.org/TR/2016/NOTE-xproc20-20160721/",
  },
  {
    name: "Latest draft of Frame Timing formally approved by the group",
    url: "http://www.w3.org/TR/2016/NOTE-frame-timing-20160720/",
  },
  {
    name:
      "Latest draft of WAI-ARIA 1.0 Authoring Practices formally approved by the group",
    url: "http://www.w3.org/TR/2016/WD-wai-aria-practices-20160714/",
  },
  {
    name: "Latest draft of WAI-ARIA 1.0 Primer formally approved by the group",
    url: "http://www.w3.org/TR/2016/WD-wai-aria-primer-20160714/",
  },
  {
    name: "Latest draft of Battery Status API formally approved by the group",
    url: "http://www.w3.org/TR/2016/CR-battery-status-20160707/",
  },
  {
    name:
      "Latest draft of Subresource Integrity formally approved by the group",
    url: "http://www.w3.org/TR/2016/REC-SRI-20160623/",
  },
  {
    name:
      "Latest draft of User Interface Security and the Visibility API formally approved by the group",
    url: "http://www.w3.org/TR/2016/WD-UISecurity-20160607/",
  },
  {
    name: "Latest draft of Worklets Level 1 formally approved by the group",
    url: "http://www.w3.org/TR/2016/WD-worklets-1-20160607/",
  },
  {
    name:
      "Latest draft of Input Method Editor API formally approved by the group",
    url: "http://www.w3.org/TR/2016/NOTE-ime-api-20160524/",
  },
  {
    name: "Latest draft of Quota Management API formally approved by the group",
    url: "http://www.w3.org/TR/2016/NOTE-quota-api-20160523/",
  },
  {
    name:
      "Latest draft of DOM Parsing and Serialization formally approved by the group",
    url: "http://www.w3.org/TR/2016/WD-DOM-Parsing-20160517/",
  },
  {
    name:
      "Latest draft of Digital Publishing and Accessibility in W3C Documents formally approved by the group",
    url: "http://www.w3.org/TR/2016/NOTE-dpub-accessibility-20160503/",
  },
  {
    name:
      "Latest draft of Web Storage (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2016/REC-webstorage-20160419/",
  },
  {
    name:
      "Latest draft of Cascading Style Sheets Level 2 Revision 2 (CSS 2.2) Specification formally approved by the group",
    url: "http://www.w3.org/TR/2016/WD-CSS22-20160412/",
  },
  {
    name:
      "Latest draft of CSS Device Adaptation Module Level 1 formally approved by the group",
    url: "http://www.w3.org/TR/2016/WD-css-device-adapt-1-20160329/",
  },
  {
    name:
      "Latest draft of WebCrypto Key Discovery formally approved by the group",
    url: "http://www.w3.org/TR/2016/NOTE-webcrypto-key-discovery-20160329/",
  },
  {
    name:
      "Latest draft of Accessibility Requirements for People with Low Vision formally approved by the group",
    url: "http://www.w3.org/TR/2016/WD-low-vision-needs-20160317/",
  },
  {
    name:
      "Latest draft of CSS Object Model (CSSOM) formally approved by the group",
    url: "http://www.w3.org/TR/2016/WD-cssom-1-20160317/",
  },
  {
    name: "Latest draft of CSSOM View Module formally approved by the group",
    url: "http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/",
  },
  {
    name:
      "Latest draft of WOFF 2.0 Evaluation Report formally approved by the group",
    url: "http://www.w3.org/TR/2016/NOTE-WOFF20ER-20160315/",
  },
  {
    name:
      "Latest draft of Embedding Tabular Metadata in HTML formally approved by the group",
    url: "http://www.w3.org/TR/2016/NOTE-csvw-html-20160225/",
  },
  {
    name:
      "Latest draft of CSV on the Web: A Primer formally approved by the group",
    url: "http://www.w3.org/TR/2016/NOTE-tabular-data-primer-20160225/",
  },
  {
    name:
      "Latest draft of CSV on the Web: Use Cases and Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2016/NOTE-csvw-ucr-20160225/",
  },
  {
    name: "Latest draft of HTML Imports formally approved by the group",
    url: "http://www.w3.org/TR/2016/WD-html-imports-20160225/",
  },
  {
    name:
      "Latest draft of Requirements for WCAG 2.0 Extensions formally approved by the group",
    url: "http://www.w3.org/TR/2016/WD-wcag2-ext-req-20160105/",
  },
  {
    name:
      "Latest draft of Generating RDF from Tabular Data on the Web formally approved by the group",
    url: "http://www.w3.org/TR/2015/REC-csv2rdf-20151217/",
  },
  {
    name:
      "Latest draft of Model for Tabular Data and Metadata on the Web formally approved by the group",
    url: "http://www.w3.org/TR/2015/REC-tabular-data-model-20151217/",
  },
  {
    name:
      "Latest draft of Metadata Vocabulary for Tabular Data formally approved by the group",
    url: "http://www.w3.org/TR/2015/REC-tabular-metadata-20151217/",
  },
  {
    name:
      "Latest draft of Generating JSON from Tabular Data on the Web formally approved by the group",
    url: "http://www.w3.org/TR/2015/REC-csv2json-20151217/",
  },
  {
    name:
      "Latest draft of User Agent Accessibility Guidelines (UAAG) 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-UAAG20-20151215/",
  },
  {
    name:
      "Latest draft of UAAG 2.0 Reference: Explanations, Examples, and Resources for User Agent Accessibility Guidelines 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-UAAG20-Reference-20151215/",
  },
  {
    name:
      "Latest draft of XQuery and XPath Full Text 3.0 Requirements and Use Cases formally approved by the group",
    url:
      "http://www.w3.org/TR/2015/NOTE-xpath-full-text-30-requirements-use-cases-20151210/",
  },
  {
    name:
      "Latest draft of CSS Will Change Module Level 1 formally approved by the group",
    url: "http://www.w3.org/TR/2015/CR-css-will-change-1-20151203/",
  },
  {
    name:
      "Latest draft of Media Accessibility User Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-media-accessibility-reqs-20151203/",
  },
  {
    name:
      "Latest draft of CSS Custom Properties for Cascading Variables Module Level 1 formally approved by the group",
    url: "http://www.w3.org/TR/2015/CR-css-variables-1-20151203/",
  },
  {
    name:
      "Latest draft of XQuery and XPath Full Text 3.0 formally approved by the group",
    url: "http://www.w3.org/TR/2015/REC-xpath-full-text-30-20151124/",
  },
  {
    name:
      "Latest draft of HTML Canvas 2D Context formally approved by the group",
    url: "http://www.w3.org/TR/2015/REC-2dcontext-20151119/",
  },
  {
    name: "Latest draft of W3C DOM4 formally approved by the group",
    url: "http://www.w3.org/TR/2015/REC-dom-20151119/",
  },
  {
    name:
      "Latest draft of Confinement with Origin Web Labels formally approved by the group",
    url: "http://www.w3.org/TR/2015/WD-COWL-20151015/",
  },
  {
    name: "Latest draft of CSS Snapshot 2015 formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-css-2015-20151013/",
  },
  {
    name:
      "Latest draft of Upgrade Insecure Requests formally approved by the group",
    url: "http://www.w3.org/TR/2015/CR-upgrade-insecure-requests-20151008/",
  },
  {
    name:
      "Latest draft of A transcript extension for HTML formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-html-transcript-src-20151001/",
  },
  {
    name:
      "Latest draft of W3C HTML Form HTTP Extensions formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-form-http-extensions-20150929/",
  },
  {
    name:
      "Latest draft of HTML Canvas 2D Context, Level 2 formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-2dcontext2-20150929/",
  },
  {
    name:
      "Latest draft of HTML to Platform Accessibility APIs Implementation Guide formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-html-aapi-20150929/",
  },
  {
    name:
      "Latest draft of Polyglot Markup: A robust profile of the HTML5 vocabulary formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-html-polyglot-20150929/",
  },
  {
    name:
      "Latest draft of W3C HTML JSON form submission formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-html-json-forms-20150929/",
  },
  {
    name:
      "Latest draft of Authoring Tool Accessibility Guidelines (ATAG) 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2015/REC-ATAG20-20150924/",
  },
  {
    name: "Latest draft of Web Workers formally approved by the group",
    url: "http://www.w3.org/TR/2015/WD-workers-20150924/",
  },
  {
    name:
      "Latest draft of Implementing ATAG 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/",
  },
  {
    name:
      "Latest draft of Timing control for script-based animations formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-animation-timing-20150922/",
  },
  {
    name: "Latest draft of CSS Page Floats formally approved by the group",
    url: "http://www.w3.org/TR/2015/WD-css-page-floats-3-20150915/",
  },
  {
    name:
      "Latest draft of State Chart XML (SCXML): State Machine Notation for Control Abstraction formally approved by the group",
    url: "http://www.w3.org/TR/2015/REC-scxml-20150901/",
  },
  {
    name:
      "Latest draft of Priorities for CSS from the Digital Publishing Interest Group formally approved by the group",
    url: "http://www.w3.org/TR/2015/WD-dpub-css-priorities-20150820/",
  },
  {
    name:
      "Latest draft of DOM Event I/O Processor for SCXML formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-scxml-dom-iop-20150811/",
  },
  {
    name:
      "Latest draft of XPath Data Model for SCXML formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-scxml-xpath-dm-20150811/",
  },
  {
    name:
      "Latest draft of Runtime and Security Model for Web Applications formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-runtime-20150806/",
  },
  {
    name:
      "Latest draft of Linked Data Patch Format formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-ldpatch-20150728/",
  },
  {
    name:
      "Latest draft of Task Scheduler API Specification formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-task-scheduler-20150723/",
  },
  {
    name: "Latest draft of The app: URL Scheme formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-app-uri-20150723/",
  },
  {
    name:
      "Latest draft of TCP and UDP Socket API formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-tcp-udp-sockets-20150723/",
  },
  {
    name:
      "Latest draft of XML Signature Syntax and Processing Version 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-xmldsig-core2-20150723/",
  },
  {
    name:
      "Latest draft of Additional Requirements for Bidi in HTML & CSS formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-html-bidi-20150721/",
  },
  {
    name:
      "Latest draft of Permissions for Device API Access formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-api-perms-20150714/",
  },
  {
    name: "Latest draft of SVG Paths formally approved by the group",
    url: "http://www.w3.org/TR/2015/WD-svg-paths-20150709/",
  },
  {
    name:
      "Latest draft of Linked Data Platform Paging 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-ldp-paging-20150630/",
  },
  {
    name: "Latest draft of Web NFC API formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-nfc-20150616/",
  },
  {
    name: "Latest draft of Messaging API formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-messaging-20150602/",
  },
  {
    name: "Latest draft of Web Telephony API formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-telephony-20150602/",
  },
  {
    name: "Latest draft of Contacts Manager API formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-contacts-manager-api-20150602/",
  },
  {
    name:
      "Latest draft of HTML5: Techniques for providing useful text alternatives formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-html-alt-techniques-20150521/",
  },
  {
    name: "Latest draft of HTML5 Web Messaging formally approved by the group",
    url: "http://www.w3.org/TR/2015/REC-webmessaging-20150519/",
  },
  {
    name:
      "Latest draft of Dataset Descriptions: HCLS Community Profile formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-hcls-dataset-20150514/",
  },
  {
    name:
      "Latest draft of IndieUI: User Context 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2015/WD-indie-ui-context-20150430/",
  },
  {
    name: "Latest draft of IndieUI: Events 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2015/WD-indie-ui-events-20150430/",
  },
  {
    name:
      "Latest draft of Linked Data Platform 1.0 Primer formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-ldp-primer-20150423/",
  },
  {
    name:
      "Latest draft of Language Tags and Locale Identifiers for the World Wide Web formally approved by the group",
    url: "http://www.w3.org/TR/2015/WD-ltli-20150423/",
  },
  {
    name: "Latest draft of SVG Markers formally approved by the group",
    url: "http://www.w3.org/TR/2015/WD-svg-markers-20150409/",
  },
  {
    name: "Latest draft of SVG Strokes formally approved by the group",
    url: "http://www.w3.org/TR/2015/WD-svg-strokes-20150409/",
  },
  {
    name:
      "Latest draft of CSS Template Layout Module formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-css-template-3-20150326/",
  },
  {
    name:
      "Latest draft of RDFa 1.1 Primer - Third Edition formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-rdfa-primer-20150317/",
  },
  {
    name:
      "Latest draft of RDFa Core 1.1 - Third Edition formally approved by the group",
    url: "http://www.w3.org/TR/2015/REC-rdfa-core-20150317/",
  },
  {
    name: "Latest draft of Web MIDI API formally approved by the group",
    url: "http://www.w3.org/TR/2015/WD-webmidi-20150317/",
  },
  {
    name:
      "Latest draft of HTML+RDFa 1.1 - Second Edition formally approved by the group",
    url: "http://www.w3.org/TR/2015/REC-html-rdfa-20150317/",
  },
  {
    name:
      "Latest draft of RDFa Lite 1.1 - Second Edition formally approved by the group",
    url: "http://www.w3.org/TR/2015/REC-rdfa-lite-20150317/",
  },
  {
    name:
      "Latest draft of Public Identifiers for entity resolution in XHTML formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-xhtml-pubid-20150317/",
  },
  {
    name:
      "Latest draft of XHTML+RDFa 1.1 - Third Edition formally approved by the group",
    url: "http://www.w3.org/TR/2015/REC-xhtml-rdfa-20150317/",
  },
  {
    name:
      "Latest draft of HTML5 Image Description Extension (longdesc) formally approved by the group",
    url: "http://www.w3.org/TR/2015/REC-html-longdesc-20150226/",
  },
  {
    name:
      "Latest draft of Mobile Accessibility: How WCAG 2.0 and Other W3C/WAI Guidelines Apply to Mobile formally approved by the group",
    url: "http://www.w3.org/TR/2015/WD-mobile-accessibility-mapping-20150226/",
  },
  {
    name:
      "Latest draft of Linked Data Platform 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2015/REC-ldp-20150226/",
  },
  {
    name:
      "Latest draft of Data on the Web Best Practices Use Cases & Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-dwbp-ucr-20150224/",
  },
  {
    name:
      "Latest draft of Content Security Policy 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-CSP1-20150219/",
  },
  {
    name: "Latest draft of Server-Sent Events formally approved by the group",
    url: "http://www.w3.org/TR/2015/REC-eventsource-20150203/",
  },
  {
    name:
      "Latest draft of Authoring Techniques for XHTML & HTML Internationalization: Characters and Encodings 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-i18n-html-tech-char-20150127/",
  },
  {
    name:
      "Latest draft of Cognitive Accessibility User Research formally approved by the group",
    url: "http://www.w3.org/TR/2015/WD-coga-user-research-20150115/",
  },
  {
    name:
      "Latest draft of CSS Exclusions Module Level 1 formally approved by the group",
    url: "http://www.w3.org/TR/2015/WD-css3-exclusions-20150115/",
  },
  {
    name:
      "Latest draft of Compositing and Blending Level 1 formally approved by the group",
    url: "http://www.w3.org/TR/2015/CR-compositing-1-20150113/",
  },
  {
    name: "Latest draft of Indexed Database API formally approved by the group",
    url: "http://www.w3.org/TR/2015/REC-IndexedDB-20150108/",
  },
  {
    name:
      "Latest draft of DPUB IG Metadata Task Force Report formally approved by the group",
    url: "http://www.w3.org/TR/2015/NOTE-dpub-metadata-20150108/",
  },
  {
    name:
      "Latest draft of Microdata to RDF – Second Edition formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-microdata-rdf-20141216/",
  },
  {
    name:
      "Latest draft of HTML5 Differences from HTML4 formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-html5-diff-20141209/",
  },
  {
    name:
      "Latest draft of Digital Publishing Annotation Use Cases formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-dpub-annotation-uc-20141204/",
  },
  {
    name: "Latest draft of Fullscreen formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-fullscreen-20141118/",
  },
  {
    name: "Latest draft of Resource Priorities formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-resource-priorities-20141023/",
  },
  {
    name:
      "Latest draft of The CSS ‘Reader’ Media Type formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-css3-reader-20141014/",
  },
  {
    name:
      "Latest draft of Behavioral Extensions to CSS formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-becss-20141014/",
  },
  {
    name:
      "Latest draft of CSS Presentation Levels Module formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-css3-preslev-20141014/",
  },
  {
    name:
      "Latest draft of CSS Mobile Profile 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-css-mobile-20141014/",
  },
  {
    name:
      "Latest draft of CSS3 Hyperlink Presentation Module formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-css3-hyperlinks-20141014/",
  },
  {
    name: "Latest draft of CSS TV Profile 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-css-tv-20141014/",
  },
  {
    name:
      "Latest draft of CSS Marquee Module Level 3 formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-css3-marquee-20141014/",
  },
  {
    name:
      "Latest draft of CSS Regions Module Level 1 formally approved by the group",
    url: "http://www.w3.org/TR/2014/WD-css-regions-1-20141009/",
  },
  {
    name:
      "Latest draft of Uniform Messaging Policy, Level One formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-UMP-20141002/",
  },
  {
    name:
      "Latest draft of Requirements for Latin Text Layout and Pagination formally approved by the group",
    url: "http://www.w3.org/TR/2014/WD-dpub-latinreq-20140930/",
  },
  {
    name:
      "Latest draft of XQuery Scripting Extension 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-xquery-sx-10-20140918/",
  },
  {
    name:
      "Latest draft of CSS Line Grid Module Level 1 formally approved by the group",
    url: "http://www.w3.org/TR/2014/WD-css-line-grid-1-20140916/",
  },
  {
    name: "Latest draft of LDP Access Control formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-ldp-acr-20140916/",
  },
  {
    name:
      "Latest draft of Efficient XML Interchange (EXI) Profile for limiting usage of dynamic memory formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-exi-profile-20140909/",
  },
  {
    name:
      "Latest draft of Linked Data Platform Best Practices and Guidelines formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-ldp-bp-20140828/",
  },
  {
    name:
      "Latest draft of CSS Masking Module Level 1 formally approved by the group",
    url: "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/",
  },
  {
    name: "Latest draft of The srcset attribute formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-html-srcset-20140819/",
  },
  {
    name: "Latest draft of Wake Lock: Use cases formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-wake-lock-use-cases-20140814/",
  },
  {
    name:
      "Latest draft of Introduction to Web Components formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-components-intro-20140724/",
  },
  {
    name: "Latest draft of The picture Element formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-html-picture-element-20140722/",
  },
  {
    name:
      "Latest draft of Website Accessibility Conformance Evaluation Methodology (WCAG-EM) 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-WCAG-EM-20140710/",
  },
  {
    name: "Latest draft of RDF 1.1 Primer formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-rdf11-primer-20140624/",
  },
  {
    name:
      "Latest draft of Authoring HTML: Language declarations formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-i18n-html-tech-lang-20140603/",
  },
  {
    name:
      "Latest draft of Authoring HTML: Handling Right-to-left Scripts formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-i18n-html-tech-bidi-20140603/",
  },
  {
    name:
      "Latest draft of CSS Font Loading Module Level 3 formally approved by the group",
    url: "http://www.w3.org/TR/2014/WD-css-font-loading-3-20140522/",
  },
  {
    name:
      "Latest draft of Emotion Markup Language (EmotionML) 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-emotionml-20140522/",
  },
  {
    name:
      "Latest draft of vCard Ontology - for describing People and Organizations formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-vcard-rdf-20140522/",
  },
  {
    name:
      "Latest draft of CSS Generated Content for Paged Media Module formally approved by the group",
    url: "http://www.w3.org/TR/2014/WD-css-gcpm-3-20140513/",
  },
  {
    name:
      "Latest draft of File API: Directories and System formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-file-system-api-20140424/",
  },
  {
    name: "Latest draft of File API: Writer formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-file-writer-api-20140424/",
  },
  {
    name:
      "Latest draft of Efficient XML Interchange (EXI) Primer formally approved by the group",
    url: "http://www.w3.org/TR/2014/WD-exi-primer-20140424/",
  },
  {
    name:
      "Latest draft of Requirements for IndieUI: Events 1.0 and IndieUI: User Context 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2014/WD-indie-ui-requirements-20140422/",
  },
  {
    name: "Latest draft of SVG Integration formally approved by the group",
    url: "http://www.w3.org/TR/2014/WD-svg-integration-20140417/",
  },
  {
    name:
      "Latest draft of Mathematical Markup Language (MathML) Version 3.0 2nd Edition formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-MathML3-20140410/",
  },
  {
    name:
      "Latest draft of XML Entity Definitions for Characters (2nd Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-xml-entity-names-20140410/",
  },
  {
    name:
      "Latest draft of The Network Information API formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-netinfo-api-20140410/",
  },
  {
    name: "Latest draft of XQuery 3.0 Use Cases formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-xquery-30-use-cases-20140408/",
  },
  {
    name:
      "Latest draft of XQuery 3.0: An XML Query Language formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-xquery-30-20140408/",
  },
  {
    name:
      "Latest draft of XML Path Language (XPath) 3.0 formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-xpath-30-20140408/",
  },
  {
    name:
      "Latest draft of MBUI - Abstract User Interface Models formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-abstract-ui-20140408/",
  },
  {
    name: "Latest draft of MBUI - Task Models formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-task-models-20140408/",
  },
  {
    name:
      "Latest draft of XSLT and XQuery Serialization 3.0 formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-xslt-xquery-serialization-30-20140408/",
  },
  {
    name:
      "Latest draft of XQuery 3.0 Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-xquery-30-requirements-20140408/",
  },
  {
    name:
      "Latest draft of XQuery and XPath Data Model 3.0 formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-xpath-datamodel-30-20140408/",
  },
  {
    name: "Latest draft of XQueryX 3.0 formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-xqueryx-30-20140408/",
  },
  {
    name:
      "Latest draft of XPath and XQuery Functions and Operators 3.0 formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-xpath-functions-30-20140408/",
  },
  {
    name:
      "Latest draft of Review of apps that use network information formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-netinfo-usecases-20140403/",
  },
  {
    name:
      "Latest draft of CSS Scoping Module Level 1 formally approved by the group",
    url: "http://www.w3.org/TR/2014/WD-css-scoping-1-20140403/",
  },
  {
    name:
      "Latest draft of Vocabularies for EmotionML formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-emotion-voc-20140401/",
  },
  {
    name:
      "Latest draft of Accessible Rich Internet Applications (WAI-ARIA) 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-wai-aria-20140320/",
  },
  {
    name:
      "Latest draft of CSS Shapes Module Level 1 formally approved by the group",
    url: "http://www.w3.org/TR/2014/CR-css-shapes-1-20140320/",
  },
  {
    name:
      "Latest draft of CSS Namespaces Module Level 3 formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-css-namespaces-3-20140320/",
  },
  {
    name:
      "Latest draft of WAI-ARIA 1.0 User Agent Implementation Guide formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-wai-aria-implementation-20140320/",
  },
  {
    name: "Latest draft of HTML Templates formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-html-templates-20140318/",
  },
  {
    name:
      "Latest draft of Linked Data Platform Use Cases and Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-ldp-ucr-20140313/",
  },
  {
    name:
      "Latest draft of Metadata API for Media Resources 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-mediaont-api-1.0-20140313/",
  },
  {
    name: "Latest draft of RDF Schema 1.1 formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-rdf-schema-20140225/",
  },
  {
    name: "Latest draft of RDF 1.1 Test Cases formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-rdf11-testcases-20140225/",
  },
  {
    name: "Latest draft of RDF 1.1 Turtle formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-turtle-20140225/",
  },
  {
    name: "Latest draft of RDF 1.1 N-Quads formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-n-quads-20140225/",
  },
  {
    name: "Latest draft of RDF 1.1 TriG formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-trig-20140225/",
  },
  {
    name: "Latest draft of RDF 1.1 Semantics formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-rdf11-mt-20140225/",
  },
  {
    name:
      "Latest draft of RDF 1.1: On Semantics of RDF Datasets formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-rdf11-datasets-20140225/",
  },
  {
    name: "Latest draft of RDF 1.1 N-Triples formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-n-triples-20140225/",
  },
  {
    name:
      "Latest draft of What’s New in RDF 1.1 formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-rdf11-new-20140225/",
  },
  {
    name:
      "Latest draft of RDF 1.1 Concepts and Abstract Syntax formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/",
  },
  {
    name: "Latest draft of RDF 1.1 XML Syntax formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-rdf-syntax-grammar-20140225/",
  },
  {
    name:
      "Latest draft of Good Practices for Capability URLs formally approved by the group",
    url: "http://www.w3.org/TR/2014/WD-capability-urls-20140218/",
  },
  {
    name:
      "Latest draft of Efficient XML Interchange (EXI) Format 1.0 (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-exi-20140211/",
  },
  {
    name:
      "Latest draft of XML processor profiles formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-xml-proc-profiles-20140206/",
  },
  {
    name:
      "Latest draft of W3C HTML Ruby Markup Extensions formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-html-ruby-extensions-20140204/",
  },
  {
    name:
      "Latest draft of JSON-LD 1.0 Processing Algorithms and API formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-json-ld-api-20140116/",
  },
  {
    name:
      "Latest draft of The Organization Ontology formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-vocab-org-20140116/",
  },
  {
    name:
      "Latest draft of The RDF Data Cube Vocabulary formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-vocab-data-cube-20140116/",
  },
  {
    name: "Latest draft of JSON-LD 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2014/REC-json-ld-20140116/",
  },
  {
    name: "Latest draft of Pick Media Intent formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-gallery-20140114/",
  },
  {
    name: "Latest draft of The Messaging API formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-messaging-api-20140114/",
  },
  {
    name: "Latest draft of Pick Contacts Intent formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-contacts-api-20140114/",
  },
  {
    name: "Latest draft of Calendar API formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-calendar-api-20140114/",
  },
  {
    name:
      "Latest draft of Web Intents Addendum - Local Services formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-webintents-local-services-20140114/",
  },
  {
    name:
      "Latest draft of The System Information API formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-system-info-api-20140114/",
  },
  {
    name:
      "Latest draft of Best Practices for Publishing Linked Data formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-ld-bp-20140109/",
  },
  {
    name: "Latest draft of MBUI - Glossary formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-mbui-glossary-20140107/",
  },
  {
    name:
      "Latest draft of Introduction to Model-Based User Interfaces formally approved by the group",
    url: "http://www.w3.org/TR/2014/NOTE-mbui-intro-20140107/",
  },
  {
    name: "Latest draft of Performance Timeline formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-performance-timeline-20131212/",
  },
  {
    name: "Latest draft of CSS Style Attributes formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-css-style-attr-20131107/",
  },
  {
    name:
      "Latest draft of RDF 1.1 JSON Alternate Serialization (RDF/JSON) formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-rdf-json-20131107/",
  },
  {
    name:
      "Latest draft of Use Cases and Requirements for Standardizing Responsive Images formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-respimg-usecases-20131107/",
  },
  {
    name:
      "Latest draft of XProc V2.0 Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2013/WD-xproc-v2-req-20131105/",
  },
  {
    name:
      "Latest draft of Touch Events Extensions formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-touch-events-extensions-20131031/",
  },
  {
    name:
      "Latest draft of Internationalization Tag Set (ITS) Version 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-its20-20131029/",
  },
  {
    name:
      "Latest draft of Page Visibility (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-page-visibility-20131029/",
  },
  {
    name:
      "Latest draft of Selectors API Level 2 formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-selectors-api2-20131017/",
  },
  {
    name: "Latest draft of Touch Events formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-touch-events-20131010/",
  },
  {
    name:
      "Latest draft of Use Cases & Exploratory Approaches for Ruby Markup formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-ruby-use-cases-20131008/",
  },
  {
    name:
      "Latest draft of Web Cryptography API Use Cases formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-webcrypto-usecases-20130910/",
  },
  {
    name:
      "Latest draft of Guidance on Applying WCAG 2.0 to Non-Web Information and Communications Technologies (WCAG2ICT) formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-wcag2ict-20130905/",
  },
  {
    name:
      "Latest draft of Asset Description Metadata Schema (ADMS) formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-vocab-adms-20130801/",
  },
  {
    name:
      "Latest draft of Use Cases and Lessons for the Data Cube Vocabulary formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-vocab-data-cube-use-cases-20130801/",
  },
  {
    name:
      "Latest draft of Registered Organization Vocabulary formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-vocab-regorg-20130801/",
  },
  {
    name: "Latest draft of Linked Data Glossary formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-ld-glossary-20130627/",
  },
  {
    name:
      "Latest draft of EMMA: Extensible MultiModal Annotation markup language Version 1.1 formally approved by the group",
    url: "http://www.w3.org/TR/2013/WD-emma11-20130627/",
  },
  {
    name:
      "Latest draft of Test cases for Canonical XML 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-xml-c14n2-testcases-20130618/",
  },
  {
    name: "Latest draft of Widget Updates formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-widgets-updates-20130606/",
  },
  {
    name: "Latest draft of URLs in Data Primer formally approved by the group",
    url: "http://www.w3.org/TR/2013/WD-urls-in-data-20130604/",
  },
  {
    name:
      "Latest draft of main element - an HTML5 extension specification formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-html-main-element-20130528/",
  },
  {
    name:
      "Latest draft of HTML: The Markup Language (an HTML language reference) formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-html-markup-20130528/",
  },
  {
    name:
      "Latest draft of HTML5: Edition for Web Authors formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-html5-author-20130528/",
  },
  {
    name: "Latest draft of Web Intents formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-web-intents-20130523/",
  },
  {
    name:
      "Latest draft of Java language binding for Web IDL formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-WebIDL-Java-20130514/",
  },
  {
    name:
      "Latest draft of Linking Across Provenance Bundles formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-prov-links-20130430/",
  },
  {
    name:
      "Latest draft of PROV-XML: The PROV XML Schema formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-prov-xml-20130430/",
  },
  {
    name:
      "Latest draft of PROV-AQ: Provenance Access and Query formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-prov-aq-20130430/",
  },
  {
    name:
      "Latest draft of PROV-N: The Provenance Notation formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-prov-n-20130430/",
  },
  {
    name:
      "Latest draft of Constraints of the PROV Data Model formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-prov-constraints-20130430/",
  },
  {
    name:
      "Latest draft of Publishing and Linking on the Web formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-publishing-linking-20130430/",
  },
  {
    name:
      "Latest draft of PROV-O: The PROV Ontology formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-prov-o-20130430/",
  },
  {
    name:
      "Latest draft of Dublin Core to PROV Mapping formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-prov-dc-20130430/",
  },
  {
    name:
      "Latest draft of PROV-Dictionary: Modeling Provenance for Dictionary Data Structures formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-prov-dictionary-20130430/",
  },
  {
    name: "Latest draft of PROV-Overview formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-prov-overview-20130430/",
  },
  {
    name:
      "Latest draft of PROV-DM: The PROV Data Model formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-prov-dm-20130430/",
  },
  {
    name: "Latest draft of PROV Model Primer formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-prov-primer-20130430/",
  },
  {
    name:
      "Latest draft of PROV Implementation Report formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-prov-implementations-20130430/",
  },
  {
    name:
      "Latest draft of Semantics of the PROV Data Model formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-prov-sem-20130430/",
  },
  {
    name:
      "Latest draft of XML Security 1.1 Requirements and Design Considerations formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-xmlsec-reqs-20130411/",
  },
  {
    name:
      "Latest draft of Functional Explanation of Changes in XML Encryption 1.1 formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-xmlenc-core1-explain-20130411/",
  },
  {
    name:
      "Latest draft of XML Security 2.0 Requirements and Design Considerations formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-xmlsec-reqs2-20130411/",
  },
  {
    name:
      "Latest draft of XML Signature Properties formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-xmldsig-properties-20130411/",
  },
  {
    name:
      "Latest draft of XML Signature Best Practices formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-xmldsig-bestpractices-20130411/",
  },
  {
    name:
      "Latest draft of Canonical XML Version 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-xml-c14n2-20130411/",
  },
  {
    name:
      "Latest draft of XML Security RELAX NG Schemas formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-xmlsec-rngschema-20130411/",
  },
  {
    name:
      "Latest draft of XML Signature Syntax and Processing Version 1.1 formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-xmldsig-core1-20130411/",
  },
  {
    name:
      "Latest draft of XML Security Algorithm Cross-Reference formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-xmlsec-algorithms-20130411/",
  },
  {
    name:
      "Latest draft of XML Encryption 1.1 CipherReference Processing using 2.0 Transforms formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-xmlenc-transform20-20130411/",
  },
  {
    name:
      "Latest draft of XML Signature Streaming Profile of XPath 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-xmldsig-xpath-20130411/",
  },
  {
    name:
      "Latest draft of Functional Explanation of Changes in XML Signature 1.1 formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-xmldsig-core1-explain-20130411/",
  },
  {
    name:
      "Latest draft of XML Security Generic Hybrid Ciphers formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-xmlsec-generic-hybrid-20130411/",
  },
  {
    name:
      "Latest draft of XML Encryption Syntax and Processing Version 1.1 formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-xmlenc-core1-20130411/",
  },
  {
    name:
      "Latest draft of CSS Conditional Rules Module Level 3 formally approved by the group",
    url: "http://www.w3.org/TR/2013/CR-css3-conditional-20130404/",
  },
  {
    name: "Latest draft of Role Attribute 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-role-attribute-20130328/",
  },
  {
    name:
      "Latest draft of SPARQL 1.1 Query Language formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-sparql11-query-20130321/",
  },
  {
    name:
      "Latest draft of SPARQL 1.1 Entailment Regimes formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-sparql11-entailment-20130321/",
  },
  {
    name:
      "Latest draft of SPARQL 1.1 Query Results CSV and TSV Formats formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-sparql11-results-csv-tsv-20130321/",
  },
  {
    name:
      "Latest draft of SPARQL 1.1 Federated Query formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-sparql11-federated-query-20130321/",
  },
  {
    name:
      "Latest draft of SPARQL 1.1 Graph Store HTTP Protocol formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-sparql11-http-rdf-update-20130321/",
  },
  {
    name:
      "Latest draft of SPARQL 1.1 Query Results JSON Format formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-sparql11-results-json-20130321/",
  },
  {
    name: "Latest draft of SPARQL 1.1 Overview formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-sparql11-overview-20130321/",
  },
  {
    name:
      "Latest draft of SPARQL 1.1 Service Description formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-sparql11-service-description-20130321/",
  },
  {
    name:
      "Latest draft of SPARQL Query Results XML Format (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-rdf-sparql-XMLres-20130321/",
  },
  {
    name: "Latest draft of SPARQL 1.1 Update formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-sparql11-update-20130321/",
  },
  {
    name: "Latest draft of SPARQL 1.1 Protocol formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-sparql11-protocol-20130321/",
  },
  {
    name: "Latest draft of CSS Print Profile formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-css-print-20130314/",
  },
  {
    name:
      "Latest draft of Selectors API Level 1 formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-selectors-api-20130221/",
  },
  {
    name:
      "Latest draft of TTML Simple Delivery Profile for Closed Captions (US) formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-ttml10-sdp-us-20130205/",
  },
  {
    name:
      "Latest draft of RIF Core Dialect (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-rif-core-20130205/",
  },
  {
    name:
      "Latest draft of RIF Production Rule Dialect (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-rif-prd-20130205/",
  },
  {
    name:
      "Latest draft of RIF Datatypes and Built-Ins 1.0 (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-rif-dtb-20130205/",
  },
  {
    name:
      "Latest draft of RIF Primer (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-rif-primer-20130205/",
  },
  {
    name:
      "Latest draft of RIF Framework for Logic Dialects (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-rif-fld-20130205/",
  },
  {
    name:
      "Latest draft of RIF RDF and OWL Compatibility (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-rif-rdf-owl-20130205/",
  },
  {
    name:
      "Latest draft of RIF In RDF (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-rif-in-rdf-20130205/",
  },
  {
    name:
      "Latest draft of RIF Test Cases (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-rif-test-20130205/",
  },
  {
    name:
      "Latest draft of RIF Use Cases and Requirements (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-rif-ucr-20130205/",
  },
  {
    name:
      "Latest draft of RIF Overview (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-rif-overview-20130205/",
  },
  {
    name:
      "Latest draft of RIF Combination with XML data (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-rif-xml-data-20130205/",
  },
  {
    name:
      "Latest draft of RIF Basic Logic Dialect (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2013/REC-rif-bld-20130205/",
  },
  {
    name:
      "Latest draft of OWL 2 RL in RIF (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-rif-owl-rl-20130205/",
  },
  {
    name:
      "Latest draft of Web Audio Processing: Use Cases and Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2013/NOTE-webaudio-usecases-20130129/",
  },
  {
    name: "Latest draft of Navigation Timing formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-navigation-timing-20121217/",
  },
  {
    name: "Latest draft of WOFF File Format 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-WOFF-20121213/",
  },
  {
    name:
      "Latest draft of OWL 2 Web Ontology Language Conformance (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-owl2-conformance-20121211/",
  },
  {
    name:
      "Latest draft of OWL 2 Web Ontology Language Data Range Extension: Linear Equations (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-owl2-dr-linear-20121211/",
  },
  {
    name:
      "Latest draft of OWL 2 Web Ontology Language Quick Reference Guide (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-owl2-quick-reference-20121211/",
  },
  {
    name:
      "Latest draft of OWL 2 Web Ontology Language Manchester Syntax (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-owl2-manchester-syntax-20121211/",
  },
  {
    name:
      "Latest draft of OWL 2 Web Ontology Language RDF-Based Semantics (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-owl2-rdf-based-semantics-20121211/",
  },
  {
    name:
      "Latest draft of rdf:PlainLiteral: A Datatype for RDF Plain Literals (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-rdf-plain-literal-20121211/",
  },
  {
    name:
      "Latest draft of OWL 2 Web Ontology Language New Features and Rationale (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-owl2-new-features-20121211/",
  },
  {
    name:
      "Latest draft of OWL 2 Web Ontology Language XML Serialization (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-owl2-xml-serialization-20121211/",
  },
  {
    name:
      "Latest draft of OWL 2 Web Ontology Language Mapping to RDF Graphs (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-owl2-mapping-to-rdf-20121211/",
  },
  {
    name:
      "Latest draft of OWL 2 Web Ontology Language Document Overview (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-owl2-overview-20121211/",
  },
  {
    name:
      "Latest draft of OWL 2 Web Ontology Language Primer (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-owl2-primer-20121211/",
  },
  {
    name:
      "Latest draft of OWL 2 Web Ontology Language Direct Semantics (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-owl2-direct-semantics-20121211/",
  },
  {
    name:
      "Latest draft of OWL 2 Web Ontology Language Profiles (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-owl2-profiles-20121211/",
  },
  {
    name:
      "Latest draft of OWL 2 Web Ontology Language Structural Specification and Functional-Style Syntax (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-owl2-syntax-20121211/",
  },
  {
    name:
      "Latest draft of XML Encryption 1.1 Interop Test Report formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-xmlenc-core1-interop-20121113/",
  },
  {
    name:
      "Latest draft of XML Signature 1.1 Interop Test Report formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-xmldsig-core1-interop-20121113/",
  },
  {
    name:
      "Latest draft of Best Practices for Fragment Identifiers and Media Type Definitions formally approved by the group",
    url: "http://www.w3.org/TR/2012/WD-fragid-best-practices-20121025/",
  },
  {
    name:
      "Latest draft of Multimodal Architecture and Interfaces formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-mmi-arch-20121025/",
  },
  {
    name:
      "Latest draft of Associating Schemas with XML documents 1.0 (Third Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-xml-model-20121009/",
  },
  {
    name:
      "Latest draft of Web API Design Cookbook formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-api-design-20121002/",
  },
  {
    name:
      "Latest draft of R2RML: RDB to RDF Mapping Language formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-r2rml-20120927/",
  },
  {
    name:
      "Latest draft of A Direct Mapping of Relational Data to RDF formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-rdb-direct-mapping-20120927/",
  },
  {
    name:
      "Latest draft of Media Fragments URI 1.0 (basic) formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-media-frags-20120925/",
  },
  {
    name: "Latest draft of The WebSocket API formally approved by the group",
    url: "http://www.w3.org/TR/2012/CR-websockets-20120920/",
  },
  {
    name:
      "Latest draft of Research Report on Web Accessibility Metrics formally approved by the group",
    url: "http://www.w3.org/TR/2012/WD-accessibility-metrics-report-20120830/",
  },
  {
    name:
      "Latest draft of R2RML and Direct Mapping Test Cases formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-rdb2rdf-test-cases-20120814/",
  },
  {
    name:
      "Latest draft of RDB2RDF Implementation Report formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-rdb2rdf-implementations-20120814/",
  },
  {
    name:
      "Latest draft of XForms 2.0: XPath expression module formally approved by the group",
    url: "http://www.w3.org/TR/2012/WD-xforms-xpath-20120807/",
  },
  {
    name: "Latest draft of XForms 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2012/WD-xforms20-20120807/",
  },
  {
    name:
      "Latest draft of Registration & Discovery of Multimodal Modality Components in Multimodal Systems: Use Cases and Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-mmi-discovery-20120705/",
  },
  {
    name: "Latest draft of RDF Interfaces formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-rdf-interfaces-20120705/",
  },
  {
    name: "Latest draft of RDF API formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-rdf-api-20120705/",
  },
  {
    name: "Latest draft of RDFa API formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-rdfa-api-20120705/",
  },
  {
    name:
      "Latest draft of Web Application Privacy Best Practices formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-app-privacy-bp-20120703/",
  },
  {
    name: "Latest draft of Media Queries formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-css3-mediaqueries-20120619/",
  },
  {
    name:
      "Latest draft of MediaStream Processing API formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-streamproc-20120531/",
  },
  {
    name:
      "Latest draft of The From-Origin Header formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-from-origin-20120529/",
  },
  {
    name: "Latest draft of XBL 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-xbl-20120524/",
  },
  {
    name:
      "Latest draft of Web Services Internationalization (WS-I18N) formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-ws-i18n-20120522/",
  },
  {
    name:
      "Latest draft of W3C XML Schema Definition Language (XSD) 1.1 Part 1: Structures formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-xmlschema11-1-20120405/",
  },
  {
    name:
      "Latest draft of W3C XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-xmlschema11-2-20120405/",
  },
  {
    name:
      "Latest draft of Terms for describing people formally approved by the group",
    url: "http://www.w3.org/TR/2012/WD-vocab-people-20120405/",
  },
  {
    name:
      "Latest draft of Requirements for Japanese Text Layout formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-jlreq-20120403/",
  },
  {
    name: "Latest draft of SMIL Timesheets 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-timesheets-20120328/",
  },
  {
    name:
      "Latest draft of The Media Capture API formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-media-capture-api-20120322/",
  },
  {
    name: "Latest draft of Widget URI scheme formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-widgets-uri-20120313/",
  },
  {
    name: "Latest draft of HTML Data Guide formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-html-data-guide-20120308/",
  },
  {
    name:
      "Latest draft of MediaStream Capture Scenarios formally approved by the group",
    url: "http://www.w3.org/TR/2012/WD-capture-scenarios-20120306/",
  },
  {
    name:
      "Latest draft of SOAP over Java Message Service 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-soapjms-20120216/",
  },
  {
    name:
      "Latest draft of XInclude 1.1 Requirement and Use Cases formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-xinclude-11-requirements-20120214/",
  },
  {
    name:
      "Latest draft of Ontology for Media Resources 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2012/REC-mediaont-10-20120209/",
  },
  {
    name:
      "Latest draft of HTML/XML Task Force Report formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-html-xml-tf-report-20120209/",
  },
  {
    name:
      "Latest draft of Usage Patterns For Client-Side URI parameters formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-hash-in-uri-20120209/",
  },
  {
    name:
      "Latest draft of MMI interoperability test report formally approved by the group",
    url: "http://www.w3.org/TR/2012/NOTE-mmi-interop-20120124/",
  },
  {
    name:
      "Latest draft of Extensible Stylesheet Language (XSL) Version 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2012/WD-xslfo20-20120117/",
  },
  {
    name: "Latest draft of Audio Processing API formally approved by the group",
    url: "http://www.w3.org/TR/2011/WD-audioproc-20111215/",
  },
  {
    name:
      "Latest draft of Web Services Fragment (WS-Fragment) formally approved by the group",
    url: "http://www.w3.org/TR/2011/REC-ws-fragment-20111213/",
  },
  {
    name:
      "Latest draft of Web Services Enumeration (WS-Enumeration) formally approved by the group",
    url: "http://www.w3.org/TR/2011/REC-ws-enumeration-20111213/",
  },
  {
    name:
      "Latest draft of Web Services Event Descriptions (WS-EventDescriptions) formally approved by the group",
    url: "http://www.w3.org/TR/2011/REC-ws-event-descriptions-20111213/",
  },
  {
    name:
      "Latest draft of Web Services SOAP Assertions (WS-SOAPAssertions) formally approved by the group",
    url: "http://www.w3.org/TR/2011/REC-ws-soap-assertions-20111213/",
  },
  {
    name:
      "Latest draft of Web Services Metadata Exchange (WS-MetadataExchange) formally approved by the group",
    url: "http://www.w3.org/TR/2011/REC-ws-metadata-exchange-20111213/",
  },
  {
    name:
      "Latest draft of Web Services Eventing (WS-Eventing) formally approved by the group",
    url: "http://www.w3.org/TR/2011/REC-ws-eventing-20111213/",
  },
  {
    name:
      "Latest draft of Web Services Transfer (WS-Transfer) formally approved by the group",
    url: "http://www.w3.org/TR/2011/REC-ws-transfer-20111213/",
  },
  {
    name:
      "Latest draft of Protocol for Media Fragments 1.0 Resolution in HTTP formally approved by the group",
    url: "http://www.w3.org/TR/2011/WD-media-frags-recipes-20111201/",
  },
  {
    name:
      "Latest draft of Requirements for Home Networking Scenarios formally approved by the group",
    url: "http://www.w3.org/TR/2011/NOTE-hnreq-20111201/",
  },
  {
    name:
      "Latest draft of Ontology of Rhetorical Blocks (ORB) formally approved by the group",
    url: "http://www.w3.org/TR/2011/NOTE-hcls-orb-20111020/",
  },
  {
    name:
      "Latest draft of Requirement For Standardizing Widgets formally approved by the group",
    url: "http://www.w3.org/TR/2011/NOTE-widgets-reqs-20110927/",
  },
  {
    name:
      "Latest draft of Ink Markup Language (InkML) formally approved by the group",
    url: "http://www.w3.org/TR/2011/REC-InkML-20110920/",
  },
  {
    name:
      "Latest draft of Scalable Vector Graphics (SVG) 1.1 (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2011/REC-SVG11-20110816/",
  },
  {
    name:
      "Latest draft of Voice Browser Call Control: CCXML Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2011/REC-ccxml-20110705/",
  },
  {
    name:
      "Latest draft of Working with Time Zones formally approved by the group",
    url: "http://www.w3.org/TR/2011/NOTE-timezone-20110705/",
  },
  {
    name:
      "Latest draft of An XSD datatype for IEEE floating-point decimal formally approved by the group",
    url: "http://www.w3.org/TR/2011/NOTE-xsd-precisionDecimal-20110609/",
  },
  {
    name:
      "Latest draft of Unicode block names for use in XSD regular expressions formally approved by the group",
    url: "http://www.w3.org/TR/2011/NOTE-xsd-unicode-blocknames-20110609/",
  },
  {
    name:
      "Latest draft of A MathML for CSS Profile formally approved by the group",
    url: "http://www.w3.org/TR/2011/REC-mathml-for-css-20110607/",
  },
  {
    name:
      "Latest draft of Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification formally approved by the group",
    url: "http://www.w3.org/TR/2011/REC-CSS2-20110607/",
  },
  {
    name:
      "Latest draft of Cascading Style Sheets (CSS) Snapshot 2010 formally approved by the group",
    url: "http://www.w3.org/TR/2011/NOTE-css-2010-20110512/",
  },
  {
    name:
      "Latest draft of Points of Interest Core formally approved by the group",
    url: "http://www.w3.org/TR/2011/WD-poi-core-20110512/",
  },
  {
    name:
      "Latest draft of Cascading Style Sheets (CSS) Snapshot 2007 formally approved by the group",
    url: "http://www.w3.org/TR/2011/NOTE-css-beijing-20110512/",
  },
  {
    name:
      "Latest draft of Programmable HTTP Caching and Serving formally approved by the group",
    url: "http://www.w3.org/TR/2011/NOTE-DataCache-20110329/",
  },
  {
    name:
      "Latest draft of XQuery and XPath Full Text 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2011/REC-xpath-full-text-10-20110317/",
  },
  {
    name:
      "Latest draft of Device API Access Control Use Cases and Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2011/NOTE-dap-policy-reqs-20110317/",
  },
  {
    name:
      "Latest draft of XQuery Update Facility 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2011/REC-xquery-update-10-20110317/",
  },
  {
    name:
      "Latest draft of Describing Linked Datasets with the VoID Vocabulary formally approved by the group",
    url: "http://www.w3.org/TR/2011/NOTE-void-20110303/",
  },
  {
    name:
      "Latest draft of Best practices for creating MMI Modality Components formally approved by the group",
    url: "http://www.w3.org/TR/2011/NOTE-mmi-mcbp-20110301/",
  },
  {
    name:
      "Latest draft of XQuery Update Facility 1.0 Use Cases formally approved by the group",
    url: "http://www.w3.org/TR/2011/NOTE-xquery-update-10-use-cases-20110125/",
  },
  {
    name:
      "Latest draft of XQuery Update Facility 1.0 Requirements formally approved by the group",
    url:
      "http://www.w3.org/TR/2011/NOTE-xquery-update-10-requirements-20110125/",
  },
  {
    name:
      "Latest draft of XQuery and XPath Full Text 1.0 Requirements formally approved by the group",
    url:
      "http://www.w3.org/TR/2011/NOTE-xpath-full-text-10-requirements-20110125/",
  },
  {
    name:
      "Latest draft of XQuery and XPath Full Text 1.0 Use Cases formally approved by the group",
    url:
      "http://www.w3.org/TR/2011/NOTE-xpath-full-text-10-use-cases-20110125/",
  },
  {
    name:
      "Latest draft of Document Templating Steps for XProc formally approved by the group",
    url: "http://www.w3.org/TR/2011/NOTE-xproc-template-20110125/",
  },
  {
    name: "Latest draft of CURIE Syntax 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-curie-20101216/",
  },
  {
    name: "Latest draft of XFrames formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-xframes-20101216/",
  },
  {
    name: "Latest draft of XML Events 2 formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-xml-events2-20101216/",
  },
  {
    name: "Latest draft of XHTML™ 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-xhtml2-20101216/",
  },
  {
    name: "Latest draft of XHTML Access Module formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-xhtml-access-20101216/",
  },
  {
    name:
      "Latest draft of XHTML Role Attribute Module formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-xhtml-role-20101216/",
  },
  {
    name:
      "Latest draft of Voice Extensible Markup Language (VoiceXML) 3.0 formally approved by the group",
    url: "http://www.w3.org/TR/2010/WD-voicexml30-20101216/",
  },
  {
    name: "Latest draft of HLink formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-hlink-20101216/",
  },
  {
    name:
      "Latest draft of Mobile Web Application Best Practices formally approved by the group",
    url: "http://www.w3.org/TR/2010/REC-mwabp-20101214/",
  },
  {
    name:
      "Latest draft of XQuery 1.0 and XPath 2.0 Formal Semantics (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2010/REC-xquery-semantics-20101214/",
  },
  {
    name:
      "Latest draft of XQuery 1.0: An XML Query Language (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2010/REC-xquery-20101214/",
  },
  {
    name:
      "Latest draft of XML Path Language (XPath) 2.0 (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2010/REC-xpath20-20101214/",
  },
  {
    name:
      "Latest draft of XSLT 2.0 and XQuery 1.0 Serialization (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2010/REC-xslt-xquery-serialization-20101214/",
  },
  {
    name:
      "Latest draft of XML Syntax for XQuery 1.0 (XQueryX) (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2010/REC-xqueryx-20101214/",
  },
  {
    name:
      "Latest draft of XQuery 1.0 and XPath 2.0 Data Model (XDM) (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2010/REC-xpath-datamodel-20101214/",
  },
  {
    name:
      "Latest draft of XQuery 1.0 and XPath 2.0 Functions and Operators (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2010/REC-xpath-functions-20101214/",
  },
  {
    name: "Latest draft of Web SQL Database formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-webdatabase-20101118/",
  },
  {
    name:
      "Latest draft of Associating Style Sheets with XML documents 1.0 (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2010/REC-xml-stylesheet-20101028/",
  },
  {
    name:
      "Latest draft of Guidelines for Web Content Transformation Proxies 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-ct-guidelines-20101026/",
  },
  {
    name:
      "Latest draft of Speech Synthesis Markup Language (SSML) Version 1.1 formally approved by the group",
    url: "http://www.w3.org/TR/2010/REC-speech-synthesis11-20100907/",
  },
  {
    name: "Latest draft of WICD Full 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-WICDFull-20100819/",
  },
  {
    name: "Latest draft of WICD Mobile 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-WICDMobile-20100819/",
  },
  {
    name:
      "Latest draft of Compound Document by Reference Framework 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-CDR-20100819/",
  },
  {
    name: "Latest draft of WICD Core 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-WICD-20100819/",
  },
  {
    name:
      "Latest draft of Web Security Context: User Interface Guidelines formally approved by the group",
    url: "http://www.w3.org/TR/2010/REC-wsc-ui-20100812/",
  },
  {
    name:
      "Latest draft of Web Services Resource Transfer (WS-RT) formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-ws-resource-transfer-20100713/",
  },
  {
    name:
      "Latest draft of Delivery Context: Client Interfaces (DCCI) 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-DPF-20100629/",
  },
  {
    name:
      "Latest draft of Content Selection for Device Independence (DISelect) 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-cselection-20100629/",
  },
  {
    name:
      "Latest draft of Delivery Context Ontology formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-dcontology-20100629/",
  },
  {
    name:
      "Latest draft of Device Independent Authoring Language (DIAL) formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-dial-20100629/",
  },
  {
    name:
      "Latest draft of Content Selection Primer 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-cselection-primer-20100629/",
  },
  {
    name: "Latest draft of DIAL Part 0: Primer formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-dial-primer-20100629/",
  },
  {
    name:
      "Latest draft of Delivery Context: XPath Access Functions 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-cselection-xaf-20100629/",
  },
  {
    name:
      "Latest draft of Composite Capability/Preference Profiles (CC/PP): Structure and Vocabularies 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-CCPP-struct-vocab2-20100629/",
  },
  {
    name:
      "Latest draft of Device API Privacy Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-dap-privacy-reqs-20100629/",
  },
  {
    name:
      "Latest draft of Requirements and Use Cases for XSLT 2.1 formally approved by the group",
    url: "http://www.w3.org/TR/2010/WD-xslt-21-requirements-20100610/",
  },
  {
    name:
      "Latest draft of Use Cases and Requirements for Mapping Relational Databases to RDF formally approved by the group",
    url: "http://www.w3.org/TR/2010/WD-rdb2rdf-ucr-20100608/",
  },
  {
    name:
      "Latest draft of XProc: An XML Pipeline Language formally approved by the group",
    url: "http://www.w3.org/TR/2010/REC-xproc-20100511/",
  },
  {
    name:
      "Latest draft of XML Linking Language (XLink) Version 1.1 formally approved by the group",
    url: "http://www.w3.org/TR/2010/REC-xlink11-20100506/",
  },
  {
    name: "Latest draft of WebCGM 2.1 formally approved by the group",
    url: "http://www.w3.org/TR/2010/REC-webcgm21-20100301/",
  },
  {
    name:
      "Latest draft of XML Signature Transform Simplification: Requirements and Design formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-xmldsig-simplify-20100204/",
  },
  {
    name:
      "Latest draft of A Method for Writing Testable Conformance Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2010/NOTE-test-methodology-20100128/",
  },
  {
    name:
      "Latest draft of SPARQL 1.1 Property Paths formally approved by the group",
    url: "http://www.w3.org/TR/2010/WD-sparql11-property-paths-20100126/",
  },
  {
    name:
      "Latest draft of Use Cases and Requirements for Ontology and API for Media Resource 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2010/WD-media-annot-reqs-20100121/",
  },
  {
    name:
      "Latest draft of W3C XML Schema Definition Language (XSD): Component Designators formally approved by the group",
    url: "http://www.w3.org/TR/2010/CR-xmlschema-ref-20100119/",
  },
  {
    name:
      "Latest draft of Use cases and requirements for Media Fragments formally approved by the group",
    url: "http://www.w3.org/TR/2009/WD-media-frags-reqs-20091217/",
  },
  {
    name:
      "Latest draft of Use Cases for Possible Future EMMA Features formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-emma-usecases-20091215/",
  },
  {
    name:
      "Latest draft of Namespaces in XML 1.0 (Third Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2009/REC-xml-names-20091208/",
  },
  {
    name:
      "Latest draft of Mobile Web for Social Development Roadmap formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-mw4d-roadmap-20091208/",
  },
  {
    name:
      "Latest draft of PICS 1.1 Label Distribution -- Label Syntax and Communication Protocols formally approved by the group",
    url: "http://www.w3.org/TR/2009/REC-PICS-labels-20091124/",
  },
  {
    name:
      "Latest draft of PICS 1.1 Rating Services and Rating Systems -- and Their Machine Readable Descriptions formally approved by the group",
    url: "http://www.w3.org/TR/2009/REC-PICS-services-20091124/",
  },
  {
    name:
      "Latest draft of PICS Signed Labels (DSig) 1.0 Specification formally approved by the group",
    url: "http://www.w3.org/TR/2009/REC-DSig-label-20091124/",
  },
  {
    name:
      "Latest draft of PICSRules 1.1 Specification formally approved by the group",
    url: "http://www.w3.org/TR/2009/REC-PICSRules-20091124/",
  },
  {
    name:
      "Latest draft of Content Transformation Landscape 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-ct-landscape-20091027/",
  },
  {
    name:
      "Latest draft of The SML XLink Reference Scheme formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-sml-xlink-ref-scheme-20091023/",
  },
  {
    name:
      "Latest draft of Extended Guidelines for Mobile Web Best Practices 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-mwbp-guidelines-20091020/",
  },
  {
    name: "Latest draft of XForms 1.1 formally approved by the group",
    url: "http://www.w3.org/TR/2009/REC-xforms-20091020/",
  },
  {
    name:
      "Latest draft of SIOC, SIOC Types and Health Care and Life Sciences formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-hcls-sioc-20091020/",
  },
  {
    name:
      "Latest draft of Semantic Web Applications in Neuromedicine (SWAN) Ontology formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-hcls-swan-20091020/",
  },
  {
    name:
      "Latest draft of SWAN/SIOC: Alignment Between the SWAN and SIOC Ontologies formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-hcls-swansioc-20091020/",
  },
  {
    name:
      "Latest draft of Device APIs Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-dap-api-reqs-20091015/",
  },
  {
    name:
      "Latest draft of SVG Color 1.2, Part 1: Primer formally approved by the group",
    url: "http://www.w3.org/TR/2009/WD-SVGColorPrimer12-20091001/",
  },
  {
    name:
      "Latest draft of SVG Color 1.2, Part 2: Language formally approved by the group",
    url: "http://www.w3.org/TR/2009/WD-SVGColor12-20091001/",
  },
  {
    name:
      "Latest draft of Requirements for String Identity Matching and String Indexing formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-charreq-20090915/",
  },
  {
    name:
      "Latest draft of Protocol for Web Description Resources (POWDER): Test Suite formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-powder-test-20090910/",
  },
  {
    name:
      "Latest draft of Publishing Open Government Data formally approved by the group",
    url: "http://www.w3.org/TR/2009/WD-gov-data-20090908/",
  },
  {
    name:
      "Latest draft of Protocol for Web Description Resources (POWDER): Grouping of Resources formally approved by the group",
    url: "http://www.w3.org/TR/2009/REC-powder-grouping-20090901/",
  },
  {
    name:
      "Latest draft of Protocol for Web Description Resources (POWDER): Primer formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-powder-primer-20090901/",
  },
  {
    name:
      "Latest draft of Protocol for Web Description Resources (POWDER): Description Resources formally approved by the group",
    url: "http://www.w3.org/TR/2009/REC-powder-dr-20090901/",
  },
  {
    name:
      "Latest draft of Protocol for Web Description Resources (POWDER): Formal Semantics formally approved by the group",
    url: "http://www.w3.org/TR/2009/REC-powder-formal-20090901/",
  },
  {
    name:
      "Latest draft of W3C mobileOK Scheme 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-mobileOK-20090825/",
  },
  {
    name:
      "Latest draft of SKOS Simple Knowledge Organization System Primer formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-skos-primer-20090818/",
  },
  {
    name:
      "Latest draft of SKOS Simple Knowledge Organization System Reference formally approved by the group",
    url: "http://www.w3.org/TR/2009/REC-skos-reference-20090818/",
  },
  {
    name:
      "Latest draft of SKOS Use Cases and Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-skos-ucr-20090818/",
  },
  {
    name:
      "Latest draft of XML Security Derived Keys formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-xmlsec-derivedkeys-20090730/",
  },
  {
    name:
      "Latest draft of Relationship between Mobile Web Best Practices (MWBP) and Web Content Accessibility Guidelines (WCAG) formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-mwbp-wcag-20090709/",
  },
  {
    name:
      "Latest draft of SPARQL New Features and Rationale formally approved by the group",
    url: "http://www.w3.org/TR/2009/WD-sparql-features-20090702/",
  },
  {
    name:
      "Latest draft of Framework for SML EPR-Based Reference Schemes formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-sml-epr-ref-scheme-20090630/",
  },
  {
    name:
      "Latest draft of SVG Parameters 1.0, Part 2: Language formally approved by the group",
    url: "http://www.w3.org/TR/2009/WD-SVGParam-20090616/",
  },
  {
    name:
      "Latest draft of SVG Parameters 1.0, Part 1: Primer formally approved by the group",
    url: "http://www.w3.org/TR/2009/WD-SVGParamPrimer-20090616/",
  },
  {
    name:
      "Latest draft of Improving Access to Government through Better Use of the Web formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-egov-improving-20090512/",
  },
  {
    name:
      "Latest draft of Service Modeling Language Interchange Format Version 1.1 formally approved by the group",
    url: "http://www.w3.org/TR/2009/REC-sml-if-20090512/",
  },
  {
    name:
      "Latest draft of Guidelines for writing device independent tests formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-di-testing-20090512/",
  },
  {
    name:
      "Latest draft of Service Modeling Language, Version 1.1 formally approved by the group",
    url: "http://www.w3.org/TR/2009/REC-sml-20090512/",
  },
  {
    name:
      "Latest draft of Basic XML Schema Patterns for Databinding Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-xmlschema-patterns-20090505/",
  },
  {
    name:
      "Latest draft of Advanced XML Schema Patterns for Databinding Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-xmlschema-patterns-advanced-20090505/",
  },
  {
    name:
      "Latest draft of XSL Transformations (XSLT) Version 2.0 (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2009/PER-xslt20-20090421/",
  },
  {
    name:
      "Latest draft of W3C Personalization Roadmap: Ubiquitous Web Integration of AccessForAll 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-UWA-personalization-roadmap-20090409/",
  },
  {
    name:
      "Latest draft of Efficient XML Interchange Evaluation formally approved by the group",
    url: "http://www.w3.org/TR/2009/WD-exi-evaluation-20090407/",
  },
  {
    name:
      "Latest draft of SVG Transforms 1.0, Part 2: Language formally approved by the group",
    url: "http://www.w3.org/TR/2009/WD-SVG-Transforms-20090320/",
  },
  {
    name:
      "Latest draft of EMMA: Extensible MultiModal Annotation markup language formally approved by the group",
    url: "http://www.w3.org/TR/2009/REC-emma-20090210/",
  },
  {
    name:
      "Latest draft of XML Base (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2009/REC-xmlbase-20090128/",
  },
  {
    name:
      "Latest draft of XHTML Media Types - Second Edition formally approved by the group",
    url: "http://www.w3.org/TR/2009/NOTE-xhtml-media-types-20090116/",
  },
  {
    name:
      "Latest draft of Element Traversal Specification formally approved by the group",
    url: "http://www.w3.org/TR/2008/REC-ElementTraversal-20081222/",
  },
  {
    name:
      "Latest draft of Scalable Vector Graphics (SVG) Tiny 1.2 Specification formally approved by the group",
    url: "http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/",
  },
  {
    name: "Latest draft of XForms for HTML formally approved by the group",
    url: "http://www.w3.org/TR/2008/WD-XForms-for-HTML-20081219/",
  },
  {
    name:
      "Latest draft of Web Content Accessibility Guidelines (WCAG) 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2008/REC-WCAG20-20081211/",
  },
  {
    name:
      "Latest draft of W3C mobileOK Basic Tests 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2008/REC-mobileOK-basic10-tests-20081208/",
  },
  {
    name:
      "Latest draft of Device Description Repository Simple API formally approved by the group",
    url: "http://www.w3.org/TR/2008/REC-DDR-Simple-API-20081205/",
  },
  {
    name:
      "Latest draft of Device Description Structures formally approved by the group",
    url: "http://www.w3.org/TR/2008/WD-dd-structures-20081205/",
  },
  {
    name:
      "Latest draft of Cool URIs for the Semantic Web formally approved by the group",
    url: "http://www.w3.org/TR/2008/NOTE-cooluris-20081203/",
  },
  {
    name:
      "Latest draft of Synchronized Multimedia Integration Language (SMIL 3.0) formally approved by the group",
    url: "http://www.w3.org/TR/2008/REC-SMIL3-20081201/",
  },
  {
    name:
      "Latest draft of Extensible Markup Language (XML) 1.0 (Fifth Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2008/REC-xml-20081126/",
  },
  {
    name:
      "Latest draft of Legacy extended IRIs for XML resource identification formally approved by the group",
    url: "http://www.w3.org/TR/2008/NOTE-leiri-20081103/",
  },
  {
    name:
      "Latest draft of Pronunciation Lexicon Specification (PLS) Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2008/REC-pronunciation-lexicon-20081014/",
  },
  {
    name:
      "Latest draft of Efficient XML Interchange (EXI) Impacts formally approved by the group",
    url: "http://www.w3.org/TR/2008/WD-exi-impacts-20080903/",
  },
  {
    name:
      "Latest draft of Best Practice Recipes for Publishing RDF Vocabularies formally approved by the group",
    url: "http://www.w3.org/TR/2008/NOTE-swbp-vocab-pub-20080828/",
  },
  {
    name:
      "Latest draft of Voice Extensible Markup Language (VoiceXML) 3.0 Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2008/WD-vxml30reqs-20080808/",
  },
  {
    name:
      "Latest draft of Mobile Web Best Practices 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2008/REC-mobile-bp-20080729/",
  },
  {
    name:
      "Latest draft of Authoring Applications for the Multimodal Architecture formally approved by the group",
    url: "http://www.w3.org/TR/2008/NOTE-mmi-auth-20080702/",
  },
  {
    name:
      "Latest draft of HTML 5 Publication Notes formally approved by the group",
    url: "http://www.w3.org/TR/2008/NOTE-html5-pubnotes-20080610/",
  },
  {
    name:
      "Latest draft of Test Cases for C14N 1.1 and XMLDSig Interoperability formally approved by the group",
    url: "http://www.w3.org/TR/2008/NOTE-xmldsig2ed-tests-20080610/",
  },
  {
    name:
      "Latest draft of A Prototype Knowledge Base for the Life Sciences formally approved by the group",
    url: "http://www.w3.org/TR/2008/NOTE-hcls-kb-20080604/",
  },
  {
    name:
      "Latest draft of Experiences with the conversion of SenseLab databases to RDF/OWL formally approved by the group",
    url: "http://www.w3.org/TR/2008/NOTE-hcls-senselab-20080604/",
  },
  {
    name:
      "Latest draft of Offline Web Applications formally approved by the group",
    url: "http://www.w3.org/TR/2008/NOTE-offline-webapps-20080530/",
  },
  {
    name:
      "Latest draft of Web Accessibility for Older Users: A Literature Review formally approved by the group",
    url: "http://www.w3.org/TR/2008/WD-wai-age-literature-20080514/",
  },
  {
    name:
      "Latest draft of Canonical XML Version 1.1 formally approved by the group",
    url: "http://www.w3.org/TR/2008/REC-xml-c14n11-20080502/",
  },
  {
    name:
      "Latest draft of Widgets 1.0: The Widget Landscape (Q1 2008) formally approved by the group",
    url: "http://www.w3.org/TR/2008/WD-widgets-land-20080414/",
  },
  {
    name:
      "Latest draft of Device Description Repository Core Vocabulary formally approved by the group",
    url: "http://www.w3.org/TR/2008/NOTE-ddr-core-vocabulary-20080414/",
  },
  {
    name:
      "Latest draft of Extensible Stylesheet Language (XSL) Requirements Version 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2008/WD-xslfo20-req-20080326/",
  },
  {
    name:
      "Latest draft of Web Security Experience, Indicators and Trust: Scope and Use Cases formally approved by the group",
    url: "http://www.w3.org/TR/2008/NOTE-wsc-usecases-20080306/",
  },
  {
    name:
      "Latest draft of Best Practices for XML Internationalization formally approved by the group",
    url: "http://www.w3.org/TR/2008/NOTE-xml-i18n-bp-20080213/",
  },
  {
    name:
      "Latest draft of Roadmap for Accessible Rich Internet Applications (WAI-ARIA Roadmap) formally approved by the group",
    url: "http://www.w3.org/TR/2008/WD-wai-aria-roadmap-20080204/",
  },
  {
    name:
      "Latest draft of SPARQL Protocol for RDF formally approved by the group",
    url: "http://www.w3.org/TR/2008/REC-rdf-sparql-protocol-20080115/",
  },
  {
    name:
      "Latest draft of SPARQL Query Language for RDF formally approved by the group",
    url: "http://www.w3.org/TR/2008/REC-rdf-sparql-query-20080115/",
  },
  {
    name:
      "Latest draft of SVG Print 1.2, Part 2: Language formally approved by the group",
    url: "http://www.w3.org/TR/2007/WD-SVGPrint12-20071221/",
  },
  {
    name:
      "Latest draft of SVG Print 1.2, Part 1: Primer formally approved by the group",
    url: "http://www.w3.org/TR/2007/WD-SVGPrintPrimer12-20071221/",
  },
  {
    name:
      "Latest draft of Efficient XML Interchange (EXI) Best Practices formally approved by the group",
    url: "http://www.w3.org/TR/2007/WD-exi-best-practices-20071219/",
  },
  {
    name:
      "Latest draft of Device Description Repository Requirements 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2007/NOTE-DDR-requirements-20071217/",
  },
  {
    name:
      "Latest draft of HTML Design Principles formally approved by the group",
    url: "http://www.w3.org/TR/2007/WD-html-design-principles-20071126/",
  },
  {
    name:
      "Latest draft of Web Services Policy 1.5 - Guidelines for Policy Assertion Authors formally approved by the group",
    url: "http://www.w3.org/TR/2007/NOTE-ws-policy-guidelines-20071112/",
  },
  {
    name:
      "Latest draft of Web Services Policy 1.5 - Primer formally approved by the group",
    url: "http://www.w3.org/TR/2007/NOTE-ws-policy-primer-20071112/",
  },
  {
    name:
      "Latest draft of Web User Interaction: Threat Trees formally approved by the group",
    url: "http://www.w3.org/TR/2007/NOTE-wsc-threats-20071101/",
  },
  {
    name:
      "Latest draft of POWDER: Use Cases and Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2007/NOTE-powder-use-cases-20071031/",
  },
  {
    name:
      "Latest draft of User Agent Accessibility Guidelines 2.0 Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2007/WD-UAAG20-requirements-20071031/",
  },
  {
    name:
      "Latest draft of Device Description Ecosystem 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2007/NOTE-dd-ecosystem-20071031/",
  },
  {
    name:
      "Latest draft of Device Description Landscape 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2007/NOTE-dd-landscape-20071031/",
  },
  {
    name:
      "Latest draft of Protocol for Web Description Resources (POWDER): Web Description Resources (WDR) Vocabulary formally approved by the group",
    url: "http://www.w3.org/TR/2007/WD-powder-voc-20070925/",
  },
  {
    name:
      "Latest draft of Protocol for Web Description Resources (POWDER): Web Description Resources Datatypes (WDRD) formally approved by the group",
    url: "http://www.w3.org/TR/2007/WD-powder-xsd-20070925/",
  },
  {
    name:
      "Latest draft of MTOM Serialization Policy Assertion 1.1 formally approved by the group",
    url: "http://www.w3.org/TR/2007/WD-soap12-mtom-policy-20070918/",
  },
  {
    name:
      "Latest draft of Declarative Formats for Applications and User Interfaces formally approved by the group",
    url: "http://www.w3.org/TR/2007/NOTE-dfaui-20070912/",
  },
  {
    name: "Latest draft of GRDDL Test Cases formally approved by the group",
    url: "http://www.w3.org/TR/2007/REC-grddl-tests-20070911/",
  },
  {
    name:
      "Latest draft of Gleaning Resource Descriptions from Dialects of Languages (GRDDL) formally approved by the group",
    url: "http://www.w3.org/TR/2007/REC-grddl-20070911/",
  },
  {
    name:
      "Latest draft of Web Services Addressing 1.0 - Metadata formally approved by the group",
    url: "http://www.w3.org/TR/2007/REC-ws-addr-metadata-20070904/",
  },
  {
    name:
      "Latest draft of Web Services Policy 1.5 - Attachment formally approved by the group",
    url: "http://www.w3.org/TR/2007/REC-ws-policy-attach-20070904/",
  },
  {
    name:
      "Latest draft of Web Services Policy 1.5 - Framework formally approved by the group",
    url: "http://www.w3.org/TR/2007/REC-ws-policy-20070904/",
  },
  {
    name:
      "Latest draft of Semantic Annotations for WSDL and XML Schema formally approved by the group",
    url: "http://www.w3.org/TR/2007/REC-sawsdl-20070828/",
  },
  {
    name:
      "Latest draft of Semantic Annotations for WSDL and XML Schema — Usage Guide formally approved by the group",
    url: "http://www.w3.org/TR/2007/NOTE-sawsdl-guide-20070828/",
  },
  {
    name:
      "Latest draft of Efficient XML Interchange Measurements Note formally approved by the group",
    url: "http://www.w3.org/TR/2007/WD-exi-measurements-20070725/",
  },
  {
    name:
      "Latest draft of WSDL 1.1 Element Identifiers formally approved by the group",
    url: "http://www.w3.org/TR/2007/NOTE-wsdl11elementidentifiers-20070720/",
  },
  {
    name:
      "Latest draft of Guide to Versioning XML Languages using new XML Schema 1.1 features formally approved by the group",
    url: "http://www.w3.org/TR/2007/WD-xmlschema-guide2versioning-20070720/",
  },
  {
    name:
      "Latest draft of XBL 2.0 Primer: An Introduction for Developers formally approved by the group",
    url: "http://www.w3.org/TR/2007/WD-xbl-primer-20070718/",
  },
  {
    name:
      "Latest draft of SOAP 1.2 Part 3: One-Way MEP formally approved by the group",
    url: "http://www.w3.org/TR/2007/NOTE-soap12-part3-20070702/",
  },
  {
    name: "Latest draft of GRDDL Primer formally approved by the group",
    url: "http://www.w3.org/TR/2007/NOTE-grddl-primer-20070628/",
  },
  {
    name:
      "Latest draft of Web Services Description Language (WSDL) Version 2.0: Additional MEPs formally approved by the group",
    url: "http://www.w3.org/TR/2007/NOTE-wsdl20-additional-meps-20070626/",
  },
  {
    name:
      "Latest draft of Web Services Description Language (WSDL) Version 2.0 Part 0: Primer formally approved by the group",
    url: "http://www.w3.org/TR/2007/REC-wsdl20-primer-20070626/",
  },
  {
    name:
      "Latest draft of Web Services Description Language (WSDL) Version 2.0 Part 1: Core Language formally approved by the group",
    url: "http://www.w3.org/TR/2007/REC-wsdl20-20070626/",
  },
  {
    name:
      "Latest draft of Web Services Description Language (WSDL) Version 2.0: RDF Mapping formally approved by the group",
    url: "http://www.w3.org/TR/2007/NOTE-wsdl20-rdf-20070626/",
  },
  {
    name:
      "Latest draft of Web Services Description Language (WSDL) Version 2.0 SOAP 1.1 Binding formally approved by the group",
    url: "http://www.w3.org/TR/2007/NOTE-wsdl20-soap11-binding-20070626/",
  },
  {
    name:
      "Latest draft of Web Services Description Language (WSDL) Version 2.0 Part 2: Adjuncts formally approved by the group",
    url: "http://www.w3.org/TR/2007/REC-wsdl20-adjuncts-20070626/",
  },
  {
    name:
      "Latest draft of Voice Extensible Markup Language (VoiceXML) 2.1 formally approved by the group",
    url: "http://www.w3.org/TR/2007/REC-voicexml21-20070619/",
  },
  {
    name:
      "Latest draft of Serializing SPARQL Query Results in JSON formally approved by the group",
    url: "http://www.w3.org/TR/2007/NOTE-rdf-sparql-json-res-20070618/",
  },
  {
    name:
      "Latest draft of Speech Synthesis Markup Language Version 1.1 Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2007/WD-ssml11reqs-20070611/",
  },
  {
    name:
      "Latest draft of SVG Filters 1.2, Part 2: Language formally approved by the group",
    url: "http://www.w3.org/TR/2007/WD-SVGFilter12-20070501/",
  },
  {
    name:
      "Latest draft of SVG Filters 1.2, Part 1: Primer formally approved by the group",
    url: "http://www.w3.org/TR/2007/WD-SVGFilterPrimer12-20070501/",
  },
  {
    name:
      "Latest draft of SOAP Version 1.2 Specification Assertions and Test Collection (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2007/REC-soap12-testcollection-20070427/",
  },
  {
    name:
      "Latest draft of SOAP Version 1.2 Part 1: Messaging Framework (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2007/REC-soap12-part1-20070427/",
  },
  {
    name:
      "Latest draft of SOAP Version 1.2 Part 0: Primer (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2007/REC-soap12-part0-20070427/",
  },
  {
    name:
      "Latest draft of SOAP Version 1.2 Part 2: Adjuncts (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2007/REC-soap12-part2-20070427/",
  },
  {
    name:
      "Latest draft of GRDDL Use Cases: Scenarios of extracting RDF data from XML documents formally approved by the group",
    url: "http://www.w3.org/TR/2007/NOTE-grddl-scenarios-20070406/",
  },
  {
    name:
      "Latest draft of Semantic Interpretation for Speech Recognition (SISR) Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2007/REC-semantic-interpretation-20070405/",
  },
  {
    name:
      "Latest draft of Internationalization Tag Set (ITS) Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2007/REC-its-20070403/",
  },
  {
    name:
      "Latest draft of RDFa Use Cases: Scenarios for Embedding RDF in HTML formally approved by the group",
    url: "http://www.w3.org/TR/2007/WD-xhtml-rdfa-scenarios-20070330/",
  },
  {
    name: "Latest draft of XML Query Use Cases formally approved by the group",
    url: "http://www.w3.org/TR/2007/NOTE-xquery-use-cases-20070323/",
  },
  {
    name:
      "Latest draft of XML Query (XQuery) Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2007/NOTE-xquery-requirements-20070323/",
  },
  {
    name:
      "Latest draft of XSL Transformations (XSLT) Version 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2007/REC-xslt20-20070123/",
  },
  {
    name:
      "Latest draft of Known Issues with Canonical XML 1.0 (C14N/1.0) formally approved by the group",
    url: "http://www.w3.org/TR/2006/NOTE-C14N-issues-20061220/",
  },
  {
    name:
      "Latest draft of Using XML Digital Signatures in the 2006 XML Environment formally approved by the group",
    url: "http://www.w3.org/TR/2006/NOTE-DSig-usage-20061220/",
  },
  {
    name:
      "Latest draft of Extensible Stylesheet Language (XSL) Version 1.1 formally approved by the group",
    url: "http://www.w3.org/TR/2006/REC-xsl11-20061205/",
  },
  {
    name:
      "Latest draft of Rich Web Application Backplane formally approved by the group",
    url: "http://www.w3.org/TR/2006/NOTE-backplane-20061116/",
  },
  {
    name:
      "Latest draft of XML Inclusions (XInclude) Version 1.0 (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2006/REC-xinclude-20061115/",
  },
  {
    name:
      "Latest draft of Remote Events for XML (REX) 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2006/WD-rex-20061013/",
  },
  {
    name:
      "Latest draft of Common Sense Suggestions for Developing Multimodal User Interfaces formally approved by the group",
    url: "http://www.w3.org/TR/2006/NOTE-mmi-suggestions-20060911/",
  },
  {
    name:
      "Latest draft of Namespaces in XML 1.1 (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2006/REC-xml-names11-20060816/",
  },
  {
    name:
      "Latest draft of Extensible Markup Language (XML) 1.1 (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2006/REC-xml11-20060816/",
  },
  {
    name:
      "Latest draft of SVGT 1.2 Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2006/WD-SVGTiny12Reqs-20060810/",
  },
  {
    name:
      "Latest draft of RDF/OWL Representation of WordNet formally approved by the group",
    url: "http://www.w3.org/TR/2006/WD-wordnet-rdf-20060619/",
  },
  {
    name:
      "Latest draft of Web Services Choreography Description Language: Primer formally approved by the group",
    url: "http://www.w3.org/TR/2006/WD-ws-cdl-10-primer-20060619/",
  },
  {
    name:
      "Latest draft of Internationalization and Localization Markup Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2006/WD-itsreq-20060518/",
  },
  {
    name:
      "Latest draft of Web Services Addressing 1.0 - Core formally approved by the group",
    url: "http://www.w3.org/TR/2006/REC-ws-addr-core-20060509/",
  },
  {
    name:
      "Latest draft of Web Services Addressing 1.0 - SOAP Binding formally approved by the group",
    url: "http://www.w3.org/TR/2006/REC-ws-addr-soap-20060509/",
  },
  {
    name:
      "Latest draft of Timed Text (TT) Authoring Format 1.0 Use Cases and Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2006/NOTE-ttaf1-req-20060427/",
  },
  {
    name:
      "Latest draft of Requirements for WCAG 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2006/NOTE-wcag2-req-20060425/",
  },
  {
    name:
      "Latest draft of Multimodal Application Developer Feedback formally approved by the group",
    url: "http://www.w3.org/TR/2006/NOTE-mmi-dev-feedback-20060414/",
  },
  {
    name:
      "Latest draft of Defining N-ary Relations on the Semantic Web formally approved by the group",
    url: "http://www.w3.org/TR/2006/NOTE-swbp-n-aryRelations-20060412/",
  },
  {
    name:
      "Latest draft of XML Processing Model Requirements and Use Cases formally approved by the group",
    url: "http://www.w3.org/TR/2006/WD-xproc-requirements-20060411/",
  },
  {
    name:
      "Latest draft of The Disposition of Names in an XML Namespace formally approved by the group",
    url: "http://www.w3.org/TR/2006/WD-namespaceState-20060329/",
  },
  {
    name:
      "Latest draft of Image Annotation on the Semantic Web formally approved by the group",
    url: "http://www.w3.org/TR/2006/WD-swbp-image-annotation-20060322/",
  },
  {
    name:
      "Latest draft of SOAP 1.1 Request Optional Response HTTP Binding formally approved by the group",
    url: "http://www.w3.org/TR/2006/NOTE-soap11-ror-httpbinding-20060321/",
  },
  {
    name:
      "Latest draft of Delivery Context Overview for Device Independence formally approved by the group",
    url: "http://www.w3.org/TR/2006/NOTE-di-dco-20060320/",
  },
  {
    name:
      "Latest draft of XML Schema Datatypes in RDF and OWL formally approved by the group",
    url: "http://www.w3.org/TR/2006/NOTE-swbp-xsch-datatypes-20060314/",
  },
  {
    name:
      "Latest draft of A Semantic Web Primer for Object-Oriented Software Developers formally approved by the group",
    url: "http://www.w3.org/TR/2006/NOTE-sw-oosd-primer-20060309/",
  },
  {
    name:
      "Latest draft of A Survey of RDF/Topic Maps Interoperability Proposals formally approved by the group",
    url: "http://www.w3.org/TR/2006/NOTE-rdftm-survey-20060210/",
  },
  {
    name:
      "Latest draft of Remote Events for XML (REX) Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2006/NOTE-rex-reqs-20060202/",
  },
  {
    name:
      "Latest draft of Arabic mathematical notation formally approved by the group",
    url: "http://www.w3.org/TR/2006/NOTE-arabic-math-20060131/",
  },
  {
    name:
      "Latest draft of Scope of Mobile Web Best Practices formally approved by the group",
    url: "http://www.w3.org/TR/2005/NOTE-mobile-bp-scope-20051220/",
  },
  {
    name:
      "Latest draft of Compound Document Use Cases and Requirements Version 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2005/WD-CDFReqs-20051219/",
  },
  {
    name:
      "Latest draft of Compound Document by Reference Use Cases and Requirements Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2005/NOTE-CDRReqs-20051219/",
  },
  {
    name: "Latest draft of Using XKMS with PGP formally approved by the group",
    url: "http://www.w3.org/TR/2005/NOTE-xkms-pgp-20051219/",
  },
  {
    name:
      "Latest draft of Synchronized Multimedia Integration Language (SMIL 2.1) formally approved by the group",
    url: "http://www.w3.org/TR/2005/REC-SMIL2-20051213/",
  },
  {
    name:
      "Latest draft of A WSDL 1.1 description for XKMS formally approved by the group",
    url: "http://www.w3.org/TR/2005/NOTE-xkms-wsdl-20051118/",
  },
  {
    name:
      "Latest draft of Web Services Choreography Description Language Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2005/CR-ws-cdl-10-20051109/",
  },
  {
    name:
      "Latest draft of SPARQL Protocol for RDF Using WSDL 1.1 formally approved by the group",
    url: "http://www.w3.org/TR/2005/WD-sprot11-20051024/",
  },
  {
    name:
      "Latest draft of RDF Calendar - an application of the Resource Description Framework to iCalendar Data formally approved by the group",
    url: "http://www.w3.org/TR/2005/NOTE-rdfcal-20050929/",
  },
  {
    name: "Latest draft of Test Metadata formally approved by the group",
    url: "http://www.w3.org/TR/2005/NOTE-test-metadata-20050914/",
  },
  {
    name: "Latest draft of xml:id Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2005/REC-xml-id-20050909/",
  },
  {
    name: "Latest draft of The QA Handbook formally approved by the group",
    url: "http://www.w3.org/TR/2005/NOTE-qa-handbook-20050906/",
  },
  {
    name:
      "Latest draft of Variability in Specifications formally approved by the group",
    url: "http://www.w3.org/TR/2005/NOTE-spec-variability-20050831/",
  },
  {
    name:
      "Latest draft of Discussion of Alternative Schema Languages and Type System Support in WSDL 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2005/NOTE-wsdl20-altschemalangs-20050817/",
  },
  {
    name:
      "Latest draft of QA Framework: Specification Guidelines formally approved by the group",
    url: "http://www.w3.org/TR/2005/REC-qaframe-spec-20050817/",
  },
  {
    name:
      "Latest draft of SVG's XML Binding Language (sXBL) formally approved by the group",
    url: "http://www.w3.org/TR/2005/WD-sXBL-20050815/",
  },
  {
    name:
      "Latest draft of XML Key Management Specification (XKMS 2.0) Bindings formally approved by the group",
    url: "http://www.w3.org/TR/2005/REC-xkms2-bindings-20050628/",
  },
  {
    name:
      "Latest draft of XML Key Management Specification (XKMS 2.0) formally approved by the group",
    url: "http://www.w3.org/TR/2005/REC-xkms2-20050628/",
  },
  {
    name:
      "Latest draft of XPath Requirements Version 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2005/WD-xpath20req-20050603/",
  },
  {
    name:
      "Latest draft of SSML 1.0 say-as attribute values formally approved by the group",
    url: "http://www.w3.org/TR/2005/NOTE-ssml-sayas-20050526/",
  },
  {
    name:
      "Latest draft of Quick Guide to Publishing a Thesaurus on the Semantic Web formally approved by the group",
    url: "http://www.w3.org/TR/2005/WD-swbp-thesaurus-pubguide-20050517/",
  },
  {
    name:
      'Latest draft of Representing Specified Values in OWL: "value partitions" and "value sets" formally approved by the group',
    url: "http://www.w3.org/TR/2005/NOTE-swbp-specified-values-20050517/",
  },
  {
    name:
      "Latest draft of Processing XML 1.1 documents with XML Schema 1.0 processors formally approved by the group",
    url: "http://www.w3.org/TR/2005/NOTE-xml11schema10-20050511/",
  },
  {
    name:
      "Latest draft of Describing Media Content of Binary Data in XML formally approved by the group",
    url: "http://www.w3.org/TR/2005/NOTE-xml-media-types-20050504/",
  },
  {
    name:
      "Latest draft of Scalable Vector Graphics (SVG) Full 1.2 Specification formally approved by the group",
    url: "http://www.w3.org/TR/2005/WD-SVG12-20050413/",
  },
  {
    name:
      "Latest draft of Representing Classes As Property Values on the Semantic Web formally approved by the group",
    url: "http://www.w3.org/TR/2005/NOTE-swbp-classes-as-values-20050405/",
  },
  {
    name:
      "Latest draft of Building a Tokenizer for XPath or XQuery formally approved by the group",
    url: "http://www.w3.org/TR/2005/WD-xquery-xpath-parsing-20050404/",
  },
  {
    name:
      "Latest draft of XML Binary Characterization formally approved by the group",
    url: "http://www.w3.org/TR/2005/NOTE-xbc-characterization-20050331/",
  },
  {
    name:
      "Latest draft of XML Binary Characterization Measurement Methodologies formally approved by the group",
    url: "http://www.w3.org/TR/2005/NOTE-xbc-measurement-20050331/",
  },
  {
    name:
      "Latest draft of XML Binary Characterization Properties formally approved by the group",
    url: "http://www.w3.org/TR/2005/NOTE-xbc-properties-20050331/",
  },
  {
    name:
      "Latest draft of XML Binary Characterization Use Cases formally approved by the group",
    url: "http://www.w3.org/TR/2005/NOTE-xbc-use-cases-20050331/",
  },
  {
    name:
      "Latest draft of RDF Data Access Use Cases and Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2005/WD-rdf-dawg-uc-20050325/",
  },
  {
    name:
      "Latest draft of Character Model for the World Wide Web 1.0: Fundamentals formally approved by the group",
    url: "http://www.w3.org/TR/2005/REC-charmod-20050215/",
  },
  {
    name: "Latest draft of Extending XLink 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2005/NOTE-xlink10-ext-20050127/",
  },
  {
    name:
      "Latest draft of Resource Representation SOAP Header Block formally approved by the group",
    url: "http://www.w3.org/TR/2005/REC-soap12-rep-20050125/",
  },
  {
    name:
      "Latest draft of XML-binary Optimized Packaging formally approved by the group",
    url: "http://www.w3.org/TR/2005/REC-xop10-20050125/",
  },
  {
    name:
      "Latest draft of SOAP Message Transmission Optimization Mechanism formally approved by the group",
    url: "http://www.w3.org/TR/2005/REC-soap12-mtom-20050125/",
  },
  {
    name:
      "Latest draft of Glossary of Terms for Device Independence formally approved by the group",
    url: "http://www.w3.org/TR/2005/WD-di-gloss-20050118/",
  },
  {
    name:
      "Latest draft of Architecture of the World Wide Web, Volume One formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-webarch-20041215/",
  },
  {
    name:
      "Latest draft of Requirements for the Internationalization of Web Services formally approved by the group",
    url: "http://www.w3.org/TR/2004/NOTE-ws-i18n-req-20041116/",
  },
  {
    name:
      "Latest draft of Pronunciation Lexicon Specification (PLS) Version 1.0 Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2004/WD-lexicon-reqs-20041029/",
  },
  {
    name:
      "Latest draft of XML Schema Part 0: Primer Second Edition formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-xmlschema-0-20041028/",
  },
  {
    name:
      "Latest draft of XML Schema Part 1: Structures Second Edition formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-xmlschema-1-20041028/",
  },
  {
    name:
      "Latest draft of XML Schema Part 2: Datatypes Second Edition formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-xmlschema-2-20041028/",
  },
  {
    name:
      "Latest draft of Speech Synthesis Markup Language (SSML) Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-speech-synthesis-20040907/",
  },
  {
    name:
      "Latest draft of XForms 1.1 Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2004/NOTE-xforms-11-req-20040831/",
  },
  {
    name:
      "Latest draft of QA Framework: Test Guidelines formally approved by the group",
    url: "http://www.w3.org/TR/2004/WD-qaframe-test-20040820/",
  },
  {
    name:
      "Latest draft of Web Services Internationalization Usage Scenarios formally approved by the group",
    url: "http://www.w3.org/TR/2004/NOTE-ws-i18n-scenarios-20040730/",
  },
  {
    name:
      "Latest draft of SOAP Optimized Serialization Use Cases and Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2004/WD-soap12-os-ucr-20040608/",
  },
  {
    name:
      "Latest draft of SOAP 1.2 Attachment Feature formally approved by the group",
    url: "http://www.w3.org/TR/2004/NOTE-soap12-af-20040608/",
  },
  {
    name:
      "Latest draft of XOP Inclusion Mechanism - Frequently Asked Questions formally approved by the group",
    url: "http://www.w3.org/TR/2004/NOTE-xopinc-FAQ-20040608/",
  },
  {
    name:
      "Latest draft of Modality Component to Host Environment DOM Requirements and Capabilities Assessment formally approved by the group",
    url: "http://www.w3.org/TR/2004/NOTE-modality-interface-20040510/",
  },
  {
    name:
      "Latest draft of Document Object Model (DOM) Level 3 Load and Save Specification formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-DOM-Level-3-LS-20040407/",
  },
  {
    name:
      "Latest draft of Document Object Model (DOM) Level 3 Core Specification formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/",
  },
  {
    name:
      "Latest draft of XML Processing Model Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2004/NOTE-proc-model-req-20040405/",
  },
  {
    name:
      "Latest draft of WS Choreography Model Overview formally approved by the group",
    url: "http://www.w3.org/TR/2004/WD-ws-chor-model-20040324/",
  },
  {
    name:
      "Latest draft of Speech Recognition Grammar Specification Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-speech-grammar-20040316/",
  },
  {
    name:
      "Latest draft of Voice Extensible Markup Language (VoiceXML) Version 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-voicexml20-20040316/",
  },
  {
    name:
      "Latest draft of Web Services Choreography Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2004/WD-ws-chor-reqs-20040311/",
  },
  {
    name:
      "Latest draft of Document Object Model (DOM) Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2004/NOTE-DOM-Requirements-20040226/",
  },
  {
    name:
      "Latest draft of Document Object Model (DOM) Level 3 XPath Specification formally approved by the group",
    url: "http://www.w3.org/TR/2004/NOTE-DOM-Level-3-XPath-20040226/",
  },
  {
    name:
      "Latest draft of Document Object Model (DOM) Level 3 Views and Formatting Specification formally approved by the group",
    url: "http://www.w3.org/TR/2004/NOTE-DOM-Level-3-Views-20040226/",
  },
  {
    name:
      "Latest draft of Authoring Techniques for Device Independence formally approved by the group",
    url: "http://www.w3.org/TR/2004/NOTE-di-atdi-20040218/",
  },
  {
    name:
      "Latest draft of Web Services Architecture Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2004/NOTE-wsa-reqs-20040211/",
  },
  {
    name:
      "Latest draft of Web Services Glossary formally approved by the group",
    url: "http://www.w3.org/TR/2004/NOTE-ws-gloss-20040211/",
  },
  {
    name:
      "Latest draft of Web Services Architecture formally approved by the group",
    url: "http://www.w3.org/TR/2004/NOTE-ws-arch-20040211/",
  },
  {
    name:
      "Latest draft of Web Services Architecture Usage Scenarios formally approved by the group",
    url: "http://www.w3.org/TR/2004/NOTE-ws-arch-scenarios-20040211/",
  },
  {
    name:
      "Latest draft of Web Service Management: Service Life Cycle formally approved by the group",
    url: "http://www.w3.org/TR/2004/NOTE-wslc-20040211/",
  },
  {
    name: "Latest draft of RDF Test Cases formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-rdf-testcases-20040210/",
  },
  {
    name:
      "Latest draft of OWL Web Ontology Language Overview formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-owl-features-20040210/",
  },
  {
    name:
      "Latest draft of OWL Web Ontology Language Use Cases and Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-webont-req-20040210/",
  },
  {
    name:
      "Latest draft of OWL Web Ontology Language Guide formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-owl-guide-20040210/",
  },
  {
    name: "Latest draft of RDF Semantics formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-rdf-mt-20040210/",
  },
  {
    name:
      "Latest draft of OWL Web Ontology Language Semantics and Abstract Syntax formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-owl-semantics-20040210/",
  },
  {
    name:
      "Latest draft of Resource Description Framework (RDF): Concepts and Abstract Syntax formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-rdf-concepts-20040210/",
  },
  {
    name:
      "Latest draft of OWL Web Ontology Language Reference formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-owl-ref-20040210/",
  },
  {
    name: "Latest draft of RDF Primer formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-rdf-primer-20040210/",
  },
  {
    name:
      "Latest draft of OWL Web Ontology Language Test Cases formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-owl-test-20040210/",
  },
  {
    name:
      "Latest draft of XML Information Set (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-xml-infoset-20040204/",
  },
  {
    name:
      "Latest draft of Document Object Model (DOM) Level 3 Validation Specification formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-DOM-Level-3-Val-20040127/",
  },
  {
    name:
      "Latest draft of OWL Web Ontology Language Parsing OWL in RDF/XML formally approved by the group",
    url: "http://www.w3.org/TR/2004/NOTE-owl-parsing-20040121/",
  },
  {
    name:
      "Latest draft of Composite Capability/Preference Profiles (CC/PP): Structure and Vocabularies 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2004/REC-CCPP-struct-vocab-20040115/",
  },
  {
    name:
      "Latest draft of Extensible Stylesheet Language (XSL) Version 1.1 Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2003/WD-xsl11-req-20031217/",
  },
  {
    name:
      "Latest draft of Bound Variables in MathML formally approved by the group",
    url: "http://www.w3.org/TR/2003/NOTE-mathml-bvar-20031110/",
  },
  {
    name:
      "Latest draft of Structured Types in MathML 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2003/NOTE-mathml-types-20031110/",
  },
  {
    name: "Latest draft of Units in MathML formally approved by the group",
    url: "http://www.w3.org/TR/2003/NOTE-mathml-units-20031110/",
  },
  {
    name:
      "Latest draft of Portable Network Graphics (PNG) Specification (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2003/REC-PNG-20031110/",
  },
  {
    name:
      "Latest draft of Mathematical Markup Language (MathML) Version 2.0 (Second Edition) formally approved by the group",
    url: "http://www.w3.org/TR/2003/REC-MathML2-20031021/",
  },
  {
    name: "Latest draft of XML Events formally approved by the group",
    url: "http://www.w3.org/TR/2003/REC-xml-events-20031014/",
  },
  {
    name:
      "Latest draft of XForms 1.0 Basic Profile formally approved by the group",
    url: "http://www.w3.org/TR/2003/CR-xforms-basic-20031014/",
  },
  {
    name:
      "Latest draft of LBase: Semantics for Languages of the Semantic Web formally approved by the group",
    url: "http://www.w3.org/TR/2003/NOTE-lbase-20031010/",
  },
  {
    name:
      "Latest draft of SOAP Version 1.2 Message Normalization formally approved by the group",
    url: "http://www.w3.org/TR/2003/NOTE-soap12-n11n-20031008/",
  },
  {
    name:
      "Latest draft of Proposal for XML Fragment Identifier Syntax 0.9 formally approved by the group",
    url: "http://www.w3.org/TR/2003/NOTE-xml-fragid-20030912/",
  },
  {
    name:
      "Latest draft of Device Independence Principles formally approved by the group",
    url: "http://www.w3.org/TR/2003/NOTE-di-princ-20030901/",
  },
  {
    name:
      "Latest draft of Authoring Challenges for Device Independence formally approved by the group",
    url: "http://www.w3.org/TR/2003/NOTE-acdi-20030901/",
  },
  {
    name: "Latest draft of xml:id Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2003/WD-xml-id-req-20030806/",
  },
  {
    name:
      "Latest draft of SOAP Version 1.2 Usage Scenarios formally approved by the group",
    url: "http://www.w3.org/TR/2003/NOTE-xmlp-scenarios-20030730/",
  },
  {
    name:
      "Latest draft of XML Protocol (XMLP) Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2003/NOTE-xmlp-reqs-20030728/",
  },
  {
    name:
      "Latest draft of OWL Web Ontology Language XML Presentation Syntax formally approved by the group",
    url: "http://www.w3.org/TR/2003/NOTE-owl-xmlsyntax-20030611/",
  },
  {
    name:
      "Latest draft of Core Presentation Characteristics: Requirements and Use Cases formally approved by the group",
    url: "http://www.w3.org/TR/2003/WD-cpc-req-20030510/",
  },
  {
    name:
      "Latest draft of W3C Multimodal Interaction Framework formally approved by the group",
    url: "http://www.w3.org/TR/2003/NOTE-mmi-framework-20030506/",
  },
  {
    name:
      "Latest draft of XML Key Management (XKMS 2.0) Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2003/NOTE-xkms2-req-20030505",
  },
  {
    name:
      "Latest draft of Framework Document for i18n Guidelines 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2003/WD-i18n-guide-framework-20030417/",
  },
  {
    name:
      "Latest draft of XPointer element() Scheme formally approved by the group",
    url: "http://www.w3.org/TR/2003/REC-xptr-element-20030325/",
  },
  {
    name: "Latest draft of XPointer Framework formally approved by the group",
    url: "http://www.w3.org/TR/2003/REC-xptr-framework-20030325/",
  },
  {
    name:
      "Latest draft of XPointer xmlns() Scheme formally approved by the group",
    url: "http://www.w3.org/TR/2003/REC-xptr-xmlns-20030325/",
  },
  {
    name:
      "Latest draft of XML Protocol Abstract Model formally approved by the group",
    url: "http://www.w3.org/TR/2003/WD-xmlp-am-20030220/",
  },
  {
    name:
      "Latest draft of SVG Printing Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2003/WD-SVGPrintReqs-20030218/",
  },
  {
    name:
      "Latest draft of Requirements for WCAG 2.0 Checklists and Techniques formally approved by the group",
    url: "http://www.w3.org/TR/2003/WD-wcag2-tech-req-20030207/",
  },
  {
    name:
      "Latest draft of Requirements for the Ink Markup Language formally approved by the group",
    url: "http://www.w3.org/TR/2003/NOTE-inkreqs-20030122/",
  },
  {
    name:
      "Latest draft of Requirements for XML Schema 1.1 formally approved by the group",
    url: "http://www.w3.org/TR/2003/WD-xmlschema-11-req-20030121/",
  },
  {
    name:
      "Latest draft of Mobile SVG Profiles: SVG Tiny and SVG Basic formally approved by the group",
    url: "http://www.w3.org/TR/2003/REC-SVGMobile-20030114/",
  },
  {
    name:
      "Latest draft of Requirements for EMMA formally approved by the group",
    url: "http://www.w3.org/TR/2003/NOTE-EMMAreqs-20030113/",
  },
  {
    name:
      "Latest draft of Document Object Model (DOM) Level 2 HTML Specification formally approved by the group",
    url: "http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/",
  },
  {
    name:
      "Latest draft of Multimodal Interaction Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2003/NOTE-mmi-reqs-20030108/",
  },
  {
    name:
      "Latest draft of XPointer xpointer() Scheme formally approved by the group",
    url: "http://www.w3.org/TR/2002/WD-xptr-xpointer-20021219/",
  },
  {
    name:
      "Latest draft of Techniques for User Agent Accessibility Guidelines 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2002/NOTE-UAAG10-TECHS-20021217/",
  },
  {
    name:
      "Latest draft of User Agent Accessibility Guidelines 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2002/REC-UAAG10-20021217/",
  },
  {
    name:
      "Latest draft of Decryption Transform for XML Signature formally approved by the group",
    url: "http://www.w3.org/TR/2002/REC-xmlenc-decrypt-20021210",
  },
  {
    name:
      "Latest draft of Multimodal Interaction Use Cases formally approved by the group",
    url: "http://www.w3.org/TR/2002/NOTE-mmi-use-cases-20021204/",
  },
  {
    name:
      "Latest draft of QA Framework: Operational Examples & Techniques formally approved by the group",
    url: "http://www.w3.org/TR/2002/NOTE-qaframe-ops-extech-20021202/",
  },
  {
    name:
      "Latest draft of XML-Signature XPath Filter 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2002/REC-xmldsig-filter2-20021108/",
  },
  {
    name:
      "Latest draft of Techniques for Authoring Tool Accessibility Guidelines 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2002/NOTE-ATAG10-TECHS-20021029/",
  },
  {
    name:
      "Latest draft of Web Services Description Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2002/WD-ws-desc-reqs-20021028/",
  },
  {
    name:
      "Latest draft of XML Accessibility Guidelines formally approved by the group",
    url: "http://www.w3.org/TR/2002/WD-xag-20021003",
  },
  {
    name:
      "Latest draft of XHTML 1.0 in XML Schema formally approved by the group",
    url: "http://www.w3.org/TR/2002/NOTE-xhtml1-schema-20020902/",
  },
  {
    name:
      "Latest draft of An XHTML + MathML + SVG Profile formally approved by the group",
    url: "http://www.w3.org/TR/2002/WD-XHTMLplusMathMLplusSVG-20020809/",
  },
  {
    name:
      "Latest draft of Voice Browser Interoperation: Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2002/WD-vbi-reqs-20020808/",
  },
  {
    name:
      "Latest draft of Document Object Model (DOM) Level 3 Abstract Schemas Specification formally approved by the group",
    url: "http://www.w3.org/TR/2002/NOTE-DOM-Level-3-AS-20020725/",
  },
  {
    name:
      "Latest draft of Exclusive XML Canonicalization Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2002/REC-xml-exc-c14n-20020718/",
  },
  {
    name:
      "Latest draft of SOAP Version 1.2 Email Binding formally approved by the group",
    url: "http://www.w3.org/TR/2002/NOTE-soap12-email-20020703",
  },
  {
    name:
      "Latest draft of Web Service Description Usage Scenarios formally approved by the group",
    url: "http://www.w3.org/TR/2002/WD-ws-desc-usecases-20020604/",
  },
  {
    name:
      "Latest draft of SVG 1.1/1.2/2.0 Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2002/WD-SVG2Reqs-20020422/",
  },
  {
    name:
      "Latest draft of A P3P Preference Exchange Language 1.0 (APPEL1.0) formally approved by the group",
    url: "http://www.w3.org/TR/2002/WD-P3P-preferences-20020415/",
  },
  {
    name:
      "Latest draft of Namespaces in XML 1.1 Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2002/WD-xml-names11-req-20020403/",
  },
  {
    name:
      "Latest draft of XML Key Management Specification Bulk Operation (X-BULK) formally approved by the group",
    url: "http://www.w3.org/TR/2002/WD-xkms2-xbulk-20020318/",
  },
  {
    name:
      "Latest draft of XML Encryption Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2002/NOTE-xml-encryption-req-20020304",
  },
  {
    name:
      "Latest draft of The Platform for Privacy Preferences 1.0 Deployment Guide formally approved by the group",
    url: "http://www.w3.org/TR/2002/NOTE-p3pdeployment-20020211",
  },
  {
    name: "Latest draft of XHTML+SMIL Profile formally approved by the group",
    url: "http://www.w3.org/TR/2002/NOTE-XHTMLplusSMIL-20020131/",
  },
  {
    name:
      'Latest draft of Authoring Tool Accessibility Guidelines "Wombat" formally approved by the group',
    url: "http://www.w3.org/TR/2001/WD-ATAG-wombat-20011221/",
  },
  {
    name:
      "Latest draft of CC/PP Implementors Guide: Harmonization with Existing Vocabularies and Content Transformation Heuristics formally approved by the group",
    url: "http://www.w3.org/TR/2001/NOTE-CCPP-COORDINATION-20011220/",
  },
  {
    name:
      "Latest draft of CC/PP Implementors Guide: Privacy and Protocols formally approved by the group",
    url: "http://www.w3.org/TR/2001/WD-CCPP-trust-20011220/",
  },
  {
    name:
      "Latest draft of Component Extension (CX) API requirements Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2001/NOTE-CX-20011211",
  },
  {
    name:
      "Latest draft of Extensible Stylesheet Language (XSL) Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2001/REC-xsl-20011015/",
  },
  {
    name:
      "Latest draft of XML Schema: Formal Description formally approved by the group",
    url: "http://www.w3.org/TR/2001/WD-xmlschema-formal-20010925/",
  },
  {
    name:
      "Latest draft of URIs, URLs, and URNs: Clarifications and Recommendations 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2001/NOTE-uri-clarification-20010921/",
  },
  {
    name:
      "Latest draft of XML Blueberry Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2001/WD-xml-blueberry-req-20010921",
  },
  {
    name: "Latest draft of SMIL Animation formally approved by the group",
    url: "http://www.w3.org/TR/2001/REC-smil-animation-20010904/",
  },
  {
    name:
      "Latest draft of XSL Transformations (XSLT) Version 1.1 formally approved by the group",
    url: "http://www.w3.org/TR/2001/WD-xslt11-20010824/",
  },
  {
    name:
      "Latest draft of SVG Mobile Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2001/WD-SVGMobileReqs-20010803",
  },
  {
    name:
      "Latest draft of XML Linking Language (XLink) Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2001/REC-xlink-20010627/",
  },
  {
    name:
      "Latest draft of XML Linking and Style formally approved by the group",
    url: "http://www.w3.org/TR/2001/NOTE-xml-link-style-20010605/",
  },
  {
    name: "Latest draft of Ruby Annotation formally approved by the group",
    url: "http://www.w3.org/TR/2001/REC-ruby-20010531/",
  },
  {
    name:
      "Latest draft of Call Control Requirements in a Voice Browser Framework formally approved by the group",
    url: "http://www.w3.org/TR/2001/WD-call-control-reqs-20010413/",
  },
  {
    name:
      "Latest draft of An RDF Schema for the XML Information Set formally approved by the group",
    url: "http://www.w3.org/TR/2001/NOTE-xml-infoset-rdfs-20010406",
  },
  {
    name: "Latest draft of XForms Requirements formally approved by the group",
    url: "http://www.w3.org/TR/2001/WD-xhtml-forms-req-20010404",
  },
  {
    name:
      "Latest draft of Canonical XML Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2001/REC-xml-c14n-20010315",
  },
  {
    name:
      "Latest draft of XSLT Requirements Version 2.0 formally approved by the group",
    url: "http://www.w3.org/TR/2001/WD-xslt20req-20010214",
  },
  {
    name:
      "Latest draft of XML Fragment Interchange formally approved by the group",
    url: "http://www.w3.org/TR/2001/CR-xml-fragment-20010212",
  },
  {
    name:
      "Latest draft of Stochastic Language Models (N-Gram) Specification formally approved by the group",
    url: "http://www.w3.org/TR/2001/WD-ngram-spec-20010103/",
  },
  {
    name:
      "Latest draft of Voice Browsers, Introduction formally approved by the group",
    url: "http://www.w3.org/TR/2000/WD-voice-intro-20001204/",
  },
  {
    name:
      "Latest draft of Natural Language Semantics Markup Language for the Speech Interface Framework formally approved by the group",
    url: "http://www.w3.org/TR/2000/WD-nl-spec-20001120/",
  },
  {
    name:
      "Latest draft of Document Object Model (DOM) Level 2 Core Specification formally approved by the group",
    url: "http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/",
  },
  {
    name:
      "Latest draft of Document Object Model (DOM) Level 2 Style Specification formally approved by the group",
    url: "http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/",
  },
  {
    name:
      "Latest draft of Document Object Model (DOM) Level 2 Traversal and Range Specification formally approved by the group",
    url: "http://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/",
  },
  {
    name:
      "Latest draft of Document Object Model (DOM) Level 2 Views Specification formally approved by the group",
    url: "http://www.w3.org/TR/2000/REC-DOM-Level-2-Views-20001113/",
  },
  {
    name:
      "Latest draft of Document Object Model (DOM) Level 2 Events Specification formally approved by the group",
    url: "http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/",
  },
  {
    name:
      "Latest draft of HTML Working Group Roadmap formally approved by the group",
    url: "http://www.w3.org/TR/2000/NOTE-xhtml-roadmap-20001108/",
  },
  {
    name:
      "Latest draft of HTML Techniques for Web Content Accessibility Guidelines 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2000/NOTE-WCAG10-HTML-TECHS-20001106/",
  },
  {
    name:
      "Latest draft of Techniques for Web Content Accessibility Guidelines 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2000/NOTE-WCAG10-TECHS-20001106/",
  },
  {
    name:
      "Latest draft of Core Techniques for Web Content Accessibility Guidelines 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2000/NOTE-WCAG10-CORE-TECHS-20001106/",
  },
  {
    name:
      "Latest draft of CSS Techniques for Web Content Accessibility Guidelines 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2000/NOTE-WCAG10-CSS-TECHS-20001106/",
  },
  {
    name:
      "Latest draft of Harvesting RDF Statements from XLinks formally approved by the group",
    url: "http://www.w3.org/TR/2000/NOTE-xlink2rdf-20000929/",
  },
  {
    name:
      "Latest draft of XSL Transformations Requirements Version 1.1 formally approved by the group",
    url: "http://www.w3.org/TR/2000/WD-xslt11req-20000825",
  },
  {
    name:
      "Latest draft of Composite Capabilities/Preference Profiles: Requirements and Architecture formally approved by the group",
    url: "http://www.w3.org/TR/2000/WD-CCPP-ra-20000721/",
  },
  {
    name:
      "Latest draft of Composite Capabilities/Preference Profiles: Terminology and Abbreviations formally approved by the group",
    url: "http://www.w3.org/TR/2000/WD-CCPP-ta-20000721/",
  },
  {
    name:
      "Latest draft of Multimodal Requirements for Voice Markup Languages formally approved by the group",
    url: "http://www.w3.org/TR/2000/WD-multimodal-reqs-20000710",
  },
  {
    name:
      "Latest draft of Techniques For Accessibility Evaluation And Repair Tools formally approved by the group",
    url: "http://www.w3.org/TR/2000/WD-AERT-20000426",
  },
  {
    name:
      "Latest draft of Reusable Dialog Requirements for Voice Markup Language formally approved by the group",
    url: "http://www.w3.org/TR/2000/WD-reusable-dialog-reqs-20000426",
  },
  {
    name:
      "Latest draft of Synchronized Multimedia Integration Language Document Object Model formally approved by the group",
    url: "http://www.w3.org/TR/2000/WD-smil-boston-dom-20000225/",
  },
  {
    name:
      "Latest draft of Authoring Tool Accessibility Guidelines 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/2000/REC-ATAG10-20000203/",
  },
  {
    name:
      "Latest draft of W3C and Electronic Commerce formally approved by the group",
    url: "http://www.w3.org/TR/2000/NOTE-EC-related-activities-20000107",
  },
  {
    name:
      "Latest draft of Building XHTML™ Modules formally approved by the group",
    url: "http://www.w3.org/TR/2000/WD-xhtml-building-20000105/",
  },
  {
    name:
      "Latest draft of Natural Language Processing Requirements for Voice Markup Languages formally approved by the group",
    url: "http://www.w3.org/TR/1999/WD-voice-nlu-reqs-19991223/",
  },
  {
    name:
      "Latest draft of Speech Synthesis Markup Requirements for Voice Markup Languages formally approved by the group",
    url: "http://www.w3.org/TR/1999/WD-voice-tts-reqs-19991223/",
  },
  {
    name:
      "Latest draft of Model Architecture for Voice Browser Systems formally approved by the group",
    url: "http://www.w3.org/TR/1999/WD-voice-architecture-19991223/",
  },
  {
    name:
      "Latest draft of Dialog Requirements for Voice Markup Languages formally approved by the group",
    url: "http://www.w3.org/TR/1999/WD-voice-dialog-reqs-19991223/",
  },
  {
    name:
      "Latest draft of Grammar Representation Requirements for Voice Markup Languages formally approved by the group",
    url: "http://www.w3.org/TR/1999/WD-voice-grammar-reqs-19991223/",
  },
  {
    name:
      "Latest draft of XML Path Language (XPath) Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/1999/REC-xpath-19991116/",
  },
  {
    name:
      "Latest draft of XSL Transformations (XSLT) Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/1999/REC-xslt-19991116",
  },
  {
    name:
      "Latest draft of TV Broadcast URI Schemes Requirements formally approved by the group",
    url: "http://www.w3.org/TR/1999/NOTE-TVWeb-URI-Requirements-19991021",
  },
  {
    name:
      "Latest draft of XML-Signature Requirements formally approved by the group",
    url: "http://www.w3.org/TR/1999/WD-xmldsig-requirements-19991014",
  },
  {
    name:
      "Latest draft of The Cambridge Communiqué formally approved by the group",
    url: "http://www.w3.org/TR/1999/NOTE-schema-arch-19991007",
  },
  {
    name:
      "Latest draft of XHTML™ Document Profile Requirements formally approved by the group",
    url: "http://www.w3.org/TR/1999/WD-xhtml-prof-req-19990906/",
  },
  {
    name:
      "Latest draft of Positioning HTML Elements with Cascading Style Sheets formally approved by the group",
    url: "http://www.w3.org/TR/1999/WD-positioning-19990902",
  },
  {
    name:
      "Latest draft of Aural Cascading Style Sheets (ACSS) Specification formally approved by the group",
    url: "http://www.w3.org/TR/1999/WD-acss-19990902",
  },
  {
    name:
      "Latest draft of CSS Printing Extensions formally approved by the group",
    url: "http://www.w3.org/TR/1999/WD-print-19990902",
  },
  {
    name:
      "Latest draft of Common Markup for micropayment per-fee-links formally approved by the group",
    url: "http://www.w3.org/TR/1999/WD-Micropayment-Markup-19990825/",
  },
  {
    name:
      "Latest draft of Composite Capability/Preference Profiles (CC/PP): A user side framework for content negotiation formally approved by the group",
    url: "http://www.w3.org/1999/07/NOTE-CCPP-19990727/",
  },
  {
    name:
      "Latest draft of Mathematical Markup Language (MathML) 1.01 Specification formally approved by the group",
    url: "http://www.w3.org/1999/07/REC-MathML-19990707/",
  },
  {
    name:
      "Latest draft of XML Canonicalization Requirements formally approved by the group",
    url: "http://www.w3.org/TR/1999/NOTE-xml-canonical-req-19990605",
  },
  {
    name:
      "Latest draft of Web Characterization Terminology & Definitions Sheet formally approved by the group",
    url: "http://www.w3.org/1999/05/WCA-terms/01",
  },
  {
    name:
      "Latest draft of Web Content Accessibility Guidelines 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/1999/WAI-WEBCONTENT-19990505/",
  },
  {
    name:
      "Latest draft of Web Characterization: From working group to activity formally approved by the group",
    url: "http://www.w3.org/TR/1999/NOTE-WCA-19990319/",
  },
  {
    name:
      "Latest draft of HTML 4.0 Guidelines for Mobile Access formally approved by the group",
    url: "http://www.w3.org/TR/1999/NOTE-html40-mobile-19990315/",
  },
  {
    name:
      "Latest draft of XML XLink Requirements Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/1999/NOTE-xlink-req-19990224/",
  },
  {
    name:
      "Latest draft of XPointer-Information Set Liaison Statement Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/1999/NOTE-xptr-infoset-liaison-19990224",
  },
  {
    name:
      "Latest draft of XML XPointer Requirements Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/1999/NOTE-xptr-req-19990224",
  },
  {
    name:
      "Latest draft of Synchronized Multimedia Modules based upon SMIL 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/1999/NOTE-SYMM-modules-19990223",
  },
  {
    name:
      "Latest draft of XML Information Set Requirements formally approved by the group",
    url: "http://www.w3.org/TR/1999/NOTE-xml-infoset-req-19990218",
  },
  {
    name:
      "Latest draft of XML Schema Requirements formally approved by the group",
    url: "http://www.w3.org/TR/1999/NOTE-xml-schema-req-19990215",
  },
  {
    name:
      "Latest draft of List of suggested extensions to CSS formally approved by the group",
    url: "http://www.w3.org/TR/1998/NOTE-CSS-potential-19981210",
  },
  {
    name:
      "Latest draft of XML Fragment Interchange Requirements, Version 1.0 formally approved by the group",
    url: "http://www.w3.org/TR/1998/NOTE-XML-FRAG-REQ-19981123",
  },
  {
    name:
      "Latest draft of Scalable Vector Graphics (SVG) Requirements formally approved by the group",
    url: "http://www.w3.org/TR/1998/WD-SVGReq-19981029",
  },
  {
    name:
      "Latest draft of A Discussion of the Relationship Between RDF-Schema and UML formally approved by the group",
    url: "http://www.w3.org/TR/1998/NOTE-rdf-uml-19980804/",
  },
  {
    name:
      "Latest draft of HTTP-ng Binary Wire Protocol formally approved by the group",
    url: "http://www.w3.org/TR/1998/WD-HTTP-NG-wire-19980710/",
  },
  {
    name:
      "Latest draft of HTTP-ng Architectural Model formally approved by the group",
    url: "http://www.w3.org/TR/1998/WD-HTTP-NG-architecture-19980710/",
  },
  {
    name:
      "Latest draft of SMUX Protocol Specification formally approved by the group",
    url: "http://www.w3.org/TR/1998/WD-mux-19980710",
  },
  {
    name:
      "Latest draft of HTTP-ng Web Interfaces formally approved by the group",
    url: "http://www.w3.org/TR/1998/WD-HTTP-NG-interfaces-19980710/",
  },
  {
    name:
      "Latest draft of Design of HTTP-ng Testbed formally approved by the group",
    url: "http://www.w3.org/TR/1998/NOTE-HTTP-NG-testbed-19980710/",
  },
  {
    name:
      "Latest draft of Synchronized Multimedia Integration Language (SMIL) 1.0 Specification formally approved by the group",
    url: "http://www.w3.org/TR/1998/REC-smil-19980615/",
  },
  {
    name:
      "Latest draft of XML in HTML Meeting Report formally approved by the group",
    url: "http://www.w3.org/TR/1998/NOTE-xh-19980511",
  },
  {
    name:
      "Latest draft of XSL Requirements Summary formally approved by the group",
    url: "http://www.w3.org/TR/1998/WD-XSLReq-19980511",
  },
  {
    name:
      "Latest draft of Short- and Long-Term Goals for the HTTP-NG Project formally approved by the group",
    url: "http://www.w3.org/TR/1998/WD-HTTP-NG-goals-19980327",
  },
  {
    name:
      "Latest draft of P3P Protocol and Data Transport Working Group Draft White Paper formally approved by the group",
    url: "http://www.w3.org/TR/1998/NOTE-P3P10-Protocols-19980324",
  },
  {
    name:
      "Latest draft of Primary Language in HTML formally approved by the group",
    url: "http://www.w3.org/TR/1998/NOTE-html-lan-19980313",
  },
  {
    name:
      "Latest draft of XML Linking Language (XLink) Design Principles formally approved by the group",
    url: "http://www.w3.org/TR/1998/NOTE-xlink-principles-19980303",
  },
  {
    name: "Latest draft of Voice Browsers formally approved by the group",
    url: "http://www.w3.org/TR/1998/NOTE-voice-0128",
  },
  {
    name:
      "Latest draft of Comparison of SGML and XML formally approved by the group",
    url: "http://www.w3.org/TR/NOTE-sgml-xml-971215",
  },
  {
    name:
      "Latest draft of PEP Specification: an Extension Mechanism for HTTP formally approved by the group",
    url: "http://www.w3.org/TR/WD-http-pep-971121",
  },
  {
    name:
      "Latest draft of P3P Architecture Working Group: General Overview of the P3P Architecture formally approved by the group",
    url: "http://www.w3.org/TR/WD-P3P-arch-971022",
  },
  {
    name:
      "Latest draft of P3P Vocabulary Working Group: Grammatical Model and Data Design Model formally approved by the group",
    url: "http://www.w3.org/TR/WD-P3P-grammar-971014",
  },
  {
    name:
      "Latest draft of Use of CGM as a Scalable Graphics Format formally approved by the group",
    url: "http://www.w3.org/TR/NOTE-cgm-970618",
  },
  {
    name:
      "Latest draft of Digital Signature Label Architecture formally approved by the group",
    url: "http://www.w3.org/TR/WD-DSIG-label-arch-970610",
  },
  {
    name:
      "Latest draft of Selecting Payment Mechanisms Over HTTP formally approved by the group",
    url: "http://www.w3.org/TR/WD-jepi-uppflow-970106",
  },
  {
    name:
      "Latest draft of Imagemapped Images and Image-Incapable User Agents formally approved by the group",
    url: "http://www.w3.org/TR/NOTE-imagemap",
  },
  {
    name:
      "Latest draft of A Proposed Convention for Embedding Metadata in HTML formally approved by the group",
    url:
      "http://www.w3.org/Search/9605-Indexing-Workshop/ReportOutcomes/S6Group2",
  },
  {
    name:
      "Latest draft of The ILU Requester: Object Services in HTTP Servers formally approved by the group",
    url: "http://www.w3.org/TR/WD-ilu-requestor-960307",
  },
];
