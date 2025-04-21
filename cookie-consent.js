/**
 * Ultimate GDPR Cookie Consent Solution v4.2 - Advanced Edition
 * - Automatic translation based on user's country
 * - Domain restriction controls
 * - Geo-targeting (country/city/state level controls)
 * - Complete EU language support
 * - Built-in analytics dashboard with password protection
 * - Consent Mode v2 and future-proof compliance
 * - Premium UI with enhanced UX
 * - Flexible banner positioning
 * - Detailed consent history
 * - Configurable banner delay
 * - Floating icon position control
 */

// ============== CONFIGURATION SECTION ============== //
const config = {
    // Domain restriction - only show on these domains (empty array = all domains)
    allowedDomains: ['dev-rpractice.pantheonsite.io', 'yourdomain.com'],
    
    // Language configuration
    languageConfig: {
        defaultLanguage: 'en',
        availableLanguages: ['en', 'fr', 'de'], // Limited to three languages
        showLanguageSelector: true,
        autoDetectLanguage: true
    },
    
    // Geo-targeting configuration
    geoConfig: {
        allowedCountries: [],
        allowedRegions: [],
        allowedCities: [],
        blockedCountries: [],
        blockedRegions: [],
        blockedCities: []
    },
    
    // Analytics configuration
    analytics: {
        enabled: true,
        storageDays: 30,
        showDashboard: true,
        passwordProtect: true,
        dashboardPassword: 'admin123',
        passwordCookieDuration: -1 // -1 means never expires
    },
    
    // Banner behavior
    behavior: {
        autoShow: true,
        floatingButton: true,
        floatingButtonPosition: 'left', // 'left' or 'right'
        adminButtonPosition: 'left', // 'left' or 'right'
        rememberLanguage: true,
        acceptOnScroll: false,
        acceptOnContinue: true,
        bannerPosition: 'middle', // 'left', 'right', 'middle'
        bannerDelay: 5000 // Delay in milliseconds (5 seconds default)
    },

    // UI Theme
    uiTheme: 'default'
};

// ============== MAIN IMPLEMENTATION ============== //
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Set default consent
gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'personalization_storage': 'denied',
    'functionality_storage': 'denied',
    'security_storage': 'granted'
});

// Color schemes
const colorScheme = {
    primary: '#2ecc71',
    secondary: '#3498db',
    danger: '#e74c3c',
    textDark: '#2c3e50',
    textLight: '#7f8c8d',
    background: '#ffffff',
    toggleActive: '#2ecc71',
    toggleInactive: '#bdc3c7'
};

const classicColorScheme = {
    primary: '#4CAF50',
    secondary: '#2196F3',
    danger: '#f44336',
    textDark: '#212121',
    textLight: '#757575',
    background: '#ffffff',
    toggleActive: '#4CAF50',
    toggleInactive: '#9E9E9E'
};

// Cookie database
const cookieDatabase = {
    '_ga': { category: 'analytics', duration: '2 years', description: 'Google Analytics user distinction' },
    '_gid': { category: 'analytics', duration: '24 hours', description: 'Google Analytics user distinction' },
    '_gat': { category: 'analytics', duration: '1 minute', description: 'Google Analytics throttle rate' },
    '_ga_': { category: 'analytics', duration: '2 years', description: 'GA4 session state' },
    '_fbp': { category: 'advertising', duration: '3 months', description: 'Facebook conversion tracking' },
    'fr': { category: 'advertising', duration: '3 months', description: 'Facebook targeted ads' },
    'wordpress_': { category: 'functional', duration: 'Session', description: 'WordPress authentication' },
    'wp-settings': { category: 'functional', duration: '1 year', description: 'WordPress preferences' },
    'PHPSESSID': { category: 'functional', duration: 'Session', description: 'PHP session' },
    'cookie_consent': { category: 'functional', duration: '1 year', description: 'Stores cookie consent preferences' },
    'woocommerce_items_in_cart': { category: 'functional', duration: 'Session', description: 'WooCommerce cart items tracking' },
    'woocommerce_cart_hash': { category: 'functional', duration: 'Session', description: 'WooCommerce cart hash' },
    '_gcl_au': { category: 'advertising', duration: '3 months', description: 'Google Ads conversion' },
    'IDE': { category: 'advertising', duration: '1 year', description: 'Google DoubleClick' },
    'NID': { category: 'advertising', duration: '6 months', description: 'Google user tracking' },
    'gclid_tracker': { category: 'advertising', duration: 'Session', description: 'Tracks Google Click ID for conversions' },
    'tk_ai': { category: 'analytics', duration: 'Session', description: 'Jetpack/Tumblr analytics' },
    'external_id': { category: 'functional', duration: 'Session', description: 'External service identifier' }
};

// Language translations (limited to en, fr, de for brevity)
const translations = {
    en: {
        title: "We value your privacy",
        description: "We use cookies to improve your browsing experience, provide personalized ads or content, and analyze our traffic. By clicking \"Accept All,\" you consent to the use of cookies.",
        privacy: "Privacy Policy",
        customize: "Adjust",
        reject: "Reject all",
        accept: "Accept all",
        essential: "Essential Cookies",
        essentialDesc: "Necessary for website functionality",
        analytics: "Analytics Cookies",
        analyticsDesc: "Help understand visitor interactions",
        performance: "Performance Cookies",
        performanceDesc: "Improve website performance",
        advertising: "Advertising Cookies",
        advertisingDesc: "Deliver relevant ads",
        other: "Other Cookies",
        otherDesc: "Uncategorized cookies",
        save: "Save Preferences",
        language: "English",
        statsTitle: "Consent Statistics",
        statsAccepted: "Accepted",
        statsRejected: "Rejected",
        statsCustom: "Customized",
        statsTotal: "Total",
        statsPercentage: "Percentage",
        statsLast7Days: "Last 7 Days",
        statsLast30Days: "Last 30 Days",
        passwordPrompt: "Enter password to view analytics",
        passwordSubmit: "Submit",
        passwordIncorrect: "Incorrect password",
        dashboardTitle: "Consent Analytics Dashboard",
        historyTitle: "Consent Change History"
    },
    fr: {
        title: "Nous respectons votre vie privée",
        description: "Nous utilisons des cookies pour améliorer votre expérience, fournir des publicités ou du contenu personnalisé et analyser notre trafic. En cliquant sur \"Tout accepter\", vous consentez à l'utilisation de cookies.",
        privacy: "Politique de confidentialité",
        customize: "Personnaliser",
        reject: "Tout refuser",
        accept: "Tout accepter",
        essential: "Cookies essentiels",
        essentialDesc: "Nécessaires au fonctionnement",
        analytics: "Cookies d'analyse",
        analyticsDesc: "Comprennent les interactions",
        performance: "Cookies de performance",
        performanceDesc: "Améliorent les performances",
        advertising: "Cookies publicitaires",
        advertisingDesc: "Diffusent des publicités",
        other: "Autres cookies",
        otherDesc: "Cookies non catégorisés",
        save: "Enregistrer",
        language: "Français",
        statsTitle: "Statistiques de Consentement",
        statsAccepted: "Accepté",
        statsRejected: "Rejeté",
        statsCustom: "Personnalisé",
        statsTotal: "Total",
        statsPercentage: "Pourcentage",
        statsLast7Days: "7 Derniers Jours",
        statsLast30Days: "30 Derniers Jours",
        passwordPrompt: "Entrez le mot de passe pour voir les analyses",
        passwordSubmit: "Soumettre",
        passwordIncorrect: "Mot de passe incorrect",
        dashboardTitle: "Tableau de bord des analyses de consentement",
        historyTitle: "Historique des changements de consentement"
    },
    de: {
        title: "Wir schätzen Ihre Privatsphäre",
        description: "Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern, personalisierte Anzeigen oder Inhalte bereitzustellen und unseren Datenverkehr zu analysieren. Wenn Sie auf \"Alle akzeptieren\" klicken, erklären Sie sich mit der Verwendung von Cookies einverstanden.",
        privacy: "Datenschutzrichtlinie",
        customize: "Anpassen",
        reject: "Alle ablehnen",
        accept: "Alle akzeptieren",
        essential: "Essenzielle Cookies",
        essentialDesc: "Für Website-Funktionalität",
        analytics: "Analytics-Cookies",
        analyticsDesc: "Verstehen Nutzerinteraktionen",
        performance: "Performance-Cookies",
        performanceDesc: "Verbessern die Leistung",
        advertising: "Werbe-Cookies",
        advertisingDesc: "Liefern relevante Anzeigen",
        other: "Andere Cookies",
        otherDesc: "Nicht kategorisierte Cookies",
        save: "Einstellungen speichern",
        language: "Deutsch",
        statsTitle: "Zustimmungsstatistiken",
        statsAccepted: "Akzeptiert",
        statsRejected: "Abgelehnt",
        statsCustom: "Angepasst",
        statsTotal: "Gesamt",
        statsPercentage: "Prozentsatz",
        statsLast7Days: "Letzten 7 Tage",
        statsLast30Days: "Letzten 30 Tage",
        passwordPrompt: "Passwort eingeben, um Analysen anzuzeigen",
        passwordSubmit: "Einreichen",
        passwordIncorrect: "Falsches Passwort",
        dashboardTitle: "Zustimmungs-Analyse-Dashboard",
        historyTitle: "Verlauf der Zustimmungsänderungen"
    }
};

// Country to language mapping
const countryLanguageMap = {
    'AT': 'de', 'BE': ['nl', 'fr'], 'BG': 'bg', 'HR': 'hr', 'CY': 'el', 'CZ': 'cs', 'DK': 'da',
    'EE': 'et', 'FI': 'fi', 'FR': 'fr', 'DE': 'de', 'GR': 'el', 'HU': 'hu', 'IE': 'en', 'IT': 'it',
    'LV': 'lv', 'LT': 'lt', 'LU': ['fr', 'de'], 'MT': 'mt', 'NL': 'nl', 'PL': 'pl', 'PT': 'pt',
    'RO': 'ro', 'SK': 'sk', 'SI': 'sl', 'ES': 'es', 'SE': 'sv', 'AL': 'en', 'BA': 'en', 'IS': 'en',
    'LI': 'de', 'MK': 'en', 'NO': 'en', 'RS': 'en', 'CH': ['de', 'fr', 'it'], 'UA': 'uk', 'GB': 'en',
    'US': 'en', 'CA': ['en', 'fr'], 'AU': 'en', 'NZ': 'en', 'ZA': 'en', 'IN': 'en', 'CN': 'zh',
    'JP': 'ja', 'KR': 'ko', 'BR': 'pt', 'MX': 'es', 'AR': 'es', 'RU': 'ru'
};

// Analytics and history storage
let consentAnalytics = {
    total: { accepted: 0, rejected: 0, custom: 0 },
    daily: {},
    weekly: {},
    monthly: {}
};

let consentHistory = []; // Store detailed consent changes
let isDashboardAuthenticated = false;

// Load analytics and history data
function loadAnalyticsData() {
    const savedAnalytics = localStorage.getItem('consentAnalytics');
    if (savedAnalytics) consentAnalytics = JSON.parse(savedAnalytics);
    
    const savedHistory = localStorage.getItem('consentHistory');
    if (savedHistory) consentHistory = JSON.parse(savedHistory);
    
    const today = new Date().toISOString().split('T')[0];
    if (!consentAnalytics.daily[today]) {
        consentAnalytics.daily[today] = { accepted: 0, rejected: 0, custom: 0 };
    }
    
    isDashboardAuthenticated = config.analytics.passwordProtect ? 
        getCookie('dashboard_auth') === 'true' : true;
}

// Save analytics and history
function saveAnalyticsData() {
    localStorage.setItem('consentAnalytics', JSON.stringify(consentAnalytics));
    localStorage.setItem('consentHistory', JSON.stringify(consentHistory));
    
    // Clean up old data
    const now = new Date();
    const cutoff = now.getTime() - (config.analytics.storageDays * 24 * 60 * 60 * 1000);
    Object.keys(consentAnalytics.daily).forEach(date => {
        if (new Date(date).getTime() < cutoff) {
            delete consentAnalytics.daily[date];
        }
    });
}

// Update analytics and history
function updateConsentStats(status, consentData) {
    const today = new Date().toISOString().split('T')[0];
    const timestamp = new Date().toISOString();
    
    // Update totals
    if (status === 'accepted') {
        consentAnalytics.total.accepted++;
        consentAnalytics.daily[today].accepted++;
    } else if (status === 'rejected') {
        consentAnalytics.total.rejected++;
        consentAnalytics.daily[today].rejected++;
    } else if (status === 'custom') {
        consentAnalytics.total.custom++;
        consentAnalytics.daily[today].custom++;
    }
    
    // Record consent history
    consentHistory.push({
        timestamp,
        status,
        categories: consentData.categories,
        userAgent: navigator.userAgent,
        language: document.getElementById('cookieLanguageSelect')?.value || 'en'
    });
    
    updateTimeBasedStats(today, status);
    saveAnalyticsData();
}

// Update weekly and monthly stats
function updateTimeBasedStats(today, status) {
    const date = new Date(today);
    const week = `${date.getFullYear()}-W${Math.floor((date.getDate() - date.getDay() + 7) / 7)}`;
    const month = `${date.getFullYear()}-${date.getMonth() + 1}`;
    
    // Initialize weekly and monthly stats if not present
    if (!consentAnalytics.weekly[week]) {
        consentAnalytics.weekly[week] = { accepted: 0, rejected: 0, custom: 0 };
    }
    if (!consentAnalytics.monthly[month]) {
        consentAnalytics.monthly[month] = { accepted: 0, rejected: 0, custom: 0 };
    }
    
    // Update weekly and monthly stats
    if (status === 'accepted') {
        consentAnalytics.weekly[week].accepted++;
        consentAnalytics.monthly[month].accepted++;
    } else if (status === 'rejected') {
        consentAnalytics.weekly[week].rejected++;
        consentAnalytics.monthly[month].rejected++;
    } else if (status === 'custom') {
        consentAnalytics.weekly[week].custom++;
        consentAnalytics.monthly[month].custom++;
    }
}

// Generate analytics dashboard with charts
function generateAnalyticsDashboard(language = 'en') {
    const lang = translations[language] || translations.en;
    
    // Calculate totals
    const total = consentAnalytics.total.accepted + consentAnalytics.total.rejected + consentAnalytics.total.custom;
    const acceptedPercent = total > 0 ? Math.round((consentAnalytics.total.accepted / total) * 100) : 0;
    const rejectedPercent = total > 0 ? Math.round((consentAnalytics.total.rejected / total) * 100) : 0;
    const customPercent = total > 0 ? Math.round((consentAnalytics.total.custom / total) * 100) : 0;
    
    // Get last 7 days data
    const last7Days = {};
    const dates7 = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 7);
    dates7.forEach(date => last7Days[date] = consentAnalytics.daily[date]);
    
    // Get last 30 days data
    const last30Days = {};
    const dates30 = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 30);
    dates30.forEach(date => last30Days[date] = consentAnalytics.daily[date]);
    
    return `
    <div class="analytics-dashboard">
        <div class="dashboard-controls">
            <label><input type="checkbox" id="analyticsToggle" ${config.analytics.enabled ? 'checked' : ''}> Enable Analytics</label>
            <label><input type="checkbox" id="adminButtonToggle" ${config.behavior.showDashboard ? 'checked' : ''}> Show Admin Button</label>
        </div>
        
        <h3>${lang.dashboardTitle}</h3>
        
        <div class="stats-summary">
            <div class="stat-card accepted">
                <h4>${lang.statsAccepted}</h4>
                <div class="stat-value">${consentAnalytics.total.accepted}</div>
                <div class="stat-percentage">${acceptedPercent}%</div>
            </div>
            <div class="stat-card rejected">
                <h4>${lang.statsRejected}</h4>
                <div class="stat-value">${consentAnalytics.total.rejected}</div>
                <div class="stat-percentage">${rejectedPercent}%</div>
            </div>
            <div class="stat-card custom">
                <h4>${lang.statsCustom}</h4>
                <div class="stat-value">${consentAnalytics.total.custom}</div>
                <div class="stat-percentage">${customPercent}%</div>
            </div>
            <div class="stat-card total">
                <h4>${lang.statsTotal}</h4>
                <div class="stat-value">${total}</div>
                <div class="stat-percentage">100%</div>
            </div>
        </div>
        
        <div class="charts-container">
            <div class="chart-section">
                <h4>${lang.statsLast7Days}</h4>
                <canvas id="chart7Days" height="200"></canvas>
            </div>
            <div class="chart-section">
                <h4>${lang.statsLast30Days}</h4>
                <canvas id="chart30Days" height="200"></canvas>
            </div>
        </div>
        
        <div class="history-section">
            <h3>${lang.historyTitle}</h3>
            <table class="history-table">
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Status</th>
                        <th>Categories</th>
                        <th>Language</th>
                    </tr>
                </thead>
                <tbody>
                    ${consentHistory.slice(-10).reverse().map(entry => `
                        <tr>
                            <td>${new Date(entry.timestamp).toLocaleString()}</td>
                            <td>${entry.status}</td>
                            <td>${Object.entries(entry.categories)
                                .filter(([_, enabled]) => enabled)
                                .map(([cat]) => cat).join(', ')}</td>
                            <td>${entry.language}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    </div>
    
    <script>
        // Load Chart.js
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        document.head.appendChild(script);
        
        script.onload = () => {
            // 7 Days Chart
            new Chart(document.getElementById('chart7Days'), {
                type: 'bar',
                data: {
                    labels: ${JSON.stringify(dates7.reverse())},
                    datasets: [
                        {
                            label: '${lang.statsAccepted}',
                            data: ${JSON.stringify(dates7.map(date => last7Days[date].accepted))},
                            backgroundColor: '${colorScheme.primary}',
                            borderRadius: 4
                        },
                        {
                            label: '${lang.statsCustom}',
                            data: ${JSON.stringify(dates7.map(date => last7Days[date].custom))},
                            backgroundColor: '${colorScheme.secondary}',
                            borderRadius: 4
                        },
                        {
                            label: '${lang.statsRejected}',
                            data: ${JSON.stringify(dates7.map(date => last7Days[date].rejected))},
                            backgroundColor: '${colorScheme.danger}',
                            borderRadius: 4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    plugins: { legend: { position: 'top' } },
                    scales: {
                        x: { stacked: true },
                        y: { stacked: true, beginAtZero: true }
                    }
                }
            });
            
            // 30 Days Chart
            new Chart(document.getElementById('chart30Days'), {
                type: 'bar',
                data: {
                    labels: ${JSON.stringify(dates30.reverse())},
                    datasets: [
                        {
                            label: '${lang.statsAccepted}',
                            data: ${JSON.stringify(dates30.map(date => last30Days[date].accepted))},
                            backgroundColor: '${colorScheme.primary}',
                            borderRadius: 4
                        },
                        {
                            label: '${lang.statsCustom}',
                            data: ${JSON.stringify(dates30.map(date => last30Days[date].custom))},
                            backgroundColor: '${colorScheme.secondary}',
                            borderRadius: 4
                        },
                        {
                            label: '${lang.statsRejected}',
                            data: ${JSON.stringify(dates30.map(date => last30Days[date].rejected))},
                            backgroundColor: '${colorScheme.danger}',
                            borderRadius: 4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    plugins: { legend: { position: 'top' } },
                    scales: {
                        x: { stacked: true },
                        y: { stacked: true, beginAtZero: true }
                    }
                }
            });
        };
        
        // Analytics toggle
        document.getElementById('analyticsToggle')?.addEventListener('change', function() {
            config.analytics.enabled = this.checked;
            saveAnalyticsData();
        });
        
        // Admin button toggle
        document.getElementById('adminButtonToggle')?.addEventListener('change', function() {
            config.behavior.showDashboard = this.checked;
            const adminButton = document.getElementById('cookieAdminButton');
            adminButton.style.display = this.checked ? 'flex' : 'none';
            if (this.checked) adminButton.classList.add('show');
        });
    </script>`;
}

// Password prompt
function generatePasswordPrompt(language = 'en') {
    const lang = translations[language] || translations.en;
    return `
    <div class="password-prompt">
        <h3>${lang.passwordPrompt}</h3>
        <input type="password" id="dashboardPasswordInput" placeholder="Password">
        <button id="dashboardPasswordSubmit">${lang.passwordSubmit}</button>
        <p id="passwordError" class="error-message"></p>
    </div>`;
}

// Domain check
function isDomainAllowed() {
    if (config.allowedDomains.length === 0) return true;
    const currentDomain = window.location.hostname;
    return config.allowedDomains.some(domain => {
        return domain.startsWith('.') ? 
            currentDomain === domain.substring(1) || currentDomain.endsWith(domain) : 
            currentDomain === domain;
    });
}

// Geo-targeting check
async function checkGeoTargeting(geoData) {
    if (!geoData.country) {
        try {
            const response = await fetch('https://ipapi.co/json/');
            geoData = await response.json();
        } catch (error) {
            console.error('Geo-targeting fetch failed:', error);
            return true; // Fallback to allow banner if geo fetch fails
        }
    }
    
    if (config.geoConfig.blockedCountries.includes(geoData.country) ||
        config.geoConfig.blockedRegions.includes(geoData.region) ||
        config.geoConfig.blockedCities.includes(geoData.city)) {
        return false;
    }
    
    if ((config.geoConfig.allowedCountries.length > 0 && !config.geoConfig.allowedCountries.includes(geoData.country)) ||
        (config.geoConfig.allowedRegions.length > 0 && !config.geoConfig.allowedRegions.includes(geoData.region)) ||
        (config.geoConfig.allowedCities.length > 0 && !config.geoConfig.allowedCities.includes(geoData.city))) {
        return false;
    }
    
    return true;
}

// Language detection
function detectUserLanguage(geoData) {
    if (config.behavior.rememberLanguage) {
        const preferredLanguage = getCookie('preferred_language');
        if (preferredLanguage && translations[preferredLanguage]) return preferredLanguage;
    }
    
    if (config.languageConfig.autoDetectLanguage && geoData?.country) {
        const countryLang = countryLanguageMap[geoData.country];
        const lang = Array.isArray(countryLang) ? countryLang[0] : countryLang;
        if (lang && translations[lang]) return lang;
    }
    
    const browserLang = (navigator.language || 'en').split('-')[0];
    return translations[browserLang] ? browserLang : config.languageConfig.defaultLanguage;
}

// Available languages
function getAvailableLanguages() {
    return config.languageConfig.availableLanguages.length > 0 ? 
        config.languageConfig.availableLanguages.filter(lang => translations[lang]) : 
        Object.keys(translations);
}

// Language change
function changeLanguage(languageCode) {
    const lang = translations[languageCode] || translations.en;
    
    const updateElement = (selector, property, value) => {
        const element = document.querySelector(selector);
        if (element) element[property] = value;
    };
    
    // Update banner
    updateElement('#cookieConsentBanner h2', 'textContent', lang.title);
    updateElement('#cookieConsentBanner p', 'textContent', lang.description);
    updateElement('.privacy-policy-link', 'textContent', lang.privacy);
    updateElement('#acceptAllBtn', 'textContent', lang.accept);
    updateElement('#adjustConsentBtn', 'textContent', lang.customize);
    updateElement('#rejectAllBtn', 'textContent', lang.reject);
    
    // Update modal
    updateElement('#cookieSettingsModal h2', 'textContent', lang.title);
    const categories = {
        'functional': 'essential',
        'analytics': 'analytics',
        'performance': 'performance',
        'advertising': 'advertising',
        'uncategorized': 'other'
    };
    
    for (const [category, key] of Object.entries(categories)) {
        const container = document.querySelector(`input[data-category="${category}"]`)?.closest('.cookie-category');
        if (container) {
            updateElement(`input[data-category="${category}"] + .toggle-slider + h3`, 'textContent', lang[key]);
            updateElement(`input[data-category="${category}"] + .toggle-slider + h3 + p`, 'textContent', lang[`${key}Desc`]);
        }
    }
    
    updateElement('#rejectAllSettingsBtn', 'textContent', lang.reject);
    updateElement('#saveSettingsBtn', 'textContent', lang.save);
    updateElement('#acceptAllSettingsBtn', 'textContent', lang.accept);
    
    // Update floating buttons
    updateElement('#cookieFloatingButton', 'title', lang.title);
    updateElement('#cookieAdminButton', 'title', lang.dashboardTitle);
    
    // Update dashboard
    const dashboard = document.querySelector('.analytics-dashboard');
    if (dashboard) {
        dashboard.innerHTML = generateAnalyticsDashboard(languageCode);
        setupDashboardControls();
    }
    
    // Update password prompt
    const passwordPrompt = document.querySelector('.password-prompt');
    if (passwordPrompt) {
        passwordPrompt.innerHTML = generatePasswordPrompt(languageCode);
        setupPasswordPromptEvents();
    }
    
    if (config.behavior.rememberLanguage) {
        setCookie('preferred_language', languageCode, 365);
    }
}

// Cookie management utilities
function setCookie(name, value, days) {
    let expires = '';
    if (days !== -1) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value}${expires}; path=/; SameSite=Strict`;
}

function getCookie(name) {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(nameEQ)) {
            return cookie.substring(nameEQ.length);
        }
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict`;
}

// Generate cookie table for display
function generateCookieTable(cookies) {
    return `
    <table class="cookie-details-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Duration</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            ${cookies.map(cookie => `
                <tr>
                    <td><code>${cookie.name}</code></td>
                    <td>${cookie.duration}</td>
                    <td>${cookie.description}</td>
                </tr>
            `).join('')}
        </tbody>
    </table>`;
}

// Consent management
function acceptAllCookies() {
    const consentData = {
        status: 'accepted',
        categories: {
            functional: true,
            analytics: true,
            performance: true,
            advertising: true,
            uncategorized: true
        },
        timestamp: new Date().toISOString()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
    updateConsentStats('accepted', consentData);
}

function rejectAllCookies() {
    const consentData = {
        status: 'rejected',
        categories: {
            functional: true, // Essential cookies always enabled
            analytics: false,
            performance: false,
            advertising: false,
            uncategorized: false
        },
        timestamp: new Date().toISOString()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
    updateConsentStats('rejected', consentData);
}

function saveCustomSettings() {
    const consentData = {
        status: 'custom',
        categories: {
            functional: true, // Essential cookies always enabled
            analytics: document.querySelector('input[data-category="analytics"]').checked,
            performance: document.querySelector('input[data-category="performance"]').checked,
            advertising: document.querySelector('input[data-category="advertising"]').checked,
            uncategorized: document.querySelector('input[data-category="uncategorized"]')?.checked || false
        },
        timestamp: new Date().toISOString()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
    updateConsentStats('custom', consentData);
}

function updateConsentMode(consentData) {
    const consentMap = {
        functional: ['functionality_storage', 'security_storage'],
        analytics: ['analytics_storage'],
        performance: ['personalization_storage'],
        advertising: ['ad_storage', 'ad_user_data', 'ad_personalization'],
        uncategorized: []
    };
    
    const consentUpdate = {};
    Object.entries(consentMap).forEach(([category, storageTypes]) => {
        storageTypes.forEach(type => {
            consentUpdate[type] = consentData.categories[category] ? 'granted' : 'denied';
        });
    });
    
    // Ensure security_storage is always granted
    consentUpdate['security_storage'] = 'granted';
    
    gtag('consent', 'update', consentUpdate);
}

function loadCookiesAccordingToConsent(consentData) {
    const cookies = scanAndCategorizeCookies();
    
    Object.keys(cookies).forEach(category => {
        if (category === 'functional' || consentData.categories[category]) {
            // Cookies in this category are allowed, no action needed
            return;
        }
        
        // Delete cookies in non-consented categories
        cookies[category].forEach(cookie => {
            deleteCookie(cookie.name);
        });
    });
}

// UI control functions
function showCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
        banner.style.display = 'block';
        setTimeout(() => banner.classList.add('show'), 100);
    }
}

function hideCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
        banner.classList.remove('show');
        setTimeout(() => banner.style.display = 'none', 400);
    }
}

function showSettingsModal() {
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('show'), 100);
        hideCookieBanner();
    }
}

function hideSettingsModal() {
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    }
}

function showFloatingButton() {
    if (!config.behavior.floatingButton) return;
    const button = document.getElementById('cookieFloatingButton');
    if (button) {
        button.style.display = 'flex';
        setTimeout(() => button.classList.add('show'), 100);
    }
}

function showAnalyticsDashboard() {
    const modal = document.getElementById('cookieAnalyticsModal');
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('show'), 100);
    }
}

function hideAnalyticsDashboard() {
    const modal = document.getElementById('cookieAnalyticsModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    }
}

// Update cookie tables
function updateCookieTables(newCookies) {
    const categories = ['functional', 'analytics', 'performance', 'advertising', 'uncategorized'];
    categories.forEach(category => {
        const container = document.querySelector(`input[data-category="${category}"]`)?.closest('.cookie-category');
        if (container) {
            const detailsContent = container.querySelector('.cookie-details-content');
            if (detailsContent) {
                detailsContent.innerHTML = newCookies[category].length > 0 ?
                    generateCookieTable(newCookies[category]) :
                    `<p class="no-cookies-message">No cookies in this category detected.</p>`;
            }
        }
    });
}

// Main initialization
document.addEventListener('DOMContentLoaded', async function() {
    if (!isDomainAllowed()) {
        console.log('Cookie consent banner disabled for this domain');
        return;
    }
    
    if (config.analytics.enabled) loadAnalyticsData();
    
    let geoData = {};
    if (window.dataLayer?.length > 0) {
        const geoItem = window.dataLayer.find(item => item.country || item.region || item.city);
        if (geoItem) {
            geoData = {
                country: geoItem.country || '',
                region: geoItem.region || '',
                city: geoItem.city || '',
                language: geoItem.language || ''
            };
        }
    }
    
    if (!(await checkGeoTargeting(geoData))) {
        console.log('Cookie consent banner disabled for this location');
        return;
    }
    
    const detectedLanguage = detectUserLanguage(geoData);
    const detectedCookies = scanAndCategorizeCookies();
    
    if (detectedCookies.uncategorized.length > 0) {
        console.log('Uncategorized cookies found:', detectedCookies.uncategorized);
        autoCategorizeCookies(detectedCookies.uncategorized).forEach(cookie => {
            const category = determineCookieCategory(cookie.name);
            if (category && category !== 'uncategorized') {
                detectedCookies[category].push(cookie);
                detectedCookies.uncategorized = detectedCookies.uncategorized.filter(c => c.name !== cookie.name);
            }
        });
    }
    
    injectConsentHTML(detectedCookies, detectedLanguage);
    initializeCookieConsent(detectedCookies, detectedLanguage);
    
    if (getCookie('cookie_consent')) showFloatingButton();
    
    trackMarketingParameters();
    
    setInterval(() => {
        const newCookies = scanAndCategorizeCookies();
        if (JSON.stringify(newCookies) !== JSON.stringify(detectedCookies)) {
            updateCookieTables(newCookies);
        }
    }, 30000);
    
    if (config.behavior.acceptOnScroll) {
        window.addEventListener('scroll', handleScrollAcceptance);
    }

    // Handle accept on continue (click anywhere outside banner)
    if (config.behavior.acceptOnContinue) {
        document.addEventListener('click', function(event) {
            const banner = document.getElementById('cookieConsentBanner');
            if (banner && banner.classList.contains('show') && !banner.contains(event.target) && 
                !event.target.closest('#cookieSettingsModal') && 
                !event.target.closest('#cookieFloatingButton')) {
                acceptAllCookies();
                hideCookieBanner();
                showFloatingButton();
            }
        });
    }
});

// Scroll-based acceptance
function handleScrollAcceptance() {
    if (getCookie('cookie_consent')) {
        window.removeEventListener('scroll', handleScrollAcceptance);
        return;
    }
    
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercentage > 50) {
        acceptAllCookies();
        hideCookieBanner();
        showFloatingButton();
        window.removeEventListener('scroll', handleScrollAcceptance);
    }
}

// Cookie categorization
function autoCategorizeCookies(uncategorizedCookies) {
    return uncategorizedCookies.map(cookie => {
        const category = determineCookieCategory(cookie.name);
        if (category) {
            cookieDatabase[cookie.name] = {
                category,
                duration: cookie.duration,
                description: cookie.description || 'Automatically categorized'
            };
        }
        return cookie;
    });
}

function determineCookieCategory(cookieName) {
    const lowerName = cookieName.toLowerCase();
    if (/_ga|_gid|_gat|analytics|stats|measure|track|tk_ai/.test(lowerName)) return 'analytics';
    if (/_gcl|_fbp|fr|ad|ads|tracking|marketing|doubleclick|gclid/.test(lowerName)) return 'advertising';
    if (/sess|token|auth|login|user|pref|settings|cart|checkout|hash|items/.test(lowerName)) return 'functional';
    if (/perf|speed|optimize|cdn|cache/.test(lowerName)) return 'performance';
    return null;
}

// Cookie scanning
function scanAndCategorizeCookies() {
    const cookies = document.cookie.split(';');
    const result = {
        functional: [],
        analytics: [],
        performance: [],
        advertising: [],
        uncategorized: []
    };

    cookies.forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        if (!name) return;
        
        let categorized = false;
        
        for (const pattern in cookieDatabase) {
            if (name.startsWith(pattern) || name === pattern) {
                const cookieInfo = cookieDatabase[pattern];
                result[cookieInfo.category].push({
                    name,
                    value: value || '',
                    duration: cookieInfo.duration || getCookieDuration(name),
                    description: cookieInfo.description || 'Unknown purpose'
                });
                categorized = true;
                break;
            }
        }
        
        if (!categorized && name !== 'cookie_consent') {
            result.uncategorized.push({
                name,
                value: value || '',
                duration: getCookieDuration(name),
                description: 'Unknown cookie purpose'
            });
        }
    });
    
    return result;
}

function getCookieDuration(name) {
    const cookieMatch = document.cookie.match(new RegExp(`${name}=[^;]+(;|$)`));
    if (!cookieMatch) return "Session";
    
    const expiresMatch = document.cookie.match(new RegExp(`${name}=[^;]+; expires=([^;]+)`));
    if (expiresMatch && expiresMatch[1]) {
        const expiryDate = new Date(expiresMatch[1]);
        return expiryDate > new Date() ? 
            `Expires ${expiryDate.toLocaleDateString()}` : "Expired";
    }
    return "Session";
}

function trackMarketingParameters() {
    const params = new URLSearchParams(window.location.search);
    const marketingData = {};
    
    ['gclid', 'fbclid', 'utm_source', 'utm_medium', 'utm_campaign'].forEach(param => {
        if (params.has(param)) marketingData[param] = params.get(param);
    });
    
    if (Object.keys(marketingData).length > 0) {
        window.dataLayer.push({ 'event': 'marketingParameters', ...marketingData });
    }
}

function injectConsentHTML(detectedCookies, language = 'en') {
    const lang = translations[language] || translations.en;
    const availableLanguages = getAvailableLanguages();
    const currentTheme = config.uiTheme === 'classic' ? classicColorScheme : colorScheme;
    
    const generateCategorySection = (category) => {
        const cookies = detectedCookies[category];
        const categoryKey = category === 'functional' ? 'essential' : category;
        const isEssential = category === 'functional';
        
        return `
        <div class="cookie-category">
            <div class="toggle-container">
                <h3>${lang[categoryKey]}</h3>
                <label class="toggle-switch">
                    <input type="checkbox" data-category="${category}" ${isEssential ? 'checked disabled' : ''}>
                    <span class="toggle-slider"></span>
                </label>
            </div>
            <p>${lang[`${categoryKey}Desc`]}</p>
            <div class="cookie-details-container">
                <div class="cookie-details-header">
                    <span>Cookie Details</span>
                    <span class="toggle-details">+</span>
                </div>
                <div class="cookie-details-content" style="display: none;">
                    ${cookies.length > 0 ? 
                        generateCookieTable(cookies) : 
                        `<p class="no-cookies-message">No cookies in this category detected.</p>`}
                </div>
            </div>
        </div>`;
    };
    
    const languageSelector = config.languageConfig.showLanguageSelector ? `
    <div class="language-selector">
        <select id="cookieLanguageSelect">
            ${availableLanguages.map(code => `
                <option value="${code}" ${code === language ? 'selected' : ''}>${translations[code].language}</option>
            `).join('')}
        </select>
    </div>` : '';
    
    const adminButton = config.analytics.enabled && config.behavior.showDashboard ? `
    <div id="cookieAdminButton" class="cookie-admin-button" title="${lang.dashboardTitle}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM95.4 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.4 399.4C48.6 355.1 17.3 304 2.5 268.3C-.8 260.4-.8 251.6 2.5 243.7C17.3 207.1 48.6 156 95.4 112.6V112.6zM288 80C218.6 80 160 138.6 160 208C160 277.4 218.6 336 288 336C357.4 336 416 277.4 416 208C416 138.6 357.4 80 288 80zM44.96 256C56.53 286.1 83.51 329.2 124.4 368C165.3 406.8 219.1 432 288 432C356.9 432 410.7 406.8 451.6 368C492.5 329.2 519.5 286.1 531 256C519.5 225.9 492.5 182.8 451.6 144C410.7 105.2 356.9 80 288 80C219.1 80 165.3 105.2 124.4 144C83.51 182.8 56.53 225.9 44.96 256V256z"/>
        </svg>
    </div>` : '';
    
    const html = `
    <!-- Main Consent Banner -->
    <div id="cookieConsentBanner" class="cookie-consent-banner">
        <div class="cookie-consent-container">
            ${languageSelector}
            <div class="cookie-consent-content">
                <h2>${lang.title}</h2>
                <p>${lang.description}</p>
                <a href="/privacy-policy/" class="privacy-policy-link">${lang.privacy}</a>
            </div>
            <div class="cookie-consent-buttons">
                <button id="acceptAllBtn" class="cookie-btn accept-btn">${lang.accept}</button>
                <button id="adjustConsentBtn" class="cookie-btn adjust-btn">${lang.customize}</button>
                <button id="rejectAllBtn" class="cookie-btn reject-btn">${lang.reject}</button>
            </div>
        </div>
    </div>

    <!-- Settings Modal -->
    <div id="cookieSettingsModal" class="cookie-settings-modal">
        <div class="cookie-settings-content">
            <div class="cookie-settings-header">
                <h2>${lang.title}</h2>
                <span class="close-modal">×</span>
            </div>
            <div class="cookie-settings-body">
                ${generateCategorySection('functional')}
                ${generateCategorySection('analytics')}
                ${generateCategorySection('performance')}
                ${generateCategorySection('advertising')}
                ${detectedCookies.uncategorized.length > 0 ? generateCategorySection('uncategorized') : ''}
            </div>
            <div class="cookie-settings-footer">
                <button id="rejectAllSettingsBtn" class="cookie-btn reject-btn">${lang.reject}</button>
                <button id="saveSettingsBtn" class="cookie-btn save-btn">${lang.save}</button>
                <button id="acceptAllSettingsBtn" class="cookie-btn accept-btn">${lang.accept}</button>
            </div>
        </div>
    </div>

    <!-- Floating Settings Button -->
    <div id="cookieFloatingButton" class="cookie-settings-button" title="${lang.title}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9-64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.7-5.9-9.9-11.6-9.9c-51.5 0-101.5-14.7-144.9-42.3l-61.2-42.4c-10.1-7-21.8-11.1-33.9-11.9c-12.1-.9-24.1 1.6-34.9 7.2l-61.2 35.1c-6.4 3.7-14.6 1.9-19.3-4.1s-4.7-13.7 1.1-18.4l61.2-42.4c43.4-30.1 97.1-46.4 151.8-46.4c5.7 0 10.7-4.1 11.6-9.8zM133.4 303.6c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9s46.9 21 46.9 46.9s-21 46.9-46.9 46.9zm116.1-90.3c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48zm92.3 99.7c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48z"/>
        </svg>
    </div>
    
    ${adminButton}
    
    <!-- Analytics Dashboard -->
    <div id="cookieAnalyticsModal" class="cookie-analytics-modal">
        <div class="cookie-analytics-content">
            <div class="cookie-analytics-header">
                <h2>${lang.dashboardTitle}</h2>
                <span class="close-analytics-modal">×</span>
            </div>
            <div class="cookie-analytics-body">
                ${config.analytics.passwordProtect && !isDashboardAuthenticated ? 
                    generatePasswordPrompt(language) : 
                    generateAnalyticsDashboard(language)}
            </div>
        </div>
    </div>
    
    <style>
    /* Main Banner Styles */
    .cookie-consent-banner {
        position: fixed;
        z-index: 9999;
        width: 440px;
        background: ${currentTheme.background};
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        padding: 24px;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        display: none;
        transform: translateY(20px);
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        border: none;
        overflow: hidden;
        ${
            config.behavior.bannerPosition === 'middle' ? `
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                bottom: auto;
                width: 500px;
            ` :
            config.behavior.bannerPosition === 'left' ? `
                left: 20px;
                bottom: 20px;
                right: auto;
            ` : `
                right: 20px;
                bottom: 20px;
                left: auto;
            `
        }
    }

    .cookie-consent-banner.show {
        transform: ${config.behavior.bannerPosition === 'middle' ? 'translate(-50%, -50%)' : 'translateY(0)'};
        opacity: 1;
        display: block;
    }

    .cookie-consent-content h2 {
        margin: 0 0 16px 0;
        font-size: 18px;
        color: ${currentTheme.textDark};
        font-weight: 600;
        line-height: 1.4;
        letter-spacing: -0.2px;
    }

    .cookie-consent-content p {
        margin: 0 0 24px 0;
        font-size: 14px;
        color: ${currentTheme.textLight};
        line-height: 1.5;
    }

    .privacy-policy-link {
        color: ${currentTheme.secondary};
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
        display: inline-block;
        margin-bottom: 24px;
        transition: color 0.2s ease;
    }

    .privacy-policy-link:hover {
        color: #1d6fa5;
    }

    .cookie-consent-buttons {
        display: flex;
        gap: 12px;
        margin-top: 8px;
    }

    .cookie-btn {
        padding: 12px 20px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        text-align: center;
        border: none;
        flex: 1;
        letter-spacing: 0.2px;
    }

    .adjust-btn {
        background-color: #f8f9fa;
        color: #333;
        border: 1px solid #e0e0e0;
    }

    .adjust-btn:hover {
        background-color: #f0f2f5;
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    .reject-btn {
        background-color: #fff;
        color: ${currentTheme.danger};
        border: 1px solid ${currentTheme.danger};
    }

    .reject-btn:hover {
        background-color: #ffeeed;
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(231, 76, 60, 0.15);
    }

    .accept-btn {
        background-color: ${currentTheme.primary};
        color: white;
        border: 1px solid ${currentTheme.primary};
        box-shadow: 0 2px 12px rgba(46, 204, 113, 0.3);
    }

    .accept-btn:hover {
        background-color: #27ae60;
        transform: translateY(-1px);
        box-shadow: 0 4px 16px rgba(46, 204, 113, 0.4);
    }

    /* Language Selector */
    .language-selector {
        position: absolute;
        top: 15px;
        right: 15px;
    }

    .language-selector select {
        padding: 6px 10px;
        border-radius: 6px;
        border: 1px solid #e0e0e0;
        background-color: #f8f9fa;
        font-size: 13px;
        color: #333;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .language-selector select:hover {
        border-color: ${currentTheme.secondary};
        background-color: #fff;
    }

    .language-selector select:focus {
        outline: none;
        border-color: ${currentTheme.secondary};
        box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
    }

    /* Settings Modal */
    .cookie-settings-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 10000;
        overflow-y: auto;
        padding: 30px 0;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .cookie-settings-modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
    }

    .cookie-settings-content {
        background-color: ${currentTheme.background};
        margin: 0 auto;
        width: 845px;
        max-height: 470px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        transform: translateY(20px);
        transition: transform 0.3s ease;
        display: flex;
        flex-direction: column;
    }

    .cookie-settings-modal.show .cookie-settings-content {
        transform: translateY(0);
    }

    .cookie-settings-header {
        padding: 20px 30px;
        border-bottom: 1px solid #ecf0f1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f8f9fa;
    }

    .cookie-settings-header h2 {
        margin: 0;
        color: ${currentTheme.textDark};
        font-size: 1.5rem;
        font-weight: 600;
    }

    .close-modal {
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        color: ${currentTheme.textLight};
        background: none;
        border: none;
        padding: 0 10px;
        transition: color 0.2s ease;
    }

    .close-modal:hover {
        color: ${currentTheme.danger};
    }

    .cookie-settings-body {
        padding: 25px 30px;
        background-color: #fefefe;
        overflow-y: auto;
        flex: 1;
    }

    .cookie-category {
        margin-bottom: 25px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ecf0f1;
        transition: all 0.3s ease;
    }

    .cookie-category:hover {
        background-color: #f8f9fa;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
    }

    .cookie-category:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    /* Toggle Switch */
    .toggle-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
    }

    .toggle-container h3 {
        margin: 0;
        font-size: 1.1rem;
        color: ${currentTheme.textDark};
        font-weight: 600;
    }

    .toggle-switch {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 26px;
    }

    .toggle-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .toggle-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${currentTheme.toggleInactive};
        transition: .4s;
        border-radius: 34px;
    }

    .toggle-slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }

    input:checked + .toggle-slider {
        background-color: ${currentTheme.toggleActive};
    }

    input:checked + .toggle-slider:before {
        transform: translateX(24px);
    }

    input:disabled + .toggle-slider {
        background-color: #95a5a6;
        cursor: not-allowed;
    }

    /* Cookie Details */
    .cookie-details-container {
        margin-top: 15px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        overflow: hidden;
        transition: all 0.3s ease;
    }

    .cookie-details-container:hover {
        box-shadow: 0 3px 12px rgba(0,0,0,0.1);
        border-color: ${currentTheme.primary};
    }

    .cookie-details-header {
        background-color: #f5f5f5;
        padding: 12px 18px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .cookie-details-header:hover {
        background-color: #eeeeee;
    }

    .cookie-details-content {
        padding: 18px;
        background-color: #fafafa;
        border-top: 1px solid #e0e0e0;
        display: none;
        animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .cookie-details-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }

    .cookie-details-table th {
        text-align: left;
        padding: 10px 12px;
        background-color: #f0f0f0;
        font-weight: 600;
        border-bottom: 2px solid #e0e0e0;
        color: ${currentTheme.textDark};
    }

    .cookie-details-table td {
        padding: 10px 12px;
        border-bottom: 1px solid #e0e0e0;
        color: ${currentTheme.textLight};
    }

    .cookie-details-table tr:last-child td {
        border-bottom: none;
    }

    .cookie-details-table tr:hover {
        background-color: #f5f5f5;
    }

    .cookie-details-table code {
        background-color: #f0f0f0;
        padding: 2px 5px;
        border-radius: 3px;
        font-family: monospace;
        color: ${currentTheme.textDark};
    }

    .no-cookies-message {
        padding: 15px;
        text-align: center;
        color: #666;
        font-style: italic;
    }

    /* Floating Settings Button */
    .cookie-settings-button {
        position: fixed;
        bottom: 30px;
        ${config.behavior.floatingButtonPosition === 'left' ? 'left: 30px;' : 'right: 30px;'}
        width: 60px;
        height: 60px;
        background-color: ${currentTheme.primary};
        border-radius: 50%;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        z-index: 9998;
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
        border: 2px solid white;
    }

    .cookie-settings-button.show {
        opacity: 1;
        transform: translateY(0);
    }

    .cookie-settings-button:hover {
        background-color: #27ae60;
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    .cookie-settings-button svg {
        width: 28px;
        height: 28px;
        fill: white;
        transition: transform 0.3s ease;
    }

    .cookie-settings-button:hover svg {
        transform: rotate(15deg);
    }

    /* Admin Button */
    .cookie-admin-button {
        position: fixed;
        ${config.behavior.adminButtonPosition === 'left' ? 
          'left: 30px; bottom: 100px;' : 
          'right: 30px; bottom: 100px;'}
        width: 60px;
        height: 60px;
        background-color: ${currentTheme.secondary};
        border-radius: 50%;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        z-index: 9997;
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
        border: 2px solid white;
    }

    .cookie-admin-button.show {
        opacity: 1;
        transform: translateY(0);
    }

    .cookie-admin-button:hover {
        background-color: #2980b9;
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    .cookie-admin-button svg {
        width: 28px;
        height: 28px;
        fill: white;
        transition: transform 0.3s ease;
    }

    .cookie-admin-button:hover svg {
        transform: rotate(15deg);
    }

    /* Analytics Dashboard */
    .cookie-analytics-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 10001;
        overflow-y: auto;
        padding: 30px 0;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .cookie-analytics-modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
    }

    .cookie-analytics-content {
        background-color: ${currentTheme.background};
        margin: 0 auto;
        width: 900px;
        max-height: 600px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        transform: translateY(20px);
        transition: transform 0.3s ease;
        display: flex;
        flex-direction: column;
    }

    .cookie-analytics-modal.show .cookie-analytics-content {
        transform: translateY(0);
    }

    .cookie-analytics-header {
        padding: 20px 30px;
        border-bottom: 1px solid #ecf0f1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f8f9fa;
    }

    .cookie-analytics-header h2 {
        margin: 0;
        color: ${currentTheme.textDark};
        font-size: 1.5rem;
        font-weight: 600;
    }

    .close-analytics-modal {
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        color: ${currentTheme.textLight};
        background: none;
        border: none;
        padding: 0 10px;
        transition: color 0.2s ease;
    }

    .close-analytics-modal:hover {
        color: ${currentTheme.danger};
    }

    .cookie-analytics-body {
        padding: 25px 30px;
        background-color: #fefefe;
        overflow-y: auto;
        flex: 1;
    }

    /* Password Prompt */
    .password-prompt {
        text-align: center;
        padding: 30px;
    }

    .password-prompt h3 {
        color: ${currentTheme.textDark};
        margin-bottom: 20px;
    }

    .password-prompt input {
        padding: 12px 15px;
        border-radius: 6px;
        border: 1px solid #e0e0e0;
        width: 100%;
        max-width: 300px;
        margin-bottom: 15px;
        font-size: 14px;
    }

    .password-prompt button {
        padding: 12px 25px;
        background-color: ${currentTheme.primary};
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.2s ease;
    }

    .password-prompt button:hover {
        background-color: #27ae60;
    }

    .error-message {
        color: ${currentTheme.danger};
        margin-top: 10px;
        font-size: 14px;
    }

    /* Stats Dashboard */
    .analytics-dashboard {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .dashboard-controls {
        margin-bottom: 20px;
        display: flex;
        gap: 20px;
    }

    .dashboard-controls label {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: ${currentTheme.textDark};
    }

    .analytics-dashboard h3 {
        color: ${currentTheme.textDark};
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 1.3rem;
    }

    .stats-summary {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
        margin-bottom: 30px;
    }

    .stat-card {
        background-color: #f8f9fa;
        border-radius: 8px;
        padding: 15px;
        text-align: center;
        transition: all 0.3s ease;
    }

    .stat-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .stat-card.accepted {
        border-top: 4px solid ${currentTheme.primary};
    }

    .stat-card.rejected {
        border-top: 4px solid ${currentTheme.danger};
    }

    .stat-card.custom {
        border-top: 4px solid ${currentTheme.secondary};
    }

    .stat-card.total {
        border-top: 4px solid #9b59b6;
    }

    .stat-card h4 {
        margin: 0 0 10px 0;
        font-size: 1rem;
        color: ${currentTheme.textLight};
    }

    .stat-value {
        font-size: 1.8rem;
        font-weight: 700;
        color: ${currentTheme.textDark};
        margin-bottom: 5px;
    }

    .stat-percentage {
        font-size: 1rem;
        color: ${currentTheme.textLight};
    }

    .charts-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
        margin-bottom: 30px;
    }

    .chart-section {
        background-color: #f8f9fa;
        border-radius: 8px;
        padding: 20px;
    }

    .chart-section h4 {
        margin: 0 0 15px 0;
        font-size: 1.1rem;
        color: ${currentTheme.textDark};
    }

    .history-section {
        margin-top: 30px;
    }

    .history-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }

    .history-table th {
        text-align: left;
        padding: 10px 12px;
        background-color: #f0f0f0;
        font-weight: 600;
        border-bottom: 2px solid #e0e0e0;
        color: ${currentTheme.textDark};
    }

    .history-table td {
        padding: 10px 12px;
        border-bottom: 1px solid #e0e0e0;
        color: ${currentTheme.textLight};
    }

    .history-table tr:last-child td {
        border-bottom: none;
    }

    .history-table tr:hover {
        background-color: #f5f5f5;
    }

    /* Footer Buttons */
    .cookie-settings-footer {
        padding: 20px 30px;
        background-color: #f8f9fa;
        display: flex;
        justify-content: flex-end;
        gap: 15px;
        border-top: 1px solid #ecf0f1;
    }

    .save-btn {
        background-color: ${currentTheme.secondary};
        color: white;
        background-image: linear-gradient(to right, ${currentTheme.secondary}, #2980b9);
    }

    .save-btn:hover {
        background-color: #2980b9;
        transform: translateY(-2px);
        box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    }

    /* Responsive Styles */
    @media (max-width: 900px) {
        .cookie-settings-content {
            width: 90%;
            max-height: 80vh;
        }
        
        .cookie-analytics-content {
            width: 90%;
            max-height: 80vh;
        }
        
        .stats-summary {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .cookie-consent-banner {
            width: 90% !important;
            ${config.behavior.bannerPosition === 'middle' ? `
                left: 50%;
                transform: translateX(-50%);
                top: 50%;
            ` : config.behavior.bannerPosition === 'left' ? `
                left: 5%;
                right: auto;
            ` : `
                right: 5%;
                left: auto;
            `}
        }
    }

    @media (max-width: 768px) {
        .cookie-consent-buttons {
        
        .cookie-consent-buttons {
            flex-direction: column;
        }
        
        .cookie-btn {
            width: 100%;
            margin-bottom: 8px;
        }
        
        .cookie-btn:last-child {
            margin-bottom: 0;
        }
        
        .cookie-settings-header {
            padding: 15px 20px;
        }
        
        .cookie-settings-body {
            padding: 15px 20px;
        }
        
        .cookie-settings-footer {
            flex-direction: column;
            padding: 15px 20px;
        }
        
        .cookie-settings-footer .cookie-btn {
            width: 100%;
            margin-bottom: 8px;
        }
        
        .cookie-settings-footer .cookie-btn:last-child {
            margin-bottom: 0;
        }
        
        .stats-summary {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 480px) {
        .cookie-consent-banner {
            padding: 15px;
            width: calc(100% - 30px);
            ${config.behavior.bannerPosition === 'bottom-left' ? 'left: 15px;' : 
             config.behavior.bannerPosition === 'bottom-right' ? 'right: 15px;' : 
             'left: 15px; right: 15px;'}
            ${config.behavior.bannerPosition === 'center' ? 'top: 50%; transform: translate(-50%, -50%);' : 'bottom: 15px;'}
        }
        
        .cookie-consent-content h2 {
            font-size: 1.1rem;
        }
        
        .cookie-consent-content p {
            font-size: 0.85rem;
            margin-bottom: 15px;
        }
        
        .privacy-policy-link {
            margin-bottom: 15px;
        }
        
        .cookie-btn {
            padding: 10px;
            font-size: 0.85rem;
        }
        
        .cookie-settings-button {
            width: 50px;
            height: 50px;
            bottom: 15px;
            ${config.behavior.floatingButtonPosition === 'left' ? 'left: 15px;' : 'right: 15px;'}
        }
        
        .cookie-admin-button {
            width: 50px;
            height: 50px;
            ${config.behavior.adminButtonPosition === 'left' ? 
              'left: 15px;' : 'right: 15px;'}
            bottom: 80px;
        }
        
        .cookie-settings-button svg {
            width: 22px;
            height: 22px;
        }
        
        .cookie-admin-button svg {
            width: 22px;
            height: 22px;
        }
        
        .cookie-settings-header h2 {
            font-size: 1.2rem;
        }
        
        .toggle-container h3 {
            font-size: 1rem;
        }
        
        .cookie-details-table {
            font-size: 0.8rem;
        }
        
        .cookie-details-table th, 
        .cookie-details-table td {
            padding: 8px 10px;
        }
    }
    </style>`;
    
    document.body.insertAdjacentHTML('beforeend', html);
}

function initializeCookieConsent(detectedCookies, language) {
    const consentGiven = getCookie('cookie_consent');
    
    // Apply banner delay if configured
    if (!consentGiven && config.behavior.autoShow) {
        if (config.behavior.bannerDelay > 0) {
            setTimeout(showCookieBanner, config.behavior.bannerDelay * 1000);
        } else {
            showCookieBanner();
        }
    } else if (consentGiven) {
        const consentData = JSON.parse(consentGiven);
        updateConsentMode(consentData);
        loadCookiesAccordingToConsent(consentData);
        showFloatingButton();
    }
    
    // Set up event listeners
    setupEventListeners();
    
    // Setup cookie details toggles
    document.querySelectorAll('.cookie-details-header').forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const toggle = this.querySelector('.toggle-details');
            if (content.style.display === 'none') {
                content.style.display = 'block';
                toggle.textContent = '−';
            } else {
                content.style.display = 'none';
                toggle.textContent = '+';
            }
        });
    });
    
    // Setup language selector change event
    const languageSelect = document.getElementById('cookieLanguageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
    
    // Setup admin button if enabled
    if (config.analytics.enabled && config.analytics.showDashboard && config.behavior.showAdminButton) {
        const adminButton = document.getElementById('cookieAdminButton');
        if (adminButton) {
            adminButton.addEventListener('click', showAnalyticsDashboard);
            setTimeout(() => {
                adminButton.style.display = 'flex';
                adminButton.classList.add('show');
            }, 100);
        }
    }
    
    // Setup password prompt events if needed
    if (config.analytics.passwordProtect && !isDashboardAuthenticated) {
        setupPasswordPromptEvents();
    }
}

function setupPasswordPromptEvents() {
    const passwordSubmit = document.getElementById('dashboardPasswordSubmit');
    if (passwordSubmit) {
        passwordSubmit.addEventListener('click', function() {
            const passwordInput = document.getElementById('dashboardPasswordInput');
            const errorMessage = document.getElementById('passwordError');
            
            if (passwordInput.value === config.analytics.dashboardPassword) {
                isDashboardAuthenticated = true;
                // Set cookie with or without expiration based on config
                if (config.analytics.passwordNeverExpire) {
                    setCookie('dashboard_auth', 'true', 36500); // ~100 years
                } else {
                    setCookie('dashboard_auth', 'true', config.analytics.passwordCookieDuration);
                }
                
                // Update the dashboard content
                const lang = document.getElementById('cookieLanguageSelect') ? 
                    document.getElementById('cookieLanguageSelect').value : 'en';
                document.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(lang);
            } else {
                const lang = document.getElementById('cookieLanguageSelect') ? 
                    document.getElementById('cookieLanguageSelect').value : 'en';
                errorMessage.textContent = translations[lang].passwordIncorrect;
            }
        });
    }
}

function setupEventListeners() {
    document.getElementById('acceptAllBtn').addEventListener('click', function() {
        acceptAllCookies();
        hideCookieBanner();
        showFloatingButton();
    });
    
    document.getElementById('rejectAllBtn').addEventListener('click', function() {
        rejectAllCookies();
        hideCookieBanner();
        showFloatingButton();
    });
    
    document.getElementById('adjustConsentBtn').addEventListener('click', function() {
        showCookieSettings();
        hideCookieBanner();
    });
    
    document.getElementById('acceptAllSettingsBtn').addEventListener('click', function() {
        acceptAllCookies();
        hideCookieSettings();
        showFloatingButton();
    });
    
    document.getElementById('rejectAllSettingsBtn').addEventListener('click', function() {
        rejectAllCookies();
        hideCookieSettings();
        showFloatingButton();
    });
    
    document.getElementById('saveSettingsBtn').addEventListener('click', function() {
        saveCustomSettings();
        hideCookieSettings();
        showFloatingButton();
    });
    
    document.querySelector('.close-modal').addEventListener('click', function() {
        hideCookieSettings();
        if (!getCookie('cookie_consent')) {
            showCookieBanner();
        }
    });
    
    document.querySelector('.close-analytics-modal').addEventListener('click', function() {
        hideAnalyticsDashboard();
    });
    
    document.getElementById('cookieFloatingButton').addEventListener('click', function() {
        if (!document.getElementById('cookieConsentBanner').classList.contains('show')) {
            showCookieBanner();
        } else {
            hideCookieBanner();
        }
    });
}

function updateCookieTables(detectedCookies) {
    const categories = ['functional', 'analytics', 'performance', 'advertising', 'uncategorized'];
    
    categories.forEach(category => {
        const container = document.querySelector(`input[data-category="${category}"]`)?.closest('.cookie-category');
        if (container) {
            const content = container.querySelector('.cookie-details-content');
            if (content) {
                content.innerHTML = detectedCookies[category].length > 0 ? 
                    generateCookieTable(detectedCookies[category]) : 
                    '<p class="no-cookies-message">No cookies in this category detected.</p>';
            }
        }
    });
}

function generateCookieTable(cookies) {
    return `
    <table class="cookie-details-table">
        <thead>
            <tr>
                <th>Cookie Name</th>
                <th>Value</th>
                <th>Duration</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            ${cookies.map(cookie => `
            <tr>
                <td><code>${cookie.name}</code></td>
                <td><code>${cookie.value.substring(0, 20)}${cookie.value.length > 20 ? '...' : ''}</code></td>
                <td>${cookie.duration}</td>
                <td>${cookie.description}</td>
            </tr>`).join('')}
        </tbody>
    </table>`;
}

function showFloatingButton() {
    if (!config.behavior.floatingButton || !config.behavior.showFloatingButton) return;
    
    const button = document.getElementById('cookieFloatingButton');
    button.style.display = 'flex';
    setTimeout(() => {
        button.classList.add('show');
    }, 100);
}

function hideFloatingButton() {
    const button = document.getElementById('cookieFloatingButton');
    button.classList.remove('show');
    setTimeout(() => {
        button.style.display = 'none';
    }, 300);
}

function showCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    banner.style.display = 'block';
    setTimeout(() => {
        banner.classList.add('show');
    }, 10);
}

function hideCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    banner.classList.remove('show');
    setTimeout(() => {
        banner.style.display = 'none';
    }, 400);
}

function showCookieSettings() {
    const modal = document.getElementById('cookieSettingsModal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    hideCookieBanner();
}

function hideCookieSettings() {
    const modal = document.getElementById('cookieSettingsModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function showAnalyticsDashboard() {
    if (config.analytics.passwordProtect && !isDashboardAuthenticated) {
        // Show password prompt if not authenticated
        const modal = document.getElementById('cookieAnalyticsModal');
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    } else {
        // Show dashboard if authenticated or no password protection
        const modal = document.getElementById('cookieAnalyticsModal');
        const lang = document.getElementById('cookieLanguageSelect') ? 
            document.getElementById('cookieLanguageSelect').value : 'en';
        document.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(lang);
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }
}

function hideAnalyticsDashboard() {
    const modal = document.getElementById('cookieAnalyticsModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function updateConsentMode(consentData) {
    const consentStates = {
        'ad_storage': consentData.categories.advertising ? 'granted' : 'denied',
        'analytics_storage': consentData.categories.analytics ? 'granted' : 'denied',
        'ad_user_data': consentData.categories.advertising ? 'granted' : 'denied',
        'ad_personalization': consentData.categories.advertising ? 'granted' : 'denied',
        'personalization_storage': consentData.categories.performance ? 'granted' : 'denied',
        'functionality_storage': consentData.categories.functional ? 'granted' : 'denied',
        'security_storage': 'granted'
    };

    // Determine GCS signal
    let gcsSignal = 'G100'; // Default to denied
    
    if (consentData.status === 'accepted') {
        gcsSignal = 'G111';
    } else if (consentData.status === 'custom') {
        gcsSignal = 'G101';
    }

    // Update consent mode immediately
    gtag('consent', 'update', consentStates);
    
    // Push detailed consent data to dataLayer
    window.dataLayer.push({
        'event': 'cookie_consent_update',
        'consent_mode': consentStates,
        'gcs': gcsSignal,
        'consent_status': consentData.status,
        'consent_categories': consentData.categories,
        'timestamp': new Date().toISOString(),
        'consent_version': '4.0',
        'consent_scope': 'global',
        'debug_info': {
            'cookies_found': scanAndCategorizeCookies(),
            'user_agent': navigator.userAgent,
            'language': navigator.language
        }
    });

    console.log('Consent Mode Updated:', {
        states: consentStates,
        gcsSignal: gcsSignal,
        categories: consentData.categories
    });
}

function acceptAllCookies() {
    const consentData = {
        status: 'accepted',
        gcs: 'G111',
        categories: {
            functional: true,
            analytics: true,
            performance: true,
            advertising: true,
            uncategorized: true
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
    
    // Update analytics
    if (config.analytics.enabled) {
        updateConsentStats('accepted');
    }
}

function rejectAllCookies() {
    const consentData = {
        status: 'rejected',
        gcs: 'G100',
        categories: {
            functional: true,  // Essential cookies always enabled
            analytics: false,
            performance: false,
            advertising: false,
            uncategorized: false
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    clearNonEssentialCookies();
    
    // Update analytics
    if (config.analytics.enabled) {
        updateConsentStats('rejected');
    }
}

function clearNonEssentialCookies() {
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
        const [nameValue] = cookie.trim().split('=');
        const name = nameValue.trim();
        let isEssential = false;
        
        // Check if cookie is essential
        for (const pattern in cookieDatabase) {
            if (name.startsWith(pattern) && cookieDatabase[pattern].category === 'functional') {
                isEssential = true;
                break;
            }
        }
        
        if (!isEssential && name && name !== 'cookie_consent') {
            // Clear the cookie
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
        }
    });
}

function saveCustomSettings() {
    const consentData = {
        status: 'custom',
        gcs: 'G101',
        categories: {
            functional: true,  // Essential cookies always enabled
            analytics: document.querySelector('input[data-category="analytics"]').checked,
            performance: document.querySelector('input[data-category="performance"]').checked,
            advertising: document.querySelector('input[data-category="advertising"]').checked,
            uncategorized: document.querySelector('input[data-category="uncategorized"]') ? 
                document.querySelector('input[data-category="uncategorized"]').checked : false
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
    
    // Clear cookies if categories were disabled
    if (!consentData.categories.analytics) clearCategoryCookies('analytics');
    if (!consentData.categories.performance) clearCategoryCookies('performance');
    if (!consentData.categories.advertising) clearCategoryCookies('advertising');
    if (!consentData.categories.uncategorized) clearCategoryCookies('uncategorized');
    
    // Update analytics
    if (config.analytics.enabled) {
        updateConsentStats('custom');
    }
}

function clearCategoryCookies(category) {
    const cookies = scanAndCategorizeCookies()[category];
    cookies.forEach(cookie => {
        document.cookie = `${cookie.name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
    });
}

function loadCookiesAccordingToConsent(consentData) {
    if (consentData.categories.analytics) {
        loadAnalyticsCookies();
    }
    
    if (consentData.categories.advertising) {
        loadAdvertisingCookies();
    }
    
    if (consentData.categories.performance) {
        loadPerformanceCookies();
    }
}

function loadAnalyticsCookies() {
    console.log('Loading analytics cookies');
    // Implement your analytics tracking here
    if (typeof ga === 'undefined' && typeof gtag === 'function') {
        gtag('js', new Date());
        gtag('config', 'YOUR_GA4_MEASUREMENT_ID');
    }
}

function loadAdvertisingCookies() {
    console.log('Loading advertising cookies');
    // Implement your advertising tracking here
    if (typeof fbq === 'undefined') {
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'YOUR_PIXEL_ID');
        fbq('track', 'PageView');
    }
}

function loadPerformanceCookies() {
    console.log('Loading performance cookies');
    // Implement performance tracking here
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax; Secure";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Example of how to add city/region restrictions
/*
config.geoConfig.allowedCities = ['New York', 'London', 'Paris'];
config.geoConfig.allowedRegions = ['California', 'Texas', 'Île-de-France'];
config.geoConfig.blockedCities = ['Moscow'];
config.geoConfig.blockedRegions = ['Crimea'];
*/
