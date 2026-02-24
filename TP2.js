const etudiants = [
    { id: 1, nom: "Rakoto", filiere: "GL", moyenne: 12 },
    { id: 2, nom: "Rabe", filiere: "IA", moyenne: 9 },
    { id: 3, nom: "Ketaka", filiere: "GL", moyenne: 10 },
    { id: 4, nom: "Bema", filiere: "Reseau", moyenne: 11 },
];
etudiants.forEach((etudiant) => {console.log(etudiant.nom)});

//UTILISATION DE DESTRUCTURATION POUR EXTRAIRE LE NOM ET MOYENNE 

etudiants.forEach(etudiant => {
    const { nom, moyenne } = etudiant;
    console.log(`Nom: ${nom}, Moyenne: ${moyenne}`);
});

console.log("");
console.log("Exercice 2")

//UTILISATION FILTER POUR AFFICHER LES ETUDIANTS AYANT UNE MOYENNE >=10
const etudiantsAdmis = etudiants.filter(e => e.moyenne >= 10);
console.log("Etudiants admis:");
etudiantsAdmis.forEach(etudiant => console.log(etudiant.nom));    
console.log("");

//UTLILISATION DE MAP POUR CREER UN NOUVEAU TABLEAU CONTENANT UNIQUEMENT LES NOMS DES ETUDIANTS
const EtudiantsNom = etudiants.map(e => e.nom);
console.log("Noms des étudiants:");
console.log(EtudiantsNom); 
console.log("");

//AJOUT DE 1 POINT POUR CHAQUE MOYENNE 
const etudiantsAvecBonus = etudiants.map(e => ({ ...e, moyenne: e.moyenne + 1 }));
console.log("Etudiants avec bonus de 1 point:");
etudiantsAvecBonus.forEach(etudiant => console.log(`${etudiant.nom}: ${etudiant.moyenne}`));
console.log("");
console.log("Exercice 3")

//CREATION D'UNE FONCTION FLECHEE afficherEtudian(etudiant)
const afficherEtudiant = (etudiant) => {
    const { nom, filiere, moyenne } = etudiant;
    console.log(`L'etudiant ${nom} de la filière ${filiere} a une moyenne de ${moyenne}`);
};
etudiants.forEach(afficherEtudiant);   
console.log("");

afficherEtudiant(etudiants[0]); 

console.log("");
console.log("Exercice 4")

function chargerEtudiants() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(etudiants);
        }, 2000);
    });
}
//CREATION DU FONCTION ASYNC 
async function gererChargementEtudiants() {
    try {
        console.log("Patientez... Chargement des étudiants en cours...");
        const etudiantsCharges = await chargerEtudiants();
        console.log("Étudiants chargés avec succès:");
        etudiantsCharges.forEach(etudiant => console.log(etudiant.nom));
    } catch (erreur) {
        console.error("Erreur lors du chargement des étudiants:", erreur);
    }
}
//CALCUL DE LA MOYENNE GLOBALE DES ETUDIANTS    
(async () => {
    await gererChargementEtudiants();
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    console.log("");
    console.log("Exercice 5")  
    
    const moyenneGlobale = etudiants.reduce((compt, etudiant) => {
        return compt + etudiant.moyenne;
    }, 0) / etudiants.length ;
    
    console.log(`La moyenne globale des étudiants est: ${moyenneGlobale.toFixed(1)}`);
})();     