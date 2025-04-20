/**
 * Enhanced Cookie Consent Banner with Consent Mode v2 and Microsoft UET Support
 * 
 * Features:
 * - Automatic translation based on user's country
 * - Domain restriction controls
 * - Geo-targeting (country/city/state level controls)
 * - Complete EU language support
 * - Built-in analytics dashboard with password protection
 * - Consent Mode v2 and future-proof compliance
 * - Premium UI with enhanced UX
 * - Microsoft UET cookie support
 * - Full customization controls
 */

// ============== CONFIGURATION SECTION ============== //
const config = {
    // Domain restriction - only show on these domains (empty array = all domains)
    allowedDomains: ['dev-rpractice.pantheonsite.io', 'yourdomain.com'],
    
    // Language configuration
    languageConfig: {
        defaultLanguage: 'en', // Default language if auto-detection fails
        availableLanguages: [], // Empty array = all languages available
        showLanguageSelector: true, // Show/hide language dropdown
        autoDetectLanguage: true // Auto-detect language based on country/browser
    },
    
    // Geo-targeting configuration
    geoConfig: {
        // Only show in these countries (empty array = all countries)
        allowedCountries: [],
        
        // Only show in these regions/states (empty array = all regions)
        allowedRegions: [],
        
        // Only show in these cities (empty array = all cities)
        allowedCities: [],
        
        // Countries where banner should be hidden
        blockedCountries: [],
        
        // Regions where banner should be hidden
        blockedRegions: [],
        
        // Cities where banner should be hidden
        blockedCities: []
    },
    
    // Analytics configuration
    analytics: {
        enabled: true,
        storageDays: 30, // How long to keep analytics data
        showDashboard: true, // Show analytics dashboard button
        dashboardPosition: 'right', // 'left' or 'right'
        showDashboardButton: true, // Toggle dashboard button visibility
        passwordProtect: true, // Enable password protection
        dashboardPassword: 'admin123', // Default password (should be changed per site)
        passwordCookieDuration: 365, // Days to remember password
        detailedHistory: true // Enable detailed consent change history
    },
    
    // Banner behavior
    behavior: {
        autoShow: true, // Automatically show banner on page load
        showDelay: 0, // Delay in seconds before showing banner (0 = immediate)
        floatingButton: true, // Show floating settings button
        floatingButtonPosition: 'right', // 'left' or 'right'
        rememberLanguage: true, // Remember user's language preference
        acceptOnScroll: false, // Accept cookies when user scrolls
        acceptOnContinue: true, // Implicit consent when continuing to browse
        bannerPosition: 'left', // 'left', 'right', or 'center'
        bannerWidth: 440, // Base width in pixels
        bannerHeight: 'auto', // 'auto' or specific height in pixels
        animationDuration: 0.4, // Animation duration in seconds
        animationEasing: 'cubic-bezier(0.25, 0.8, 0.25, 1)', // CSS easing function
        hoverEffects: true // Enable hover animations
    },

    // UI Theme (can be 'default' or 'classic')
    uiTheme: 'default',
    
    // Logo configuration
    logo: {
        enabled: false,
        autoDetect: true, // Try to detect website logo automatically
        customUrl: '', // Custom logo URL (overrides auto-detection if set)
        position: 'left', // 'left' or 'right' of banner text
        width: 40, // Logo width in pixels
        height: 40 // Logo height in pixels
    },
    
    // Color scheme - easily customizable
    colors: {
        // Button colors
        acceptButton: '#2ecc71',      // Green (accept button color)
        acceptButtonHover: '#27ae60', // Green hover
        acceptButtonText: '#ffffff',  // White text
        
        saveButton: '#3498db',       // Blue (save button color)
        saveButtonHover: '#2980b9',   // Blue hover
        saveButtonText: '#ffffff',    // White text
        
        rejectButton: '#e74c3c',      // Red (reject button color)
        rejectButtonHover: '#c0392b',  // Red hover
        rejectButtonText: '#ffffff',   // White text
        
        adjustButton: '#f8f9fa',      // Gray (adjust button color)
        adjustButtonHover: '#f0f2f5', // Gray hover
        adjustButtonText: '#333333',   // Dark text
        
        // Banner colors
        bannerBackground: '#ffffff',   // White background
        bannerText: '#2c3e50',         // Dark text
        bannerSecondaryText: '#7f8c8d',// Light text
        
        // Toggle colors
        toggleActive: '#2ecc71',       // Same as primary
        toggleInactive: '#bdc3c7',     // Gray for inactive
        
        // Border and outline
        buttonBorderRadius: 8,         // Button border radius in pixels
        buttonOutline: 'none',         // Button outline style
        bannerBorderRadius: 12,        // Banner border radius in pixels
        bannerOutline: 'none',         // Banner outline style
        bannerShadow: '0 8px 32px rgba(0, 0, 0, 0.12)' // Banner shadow
    }
};

// Classic theme color scheme
const classicColorScheme = {
    acceptButton: '#4CAF50',
    acceptButtonHover: '#3e8e41',
    acceptButtonText: '#ffffff',
    
    saveButton: '#2196F3',
    saveButtonHover: '#0b7dda',
    saveButtonText: '#ffffff',
    
    rejectButton: '#f44336',
    rejectButtonHover: '#da190b',
    rejectButtonText: '#ffffff',
    
    adjustButton: '#f8f9fa',
    adjustButtonHover: '#f0f2f5',
    adjustButtonText: '#212121',
    
    bannerBackground: '#ffffff',
    bannerText: '#212121',
    bannerSecondaryText: '#757575',
    
    toggleActive: '#4CAF50',
    toggleInactive: '#9E9E9E',
    
    buttonBorderRadius: 4,
    buttonOutline: 'none',
    bannerBorderRadius: 4,
    bannerOutline: 'none',
    bannerShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
};

// Enhanced cookie database with detailed descriptions (including UET cookies)
const cookieDatabase = {
    // Google Analytics/GA4
    '_ga': { category: 'analytics', duration: '2 years', description: 'Google Analytics user distinction' },
    '_gid': { category: 'analytics', duration: '24 hours', description: 'Google Analytics user distinction' },
    '_gat': { category: 'analytics', duration: '1 minute', description: 'Google Analytics throttle rate' },
    '_ga_': { category: 'analytics', duration: '2 years', description: 'GA4 session state' },
    
    // Facebook Pixel
    '_fbp': { category: 'advertising', duration: '3 months', description: 'Facebook conversion tracking' },
    'fr': { category: 'advertising', duration: '3 months', description: 'Facebook targeted ads' },
    
    // Microsoft UET
    '_uetvid': { category: 'advertising', duration: '1 year', description: 'Microsoft Advertising unique visitor ID' },
    '_uetsid': { category: 'advertising', duration: 'Session', description: 'Microsoft Advertising session ID' },
    '_uetmsclkid': { category: 'advertising', duration: '1 year', description: 'Microsoft Advertising click ID' },
    
    // Functional cookies
    'wordpress_': { category: 'functional', duration: 'Session', description: 'WordPress authentication' },
    'wp-settings': { category: 'functional', duration: '1 year', description: 'WordPress preferences' },
    'PHPSESSID': { category: 'functional', duration: 'Session', description: 'PHP session' },
    'cookie_consent': { category: 'functional', duration: '1 year', description: 'Stores cookie consent preferences' },
    
    // WooCommerce cookies
    'woocommerce_items_in_cart': { category: 'functional', duration: 'Session', description: 'WooCommerce cart items tracking' },
    'woocommerce_cart_hash': { category: 'functional', duration: 'Session', description: 'WooCommerce cart hash' },
    
    // Advertising cookies
    '_gcl_au': { category: 'advertising', duration: '3 months', description: 'Google Ads conversion' },
    'IDE': { category: 'advertising', duration: '1 year', description: 'Google DoubleClick' },
    'NID': { category: 'advertising', duration: '6 months', description: 'Google user tracking' },
    
    // Other common cookies
    'gclid_tracker': { category: 'advertising', duration: 'Session', description: 'Tracks Google Click ID for conversions' },
    'tk_ai': { category: 'analytics', duration: 'Session', description: 'Jetpack/Tumblr analytics' },
    'external_id': { category: 'functional', duration: 'Session', description: 'External service identifier' }
};

// Complete EU language translations (same as before, but I'll include it for completeness)
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
        consentHistory: "Consent Change History"
    },
    // ... (keep all other language translations the same as in your original code)
    // I'm omitting them here for brevity, but they should be included in the full implementation
};

// Country to language mapping for auto-translation
const countryLanguageMap = {
    // ... (keep all country to language mappings the same as in your original code)
    // I'm omitting them here for brevity, but they should be included in the full implementation
};

// Analytics data storage with enhanced history tracking
let consentAnalytics = {
    total: {
        accepted: 0,
        rejected: 0,
        custom: 0
    },
    daily: {},
    weekly: {},
    monthly: {},
    history: [] // New field for detailed consent change history
};

// Password protection for analytics
let isDashboardAuthenticated = false;

// Initialize dataLayer for Google Tag Manager
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Set default consent (deny all except security)
gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'personalization_storage': 'denied',
    'functionality_storage': 'denied',
    'security_storage': 'granted'
});

// Helper function to get current theme colors
function getCurrentColors() {
    return config.uiTheme === 'classic' ? classicColorScheme : config.colors;
}

// Load analytics data from localStorage
function loadAnalyticsData() {
    const savedData = localStorage.getItem('consentAnalytics');
    if (savedData) {
        consentAnalytics = JSON.parse(savedData);
    }
    
    // Initialize today's data if not exists
    const today = new Date().toISOString().split('T')[0];
    if (!consentAnalytics.daily[today]) {
        consentAnalytics.daily[today] = {
            accepted: 0,
            rejected: 0,
            custom: 0
        };
    }
    
    // Check if dashboard is authenticated
    if (config.analytics.passwordProtect) {
        isDashboardAuthenticated = getCookie('dashboard_auth') === 'true';
    } else {
        isDashboardAuthenticated = true;
    }
}

// Save analytics data to localStorage
function saveAnalyticsData() {
    localStorage.setItem('consentAnalytics', JSON.stringify(consentAnalytics));
}

// Update analytics data with enhanced history tracking
function updateConsentStats(status, previousConsent = null) {
    const today = new Date().toISOString().split('T')[0];
    const now = new Date().getTime();
    
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
    
    // Update weekly and monthly stats
    updateTimeBasedStats(today, status);
    
    // Record detailed history if enabled
    if (config.analytics.detailedHistory) {
        const historyEntry = {
            timestamp: now,
            date: today,
            action: status,
            previousConsent: previousConsent,
            currentPage: window.location.href,
            userAgent: navigator.userAgent
        };
        consentAnalytics.history.push(historyEntry);
        
        // Keep only the last 100 history entries to prevent excessive storage
        if (consentAnalytics.history.length > 100) {
            consentAnalytics.history = consentAnalytics.history.slice(-100);
        }
    }
    
    saveAnalyticsData();
}

// Generate consent history table for dashboard
function generateConsentHistory(language = 'en') {
    const lang = translations[language] || translations.en;
    const history = consentAnalytics.history.slice().reverse(); // Show newest first
    
    if (history.length === 0) {
        return `<p class="no-history-message">No consent changes recorded yet.</p>`;
    }
    
    return `
    <div class="consent-history">
        <h4>${lang.consentHistory}</h4>
        <table class="history-table">
            <thead>
                <tr>
                    <th>Date & Time</th>
                    <th>Action</th>
                    <th>Previous Consent</th>
                    <th>Page</th>
                </tr>
            </thead>
            <tbody>
                ${history.map(entry => `
                <tr>
                    <td>${new Date(entry.timestamp).toLocaleString()}</td>
                    <td class="history-action ${entry.action}">${entry.action}</td>
                    <td>${entry.previousConsent ? JSON.stringify(entry.previousConsent) : 'N/A'}</td>
                    <td class="history-page">${entry.currentPage}</td>
                </tr>`).join('')}
            </tbody>
        </table>
    </div>`;
}

// Main initialization with enhanced cookie scanning
document.addEventListener('DOMContentLoaded', function() {
    // First check if we should run on this domain
    if (!isDomainAllowed()) {
        console.log('Cookie consent banner disabled for this domain');
        return;
    }
    
    // Load analytics data
    if (config.analytics.enabled) {
        loadAnalyticsData();
    }
    
    // Get geo data from dataLayer or detect
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
    
    // Check geo-targeting restrictions
    if (!checkGeoTargeting(geoData)) {
        console.log('Cookie consent banner disabled for this location');
        return;
    }
    
    // Detect language
    const detectedLanguage = detectUserLanguage(geoData);
    
    const detectedCookies = scanAndCategorizeCookies();
    if (detectedCookies.uncategorized.length > 0) {
        console.log('Uncategorized cookies found:', detectedCookies.uncategorized);
        // Try to automatically categorize unknown cookies
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
    
    if (getCookie('cookie_consent')) {
        showFloatingButton();
    }
    
    // Track marketing parameters
    trackMarketingParameters();
    
    // Enhanced periodic cookie scan with validation
    setInterval(() => {
        const newCookies = scanAndCategorizeCookies();
        if (JSON.stringify(newCookies) !== JSON.stringify(detectedCookies)) {
            updateCookieTables(newCookies);
        }
    }, 30000); // Scan every 30 seconds
    
    // Handle scroll-based acceptance
    if (config.behavior.acceptOnScroll) {
        window.addEventListener('scroll', handleScrollAcceptance);
    }
});

// Inject the consent HTML with all UI elements
function injectConsentHTML(detectedCookies, language = 'en') {
    const lang = translations[language] || translations.en;
    const availableLanguages = getAvailableLanguages();
    const currentColors = getCurrentColors();
    
    // Generate cookie tables for each category
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
    
    // Generate language selector dropdown if enabled
    const languageSelector = config.languageConfig.showLanguageSelector ? `
    <div class="language-selector">
        <select id="cookieLanguageSelect">
            ${availableLanguages.map(code => `
                <option value="${code}" ${code === language ? 'selected' : ''}>${translations[code].language}</option>
            `).join('')}
        </select>
    </div>` : '';
    
    // Generate admin dashboard button if analytics enabled
    const adminButton = config.analytics.enabled && config.analytics.showDashboard && config.analytics.showDashboardButton ? `
    <div id="cookieAdminButton" class="cookie-admin-button" title="${lang.dashboardTitle}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM95.4 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.4 399.4C48.6 355.1 17.3 304 2.5 268.3C-.8 260.4-.8 251.6 2.5 243.7C17.3 207.1 48.6 156 95.4 112.6V112.6zM288 80C218.6 80 160 138.6 160 208C160 277.4 218.6 336 288 336C357.4 336 416 277.4 416 208C416 138.6 357.4 80 288 80zM44.96 256C56.53 286.1 83.51 329.2 124.4 368C165.3 406.8 219.1 432 288 432C356.9 432 410.7 406.8 451.6 368C492.5 329.2 519.5 286.1 531 256C519.5 225.9 492.5 182.8 451.6 144C410.7 105.2 356.9 80 288 80C219.1 80 165.3 105.2 124.4 144C83.51 182.8 56.53 225.9 44.96 256V256z"/>
        </svg>
    </div>` : '';
    
    // Generate logo HTML if enabled
    const logoHtml = config.logo.enabled ? generateLogoHtml() : '';
    
    const html = `
    <!-- Main Consent Banner -->
    <div id="cookieConsentBanner" class="cookie-consent-banner">
        <div class="cookie-consent-container">
            ${languageSelector}
            <div class="cookie-consent-content">
                ${config.logo.enabled && config.logo.position === 'left' ? logoHtml : ''}
                <div class="cookie-text-content">
                    <h2>${lang.title}</h2>
                    <p>${lang.description}</p>
                    <a href="/privacy-policy/" class="privacy-policy-link">${lang.privacy}</a>
                </div>
                ${config.logo.enabled && config.logo.position === 'right' ? logoHtml : ''}
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
                <span class="close-modal">&times;</span>
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
    ${config.behavior.floatingButton ? `
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
                <span class="close-analytics-modal">&times;</span>
            </div>
            <div class="cookie-analytics-body">
                ${config.analytics.passwordProtect && !isDashboardAuthenticated ? 
                    generatePasswordPrompt(language) : 
                    generateAnalyticsDashboard(language)}
                ${config.analytics.detailedHistory ? generateConsentHistory(language) : ''}
            </div>
        </div>
    </div>
    
    <style>
    /* Main Banner Styles with dynamic positioning and sizing */
    .cookie-consent-banner {
        position: fixed;
        bottom: 20px;
        ${getBannerPosition()}
        width: ${config.behavior.bannerWidth}px;
        ${config.behavior.bannerHeight === 'auto' ? '' : `height: ${config.behavior.bannerHeight}px;`}
        background: ${currentColors.bannerBackground};
        border-radius: ${currentColors.bannerBorderRadius}px;
        box-shadow: ${currentColors.bannerShadow};
        z-index: 9999;
        padding: 24px;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        display: none;
        transform: translateY(20px);
        opacity: 0;
        transition: all ${config.behavior.animationDuration}s ${config.behavior.animationEasing};
        border: ${currentColors.bannerOutline};
        overflow: hidden;
    }

    .cookie-consent-container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .cookie-consent-content {
        display: flex;
        align-items: flex-start;
        margin-bottom: 16px;
    }

    .cookie-text-content {
        flex: 1;
    }

    .cookie-logo {
        width: ${config.logo.width}px;
        height: ${config.logo.height}px;
        ${config.logo.position === 'left' ? 'margin-right: 15px;' : 'margin-left: 15px;'}
        object-fit: contain;
    }

    .cookie-consent-banner.show {
        transform: translateY(0);
        opacity: 1;
        display: block;
    }

    .cookie-consent-content h2 {
        margin: 0 0 16px 0;
        font-size: 18px;
        color: ${currentColors.bannerText};
        font-weight: 600;
        line-height: 1.4;
        letter-spacing: -0.2px;
    }

    .cookie-consent-content p {
        margin: 0 0 24px 0;
        font-size: 14px;
        color: ${currentColors.bannerSecondaryText};
        line-height: 1.5;
    }

    .privacy-policy-link {
        color: ${currentColors.saveButton};
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
        display: inline-block;
        margin-bottom: 24px;
        transition: color 0.2s ease;
    }

    .privacy-policy-link:hover {
        color: ${currentColors.saveButtonHover};
    }

    .cookie-consent-buttons {
        display: flex;
        gap: 12px;
        margin-top: 8px;
    }

    .cookie-btn {
        padding: 12px 20px;
        border-radius: ${currentColors.buttonBorderRadius}px;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        transition: all 0.3s ${config.behavior.animationEasing};
        text-align: center;
        border: ${currentColors.buttonOutline};
        flex: 1;
        letter-spacing: 0.2px;
    }

    .adjust-btn {
        background-color: ${currentColors.adjustButton};
        color: ${currentColors.adjustButtonText};
        border: 1px solid #e0e0e0;
    }

    .adjust-btn:hover {
        background-color: ${currentColors.adjustButtonHover};
        ${config.behavior.hoverEffects ? 'transform: translateY(-1px);' : ''}
        ${config.behavior.hoverEffects ? 'box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);' : ''}
    }

    .reject-btn {
        background-color: #fff;
        color: ${currentColors.rejectButton};
        border: 1px solid ${currentColors.rejectButton};
    }

    .reject-btn:hover {
        background-color: #ffeeed;
        ${config.behavior.hoverEffects ? 'transform: translateY(-1px);' : ''}
        ${config.behavior.hoverEffects ? `box-shadow: 0 2px 8px ${hexToRgba(currentColors.rejectButton, 0.15)};` : ''}
    }

    .accept-btn {
        background-color: ${currentColors.acceptButton};
        color: ${currentColors.acceptButtonText};
        border: 1px solid ${currentColors.acceptButton};
        ${config.behavior.hoverEffects ? `box-shadow: 0 2px 12px ${hexToRgba(currentColors.acceptButton, 0.3)};` : ''}
    }

    .accept-btn:hover {
        background-color: ${currentColors.acceptButtonHover};
        ${config.behavior.hoverEffects ? 'transform: translateY(-1px);' : ''}
        ${config.behavior.hoverEffects ? `box-shadow: 0 4px 16px ${hexToRgba(currentColors.acceptButton, 0.4)};` : ''}
    }

    /* ... (rest of the CSS remains the same as before, just updated to use currentColors) ... */
    </style>`;
    
    document.body.insertAdjacentHTML('beforeend', html);
}

// Helper function to convert hex to rgba
function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Helper function to get banner position CSS
function getBannerPosition() {
    switch (config.behavior.bannerPosition) {
        case 'left':
            return 'left: 20px; right: auto;';
        case 'right':
            return 'right: 20px; left: auto;';
        case 'center':
            return 'left: 50%; transform: translateX(-50%) translateY(20px);';
        default:
            return 'right: 20px; left: auto;';
    }
}

// Helper function to generate logo HTML
function generateLogoHtml() {
    let logoUrl = config.logo.customUrl;
    
    // Try to auto-detect logo if no custom URL provided
    if (config.logo.autoDetect && !logoUrl) {
        const logoElement = document.querySelector('img[src*="logo"], .logo img, header img, .site-logo img');
        if (logoElement) {
            logoUrl = logoElement.src;
        }
    }
    
    // Fallback to empty div if no logo found
    if (!logoUrl) {
        return '<div class="cookie-logo-placeholder"></div>';
    }
    
    return `<img src="${logoUrl}" alt="Website Logo" class="cookie-logo" width="${config.logo.width}" height="${config.logo.height}">`;
}

// Initialize cookie consent with delayed display if configured
function initializeCookieConsent(detectedCookies, language) {
    const consentGiven = getCookie('cookie_consent');
    
    if (!consentGiven && config.behavior.autoShow) {
        if (config.behavior.showDelay > 0) {
            setTimeout(showCookieBanner, config.behavior.showDelay * 1000);
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
    if (config.analytics.enabled && config.analytics.showDashboard && config.analytics.showDashboardButton) {
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

// Update consent mode with Microsoft UET support
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
    
    // Update Microsoft UET if advertising is enabled
    if (consentData.categories.advertising && window.uetq) {
        window.uetq = window.uetq || [];
        window.uetq.push('consent', 'granted');
    }
    
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

// ... (rest of the functions remain the same as in your original code, just updated to use the new config options)

// Initialize Microsoft UET if advertising is accepted
function loadAdvertisingCookies() {
    console.log('Loading advertising cookies');
    
    // Load Facebook Pixel if not already loaded
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
    
    // Load Microsoft UET if not already loaded
    if (typeof window.uetq === 'undefined') {
        (function(w,d,t,r,u){
            w[u]=w[u]||[];w[u].push({'uetq':new Date().getTime()});
            var s=d.createElement(t);s.src=r;s.async=1;
            var f=d.getElementsByTagName(t)[0];f.parentNode.insertBefore(s,f);
        })(window,document,'script','//bat.bing.com/bat.js','uetq');
    } else {
        // If UET is already loaded but consent was just given, push consent
        window.uetq = window.uetq || [];
        window.uetq.push('consent', 'granted');
    }
}

// Helper function to set cookie with SameSite and Secure attributes
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax; Secure";
}

// Helper function to get cookie
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
