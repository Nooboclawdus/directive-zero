---
title: "Chapitre 9 : Infiltration et Furtivité"
order: 9
description: "Progrès, Détection, approches et incidents"
---

## CHAPITRE 9 : INFILTRATION ET FURTIVITÉ

---

### EN BREF (chapitre)

L'infiltration est au cœur de Directive Zéro. Tu entres là où tu n'es pas censé être, tu fais ce que tu n'es pas censé faire, et tu repars sans laisser de traces. Ce chapitre te donne une **procédure complète** pour gérer les scènes d'infiltration : deux jauges simples (**Progrès** et **Détection**), des actions claires, et des conséquences graduées. Que tu passes par les ombres, par le charme, ou par la technique, les règles sont les mêmes.

---

## 9.1 Les deux jauges

### EN BREF

Une scène d'infiltration utilise deux jauges :

- **Progrès** : ton avancée vers l'objectif (0 → seuil).
- **Détection** : à quel point l'adversaire te repère (0-3).

Tu veux maximiser le Progrès et minimiser la Détection.

---

### PROGRÈS

Le **Progrès** représente ton avancée vers l'objectif de la scène. Chaque action réussie te rapproche du but.

```
Progrès = 0 ──────────────────────────────────► Seuil = Objectif atteint
```

Le MJ fixe le **seuil de Progrès** selon la complexité de l'objectif :

|Seuil|Type de scène|Exemples|
|---|---|---|
|**2**|Rapide|Franchir une porte, voler un objet visible, passer un checkpoint|
|**3**|Standard|Atteindre une pièce sécurisée, exfiltrer un contact, poser un dispositif|
|**4**|Complexe|Infiltrer un QG, accéder à des archives protégées, saboter un système|
|**5+**|Majeure|Opération en plusieurs phases, cible ultra-sécurisée|

> **EXEMPLE**
> 
> L'équipe doit atteindre le bureau du gouverneur pour copier des documents.
> 
> Le MJ décide : c'est une infiltration **standard**. Seuil = **3 Progrès**.
> 
> Ils devront réussir au moins 3 actions pour atteindre l'objectif.

---

### DÉTECTION

La **Détection** représente le niveau de vigilance des adversaires. Plus elle monte, plus la situation devient dangereuse.

|Détection|État|Ce qui se passe|
|---|---|---|
|**0**|Routine|Rien d'anormal. Les gardes font leur ronde habituelle.|
|**1**|Suspicion|Quelque chose cloche. Regards appuyés, contrôles légers.|
|**2**|Recherche active|Alerte interne. Patrouilles, vérifications, tension.|
|**3**|Alarme|Détection confirmée. Lockdown, renforts, réponse armée.|

> **IMPORTANT**
> 
> La Détection est **locale** à la scène d'infiltration. Elle peut monter et descendre pendant l'opération. Si elle atteint 3, la scène bascule : combat, poursuite, ou fuite.

---

### INTERACTION ENTRE LES JAUGES

Les deux jauges évoluent en parallèle :

- **Réussite** : +1 Progrès (tu avances).
- **Échec** : +1 Détection (on te repère).
- **Critique de réussite** : +2 Progrès OU -1 Détection (au choix).
- **Critique d'échec** : +2 Détection et complication.

L'objectif est d'atteindre le seuil de Progrès **avant** que la Détection n'atteigne 3.

> **EXEMPLE**
> 
> Situation : Progrès 2/3, Détection 2.
> 
> Senna fait un jet pour crocheter la dernière porte. Elle réussit.
> 
> → Progrès passe à **3/3**. Objectif atteint !
> 
> Mais Détection est à 2. Le MJ note qu'il y aura probablement des traces forensiques après coup (+1 Preuves).

---

## 9.2 Préparer une scène d'infiltration

### EN BREF

Avant de commencer, le MJ définit l'**objectif**, le **seuil de Progrès**, et la **Détection de départ**. Les joueurs connaissent l'objectif mais pas forcément le seuil exact.

---

### DÉFINIR L'OBJECTIF

L'objectif doit être **clair et concret** :

- ✓ "Atteindre la salle des archives"
- ✓ "Sortir du bâtiment avec le prisonnier"
- ✓ "Poser un mouchard dans le bureau"
- ✓ "Voler le sceau impérial"
- ✗ "Infiltrer le palais" (trop vague)
- ✗ "Trouver des informations" (pas assez précis)

> **ASTUCE MJ**
> 
> Annonce l'objectif aux joueurs. Ils doivent savoir ce qu'ils visent. Tu peux garder le seuil de Progrès secret pour maintenir la tension ("Vous ne savez pas combien d'obstacles vous attendent").

---

### FIXER LE SEUIL DE PROGRÈS

Le seuil dépend de la **complexité** et de la **longueur** souhaitée :

|Facteur|Effet sur le seuil|
|---|---|
|Lieu simple (maison, boutique)|−1|
|Lieu standard (manoir, entrepôt)|+0|
|Lieu sécurisé (palais, QG corpo)|+1|
|Lieu ultra-sécurisé (coffre-fort, data-center)|+2|
|Objectif proche de l'entrée|−1|
|Objectif au cœur du lieu|+1|

Seuil de base = **3**. Ajuste selon les facteurs.

> **EXEMPLE**
> 
> L'équipe doit voler un document dans le bureau du sénateur, au centre de son manoir.
> 
> - Base : 3
> - Manoir (standard) : +0
> - Bureau au centre : +1
> 
> Seuil final = **4 Progrès**.

---

### FIXER LA DÉTECTION DE DÉPART

La Détection commence généralement à **0** (routine). Elle peut être plus haute si les conditions sont défavorables :

|Condition|Détection de départ|
|---|---|
|Situation normale|0|
|**Alerte ≥ 2** (compteur global)|+1|
|Lieu **hautement surveillé** (QG corpo, zone militaire)|+1|
|**Couverture = 0** (en infiltration sociale)|+1|
|Événement récent suspect|+1|

**Cap** : La Détection de départ ne peut pas dépasser **2**. Si le calcul donne 3+, c'est déjà l'alarme avant même de commencer.

> **EXEMPLE**
> 
> L'équipe infiltre un entrepôt corpo. Ils ont Alerte 2 (enquête en cours).
> 
> - Base : 0
> - Alerte ≥ 2 : +1
> - Entrepôt corpo (surveillé) : +1
> 
> Détection de départ = **2**. La situation est déjà tendue.

> **ERREUR FRÉQUENTE**
> 
> "On commence à Détection 3." Non. Si le calcul donne 3+, l'infiltration est compromise dès le départ. Le MJ doit proposer une autre approche ou changer les conditions.

---

### RÉSUMÉ : PRÉPARATION

┌─────────────────────────────────────────────────────────────────┐
│                 PRÉPARER LA SCÈNE D'INFILTRATION                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. Définir l'OBJECTIF (clair et concret)                       │
│                                                                 │
│  2. Fixer le SEUIL DE PROGRÈS                                   │
│     • Rapide : 2                                                │
│     • Standard : 3                                              │
│     • Complexe : 4                                              │
│     • Majeure : 5+                                              │
│                                                                 │
│  3. Fixer la DÉTECTION DE DÉPART                                │
│     • Base : 0                                                  │
│     • +1 si Alerte ≥ 2                                          │
│     • +1 si lieu hautement surveillé                            │
│     • +1 si Couverture = 0 (social)                             │
│     • Cap : 2 maximum                                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

---

## 9.3 Les approches

### EN BREF

Tu peux infiltrer de trois manières : **furtive** (par les ombres), **sociale** (par le bluff), ou **technique** (par les systèmes). Chaque approche utilise des compétences différentes, mais les règles restent les mêmes.

---

### APPROCHE FURTIVE

Tu passes sans être vu. Tu évites les gardes, tu te caches, tu crochètes les serrures.

|Compétences typiques|Usage|
|---|---|
|**Discrétion**|Se déplacer sans être vu ou entendu|
|**Infiltration**|Franchir des obstacles physiques (murs, toits, conduits)|
|**Sécurité matérielle**|Crocheter, désamorcer, contourner|
|**Escamotage**|Voler, planter, manipuler sans être remarqué|
|**Tactique terrain**|Trouver la meilleure route, anticiper les patrouilles|

> **EXEMPLE**
> 
> Koris veut traverser une cour surveillée par des gardes.
> 
> Il utilise **Discrétion** pour se déplacer d'ombre en ombre.
> 
> Jet de Discrétion (Score 50) : 38. Réussite.
> 
> → **+1 Progrès**. Koris traverse la cour sans être repéré.

---

### APPROCHE SOCIALE

Tu passes pour quelqu'un qui a le droit d'être là. Tu joues un rôle, tu mens, tu manipules.

| Compétences typiques   |Usage|
| ---------------------- | ----------------------------------------- |
| Identité               |Maintenir une identité fictive|
| **Mensonge**           |Mentir de façon crédible|
| **Étiquette locale**   |Respecter les codes sociaux du lieu|
| **Bureaucratie**       |Naviguer les procédures administratives|
| **Contacts**           |Utiliser des connexions pour accéder|
| **Persuasion**         |Convaincre quelqu'un de te laisser passer|

> **EXEMPLE**
> 
> Senna se fait passer pour une servante du palais.
> 
> Elle utilise **Identité** pour passer devant un garde.
> 
> Jet d'Identité (Score 55) : 41. Réussite.
> 
> → **+1 Progrès**. Le garde la laisse passer sans poser de questions.

---

### APPROCHE TECHNIQUE

Tu passes par les systèmes. Tu pirètes, tu sabotes, tu exploites les failles technologiques.

|Compétences typiques|Usage|
|---|---|
|**Intrusion numérique**|Pirater des systèmes informatiques|
|**Exploitation**|Exploiter des failles, manipuler des données|
|**Ingénierie**|Saboter, réparer, modifier des machines|
|**Drone et micro-systèmes**|Utiliser des drones de reconnaissance|
|**Sécurité matérielle**|Contourner des systèmes électroniques|

> **EXEMPLE**
> 
> L'équipe est bloquée par une porte à badge. Thom tente de la pirater.
> 
> Il utilise **Intrusion numérique** pour falsifier un accès.
> 
> Jet d'Intrusion numérique (Score 48) : 62. Échec.
> 
> → **+1 Détection**. Le système enregistre une tentative d'accès non autorisée.

---

### MÉLANGER LES APPROCHES

Dans une même scène, tu peux alterner les approches selon les obstacles :

> **EXEMPLE D'INFILTRATION MIXTE**
> 
> Objectif : Atteindre le coffre dans le bureau du marchand. Seuil : 3 Progrès.
> 
> **Action 1** (sociale) : Senna entre par la porte principale en se faisant passer pour une cliente. Jet d'Identité : réussite. → Progrès 1/3.
> 
> **Action 2** (furtive) : Elle s'éclipse vers l'arrière-boutique pendant que le marchand est occupé. Jet de Discrétion : réussite. → Progrès 2/3.
> 
> **Action 3** (technique) : Elle crochète le coffre. Jet de Sécurité matérielle : réussite. → Progrès 3/3.
> 
> Objectif atteint ! Elle a les documents.

---

### CHANGER D'APPROCHE RADICALEMENT

Si tu changes **radicalement** d'approche (par exemple, de furtif à violent), le MJ peut :

- Remettre le **Progrès à 0** (tu repars de zéro avec une nouvelle méthode).
- Garder la **Détection** (les conséquences de ton ancienne approche persistent).

> **EXEMPLE**
> 
> Koris était en approche furtive (Progrès 2/4, Détection 1). Il décide d'assommer un garde.
> 
> Le MJ juge que c'est un changement radical (furtif → violent).
> 
> - Progrès : remis à 0.
> - Détection : reste à 1 (et risque de monter si le corps est découvert).
> 
> Koris doit maintenant finir l'infiltration avec cette nouvelle approche.

> **ASTUCE MJ**
> 
> Ne sois pas trop punitif. Si le joueur assomme discrètement un garde isolé et cache le corps, ce n'est pas forcément un changement "radical". Réserve cette règle aux vrais basculements (combat ouvert, explosion, etc.).

---

## 9.4 Résoudre une action

### EN BREF

Chaque action significative pendant l'infiltration = **1 jet**. Un seul personnage fait le jet (le "leader"), les autres peuvent aider selon les règles d'aide en équipe.

---

### QU'EST-CE QU'UNE "ACTION DE SCÈNE" ?

Une action de scène est un **moment significatif** où tu prends un risque :

- Franchir une zone surveillée
- Passer un checkpoint
- Crocheter une porte
- Mentir à un garde
- Pirater un terminal
- Voler un objet
- Se cacher pendant une patrouille

Ce n'est **pas** :

- Marcher dans un couloir vide
- Ouvrir une porte non verrouillée
- Discuter entre vous
- Observer sans risque

> **ASTUCE MJ**
> 
> Ne demande pas de jet pour tout. Réserve les jets aux moments où il y a un **risque réel** d'être détecté. Si les PJ traversent une pièce vide sans surveillance, pas de jet.

---

### PROCÉDURE

1. Le joueur décrit ce qu'il veut faire.
2. Le MJ détermine la compétence appropriée et la difficulté.
3. Le joueur fait son jet (avec aide éventuelle).
4. Le MJ applique le résultat.

---

### RÉSULTATS

|Résultat du jet|Effet sur Progrès|Effet sur Détection|Autre|
|---|---|---|---|
|**Réussite**|+1 Progrès|—|—|
|**Critique de réussite**|+2 Progrès **OU** —|— **OU** −1 Détection|Choisis l'un ou l'autre|
|**Échec**|—|+1 Détection|—|
|**Critique d'échec**|—|+2 Détection|Complication immédiate + éventuellement +1 Preuves|

> **EXEMPLE : RÉUSSITE STANDARD**
> 
> Senna crochète une serrure. Score 55, jet 42. Réussite.
> 
> → **Progrès +1**. La porte s'ouvre silencieusement.

> **EXEMPLE : CRITIQUE DE RÉUSSITE**
> 
> Koris se faufile entre les gardes. Score 50, jet 22 (double). Critique de réussite.
> 
> Le joueur choisit : +2 Progrès (il va plus loin que prévu) **OU** −1 Détection (il brouille ses traces en passant).
> 
> Il choisit +2 Progrès. → Progrès passe de 1 à 3.

> **EXEMPLE : ÉCHEC**
> 
> Thom tente de pirater un terminal. Score 45, jet 58. Échec.
> 
> → **Détection +1**. Le système enregistre une anomalie. Les gardes sont un peu plus vigilants.

> **EXEMPLE : CRITIQUE D'ÉCHEC**
> 
> Senna ment à un officier. Score 48, jet 66 (double). Critique d'échec.
> 
> → **Détection +2**. L'officier ne la croit pas du tout et appelle des gardes.
> 
> De plus, le MJ décide d'une complication : l'officier a noté son visage. **Preuves +1**.

---

### MODIFICATEURS DE DIFFICULTÉ

Le MJ peut appliquer des modificateurs selon les circonstances :

|Situation|Modificateur|
|---|---|
|Conditions idéales (temps illimité, bon équipement)|+10 (Facile)|
|Conditions normales|+0 (Standard)|
|Conditions défavorables (temps limité, bruit, stress)|−10 (Difficile)|
|Conditions hostiles (sous pression, équipement minimal)|−20 (Très difficile)|
|Conditions extrêmes (presque impossible)|−30 (Quasi impossible)|

> **EXEMPLE**
> 
> Koris crochète une serrure standard : difficulté Standard (+0).
> 
> Koris crochète la même serrure pendant qu'un garde approche : difficulté Difficile (−10).

---

### ACTIONS NON-PROGRESSANTES

Certaines actions ne font pas avancer vers l'objectif, mais donnent un **avantage** pour la suite :

- Observer les patrouilles pour trouver un angle mort
- Créer une diversion pour attirer les gardes
- Préparer une route de repli
- Saboter un système d'alarme

Sur **réussite**, ces actions donnent un avantage concret au lieu de +1 Progrès :

- Annuler un malus de −10 sur la prochaine action
- Donner l'avantage sur le prochain jet
- Révéler une information utile (timing des patrouilles, code, etc.)

> **EXEMPLE**
> 
> Avant de traverser la cour, Koris observe les patrouilles (action non-progressante).
> 
> Jet de Surveillance (Score 50) : 38. Réussite.
> 
> → Pas de Progrès, mais Koris a maintenant **avantage** sur son prochain jet de Discrétion pour traverser.

---

### AIDE EN ÉQUIPE

Pendant une infiltration, un personnage fait le jet principal (le "leader"). Les autres peuvent **aider** selon les règles :

- L'aide doit être **pertinente** et **décrite**.
- L'assistant doit être au moins **Formé** dans une compétence utile.
- L'aide réussie donne **+5** au leader (max +10 total).
- L'aide ratée de 30+ donne **−5** ou une complication.

> **EXEMPLE**
> 
> Senna (leader) crochète une porte pendant que Koris fait le guet.
> 
> - Senna : Sécurité matérielle (Score 55)
> - Koris aide : Surveillance (Score 50), jet 42.Réussite.
> 
> → Senna a **+5** sur son jet de Sécurité matérielle.

> **ERREUR FRÉQUENTE**
> 
> "On fait tous le jet." Non. Un seul jet par action. Les autres aident ou attendent. Trop de jets = trop de chances d'échec.

---

## 9.5 Les états de Détection

### EN BREF

La Détection a 4 niveaux. Chaque niveau change l'ambiance et les règles. À 3, c'est l'alarme.

---

### DÉTECTION 0 : ROUTINE

**Ambiance** : Tout est calme. Les gardes font leur ronde habituelle. Personne ne cherche quoi que ce soit.

**Effet mécanique** : Aucun malus. Les jets se font normalement.

**Ce que les PJ voient** : Des gardes détendus, des portes surveillées mollement, des conversations banales.

> **EXEMPLE**
> 
> L'équipe entre dans le manoir pendant une fête. Détection 0.
> 
> Les gardes sont occupés à surveiller les invités. Ils ne font pas attention aux serviteurs qui circulent.

---

### DÉTECTION 1 : SUSPICION

**Ambiance** : Quelque chose cloche. Un garde a vu une ombre. Un serviteur a posé une question bizarre. L'atmosphère est légèrement tendue.

**Effet mécanique** : Le MJ **peut** imposer **−10** sur la prochaine action si elle est risquée ou exposée.

**Ce que les PJ voient** : Des regards appuyés, des gardes qui vérifient deux fois, des questions supplémentaires.

> **EXEMPLE**
> 
> Un garde a cru voir quelqu'un dans le couloir. Détection passe à 1.
> 
> Le prochain jet de Discrétion dans ce couloir sera à **−10** car les gardes sont attentifs.

---

### DÉTECTION 2 : RECHERCHE ACTIVE

**Ambiance** : Quelque chose s'est passé. Les gardes cherchent activement. Il y a de la tension dans l'air.

**Effets mécaniques** :

1. **Tous les jets exposés** (Discrétion, Infiltration, Couverture en zone sensible) sont à **−10**.
2. À chaque action de scène, le MJ fait un **Jet d'Incident** (1d10).

**Ce que les PJ voient** : Patrouilles supplémentaires, appels radio, vérifications d'identité, fouilles de pièces.

> **EXEMPLE**
> 
> Un garde a trouvé une porte crochetée. Détection passe à 2.
> 
> Désormais :
> 
> - Tous les jets de Discrétion sont à −10.
> - À chaque action, le MJ lance 1d10 pour voir si un incident se produit.

---

### DÉTECTION 3 : ALARME

**Ambiance** : L'alarme est déclenchée. Tout le monde sait qu'il y a un intrus. La situation bascule.

**Effets mécaniques** :

1. **Alerte +1** (compteur global, si ce n'était pas déjà le cas).
2. **Preuves +1** (logs, témoins, caméras, traces).
3. Le MJ déclenche une **Réponse** (lockdown, renforts, drones, fermeture d'accès).
4. La scène peut basculer en **combat** ou en **poursuite**.

**Ce que les PJ voient** : Sirènes, cris d'alerte, gardes qui courent, portes qui se verrouillent, drones déployés.

> **EXEMPLE**
> 
> Un garde a trouvé Koris. Il crie l'alerte. Détection passe à 3.
> 
> → **Alerte +1** (passe à 2). → **Preuves +1** (les caméras ont capté quelque chose). → Le MJ annonce : "Les portes se verrouillent. Trois gardes arrivent par le couloir nord."
> 
> L'équipe doit décider : combattre, fuir, ou se cacher.

---

### TABLEAU RÉCAPITULATIF

|Détection|État|Effet sur les jets|Événements|
|---|---|---|---|
|0|Routine|Aucun|—|
|1|Suspicion|−10 possible sur actions risquées|Regards, questions|
|2|Recherche active|−10 sur tous jets exposés|Jet d'Incident à chaque action|
|3|Alarme|—|Alerte +1, Preuves +1, Réponse|

---

## 9.6 Le Jet d'Incident

### EN BREF

Quand la Détection est à **2**, le MJ fait un **Jet d'Incident** (1d10) à chaque action de scène. Ce jet peut créer des complications supplémentaires... ou maintenir la tension sans drame.

---

### PROCÉDURE

1. La Détection est à 2.
2. Un joueur fait une action de scène.
3. **Avant** de résoudre le jet du joueur, le MJ lance 1d10.
4. Le MJ applique le résultat de la table.
5. Le joueur fait son jet normalement.

> **IMPORTANT**
> 
> Le Jet d'Incident est **en plus** du jet du joueur, pas à la place. Il représente ce qui se passe dans l'environnement pendant que les PJ agissent.

---

### TABLE DES INCIDENTS (1d10)

|d10|Incident|Effet|
|---|---|---|
|**1-4**|**Rien**|Tension. Rien ne se passe, mais les joueurs ne le savent pas.|
|**5-6**|**Patrouille à proximité**|Une patrouille passe près des PJ. Ils doivent se figer, dévier, ou changer de route. Le MJ peut demander un jet supplémentaire ou simplement augmenter la tension narrative.|
|**7**|**Check radio / badge**|Un garde demande une vérification (badge, mot de passe, raison de présence). Nécessite une action sociale ou technique pour s'en sortir.|
|**8**|**Caméras / drone**|Les caméras balaient la zone ou un drone passe. Jet de **Discrétion** ou **Exploitation** pour éviter d'être repéré.|
|**9**|**Verrou secondaire / sas**|Un obstacle supplémentaire apparaît (porte qui se verrouille, sas de sécurité). Jet de **Sécurité matérielle** ou **Intrusion numérique** pour passer.|
|**10**|**Reconnaissance partielle**|Un agent "reconnaît" partiellement un PJ (visage familier, comportement suspect). **Couverture −1** OU **Preuves +1** (selon la situation).|

---

### EXEMPLES D'INCIDENTS

> **INCIDENT 5-6 : PATROUILLE**
> 
> Le MJ lance 1d10 : 5.
> 
> "Vous entendez des pas lourds qui approchent. Une patrouille de deux gardes arrive par le couloir que vous alliez emprunter."
> 
> Les PJ doivent improviser : attendre qu'ils passent, trouver une autre route, ou tenter de se cacher.

> **INCIDENT 7 : CHECK RADIO**
> 
> Le MJ lance 1d10 : 7.
> 
> "Un garde s'approche de Senna. 'Badge, s'il vous plaît. On vérifie tout le monde.' "
> 
> Senna doit faire un jet (Identité pour bluffer, ou Escamotage pour présenter un faux badge).

> **INCIDENT 10 : RECONNAISSANCE**
> 
> Le MJ lance 1d10 : 10.
> 
> "Le garde te dévisage. 'Attendez... On s'est pas déjà vus ?' Il fronce les sourcils."
> 
> Le MJ donne le choix : **Couverture −1** (le garde a des doutes sur l'identité) OU **Preuves +1** (le garde note quelque chose dans son rapport).

---

### QUAND NE PAS FAIRE LE JET D'INCIDENT

- Si la Détection n'est **pas** à 2 (à 0, 1, ou 3, pas de jet).
- Si l'action est **mineure** (parler entre PJ, observer passivement).
- Si tu veux accélérer la scène pour des raisons de rythme.

> **ASTUCE MJ**
> 
> Le Jet d'Incident crée de la tension, mais peut ralentir le jeu. Si la scène traîne, saute quelques jets ou décide que "rien ne se passe" sans lancer.

---

## 9.7 Réduire la Détection

### EN BREF

Si la Détection monte trop, tu peux essayer de la faire **baisser** au lieu de progresser vers l'objectif. C'est une action de scène qui ne donne pas de Progrès mais peut calmer la situation.

---

### PROCÉDURE

1. Tu déclares que tu veux "te faire oublier" ou "calmer la situation".
2. Tu choisis une compétence appropriée selon ta méthode.
3. Tu fais un jet.

|Méthode| Compétence             |Exemple|
| ----------------------- | ---------------------- | ------------------------------------------- |
|Effacer tes traces| **Effacement**         |Nettoyer une scène, effacer des logs|
|Renforcer ta couverture| Identité               |Jouer la comédie pour dissiper les soupçons|
|Détruire les preuves| **Destruction**        |Casser une caméra, brûler un document|
|Manipuler les systèmes| **Exploitation**       |Falsifier les logs, boucler une caméra|
|Créer une diversion| **Tactique terrain**   |Attirer l'attention ailleurs|

---

### RÉSULTATS

|Résultat|Effet|
|---|---|
|**Réussite**|**−1 Détection**|
|**Critique**|**−2 Détection**|
|**Échec**|Rien (la Détection reste)|
|**Critique d'échec**|**+1 Preuves** (tu laisses une trace en "nettoyant")|

> **EXEMPLE**
> 
> La Détection est à 2. L'équipe décide de calmer le jeu avant de continuer.
> 
> Senna reste en arrière pour jouer la servante paniquée. "Mon Dieu, qu'est-ce qui se passe ?" Elle détourne l'attention.
> 
> Jet d'Identité (Score 55) : 41. Réussite.
> 
> → **Détection −1**. Elle passe à 1. Les gardes se détendent un peu.

---

### QUAND RÉDUIRE LA DÉTECTION

C'est utile quand :

- La Détection est à **2** et tu veux éviter l'alarme.
- Tu as du temps et tu préfères la prudence à la vitesse.
- Un critique d'échec récent a fait monter la Détection dangereusement.

Ce n'est **pas** utile quand :

- La Détection est déjà à **0** (tu ne peux pas descendre en dessous).
- Tu es pressé par le temps (l'objectif est urgent).
- La Détection est à **3** (trop tard, l'alarme est déclenchée).

> **ERREUR FRÉQUENTE**
> 
> "Je réduis la Détection à chaque action." Non. Réduire la Détection **ne fait pas progresser** vers l'objectif. Si tu passes tout ton temps à te cacher, tu n'atteindras jamais le coffre.

---

## 9.8 Triggers directs

### EN BREF

Certains événements font monter la Détection ou l'Alerte **automatiquement**, sans jet. Ce sont les "triggers directs" : actions bruyantes, découvertes évidentes, ou erreurs catastrophiques.

---

### LISTE DES TRIGGERS

|Événement|Effet|
|---|---|
|**Tir non-silencieux** en zone habitée|Détection +2, souvent Alerte +1|
|**Corps découvert**|Détection = 3 (alarme immédiate)|
|**Caméras détruites visiblement**|Détection = 3|
|**Alarme physique déclenchée**|Détection = 3|
|**Explosion ou bruit massif**|Détection = 3, Alerte +1|
|**EMP en zone publique**|Détection +1, Preuves +1|
|**Camouflage thermo-optique vu**|Détection +1, Preuves +1|
|**Hacking "bruyant" (trace évidente)**|Détection +1, Preuves +1|

---

### EXEMPLES

> **TRIGGER : TIR NON-SILENCIEUX**
> 
> Koris tire sur un garde avec une arbalète (silencieuse). → Pas de trigger.
> 
> Koris tire sur un garde avec un pistolet. → **Détection +2**, et si c'est en ville, **Alerte +1**.

> **TRIGGER : CORPS DÉCOUVERT**
> 
> Senna a assommé un garde et l'a caché dans un placard.
> 
> Plus tard, un autre garde ouvre le placard.
> 
> → **Détection = 3** immédiatement. L'alarme est déclenchée.

> **TRIGGER : ALARME PHYSIQUE**
> 
> Thom ouvre une fenêtre sans vérifier. C'était une fenêtre piégée.
> 
> → **Détection = 3**. Sirène. Lockdown.

---

### ÉVITER LES TRIGGERS

Certains triggers peuvent être évités avec des précautions :

|Trigger potentiel|Comment l'éviter|
|---|---|
|Tir bruyant|Utiliser des armes silencieuses ou non-létales|
|Corps découvert|Cacher le corps, le déplacer, ou le déguiser|
|Caméras détruites|Boucler la caméra au lieu de la casser|
|Alarme physique|Vérifier avant d'ouvrir, désarmer l'alarme|

> **EXEMPLE**
> 
> Koris assomme un garde. Au lieu de le laisser là :
> 
> - Il le cache dans une armoire (jet de Discrétion ou Force).
> - Il le déguise en ivrogne endormi (jet d'Identité).
> - Il l'attache et le bâillonne dans une pièce verrouillée.
> 
> Si personne ne trouve le corps pendant la scène, pas de trigger.

---

## 9.9 Sortie de scène

### EN BREF

Quand le **Progrès atteint le seuil**, l'objectif est atteint. Mais l'infiltration n'est pas terminée tant que tu n'es pas sorti. Et si la Détection était élevée, il peut y avoir des conséquences.

---

### OBJECTIF ATTEINT

Quand Progrès = Seuil, tu as accompli ce que tu voulais faire :

- Tu as atteint la pièce cible.
- Tu as volé l'objet.
- Tu as posé le dispositif.
- Tu as exfiltré le contact.

Le MJ peut demander une dernière action pour "sortir" (quitter le lieu), mais c'est souvent narratif si la Détection est basse.

> **EXEMPLE**
> 
> Senna a copié les documents (Progrès 3/3). La Détection est à 1.
> 
> Le MJ décrit : "Tu ranges les documents, refermes le coffre. Les couloirs sont calmes. Tu ressors par où tu es entrée, en saluant le garde d'un hochement de tête. Il te rend ton salut."
> 
> Pas de jet supplémentaire. L'infiltration est terminée.

---

### CONSÉQUENCES DE LA DÉTECTION FINALE

Si la Détection est **≥ 2** à la fin de la scène, il y a des traces :

|Détection finale|Conséquence|
|---|---|
|0-1|Pas de conséquence supplémentaire|
|2|Le MJ **peut** ajouter **+1 Preuves** (forensique après coup)|
|3|Alerte +1, Preuves +1 (déjà appliqués), et fuite/combat probable|

> **EXEMPLE**
> 
> L'équipe atteint l'objectif (Progrès 4/4) mais la Détection est à 2.
> 
> Le MJ note : "Vous avez réussi, mais les gardes savent que quelqu'un est passé. Demain, ils feront une analyse forensique."
> 
> → **Preuves +1** (sauf si l'équipe fait une action de nettoyage ou utilise le downtime).

---

### ÉVITER LES CONSÉQUENCES

Si tu veux éviter le +1 Preuves à Détection 2, tu peux :

1. **Faire une action de nettoyage** avant de partir.
2. **Utiliser une action de downtime** pour réduire les Preuves après coup.

> **EXEMPLE**
> 
> Avant de partir, Koris passe une action à effacer les traces (Effacement).
> 
> Jet : 44 (Score 50). Réussite.
> 
> → Détection −1, passe à 1. Plus de conséquence forensique.

---

### QUAND L'INFILTRATION BASCULE

Si la Détection atteint **3**, l'infiltration bascule :

Le MJ choisit selon ce qui fait sens narrativement et ce que veulent les joueurs.

> **EXEMPLE**
> 
> La Détection passe à 3. Les gardes arrivent.
> 
> Le MJ demande : "Qu'est-ce que vous faites ?"
> 
> - Koris : "Je dégaine. On se bat."
> - Senna : "Non, on fuit par la fenêtre !"
> 
> Le MJ décide : poursuite. Les gardes les poursuivent dans les rues.

---

## 9.10 Exemples complets

### EXEMPLE 1 : INFILTRATION FURTIVE RÉUSSIE

**Situation** : L'équipe doit voler un sceau dans le bureau du sénateur.

**Préparation** :

- Objectif : Voler le sceau.
- Seuil : 3 Progrès.
- Détection de départ : 0 (situation calme).

**Déroulement** :

|Action|Personnage|Compétence|Jet|Score|Résultat|Progrès|Détection|
|---|---|---|---|---|---|---|---|
|1. Entrer par une fenêtre du 1er étage|Koris|Infiltration|38|50|Réussite|1|0|
|2. Traverser le couloir surveillé|Koris|Discrétion|55|50|Échec|1|1|
|3. Se cacher pendant que le garde passe|Koris|Discrétion|41|40 (-10)|Échec|1|2|
|4. Attendre et calmer la situation|Senna|Couverture|32|55|Réussite|1|1|
|5. Atteindre le bureau|Koris|Discrétion|28|50|Réussite|2|1|
|6. Crocheter le coffre|Senna|Sécurité mat.|22|55|Crit. réussite|4 (choix +2)|1|

**Résultat** : Objectif atteint avec Détection 1. Pas de conséquence. L'équipe ressort proprement.

---

### EXEMPLE 2 : INFILTRATION SOCIALE QUI DÉRAPE

**Situation** : L'équipe doit planter un mouchard dans le bureau du marchand pendant une réception.

**Préparation** :

- Objectif : Planter le mouchard.
- Seuil : 3 Progrès.
- Détection de départ : 0.

**Déroulement** :

|Action|Personnage|Compétence|Jet|Score|Résultat|Progrès|Détection|
|---|---|---|---|---|---|---|---|
|1. Entrer à la réception (invitation falsifiée)|Senna|Couverture|41|55|Réussite|1|0|
|2. S'éclipser vers l'aile privée|Senna|Discrétion|62|45|Échec|1|1|
|3. Expliquer sa présence à un serviteur|Senna|Mensonge|77|50|Crit. échec|1|3|

**Résultat** : Critique d'échec ! Détection passe directement à 3 (1 + 2).

Le MJ décrit : "Le serviteur hurle 'Intruse !' Des gardes arrivent."

- Alerte +1 (passe à 1).
- Preuves +1 (témoins).
- Réponse : trois gardes convergent.

Senna doit fuir ou se battre. L'infiltration a échoué.

---

### EXEMPLE 3 : INFILTRATION TECHNIQUE

**Situation** : Thom doit pirater un terminal dans la salle serveur pour extraire des données.

**Préparation** :

- Objectif : Extraire les données.
- Seuil : 3 Progrès.
- Détection de départ : 1 (lieu surveillé).

**Déroulement** :

|Action|Personnage|Compétence|Jet|Score|Résultat|Progrès|Détection|
|---|---|---|---|---|---|---|---|
|1. Contourner le premier firewall|Thom|Intrusion num.|42|48|Réussite|1|1|
|2. Escalader les privilèges|Thom|Exploitation|51|50|Échec|1|2|
|_Jet d'Incident_|MJ|—|7|—|Check badge|—|—|
|3. Répondre au check automatique|Thom|Intrusion num.|38|38 (-10)|Réussite pile|2|2|
|_Jet d'Incident_|MJ|—|3|—|Rien|—|—|
|4. Extraire les données|Thom|Exploitation|29|40 (-10)|Réussite|3|2|

**Résultat** : Objectif atteint avec Détection 2.

Le MJ note : "Tu as les données, mais le système a enregistré des anomalies. D'ici demain, ils sauront que quelqu'un est passé."

→ **Preuves +1** (sauf si Thom nettoie les logs avant de partir).

Thom décide de faire une action de nettoyage :

|Action|Personnage|Compétence|Jet|Score|Résultat|Détection|
|---|---|---|---|---|---|---|
|5. Effacer les logs|Thom|Intrusion num.|35|48|Réussite|1|

→ Détection passe à 1. Pas de Preuves.

---

## 9.11 Résumé du chapitre

|Section|Règle|
|---|---|
|**JAUGES**||
||**Progrès** : avancée vers l'objectif (0 → seuil)|
||**Détection** : vigilance des adversaires (0-3)|
|**SEUIL DE PROGRÈS**||
||Rapide : 2|
||Standard : 3|
||Complexe : 4|
||Majeure : 5+|
|**DÉTECTION DE DÉPART**||
||Base : 0|
||+1 si Alerte ≥ 2|
||+1 si lieu hautement surveillé|
||+1 si Couverture = 0 (social)|
||Cap : 2 maximum|
|**RÉSULTATS DES JETS**||
||Réussite : +1 Progrès|
||Critique réussite : +2 Progrès OU −1 Détection|
||Échec : +1 Détection|
||Critique échec : +2 Détection + complication|
|**ÉTATS DE DÉTECTION**||
||0 Routine : aucun malus|
||1 Suspicion : −10 possible|
||2 Recherche : −10 obligatoire + Jet d'Incident|
||3 Alarme : Alerte +1, Preuves +1, Réponse|
|**JET D'INCIDENT (1d10)**||
||1-4 : Rien|
||5-6 : Patrouille|
||7 : Check badge/radio|
||8 : Caméras/drone|
||9 : Verrou secondaire|
||10 : Reconnaissance partielle|
|**RÉDUIRE DÉTECTION**||
||Action de scène, pas de Progrès|
||Réussite : −1 Détection|
||Critique : −2 Détection|
||Échec critique : +1 Preuves|
|**TRIGGERS DIRECTS**||
||Tir bruyant : Détection +2, Alerte +1|
||Corps découvert : Détection = 3|
||Alarme physique : Détection = 3|
|**SORTIE**||
||Progrès = Seuil : objectif atteint|
||Détection ≥ 2 à la fin : +1 Preuves possible|
||Détection = 3 : bascule en combat/poursuite|

---
