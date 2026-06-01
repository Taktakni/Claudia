/**
 * ============================================
 * MONTPLAISIR LAVAGE AUTO - Base de Données
 * ============================================
 * Système centralisé de gestion des données
 * utilisant LocalStorage comme stockage persistant.
 * 
 * Ce fichier est partagé entre :
 * - reservation.html (création de RDV par les clients)
 * - admin.html (gestion complète par l'admin)
 * ============================================
 */

'use strict';

const MontplaisirDB = {

    // ================================== //
    // CONFIGURATION                      //
    // ================================== //
    PREFIX: 'montplaisir_',

    // Identifiants admin
    CREDENTIALS: {
        username: 'nouni',
        password: 'montplaisir22'
    },

    // ================================== //
    // MÉTHODES UTILITAIRES               //
    // ================================== //

    /**
     * Récupérer des données depuis LocalStorage
     */
    get(key) {
        const data = localStorage.getItem(this.PREFIX + key);
        return data ? JSON.parse(data) : null;
    },

    /**
     * Enregistrer des données dans LocalStorage
     */
    set(key, value) {
        localStorage.setItem(this.PREFIX + key, JSON.stringify(value));
    },

    /**
     * Supprimer une clé
     */
    remove(key) {
        localStorage.removeItem(this.PREFIX + key);
    },

    /**
     * Générer un ID unique
     */
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
    },

    // ================================== //
    // INITIALISATION                     //
    // ================================== //

    /**
     * Initialiser la base de données avec des données par défaut
     */
    init() {
        // Rendez-vous
        if (!this.get('appointments')) {
            this.set('appointments', [
                {
                    id: 'rdv001',
                    name: 'Ahmed Benali',
                    phone: '0771234567',
                    email: 'ahmed@email.com',
                    carBrand: 'Toyota Corolla',
                    carType: 'Berline',
                    service: 'Lavage Complet',
                    date: '2026-06-02',
                    time: '09:00',
                    message: '',
                    status: 'confirmed',
                    createdAt: '2026-06-01T08:00:00'
                },
                {
                    id: 'rdv002',
                    name: 'Karim Mansouri',
                    phone: '0552345678',
                    email: '',
                    carBrand: 'Peugeot 308',
                    carType: 'Berline',
                    service: 'Lavage Premium',
                    date: '2026-06-02',
                    time: '10:30',
                    message: 'Premier lavage chez vous',
                    status: 'pending',
                    createdAt: '2026-06-01T09:15:00'
                },
                {
                    id: 'rdv003',
                    name: 'Youcef Larbi',
                    phone: '0663456789',
                    email: 'youcef@email.com',
                    carBrand: 'Hyundai Tucson',
                    carType: 'SUV',
                    service: 'Polissage',
                    date: '2026-06-01',
                    time: '14:00',
                    message: '',
                    status: 'completed',
                    createdAt: '2026-05-31T16:00:00'
                },
                {
                    id: 'rdv004',
                    name: 'Mohamed Said',
                    phone: '0774567890',
                    email: '',
                    carBrand: 'Dacia Duster',
                    carType: '4x4',
                    service: 'Lavage Extérieur',
                    date: '2026-06-01',
                    time: '16:00',
                    message: '',
                    status: 'completed',
                    createdAt: '2026-05-31T10:00:00'
                },
                {
                    id: 'rdv005',
                    name: 'Rachid Djelloul',
                    phone: '0555678901',
                    email: 'rachid@email.com',
                    carBrand: 'VW Golf',
                    carType: 'Citadine',
                    service: 'Lavage Intérieur',
                    date: '2026-06-03',
                    time: '08:30',
                    message: 'Nettoyage profond SVP',
                    status: 'pending',
                    createdAt: '2026-06-01T11:30:00'
                }
            ]);
        }

        // Clients
        if (!this.get('clients')) {
            this.set('clients', [
                { id: 'cli001', name: 'Ahmed Benali', phone: '0771234567', email: 'ahmed@email.com', car: 'Toyota Corolla', visits: 5 },
                { id: 'cli002', name: 'Karim Mansouri', phone: '0552345678', email: '', car: 'Peugeot 308', visits: 2 },
                { id: 'cli003', name: 'Youcef Larbi', phone: '0663456789', email: 'youcef@email.com', car: 'Hyundai Tucson', visits: 8 },
                { id: 'cli004', name: 'Mohamed Said', phone: '0774567890', email: '', car: 'Dacia Duster', visits: 3 },
                { id: 'cli005', name: 'Rachid Djelloul', phone: '0555678901', email: 'rachid@email.com', car: 'VW Golf', visits: 1 }
            ]);
        }

        // Services disponibles
        if (!this.get('services')) {
            this.set('services', [
                { id: 'svc001', name: 'Lavage Extérieur', price: 500, duration: 20, category: 'Lavage' },
                { id: 'svc002', name: 'Lavage Intérieur', price: 600, duration: 30, category: 'Nettoyage' },
                { id: 'svc003', name: 'Lavage Complet', price: 1000, duration: 45, category: 'Lavage' },
                { id: 'svc004', name: 'Lavage Premium', price: 1500, duration: 60, category: 'Premium' },
                { id: 'svc005', name: 'Polissage', price: 2000, duration: 90, category: 'Polissage' },
                { id: 'svc006', name: 'Nettoyage Moteur', price: 800, duration: 40, category: 'Nettoyage' }
            ]);
        }
    },

    // ================================== //
    // RENDEZ-VOUS (CRUD)                 //
    // ================================== //

    /**
     * Récupérer tous les rendez-vous
     */
    getAllAppointments() {
        return this.get('appointments') || [];
    },

    /**
     * Récupérer un rendez-vous par ID
     */
    getAppointment(id) {
        const appointments = this.getAllAppointments();
        return appointments.find(a => a.id === id) || null;
    },

    /**
     * Créer un nouveau rendez-vous (utilisé par le client sur reservation.html)
     */
    createAppointment(data) {
        const appointments = this.getAllAppointments();
        const newAppt = {
            id: this.generateId(),
            name: data.name,
            phone: data.phone,
            email: data.email || '',
            carBrand: data.carBrand,
            carType: data.carType,
            service: data.service,
            date: data.date,
            time: data.time,
            message: data.message || '',
            status: 'pending', // Toujours en attente à la création
            createdAt: new Date().toISOString()
        };
        appointments.unshift(newAppt);
        this.set('appointments', appointments);

        // Auto-ajout du client
        this.addOrUpdateClient(newAppt);

        return newAppt;
    },

    /**
     * Mettre à jour le statut d'un rendez-vous (utilisé par l'admin)
     */
    updateAppointmentStatus(id, newStatus) {
        const appointments = this.getAllAppointments();
        const appt = appointments.find(a => a.id === id);
        if (appt) {
            appt.status = newStatus;
            this.set('appointments', appointments);
            return true;
        }
        return false;
    },

    /**
     * Supprimer un rendez-vous
     */
    deleteAppointment(id) {
        let appointments = this.getAllAppointments();
        appointments = appointments.filter(a => a.id !== id);
        this.set('appointments', appointments);
    },

    /**
     * Filtrer les rendez-vous par statut
     */
    getAppointmentsByStatus(status) {
        const appointments = this.getAllAppointments();
        if (status === 'all') return appointments;
        return appointments.filter(a => a.status === status);
    },

    /**
     * Rendez-vous d'aujourd'hui
     */
    getTodayAppointments() {
        const today = new Date().toISOString().split('T')[0];
        return this.getAllAppointments().filter(a => a.date === today);
    },

    // ================================== //
    // CLIENTS (CRUD)                     //
    // ================================== //

    getAllClients() {
        return this.get('clients') || [];
    },

    addOrUpdateClient(appointmentData) {
        const clients = this.getAllClients();
        const existing = clients.find(c => c.phone === appointmentData.phone);
        if (existing) {
            existing.visits += 1;
            existing.name = appointmentData.name;
            if (appointmentData.email) existing.email = appointmentData.email;
        } else {
            clients.push({
                id: this.generateId(),
                name: appointmentData.name,
                phone: appointmentData.phone,
                email: appointmentData.email || '',
                car: appointmentData.carBrand + ' ' + appointmentData.carType,
                visits: 1
            });
        }
        this.set('clients', clients);
    },

    addClient(data) {
        const clients = this.getAllClients();
        clients.push({
            id: this.generateId(),
            name: data.name,
            phone: data.phone,
            email: data.email || '',
            car: data.car || '',
            visits: 0
        });
        this.set('clients', clients);
    },

    deleteClient(id) {
        let clients = this.getAllClients();
        clients = clients.filter(c => c.id !== id);
        this.set('clients', clients);
    },

    // ================================== //
    // SERVICES (CRUD)                    //
    // ================================== //

    getAllServices() {
        return this.get('services') || [];
    },

    addService(data) {
        const services = this.getAllServices();
        services.push({
            id: this.generateId(),
            name: data.name,
            price: parseInt(data.price),
            duration: parseInt(data.duration) || 30,
            category: data.category || 'Lavage'
        });
        this.set('services', services);
    },

    deleteService(id) {
        let services = this.getAllServices();
        services = services.filter(s => s.id !== id);
        this.set('services', services);
    },

    // ================================== //
    // STATISTIQUES                       //
    // ================================== //

    getStats() {
        const appointments = this.getAllAppointments();
        const clients = this.getAllClients();
        const services = this.getAllServices();
        const completed = appointments.filter(a => a.status === 'completed');

        // Revenu
        let revenue = 0;
        completed.forEach(a => {
            const svc = services.find(s => s.name === a.service);
            if (svc) revenue += svc.price;
        });

        // Service populaire
        const serviceCounts = {};
        appointments.forEach(a => {
            serviceCounts[a.service] = (serviceCounts[a.service] || 0) + 1;
        });
        const popular = Object.entries(serviceCounts).sort((a, b) => b[1] - a[1])[0];

        // Moyenne par jour
        const daysSet = new Set(appointments.map(a => a.date));
        const avg = daysSet.size > 0 ? (appointments.length / daysSet.size).toFixed(1) : 0;

        return {
            totalAppointments: appointments.length,
            pending: appointments.filter(a => a.status === 'pending').length,
            confirmed: appointments.filter(a => a.status === 'confirmed').length,
            completed: completed.length,
            cancelled: appointments.filter(a => a.status === 'cancelled').length,
            totalClients: clients.length,
            revenue: revenue,
            avgPerDay: avg,
            popularService: popular ? popular[0] : '-',
            serviceCounts: serviceCounts
        };
    },

    // ================================== //
    // AUTHENTIFICATION                   //
    // ================================== //

    /**
     * Vérifier les identifiants
     */
    authenticate(username, password) {
        return username === this.CREDENTIALS.username && password === this.CREDENTIALS.password;
    },

    /**
     * Vérifier si connecté
     */
    isLoggedIn() {
        return sessionStorage.getItem(this.PREFIX + 'logged') === 'true';
    },

    /**
     * Connecter
     */
    login() {
        sessionStorage.setItem(this.PREFIX + 'logged', 'true');
    },

    /**
     * Déconnecter
     */
    logout() {
        sessionStorage.removeItem(this.PREFIX + 'logged');
    }
};

// Initialiser la base de données au chargement
MontplaisirDB.init();
