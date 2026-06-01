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
            footer_terms: "Conditions générales",

            // Map section
            map_title: "Notre Localisation",
            map_desc: "Retrouvez-nous facilement à Sidi Bel Abbès – Montplaisir",
            map_hours_title: "Horaires d'ouverture",
            map_hours: "Lundi – Dimanche : 08h00 – 20h00",
            map_phone_title: "Téléphone",
            map_directions: "Obtenir l'itinéraire",

            // Reservation page
            res_page_title: "Prendre Rendez-vous",
            res_page_desc: "Remplissez le formulaire ci-dessous pour réserver votre lavage",
            res_back: "Retour à l'accueil",
            res_name: "Nom complet",
            res_phone: "Téléphone",
            res_email: "Email",
            res_car_brand: "Marque du véhicule",
            res_car_type: "Type du véhicule",
            res_service: "Service demandé",
            res_date: "Date souhaitée",
            res_time: "Heure souhaitée",
            res_message: "Message (optionnel)",
            res_submit: "Confirmer le Rendez-vous",
            res_success_title: "Rendez-vous Enregistré !",
            res_success_desc: "Votre demande a été envoyée avec succès.",
            res_success_status: "Notre équipe confirmera votre rendez-vous prochainement.",
            res_new_rdv: "Nouveau Rendez-vous",
            res_back_home: "Retour à l'accueil",
            res_connect_msg: "Connectez-vous pour pré-remplir vos informations",
            res_login_btn: "Connexion",
            res_register_btn: "S'inscrire",
            res_select: "-- Sélectionner --",
            res_berline: "Berline",
            res_suv: "SUV",
            res_4x4: "4x4",
            res_citadine: "Citadine",
            res_utilitaire: "Utilitaire",
            res_autre: "Autre",

            // Boutique page
            shop_title: "Notre Boutique",
            shop_desc: "Découvrez nos produits et accessoires pour votre véhicule",
            shop_all: "Tous",
            shop_products: "Produits",
            shop_accessories: "Accessoires",
            shop_add_cart: "Ajouter au panier",
            shop_cart_title: "Mon Panier",
            shop_cart_empty: "Votre panier est vide",
            shop_total: "Total :",
            shop_checkout_title: "Informations de livraison",
            shop_checkout_name: "Nom complet",
            shop_checkout_phone: "Téléphone",
            shop_checkout_address: "Adresse de livraison",
            shop_checkout_btn: "Confirmer la commande",
            shop_success: "Commande envoyée avec succès ! Nous vous contacterons bientôt.",
            shop_cart_btn: "Panier",

            // Inscription page
            reg_title: "Créer un Compte",
            reg_desc: "Inscrivez-vous pour gérer vos rendez-vous facilement",
            reg_firstname: "Prénom",
            reg_lastname: "Nom",
            reg_phone: "Téléphone",
            reg_email: "Email",
            reg_password: "Mot de passe",
            reg_confirm_pass: "Confirmer le mot de passe",
            reg_car: "Marque du véhicule",
            reg_car_type: "Type du véhicule",
            reg_address: "Adresse",
            reg_submit: "S'inscrire",
            reg_has_account: "Déjà inscrit ?",
            reg_login_link: "Se connecter",
            reg_back: "Accueil",
            reg_optional: "-- Optionnel --",

            // Connexion page
            login_title: "Connexion",
            login_desc: "Accédez à votre espace personnel",
            login_phone: "Numéro de téléphone",
            login_password: "Mot de passe",
            login_submit: "Se Connecter",
            login_no_account: "Pas encore de compte ?",
            login_register: "S'inscrire gratuitement",
            login_or: "ou",
            login_back: "Accueil",

            // Profile page
            profile_home: "Accueil",
            profile_reserve: "Réserver",
            profile_logout: "Déconnexion",
            profile_rdv: "Rendez-vous",
            profile_points: "Points fidélité",
            profile_visits: "Visites totales",
            profile_tab_rdv: "Mes RDV",
            profile_tab_edit: "Mon Profil",
            profile_tab_pass: "Mot de passe",
            profile_no_rdv: "Aucun rendez-vous pour le moment",
            profile_take_rdv: "Prendre un rendez-vous",
            profile_edit_title: "Modifier mes informations",
            profile_edit_firstname: "Prénom",
            profile_edit_lastname: "Nom",
            profile_edit_email: "Email",
            profile_edit_phone: "Téléphone",
            profile_edit_car: "Véhicule",
            profile_edit_cartype: "Type véhicule",
            profile_edit_address: "Adresse",
            profile_edit_save: "Enregistrer",
            profile_pass_title: "Changer le mot de passe",
            profile_pass_current: "Mot de passe actuel",
            profile_pass_new: "Nouveau mot de passe",
            profile_pass_confirm: "Confirmer le nouveau",
            profile_pass_btn: "Changer",
            profile_member_since: "Membre depuis",
            profile_edit_success: "Profil mis à jour avec succès !",
            profile_pass_success: "Mot de passe modifié avec succès !"
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
            footer_terms: "الشروط العامة",

            // Map section
            map_title: "موقعنا",
            map_desc: "تجدنا بسهولة في سيدي بلعباس – مونبليزير",
            map_hours_title: "ساعات العمل",
            map_hours: "الإثنين – الأحد : 08:00 – 20:00",
            map_phone_title: "الهاتف",
            map_directions: "الحصول على الاتجاهات",

            // Reservation page
            res_page_title: "حجز موعد",
            res_page_desc: "املأ النموذج أدناه لحجز غسيل سيارتك",
            res_back: "العودة للرئيسية",
            res_name: "الاسم الكامل",
            res_phone: "الهاتف",
            res_email: "البريد الإلكتروني",
            res_car_brand: "ماركة السيارة",
            res_car_type: "نوع السيارة",
            res_service: "الخدمة المطلوبة",
            res_date: "التاريخ المرغوب",
            res_time: "الوقت المرغوب",
            res_message: "رسالة (اختياري)",
            res_submit: "تأكيد الموعد",
            res_success_title: "!تم تسجيل الموعد",
            res_success_desc: "تم إرسال طلبك بنجاح.",
            res_success_status: "فريقنا سيؤكد موعدك قريباً.",
            res_new_rdv: "موعد جديد",
            res_back_home: "العودة للرئيسية",
            res_connect_msg: "سجل دخولك لملء معلوماتك تلقائياً",
            res_login_btn: "تسجيل الدخول",
            res_register_btn: "إنشاء حساب",
            res_select: "-- اختر --",
            res_berline: "سيدان",
            res_suv: "SUV",
            res_4x4: "4x4",
            res_citadine: "مدنية",
            res_utilitaire: "نفعية",
            res_autre: "أخرى",

            // Boutique page
            shop_title: "متجرنا",
            shop_desc: "اكتشف منتجاتنا وإكسسوارات سيارتك",
            shop_all: "الكل",
            shop_products: "منتجات",
            shop_accessories: "إكسسوارات",
            shop_add_cart: "أضف إلى السلة",
            shop_cart_title: "سلتي",
            shop_cart_empty: "سلتك فارغة",
            shop_total: ":المجموع",
            shop_checkout_title: "معلومات التوصيل",
            shop_checkout_name: "الاسم الكامل",
            shop_checkout_phone: "الهاتف",
            shop_checkout_address: "عنوان التوصيل",
            shop_checkout_btn: "تأكيد الطلب",
            shop_success: "!تم إرسال الطلب بنجاح! سنتصل بك قريباً",
            shop_cart_btn: "السلة",

            // Inscription page
            reg_title: "إنشاء حساب",
            reg_desc: "سجل لإدارة مواعيدك بسهولة",
            reg_firstname: "الاسم",
            reg_lastname: "اللقب",
            reg_phone: "الهاتف",
            reg_email: "البريد الإلكتروني",
            reg_password: "كلمة المرور",
            reg_confirm_pass: "تأكيد كلمة المرور",
            reg_car: "ماركة السيارة",
            reg_car_type: "نوع السيارة",
            reg_address: "العنوان",
            reg_submit: "تسجيل",
            reg_has_account: "لديك حساب بالفعل؟",
            reg_login_link: "تسجيل الدخول",
            reg_back: "الرئيسية",
            reg_optional: "-- اختياري --",

            // Connexion page
            login_title: "تسجيل الدخول",
            login_desc: "ادخل إلى مساحتك الشخصية",
            login_phone: "رقم الهاتف",
            login_password: "كلمة المرور",
            login_submit: "تسجيل الدخول",
            login_no_account: "ليس لديك حساب؟",
            login_register: "التسجيل مجاناً",
            login_or: "أو",
            login_back: "الرئيسية",

            // Profile page
            profile_home: "الرئيسية",
            profile_reserve: "حجز",
            profile_logout: "تسجيل الخروج",
            profile_rdv: "المواعيد",
            profile_points: "نقاط الولاء",
            profile_visits: "الزيارات الكلية",
            profile_tab_rdv: "مواعيدي",
            profile_tab_edit: "ملفي",
            profile_tab_pass: "كلمة المرور",
            profile_no_rdv: "لا مواعيد حالياً",
            profile_take_rdv: "حجز موعد",
            profile_edit_title: "تعديل معلوماتي",
            profile_edit_firstname: "الاسم",
            profile_edit_lastname: "اللقب",
            profile_edit_email: "البريد الإلكتروني",
            profile_edit_phone: "الهاتف",
            profile_edit_car: "السيارة",
            profile_edit_cartype: "نوع السيارة",
            profile_edit_address: "العنوان",
            profile_edit_save: "حفظ",
            profile_pass_title: "تغيير كلمة المرور",
            profile_pass_current: "كلمة المرور الحالية",
            profile_pass_new: "كلمة المرور الجديدة",
            profile_pass_confirm: "تأكيد الجديدة",
            profile_pass_btn: "تغيير",
            profile_member_since: "عضو منذ",
            profile_edit_success: "!تم تحديث الملف بنجاح",
            profile_pass_success: "!تم تغيير كلمة المرور بنجاح"
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

        // Apply translations to placeholders
        document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
            const key = el.getAttribute('data-lang-placeholder');
            const translation = this.t(key);
            if (translation) el.placeholder = translation;
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
