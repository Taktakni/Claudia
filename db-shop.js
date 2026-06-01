/**
 * ============================================
 * MONTPLAISIR LAVAGE AUTO - Base de Données Boutique
 * ============================================
 * Système de gestion des produits, commandes et tarifs
 * utilisant LocalStorage comme stockage persistant.
 * ============================================
 */

'use strict';

const ShopDB = {

    PREFIX: 'montplaisir_shop_',

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
        return 'shop_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
    },

    // ================================== //
    // INITIALISATION                     //
    // ================================== //

    init() {
        // Initialize with sample products
        if (!this.get('products')) {
            this.set('products', [
                { id: 'prod001', name: 'Shampooing Auto Premium', price: 800, image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80', category: 'Produits', description: 'Shampooing concentré pour carrosserie', stock: 50, active: true },
                { id: 'prod002', name: 'Cire de Protection', price: 1500, image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&q=80', category: 'Produits', description: 'Cire protectrice longue durée', stock: 30, active: true },
                { id: 'prod003', name: 'Parfum Voiture Vanille', price: 500, image: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=400&q=80', category: 'Accessoires', description: 'Parfum intérieur longue durée', stock: 100, active: true },
                { id: 'prod004', name: 'Microfibre Premium (x3)', price: 600, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80', category: 'Accessoires', description: 'Lot de 3 microfibres ultra-douces', stock: 80, active: true },
                { id: 'prod005', name: 'Nettoyant Jantes', price: 700, image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&q=80', category: 'Produits', description: 'Nettoyant puissant pour jantes alu', stock: 45, active: true },
                { id: 'prod006', name: 'Aspirateur Portable 12V', price: 4500, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80', category: 'Accessoires', description: 'Aspirateur compact pour voiture', stock: 15, active: true },
                { id: 'prod007', name: 'Polish Carrosserie', price: 1200, image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&q=80', category: 'Produits', description: 'Polish rénovateur de peinture', stock: 25, active: true },
                { id: 'prod008', name: 'Tapis Caoutchouc Universel', price: 2500, image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&q=80', category: 'Accessoires', description: 'Set 4 tapis universels lavables', stock: 20, active: true }
            ]);
        }

        // Initialize orders
        if (!this.get('orders')) {
            this.set('orders', []);
        }

        // Initialize tarifs/pricing
        if (!this.get('tarifs')) {
            this.set('tarifs', [
                { id: 'tar001', name: 'Lavage Extérieur', description: 'Carrosserie + vitres + jantes', price: 500, category: 'Lavage' },
                { id: 'tar002', name: 'Lavage Intérieur', description: 'Aspiration + tapis + tableaux de bord', price: 600, category: 'Lavage' },
                { id: 'tar003', name: 'Lavage Complet', description: 'Extérieur + Intérieur complet', price: 1000, category: 'Lavage' },
                { id: 'tar004', name: 'Lavage Premium', description: 'Complet + cire + parfum + polish', price: 1500, category: 'Premium' },
                { id: 'tar005', name: 'Polissage', description: 'Rénovation peinture + brillance', price: 2000, category: 'Premium' },
                { id: 'tar006', name: 'Nettoyage Moteur', description: 'Dégraissage + rinçage moteur', price: 800, category: 'Lavage' },
                { id: 'tar007', name: 'Pack VIP Mensuel', description: '4 lavages complets + cadeaux', price: 3500, category: 'Abonnement' },
                { id: 'tar008', name: 'Pack VIP Trimestriel', description: '12 lavages + priorité + réductions', price: 9000, category: 'Abonnement' }
            ]);
        }
    },

    // ================================== //
    // PRODUCTS CRUD                      //
    // ================================== //

    getAllProducts() {
        return this.get('products') || [];
    },

    getActiveProducts() {
        return this.getAllProducts().filter(p => p.active);
    },

    getProductsByCategory(cat) {
        return this.getActiveProducts().filter(p => p.category === cat);
    },

    getProduct(id) {
        return this.getAllProducts().find(p => p.id === id) || null;
    },

    addProduct(data) {
        const products = this.getAllProducts();
        products.push({
            id: this.generateId(),
            name: data.name,
            price: parseInt(data.price),
            image: data.image || '',
            category: data.category || 'Produits',
            description: data.description || '',
            stock: parseInt(data.stock) || 0,
            active: true
        });
        this.set('products', products);
    },

    updateProduct(id, data) {
        const products = this.getAllProducts();
        const product = products.find(p => p.id === id);
        if (product) {
            if (data.name !== undefined) product.name = data.name;
            if (data.price !== undefined) product.price = parseInt(data.price);
            if (data.image !== undefined) product.image = data.image;
            if (data.category !== undefined) product.category = data.category;
            if (data.description !== undefined) product.description = data.description;
            if (data.stock !== undefined) product.stock = parseInt(data.stock);
            if (data.active !== undefined) product.active = data.active;
            this.set('products', products);
        }
    },

    deleteProduct(id) {
        let products = this.getAllProducts();
        products = products.filter(p => p.id !== id);
        this.set('products', products);
    },

    toggleProduct(id) {
        const products = this.getAllProducts();
        const product = products.find(p => p.id === id);
        if (product) {
            product.active = !product.active;
            this.set('products', products);
        }
    },

    // ================================== //
    // ORDERS CRUD                        //
    // ================================== //

    getAllOrders() {
        return this.get('orders') || [];
    },

    getOrder(id) {
        return this.getAllOrders().find(o => o.id === id) || null;
    },

    createOrder(data) {
        const orders = this.getAllOrders();
        orders.unshift({
            id: this.generateId(),
            items: data.items || [],
            clientName: data.clientName || '',
            clientPhone: data.clientPhone || '',
            clientAddress: data.clientAddress || '',
            total: data.total || 0,
            status: 'pending',
            createdAt: new Date().toISOString()
        });
        this.set('orders', orders);
    },

    updateOrderStatus(id, status) {
        const orders = this.getAllOrders();
        const order = orders.find(o => o.id === id);
        if (order) {
            order.status = status;
            this.set('orders', orders);
        }
    },

    deleteOrder(id) {
        let orders = this.getAllOrders();
        orders = orders.filter(o => o.id !== id);
        this.set('orders', orders);
    },

    // ================================== //
    // TARIFS CRUD                        //
    // ================================== //

    getAllTarifs() {
        return this.get('tarifs') || [];
    },

    getTarif(id) {
        return this.getAllTarifs().find(t => t.id === id) || null;
    },

    addTarif(data) {
        const tarifs = this.getAllTarifs();
        tarifs.push({
            id: this.generateId(),
            name: data.name,
            description: data.description || '',
            price: parseInt(data.price),
            category: data.category || 'Lavage'
        });
        this.set('tarifs', tarifs);
    },

    updateTarif(id, data) {
        const tarifs = this.getAllTarifs();
        const tarif = tarifs.find(t => t.id === id);
        if (tarif) {
            if (data.name !== undefined) tarif.name = data.name;
            if (data.description !== undefined) tarif.description = data.description;
            if (data.price !== undefined) tarif.price = parseInt(data.price);
            if (data.category !== undefined) tarif.category = data.category;
            this.set('tarifs', tarifs);
        }
    },

    deleteTarif(id) {
        let tarifs = this.getAllTarifs();
        tarifs = tarifs.filter(t => t.id !== id);
        this.set('tarifs', tarifs);
    }
};

// Initialiser la base de données boutique au chargement
ShopDB.init();
