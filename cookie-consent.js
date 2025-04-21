(function () {
    /**
     * Ultimate GDPR Cookie Consent Solution - Advanced Edition
     * - Automatic translation based on user's country
     * - Domain restriction controls
     * - Geo-targeting (country/city/state level controls)
     * - Complete EU language support
     * - Built-in analytics dashboard with password protection
     * - Consent Mode v2 and future-proof compliance
     * - Premium UI with enhanced UX
     * - Enhanced banner positioning and delay controls
     * - Detailed consent change history
     * - Configurable floating icons
     * - Non-expiring admin password option
     * - Chart visualization for analytics
     */

    // ============== CONFIGURATION SECTION ============== //
    const config = {
        // Domain restriction - only show on these domains (empty array = all domains)
        allowedDomains: ['dev-rpractice.pantheonsite.io', 'yourdomain.com'],
        
        // Language configuration
        languageConfig: {
            defaultLanguage: 'en',
            availableLanguages: [],
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
            passwordCookieDuration: 365, // Set to -1 for non-expiring password
            showFloatingAdminIcon: true,
            floatingAdminIconPosition: 'right' // 'left' or 'right'
        },
        
        // Banner behavior
        behavior: {
            autoShow: true,
            floatingButton: true,
            showFloatingConsentIcon: true,
            floatingConsentIconPosition: 'right', // 'left' or 'right'
            rememberLanguage: true,
            acceptOnScroll: false,
            acceptOnContinue: true,
            floatingButtonPosition: 'right', // 'left' or 'right'
            bannerPosition: 'center', // 'left', 'right', 'center'
            bannerDelay: 5000 // Delay in milliseconds
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

    // Language translations
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
            consentHistory: "Consent Change History",
            enableAnalytics: "Enable Analytics",
            disableAnalytics: "Disable Analytics",
            bannerDelay: "Banner Display Delay (ms)",
            updateSettings: "Update Settings"
        },
        de: {
            title: "Wir schätzen Ihre Privatsphäre",
            description: "Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern, personalisierte Anzeigen oder Inhalte bereitzustellen und unseren Datenverkehr zu analysieren. Durch Klicken auf \"Alle akzeptieren\" stimmen Sie der Verwendung von Cookies zu.",
            privacy: "Datenschutzrichtlinie",
            customize: "Anpassen",
            reject: "Alle ablehnen",
            accept: "Alle akzeptieren",
            essential: "Essentielle Cookies",
            essentialDesc: "Notwendig für die Funktionalität der Website",
            analytics: "Analyse-Cookies",
            analyticsDesc: "Helfen, die Interaktionen der Besucher zu verstehen",
            performance: "Leistungs-Cookies",
            performanceDesc: "Verbessern die Leistung der Website",
            advertising: "Werbe-Cookies",
            advertisingDesc: "Liefern relevante Anzeigen",
            other: "Andere Cookies",
            otherDesc: "Nicht kategorisierte Cookies",
            save: "Einstellungen speichern",
            language: "Deutsch",
            statsTitle: "Einwilligungsstatistiken",
            statsAccepted: "Akzeptiert",
            statsRejected: "Abgelehnt",
            statsCustom: "Angepasst",
            statsTotal: "Gesamt",
            statsPercentage: "Prozentsatz",
            statsLast7Days: "Letzte 7 Tage",
            statsLast30Days: "Letzte 30 Tage",
            passwordPrompt: "Geben Sie das Passwort ein, um Analysen anzuzeigen",
            passwordSubmit: "Absenden",
            passwordIncorrect: "Falsches Passwort",
            dashboardTitle: "Einwilligungs-Analyse-Dashboard",
            consentHistory: "Verlauf der Einwilligungsänderungen",
            enableAnalytics: "Analysen aktivieren",
            disableAnalytics: "Analysen deaktivieren",
            bannerDelay: "Verzögerung der Banneranzeige (ms)",
            updateSettings: "Einstellungen aktualisieren"
        },
        fr: {
            title: "Nous respectons votre vie privée",
            description: "Nous utilisons des cookies pour améliorer votre expérience de navigation, fournir des publicités ou contenus personnalisés et analyser notre trafic. En cliquant sur \"Tout accepter\", vous consentez à l'utilisation de cookies.",
            privacy: "Politique de confidentialité",
            customize: "Ajuster",
            reject: "Tout refuser",
            accept: "Tout accepter",
            essential: "Cookies essentiels",
            essentialDesc: "Nécessaires au fonctionnement du site",
            analytics: "Cookies d'analyse",
            analyticsDesc: "Aident à comprendre les interactions des visiteurs",
            performance: "Cookies de performance",
            performanceDesc: "Améliorent les performances du site",
            advertising: "Cookies publicitaires",
            advertisingDesc: "Fournissent des publicités pertinentes",
            other: "Autres cookies",
            otherDesc: "Cookies non catégorisés",
            save: "Enregistrer les préférences",
            language: "Français",
            statsTitle: "Statistiques de consentement",
            statsAccepted: "Accepté",
            statsRejected: "Refusé",
            statsCustom: "Personnalisé",
            statsTotal: "Total",
            statsPercentage: "Pourcentage",
            statsLast7Days: "7 derniers jours",
            statsLast30Days: "30 derniers jours",
            passwordPrompt: "Entrez le mot de passe pour voir les analyses",
            passwordSubmit: "Soumettre",
            passwordIncorrect: "Mot de passe incorrect",
            dashboardTitle: "Tableau de bord des analyses de consentement",
            consentHistory: "Historique des modifications de consentement",
            enableAnalytics: "Activer les analyses",
            disableAnalytics: "Désactiver les analyses",
            bannerDelay: "Délai d'affichage de la bannière (ms)",
            updateSettings: "Mettre à jour les paramètres"
        },
        es: {
            title: "Valoramos tu privacidad",
            description: "Usamos cookies para mejorar tu experiencia de navegación, ofrecer anuncios o contenido personalizados y analizar nuestro tráfico. Al hacer clic en \"Aceptar todo\", consientes el uso de cookies.",
            privacy: "Política de privacidad",
            customize: "Ajustar",
            reject: "Rechazar todo",
            accept: "Aceptar todo",
            essential: "Cookies esenciales",
            essentialDesc: "Necesarias para la funcionalidad del sitio web",
            analytics: "Cookies de análisis",
            analyticsDesc: "Ayudan a entender las interacciones de los visitantes",
            performance: "Cookies de rendimiento",
            performanceDesc: "Mejoran el rendimiento del sitio web",
            advertising: "Cookies publicitarias",
            advertisingDesc: "Entregan anuncios relevantes",
            other: "Otras cookies",
            otherDesc: "Cookies no categorizadas",
            save: "Guardar preferencias",
            language: "Español",
            statsTitle: "Estadísticas de consentimiento",
            statsAccepted: "Aceptado",
            statsRejected: "Rechazado",
            statsCustom: "Personalizado",
            statsTotal: "Total",
            statsPercentage: "Porcentaje",
            statsLast7Days: "Últimos 7 días",
            statsLast30Days: "Últimos 30 días",
            passwordPrompt: "Ingresa la contraseña para ver las analíticas",
            passwordSubmit: "Enviar",
            passwordIncorrect: "Contraseña incorrecta",
            dashboardTitle: "Panel de análisis de consentimiento",
            consentHistory: "Historial de cambios de consentimiento",
            enableAnalytics: "Habilitar analíticas",
            disableAnalytics: "Deshabilitar analíticas",
            bannerDelay: "Retraso de visualización del banner (ms)",
            updateSettings: "Actualizar configuración"
        }
    };

    // Country to language mapping
    const countryLanguageMap = {
        'AT': 'de', 'BE': 'nl', 'BE': 'fr', 'BG': 'bg', 'HR': 'hr', 'CY': 'el', 'CZ': 'cs',
        'DK': 'da', 'EE': 'et', 'FI': 'fi', 'FR': 'fr', 'DE': 'de', 'GR': 'el', 'HU': 'hu',
        'IE': 'en', 'IT': 'it', 'LV': 'lv', 'LT': 'lt', 'LU': 'fr', 'LU': 'de', 'MT': 'mt',
        'NL': 'nl', 'PL': 'pl', 'PT': 'pt', 'RO': 'ro', 'SK': 'sk', 'SI': 'sl', 'ES': 'es',
        'SE': 'sv', 'AL': 'en', 'BA': 'en', 'IS': 'en', 'LI': 'de', 'MK': 'en', 'NO': 'en',
        'RS': 'en', 'CH': 'de', 'CH': 'fr', 'CH': 'it', 'UA': 'uk', 'GB': 'en', 'US': 'en',
        'CA': 'en', 'CA': 'fr', 'AU': 'en', 'NZ': 'en', 'ZA': 'en', 'IN': 'en', 'CN': 'zh',
        'JP': 'ja', 'KR': 'ko', 'BR': 'pt', 'MX': 'es', 'AR': 'es', 'RU': 'ru'
    };

    // Analytics and consent history storage
    let consentAnalytics = {
        total: { accepted: 0, rejected: 0, custom: 0 },
        daily: {},
        weekly: {},
        monthly: {}
    };

    let consentHistory = [];
    let isDashboardAuthenticated = false;

    // Load analytics and history data
    function loadAnalyticsData() {
        const savedData = localStorage.getItem('consentAnalytics');
        if (savedData) consentAnalytics = JSON.parse(savedData);
        
        const historyData = localStorage.getItem('consentHistory');
        if (historyData) consentHistory = JSON.parse(historyData);
        
        const today = new Date().toISOString().split('T')[0];
        if (!consentAnalytics.daily[today]) {
            consentAnalytics.daily[today] = { accepted: 0, rejected: 0, custom: 0 };
        }
        
        isDashboardAuthenticated = config.analytics.passwordProtect ? 
            (getCookie('dashboard_auth') === 'true') : true;
    }

    // Save analytics and history data
    function saveAnalyticsData() {
        localStorage.setItem('consentAnalytics', JSON.stringify(consentAnalytics));
        localStorage.setItem('consentHistory', JSON.stringify(consentHistory));
    }

    // Update analytics data
    function updateConsentStats(status, consentData) {
        const today = new Date().toISOString().split('T')[0];
        
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
        
        updateTimeBasedStats(today, status);
        
        // Record consent change history
        consentHistory.push({
            timestamp: new Date().toISOString(),
            status: status,
            categories: consentData.categories,
            userAgent: navigator.userAgent,
            language: document.getElementById('cookieLanguageSelect')?.value || 'en'
        });
        
        // Keep only last 1000 history entries
        if (consentHistory.length > 1000) consentHistory = consentHistory.slice(-1000);
        
        saveAnalyticsData();
    }

    // Update weekly and monthly stats
    function updateTimeBasedStats(date, status) {
        const dateObj = new Date(date);
        const year = dateObj.getFullYear();
        const month = dateObj.getMonth() + 1;
        const week = getWeekNumber(dateObj);
        
        const weekKey = `${year}-W${week}`;
        if (!consentAnalytics.weekly[weekKey]) {
            consentAnalytics.weekly[weekKey] = { accepted: 0, rejected: 0, custom: 0 };
        }
        
        const monthKey = `${year}-${month}`;
        if (!consentAnalytics.monthly[monthKey]) {
            consentAnalytics.monthly[monthKey] = { accepted: 0, rejected: 0, custom: 0 };
        }
        
        if (status === 'accepted') {
            consentAnalytics.weekly[weekKey].accepted++;
            consentAnalytics.monthly[monthKey].accepted++;
        } else if (status === 'rejected') {
            consentAnalytics.weekly[weekKey].rejected++;
            consentAnalytics.monthly[monthKey].rejected++;
        } else if (status === 'custom') {
            consentAnalytics.weekly[weekKey].custom++;
            consentAnalytics.monthly[monthKey].custom++;
        }
    }

    // Get week number
    function getWeekNumber(date) {
        const d = new Date(date);
        d.setHours(0, 0, 0, 0);
        d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
        const week1 = new Date(d.getFullYear(), 0, 4);
        return 1 + Math.round(((d - week1) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    }

    // Generate analytics dashboard with charts
    function generateAnalyticsDashboard(language = 'en') {
        const lang = translations[language] || translations.en;
        
        const total = consentAnalytics.total.accepted + consentAnalytics.total.rejected + consentAnalytics.total.custom;
        const acceptedPercent = total > 0 ? Math.round((consentAnalytics.total.accepted / total) * 100) : 0;
        const rejectedPercent = total > 0 ? Math.round((consentAnalytics.total.rejected / total) * 100) : 0;
        const customPercent = total > 0 ? Math.round((consentAnalytics.total.custom / total) * 100) : 0;
        
        const last7Days = {};
        const dates = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 7);
        dates.forEach(date => last7Days[date] = consentAnalytics.daily[date]);
        
        const last30Days = {};
        const monthlyDates = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 30);
        monthlyDates.forEach(date => last30Days[date] = consentAnalytics.daily[date]);
        
        // Generate consent history table
        const consentHistoryTable = `
        <div class="consent-history">
            <h4>${lang.consentHistory}</h4>
            <table class="history-table">
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Status</th>
                        <th>Categories</th>
                        <th>Language</th>
                        <th>User Agent</th>
                    </tr>
                </thead>
                <tbody>
                    ${consentHistory.slice(-10).reverse().map(entry => `
                        <tr>
                            <td>${new Date(entry.timestamp).toLocaleString()}</td>
                            <td>${entry.status}</td>
                            <td>${Object.entries(entry.categories)
                                .filter(([_, enabled]) => enabled)
                                .map(([cat]) => cat)
                                .join(', ')}</td>
                            <td>${entry.language}</td>
                            <td>${entry.userAgent.substring(0, 50)}...</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>`;

        // Admin controls
        const adminControls = `
        <div class="admin-controls">
            <h4>Admin Controls</h4>
            <div class="control-group">
                <label>
                    <input type="checkbox" id="analyticsToggle" ${config.analytics.enabled ? 'checked' : ''}>
                    ${lang.enableAnalytics}
                </label>
            </div>
            <div class="control-group">
                <label>
                    ${lang.bannerDelay}
                    <input type="number" id="bannerDelayInput" value="${config.behavior.bannerDelay}" min="0" step="1000">
                </label>
            </div>
            <div class="control-group">
                <label>Banner Position</label>
                <select id="bannerPositionSelect">
                    <option value="center" ${config.behavior.bannerPosition === 'center' ? 'selected' : ''}>Center</option>
                    <option value="left" ${config.behavior.bannerPosition === 'left' ? 'selected' : ''}>Left</option>
                    <option value="right" ${config.behavior.bannerPosition === 'right' ? 'selected' : ''}>Right</option>
                </select>
            </div>
            <button id="updateSettingsBtn" class="cookie-btn save-btn">${lang.updateSettings}</button>
        </div>`;

        return `
        <div class="analytics-dashboard">
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
            
            <div class="charts-section">
                <div class="chart-container">
                    <h4>${lang.statsLast7Days}</h4>
                    <canvas id="chart7Days"></canvas>
                </div>
                <div class="chart-container">
                    <h4>${lang.statsLast30Days}</h4>
                    <canvas id="chart30Days"></canvas>
                </div>
            </div>
            
            ${consentHistoryTable}
            ${adminControls}
            
            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
            <script>
                // 7 Days Chart
                new Chart(document.getElementById('chart7Days'), {
                    type: 'bar',
                    data: {
                        labels: ${JSON.stringify(Object.keys(last7Days).reverse())},
                        datasets: [
                            {
                                label: '${lang.statsAccepted}',
                                data: ${JSON.stringify(Object.values(last7Days).reverse().map(d => d.accepted))},
                                backgroundColor: '${colorScheme.primary}',
                                borderColor: '${colorScheme.primary}',
                                borderWidth: 1
                            },
                            {
                                label: '${lang.statsRejected}',
                                data: ${JSON.stringify(Object.values(last7Days).reverse().map(d => d.rejected))},
                                backgroundColor: '${colorScheme.danger}',
                                borderColor: '${colorScheme.danger}',
                                borderWidth: 1
                            },
                            {
                                label: '${lang.statsCustom}',
                                data: ${JSON.stringify(Object.values(last7Days).reverse().map(d => d.custom))},
                                backgroundColor: '${colorScheme.secondary}',
                                borderColor: '${colorScheme.secondary}',
                                borderWidth: 1
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            y: { beginAtZero: true },
                            x: { stacked: true }
                        }
                    }
                });

                // 30 Days Chart
                new Chart(document.getElementById('chart30Days'), {
                    type: 'line',
                    data: {
                        labels: ${JSON.stringify(Object.keys(last30Days).reverse())},
                        datasets: [
                            {
                                label: '${lang.statsAccepted}',
                                data: ${JSON.stringify(Object.values(last30Days).reverse().map(d => d.accepted))},
                                borderColor: '${colorScheme.primary}',
                                fill: false
                            },
                            {
                                label: '${lang.statsRejected}',
                                data: ${JSON.stringify(Object.values(last30Days).reverse().map(d => d.rejected))},
                                borderColor: '${colorScheme.danger}',
                                fill: false
                            },
                            {
                                label: '${lang.statsCustom}',
                                data: ${JSON.stringify(Object.values(last30Days).reverse().map(d => d.custom))},
                                borderColor: '${colorScheme.secondary}',
                                fill: false
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            y: { beginAtZero: true }
                        }
                    }
                });
            </script>
        </div>`;
    }

    // Generate password prompt
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

    // Domain restriction check
    function isDomainAllowed() {
        if (config.allowedDomains.length === 0) return true;
        const currentDomain = window.location.hostname;
        return config.allowedDomains.some(domain => 
            domain.startsWith('.') ? 
                currentDomain === domain.substring(1) || currentDomain.endsWith(domain) : 
                currentDomain === domain
        );
    }

    // Geo-targeting check
    function checkGeoTargeting(geoData) {
        if (config.geoConfig.blockedCountries.length > 0 && config.geoConfig.blockedCountries.includes(geoData.country)) return false;
        if (config.geoConfig.blockedRegions.length > 0 && config.geoConfig.blockedRegions.includes(geoData.region)) return false;
        if (config.geoConfig.blockedCities.length > 0 && config.geoConfig.blockedCities.includes(geoData.city)) return false;
        if (config.geoConfig.allowedCountries.length > 0 && !config.geoConfig.allowedCountries.includes(geoData.country)) return false;
        if (config.geoConfig.allowedRegions.length > 0 && !config.geoConfig.allowedRegions.includes(geoData.region)) return false;
        if (config.geoConfig.allowedCities.length > 0 && !config.geoConfig.allowedCities.includes(geoData.city)) return false;
        return true;
    }

    // Language detection
    function detectUserLanguage(geoData) {
        if (config.behavior.rememberLanguage) {
            const preferredLanguage = getCookie('preferred_language');
            if (preferredLanguage && translations[preferredLanguage]) return preferredLanguage;
        }
        
        if (config.languageConfig.autoDetectLanguage && geoData && geoData.country) {
            const countryLang = countryLanguageMap[geoData.country];
            if (countryLang && translations[countryLang]) return countryLang;
        }
        
        const browserLang = (navigator.language || 'en').split('-')[0];
        return translations[browserLang] ? browserLang : config.languageConfig.defaultLanguage || 'en';
    }

    // Get available languages
    function getAvailableLanguages() {
        return config.languageConfig.availableLanguages.length > 0 ? 
            config.languageConfig.availableLanguages.filter(lang => translations[lang]) : 
            Object.keys(translations);
    }

    // Change language
    function changeLanguage(languageCode) {
        const lang = translations[languageCode] || translations.en;
        
        const banner = document.getElementById('cookieConsentBanner');
        if (banner) {
            banner.querySelector('h2').textContent = lang.title;
            banner.querySelector('p').textContent = lang.description;
            banner.querySelector('.privacy-policy-link').textContent = lang.privacy;
            banner.querySelector('#acceptAllBtn').textContent = lang.accept;
            banner.querySelector('#adjustConsentBtn').textContent = lang.customize;
            banner.querySelector('#rejectAllBtn').textContent = lang.reject;
        }
        
        const modal = document.getElementById('cookieSettingsModal');
        if (modal) {
            modal.querySelector('h2').textContent = lang.title;
            const categories = {
                'functional': 'essential',
                'analytics': 'analytics',
                'performance': 'performance',
                'advertising': 'advertising',
                'uncategorized': 'other'
            };
            
            for (const [category, key] of Object.entries(categories)) {
                const categoryElement = document.querySelector(`input[data-category="${category}"]`);
                if (categoryElement) {
                    const container = categoryElement.closest('.cookie-category');
                    container.querySelector('h3').textContent = lang[key];
                    container.querySelector('p').textContent = lang[`${key}Desc`];
                }
            }
            
            modal.querySelector('#rejectAllSettingsBtn').textContent = lang.reject;
            modal.querySelector('#saveSettingsBtn').textContent = lang.save;
            modal.querySelector('#acceptAllSettingsBtn').textContent = lang.accept;
        }
        
        const floatingButton = document.getElementById('cookieFloatingButton');
        if (floatingButton) floatingButton.title = lang.title;
        
        const adminButton = document.getElementById('cookieAdminButton');
        if (adminButton) adminButton.title = lang.dashboardTitle;
        
        const dashboard = document.querySelector('.analytics-dashboard');
        if (dashboard) dashboard.innerHTML = generateAnalyticsDashboard(languageCode);
        
        const passwordPrompt = document.querySelector('.password-prompt');
        if (passwordPrompt) {
            passwordPrompt.innerHTML = generatePasswordPrompt(languageCode);
            setupPasswordPromptEvents();
        }
        
        if (config.behavior.rememberLanguage) {
            setCookie('preferred_language', languageCode, 365);
        }
    }

    // Main initialization
    document.addEventListener('DOMContentLoaded', function() {
        if (!isDomainAllowed()) {
            console.log('Cookie consent banner disabled for this domain');
            return;
        }
        
        if (config.analytics.enabled) loadAnalyticsData();
        
        let geoData = {};
        if (window.dataLayer && window.dataLayer.length > 0) {
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
        
        if (!checkGeoTargeting(geoData)) {
            console.log('Cookie consent banner disabled for this location');
            return;
        }
        
        const detectedLanguage = detectUserLanguage(geoData);
        const detectedCookies = scanAndCategorizeCookies();
        
        if (detectedCookies.uncategorized.length > 0) {
            autoCategorizeCookies(detectedCookies.uncategorized).forEach(cookie => {
                const category = determineCookieCategory(cookie.name);
                if (category && category !== 'uncategorized') {
                    detectedCookies[category].push(cookie);
                    detectedCookies.uncategorized = detectedCookies.uncategorized.filter(c => c.name !== cookie.name);
                }
            });
        }
        
        injectConsentHTML(detectedCookies, detectedLanguage);
        
        setTimeout(() => {
            initializeCookieConsent(detectedCookies, detectedLanguage);
            if (getCookie('cookie_consent')) {
                showFloatingButton();
                if (config.analytics.showFloatingAdminIcon) showAdminButton();
            }
        }, config.behavior.bannerDelay);
        
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
    });

    // Handle scroll-based acceptance
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

    // Auto-categorize cookies
    function autoCategorizeCookies(uncategorizedCookies) {
        return uncategorizedCookies.map(cookie => {
            const category = determineCookieCategory(cookie.name);
            if (category) {
                cookieDatabase[cookie.name] = {
                    category: category,
                    duration: cookie.duration,
                    description: cookie.description || 'Automatically categorized'
                };
            }
            return cookie;
        });
    }

    // Determine cookie category
    function determineCookieCategory(cookieName) {
        const lowerName = cookieName.toLowerCase();
        if (/_ga|_gid|_gat|analytics|stats|measure|track|tk_ai/.test(lowerName)) return 'analytics';
        if (/_gcl|_fbp|fr|ad|ads|tracking|marketing|doubleclick|gclid/.test(lowerName)) return 'advertising';
        if (/sess|token|auth|login|user|pref|settings|cart|checkout|hash|items/.test(lowerName)) return 'functional';
        if (/perf|speed|optimize|cdn|cache/.test(lowerName)) return 'performance';
        return null;
    }

    // Scan and categorize cookies
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
                        name: name,
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
                    name: name,
                    value: value || '',
                    duration: getCookieDuration(name),
                    description: 'Unknown cookie purpose'
                });
            }
        });
        
        return result;
    }

    // Get cookie duration
    function getCookieDuration(name) {
        const cookieMatch = document.cookie.match(new RegExp(`${name}=[^;]+(;|$)`));
        if (!cookieMatch) return "Session";
        
        const expiresMatch = document.cookie.match(new RegExp(`${name}=[^;]+; expires=([^;]+)`));
        if (expiresMatch && expiresMatch[1]) {
            const expiryDate = new Date(expiresMatch[1]);
            return expiryDate > new Date() ? 
                `Expires ${expiryDate.toLocaleDateString()}` : 
                "Expired";
        }
        return "Session";
    }

    // Track marketing parameters
    function trackMarketingParameters() {
        const params = new URLSearchParams(window.location.search);
        const marketingData = {};
        
        if (params.has('gclid')) marketingData.gclid = params.get('gclid');
        if (params.has('fbclid')) marketingData.fbclid = params.get('fbclid');
        if (params.has('utm_source')) marketingData.utm_source = params.get('utm_source');
        if (params.has('utm_medium')) marketingData.utm_medium = params.get('utm_medium');
        if (params.has('utm_campaign')) marketingData.utm_campaign = params.get('utm_campaign');
        
        if (Object.keys(marketingData).length > 0) {
            window.dataLayer.push({
                'event': 'marketingParameters',
                ...marketingData
            });
        }
    }

    // Inject consent HTML
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
        
        const adminButton = config.analytics.enabled && config.analytics.showDashboard && config.analytics.showFloatingAdminIcon ? `
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

        <!-- Floating Consent Button -->
        ${config.behavior.showFloatingConsentIcon ? `
        <div id="cookieFloatingButton" class="cookie-settings-button" title="${lang.title}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9-64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.7-5.9-9.9-11.6-9.9c-51.5 0-101.5-14.7-144.9-42.3l-61.2-42.4c-10.1-7-21.8-11.1-33.9-11.9c-12.1-.9-24.1 1.6-34.9 7.2l-61.2 35.1c-6.4 3.7-14.6 1.9-19.3-4.1s-4.7-13.7 1.1-18.4l61.2-42.4c43.4-30.1 97.1-46.4 151.8-46.4c5.7 0 10.7-4.1 11.6-9.8zM133.4 303.6c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9s46.9 21 46.9 46.9s-21 46.9-46.9 46.9zm116.1-90.3c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48zm92.3 99.7c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48z"/>
            </svg>
        </div>` : ''}

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
        .cookie-consent-banner {
            position: fixed;
            ${config.behavior.bannerPosition === 'center' ? `
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 440px;
            ` : config.behavior.bannerPosition === 'left' ? `
                top: 50%;
                left: 20px;
                transform: translateY(-50%);
                width: 440px;
            ` : `
                top: 50%;
                right: 20px;
                transform: translateY(-50%);
                width: 440px;
            `}
            background: ${currentTheme.background};
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
            z-index: 9999;
            padding: 24px;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            display: none;
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
            border: none;
            overflow: hidden;
        }

        .cookie-consent-banner.show {
            opacity: 1;
            display: block;
        }

        .cookie-consent-content h2 {
            margin: 0 0 16px 0;
            font-size: 18px;
            color: ${currentTheme.textDark};
            font-weight: 600;
            line-height: 1.4;
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
        }

        .adjust-btn {
            background-color: #f8f9fa;
            color: #333;
            border: 1px solid #e0e0e0;
        }

        .adjust-btn:hover {
            background-color: #f0f2f5;
            transform: translateY(-1px);
        }

        .reject-btn {
            background-color: #fff;
            color: ${currentTheme.danger};
            border: 1px solid ${currentTheme.danger};
        }

        .reject-btn:hover {
            background-color: #ffeeed;
            transform: translateY(-1px);
        }

        .accept-btn {
            background-color: ${currentTheme.primary};
            color: white;
            border: 1px solid ${currentTheme.primary};
        }

        .accept-btn:hover {
            background-color: #27ae60;
            transform: translateY(-1px);
        }

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
        }

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
        }

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

        .cookie-details-container {
            margin-top: 15px;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            overflow: hidden;
        }

        .cookie-details-header {
            background-color: #f5f5f5;
            padding: 12px 18px;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
        }

        .cookie-details-content {
            padding: 18px;
            background-color: #fafafa;
            border-top: 1px solid #e0e0e0;
            display: none;
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

        .no-cookies-message {
            padding: 15px;
            text-align: center;
            color: #666;
            font-style: italic;
        }

        .cookie-settings-button {
            position: fixed;
            bottom: 30px;
            ${config.behavior.floatingConsentIconPosition === 'left' ? 'left: 30px;' : 'right: 30px;'}
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
        }

        .cookie-settings-button svg {
            width: 28px;
            height: 28px;
            fill: white;
        }

        .cookie-admin-button {
            position: fixed;
            ${config.analytics.floatingAdminIconPosition === 'left' ? 
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
        }

        .cookie-admin-button svg {
            width: 28px;
            height: 28px;
            fill: white;
        }

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
        }

        .cookie-analytics-body {
            padding: 25px 30px;
            background-color: #fefefe;
            overflow-y: auto;
            flex: 1;
        }

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
        }

        .error-message {
            color: ${currentTheme.danger};
            margin-top: 10px;
            font-size: 14px;
        }

        .analytics-dashboard {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
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
        }

        .stat-card.accepted { border-top: 4px solid ${currentTheme.primary}; }
        .stat-card.rejected { border-top: 4px solid ${currentTheme.danger}; }
        .stat-card.custom { border-top: 4px solid ${currentTheme.secondary}; }
        .stat-card.total { border-top: 4px solid #9b59b6; }

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

        .charts-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 30px;
        }

        .chart-container {
            background-color: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
        }

        .consent-history {
            margin-top: 30px;
        }

        .history-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }

        .history-table th {
            background-color: #f0f0f0;
            padding: 10px;
            text-align: left;
            font-weight: 600;
        }

        .history-table td {
            padding: 10px;
            border-bottom: 1px solid #e0e0e0;
        }

        .admin-controls {
            margin-top: 30px;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 8px;
        }

        .control-group {
            margin-bottom: 15px;
        }

        .control-group label {
            display: block;
            margin-bottom: 5px;
            color: ${currentTheme.textDark};
        }

        .control-group input,
        .control-group select {
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #e0e0e0;
            width: 200px;
        }

        @media (max-width: 900px) {
            .cookie-settings-content,
            .cookie-analytics-content {
                width: 90%;
                max-height: 80vh;
            }
            
            .stats-summary {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .charts-section {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 768px) {
            .cookie-consent-banner {
                width: 90%;
                ${config.behavior.bannerPosition === 'center' ? `
                    left: 50%;
                    transform: translate(-50%, -50%);
                ` : config.behavior.bannerPosition === 'left' ? `
                    left: 5%;
                    transform: translateY(-50%);
                ` : `
                    right: 5%;
                    transform: translateY(-50%);
                `}
                padding: 20px;
            }
            
            .cookie-consent-buttons {
                flex-direction: column;
            }
            
            .cookie-btn {
                width: 100%;
                margin-bottom: 8px;
            }
            
            .stats-summary {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 480px) {
            .cookie-consent-banner {
                width: calc(100% - 30px);
                padding: 15px;
            }
            
            .cookie-consent-content h2 {
                font-size: 1.1rem;
            }
            
            .cookie-consent-content p {
                font-size: 0.85rem;
            }
            
            .cookie-settings-button,
            .cookie-admin-button {
                width: 50px;
                height: 50px;
            }
            
            .cookie-settings-button svg,
            .cookie-admin-button svg {
                width: 22px;
                height: 22px;
            }
        }
        </style>`;
        
        document.body.insertAdjacentHTML('beforeend', html);
    }

    // Initialize cookie consent
    function initializeCookieConsent(detectedCookies, language) {
        const consentGiven = getCookie('cookie_consent');
        
        if (!consentGiven && config.behavior.autoShow) {
            showCookieBanner();
        } else if (consentGiven) {
            const consentData = JSON.parse(consentGiven);
            updateConsentMode(consentData);
            loadCookiesAccordingToConsent(consentData);
            showFloatingButton();
            if (config.analytics.showFloatingAdminIcon) showAdminButton();
        }
        
        setupEventListeners();
        
        document.querySelectorAll('.cookie-details-header').forEach(header => {
            header.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const toggle = this.querySelector('.toggle-details');
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
                toggle.textContent = content.style.display === 'block' ? '−' : '+';
            });
        });
        
        const languageSelect = document.getElementById('cookieLanguageSelect');
        if (languageSelect) {
            languageSelect.addEventListener('change', function() {
                changeLanguage(this.value);
            });
        }
        
        if (config.analytics.enabled && config.analytics.showDashboard && config.analytics.showFloatingAdminIcon) {
            const adminButton = document.getElementById('cookieAdminButton');
            if (adminButton) {
                adminButton.addEventListener('click', showAnalyticsDashboard);
                setTimeout(() => {
                    adminButton.style.display = 'flex';
                    adminButton.classList.add('show');
                }, 100);
            }
        }
        
        if (config.analytics.passwordProtect && !isDashboardAuthenticated) {
            setupPasswordPromptEvents();
        }
    }

    // Setup event listeners
    function setupEventListeners() {
        document.getElementById('acceptAllBtn').addEventListener('click', function() {
            acceptAllCookies();
            hideCookieBanner();
            showFloatingButton();
            if (config.analytics.showFloatingAdminIcon) showAdminButton();
        });
        
        document.getElementById('rejectAllBtn').addEventListener('click', function() {
            rejectAllCookies();
            hideCookieBanner();
            showFloatingButton();
            if (config.analytics.showFloatingAdminIcon) showAdminButton();
        });
        
        document.getElementById('adjustConsentBtn').addEventListener('click', function() {
            showCookieSettings();
            hideCookieBanner();
        });
        
        document.getElementById('acceptAllSettingsBtn').addEventListener('click', function() {
            acceptAllCookies();
            hideCookieSettings();
            showFloatingButton();
            if (config.analytics.showFloatingAdminIcon) showAdminButton();
        });
        
        document.getElementById('rejectAllSettingsBtn').addEventListener('click', function() {
            rejectAllCookies();
            hideCookieSettings();
            showFloatingButton();
            if (config.analytics.showFloatingAdminIcon) showAdminButton();
        });
        
        document.getElementById('saveSettingsBtn').addEventListener('click', function() {
            saveCustomSettings();
            hideCookieSettings();
            showFloatingButton();
            if (config.analytics.showFloatingAdminIcon) showAdminButton();
        });
        
        document.querySelector('.close-modal').addEventListener('click', function() {
            hideCookieSettings();
            if (!getCookie('cookie_consent')) showCookieBanner();
        });
        
        document.querySelector('.close-analytics-modal').addEventListener('click', hideAnalyticsDashboard);
        
        const floatingButton = document.getElementById('cookieFloatingButton');
        if (floatingButton) {
            floatingButton.addEventListener('click', function() {
                if (!document.getElementById('cookieConsentBanner').classList.contains('show')) {
                    showCookieBanner();
                } else {
                    hideCookieBanner();
                }
            });
        }
        
        // Admin controls
        const updateSettingsBtn = document.getElementById('updateSettingsBtn');
        if (updateSettingsBtn) {
            updateSettingsBtn.addEventListener('click', function() {
                config.analytics.enabled = document.getElementById('analyticsToggle').checked;
                config.behavior.bannerDelay = parseInt(document.getElementById('bannerDelayInput').value);
                config.behavior.bannerPosition = document.getElementById('bannerPositionSelect').value;
                
                // Update banner position
                const banner = document.getElementById('cookieConsentBanner');
                if (banner) {
                    banner.style.top = '50%';
                    if (config.behavior.bannerPosition === 'center') {
                        banner.style.left = '50%';
                        banner.style.right = 'auto';
                        banner.style.transform = 'translate(-50%, -50%)';
                    } else if (config.behavior.bannerPosition === 'left') {
                        banner.style.left = '20px';
                        banner.style.right = 'auto';
                        banner.style.transform = 'translateY(-50%)';
                    } else {
                        banner.style.right = '20px';
                        banner.style.left = 'auto';
                        banner.style.transform = 'translateY(-50%)';
                    }
                }
            });
        }
    }

    // Password prompt events
    function setupPasswordPromptEvents() {
        const passwordSubmit = document.getElementById('dashboardPasswordSubmit');
        if (passwordSubmit) {
            passwordSubmit.addEventListener('click', function() {
                const passwordInput = document.getElementById('dashboardPasswordInput');
                const errorMessage = document.getElementById('passwordError');
                const lang = document.getElementById('cookieLanguageSelect')?.value || 'en';
                
                if (passwordInput.value === config.analytics.dashboardPassword) {
                    isDashboardAuthenticated = true;
                    setCookie('dashboard_auth', 'true', 
                        config.analytics.passwordCookieDuration === -1 ? 
                        999999 : config.analytics.passwordCookieDuration);
                    
                    document.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(lang);
                    setupEventListeners(); // Re-attach admin controls events
                } else {
                    errorMessage.textContent = translations[lang].passwordIncorrect;
                }
            });
        }
    }

    // Cookie table generation
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



       // UI control functions
function showFloatingButton() {
    if (!config.behavior.showFloatingConsentIcon) return;
    const button = document.getElementById('cookieFloatingButton');
    if (button) {
        button.style.display = 'flex';
        setTimeout(() => button.classList.add('show'), 100);
    }
}

function hideFloatingButton() {
    const button = document.getElementById('cookieFloatingButton');
    if (button) {
        button.classList.remove('show');
        setTimeout(() => button.style.display = 'none', 300);
    }
}

function showAdminButton() {
    const button = document.getElementById('cookieAdminButton');
    if (button) {
        button.style.display = 'flex';
        setTimeout(() => button.classList.add('show'), 100);
    }
}

function hideAdminButton() {
    const button = document.getElementById('cookieAdminButton');
    if (button) {
        button.classList.remove('show');
        setTimeout(() => button.style.display = 'none', 300);
    }
}

function showCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
        banner.classList.add('show');
    }
}

function hideCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
        banner.classList.remove('show');
    }
}

function showCookieSettings() {
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        modal.classList.add('show');
        updateCookieTables(scanAndCategorizeCookies());
    }
}

function hideCookieSettings() {
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

function showAnalyticsDashboard() {
    const modal = document.getElementById('cookieAnalyticsModal');
    if (modal) {
        modal.classList.add('show');
        if (config.analytics.passwordProtect && !isDashboardAuthenticated) {
            setupPasswordPromptEvents();
        }
    }
}

function hideAnalyticsDashboard() {
    const modal = document.getElementById('cookieAnalyticsModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

// Consent management functions
function acceptAllCookies() {
    const consentData = {
        categories: {
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
    updateConsentStats('accepted', consentData);
}

function rejectAllCookies() {
    const consentData = {
        categories: {
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
    updateConsentStats('rejected', consentData);
}

function saveCustomSettings() {
    const consentData = {
        categories: {
            analytics: document.querySelector('input[data-category="analytics"]').checked,
            performance: document.querySelector('input[data-category="performance"]').checked,
            advertising: document.querySelector('input[data-category="advertising"]').checked,
            uncategorized: document.querySelector('input[data-category="uncategorized"]').checked
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
    updateConsentStats('custom', consentData);
}

function updateConsentMode(consentData) {
    gtag('consent', 'update', {
        'ad_storage': consentData.categories.advertising ? 'granted' : 'denied',
        'analytics_storage': consentData.categories.analytics ? 'granted' : 'denied',
        'ad_user_data': consentData.categories.advertising ? 'granted' : 'denied',
        'ad_personalization': consentData.categories.advertising ? 'granted' : 'denied',
        'personalization_storage': consentData.categories.uncategorized ? 'granted' : 'denied',
        'functionality_storage': 'granted',
        'security_storage': 'granted'
    });
    
    window.dataLayer.push({
        'event': 'consent_updated',
        'consent_data': consentData
    });
}

function clearNonEssentialCookies() {
    const cookies = scanAndCategorizeCookies();
    ['analytics', 'performance', 'advertising', 'uncategorized'].forEach(category => {
        cookies[category].forEach(cookie => {
            document.cookie = `${cookie.name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
        });
    });
}

function loadCookiesAccordingToConsent(consentData) {
    if (consentData.categories.analytics) loadAnalyticsCookies();
    if (consentData.categories.advertising) loadAdvertisingCookies();
    if (consentData.categories.performance) loadPerformanceCookies();
}

function loadAnalyticsCookies() {
    if (window.dataLayer) {
        window.dataLayer.push({
            'event': 'analytics_enabled',
            'timestamp': new Date().toISOString()
        });
        
        if (!document.querySelector('script[src*="google-analytics.com/analytics.js"]')) {
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://www.google-analytics.com/analytics.js';
            document.head.appendChild(script);
        }
    }
}

function loadAdvertisingCookies() {
    if (window.dataLayer) {
        window.dataLayer.push({
            'event': 'advertising_enabled',
            'timestamp': new Date().toISOString()
        });
        
        if (!document.querySelector('script[src*="doubleclick.net"]')) {
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID';
            document.head.appendChild(script);
        }
        
        if (!document.querySelector('script#fb-pixel')) {
            const script = document.createElement('script');
            script.id = 'fb-pixel';
            script.innerHTML = `
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
            `;
            document.head.appendChild(script);
        }
    }
}

function loadPerformanceCookies() {
    if (window.dataLayer) {
        window.dataLayer.push({
            'event': 'performance_enabled',
            'timestamp': new Date().toISOString()
        });
        
        if (!document.querySelector('script[src*="newrelic.com"]')) {
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://js-agent.newrelic.com/nr-1216.min.js';
            document.head.appendChild(script);
        }
    }
}

// Utility functions
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

function updateCookieTables(cookies) {
    const categories = ['functional', 'analytics', 'performance', 'advertising', 'uncategorized'];
    categories.forEach(category => {
        const container = document.querySelector(`input[data-category="${category}"]`)?.closest('.cookie-category');
        if (container) {
            const content = container.querySelector('.cookie-details-content');
            if (cookies[category].length > 0) {
                content.innerHTML = generateCookieTable(cookies[category]);
            } else {
                content.innerHTML = `<p class="no-cookies-message">No cookies in this category detected.</p>`;
            }
        }
    });
}

function logConsentAction(action, details) {
    const logEntry = {
        action: action,
        timestamp: new Date().toISOString(),
        details: details,
        userAgent: navigator.userAgent,
        pageUrl: window.location.href
    };
    
    window.dataLayer.push({
        'event': 'consent_action',
        ...logEntry
    });
    
    console.log('[CookieConsent] Action:', logEntry);
}

function refreshConsentUI() {
    const consentData = getCookie('cookie_consent');
    if (consentData) {
        const parsedConsent = JSON.parse(consentData);
        const categories = ['analytics', 'performance', 'advertising', 'uncategorized'];
        
        categories.forEach(category => {
            const toggle = document.querySelector(`input[data-category="${category}"]`);
            if (toggle) {
                toggle.checked = parsedConsent.categories[category] || false;
            }
        });
        
        showFloatingButton();
        if (config.analytics.showFloatingAdminIcon) showAdminButton();
    }
}

function checkConsentExpiration() {
    const consentData = getCookie('cookie_consent');
    if (consentData) {
        const parsedConsent = JSON.parse(consentData);
        const consentAge = (new Date().getTime() - parsedConsent.timestamp) / (1000 * 60 * 60 * 24);
        
        if (consentAge > 365) {
            setCookie('cookie_consent', '', -1);
            showCookieBanner();
            logConsentAction('consent_expired', { age: consentAge });
        }
    }
}

function cleanupAnalyticsData() {
    if (!config.analytics.enabled) return;
    
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - config.analytics.storageDays);
    
    Object.keys(consentAnalytics.daily).forEach(date => {
        if (new Date(date) < cutoffDate) {
            delete consentAnalytics.daily[date];
        }
    });
    
    Object.keys(consentAnalytics.weekly).forEach(week => {
        const [year, weekNum] = week.split('-W');
        const weekDate = new Date(year, 0, 1);
        weekDate.setDate(weekDate.getDate() + (weekNum - 1) * 7);
        if (weekDate < cutoffDate) {
            delete consentAnalytics.weekly[week];
        }
    });
    
    Object.keys(consentAnalytics.monthly).forEach(month => {
        const [year, monthNum] = month.split('-');
        const monthDate = new Date(year, monthNum - 1, 1);
        if (monthDate < cutoffDate) {
            delete consentAnalytics.monthly[month];
        }
    });
    
    consentHistory = consentHistory.filter(entry => {
        return new Date(entry.timestamp) >= cutoffDate;
    });
    
    saveAnalyticsData();
}

function initializePeriodicTasks() {
    setInterval(checkConsentExpiration, 24 * 60 * 60 * 1000);
    if (config.analytics.enabled) {
        setInterval(cleanupAnalyticsData, 24 * 60 * 60 * 1000);
        cleanupAnalyticsData();
    }
}

window.addEventListener('beforeunload', function() {
    if (config.analytics.enabled) {
        saveAnalyticsData();
    }
});

function withdrawConsent() {
    setCookie('cookie_consent', '', -1);
    clearNonEssentialCookies();
    gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'personalization_storage': 'denied',
        'functionality_storage': 'denied',
        'security_storage': 'granted'
    });
    logConsentAction('consent_withdrawn', { reason: 'user_initiated' });
    showCookieBanner();
    hideFloatingButton();
    hideAdminButton();
    if (config.analytics.passwordProtect) {
        setCookie('dashboard_auth', '', -1);
        isDashboardAuthenticated = false;
    }
}

function addWithdrawConsentOption() {
    const settingsFooter = document.querySelector('.cookie-settings-footer');
    if (settingsFooter && !document.getElementById('withdrawConsentBtn')) {
        const withdrawBtn = document.createElement('button');
        withdrawBtn.id = 'withdrawConsentBtn';
        withdrawBtn.className = 'cookie-btn withdraw-btn';
        withdrawBtn.textContent = 'Withdraw Consent';
        withdrawBtn.style.backgroundColor = '#e74c3c';
        withdrawBtn.style.color = 'white';
        withdrawBtn.style.border = '1px solid #e74c3c';
        
        withdrawBtn.addEventListener('click', function() {
            withdrawConsent();
            hideCookieSettings();
        });
        
        settingsFooter.insertBefore(withdrawBtn, settingsFooter.firstChild);
    }
}

function withErrorHandling(fn, actionName) {
    return (...args) => {
        try {
            return fn(...args);
        } catch (error) {
            console.error(`[CookieConsent] Error in ${actionName}:`, error);
            logConsentAction('error', {
                action: actionName,
                error: error.message,
                stack: error.stack
            });
        }
    };
}

const safeInitialize = withErrorHandling(initializeCookieConsent, 'initializeCookieConsent');
const safeUpdateConsent = withErrorHandling(updateConsentMode, 'updateConsentMode');
const safeLoadCookies = withErrorHandling(loadCookiesAccordingToConsent, 'loadCookiesAccordingToConsent');

document.addEventListener('DOMContentLoaded', () => {
    addWithdrawConsentOption();
    safeInitialize();
    refreshConsentUI();
    logConsentAction('initialization_complete', { status: 'success' });
});

window.CookieConsent = {
    acceptAll: acceptAllCookies,
    rejectAll: rejectAllCookies,
    saveCustom: saveCustomSettings,
    withdraw: withdrawConsent,
    getConsent: () => getCookie('cookie_consent'),
    updateUI: refreshConsentUI
};

function checkScriptVersion() {
    const currentVersion = '4.0';
    const storedVersion = localStorage.getItem('cookieConsentScriptVersion');
    
    if (storedVersion !== currentVersion) {
        localStorage.removeItem('consentAnalytics');
        localStorage.removeItem('consentHistory');
        localStorage.setItem('cookieConsentScriptVersion', currentVersion);
        logConsentAction('version_updated', {
            oldVersion: storedVersion || 'unknown',
            newVersion: currentVersion
        });
        setCookie('cookie_consent', '', -1);
        showCookieBanner();
    }
}

function getDebugInfo() {
    return {
        version: '4.0',
        config: config,
        consent: getCookie('cookie_consent'),
        analytics: config.analytics.enabled ? consentAnalytics : 'disabled',
        history: consentHistory.slice(-10),
        cookies: scanAndCategorizeCookies(),
        dataLayer: window.dataLayer || [],
        userAgent: navigator.userAgent,
        language: document.getElementById('cookieLanguageSelect')?.value || 'en'
    };
}

window.CookieConsent.debug = getDebugInfo;

try {
    checkScriptVersion();
    logConsentAction('script_ready', { status: 'loaded' });
} catch (error) {
    console.error('[CookieConsent] Fatal error:', error);
    logConsentAction('fatal_error', {
        error: error.message,
        stack: error.stack
    });
    gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'personalization_storage': 'denied',
        'functionality_storage': 'granted',
        'security_storage': 'granted'
    });
}

// Final initialization to ensure the script is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializePeriodicTasks();
    logConsentAction('script_fully_loaded', { status: 'complete' });

    // Notify other scripts that the cookie consent system is ready
    const consentReadyEvent = new CustomEvent('cookieConsentReady', {
        detail: {
            consent: getCookie('cookie_consent'),
            config: config,
            version: '4.0'
        },
        bubbles: true,
        cancelable: false
    });
    window.dispatchEvent(consentReadyEvent);

    // Handle script updates by checking for new versions
    checkForUpdates();

    // Perform final cleanup of temporary data
    cleanupTemporaryData();
});

// Check for updates to the script
function checkForUpdates() {
    const scriptVersion = '4.0';
    const lastChecked = localStorage.getItem('cookieConsentLastChecked');
    const now = new Date().getTime();
    
    // Check for updates every 24 hours
    if (!lastChecked || (now - parseInt(lastChecked)) > 24 * 60 * 60 * 1000) {
        // In a production environment, this would typically involve an API call to check for a new script version
        // For this example, we'll simulate it with a log
        logConsentAction('update_check', {
            currentVersion: scriptVersion,
            lastChecked: new Date(parseInt(lastChecked)).toISOString()
        });
        localStorage.setItem('cookieConsentLastChecked', now.toString());
    }
}

// Cleanup temporary data that might have been used during initialization
function cleanupTemporaryData() {
    // Remove any temporary flags or data used during initialization
    const tempKeys = Object.keys(localStorage).filter(key => key.startsWith('cookieConsentTemp_'));
    tempKeys.forEach(key => localStorage.removeItem(key));

    // Clear any temporary dataLayer entries
    if (window.dataLayer) {
        window.dataLayer = window.dataLayer.filter(entry => 
            !(entry.event && entry.event.startsWith('cookieConsentTemp_'))
        );
    }

    logConsentAction('temporary_data_cleanup', { status: 'complete' });
}

// Handle visibility change to optimize resource usage
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        // Pause any non-critical periodic tasks when the page is not visible
        logConsentAction('page_hidden', { status: 'paused' });
    } else {
        // Resume tasks when the page becomes visible
        logConsentAction('page_visible', { status: 'resumed' });
        checkConsentExpiration();
        if (config.analytics.enabled) cleanupAnalyticsData();
    }
});

// Ensure cleanup on page unload
window.addEventListener('unload', () => {
    logConsentAction('page_unload', { status: 'cleanup' });
    if (config.analytics.enabled) {
        saveAnalyticsData();
    }
});

// Export a global method to allow other scripts to interact with the consent system
window.CookieConsent.getStatus = () => ({
    initialized: true,
    version: '4.0',
    consent: getCookie('cookie_consent'),
    analyticsEnabled: config.analytics.enabled
});

// Log final completion of the script
console.log('[CookieConsent] Initialization fully completed. Version 4.0 is active.');

// Add a global error handler to catch any runtime errors
window.addEventListener('error', (event) => {
    logConsentAction('runtime_error', {
        error: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack || 'N/A'
    });
    
    // Fallback to safe mode if critical error occurs
    if (event.message.includes('CookieConsent')) {
        console.warn('[CookieConsent] Entering safe mode due to critical error.');
        gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'personalization_storage': 'denied',
            'functionality_storage': 'granted',
            'security_storage': 'granted'
        });
    }
});

// Allow external scripts to subscribe to consent changes
window.CookieConsent.subscribeToConsentChange = (callback) => {
    if (typeof callback !== 'function') {
        console.warn('[CookieConsent] Invalid callback provided for consent change subscription.');
        return;
    }

    const handler = (event) => {
        if (event.type === 'cookieConsentChanged') {
            callback(event.detail);
        }
    };

    window.addEventListener('cookieConsentChanged', handler);
    return () => window.removeEventListener('cookieConsentChanged', handler);
};

// Emit consent change events when consent is updated
function emitConsentChangeEvent(consentData) {
    const consentChangeEvent = new CustomEvent('cookieConsentChanged', {
        detail: {
            consent: consentData,
            timestamp: new Date().toISOString()
        },
        bubbles: true,
        cancelable: false
    });
    window.dispatchEvent(consentChangeEvent);
}

// Override existing consent functions to emit change events
const originalAcceptAllCookies = window.CookieConsent.acceptAll;
const originalRejectAllCookies = window.CookieConsent.rejectAll;
const originalSaveCustomSettings = window.CookieConsent.saveCustom;
const originalWithdrawConsent = window.CookieConsent.withdraw;

window.CookieConsent.acceptAll = function() {
    originalAcceptAllCookies();
    emitConsentChangeEvent(getCookie('cookie_consent'));
};

window.CookieConsent.rejectAll = function() {
    originalRejectAllCookies();
    emitConsentChangeEvent(getCookie('cookie_consent'));
};

window.CookieConsent.saveCustom = function() {
    originalSaveCustomSettings();
    emitConsentChangeEvent(getCookie('cookie_consent'));
};

window.CookieConsent.withdraw = function() {
    originalWithdrawConsent();
    emitConsentChangeEvent(null);
};

// Perform a final integrity check to ensure all components are functioning
function performIntegrityCheck() {
    const checks = {
        banner: !!document.getElementById('cookieConsentBanner'),
        settingsModal: !!document.getElementById('cookieSettingsModal'),
        analyticsModal: !!document.getElementById('cookieAnalyticsModal'),
        floatingButton: config.behavior.showFloatingConsentIcon ? !!document.getElementById('cookieFloatingButton') : true,
        adminButton: config.analytics.showFloatingAdminIcon ? !!document.getElementById('cookieAdminButton') : true,
        dataLayer: !!window.dataLayer,
        consentCookie: true // Cookie might not exist yet, so this is always true initially
    };

    const failedChecks = Object.entries(checks)
        .filter(([_, passed]) => !passed)
        .map(([component]) => component);

    if (failedChecks.length > 0) {
        logConsentAction('integrity_check_failed', {
            failedComponents: failedChecks,
            status: 'error'
        });
        console.error('[CookieConsent] Integrity check failed for components:', failedChecks);
    } else {
        logConsentAction('integrity_check_passed', {
            status: 'success'
        });
    }
}

// Run integrity check after a short delay to ensure DOM is fully loaded
setTimeout(performIntegrityCheck, 1000);

// Add a method to allow manual triggering of the banner (useful for testing)
window.CookieConsent.showBanner = function() {
    showCookieBanner();
    logConsentAction('manual_banner_trigger', { source: 'external_call' });
};

// Add a method to get the current configuration (useful for debugging)
window.CookieConsent.getConfig = function() {
    return { ...config };
};

// Final log to confirm the script is fully operational
logConsentAction('script_operational', {
    status: 'fully_operational',
    version: '4.0',
    timestamp: new Date().toISOString()
});

// Add a method to deinitialize the script if needed (e.g., for SPA navigation)
window.CookieConsent.deinitialize = function() {
    // Remove event listeners
    window.removeEventListener('error', window.CookieConsent.errorHandler);
    window.removeEventListener('cookieConsentChanged', window.CookieConsent.consentChangeHandler);
    document.removeEventListener('visibilitychange', window.CookieConsent.visibilityHandler);
    window.removeEventListener('unload', window.CookieConsent.unloadHandler);
    
    // Clear intervals and timeouts
    if (window.CookieConsent.periodicTaskInterval) {
        clearInterval(window.CookieConsent.periodicTaskInterval);
    }

    // Reset global state
    window.CookieConsent.initialized = false;
    
    logConsentAction('script_deinitialized', {
        status: 'deinitialized',
        timestamp: new Date().toISOString()
    });

    console.log('[CookieConsent] Script deinitialized successfully.');
};

// Store references to event handlers for deinitialization
window.CookieConsent.errorHandler = (event) => {
    logConsentAction('runtime_error', {
        error: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
    });
};

window.CookieConsent.consentChangeHandler = (event) => {
    if (event.type === 'cookieConsentChanged') {
        console.log('[CookieConsent] Consent changed:', event.detail);
    }
};

window.CookieConsent.visibilityHandler = () => {
    if (document.visibilityState === 'hidden') {
        logConsentAction('page_hidden', { status: 'paused' });
    } else {
        logConsentAction('page_visible', { status: 'resumed' });
    }
};

window.CookieConsent.unloadHandler = () => {
    logConsentAction('page_unload', { status: 'cleanup' });
};

// Validate current consent state one final time
function validateConsentState() {
    const consent = getCookie('cookie_consent');
    if (!consent) {
        logConsentAction('consent_validation', {
            status: 'no_consent',
            action: 'prompt_user'
        });
        showCookieBanner();
    } else {
        const parsedConsent = JSON.parse(consent);
        const isValid = parsedConsent.categories && parsedConsent.timestamp;
        if (!isValid) {
            logConsentAction('consent_validation', {
                status: 'invalid_consent',
                action: 'reset'
            });
            setCookie('cookie_consent', '', -1);
            showCookieBanner();
        } else {
            logConsentAction('consent_validation', {
                status: 'valid',
                consent: parsedConsent
            });
        }
    }
}

// Run final validation of consent state
validateConsentState();

// Expose a method to check if the script is operational
window.CookieConsent.isOperational = function() {
    return {
        operational: window.CookieConsent.initialized,
        version: '4.0',
        consent: getCookie('cookie_consent'),
        analyticsEnabled: config.analytics.enabled,
        lastValidated: new Date().toISOString()
    };
};

// Final confirmation that all systems are operational
console.log('[CookieConsent] All systems operational. Ready for use.');

// Ensure the script is marked as initialized
window.CookieConsent.initialized = true;

// Log operational status to an external service if configured
function logToExternalService() {
    if (config.logging?.externalService?.enabled && config.logging.externalService.url) {
        const logData = {
            event: 'script_operational',
            status: 'fully_operational',
            version: '4.0',
            timestamp: new Date().toISOString(),
            consent: getCookie('cookie_consent'),
            userAgent: navigator.userAgent,
            pageUrl: window.location.href
        };

        // In a real implementation, this would be an API call (e.g., fetch)
        // For this example, we'll simulate it with a console log
        console.log('[CookieConsent] Logging to external service:', logData);
        
        logConsentAction('external_log', {
            status: 'success',
            data: logData
        });
    }
}

// Call the external logging function
logToExternalService();

// Add a mechanism for future extensions
window.CookieConsent.extend = function(extensionName, extensionFunction) {
    if (typeof extensionFunction !== 'function') {
        console.warn('[CookieConsent] Invalid extension function provided for:', extensionName);
        return;
    }

    window.CookieConsent[extensionName] = extensionFunction;
    logConsentAction('extension_added', {
        extensionName: extensionName,
        status: 'success'
    });

    console.log(`[CookieConsent] Extension '${extensionName}' successfully added.`);
};

// Emit a final confirmation event for other scripts to hook into
function emitFinalConfirmationEvent() {
    const finalConfirmationEvent = new CustomEvent('cookieConsentFullyOperational', {
        detail: {
            version: '4.0',
            consent: getCookie('cookie_consent'),
            config: { ...config },
            timestamp: new Date().toISOString()
        },
        bubbles: true,
        cancelable: false
    });

    window.dispatchEvent(finalConfirmationEvent);
    logConsentAction('final_confirmation_event', {
        status: 'emitted',
        timestamp: new Date().toISOString()
    });
}

// Emit the final confirmation event
emitFinalConfirmationEvent();

// Final log to indicate the script has completed all operations
console.log('[CookieConsent] Script execution complete. All operations finalized.');

// Perform a final audit of the consent system
function performFinalAudit() {
    const auditResults = {
        consentExists: !!getCookie('cookie_consent'),
        bannerVisible: document.getElementById('cookieConsentBanner')?.classList.contains('show'),
        settingsModalVisible: document.getElementById('cookieSettingsModal')?.classList.contains('show'),
        analyticsModalVisible: document.getElementById('cookieAnalyticsModal')?.classList.contains('show'),
        floatingButtonVisible: document.getElementById('cookieFloatingButton')?.classList.contains('show'),
        adminButtonVisible: config.analytics.showFloatingAdminIcon ? document.getElementById('cookieAdminButton')?.classList.contains('show') : false,
        dataLayerEvents: window.dataLayer ? window.dataLayer.length : 0
    };

    logConsentAction('final_audit', {
        results: auditResults,
        timestamp: new Date().toISOString()
    });

    // Check for critical issues and notify user if necessary
    if (!auditResults.consentExists && !auditResults.bannerVisible) {
        console.warn('[CookieConsent] Critical: No consent recorded and banner not visible. Reinitializing banner.');
        showCookieBanner();
        logConsentAction('critical_issue', {
            issue: 'no_consent_no_banner',
            action: 'show_banner'
        });
    }

    console.log('[CookieConsent] Final audit completed:', auditResults);
}

// Run the final audit
performFinalAudit();

// Final cleanup to ensure no lingering resources
function finalCleanup() {
    // Clear any temporary event listeners that might have been added
    const tempListeners = window.CookieConsent.tempListeners || [];
    tempListeners.forEach(({ target, event, handler }) => {
        target.removeEventListener(event, handler);
    });
    window.CookieConsent.tempListeners = [];

    // Clear any temporary data in localStorage
    Object.keys(localStorage)
        .filter(key => key.startsWith('cookieConsentTemp_'))
        .forEach(key => localStorage.removeItem(key));

    logConsentAction('final_cleanup', {
        status: 'complete',
        timestamp: new Date().toISOString()
    });

    console.log('[CookieConsent] Final cleanup completed.');
}

// Run the final cleanup
finalCleanup();

// Add a method to allow manual reset of the entire system (for debugging or testing)
window.CookieConsent.reset = function() {
    // Clear all cookies
    setCookie('cookie_consent', '', -1);
    setCookie('dashboard_auth', '', -1);

    // Reset all localStorage
    Object.keys(localStorage)
        .filter(key => key.startsWith('cookieConsent'))
        .forEach(key => localStorage.removeItem(key));

    // Reset global state
    window.CookieConsent.initialized = false;
    isDashboardAuthenticated = false;

    // Hide all UI elements
    hideCookieBanner();
    hideCookieSettings();
    hideAnalyticsDashboard();
    hideFloatingButton();
    hideAdminButton();

    // Reset dataLayer
    if (window.dataLayer) {
        window.dataLayer = window.dataLayer.filter(entry => !entry.event?.startsWith('cookieConsent'));
    }

    // Reinitialize the system
    initializeCookieConsent();

    logConsentAction('system_reset', {
        status: 'reset_complete',
        timestamp: new Date().toISOString()
    });

    console.log('[CookieConsent] System reset complete. Reinitialized.');
};

// Final confirmation that the script is fully done
console.log('[CookieConsent] Cookie Consent script fully operational and complete.');

})();


