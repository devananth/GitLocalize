const LOCALE_MAP = {
  ja: "ja-JP",
  zh: "zh-CN",
  ko: "ko-KR",
  es: "es-ES",
  fr: "fr-FR",
  de: "de-DE",
  ar: "ar-SA",
  fa: "fa-IR",
  vi: "vi-VN",
  tr: "tr-TR",
  pt: "pt-BR",
  ru: "ru-RU",
  hi: "hi-IN",
  id: "id-ID",
  th: "th-TH",
  en: "en-US",
  it: "it-IT",
  nl: "nl-NL",
  pl: "pl-PL",
  sv: "sv-SE",
  uk: "uk-UA",
  cs: "cs-CZ",
  ro: "ro-RO",
  hu: "hu-HU",
  el: "el-GR",
  he: "he-IL",
  bn: "bn-BD",
  mr: "mr-IN",
  ta: "ta-IN",
  te: "te-IN",
  kn: "kn-IN",
  gu: "gu-IN",
  pa: "pa-IN",
  ur: "ur-PK",
  ms: "ms-MY",
  tl: "tl-PH",
  sw: "sw-KE",
};

document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSelect");

  chrome.storage.local.get(["targetLang"], (result) => {
    if (result.targetLang) {
      langSelect.value = result.targetLang;
      console.log("Loaded saved language:", result.targetLang);
    } else {
      // Default to Spanish if nothing is selected
      langSelect.value = "es-ES";
    }
  });

  langSelect.addEventListener("change", () => {
    const selectedLang = LOCALE_MAP[langSelect.value];

    chrome.storage.local.set({ targetLang: selectedLang }, () => {
      console.log("Language auto-saved:", selectedLang);

      const status = document.createElement("span");
      status.textContent = " ✅ Saved";
      status.style.fontSize = "10px";
      status.style.color = "green";
      langSelect.after(status);
      setTimeout(() => status.remove(), 1000);
    });
  });
});
