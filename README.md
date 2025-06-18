# 🎓 Demo Angular 19 + Spring Boot – Student Payment Management

Cette application Angular permet de gérer les étudiants et leurs paiements dans une interface d'administration moderne. Le frontend est basé sur Angular 19 (Standalone API) et utilise Angular Material pour une interface utilisateur élégante.  
Elle est conçue pour fonctionner avec une API REST en Spring Boot (non incluse dans ce dépôt).

---

## 📸 Aperçu

### 🖼️ Interface admin (étudiants)
![Étudiants - Vue Tableau](./CAPANGLAR2.png)

### 🧱 Structure Angular Material + Standalone
![Code Angular Standalone](./CAPANGLAR1.png)

---

## 🛠️ Technologies utilisées

### Frontend
- Angular 19 (Standalone API)
- TypeScript
- Angular Router
- Angular Material
- RxJS
- Formulaires réactifs

### Backend (prévu, mais non inclus)
- Spring Boot
- API REST

---

## 🗂️ Architecture du projet

src/
├── app/
│ ├── admin/ # Composants de gestion admin
│ ├── dashboard/ # Tableau de bord
│ ├── guards/ # Auth Guards
│ ├── login/ # Page de connexion
│ ├── payments/ # Paiements
│ ├── students/ # Liste des étudiants
│ ├── services/ # Services HTTP / Auth
│ └── ...
├── assets/ # Ressources statiques
├── environments/ # Configuration des environnements
└── main.ts # Entrée de l'application


## ▶️ Installation et exécution locale

### 1. Cloner le projet

git clone  https://github.com/hjatyq/-Student_Payment_Management.git 
cd demo-angular-springBoot

### 2. Installer les dépendances

  npm install
### 3. Lancer l’application Angular
 
   ng serve
