/**
 * Enhanced Cookie Consent Banner with Consent Mode v2 Support
 * - Now fully responsive for all devices
 * - Added logo handling with auto-detection
 * - Organized configuration sections
 * - Center positioning option
 * - Dark mode support
 * - Smooth animations with toggle
 * - Detailed consent analytics dashboard
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
        passwordCookieDuration: 365
    },
    
    // Banner behavior
    behavior: {
        autoShow: true,
        floatingButton: true,
        rememberLanguage: true,
        acceptOnScroll: false,
        acceptOnContinue: true,
        floatingButtonPosition: 'left',
        bannerPosition: 'center', // 'left', 'right', or 'center'
        bannerWidth: '440px',
        bannerHeight: 'auto',
        delayShow: 0,
        showAdminButton: true,
        adminButtonPosition: 'left',
        darkMode: false, // Enable dark mode
        animations: true // Enable animations
    },

    // UI Theme (can be 'default' or 'classic')
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
        hoverEffects: true,
        
        // Logo settings
        showLogo: true,
        logoUrl: '', // Leave empty to auto-detect website logo
        logoPosition: 'left',
        logoSize: '40px',
        
        // Dark mode settings
        darkModeBackground: '#1a1a1a',
        darkModeTextColor: '#ffffff',
        darkModeBorder: '1px solid #333'
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
    toggleInactive: config.uiCustomization.toggleInactive || '#bdc3c7'// Gray for inactive
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
    toggleInactive: '#9E9E9E'// Gray for inactive
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
        dashboardTitle: "Consent Analytics Dashboard"
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
        dashboardTitle: "Tableau de bord des analyses de consentement"
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
        statsLast30Days: "Letzten 30 Tage"
    },
    es: {
        title: "Valoramos su privacidad",
        description: "Utilizamos cookies para mejorar su experiencia, proporcionar anuncios o contenido personalizado y analizar nuestro tráfico. Al hacer clic en \"Aceptar todo\", usted acepta el uso de cookies.",
        privacy: "Política de privacidad",
        customize: "Personalizar",
        reject: "Rechazar todo",
        accept: "Aceptar todo",
        essential: "Cookies esenciales",
        essentialDesc: "Necesarias para el funcionamiento",
        analytics: "Cookies de análisis",
        analyticsDesc: "Ayudan a entender interacciones",
        performance: "Cookies de rendimiento",
        performanceDesc: "Mejoran el rendimiento",
        advertising: "Cookies publicitarias",
        advertisingDesc: "Muestran anuncios relevantes",
        other: "Otras cookies",
        otherDesc: "Cookies no categorizadas",
        save: "Guardar preferencias",
        language: "Español",
        statsTitle: "Estadísticas de Consentimiento",
        statsAccepted: "Aceptado",
        statsRejected: "Rechazado",
        statsCustom: "Personalizado",
        statsTotal: "Total",
        statsPercentage: "Porcentaje",
        statsLast7Days: "Últimos 7 Días",
        statsLast30Days: "Últimos 30 Días"
    },
    it: {
        title: "Rispettiamo la tua privacy",
        description: "Utilizziamo i cookie per migliorare la tua esperienza, fornire annunci o contenuti personalizzati e analizzare il nostro traffico. Cliccando su \"Accetta tutto\", acconsenti all'uso dei cookie.",
        privacy: "Privacy Policy",
        customize: "Personalizza",
        reject: "Rifiuta tutto",
        accept: "Accetta tutto",
        essential: "Cookie essenziali",
        essentialDesc: "Necessari per il funzionamento",
        analytics: "Cookie analitici",
        analyticsDesc: "Analizzano le interazioni",
        performance: "Cookie prestazioni",
        performanceDesc: "Migliorano le prestazioni",
        advertising: "Cookie pubblicitari",
        advertisingDesc: "Mostrano annunci pertinenti",
        other: "Altri cookie",
        otherDesc: "Cookie non categorizzati",
        save: "Salva preferenze",
        language: "Italiano",
        statsTitle: "Statistiche del Consenso",
        statsAccepted: "Accettato",
        statsRejected: "Rifiutato",
        statsCustom: "Personalizzato",
        statsTotal: "Totale",
        statsPercentage: "Percentuale",
        statsLast7Days: "Ultimi 7 Giorni",
        statsLast30Days: "Ultimi 30 Giorni"
    },
    pt: {
        title: "Valorizamos sua privacidade",
        description: "Usamos cookies para melhorar sua experiência, fornecer anúncios ou conteúdo personalizado e analizar nosso tráfego. Clicando em \"Aceitar Tudo\", você concorda com o uso de cookies.",
        privacy: "Política de Privacidade",
        customize: "Personalizar",
        reject: "Rejeitar Tudo",
        accept: "Aceitar Tudo",
        essential: "Cookies Essenciais",
        essentialDesc: "Necessários para o funcionamento",
        analytics: "Cookies de Análise",
        analyticsDesc: "Ajudam a entender interações",
        performance: "Cookies de Desempenho",
        performanceDesc: "Melhoram o desempenho",
        advertising: "Cookies de Publicidade",
        advertisingDesc: "Exibem anúncios relevantes",
        other: "Outros Cookies",
        otherDesc: "Cookies não categorizados",
        save: "Salvar Preferências",
        language: "Português",
        statsTitle: "Estatísticas de Consentimento",
        statsAccepted: "Aceito",
        statsRejected: "Rejeitado",
        statsCustom: "Personalizado",
        statsTotal: "Total",
        statsPercentage: "Percentagem",
        statsLast7Days: "Últimos 7 Dias",
        statsLast30Days: "Últimos 30 Dias"
    },
    nl: {
        title: "We waarderen uw privacy",
        description: "We gebruiken cookies om uw browse-ervaring te verbeteren, gepersonaliseerde advertenties of inhoud te bieden en ons verkeer te analyseren. Door op \"Alles accepteren\" te klikken, stemt u in met het gebruik van cookies.",
        privacy: "Privacybeleid",
        customize: "Aanpassen",
        reject: "Alles weigeren",
        accept: "Alles accepteren",
        essential: "Essentiële Cookies",
        essentialDesc: "Noodzakelijk voor websitefunctionaliteit",
        analytics: "Analysecookies",
        analyticsDesc: "Helpen bezoekersinteracties te begrijpen",
        performance: "Prestatiecookies",
        performanceDesc: "Verbeteren website prestaties",
        advertising: "Advertentiecookies",
        advertisingDesc: "Leveren relevante advertenties",
        other: "Andere Cookies",
        otherDesc: "Niet-gecategoriseerde cookies",
        save: "Voorkeuren opslaan",
        language: "Nederlands",
        statsTitle: "Toestemmingsstatistieken",
        statsAccepted: "Geaccepteerd",
        statsRejected: "Geweigerd",
        statsCustom: "Aangepast",
        statsTotal: "Totaal",
        statsPercentage: "Percentage",
        statsLast7Days: "Laatste 7 Dagen",
        statsLast30Days: "Laatste 30 Dagen"
    },
    pl: {
        title: "Szanujemy Twoją prywatność",
        description: "Używamy plików cookie, aby poprawić Twoje doświadczenia przeglądania, dostarczać spersonalizowane reklamy lub treści i analizować nasz ruch. Klikając „Zaakceptuj wszystkie”, wyrażasz zgodę na używanie plików cookie.",
        privacy: "Polityka prywatności",
        customize: "Dostosuj",
        reject: "Odrzuć wszystkie",
        accept: "Zaakceptuj wszystkie",
        essential: "Niezbędne pliki cookie",
        essentialDesc: "Wymagane do działania witryny",
        analytics: "Analityczne pliki cookie",
        analyticsDesc: "Pomagają zrozumieć interakcje",
        performance: "Pliki cookie wydajności",
        performanceDesc: "Poprawiają wydajność witryny",
        advertising: "Reklamowe pliki cookie",
        advertisingDesc: "Dostarczają odpowiednie reklamy",
        other: "Inne pliki cookie",
        otherDesc: "Nieskategoryzowane pliki cookie",
        save: "Zapisz preferencje",
        language: "Polski",
        statsTitle: "Statystyki zgód",
        statsAccepted: "Zaakceptowane",
        statsRejected: "Odrzucone",
        statsCustom: "Dostosowane",
        statsTotal: "Łącznie",
        statsPercentage: "Procent",
        statsLast7Days: "Ostatnie 7 Dni",
        statsLast30Days: "Ostatnie 30 Dni"
    },
    sv: {
        title: "Vi värdesätter din integritet",
        description: "Vi använder cookies för att förbättra din surfupplevelse, tillhandahålla anpassade annonser eller innehåll och analysera vår trafik. Genom att klicka på \"Acceptera alla\" samtycker du till användningen av cookies.",
        privacy: "Integritetspolicy",
        customize: "Anpassa",
        reject: "Avvisa alla",
        accept: "Acceptera alla",
        essential: "Nödvändiga Cookies",
        essentialDesc: "Nödvändiga för webbplatsens funktionalitet",
        analytics: "Analyscookies",
        analyticsDesc: "Hjälper till att förstå besökarinteraktioner",
        performance: "Prestandacookies",
        performanceDesc: "Förbättrar webbplatsens prestanda",
        advertising: "Annonscookies",
        advertisingDesc: "Levererar relevanta annonser",
        other: "Andra Cookies",
        otherDesc: "Okategoriserade cookies",
        save: "Spara inställningar",
        language: "Svenska",
        statsTitle: "Samtyckesstatistik",
        statsAccepted: "Accepterade",
        statsRejected: "Avvisade",
        statsCustom: "Anpassade",
        statsTotal: "Totalt",
        statsPercentage: "Procent",
        statsLast7Days: "Senaste 7 Dagarna",
        statsLast30Days: "Senaste 30 Dagarna"
    },
    da: {
        title: "Vi værdsætter dit privatliv",
        description: "Vi bruger cookies til at forbedre din browsingoplevelse, levere personificerede annoncer eller indhold og analysere vores trafik. Ved at klikke på \"Accepter alle\" giver du samtykke til brugen af cookies.",
        privacy: "Privatlivspolitik",
        customize: "Tilpas",
        reject: "Afvis alle",
        accept: "Accepter alle",
        essential: "Nødvendige Cookies",
        essentialDesc: "Nødvendige for webstedets funktionalitet",
        analytics: "Analysecookies",
        analyticsDesc: "Hjælper med at forstå brugerinteraktioner",
        performance: "Performancecookies",
        performanceDesc: "Forbedrer webstedets ydeevne",
        advertising: "Annoncecookies",
        advertisingDesc: "Leverer relevante annoncer",
        other: "Andre Cookies",
        otherDesc: "Ukategoriserede cookies",
        save: "Gem indstillinger",
        language: "Dansk",
        statsTitle: "Samtykkestatistik",
        statsAccepted: "Accepteret",
        statsRejected: "Afvist",
        statsCustom: "Tilpasset",
        statsTotal: "Total",
        statsPercentage: "Procentdel",
        statsLast7Days: "Sidste 7 Dage",
        statsLast30Days: "Sidste 30 Dage"
    },
    fi: {
        title: "Arvostamme yksityisyyttäsi",
        description: "Käytämme evästeitä parantaaksemme selauskokemustasi, tarjotaksemme henkilökohtaisia mainoksia tai sisältöä ja analysoidaksemme liikennettämme. Klikkaamalla \"Hyväksy kaikki\" annat suostumuksesi evästeiden käyttöön.",
        privacy: "Tietosuojakäytäntö",
        customize: "Mukauta",
        reject: "Hylkää kaikki",
        accept: "Hyväksy kaikki",
        essential: "Välttämättömät evästeet",
        essentialDesc: "Välttämättömiä sivuston toiminnan kannalta",
        analytics: "Analytiikkaevästeet",
        analyticsDesc: "Auttavat ymmärtämään käyttäjäinteraktioita",
        performance: "Suorituskykyevästeet",
        performanceDesc: "Parantavat sivuston suorituskykyä",
        advertising: "Mainosevästeet",
        advertisingDesc: "Toimittavat asiaankuuluvia mainoksia",
        other: "Muut evästeet",
        otherDesc: "Luokittelemattomat evästeet",
        save: "Tallenna asetukset",
        language: "Suomi",
        statsTitle: "Suostumustilastot",
        statsAccepted: "Hyväksytty",
        statsRejected: "Hylätty",
        statsCustom: "Mukautettu",
        statsTotal: "Yhteensä",
        statsPercentage: "Prosenttia",
        statsLast7Days: "Viimeiset 7 Päivää",
        statsLast30Days: "Viimeiset 30 Päivää"
    },
    el: {
        title: "Σεβόμαστε την ιδιωτικότητά σας",
        description: "Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας, να παρέχουμε εξατομικευμένες διαφημίσεις ή περιεχόμενο και να αναλύουμε την επισκεψιμότητά μας. Κάνοντας κλικ στο \"Αποδοχή όλων\", συναινείτε στη χρήση cookies.",
        privacy: "Πολιτική Απορρήτου",
        customize: "Προσαρμογή",
        reject: "Απόρριψη όλων",
        accept: "Αποδοχή όλων",
        essential: "Απαραίτητα Cookies",
        essentialDesc: "Απαραίτητα για τη λειτουργία του ιστότοπου",
        analytics: "Αναλυτικά Cookies",
        analyticsDesc: "Βοηθούν στην κατανόηση αλληλεπιδράσεων",
        performance: "Cookies Απόδοσης",
        performanceDesc: "Βελτιώνουν την απόδοση του ιστότοπου",
        advertising: "Διαφημιστικά Cookies",
        advertisingDesc: "Παρέχουν σχετικές διαφημίσεις",
        other: "Άλλα Cookies",
        otherDesc: "Μη κατηγοριοποιημένα cookies",
        save: "Αποθήκευση προτιμήσεων",
        language: "Ελληνικά",
        statsTitle: "Στατιστικά Συναίνεσης",
        statsAccepted: "Αποδεκτά",
        statsRejected: "Απορριφθέντα",
        statsCustom: "Προσαρμοσμένα",
        statsTotal: "Σύνολο",
        statsPercentage: "Ποσοστό",
        statsLast7Days: "Τελευταίες 7 Ημέρες",
        statsLast30Days: "Τελευταίες 30 Ημέρες"
    },
    hu: {
        title: "Tiszteljük az Ön privát szféráját",
        description: "Cookie-kat használunk a böngészési élmény javításához, személyre szabott hirdetések vagy tartalom nyújtásához és a forgalmunk elemzéséhez. Az \"Összes elfogadása\" gombra kattintva hozzájárul a cookie-k használatához.",
        privacy: "Adatvédelmi irányelv",
        customize: "Testreszabás",
        reject: "Összes elutasítása",
        accept: "Összes elfogadása",
        essential: "Alapvető Cookie-k",
        essentialDesc: "A weboldal működéséhez szükséges",
        analytics: "Elemző Cookie-k",
        analyticsDesc: "Segítenek megérteni a látogatói interakciókat",
        performance: "Teljesítmény Cookie-k",
        performanceDesc: "Javítják a weboldal teljesítményét",
        advertising: "Hirdetési Cookie-k",
        advertisingDesc: "Releváns hirdetéseket jelenítenek meg",
        other: "Egyéb Cookie-k",
        otherDesc: "Nincs kategorizálva",
        save: "Beállítások mentése",
        language: "Magyar",
        statsTitle: "Hozzájárulási statisztikák",
        statsAccepted: "Elfogadva",
        statsRejected: "Elutasítva",
        statsCustom: "Testreszabva",
        statsTotal: "Összesen",
        statsPercentage: "Százalék",
        statsLast7Days: "Elmúlt 7 Nap",
        statsLast30Days: "Elmúlt 30 Nap"
    },
    cs: {
        title: "Vaše soukromí je pro nás důležité",
        description: "Používáme cookies ke zlepšení vašeho zážitku z prohlížení, poskytování personalizovaných reklam nebo obsahu a analýze našeho provozu. Kliknutím na \"Přijmout vše\" souhlasíte s používáním cookies.",
        privacy: "Zásady ochrany osobních údajů",
        customize: "Přizpůsobit",
        reject: "Odmítnout vše",
        accept: "Přijmout vše",
        essential: "Nezbytné Cookies",
        essentialDesc: "Nezbytné pro funkčnost webu",
        analytics: "Analytické Cookies",
        analyticsDesc: "Pomáhají porozumět interakcím návštěvníků",
        performance: "Výkonnostní Cookies",
        performanceDesc: "Zlepšují výkon webu",
        advertising: "Reklamní Cookies",
        advertisingDesc: "Poskytují relevantní reklamy",
        other: "Ostatní Cookies",
        otherDesc: "Nekategorizované cookies",
        save: "Uložit nastavení",
        language: "Čeština",
        statsTitle: "Statistiky souhlasu",
        statsAccepted: "Přijato",
        statsRejected: "Odmítnuto",
        statsCustom: "Přizpůsobeno",
        statsTotal: "Celkem",
        statsPercentage: "Procento",
        statsLast7Days: "Posledních 7 Dní",
        statsLast30Days: "Posledních 30 Dní"
    },
    ro: {
        title: "Respectăm confidențialitatea dumneavoastră",
        description: "Folosim cookie-uri pentru a îmbunătăți experiența de navigare, pentru a furniza reclame sau conținut personalizat și pentru a analiza traficul nostru. Făcând clic pe \"Acceptă tot\", sunteți de acord cu utilizarea cookie-urilor.",
        privacy: "Politica de confidențialitate",
        customize: "Personalizează",
        reject: "Respinge tot",
        accept: "Acceptă tot",
        essential: "Cookie-uri esențiale",
        essentialDesc: "Necesare pentru funcționalitatea site-ului",
        analytics: "Cookie-uri analitice",
        analyticsDesc: "Ajută la înțelegerea interacțiunilor vizitatorilor",
        performance: "Cookie-uri de performanță",
        performanceDesc: "Îmbunătățesc performanța site-ului",
        advertising: "Cookie-uri publicitare",
        advertisingDesc: "Furnizează reclame relevante",
        other: "Alte Cookie-uri",
        otherDesc: "Cookie-uri necategorizate",
        save: "Salvează preferințele",
        language: "Română",
        statsTitle: "Statistici consimțământ",
        statsAccepted: "Acceptat",
        statsRejected: "Respins",
        statsCustom: "Personalizat",
        statsTotal: "Total",
        statsPercentage: "Procent",
        statsLast7Days: "Ultimele 7 Zile",
        statsLast30Days: "Ultimele 30 Zile"
    },
    sk: {
        title: "Rešpektujeme vaše súkromie",
        description: "Používame cookies na zlepšenie vášho zážitku z prehliadania, poskytovanie personalizovaných reklám alebo obsahu a analýzu nášho prevádzky. Kliknutím na \"Prijať všetko\" súhlasíte s používaním súborov cookie.",
        privacy: "Zásady ochrany osobných údajov",
        customize: "Prispôsobiť",
        reject: "Odmietnuť všetko",
        accept: "Prijať všetko",
        essential: "Nevyhnutné Cookies",
        essentialDesc: "Nevyhnutné pre funkčnosť webu",
        analytics: "Analytické Cookies",
        analyticsDesc: "Pomáhajú pochopiť interakcie návštevníkov",
        performance: "Výkonnostné Cookies",
        performanceDesc: "Zlepšujú výkon webu",
        advertising: "Reklamné Cookies",
        advertisingDesc: "Poskytujú relevantné reklamy",
        other: "Ostatné Cookies",
        otherDesc: "Nekategorizované cookies",
        save: "Uložiť nastavenia",
        language: "Slovenčina",
        statsTitle: "Štatistiky súhlasu",
        statsAccepted: "Prijaté",
        statsRejected: "Odmietnuté",
        statsCustom: "Prispôsobené",
        statsTotal: "Celkom",
        statsPercentage: "Percento",
        statsLast7Days: "Posledných 7 Dní",
        statsLast30Days: "Posledných 30 Dní"
    },
    sl: {
        title: "Spoštujemo vašo zasebnost",
        description: "Uporabljamo piškotke za izboljšanje vaše izkušnje brskanja, zagotavljanje prilagojenih oglasov ali vsebin in analizo našega prometa. S klikom na \"Sprejmi vse\" se strinjate z uporabo piškotkov.",
        privacy: "Politika zasebnosti",
        customize: "Prilagodi",
        reject: "Zavrni vse",
        accept: "Sprejmi vse",
        essential: "Bistveni piškotki",
        essentialDesc: "Nujni za delovanje spletnega mesta",
        analytics: "Analitični piškotki",
        analyticsDesc: "Pomagajo razumeti interakcije obiskovalcev",
        performance: "Piškotki za zmogljivost",
        performanceDesc: "Izboljšajo zmogljivost spletnega mesta",
        advertising: "Oglasni piškotki",
        advertisingDesc: "Zagotavljajo ustrezne oglase",
        other: "Drugi piškotki",
        otherDesc: "Nekategorizirani piškotki",
        save: "Shrani nastavitve",
        language: "Slovenščina",
        statsTitle: "Statistika privolitve",
        statsAccepted: "Sprejeto",
        statsRejected: "Zavrnjeno",
        statsCustom: "Prilagojeno",
        statsTotal: "Skupaj",
        statsPercentage: "Odstotek",
        statsLast7Days: "Zadnjih 7 Dni",
        statsLast30Days: "Zadnjih 30 Dni"
    },
    bg: {
        title: "Уважаваме вашата поверителност",
        description: "Използваме бисквитки, за да подобрим вашето сърфиране, да предоставяме персонализирани реклами или съдържание и да анализираме нашия трафик. С натискане на \"Приеми всички\" вие се съгласявате с използването на бисквитки.",
        privacy: "Политика за поверителност",
        customize: "Персонализиране",
        reject: "Отхвърли всички",
        accept: "Приеми всички",
        essential: "Основни бисквитки",
        essentialDesc: "Необходими за функционалността на сайта",
        analytics: "Аналитични бисквитки",
        analyticsDesc: "Помагат за разбиране на взаимодействията",
        performance: "Бисквитки за производителност",
        performanceDesc: "Подобряват производителността на сайта",
        advertising: "Рекламни бисквитки",
        advertisingDesc: "Доставят релевантни реклами",
        other: "Други бисквитки",
        otherDesc: "Некласифицирани бисквитки",
        save: "Запази настройките",
        language: "Български",
        statsTitle: "Статистика за съгласие",
        statsAccepted: "Прието",
        statsRejected: "Отхвърлено",
        statsCustom: "Персонализирано",
        statsTotal: "Общо",
        statsPercentage: "Процент",
        statsLast7Days: "Последните 7 Дни",
        statsLast30Days: "Последните 30 Дни"
    },
    hr: {
        title: "Poštujemo vašu privatnost",
        description: "Koristimo kolačiće za poboljšanje vašeg iskustva pregledavanja, pružanje personaliziranih oglasa ili sadržaja i analizu našeg prometa. Klikom na \"Prihvati sve\" pristajete na korištenje kolačića.",
        privacy: "Politika privatnosti",
        customize: "Prilagodi",
        reject: "Odbaci sve",
        accept: "Prihvati sve",
        essential: "Osnovni kolačići",
        essentialDesc: "Potrebni za funkcionalnost web stranice",
        analytics: "Analitički kolačići",
        analyticsDesc: "Pomažu razumjeti interakcije posjetitelja",
        performance: "Kolačići performansi",
        performanceDesc: "Poboljšavaju performanse web stranice",
        advertising: "Oglasni kolačići",
        advertisingDesc: "Pružaju relevantne oglase",
        other: "Ostali kolačići",
        otherDesc: "Nekategorizirani kolačići",
        save: "Spremi postavke",
        language: "Hrvatski",
        statsTitle: "Statistika pristanka",
        statsAccepted: "Prihvaćeno",
        statsRejected: "Odbijeno",
        statsCustom: "Prilagođeno",
        statsTotal: "Ukupno",
        statsPercentage: "Postotak",
        statsLast7Days: "Zadnjih 7 Dana",
        statsLast30Days: "Zadnjih 30 Dana"
    },
    lt: {
        title: "Mes gerbiame jūsų privatumą",
        description: "Mes naudojame slapukus, kad pagerintume jūsų naršymo patirtį, teiktume suasmenintas reklamas ar turinį ir analizuotume savo srautą. Spustelėję \"Priimti viską\" sutinkate su slapukų naudojimu.",
        privacy: "Privatumo politika",
        customize: "Pritaikyti",
        reject: "Atmesti viską",
        accept: "Priimti viską",
        essential: "Būtini slapukai",
        essentialDesc: "Būtini svetainės funkcionalumui",
        analytics: "Analitiniai slapukai",
        analyticsDesc: "Padeda suprasti lankytojų sąveiką",
        performance: "Veiklos slapukai",
        performanceDesc: "Pagerina svetainės veikimą",
        advertising: "Reklaminiai slapukai",
        advertisingDesc: "Teikia aktualias reklamas",
        other: "Kiti slapukai",
        otherDesc: "Nekategorizuoti slapukai",
        save: "Išsaugoti nuostatas",
        language: "Lietuvių",
        statsTitle: "Sutikimo statistika",
        statsAccepted: "Priimta",
        statsRejected: "Atmesta",
        statsCustom: "Pritaikyta",
        statsTotal: "Iš viso",
        statsPercentage: "Procentas",
        statsLast7Days: "Paskutinės 7 Dienos",
        statsLast30Days: "Paskutinės 30 Dienų"
    },
    lv: {
        title: "Mēs cienām jūsu privātumu",
        description: "Mēs izmantojam sīkfailus, lai uzlabotu jūsu pārlūkošanas pieredzi, nodrošinātu personalizētus reklāmas vai saturu un analizētu mūsu satiksmi. Noklikšķinot uz \"Piekrist visiem\", jūs piekrītat sīkfailu izmantošanai.",
        privacy: "Privātuma politika",
        customize: "Pielāgot",
        reject: "Noraidīt visus",
        accept: "Piekrist visiem",
        essential: "Būtiskie sīkfaili",
        essentialDesc: "Nepieciešami vietnes funkcionalitātei",
        analytics: "Analītiskie sīkfaili",
        analyticsDesc: "Palīdz izprast apmeklētāju mijiedarbību",
        performance: "Veiktspējas sīkfaili",
        performanceDesc: "Uzlabo vietnes veiktspēju",
        advertising: "Reklāmas sīkfaili",
        advertisingDesc: "Nodrošina atbilstošas reklāmas",
        other: "Citi sīkfaili",
        otherDesc: "Nekategorizēti sīkfaili",
        save: "Saglabāt iestatījumus",
        language: "Latviešu",
        statsTitle: "Piekrišanas statistika",
        statsAccepted: "Piekrituši",
        statsRejected: "Noraidīti",
        statsCustom: "Pielāgoti",
        statsTotal: "Kopā",
        statsPercentage: "Procenti",
        statsLast7Days: "Pēdējās 7 Dienas",
        statsLast30Days: "Pēdējās 30 Dienas"
    },
    et: {
        title: "Me austame teie privaatsust",
        description: "Kasutame küpsiseid, et parandada teie veebilehitsemise kogemust, pakkuda personaalseid reklaame või sisu ning analüüsida oma liiklust. Klõpsates nupul \"Nõustu kõigega\", nõustute küpsiste kasutamisega.",
        privacy: "Privaatsuspoliitika",
        customize: "Kohanda",
        reject: "Keeldu kõigest",
        accept: "Nõustu kõigega",
        essential: "Olulised küpsised",
        essentialDesc: "Vajalikud veebisaidi toimimiseks",
        analytics: "Analüütilised küpsised",
        analyticsDesc: "Aitavad mõista külastajate suhtlemist",
        performance: "Töökindluse küpsised",
        performanceDesc: "Parandavad veebisaidi jõudlust",
        advertising: "Reklaamiküpsised",
        advertisingDesc: "Pakuvad asjakohaseid reklaame",
        other: "Muud küpsised",
        otherDesc: "Liigitamata küpsised",
        save: "Salvesta eelistused",
        language: "Eesti",
        statsTitle: "Nõusoleku statistika",
        statsAccepted: "Nõustutud",
        statsRejected: "Keeldutud",
        statsCustom: "Kohandatud",
        statsTotal: "Kokku",
        statsPercentage: "Protsent",
        statsLast7Days: "Viimased 7 Päeva",
        statsLast30Days: "Viimased 30 Päeva"
    },
    mt: {
        title: "Nirrispettaw il-privatezza tiegħek",
        description: "Nużaw cookies biex ittejjeb l-esperjenza tiegħek ta 'navigazzjoni, nipprovdu reklami jew kontent personalizzat u nanalizzaw it-traffiku tagħna. Billi tikklikkja \"Aċċetta Kollox\", qed tagħti l-kunsens għall-użu ta 'cookies.",
        privacy: "Politika tal-Privatezza",
        customize: "Ippersonalizza",
        reject: "Irrifjuta Kollox",
        accept: "Aċċetta Kollox",
        essential: "Cookies Essenzjali",
        essentialDesc: "Meħtieġa għall-funzjonalità tas-sit",
        analytics: "Cookies Analitiċi",
        analyticsDesc: "Jgħin fuq interazzjonijiet tal-viżitatur",
        performance: "Cookies ta 'Prestazzjoni",
        performanceDesc: "Ittejjeb il-prestazzjoni tas-sit",
        advertising: "Cookies tar-Reklamar",
        advertisingDesc: "Ipprovdi reklami rilevanti",
        other: "Cookies Oħra",
        otherDesc: "Cookies mhux kategorizzati",
        save: "Issejvja l-Preferenzi",
        language: "Malti",
        statsTitle: "Statistika tal-Kunsens",
        statsAccepted: "Aċċettat",
        statsRejected: "Rrifjutat",
        statsCustom: "Ippersonalizzat",
        statsTotal: "Total",
        statsPercentage: "Perċentwal",
        statsLast7Days: "Aħħar 7 Ġranet",
        statsLast30Days: "Aħħar 30 Ġranet"
    }
};

// Country to language mapping for auto-translation
const countryLanguageMap = {
    // EU Countries
    'AT': 'de',     // Austria
    'BE': 'nl',     // Belgium (Dutch)
    'BE': 'fr',     // Belgium (French)
    'BG': 'bg',     // Bulgaria
    'HR': 'hr',     // Croatia
    'CY': 'el',     // Cyprus
    'CZ': 'cs',     // Czech Republic
    'DK': 'da',     // Denmark
    'EE': 'et',     // Estonia
    'FI': 'fi',     // Finland
    'FR': 'fr',     // France
    'DE': 'de',     // Germany
    'GR': 'el',     // Greece
    'HU': 'hu',     // Hungary
    'IE': 'en',     // Ireland
    'IT': 'it',     // Italy
    'LV': 'lv',     // Latvia
    'LT': 'lt',     // Lithuania
    'LU': 'fr',     // Luxembourg
    'LU': 'de',     // Luxembourg
    'MT': 'mt',     // Malta
    'NL': 'nl',     // Netherlands
    'PL': 'pl',     // Poland
    'PT': 'pt',     // Portugal
    'RO': 'ro',     // Romania
    'SK': 'sk',     // Slovakia
    'SI': 'sl',     // Slovenia
    'ES': 'es',     // Spain
    'SE': 'sv',     // Sweden
    
    // Other European countries
    'AL': 'en',     // Albania
    'BA': 'en',     // Bosnia and Herzegovina
    'IS': 'en',     // Iceland
    'LI': 'de',     // Liechtenstein
    'MK': 'en',     // North Macedonia
    'NO': 'en',     // Norway
    'RS': 'en',     // Serbia
    'CH': 'de',     // Switzerland
    'CH': 'fr',     // Switzerland
    'CH': 'it',     // Switzerland
    'UA': 'uk',     // Ukraine
    'GB': 'en',     // United Kingdom
    
    // Rest of the world
    'US': 'en',     // United States
    'CA': 'en',     // Canada
    'CA': 'fr',     // Canada (French)
    'AU': 'en',     // Australia
    'NZ': 'en',     // New Zealand
    'ZA': 'en',     // South Africa
    'IN': 'en',     // India
    'CN': 'zh',     // China
    'JP': 'ja',     // Japan
    'KR': 'ko',     // South Korea
    'BR': 'pt',     // Brazil
    'MX': 'es',     // Mexico
    'AR': 'es',     // Argentina
    'RU': 'ru'      // Russia
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
    monthly: {}
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
function updateConsentStats(status) {
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

// Generate analytics dashboard HTML
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
        </div>
    </div>`;
}

// Generate password prompt HTML
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

// Check if current domain is allowed
function isDomainAllowed() {
    if (config.allowedDomains.length === 0) return true;
    
    const currentDomain = window.location.hostname;
    return config.allowedDomains.some(domain => {
        if (domain.startsWith('.')) {
            // Match subdomains (e.g., .example.com matches sub.example.com)
            return currentDomain === domain.substring(1) || currentDomain.endsWith(domain);
        }
        return currentDomain === domain;
    });
}

// Check geo-targeting restrictions
function checkGeoTargeting(geoData) {
    // Check blocked locations first
    if (config.geoConfig.blockedCountries.length > 0 && 
        config.geoConfig.blockedCountries.includes(geoData.country)) {
        return false;
    }
    
    if (config.geoConfig.blockedRegions.length > 0 && 
        config.geoConfig.blockedRegions.includes(geoData.region)) {
        return false;
    }
    
    if (config.geoConfig.blockedCities.length > 0 && 
        config.geoConfig.blockedCities.includes(geoData.city)) {
        return false;
    }
    
    // Check allowed locations (if any restrictions are set)
    if (config.geoConfig.allowedCountries.length > 0 && 
        !config.geoConfig.allowedCountries.includes(geoData.country)) {
        return false;
    }
    
    if (config.geoConfig.allowedRegions.length > 0 && 
        !config.geoConfig.allowedRegions.includes(geoData.region)) {
        return false;
    }
    
    if (config.geoConfig.allowedCities.length > 0 && 
        !config.geoConfig.allowedCities.includes(geoData.city)) {
        return false;
    }
    
    return true;
}

// Detect user language based on country and browser settings
function detectUserLanguage(geoData) {
    // First check if language is stored in cookie
    if (config.behavior.rememberLanguage) {
        const preferredLanguage = getCookie('preferred_language');
        if (preferredLanguage && translations[preferredLanguage]) {
            return preferredLanguage;
        }
    }
    
    // Then try to get language from country if auto-detection is enabled
    if (config.languageConfig.autoDetectLanguage && geoData && geoData.country) {
        const countryLang = countryLanguageMap[geoData.country];
        if (countryLang && translations[countryLang]) {
            return countryLang;
        }
    }
    
    // Fallback to browser language
    const browserLang = (navigator.language || 'en').split('-')[0];
    if (translations[browserLang]) {
        return browserLang;
    }
    
    // Final fallback to configured default language
    return config.languageConfig.defaultLanguage || 'en';
}

// Get available languages for dropdown
function getAvailableLanguages() {
    // If specific languages are configured, use those
    if (config.languageConfig.availableLanguages.length > 0) {
        return config.languageConfig.availableLanguages.filter(lang => translations[lang]);
    }
    
    // Otherwise return all available languages
    return Object.keys(translations);
}

// Change language dynamically
function changeLanguage(languageCode) {
    const lang = translations[languageCode] || translations.en;
    
    // Update banner text
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
        banner.querySelector('h2').textContent = lang.title;
        banner.querySelector('p').textContent = lang.description;
        banner.querySelector('.privacy-policy-link').textContent = lang.privacy;
        banner.querySelector('#acceptAllBtn').textContent = lang.accept;
        banner.querySelector('#adjustConsentBtn').textContent = lang.customize;
        banner.querySelector('#rejectAllBtn').textContent = lang.reject;
    }
    
    // Update modal text
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        modal.querySelector('h2').textContent = lang.title;
        
        // Update category headers and descriptions
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
        
        // Update buttons
        modal.querySelector('#rejectAllSettingsBtn').textContent = lang.reject;
        modal.querySelector('#saveSettingsBtn').textContent = lang.save;
        modal.querySelector('#acceptAllSettingsBtn').textContent = lang.accept;
    }
    
    // Update floating button title
    const floatingButton = document.getElementById('cookieFloatingButton');
    if (floatingButton) {
        floatingButton.title = lang.title;
    }
    
    // Update analytics dashboard if visible
    const dashboard = document.querySelector('.analytics-dashboard');
    if (dashboard) {
        dashboard.innerHTML = generateAnalyticsDashboard(languageCode);
    }
    
    // Update password prompt if visible
    const passwordPrompt = document.querySelector('.password-prompt');
    if (passwordPrompt) {
        passwordPrompt.innerHTML = generatePasswordPrompt(languageCode);
        setupPasswordPromptEvents();
    }
    
    // Store selected language in cookie
    if (config.behavior.rememberLanguage) {
        setCookie('preferred_language', languageCode, 365);
    }
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

// Handle scroll-based acceptance
function handleScrollAcceptance() {
    if (getCookie('cookie_consent')) {
        window.removeEventListener('scroll', handleScrollAcceptance);
        return;
    }
    
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercentage > 50) { // Accept if scrolled more than 50%
        acceptAllCookies();
        hideCookieBanner();
        showFloatingButton();
        window.removeEventListener('scroll', handleScrollAcceptance);
    }
}

// Function to automatically categorize unknown cookies
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

// Function to determine cookie category based on name patterns
function determineCookieCategory(cookieName) {
    const lowerName = cookieName.toLowerCase();
    
    // Analytics patterns
    if (/_ga|_gid|_gat|analytics|stats|measure|track|tk_ai/.test(lowerName)) {
        return 'analytics';
    }
    
    // Advertising patterns
    if (/_gcl|_fbp|fr|ad|ads|tracking|marketing|doubleclick|gclid|_uet/.test(lowerName)) {
        return 'advertising';
    }
    
    // Functional patterns
    if (/sess|token|auth|login|user|pref|settings|cart|checkout|hash|items/.test(lowerName)) {
        return 'functional';
    }
    
    // Performance patterns
    if (/perf|speed|optimize|cdn|cache/.test(lowerName)) {
        return 'performance';
    }
    
    return null;
}

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

// Enhanced getCookieDuration function
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

function trackMarketingParameters() {
    const params = new URLSearchParams(window.location.search);
    const marketingData = {};
    
    // Check for common marketing parameters
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

function injectConsentHTML(detectedCookies, language = 'en') {
    const lang = translations[language] || translations.en;
    const availableLanguages = getAvailableLanguages();
    const currentTheme = config.uiTheme === 'classic' ? classicColorScheme : colorScheme;
    
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
    let logoUrl = config.uiCustomization.logoUrl;
    if (config.uiCustomization.showLogo && !logoUrl) {
        // Try to auto-detect website logo
        const favicon = document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]');
        if (favicon) {
            logoUrl = favicon.href;
        } else {
            // Fallback to generic logo
            logoUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNDY0IDI1NkEyMDggMjA4IDAgMSAwIDQ4IDI1NkEyMDggMjA4IDAgMSAwIDQ2NCAyNTZ6TTAgMjU2QTI1NiAyNTYgMCAxIDEgNTEyIDI1NkEyNTYgMjU2IDAgMSAxIDAgMjU2em0xNjAgODBjMCA0NCAzNS43IDgwIDgwIDgwczgwLTM1LjcgODAtODBzLTM1LjctODAtODAtODBzLTgwIDM1LjctODAgODB6bTgwLTMyaDE2YzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2SDI0MGMtOC44IDAtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNnoiLz48L3N2Zz4=';
        }
    }
    
    const logo = config.uiCustomization.showLogo ? `
    <div class="cookie-consent-logo" style="float: ${config.uiCustomization.logoPosition}; width: ${config.uiCustomization.logoSize}; height: ${config.uiCustomization.logoSize};">
        <img src="${logoUrl}" alt="Website Logo">
    </div>` : '';
    
    const html = `
    <!-- Main Consent Banner -->
    <div id="cookieConsentBanner" class="cookie-consent-banner" style="width: ${config.behavior.bannerWidth}; height: ${config.behavior.bannerHeight};">
        <div class="cookie-consent-container">
            ${languageSelector}
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
    /* Responsive Banner Styles */
    .cookie-consent-banner {
        position: fixed;
        ${config.behavior.bannerPosition === 'center' ? 
          'left: 50%; transform: translateX(-50%); bottom: 20px; width: 90%; max-width: 440px;' : 
          config.behavior.bannerPosition === 'left' ? 
          'left: 20px; bottom: 20px; width: 90%; max-width: 440px;' : 
          'right: 20px; bottom: 20px; width: 90%; max-width: 440px;'}
        background: ${config.behavior.darkMode ? config.uiCustomization.darkModeBackground : config.uiCustomization.bannerBackground};
        color: ${config.behavior.darkMode ? config.uiCustomization.darkModeTextColor : config.uiCustomization.bannerTextColor};
        border-radius: ${config.uiCustomization.bannerBorderRadius};
        box-shadow: ${config.uiCustomization.bannerShadow};
        z-index: 9999;
        padding: 24px;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        display: none;
        transform: translateY(20px);
        opacity: 0;
        transition: ${config.behavior.animations ? `all ${config.uiCustomization.animationDuration} ${config.uiCustomization.animationEasing}` : 'none'};
        border: ${config.behavior.darkMode ? config.uiCustomization.darkModeBorder : config.uiCustomization.bannerBorder};
        overflow: hidden;
        box-sizing: border-box;
    }

    .cookie-consent-banner.show {
        transform: ${config.behavior.bannerPosition === 'center' ? 'translate(-50%, 0)' : 'translateY(0)'};
        opacity: 1;
        display: block;
    }

    /* Mobile-specific styles */
    @media (max-width: 768px) {
        .cookie-consent-banner {
            ${config.behavior.bannerPosition === 'center' ? 
              'left: 5%; right: 5%; transform: translateX(0); width: 90%;' : 
              config.behavior.bannerPosition === 'left' ? 
              'left: 5%; right: auto;' : 
              'right: 5%; left: auto;'}
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
    }

    /* Dark mode styles */
    ${config.behavior.darkMode ? `
    .cookie-settings-modal, .cookie-analytics-modal {
        background-color: rgba(0, 0, 0, 0.8);
    }
    
    .cookie-settings-content, .cookie-analytics-content {
        background-color: #2d2d2d;
        color: #ffffff;
    }
    
    .cookie-settings-header, .cookie-analytics-header {
        background-color: #333;
        border-bottom-color: #444;
    }
    
    .cookie-settings-body, .cookie-analytics-body {
        background-color: #2d2d2d;
    }
    
    .cookie-category {
        border-bottom-color: #444;
    }
    
    .cookie-details-container {
        border-color: #444;
        background-color: #333;
    }
    
    .cookie-details-header {
        background-color: #333;
    }
    
    .cookie-details-content {
        background-color: #252525;
        border-top-color: #444;
    }
    
    .cookie-details-table th {
        background-color: #333;
        color: #ffffff;
    }
    
    .cookie-details-table td {
        color: #ddd;
    }
    
    .stat-card {
        background-color: #333;
    }
    
    .time-stat {
        background-color: #333;
    }
    
    .stat-bar {
        background-color: #444;
    }
    ` : ''}
    </style>
    
    document.body.insertAdjacentHTML('beforeend', html);
}

function initializeCookieConsent(detectedCookies, language) {
    const consentGiven = getCookie('cookie_consent');
    
    if (!consentGiven && config.behavior.autoShow) {
        // Delay showing banner if configured
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
