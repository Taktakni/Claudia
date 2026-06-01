/**
 * MONTPLAISIR LAVAGE AUTO - Système de traduction FR/AR
 */
'use strict';

const Lang = {
    current: localStorage.getItem('montplaisir_lang') || 'fr',

    translations: {
        fr: {
            // Navigation
            nav_home: 'Accueil',
            nav_services: 'Services',
            nav_vip: 'Offre VIP',
            nav_reservation: 'Réservation',
            nav_gallery: 'Galerie',
            nav_reviews: 'Avis',
            nav_contact: 'Contact',
            nav_boutique: 'Boutique',
            nav_login: 'Connexion',
            nav_profile: 'Mon Profil',
            
            // Hero
            hero_badge: "N°1 du lavage auto à Sidi Bel Abbès",
            hero_title: "LE LAVAGE AUTOMOBILE",
            hero_subtitle: "NOUVELLE GÉNÉRATION",
            hero_offer_text: "Profitez de notre offre exclusive :",
            hero_offer_highlight: "2 LAVAGES ACHETÉS = 1 LAVAGE GRATUIT",
            hero_stars_text: "Plus de 500 clients satisfaits",
            hero_btn_reserve: "Réserver Maintenant",
            hero_btn_contact: "Nous Contacter",
            
            // VIP
            vip_title: "🎁 OFFRE VIP MONTPLAISIR",
            vip_offer: "2 Lavages achetés = 3ème lavage GRATUIT",
            vip_bonus1: "Parfum intérieur offert",
            vip_bonus2: "Nettoyage tapis",
            vip_bonus3: "Aspiration complète",
            vip_bonus4: "Nettoyage des jantes",
            vip_days: "Jours",
            vip_hours: "Heures",
            vip_minutes: "Minutes",
            vip_seconds: "Secondes",
            
            // Services
            services_title: "Nos Services Premium",
            services_desc: "Découvrez nos prestations adaptées à tous vos besoins automobiles",
            service1_title: "📅 Réservation Express",
            service1_desc: "Choisissez votre date et heure puis réservez directement en ligne. Simple, rapide et efficace.",
            service1_btn: "Réserver",
            service2_title: "👥 Parrainage",
            service2_desc: "Invitez vos amis et profitez d'avantages exclusifs.",
            service2_you: "Vous gagnez 10%",
            service2_friend: "Votre ami gagne 10%",
            service2_btn: "Participer",
            service3_title: "💎 Abonnement Premium",
            service3_desc: "Plans : Mensuel • Trimestriel • Annuel",
            service3_prio: "Priorité",
            service3_reduc: "Réductions",
            service3_gifts: "Cadeaux",
            service3_promo: "Promotions exclusives",
            service3_btn: "Découvrir",
            
            // Reservation section
            reservation_title: "📅 Prenez Rendez-vous",
            reservation_desc: "Réservez votre lavage en quelques clics",
            reservation_btn: "Réserver Maintenant",
            
            // Advantages
            adv_title: "Pourquoi Nous Choisir ?",
            adv_desc: "Des prestations de qualité pour votre véhicule",
            adv1: "Qualité Premium",
            adv2: "Produits Professionnels",
            adv3: "Service Rapide",
            adv4: "Satisfaction Garantie",
            adv5: "Intérieur & Extérieur",
            
            // Stats
            stat_clients: "Clients satisfaits",
            stat_lavages: "Lavages réalisés",
            stat_note: "⭐ Note moyenne",
            stat_satisfaction: "% Satisfaction",
            
            // Gallery
            gallery_title: "Notre Galerie",
            gallery_desc: "Avant / Après — Découvrez la qualité de nos prestations",
            
            // Reviews
            reviews_title: "Ce que disent nos clients",
            reviews_desc: "La satisfaction de nos clients est notre priorité",
            
            // CTA
            cta_title: "Réservez votre lavage maintenant",
            cta_desc: "Profitez de notre offre VIP et retrouvez un véhicule comme neuf.",
            cta_btn: "Prendre Rendez-vous",
            
            // Footer
            footer_desc: "Le lavage automobile nouvelle génération à Sidi Bel Abbès. Qualité, rapidité et satisfaction garantie.",
            footer_contact: "Contact",
            footer_address: "Sidi Bel Abbès – Montplaisir",
            footer_phone: "07 71 12 94 69",
            footer_hours: "Lundi – Dimanche : 08h00 – 20h00",
            footer_links: "Liens Rapides",
            footer_register: "S'inscrire",
            footer_account: "Mon Compte",
            footer_copyright: "© 2026 MONTPLAISIR LAVAGE AUTO. Tous droits réservés.",
            footer_legal: "Mentions légales",
            footer_terms: "Conditions générales"
        },
        ar: {
            // Navigation
            nav_home: 'الرئيسية',
            nav_services: 'الخدمات',
            nav_vip: 'عرض VIP',
            nav_reservation: 'حجز',
            nav_gallery: 'المعرض',
            nav_reviews: 'آراء',
            nav_contact: 'اتصل بنا',
            nav_boutique: 'المتجر',
            nav_login: 'تسجيل الدخول',
            nav_profile: 'حسابي',
            
            // Hero
            hero_badge: "رقم 1 في غسيل السيارات بسيدي بلعباس",
            hero_title: "غسيل السيارات",
            hero_subtitle: "الجيل الجديد",
            hero_offer_text: "استفد من عرضنا الحصري:",
            hero_offer_highlight: "2 غسلات = 1 غسلة مجانية",
            hero_stars_text: "أكثر من 500 عميل راضٍ",
            hero_btn_reserve: "احجز الآن",
            hero_btn_contact: "اتصل بنا",
            
            // VIP
            vip_title: "🎁 عرض VIP مونبليزير",
            vip_offer: "2 غسلات = الثالثة مجاناً",
            vip_bonus1: "عطر داخلي مجاني",
            vip_bonus2: "تنظيف السجاد",
            vip_bonus3: "شفط كامل",
            vip_bonus4: "تنظيف الجنوط",
            vip_days: "أيام",
            vip_hours: "ساعات",
            vip_minutes: "دقائق",
            vip_seconds: "ثواني",
            
            // Services
            services_title: "خدماتنا المتميزة",
            services_desc: "اكتشف خدماتنا المتكيفة مع جميع احتياجاتك",
            service1_title: "📅 حجز سريع",
            service1_desc: "اختر التاريخ والوقت واحجز مباشرة عبر الإنترنت. بسيط وسريع وفعال.",
            service1_btn: "احجز",
            service2_title: "👥 إحالة",
            service2_desc: "ادعُ أصدقاءك واستفد من مزايا حصرية.",
            service2_you: "تربح 10%",
            service2_friend: "صديقك يربح 10%",
            service2_btn: "شارك",
            service3_title: "💎 اشتراك مميز",
            service3_desc: "الخطط: شهري • ربع سنوي • سنوي",
            service3_prio: "أولوية",
            service3_reduc: "تخفيضات",
            service3_gifts: "هدايا",
            service3_promo: "عروض حصرية",
            service3_btn: "اكتشف",
            
            // Reservation section
            reservation_title: "📅 احجز موعدك",
            reservation_desc: "احجز غسيل سيارتك بنقرات قليلة",
            reservation_btn: "احجز الآن",
            
            // Advantages
            adv_title: "لماذا تختارنا؟",
            adv_desc: "خدمات عالية الجودة لسيارتك",
            adv1: "جودة عالية",
            adv2: "منتجات احترافية",
            adv3: "خدمة سريعة",
            adv4: "رضا مضمون",
            adv5: "داخلي وخارجي",
            
            // Stats
            stat_clients: "عملاء راضون",
            stat_lavages: "غسلات منجزة",
            stat_note: "⭐ التقييم المتوسط",
            stat_satisfaction: "% رضا",
            
            // Gallery
            gallery_title: "معرض الصور",
            gallery_desc: "قبل / بعد — اكتشف جودة خدماتنا",
            
            // Reviews
            reviews_title: "ماذا يقول عملاؤنا",
            reviews_desc: "رضا عملائنا هو أولويتنا",
            
            // CTA
            cta_title: "احجز غسيل سيارتك الآن",
            cta_desc: "استفد من عرض VIP واستعد سيارة كالجديدة.",
            cta_btn: "احجز موعدك",
            
            // Footer
            footer_desc: "غسيل السيارات من الجيل الجديد في سيدي بلعباس. جودة وسرعة ورضا مضمون.",
            footer_contact: "اتصل بنا",
            footer_address: "سيدي بلعباس – مونبليزير",
            footer_phone: "07 71 12 94 69",
            footer_hours: "الإثنين – الأحد : 08:00 – 20:00",
            footer_links: "روابط سريعة",
            footer_register: "التسجيل",
            footer_account: "حسابي",
            footer_copyright: "© 2026 مونبليزير غسيل السيارات. جميع الحقوق محفوظة.",
            footer_legal: "الإشعارات القانونية",
            footer_terms: "الشروط العامة"
        }
    },

    t(key) {
        return this.translations[this.current][key] || key;
    },

    setLang(lang) {
        this.current = lang;
        localStorage.setItem('montplaisir_lang', lang);
        this.applyToPage();
    },

    toggle() {
        this.setLang(this.current === 'fr' ? 'ar' : 'fr');
    },

    applyToPage() {
        // Set direction
        document.documentElement.dir = this.current === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = this.current;
        
        // Apply translations to all elements with data-lang attribute
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            const translation = this.t(key);
            if (translation) {
                if (el.tagName === 'INPUT' && el.type !== 'submit') {
                    el.placeholder = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });

        // Update lang button
        const langBtn = document.getElementById('langToggleBtn');
        if (langBtn) {
            langBtn.innerHTML = this.current === 'fr' 
                ? '<i class="fas fa-language"></i> عربي' 
                : '<i class="fas fa-language"></i> Français';
        }
    },

    init() {
        this.applyToPage();
    }
};
