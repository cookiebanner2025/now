/**
 * Enhanced Cookie Consent Banner with Consent Mode v2 Support
 * - Microsoft UET cookie consent mode support
 * - Fully customizable UI with position, size, colors, and timing controls
 * - Detailed analytics dashboard
 * - Premium UI/UX with smooth animations
 * - Automatic translation based on user's country
 * - Domain restriction controls
 * - Geo-targeting (country/city/state level controls)
 * - Complete EU language support
 * - Built-in analytics dashboard with password protection
 * - Consent Mode v2 and future-proof compliance
 * - Responsive design for all devices
 * - Logo handling with auto-detection
 * - Dark mode support
 * - Detailed consent change history
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
        passwordProtect: true, // Enable password protection
        dashboardPassword: 'admin123', // Default password (should be changed per site)
        passwordCookieDuration: 365, // Days to remember password
        detailedHistory: true // Track detailed consent changes
    },
    
    // Banner behavior
    behavior: {
        autoShow: true, // Automatically show banner on page load
        floatingButton: true, // Show floating settings button
        rememberLanguage: true, // Remember user's language preference
        acceptOnScroll: false, // Accept cookies when user scrolls
        acceptOnContinue: true, // Implicit consent when continuing to browse
        floatingButtonPosition: 'left', // 'left' or 'right'
        bannerPosition: 'center', // 'left', 'right', or 'center'
        bannerWidth: '440px', // Default banner width
        bannerHeight: 'auto', // Default banner height
        delayShow: 0, // Delay in seconds before showing banner (0 = immediate)
        showAdminButton: true, // Show admin analytics button
        adminButtonPosition: 'left', // 'left' or 'right'
        darkMode: false // Enable dark mode by default
    },

    // UI Theme (can be 'default', 'classic' or 'dark')
    uiTheme: 'default',
    
    // UI Customization
    uiCustomization: {
        // Banner styling
        bannerBackground: '#ffffff',
        bannerTextColor: '#2c3e50',
        bannerBorderRadius: '12px',
        bannerBorder: 'none',
        bannerShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        
        // Button styling
        acceptBtnColor: '#2ecc71',
        acceptBtnHover: '#27ae60',
        acceptBtnText: '#ffffff',
        saveBtnColor: '#3498db',
        saveBtnHover: '#2980b9',
        saveBtnText: '#ffffff',
        rejectBtnColor: '#ffffff',
        rejectBtnHover: '#ffeeed',
        rejectBtnText: '#e74c3c',
        adjustBtnColor: '#f8f9fa',
        adjustBtnHover: '#f0f2f5',
        adjustBtnText: '#333333',
        btnBorderRadius: '8px',
        btnBorder: '1px solid',
        btnShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        
        // Toggle styling
        toggleActive: '#2ecc71',
        toggleInactive: '#bdc3c7',
        
        // Animation settings
        animationDuration: '0.4s',
        animationEasing: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
        hoverEffects: true, // Enable/disable hover animations
        
        // Logo settings
        showLogo: true,
        logoUrl: '', // Leave empty to auto-detect website logo
        logoPosition: 'left', // 'left' or 'right'
        logoSize: '40px',
        
        // Dark mode settings
        darkModeBackground: '#1a1a1a',
        darkModeText: '#ffffff',
        darkModeToggleActive: '#4CAF50',
        darkModeToggleInactive: '#555555'
    }
};

// ============== MAIN IMPLEMENTATION ============== //
// Initialize dataLayer for Google Tag Manager
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Initialize Microsoft UET if not already loaded
window.uetq = window.uetq || [];
window.uetq.push('setConsentGiven', false); // Initialize with consent denied

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

// Color scheme - easily customizable
const colorScheme = {
    primary: config.uiCustomization.acceptBtnColor || '#2ecc71',      // Green (accept button color)
    secondary: config.uiCustomization.saveBtnColor || '#3498db',      // Blue (save button color)
    danger: '#e74c3c',       // Red (reject button color)
    textDark: config.uiCustomization.bannerTextColor || '#2c3e50',   // Dark text
    textLight: '#7f8c8d',    // Light text
    background: config.uiCustomization.bannerBackground || '#ffffff', // White background
    toggleActive: config.uiCustomization.toggleActive || '#2ecc71',  // Same as primary
    toggleInactive: config.uiCustomization.toggleInactive || '#bdc3c7',// Gray for inactive
    darkModeBackground: config.uiCustomization.darkModeBackground || '#1a1a1a',
    darkModeText: config.uiCustomization.darkModeText || '#ffffff'
};

// Classic theme color scheme
const classicColorScheme = {
    primary: '#4CAF50',      // Green (accept button color)
    secondary: '#2196F3',    // Blue (save button color)
    danger: '#f44336',       // Red (reject button color)
    textDark: '#212121',     // Dark text
    textLight: '#757575',    // Light text
    background: '#ffffff',   // White background
    toggleActive: '#4CAF50', // Same as primary
    toggleInactive: '#9E9E9E',// Gray for inactive
    darkModeBackground: '#121212',
    darkModeText: '#e0e0e0'
};

// Dark theme color scheme
const darkColorScheme = {
    primary: '#4CAF50',      // Green (accept button color)
    secondary: '#2196F3',    // Blue (save button color)
    danger: '#f44336',       // Red (reject button color)
    textDark: '#e0e0e0',     // Light text
    textLight: '#b0b0b0',    // Lighter text
    background: '#1a1a1a',   // Dark background
    toggleActive: '#4CAF50', // Same as primary
    toggleInactive: '#555555',// Dark gray for inactive
    darkModeBackground: '#1a1a1a',
    darkModeText: '#e0e0e0'
};

// Enhanced cookie database with detailed descriptions
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
    '_uetsid': { category: 'advertising', duration: 'Session', description: 'Microsoft Advertising session ID' },
    '_uetvid': { category: 'advertising', duration: '1 year', description: 'Microsoft Advertising visitor ID' },
    
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

// Complete EU language translations
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
        darkMode: "Dark Mode",
        consentHistory: "Consent Change History",
        consentType: "Type",
        consentDate: "Date",
        consentDetails: "Details",
        consentAll: "All",
        consentNone: "None",
        consentCustom: "Custom"
    },
    // ... [Keep all other language translations the same as in your original code]
    // (I'm omitting them here for brevity, but they should be included in the full implementation)
};

// Country to language mapping for auto-translation
const countryLanguageMap = {
    // ... [Keep all country language mappings the same]
    // (I'm omitting them here for brevity, but they should be included in the full implementation)
};

// Analytics data storage
let consentAnalytics = {
    total: {
        accepted: 0,
        rejected: 0,
        custom: 0
    },
    daily: {},
    weekly: {},
    monthly: {},
    history: []
};

// Password protection for analytics
let isDashboardAuthenticated = false;

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

// Update analytics data
function updateConsentStats(status, previousConsent = null) {
    const today = new Date().toISOString().split('T')[0];
    
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
    
    // Add to history if detailed history is enabled
    if (config.analytics.detailedHistory) {
        const historyEntry = {
            type: status,
            date: new Date().toISOString(),
            details: previousConsent || status,
            userAgent: navigator.userAgent,
            ip: '' // Would be populated server-side in a real implementation
        };
        consentAnalytics.history.push(historyEntry);
        // Keep only last 100 entries to prevent excessive storage
        if (consentAnalytics.history.length > 100) {
            consentAnalytics.history.shift();
        }
    }
    
    saveAnalyticsData();
}

// Update weekly and monthly stats
function updateTimeBasedStats(date, status) {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const week = getWeekNumber(dateObj);
    
    // Weekly stats
    const weekKey = `${year}-W${week}`;
    if (!consentAnalytics.weekly[weekKey]) {
        consentAnalytics.weekly[weekKey] = {
            accepted: 0,
            rejected: 0,
            custom: 0
        };
    }
    
    // Monthly stats
    const monthKey = `${year}-${month}`;
    if (!consentAnalytics.monthly[monthKey]) {
        consentAnalytics.monthly[monthKey] = {
            accepted: 0,
            rejected: 0,
            custom: 0
        };
    }
    
    // Update counts
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

// Helper function to get week number
function getWeekNumber(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
    const week1 = new Date(d.getFullYear(), 0, 4);
    return 1 + Math.round(((d - week1) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

// Generate analytics dashboard HTML with history
function generateAnalyticsDashboard(language = 'en') {
    const lang = translations[language] || translations.en;
    
    // Calculate totals
    const total = consentAnalytics.total.accepted + 
                 consentAnalytics.total.rejected + 
                 consentAnalytics.total.custom;
    
    const acceptedPercent = total > 0 ? Math.round((consentAnalytics.total.accepted / total) * 100) : 0;
    const rejectedPercent = total > 0 ? Math.round((consentAnalytics.total.rejected / total) * 100) : 0;
    const customPercent = total > 0 ? Math.round((consentAnalytics.total.custom / total) * 100) : 0;
    
    // Get last 7 days data
    const last7Days = {};
    const dates = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 7);
    dates.forEach(date => {
        last7Days[date] = consentAnalytics.daily[date];
    });
    
    // Get last 30 days data
    const last30Days = {};
    const monthlyDates = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 30);
    monthlyDates.forEach(date => {
        last30Days[date] = consentAnalytics.daily[date];
    });
    
    // Generate history table if detailed history is enabled
    const historyTable = config.analytics.detailedHistory ? `
    <div class="time-stat">
        <h4>${lang.consentHistory}</h4>
        <div class="history-table-container">
            <table class="history-table">
                <thead>
                    <tr>
                        <th>${lang.consentType}</th>
                        <th>${lang.consentDate}</th>
                        <th>${lang.consentDetails}</th>
                    </tr>
                </thead>
                <tbody>
                    ${consentAnalytics.history.slice().reverse().map(entry => `
                    <tr>
                        <td>${entry.type === 'accepted' ? lang.consentAll : 
                             entry.type === 'rejected' ? lang.consentNone : 
                             lang.consentCustom}</td>
                        <td>${new Date(entry.date).toLocaleString()}</td>
                        <td>${typeof entry.details === 'string' ? entry.details : 
                             JSON.stringify(entry.details)}</td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>
    </div>` : '';
    
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
        
        <div class="time-based-stats">
            <div class="time-stat">
                <h4>${lang.statsLast7Days}</h4>
                <div class="stat-bars">
                    ${Object.entries(last7Days).map(([date, data]) => {
                        const dayTotal = data.accepted + data.rejected + data.custom;
                        const dayAcceptedPercent = dayTotal > 0 ? (data.accepted / dayTotal) * 100 : 0;
                        const dayRejectedPercent = dayTotal > 0 ? (data.rejected / dayTotal) * 100 : 0;
                        const dayCustomPercent = dayTotal > 0 ? (data.custom / dayTotal) * 100 : 0;
                        
                        return `
                        <div class="stat-bar-container">
                            <div class="stat-bar-label">${date}</div>
                            <div class="stat-bar">
                                <div class="stat-bar-segment accepted" style="width: ${dayAcceptedPercent}%"></div>
                                <div class="stat-bar-segment custom" style="width: ${dayCustomPercent}%"></div>
                                <div class="stat-bar-segment rejected" style="width: ${dayRejectedPercent}%"></div>
                            </div>
                            <div class="stat-bar-legend">
                                <span>${data.accepted} ${lang.statsAccepted}</span>
                                <span>${data.custom} ${lang.statsCustom}</span>
                                <span>${data.rejected} ${lang.statsRejected}</span>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
            
            <div class="time-stat">
                <h4>${lang.statsLast30Days}</h4>
                <div class="stat-bars">
                    ${Object.entries(last30Days).map(([date, data]) => {
                        const dayTotal = data.accepted + data.rejected + data.custom;
                        const dayAcceptedPercent = dayTotal > 0 ? (data.accepted / dayTotal) * 100 : 0;
                        const dayRejectedPercent = dayTotal > 0 ? (data.rejected / dayTotal) * 100 : 0;
                        const dayCustomPercent = dayTotal > 0 ? (data.custom / dayTotal) * 100 : 0;
                        
                        return `
                        <div class="stat-bar-container">
                            <div class="stat-bar-label">${date}</div>
                            <div class="stat-bar">
                                <div class="stat-bar-segment accepted" style="width: ${dayAcceptedPercent}%"></div>
                                <div class="stat-bar-segment custom" style="width: ${dayCustomPercent}%"></div>
                                <div class="stat-bar-segment rejected" style="width: ${dayRejectedPercent}%"></div>
                            </div>
                            <div class="stat-bar-legend">
                                <span>${data.accepted} ${lang.statsAccepted}</span>
                                <span>${data.custom} ${lang.statsCustom}</span>
                                <span>${data.rejected} ${lang.statsRejected}</span>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
            
            ${historyTable}
        </div>
    </div>`;
}

// ... [Previous functions like isDomainAllowed, checkGeoTargeting, detectUserLanguage, etc.]

// Enhanced cookie scanning function with better matching
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
        
        // Check against known cookie patterns
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

// Function to auto-detect website logo
function detectWebsiteLogo() {
    // Try to find logo in common locations
    const logoSelectors = [
        'header img.logo',
        '.logo img',
        'nav img',
        'header img',
        '#logo img',
        'img[alt*="logo"]',
        'img[src*="logo"]',
        'link[rel*="icon"]'
    ];
    
    for (const selector of logoSelectors) {
        const element = document.querySelector(selector);
        if (element) {
            if (element.tagName === 'LINK') {
                return element.href; // Favicon
            } else if (element.src) {
                return element.src; // Image logo
            }
        }
    }
    
    // Fallback to favicon if no logo found
    const favicon = document.querySelector('link[rel="icon"]') || 
                   document.querySelector('link[rel="shortcut icon"]');
    if (favicon) {
        return favicon.href;
    }
    
    // Final fallback to generic cookie icon
    return 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNDY0IDI1NkEyMDggMjA4IDAgMSAwIDQ4IDI1NkEyMDggMjA4IDAgMSAwIDQ2NCAyNTZ6TTAgMjU2QTI1NiAyNTYgMCAxIDEgNTEyIDI1NkEyNTYgMjU2IDAgMSAxIDAgMjU2em0xNjAgODBjMCA0NCAzNS43IDgwIDgwIDgwczgwLTM1LjcgODAtODBzLTM1LjctODAtODAtODBzLTgwIDM1LjctODAgODB6bTgwLTMyaDE2YzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2SDI0MGMtOC44IDAtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNnoiLz48L3N2Zz4=';
}

// Function to toggle dark mode
function toggleDarkMode(enable) {
    const banner = document.getElementById('cookieConsentBanner');
    const modal = document.getElementById('cookieSettingsModal');
    const analyticsModal = document.getElementById('cookieAnalyticsModal');
    
    if (enable) {
        banner.classList.add('dark-mode');
        if (modal) modal.classList.add('dark-mode');
        if (analyticsModal) analyticsModal.classList.add('dark-mode');
    } else {
        banner.classList.remove('dark-mode');
        if (modal) modal.classList.remove('dark-mode');
        if (analyticsModal) analyticsModal.classList.remove('dark-mode');
    }
    
    // Update config
    config.behavior.darkMode = enable;
}

// Inject the consent HTML with responsive design and dark mode support
function injectConsentHTML(detectedCookies, language = 'en') {
    const lang = translations[language] || translations.en;
    const availableLanguages = getAvailableLanguages();
    const currentTheme = config.uiTheme === 'classic' ? classicColorScheme : 
                        config.uiTheme === 'dark' ? darkColorScheme : colorScheme;
    
    // Auto-detect logo if not specified
    const logoUrl = config.uiCustomization.logoUrl || detectWebsiteLogo();
    
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
    const adminButton = config.analytics.enabled && config.analytics.showDashboard ? `
    <div id="cookieAdminButton" class="cookie-admin-button" title="${lang.dashboardTitle}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM95.4 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.4 399.4C48.6 355.1 17.3 304 2.5 268.3C-.8 260.4-.8 251.6 2.5 243.7C17.3 207.1 48.6 156 95.4 112.6V112.6zM288 80C218.6 80 160 138.6 160 208C160 277.4 218.6 336 288 336C357.4 336 416 277.4 416 208C416 138.6 357.4 80 288 80zM44.96 256C56.53 286.1 83.51 329.2 124.4 368C165.3 406.8 219.1 432 288 432C356.9 432 410.7 406.8 451.6 368C492.5 329.2 519.5 286.1 531 256C519.5 225.9 492.5 182.8 451.6 144C410.7 105.2 356.9 80 288 80C219.1 80 165.3 105.2 124.4 144C83.51 182.8 56.53 225.9 44.96 256V256z"/>
        </svg>
    </div>` : '';
    
    // Generate logo if enabled
    const logo = config.uiCustomization.showLogo ? `
    <div class="cookie-consent-logo" style="float: ${config.uiCustomization.logoPosition}; width: ${config.uiCustomization.logoSize}; height: ${config.uiCustomization.logoSize};">
        <img src="${logoUrl}" alt="Website Logo" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNDY0IDI1NkEyMDggMjA4IDAgMSAwIDQ4IDI1NkEyMDggMjA4IDAgMSAwIDQ2NCAyNTZ6TTAgMjU2QTI1NiAyNTYgMCAxIDEgNTEyIDI1NkEyNTYgMjU2IDAgMSAxIDAgMjU2em0xNjAgODBjMCA0NCAzNS43IDgwIDgwIDgwczgwLTM1LjcgODAtODBzLTM1LjctODAtODAtODBzLTgwIDM1LjctODAgODB6bTgwLTMyaDE2YzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2SDI0MGMtOC44IDAtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNnoiLz48L3N2Zz4='">
    </div>` : '';
    
    // Dark mode toggle
    const darkModeToggle = `
    <div class="dark-mode-toggle">
        <label class="toggle-switch">
            <input type="checkbox" id="darkModeToggle" ${config.behavior.darkMode ? 'checked' : ''}>
            <span class="toggle-slider"></span>
            <span class="toggle-label">${lang.darkMode}</span>
        </label>
    </div>`;
    
    const html = `
    <!-- Main Consent Banner -->
    <div id="cookieConsentBanner" class="cookie-consent-banner ${config.behavior.darkMode ? 'dark-mode' : ''}" style="width: ${config.behavior.bannerWidth}; height: ${config.behavior.bannerHeight};">
        <div class="cookie-consent-container">
            ${languageSelector}
            ${darkModeToggle}
            <div class="cookie-consent-content">
                ${logo}
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
    <div id="cookieSettingsModal" class="cookie-settings-modal ${config.behavior.darkMode ? 'dark-mode' : ''}">
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
    <div id="cookieFloatingButton" class="cookie-settings-button" title="${lang.title}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9-64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.7-5.9-9.9-11.6-9.9c-51.5 0-101.5-14.7-144.9-42.3l-61.2-42.4c-10.1-7-21.8-11.1-33.9-11.9c-12.1-.9-24.1 1.6-34.9 7.2l-61.2 35.1c-6.4 3.7-14.6 1.9-19.3-4.1s-4.7-13.7 1.1-18.4l61.2-42.4c43.4-30.1 97.1-46.4 151.8-46.4c5.7 0 10.7-4.1 11.6-9.8zM133.4 303.6c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9s46.9 21 46.9 46.9s-21 46.9-46.9 46.9zm116.1-90.3c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48zm92.3 99.7c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48z"/>
        </svg>
    </div>
    
    ${adminButton}
    
    <!-- Analytics Dashboard -->
    <div id="cookieAnalyticsModal" class="cookie-analytics-modal ${config.behavior.darkMode ? 'dark-mode' : ''}">
        <div class="cookie-analytics-content">
            <div class="cookie-analytics-header">
                <h2>${lang.dashboardTitle}</h2>
                <span class="close-analytics-modal">&times;</span>
            </div>
            <div class="cookie-analytics-body">
                ${config.analytics.passwordProtect && !isDashboardAuthenticated ? 
                    generatePasswordPrompt(language) : 
                    generateAnalyticsDashboard(language)}
            </div>
        </div>
    </div>
    
    <style>
    /* Main Banner Styles - Updated to match image */
    .cookie-consent-banner {
        position: fixed;
        ${config.behavior.bannerPosition === 'left' ? 'left: 20px;' : 
         config.behavior.bannerPosition === 'right' ? 'right: 20px;' : 
         'left: 50%; transform: translateX(-50%);'}
        bottom: 20px;
        background: ${currentTheme.background};
        border-radius: ${config.uiCustomization.bannerBorderRadius};
        box-shadow: ${config.uiCustomization.bannerShadow};
        z-index: 9999;
        padding: 24px;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        display: none;
        transform: translateY(20px);
        opacity: 0;
        transition: all ${config.uiCustomization.animationDuration} ${config.uiCustomization.animationEasing};
        border: ${config.uiCustomization.bannerBorder};
        overflow: hidden;
        max-width: 90%;
        box-sizing: border-box;
    }

    .cookie-consent-banner.dark-mode {
        background: ${currentTheme.darkModeBackground};
        color: ${currentTheme.darkModeText};
    }

    .cookie-consent-banner.show {
        transform: ${config.behavior.bannerPosition === 'center' ? 'translate(-50%, 0)' : 'translateY(0)'};
        opacity: 1;
        display: block;
    }

    .cookie-consent-container {
        position: relative;
        height: 100%;
    }

    .cookie-consent-logo {
        margin-right: ${config.uiCustomization.logoPosition === 'left' ? '15px' : '0'};
        margin-left: ${config.uiCustomization.logoPosition === 'right' ? '15px' : '0'};
        margin-bottom: 15px;
        float: ${config.uiCustomization.logoPosition};
    }

    .cookie-consent-logo img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 4px;
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

    .dark-mode .cookie-consent-content h2 {
        color: ${currentTheme.darkModeText};
    }

    .dark-mode .cookie-consent-content p {
        color: ${currentTheme.textLight};
    }

    /* ... [Rest of the CSS styles with dark mode support] ... */
    /* (I'm omitting the full CSS here for brevity, but it should include all the styles from your original code plus dark mode variants) */

    /* Dark mode specific styles */
    .dark-mode {
        background-color: ${currentTheme.darkModeBackground};
        color: ${currentTheme.darkModeText};
    }

    .dark-mode .cookie-settings-header,
    .dark-mode .cookie-analytics-header {
        background-color: #2a2a2a;
        border-bottom-color: #444;
    }

    .dark-mode .cookie-settings-body,
    .dark-mode .cookie-analytics-body {
        background-color: #1e1e1e;
        color: ${currentTheme.darkModeText};
    }

    .dark-mode .cookie-category {
        border-bottom-color: #444;
    }

    .dark-mode .cookie-category:hover {
        background-color: #2a2a2a;
    }

    .dark-mode .cookie-details-container {
        border-color: #444;
    }

    .dark-mode .cookie-details-header {
        background-color: #2a2a2a;
    }

    .dark-mode .cookie-details-content {
        background-color: #252525;
        border-top-color: #444;
    }

    .dark-mode .cookie-details-table th {
        background-color: #333;
        border-bottom-color: #444;
        color: ${currentTheme.darkModeText};
    }

    .dark-mode .cookie-details-table td {
        color: ${currentTheme.textLight};
        border-bottom-color: #444;
    }

    .dark-mode .cookie-details-table tr:hover {
        background-color: #333;
    }

    .dark-mode .stat-card {
        background-color: #2a2a2a;
    }

    .dark-mode .time-stat {
        background-color: #2a2a2a;
    }

    .dark-mode .stat-bar {
        background-color: #333;
    }

    .dark-mode .history-table th,
    .dark-mode .history-table td {
        border-color: #444;
    }

    .dark-mode .history-table tr:hover {
        background-color: #333;
    }

    /* Responsive styles for all devices */
    @media (max-width: 768px) {
        .cookie-consent-banner {
            width: calc(100% - 40px);
            ${config.behavior.bannerPosition === 'left' ? 'left: 20px;' : 
             config.behavior.bannerPosition === 'right' ? 'right: 20px;' : 
             'left: 50%; transform: translateX(-50%);'}
            bottom: 10px;
            padding: 15px;
        }
        
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
        
        .cookie-settings-content,
        .cookie-analytics-content {
            width: 95%;
            max-height: 85vh;
        }
    }

    @media (max-width: 480px) {
        .cookie-consent-banner {
            padding: 12px;
            width: calc(100% - 24px);
        }
        
        .cookie-consent-content h2 {
            font-size: 16px;
        }
        
        .cookie-consent-content p {
            font-size: 13px;
        }
        
        .cookie-btn {
            padding: 10px;
            font-size: 13px;
        }
        
        .cookie-settings-button,
        .cookie-admin-button {
            width: 50px;
            height: 50px;
            bottom: 15px;
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

// Initialize cookie consent with all the new features
function initializeCookieConsent(detectedCookies, language) {
    const consentGiven = getCookie('cookie_consent');
    
    if (!consentGiven && config.behavior.autoShow) {
        if (config.behavior.delayShow > 0) {
            setTimeout(showCookieBanner, config.behavior.delayShow * 1000);
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
    
    // Setup dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            toggleDarkMode(this.checked);
        });
    }
    
    // Apply initial dark mode if enabled
    if (config.behavior.darkMode) {
        toggleDarkMode(true);
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
                setCookie('dashboard_auth', 'true', config.analytics.passwordCookieDuration);
                
                // Update the dashboard content
                const lang = document.getElementById('cookieLanguageSelect') ? 
                    document.getElementById('cookieLanguageSelect').value : 'en';
                document.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(lang);
            } else {
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
    if (!config.behavior.floatingButton) return;
    
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
    
    // Update Microsoft UET consent
    if (typeof window.uetq !== 'undefined') {
        window.uetq.push('setConsentGiven', consentData.categories.advertising);
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
    
    // Load Microsoft UET if advertising is allowed
    if (typeof window.uetq !== 'undefined') {
        window.uetq.push('setConsentGiven', true);
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

// Main initialization with all the new features
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
