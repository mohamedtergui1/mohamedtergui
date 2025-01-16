import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
const projects = [
  {
    title: "Citronix - Lemon Farm Management Application",
    description:
      "Développer une application de gestion pour une ferme de citrons, permettant aux fermiers de suivre la production, la récolte, et la vente de leurs produits, tout en optimisant le suivi de la productivité des arbres en fonction de leur âge.",
    features: [
      "Gestion des Fermes: Créer, modifier et consulter les informations d'une ferme.",
      "Gestion des Champs: Associer des champs à une ferme avec une superficie définie.",
      "Gestion des Arbres: Suivre les arbres avec leur date de plantation et âge.",
      "Gestion des Récoltes: Suivre les récoltes par saison.",
      "Gestion des Ventes: Enregistrer les ventes avec la date et le prix unitaire.",
    ],
    technologies: ["Spring Boot", "JPA/Hibernate", "Lombok", "MapStruct", "JUnit"],
    livePreviewUrl: "https://citronix.example.com/",
    githubUrl: "https://github.com/mohamedtergui1/citronix",
    imageSrc: "/citronix.jpg",
  },
  {
    title: "eBankify - Bank Account & Transaction Management",
    description:
      "Welcome to eBankify, a comprehensive platform for managing bank accounts, transactions, and loans. Designed for both personal and business use, eBankify helps users keep track of their finances, make seamless transactions, and manage loans. With real-time updates, secure account management, and detailed transaction records, eBankify is the ideal solution for your banking needs.",
    features: [
      "Account Management: Allows users to manage multiple bank accounts and view transaction history.",
      "Transaction Tracking: Enables users to make deposits, withdrawals, and transfer funds with ease.",
      "Loan Management: Provides tools to apply for, track, and manage loans efficiently.",
      "Real-time Updates: Offers instant updates on transaction statuses and loan repayments.",
      "Financial Reporting: Detailed reports on account activity and loan balances.",
    ],
    technologies: [
      "Spring Boot",
      "Spring Data",
      "Hibernate",
      "PostgreSQL",
      "Spring Security",
      "Docker",
      "JWT"
    ],
    livePreviewUrl: "https://ebankify.example.com/",
    githubUrl: "https://github.com/mohamedtergui1/eBankify_add_spring_Security",
    imageSrc: "/ebankify.jpg",
  },
  {
    title: "Monolithic Task Management Application",
    description:
      "Développer une application monolithique de gestion des tâches, permettant aux utilisateurs de créer, modifier et suivre leurs tâches tout en respectant des règles spécifiques de gestion des tâches et des jetons.",
    features: [
      "Empêcher la création de tâches dans le passé.",
      "Obliger les utilisateurs à entrer plusieurs tags pour les tâches.",
      "Restreindre la planification des tâches à 3 jours à l'avance.",
      "Exiger que marquer une tâche comme terminée soit fait avant la date limite.",
      "Gestion des jetons pour remplacer et supprimer des tâches.",
      "Vue d'ensemble des tâches assignées pour les responsables.",
    ],
    technologies: ["Jakarta EE", "PostgreSQL", "JUnit"],
    livePreviewUrl: "https://monolithic-task-manager.example.com/",
    githubUrl: "https://github.com/mohamedtergui1/devsync",
    imageSrc: "/taskflow.jpg",
  },
  {
    "title": "MySchool - Gestion d'École",
    "description": "Créer une application complète pour gérer les cours, les notes, et les absences des étudiants, avec un tableau de bord intuitif pour les enseignants et les administrateurs.",
    "features": [
      "Gestion des Étudiants: Ajouter, modifier et supprimer les étudiants.",
      "Gestion des Cours: Création et planification des cours.",
      "Gestion des Absences: Suivi des absences des étudiants.",
      "Gestion des Notes: Enregistrement et consultation des notes.",
      "Tableau de Bord: Visualisation des statistiques de l'école.",
      "Authentification: Système de login sécurisé pour administrateurs et enseignants.",
      "Recherche Dynamique: Rechercher des étudiants, cours ou absences."
    ],
    "technologies": ["Laravel", "Tailwind CSS", "Vue.js"],
    "livePreviewUrl": "https://myschool.example.com/",
    "githubUrl": "https://github.com/mohamedtergui1/myschool",
    "imageSrc": "/myschool.jpg"
  }
  ,
  {
    title: "E-commerce Application with Laravel Voyager",
    description:
      "Développer une application web e-commerce en utilisant Laravel Voyager, intégrant des fonctionnalités avancées de gestion des produits, des commandes, et offrant une expérience utilisateur optimale.",
    features: [
      "Gestion des Produits: Implémenter un système complet pour la gestion des produits.",
      "Gestion des Commandes: Mettre en place un processus de gestion des commandes fluide.",
      "Panier d'Achat: Développer un panier d'achat permettant aux utilisateurs de gérer facilement leurs sélections.",
      "Paiement Sécurisé: Intégrer des méthodes de paiement sécurisées.",
      "Tableau de Bord Administrateur: Créer un tableau de bord administrateur avec Laravel Voyager.",
    ],
    technologies: ["Laravel Voyager", "HTML", "CSS", "JavaScript"],
    livePreviewUrl: "https://ecommerce.example.com/",
    githubUrl: "https://github.com/mohamedtergui1/Chrih_daba",
    imageSrc: "/chrihdaba.webp",
  },
  {
    title: "Wiki Content Management System",
    description:
      "Développer un système de gestionnaire de contenu efficace, associé à un front office, permettant aux administrateurs de gérer facilement les catégories, les tags et les wikis, tout en offrant aux auteurs la possibilité de créer, modifier et supprimer leur propre contenu.",
    features: [
      "Gestion des Catégories: Créer, modifier et supprimer des catégories.",
      "Gestion des Tags: Créer, modifier et supprimer des tags.",
      "Inscription des auteurs: S'inscrire en fournissant des informations de base.",
      "Gestion des Wikis: Créer, modifier et supprimer des wikis.",
      "Page d'accueil du Tableau de bord: Consultation des statistiques.",
      "Login et Register: Créer un compte et se connecter.",
      "Barre de recherche: Rechercher des wikis, catégories, tags.",
      "Affichage des derniers wikis: Accès rapide au contenu récent.",
      "Affichage des Dernières catégories: Découverte rapide des thèmes.",
      "Redirection vers la page unique des wikis: Détails complets sur chaque wiki.",
    ],
    technologies: ["HTML5", "Tailwind CSS", "JavaScript", "PHP 8", "MySQL"],
    livePreviewUrl: "https://wiki.example.com/",
    githubUrl: "https://github.com/mohamedtergui1/wiki-cms",
    imageSrc: "/wiki.png",
  },
];

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function Projects() {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div className="md:ml-40 px-4 md:px-0 mt-12 lg:mt-20">
      <h3 className="mb-8 text-xl md:text-4xl text-white font-semibold">
        Projects
      </h3>
      {projects.map((project, index) => (
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          viewport={{ amount: 0.5 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 * index }}
          key={index}
        >
          <div className="card flex flex-col lg:flex-row lg:gap-12 justify-between items-start lg:items-center px-8 mb-12">
            <div className="max-w-prose gray font-medium text-lg flex flex-col gap-4 w-full lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-white text-2xl mt-4">{project.title}</h1>
              <p className="gray text-sm md:text-md leading-relaxed">
                {project.description}
              </p>
              <p>Features:</p>
              <ul className="text-sm md:text-md space-y-1">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-[#607b96] mr-2">*</span>
                    <p className="md:text-md text-sm">{feature}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-[#1e2d3d] text-[#607b96] rounded-full text-sm font-medium hover:bg-[#263b50] transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center items-center md:items-start md:justify-start flex-col sm:flex-row gap-4 md:mb-4">
                <Link href={project.githubUrl} target="_blank">
                  <button className="hidden md:block border border-white text-white px-4 py-2 rounded-full font-bold cursor-pointer transition-opacity duration-300 w-full sm:w-[226px] h-[78px] text-lg hover:opacity-80">
                    View on GitHub
                  </button>
                </Link>
              </div>
            </div>
            <motion.div
              initial={false}
              animate={
                imageLoaded
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full lg:w-1/2 lg:pb-0 pb-4 lg:mt-0"
            >
               <Image
                onLoad={() => setImageLoaded(true)}
                src={project.imageSrc}
                alt={`${project.title} project`}
                layout="responsive"
                width={100}
                height={75}
                className="rounded-xl"
              />

            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}