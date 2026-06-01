/**
 * ============================================
 * MONTPLAISIR LAVAGE AUTO - Base de Données Clients
 * ============================================
 * Système d'inscription, connexion et gestion
 * des profils clients avec LocalStorage.
 * ============================================
 */

'use strict';

const ClientsDB = {

    PREFIX: 'montplaisir_users_',

    // ================================== //
    // UTILITAIRES                        //
    // ================================== //

    get(key) {
        const data = localStorage.getItem(this.PREFIX + key);
        return data ? JSON.parse(data) : null;
    },

    set(key, value) {
        localStorage.setItem(this.PREFIX + key, JSON.stringify(value));
    },

    generateId() {
        return 'usr_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
    },

    // ================================== //
    // INITIALISATION                     //
    // ================================== //

    init() {
        if (!this.get('users')) {
            this.set('users', []);
        }
    },

    // ================================== //
    // INSCRIPTION                        //
    // ================================== //

    /**
     * Inscrire un nouveau client
     * @returns {object|string} user object ou message d'erreur
     */
    register(data) {
        const users = this.get('users');

        // Vérifier si l'email existe déjà
        if (data.email && users.find(u => u.email === data.email)) {
            return { error: 'Cet email est déjà utilisé.' };
        }

        // Vérifier si le téléphone existe déjà
        if (users.find(u => u.phone === data.phone)) {
            return { error: 'Ce numéro de téléphone est déjà utilisé.' };
        }

        const newUser = {
            id: this.generateId(),
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            email: data.email || '',
            password: data.password,
            car: data.car || '',
            carType: data.carType || '',
            address: data.address || '',
            avatar: data.firstName.charAt(0).toUpperCase() + data.lastName.charAt(0).toUpperCase(),
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString(),
            totalVisits: 0,
            loyaltyPoints: 0
        };

        users.push(newUser);
        this.set('users', users);

        // Connecter automatiquement après inscription
        this.setSession(newUser);

        return { success: true, user: newUser };
    },

    // ================================== //
    // CONNEXION                          //
    // ================================== //

    /**
     * Connecter un client
     */
    login(phone, password) {
        const users = this.get('users');
        const user = users.find(u => u.phone === phone && u.password === password);

        if (!user) {
            return { error: 'Numéro ou mot de passe incorrect.' };
        }

        // Mettre à jour last login
        user.lastLogin = new Date().toISOString();
        this.set('users', users);
        this.setSession(user);

        return { success: true, user: user };
    },

    /**
     * Déconnexion
     */
    logout() {
        sessionStorage.removeItem(this.PREFIX + 'session');
    },

    // ================================== //
    // SESSION                            //
    // ================================== //

    setSession(user) {
        sessionStorage.setItem(this.PREFIX + 'session', JSON.stringify({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            avatar: user.avatar
        }));
    },

    getSession() {
        const session = sessionStorage.getItem(this.PREFIX + 'session');
        return session ? JSON.parse(session) : null;
    },

    isLoggedIn() {
        return this.getSession() !== null;
    },

    // ================================== //
    // PROFIL                             //
    // ================================== //

    /**
     * Récupérer le profil complet du client connecté
     */
    getCurrentUser() {
        const session = this.getSession();
        if (!session) return null;

        const users = this.get('users');
        return users.find(u => u.id === session.id) || null;
    },

    /**
     * Mettre à jour le profil
     */
    updateProfile(data) {
        const session = this.getSession();
        if (!session) return { error: 'Non connecté.' };

        const users = this.get('users');
        const userIndex = users.findIndex(u => u.id === session.id);
        if (userIndex === -1) return { error: 'Utilisateur introuvable.' };

        // Mise à jour
        if (data.firstName) users[userIndex].firstName = data.firstName;
        if (data.lastName) users[userIndex].lastName = data.lastName;
        if (data.email !== undefined) users[userIndex].email = data.email;
        if (data.car !== undefined) users[userIndex].car = data.car;
        if (data.carType !== undefined) users[userIndex].carType = data.carType;
        if (data.address !== undefined) users[userIndex].address = data.address;

        // Mettre à jour l'avatar
        users[userIndex].avatar = users[userIndex].firstName.charAt(0).toUpperCase() + users[userIndex].lastName.charAt(0).toUpperCase();

        this.set('users', users);

        // Mettre à jour la session
        this.setSession(users[userIndex]);

        return { success: true, user: users[userIndex] };
    },

    /**
     * Changer le mot de passe
     */
    changePassword(currentPassword, newPassword) {
        const session = this.getSession();
        if (!session) return { error: 'Non connecté.' };

        const users = this.get('users');
        const user = users.find(u => u.id === session.id);

        if (!user) return { error: 'Utilisateur introuvable.' };
        if (user.password !== currentPassword) return { error: 'Mot de passe actuel incorrect.' };

        user.password = newPassword;
        this.set('users', users);

        return { success: true };
    },

    // ================================== //
    // HISTORIQUE DES RDV DU CLIENT       //
    // ================================== //

    /**
     * Récupérer les RDV du client connecté (depuis la DB principale)
     */
    getMyAppointments() {
        const user = this.getCurrentUser();
        if (!user) return [];

        // Chercher dans la DB principale par téléphone
        if (typeof MontplaisirDB !== 'undefined') {
            const allAppts = MontplaisirDB.getAllAppointments();
            return allAppts.filter(a => a.phone === user.phone);
        }
        return [];
    },

    // ================================== //
    // LOYAUTÉ                            //
    // ================================== //

    /**
     * Ajouter des points de fidélité
     */
    addLoyaltyPoints(points) {
        const session = this.getSession();
        if (!session) return;

        const users = this.get('users');
        const user = users.find(u => u.id === session.id);
        if (user) {
            user.loyaltyPoints += points;
            user.totalVisits += 1;
            this.set('users', users);
        }
    },

    // ================================== //
    // ADMIN: Liste tous les inscrits     //
    // ================================== //

    getAllUsers() {
        return this.get('users') || [];
    },

    deleteUser(id) {
        let users = this.get('users');
        users = users.filter(u => u.id !== id);
        this.set('users', users);
    }
};

// Initialiser
ClientsDB.init();
