---
title: "Chapitre 11 : Cybernétique"
order: 11
description: "Implants, puces de compétences et intrusion numérique"
---

## CHAPITRE 11 : CYBERNÉTIQUE

### MODULE OPTIONNEL

---

### EN BREF (chapitre)

Ce chapitre est un **module optionnel** pour les campagnes dans un cadre technologique avancé (Tier 7+). Il ajoute des **implants cybernétiques**, des **puces de compétences**, et une **procédure d'intrusion numérique** (hacking). Ces règles s'intègrent avec les systèmes de Stress, Détermination, et les compteurs de mission (Couverture, Preuves, Alerte, Compromission). Si ta campagne se déroule dans un monde médiéval ou low-tech, tu peux ignorer ce chapitre.

---

## 11.1 Le cadre technologique avancé

### EN BREF

Ce cadre représente un monde où la technologie est omniprésente : capteurs, caméras, biométrie, logs numériques. Les implants sont courants, mais laissent des traces. La surveillance est partout.

---

### NIVEAU TECHNOLOGIQUE

Ce cadre correspond à un **Tier planète = 7 (Spatial)** ou supérieur.

Dans ce contexte :

- Les **capteurs** et **caméras** sont partout.
- La **biométrie** (empreintes, reconnaissance faciale, ADN) est standard.
- Les **logs numériques** enregistrent tout : transactions, déplacements, communications.
- La **traçabilité** est le principal ennemi des agents.

> **IMPORTANT**
> 
> Dans ce cadre, la "Fuite" du matériel (voir MATERIEL) représente surtout la **signature** et la **traçabilité** : forensique, télémétrie, numéros de série, reconnaissance faciale. Ce n'est pas le "miracle technologique" qui pose problème, c'est la trace qu'il laisse.

---

### IMPLICATIONS POUR LES AGENTS

|Aspect|Conséquence|
|---|---|
|**Couverture**|Plus difficile à maintenir. Les identités sont vérifiables en temps réel.|
|**Preuves**|S'accumulent facilement. Chaque action laisse des logs.|
|**Alerte**|Monte vite. Les systèmes de surveillance communiquent entre eux.|
|**Compromission**|Critique. Une fois identifié, tu es dans les bases de données.|

> **ASTUCE MJ**
> 
> Dans ce cadre, mets l'accent sur la gestion des traces. Les joueurs doivent penser "forensique" à chaque action : qu'est-ce que je laisse derrière moi ?

---

## 11.2 La Charge Neurale (CN)

### EN BREF

Chaque implant a un coût en **Charge Neurale (CN)**. Ton corps a une limite de CN qu'il peut supporter. Dépasser cette limite a des conséquences.

---

### QU'EST-CE QUE LA CHARGE NEURALE ?

La Charge Neurale représente le **stress** que les implants imposent à ton système nerveux et à ton corps. Plus tu as d'implants, plus ton organisme est sollicité.

- Chaque implant a un coût de **CN 1 à 3**.
- Tu as une **CN max** basée sur ta résistance physique.
- Si tu dépasses ta CN max, tu subis des pénalités.

---

### CALCULER TA CN MAX

Ta Charge Neurale maximale dépend de ton **Endurance** :

```
CN max = 5 + ((Endurance − 25) ÷ 15) arrondi à l'inférieur

Minimum : 5
```

| Endurance | CN max |
| --------- | ------ |
| 25-39     | 5      |
| 40        | 6      |
| 41-55     | 7      |
| 56-70     | 8      |
| 71+       | 9      |

> **EXEMPLE**
> 
> Koris a Endurance 40.
> 
> CN max = 5 + ((40 − 25) ÷ 15) = 5 + (15 ÷ 15) = 5 + 1 = **6**.
> 
> Il peut porter jusqu'à 6 points de CN en implants.

> **EXEMPLE**
> 
> Senna a Endurance 32.
> 
> CN max = 5 + ((32 − 25) ÷ 15) = 5 + (7 ÷ 15) = 5 + 0 = **5**.
> 
> Elle peut porter jusqu'à 5 points de CN.

> **POURQUOI L'ENDURANCE ?**
> 
> L'Endurance représente la résistance physique globale : endurance, tolérance aux trauma, capacité de récupération. C'est logique qu'il détermine combien d'implants ton corps peut supporter.

---

### CN UTILISÉE

Ta **CN utilisée** est la somme des coûts en CN de tous tes implants installés.

> **EXEMPLE**
> 
> Koris a les implants suivants :
> 
> - Interface neurale (CN 1)
> - Jack direct (CN 1)
> - Optiques augmentées (CN 1)
> - Dermal weave (CN 2)
> 
> CN utilisée = 1 + 1 + 1 + 2 = **5**.
> 
> Sa CN max est 6. Il est dans les limites (5 ≤ 6).

---

### DÉPASSEMENT DE CN

Si ta **CN utilisée > CN max**, tu es en **dépassement**. Cela a des conséquences :

|Conséquence|Effet|
|---|---|
|**Détermination réduite**|Ta Détermination max est réduite de **1 par point de dépassement** (minimum 1).|
|**Stress supplémentaire**|Chaque fois que tu utilises un implant **Actif** ou une **puce de compétence**, tu prends **+1 Stress** supplémentaire.|

> **EXEMPLE**
> 
> Senna (CN max 5) décide d'installer un Camouflage thermo-optique (CN 3) en plus de ses implants existants (CN 4).
> 
> CN utilisée = 4 + 3 = **7**. Dépassement de 2 points.
> 
> - Sa Détermination max passe de 5 à **3** (5 − 2).
> - Chaque fois qu'elle utilise un implant Actif ou une puce, elle prend **+1 Stress** en plus de tout autre coût.

> **ERREUR FRÉQUENTE**
> 
> "Je dépasse ma CN, c'est juste un malus mineur." Non. Le dépassement est sérieux. Avec une Détermination max réduite, tu as moins de relances disponibles. Et le Stress supplémentaire peut te faire basculer en panique rapidement.

---

### RÉDUIRE TA CN

Pour réduire ta CN utilisée, tu dois **retirer des implants** (voir 10.5).

Il n'y a pas de moyen temporaire de réduire la CN. Les implants sont là en permanence jusqu'à leur retrait chirurgical.

---

## 11.3 Types d'implants

### EN BREF

Les implants sont soit **Passifs** (toujours actifs), soit **Actifs** (nécessitent une action pour s'activer). Les implants Actifs peuvent provoquer un **Glitch** en cas d'échec critique.

---

### IMPLANTS PASSIFS

Un implant **Passif** est toujours en fonction. Tu n'as pas besoin de l'activer.

Exemples :

|Implant|CN|Effet passif|
|---|---|---|
|Interface neurale|1|Permet d'utiliser des puces de compétences|
|Jack direct|1|Pas de malus de latence en hacking|
|Optiques augmentées|1|+10 Surveillance (visuel), annule malus pénombre|
|Audio-filtre|1|+10 Surveillance (sons/voix)|
|Dermal weave|2|Abs +1 permanent|
|Plaquage dermique lourd|3|Abs +2 permanent|
|Prothèse bras standard|1|Ignore malus "main inutilisable", +5 Contondants|
|Bras renforcé|2|+10 Lutte ou +10 Contondants (au choix)|
|Jambes myomères|2|+10 Mobilité (sprint/franchissement)|
|Filtre toxines|1|Avantage sur saves Corps vs toxines/gaz|

Les implants passifs ne provoquent **jamais** de Glitch par eux-mêmes (mais peuvent être affectés par des EMP ou d'autres effets).

---

### IMPLANTS ACTIFS

Un implant **Actif** nécessite une **Action** ou une **Réaction** pour s'activer. Son effet est temporaire (généralement 1 action, 1 jet, ou 1 minute).

Exemples :

|Implant|CN|Activation| Effet                                                   |Coût|
| ------------------------- | --- | --------------- | ------------------------------------------------------- | ----------------------- |
|Stabilisateur adrénaline|2|Action| Ignore Malmené pour 1 action OU avantage Physique 1 jet |+1 Stress après usage|
|Co-processeur d'analyse|2|Action| +20 sur 1 jet Analyse                                   |+1 Stress après usage|
|Camouflage thermo-optique|3|Action| Avantage Discrétion pendant 1 minute                    |+1 Preuves (télémétrie)|
|Lame rétractable|2|Action gratuite| Sortir l'arme (2d10−1, Perforant, Discret)              |—|

> **EXEMPLE**
> 
> Koris est en difficulté. Il active son **Stabilisateur adrénaline** (Action).
> 
> → Il a avantage sur son prochain jet de Physique. → Après ce jet, il prend **+1 Stress**.

> **IMPORTANT**
> 
> Si tu es en **dépassement de CN**, chaque utilisation d'un implant Actif coûte **+1 Stress supplémentaire** (en plus du coût normal de l'implant).

---

### LE GLITCH

Quand tu fais un **échec critique** sur un jet où un **implant Actif** est impliqué, tu subis un **Glitch** jusqu'à la fin de la scène.

Situations concernées :

- Jet utilisant un boost d'implant (Stabilisateur, Co-processeur)
- Jet de hacking "en live" avec un Jack direct
- Jet de Discrétion avec Camouflage thermo-optique actif
- Jet de combat avec une interface de combat active

Quand tu subis un Glitch, **choisis 1 effet** :

|Option|Effet|
|---|---|
|**1. Interférence système**|−10 sur tous les jets Tech et Analyse jusqu'à la fin de la scène|
|**2. Perte de réactivité**|Tu perds ta prochaine **Réaction** (tu ne peux pas te défendre, contre-attaquer, etc.)|
|**3. Fuite de données**|**+1 Preuves** (télémétrie, logs, signature)|

> **EXEMPLE**
> 
> Senna utilise son Camouflage thermo-optique pour se faufiler. Elle fait un échec critique sur son jet de Discrétion.
> 
> → **Glitch**. Elle choisit "Fuite de données" : +1 Preuves.
> 
> Le système de surveillance a capté une anomalie thermique. Il y a maintenant une trace.

> **ASTUCE MJ**
> 
> Décris les Glitchs de manière cinématique : écran qui grésille dans le champ de vision, membre qui se fige un instant, acouphène soudain. C'est l'occasion de montrer que la technologie n'est pas parfaite.

---

## 11.4 Catalogue d'implants

### EN BREF

Voici les implants les plus courants avec leurs caractéristiques complètes. Le MJ peut ajouter d'autres implants selon les besoins de la campagne.

---

### IMPLANTS SENSORIELS

|Implant|CN|Type|Effet|Contrepartie|
|---|---|---|---|---|
|**Interface neurale / Port de puce**|1|Passif|Permet d'utiliser des puces de compétences. +10 Exploitation (terminaux) si câblé.|Trace possible en clinique|
|**Jack direct (deck-link)**|1|Passif|Hacking "en live" sans malus de latence. Sans jack : −10 Intrusion numérique en temps réel.|Visible en scan médical|
|**Optiques augmentées**|1|Passif|+10 Surveillance (visuel). Annule un malus de pénombre (−10).|Signature IR, logs possibles|
|**Audio-filtre**|1|Passif|+10 Surveillance (sons/voix).|Sensible aux EMP (Glitch)|

---

### IMPLANTS DÉFENSIFS

|Implant|CN|Type|Effet|Contrepartie|
|---|---|---|---|---|
|**Dermal weave**|2|Passif|**Abs +1** (cumulable avec armure).|−5 Discrétion (rigidité)|
|**Plaquage dermique lourd**|3|Passif|**Abs +2** (cumulable avec armure).|Signature visible. À chaque combat : +1 Stress|
|**Filtre toxines**|1|Passif|Avantage sur saves Corps vs toxines, gaz, poisons.|Nécessite maintenance régulière|

---

### IMPLANTS DE MEMBRE

|Implant|CN|Type|Effet|Contrepartie|
|---|---|---|---|---|
|**Prothèse bras standard**|1|Passif|Ignore malus "main inutilisable". +5 Contondants.|Dossier clinique|
|**Bras renforcé**|2|Passif|+10 Lutte et contrôle (saisir/désarmer) **OU** +10 Contondants (choix à la pose).|Visible aux scanners|
|**Lame rétractable**|2|Passif/Actif|Arme intégrée : 2d10−1, Perforant, Discret. Action gratuite pour sortir/rentrer.|Si découverte : −1 Couverture|
|**Jambes myomères**|2|Passif|+10 Mobilité (sprint, franchissement, saut).|Sprint prolongé : +1 Stress|

---

### IMPLANTS DE BOOST

|Implant|CN|Type| Effet                                                                 |Contrepartie|
| ----------------------------- | --- | -------------- | --------------------------------------------------------------------- | -------------------------------------- |
|**Stabilisateur adrénaline**|2|Actif (Action)| Ignore état Malmené pour 1 action **OU** avantage sur 1 jet Physique. |Après usage : +1 Stress|
|**Co-processeur d'analyse**|2|Actif (Action)| +20 sur 1 jet Analyse (Enquête, Forensique, Cryptographie).           |Après usage : +1 Stress|
|**Camouflage thermo-optique**|3|Actif (Action)| Avantage sur Discrétion pendant 1 minute.                             |Chaque usage : +1 Preuves (télémétrie)|

---

### TABLEAU RÉCAPITULATIF

|Implant|CN|Type|Bonus principal|
|---|---|---|---|
|Interface neurale|1|Passif|Puces de compétences|
|Jack direct|1|Passif|Hacking sans malus|
|Optiques augmentées|1|Passif|+10 Surveillance visuel|
|Audio-filtre|1|Passif|+10 Surveillance audio|
|Dermal weave|2|Passif|Abs +1|
|Plaquage dermique lourd|3|Passif|Abs +2|
|Prothèse bras standard|1|Passif|Ignore malus main|
|Bras renforcé|2|Passif|+10 Lutte ou Contondants|
|Lame rétractable|2|Passif|Arme cachée|
|Jambes myomères|2|Passif|+10 Mobilité|
|Filtre toxines|1|Passif|Avantage vs poisons|
|Stabilisateur adrénaline|2|Actif|Ignore Malmené / avantage|
|Co-processeur d'analyse|2|Actif|+20 Analyse|
|Camouflage thermo-optique|3|Actif|Avantage Discrétion|

---

## 11.5 Pose et retrait d'implants

### EN BREF

Installer ou retirer un implant nécessite du temps, du matériel, et un jet de compétence. C'est une **action de downtime** (Chapitre 7).

---

### PRÉ-REQUIS

Pour poser ou retirer un implant, il faut :

- Une **clinique**, un **atelier**, ou un **ripperdoc** (chirurgien clandestin).
- **1 action de downtime** par implant.
- Un jet de la compétence appropriée.

---

### COMPÉTENCE REQUISE

|Type d'implant|Compétence|
|---|---|
|Implants neuraux (interface, jack, co-processeur)|**Médecine**|
|Implants organiques (filtres, dermal weave)|**Médecine**|
|Prothèses mécaniques (bras, jambes)|**Ingénierie**|
|Renforts dermaux (plaquage)|**Ingénierie**|
|Actionneurs et lames|**Ingénierie**|

> **NOTE**
> 
> C'est **celui qui pose l'implant** qui fait le jet, pas le patient. Un personnage peut se faire opérer par un PNJ médecin ou un autre PJ.

---

### DIFFICULTÉ

La difficulté dépend du coût en CN de l'implant :

|CN de l'implant|Difficulté|Modificateur|
|---|---|---|
|CN 1|Standard|+0|
|CN 2|Difficile|−10|
|CN 3|Très difficile|−20|

---

### RÉSULTATS

|Résultat du jet| Effet                                                                                                   |
|---|---|
|**Réussite**| L'implant est opérationnel. Pas de complication.                                                        |
|**Critique de réussite**| Pose "propre" : aucune trace médicale exploitable. OU +1 Couverture si clinique légale (alibi médical). |
|**Échec**| L'implant fonctionne, mais **choisis 1 complication** (voir ci-dessous).                                |
|**Critique d'échec**| L'implant fonctionne, mais **2 complications** + **Endurance**. Échec au save : **Blessure grave**.     |

---

### COMPLICATIONS

En cas d'échec, choisis **1 complication** :

|Complication|Effet|
|---|---|
|**Trace administrative**|+1 Preuves (dossier clinique, numéros de série, facturation)|
|**Douleur/Rejet**|+1 Stress|
|**Trauma mineur**|−1 Santé|
|**Implant instable**|Glitch au premier usage|

> **EXEMPLE**
> 
> Un ripperdoc installe un Bras renforcé (CN 2) sur Koris.
> 
> Jet de Ingénierie (Score 50 − 10 = 40) : 55. Échec.
> 
> L'implant fonctionne, mais Koris choisit une complication : **+1 Preuves** (le ripperdoc a gardé un dossier pour se couvrir).

> **EXEMPLE (critique d'échec)**
> 
> Senna se fait poser un Camouflage thermo-optique (CN 3) par un médecin amateur.
> 
> Jet de Médecine (Score 45 − 20 = 25) : 88 (critique d'échec).
> 
> → 2 complications : +1 Preuves ET Glitch au premier usage. → Endurance (35) : jet 42. Échec. → **Blessure grave** : l'opération a mal tourné.

---

### RETRAIT D'IMPLANT

Le retrait suit les mêmes règles que la pose :

- 1 action de downtime
- Même compétence et difficulté
- Mêmes conséquences en cas d'échec

Après retrait, ta CN utilisée diminue du coût de l'implant retiré.

> **EXEMPLE**
> 
> Koris veut retirer son Dermal weave (CN 2) pour passer sous sa CN max.
> 
> Jet de Ingénierie (Score 50 − 10 = 40) : 35. Réussite.
> 
> L'implant est retiré proprement. Sa CN utilisée baisse de 2.

---

## 11.6 Les puces de compétences

### EN BREF

Les **puces de compétences** (skillchips) te permettent d'acquérir temporairement des compétences que tu n'as pas. Elles nécessitent une **Interface neurale** et causent du **Stress** à l'usage.

---

### PRÉ-REQUIS

Pour utiliser des puces de compétences, tu dois avoir l'implant :

**Interface neurale / Port de puce** (CN 1)

Sans cet implant, tu ne peux pas utiliser de puces.

---

### TYPES DE PUCES

|Type|Effet|Durée|
|---|---|---|
|**Puce Base (Formé)**|Tu es considéré **Formé (+10)** dans une compétence de base donnée.|1 mission|
|**Puce Spécialité**|Tu gagnes **+10** sur une spécialité précise.|1 mission|

---

### PUCE BASE (FORMÉ)

Une puce Base te donne le rang **Formé (+10)** dans une compétence de base pour **1 mission**.

Conditions :

- Si tu n'es **pas formé** dans la compétence : tu deviens Formé (+10).
- Si tu es **déjà Formé, Expert, ou Maître** : la puce ne t'aide pas. Tu gardes ton rang actuel.

> **EXEMPLE**
> 
> Koris n'a pas la compétence Intrusion numérique. Il insère une **Puce Base : Intrusion**.
> 
> Pour cette mission, il est **Formé** en Intrusion numérique (+10).
> 
> Son Score = Tech (45) + 10 = **55**.

> **EXEMPLE (déjà formé)**
> 
> Senna est déjà **Expert** en Pilotage et conduite. Elle insère une Puce Base : Conduite.
> 
> La puce ne l'aide pas. Elle reste Expert (+15). On prend toujours le meilleur rang.

---

### PUCE SPÉCIALITÉ

Une puce Spécialité te donne **+10** sur une spécialité précise pour **1 mission**.

Conditions :

- Tu dois être **au moins Formé** dans la compétence de base pour utiliser une puce Spécialité.
- La puce s'ajoute à ton rang existant.

> **EXEMPLE**
> 
> Koris est Formé en Identité. Il insère une **Puce Spé : Déguisement**.
> 
> Quand il utilise la spécialité Déguisement :
> 
> Score = Social (40) + 10 (Formé) + 10 (Puce Spé) = **60**.

---

### COÛT EN STRESS

Utiliser une puce a un coût :

**Chaque scène où tu profites d'une puce : +1 Stress**

Ce Stress représente la tension cognitive de "télécharger" des compétences dans ton cerveau.

> **EXEMPLE**
> 
> Koris utilise sa Puce Base : Intrusion pendant une scène d'infiltration numérique.
> 
> → **+1 Stress** à la fin de la scène (ou au début, au choix du MJ).
> 
> Plus tard, il utilise encore la puce dans une autre scène.
> 
> → **+1 Stress** supplémentaire.

> **IMPORTANT : DÉPASSEMENT**
> 
> Si tu es en **dépassement de CN**, chaque usage de puce coûte **+1 Stress supplémentaire** (donc +2 Stress par scène au total).

---

### ÉCHEC CRITIQUE AVEC UNE PUCE

Si tu fais un **échec critique** sur un jet "assisté par puce" :

1. La **puce grille** (elle est détruite, inutilisable).
2. Tu subis un **Glitch** (voir 10.3).
3. Si l'action est **traçable** (réseau, caméras, logs) : **+1 Preuves**.

> **EXEMPLE**
> 
> Senna utilise une Puce Base : Intrusion pour pirater un terminal. Elle fait un échec critique.
> 
> → La puce grille. Elle n'est plus Formée en Intrusion. → Glitch. Elle choisit "Interférence système" (−10 Tech/Analyse). → L'action était sur le réseau. **+1 Preuves**.

---

### CATALOGUE DE PUCES

| Puce                           |Type| Effet                                      |
| ------------------------------ | ------------ | ------------------------------------------ |
| Puce Base : Conduite           |Base (Formé)| Formé en Pilotage et conduite              |
| Puce Base : Intrusion          |Base (Formé)| Formé en Intrusion numérique               |
| Puce Base : Médecine           |Base (Formé)| Formé en Médecine                          |
| Puce Base : Linguistique       |Base (Formé)| Formé en Linguistique                      |
| Puce Spé : Forensic evasion    |Spécialité| +10 Intrusion numérique (Forensic evasion) |
| Puce Spé : Déguisement         |Spécialité| +10 Identité (Déguisement)                 |
| Puce Spé : Micro-drones        |Spécialité| +10 Drone et micro-systèmes (Micro-drones) |
| Puce Spé : Sécurité matérielle |Spécialité| +10 Sécurité matérielle (Crochetage)       |

> **NOTE**
> 
> Le MJ peut créer d'autres puces selon les besoins. Une puce existe pour presque chaque compétence de base et spécialité.

---

## 11.7 Intrusion numérique (Hacking)

### EN BREF

L'intrusion numérique permet de pirater des systèmes informatiques : voler des données, ouvrir des portes, désactiver des alarmes, usurper des identités. C'est une procédure similaire à l'infiltration physique (Chapitre 8), avec ses propres jauges et contre-mesures.

---

### COMPÉTENCE

L'intrusion numérique utilise la compétence **Intrusion numérique** (Tech).

Sans **Jack direct** (implant CN 1), tu as **−10** sur les actions de hacking "en temps réel" (quand la vitesse compte).

---

### NIVEAU DE SÉCURITÉ (NS)

Chaque système a un **Niveau de Sécurité (NS)** qui détermine la difficulté de base :

|NS|Description|Modificateur|Exemples|
|---|---|---|---|
|**20**|Sécurité minimale|+10 (Facile)|Terminal personnel, réseau domestique|
|**40**|Sécurité standard|+0 (Standard)|Réseau d'entreprise, système commercial|
|**60**|Haute sécurité|−10 (Difficile)|Serveur corpo, base de données sensible|
|**80**|Ultra-sécurisé|−20 (Très difficile)|Système militaire, infrastructure critique|

---

### CONTRAINTES SUPPLÉMENTAIRES

Certains systèmes ont des **contraintes** qui modifient la difficulté ou imposent des conditions :

|Contrainte|Effet|
|---|---|
|**Local** (accès physique requis)|Pas de modificateur, mais tu dois être sur place|
|**Remote uniquement**|−10 supplémentaire (pas d'accès physique possible)|
|**Air-gap** (pas de réseau)|−20 supplémentaire. Souvent impossible sans plan physique.|
|**SOC actif** (opérateur en surveillance)|**Désavantage** sur tous les jets|

> **EXEMPLE**
> 
> Un serveur corpo (NS 60) avec accès remote uniquement et un SOC actif.
> 
> - Difficulté de base : −10 (NS 60)
> - Remote uniquement : −10
> - SOC actif : désavantage
> 
> Total : **−20 avec désavantage**. C'est une cible difficile.

---

### LES DEUX JAUGES

Comme l'infiltration physique (Chapitre 8), l'intrusion numérique utilise deux jauges :

- **Progrès** : ton avancée vers l'objectif (0 → seuil).
- **Détection** : à quel point le système te repère (0-3).

---

### SEUIL DE PROGRÈS

|Seuil|Type d'objectif|Exemples|
|---|---|---|
|**2**|Simple|Ouvrir une porte, lire un fichier non protégé|
|**3**|Standard|Accéder à une base de données, désactiver une alarme|
|**4**|Complexe|Voler des données chiffrées, prendre le contrôle d'un système|
|**5+**|Majeur|Effacer des preuves dans toute une infrastructure|

L'objectif standard demande **3 Progrès** :

1. **Accès** : entrer dans le système.
2. **Escalade** : obtenir les privilèges nécessaires.
3. **Action** : accomplir l'objectif.

---

### RÉSOLUTION DES JETS

Chaque action de hacking = 1 jet d'**Intrusion numérique**.

|Résultat|Effet sur Progrès|Effet sur Détection|
|---|---|---|
|**Réussite**|+1 Progrès|—|
|**Critique de réussite**|+2 Progrès **OU** —|— **OU** −1 Détection (choisis)|
|**Échec**|—|+1 Détection|
|**Critique d'échec**|—|+2 Détection + contre-mesure + **+1 Preuves**|

> **EXEMPLE**
> 
> Thom pirate un serveur corpo (NS 60). Score Intrusion numérique = 48 − 10 = 38.
> 
> Jet 1 : 35. Réussite. Progrès 1/3, Détection 0. Jet 2 : 52. Échec. Progrès 1/3, Détection 1. Jet 3 : 28. Réussite. Progrès 2/3, Détection 1. Jet 4 : 31. Réussite. Progrès 3/3, Détection 1.
> 
> Objectif atteint avec Détection 1. Quelques anomalies dans les logs, mais rien d'alarmant.

---

### ÉTATS DE DÉTECTION

|Détection|État|Effet|
|---|---|---|
|**0**|Invisible|Le système ne voit rien d'anormal.|
|**1**|Anomalie|Des logs suspects, mais pas d'alerte.|
|**2**|Surveillance active|Le système cherche l'intrus. **−10** sur les jets suivants.|
|**3**|Intrusion détectée|**Alerte +1**, **Preuves +1**. Le MJ déclenche une contre-mesure.|

---

### CONTRE-MESURES

Quand la Détection atteint **3** (ou sur critique d'échec), le MJ déclenche une **contre-mesure** :

|Contre-mesure|Effet|
|---|---|
|**Lockout / 2FA forcée**|Progrès gelé. Tu as besoin d'un plan B (accès physique, social engineering).|
|**Trace active**|**Compromission +1** si ton identité est liée à l'intrusion.|
|**Effacement d'accès**|Ton Progrès revient à **0**. Tu dois recommencer.|
|**Réponse physique**|Alerte locale : drone, garde, alarme sur ta position physique.|
|**Black ICE**|Programme de défense. **Save Sang-froid** ou +1 Stress et désavantage Tech pour la scène.|

> **EXEMPLE**
> 
> Thom fait un critique d'échec. Détection passe à 3.
> 
> → **Alerte +1**, **Preuves +1**. → Le MJ choisit "Black ICE" : Thom doit faire un save Sang-froid. → Jet 52 (Save 40). Échec. +1 Stress et désavantage sur Tech pour le reste de la scène.

---

### NETTOYAGE

Après avoir atteint l'objectif (ou pendant l'intrusion), tu peux tenter de **nettoyer** tes traces :

**Jet** : **Intrusion numérique** ou **Effacement**.

|Résultat|Effet|
|---|---|
|**Réussite**|−1 Détection **OU** −1 Preuves (choisis)|
|**Critique**|−2 cumulables (ex : −1 Détection ET −1 Preuves)|
|**Échec**|+1 Détection (tu attires l'attention en nettoyant)|
|**Critique d'échec**|+1 Preuves (tu laisses plus de traces)|

> **EXEMPLE**
> 
> Thom a terminé avec Détection 2. Il veut nettoyer avant de partir.
> 
> Jet d'Intrusion numérique : 32 (Score 38). Réussite.
> 
> Il choisit −1 Détection. Détection passe à 1.

---

## 11.8 EMP et vulnérabilités

### EN BREF

Les implants et l'électronique sont vulnérables aux **EMP** (impulsions électromagnétiques). Une grenade EMP peut neutraliser temporairement les implants d'un ennemi... ou les tiens.

---

### EFFET D'UN EMP

Quand tu es touché par un EMP (grenade, arme EMP, piège) :

- **Implants** : Save **Corps**. Échec = **Glitch** pendant 1 scène.
- **Appareils électroniques** : Save **Tech** (pour l'objet). Échec = hors service pendant 1 scène.

> **EXEMPLE**
> 
> Un garde lance une grenade EMP. Koris (avec plusieurs implants) est dans la zone.
> 
> Endurance (40) : jet 55. Échec.
> 
> → Tous ses implants subissent un **Glitch** jusqu'à la fin de la scène. Il choisit "Interférence système" (−10 Tech/Analyse).

---

### IMPLANTS SENSIBLES

Certains implants sont particulièrement sensibles aux EMP :

|Implant|Vulnérabilité|
|---|---|
|Audio-filtre|Glitch automatique sur EMP (pas de save)|
|Optiques augmentées|Glitch + cécité temporaire (1 round)|
|Interface neurale|Si Glitch : puces inutilisables pour la scène|

---

### SE PROTÉGER

Quelques moyens de se protéger des EMP :

- **Cage de Faraday** : un équipement ou une pièce blindée annule l'EMP.
- **Implants blindés** (option coûteuse) : +10 au jet d'Endurance contre EMP.
- **Distance** : les grenades EMP ont une portée courte.

---

## 11.9 Progression et achats

### EN BREF

En option, le MJ peut utiliser les **Points de Mission (PM)** pour réguler l'acquisition d'implants et de puces.

---

### COÛTS EN PM (OPTION)

|Acquisition|Coût en PM|
|---|---|
|Implant CN 1|1 PM|
|Implant CN 2|2 PM|
|Implant CN 3|3 PM|
|Pack de 3 puces (base ou spécialité)|1 PM|

La pose/retrait suit toujours les règles de downtime (10.5).

> **EXEMPLE**
> 
> Koris veut acheter un Camouflage thermo-optique (CN 3) et un pack de 3 puces.
> 
> Coût : 3 PM + 1 PM = **4 PM**.
> 
> Il doit aussi dépenser **1 action de downtime** pour la pose de l'implant.

---

### POURQUOI RÉGULER ?

Sans régulation, les joueurs peuvent accumuler trop d'implants trop vite, ce qui :

- Déséquilibre le jeu (trop de bonus).
- Réduit les conséquences du dépassement de CN.
- Diminue la valeur narrative des augmentations.

> **ASTUCE MJ**
> 
> Les implants devraient être des **choix significatifs**, pas des achats routiniers. Utilise les PM pour que chaque implant soit une décision réfléchie.

---

### AUGMENTER LA CN MAX

Par défaut, la CN max ne peut pas être augmentée directement.

**Option** : Le MJ peut autoriser l'augmentation de la CN max via un **arc narratif majeur** (traitement expérimental, mutation contrôlée, technologie alien).

Coût suggéré : 4 PM + justification narrative + action de downtime.

---

## 11.10 Exemples de jeu

### EXEMPLE 1 : UTILISER DES IMPLANTS EN COMBAT

**Situation** : Koris (Dermal weave Abs +1, Stabilisateur adrénaline) est en combat. Il est Malmené (Santé ≤ moitié).

**Round 1** :

Koris subit une attaque. Grâce à son Dermal weave, il a Abs 3 (armure 2 + implant 1). Les dégâts sont réduits.

**Round 2** :

Koris veut attaquer malgré son état Malmené (normalement −10 sur Physique).

Il active son **Stabilisateur adrénaline** (Action).

→ Il ignore Malmené pour cette action. → Après son attaque : **+1 Stress**.

**Round 3** :

Koris fait un échec critique sur son attaque en utilisant encore son Stabilisateur.

→ **Glitch**. Il choisit "Perte de réactivité" (perd sa prochaine Réaction).

---

### EXEMPLE 2 : HACKING D'UN SERVEUR CORPO

**Situation** : Thom doit voler des données sur un serveur corpo (NS 60, remote uniquement).

**Préparation** :

- Objectif : Voler les données.
- Seuil : 3 Progrès.
- Détection de départ : 0.
- Difficulté : −10 (NS 60) − 10 (remote) = −20.
- Score effectif : 48 − 20 = **28**.

**Déroulement** :

|Jet|Résultat|Score|Progrès|Détection|
|---|---|---|---|---|
|1. Accès|25|Réussite|1|0|
|2. Escalade|42|Échec|1|1|
|3. Escalade (retry)|18|Réussite|2|1|
|4. Action (vol données)|31|Échec|2|2|
|5. Action (retry)|22|Réussite|3|2|

**Résultat** : Objectif atteint avec Détection 2.

Le système sait que quelqu'un est passé, mais n'a pas déclenché l'alarme. Le MJ peut décider de +1 Preuves (forensique après coup).

Thom décide de nettoyer :

|Jet|Résultat|Score|Effet|
|---|---|---|---|
|6. Nettoyage|26|Réussite|−1 Détection|

Détection passe à 1. Les traces sont minimales.

---

### EXEMPLE 3 : PUCE DE COMPÉTENCE EN MISSION

**Situation** : Senna doit pirater un terminal, mais elle n'a pas Intrusion numérique. Elle a une Interface neurale et une Puce Base : Intrusion.

**Préparation** :

- Elle insère la puce. Pour cette mission, elle est **Formée** en Intrusion numérique (+10).
- Score = Tech (50) + 10 = **60**.

**Scène 1** : Infiltration du bâtiment.

Senna utilise la puce pour bypasser un lecteur de badge.

Jet : 48. Réussite.

→ **+1 Stress** (coût de la puce pour cette scène).

**Scène 2** : Salle serveur.

Senna utilise encore la puce pour extraire les données.

Jet : 72. Échec.

→ **+1 Stress** (coût de la puce pour cette scène). → +1 Détection.

Elle réessaie.

Jet : 88 (critique d'échec).

→ La **puce grille** (détruite). → **Glitch** (elle choisit +1 Preuves). → +2 Détection, +1 Preuves.

Senna n'est plus Formée en Intrusion numérique. Elle doit trouver une autre solution.

---

## 11.11 Résumé du chapitre

|Section| Règle                                                              |
|---|---|
|**CHARGE NEURALE (CN)**|                                                                    |
|| CN max = 5 + ((Endurance − 25) ÷ 15)                               |
|| Dépassement : Détermination max −1 par point                       |
|| Dépassement : +1 Stress par usage d'implant Actif ou puce          |
|**TYPES D'IMPLANTS**|                                                                    |
|| **Passif** : toujours actif, pas de Glitch                         |
|| **Actif** : nécessite Action/Réaction, Glitch possible             |
|**GLITCH**|                                                                    |
|| Sur critique d'échec avec implant Actif                            |
|| Choix : −10 Tech/Analyse, perte Réaction, ou +1 Preuves            |
|**POSE/RETRAIT**|                                                                    |
|| 1 action de downtime par implant                                   |
|| Compétence : Médecine (neural/organique) ou Ingénierie (mécanique) |
|| Difficulté : CN 1 (+0), CN 2 (−10), CN 3 (−20)                     |
|| Échec : 1 complication. Critique d'échec : 2 + Endurance           |
|**PUCES DE COMPÉTENCES**|                                                                    |
|| Nécessite Interface neurale (CN 1)                                 |
|| Puce Base : Formé (+10) pour 1 mission                             |
|| Puce Spécialité : +10 spécialité pour 1 mission                    |
|| Coût : +1 Stress par scène d'utilisation                           |
|| Critique d'échec : puce grillée + Glitch                           |
|**INTRUSION NUMÉRIQUE**|                                                                    |
|| Compétence : Intrusion numérique (Tech)                            |
|| NS 20/40/60/80 → +10/+0/−10/−20                                    |
|| Jauges : Progrès (0→seuil) et Détection (0-3)                      |
|| Réussite : +1 Progrès                                              |
|| Échec : +1 Détection                                               |
|| Détection 3 : Alerte +1, Preuves +1, contre-mesure                 |
|**CONTRE-MESURES**|                                                                    |
|| Lockout, Trace active, Effacement, Réponse physique, Black ICE     |
|**PROGRESSION (OPTION PM)**|                                                                    |
|| Implant CN 1 : 1 PM                                                |
|| Implant CN 2 : 2 PM                                                |
|| Implant CN 3 : 3 PM                                                |
|| Pack 3 puces : 1 PM                                                |

---
