---
title: "Chapitre 10 : Véhicules et Poursuites"
order: 10
description: "Bandes de distance, manœuvres, crash et ramming"
---

## CHAPITRE 10 : VÉHICULES ET POURSUITES

---

### EN BREF (chapitre)

Les poursuites sont des moments de tension intense : tu fuis des gardes à cheval, tu pourchasses un suspect en voiture, tu tentes de semer un drone dans les ruelles. Ce chapitre te donne une **procédure complète** pour gérer ces scènes sans les transformer en calculs de distance au mètre près. On utilise des **bandes de distance**, des **manœuvres**, et des **jets opposés**. Que ce soit en véhicule, à cheval, ou à pied, les règles sont les mêmes.

---

## 10.1 Les caractéristiques des véhicules

### EN BREF

Chaque véhicule a quatre caractéristiques : **VIT** (vitesse), **MAN** (maniabilité), **Abs** (blindage), et **INT** (intégrité/santé). Ces chiffres définissent comment il se comporte en poursuite.

---

### VIT (VITESSE)

La **Vitesse** va de 1 à 5. Elle représente la vitesse maximale relative du véhicule.

|VIT|Description|Exemples|
|---|---|---|
|1|Très lent|Charrette, véhicule lourd surchargé|
|2|Lent|Fourgon, camion, tracteur|
|3|Normal|Voiture standard, berline, cheval au galop|
|4|Rapide|Moto, voiture sportive, VTOL|
|5|Très rapide|Véhicule de course, intercepteur|

**En poursuite** : Si tu es plus rapide que ton adversaire, tu as un bonus. Si tu es plus lent, tu as un malus.

```
Bonus/Malus de vitesse = (Ta VIT − VIT adverse) × 5

Maximum : +15 / Minimum : −15
```

> **EXEMPLE**
> 
> Koris (moto, VIT 4) poursuit une berline (VIT 3).
> 
> Différence : 4 − 3 = 1 point d'avance.
> 
> → Koris a **+5** sur ses jets de poursuite.

> **EXEMPLE**
> 
> La même moto (VIT 4) fuit un intercepteur (VIT 5).
> 
> Différence : 4 − 5 = −1.
> 
> → Koris a **−5** sur ses jets.

---

### MAN (MANIABILITÉ)

La **Maniabilité** est un bonus direct aux jets de **Pilotage et conduite** : +0, +5, ou +10.

|MAN|Description|Exemples|
|---|---|---|
|+0|Peu maniable|Fourgon, camion, APC|
|+5|Maniabilité normale|Voiture standard, berline|
|+10|Très maniable|Moto, véhicule agile|

> **EXEMPLE**
> 
> Senna conduit une voiture compacte (MAN +5). Son Score en Pilotage et conduite est 45.
> 
> Score effectif en poursuite = 45 + 5 = **50**.

---

### ABS (ABSORPTION / BLINDAGE)

L'**Absorption** fonctionne comme pour les armures personnelles : elle réduit les dégâts subis par le véhicule.

|Abs|Description|Exemples|
|---|---|---|
|0-1|Pas de blindage|Moto, véhicule civil léger|
|2|Blindage léger|Voiture standard, berline corpo|
|3-4|Blindage moyen|Fourgon blindé, véhicule tactique|
|5-6|Blindage lourd|APC, véhicule militaire|

---

### INT (INTÉGRITÉ)

L'**Intégrité** est la "Santé" du véhicule. Quand elle tombe à 0, le véhicule est hors service.

|INT|Description|Exemples|
|---|---|---|
|10-14|Fragile|Moto, drone, véhicule léger|
|15-20|Normal|Voiture, berline, VTOL|
|21-25|Robuste|Fourgon, véhicule utilitaire|
|30+|Très robuste|APC, véhicule blindé lourd|

---

### TABLEAU DES VÉHICULES COURANTS

|Véhicule|VIT|MAN|INT|Abs|Notes|
|---|---|---|---|---|---|
|Cheval (galop)|3|+5|12|0|Être vivant, peut paniquer|
|Charrette|1|+0|15|0|Transport de marchandises|
|Carrosse|2|+0|18|1|Transport de personnes|
|Moto urbaine|4|+10|12|1|Agile, vulnérable|
|Voiture compacte|3|+5|18|2|Véhicule standard|
|Berline corpo|3|+5|20|2|Confort, sécurité|
|Fourgon utilitaire|2|+0|22|2|Grand volume|
|Fourgon blindé|2|+0|25|4|Transport sécurisé|
|VTOL / Aéronef|4|+0|20|2|Vol, signature élevée|
|Moto furtive|4|+10|14|1|Discrète, high-tech|
|APC corpo|3|+0|35|6|Véhicule militaire|
|Drone de poursuite|4|+5|10|1|Autonome ou piloté|

---

### VÉHICULES LOW-TECH

Sur un monde médiéval ou antique, les "véhicules" sont des montures ou des chariots :

|Monture/Véhicule|VIT|MAN|INT|Abs|Notes|
|---|---|---|---|---|---|
|Cheval de trait|2|+0|14|0|Lent mais endurant|
|Cheval de selle|3|+5|12|0|Monture standard|
|Destrier|3|+10|15|1|Cheval de guerre, entraîné|
|Chameau|2|+0|14|0|Adapté au désert|
|Charrette à bœufs|1|+0|18|0|Transport lourd|
|Carrosse léger|2|+5|16|1|Transport rapide|
|Barque|2|+0|12|0|Petit bateau|
|Galère légère|3|+0|25|2|Navire de guerre|

> **NOTE**
> 
> Les animaux peuvent **paniquer**. En cas de stress intense (combat, bruit, feu), le MJ peut demander un jet de **Dressage** ou imposer un comportement erratique.

---

## 10.2 Les bandes de distance

### EN BREF

On ne mesure pas les distances en mètres. On utilise des **bandes** qui représentent la distance relative entre les participants. L'objectif du poursuivant est de réduire la distance. L'objectif du fuyard est de l'augmenter jusqu'à être **Perdu**.

---

### LES CINQ BANDES

|Bande|Valeur|Description|Ce qui est possible|
|---|---|---|---|
|**Contact**|0|Pare-choc contre pare-choc, côte à côte|Ramming, saut de véhicule, combat au corps à corps|
|**Proche**|1|Quelques longueurs de véhicule|Tir à courte portée, manœuvres serrées|
|**Moyen**|2|Distance moyenne, visible clairement|Tir à moyenne portée|
|**Loin**|3|Grande distance, mais encore visible|Tir à longue portée, perte de vue possible|
|**Perdu**|4|Ligne de vue cassée|Évasion réussie (pour le fuyard)|

---

### VISUALISER LES BANDES

```
CONTACT ←──→ PROCHE ←──→ MOYEN ←──→ LOIN ←──→ PERDU
   0            1           2          3          4

Poursuivant veut aller vers ← (réduire la distance)
Fuyard veut aller vers → (augmenter la distance)
```

---

### CHANGER DE BANDE

Pendant une poursuite, les jets opposés déterminent qui gagne ou perd des bandes :

- **Tu gagnes le jet** : La distance change de **1 bande** en ta faveur.
- **Tu gagnes de 20+ ou critique** : La distance change de **2 bandes** en ta faveur (ou tu infliges une complication).
- **Tu perds** : La distance change de 1 bande en faveur de l'adversaire.

> **EXEMPLE**
> 
> Koris (fuyard) est à distance **Proche** (1) d'une patrouille.
> 
> Il gagne le jet de poursuite.
> 
> → La distance passe à **Moyen** (2). Il s'éloigne.

> **EXEMPLE**
> 
> La patrouille gagne le jet suivant.
> 
> → La distance revient à **Proche** (1). Ils se rapprochent.

---

### ATTEINDRE "PERDU"

Quand le fuyard atteint la bande **Perdu** (4), il a réussi à s'échapper :

- La ligne de vue est cassée.
- Les poursuivants ne savent plus où il est allé.
- La poursuite est terminée (sauf s'ils ont un moyen de le retrouver).

> **EXEMPLE**
> 
> Senna est à **Loin** (3). Elle gagne son jet.
> 
> → Elle passe à **Perdu** (4). Elle a semé ses poursuivants.
> 
> Le MJ décrit : "Tu tournes dans une ruelle, puis une autre. Quand tu te retournes, plus personne. Tu as réussi."

---

### ATTEINDRE "CONTACT"

Quand le poursuivant atteint la bande **Contact** (0), il peut :

- Tenter un **ramming** (percuter le véhicule adverse).
- Permettre à un passager de **sauter** sur l'autre véhicule.
- Tenter de **bloquer** le fuyard (forcer l'arrêt).
- **Tirer à bout portant** (pas de malus de distance).

> **EXEMPLE**
> 
> La patrouille atteint **Contact** (0) avec Koris.
> 
> Un garde tente de sauter sur sa moto. C'est un jet de **Mobilité** (ou **Lutte et contrôle**) contre Koris.

---

## 10.3 Démarrer une poursuite

### EN BREF

Au début d'une poursuite, le MJ fixe la **distance initiale**. Ensuite, chaque pilote fait un jet pour déterminer qui a l'**initiative tactique**.

---

### FIXER LA DISTANCE INITIALE

Le MJ décide de la distance de départ selon la fiction :

|Situation|Distance initiale suggérée|
|---|---|
|Embuscade, interception|Contact (0) ou Proche (1)|
|Poursuite déclenchée normalement|Proche (1) ou Moyen (2)|
|Fuite après avoir été repéré de loin|Moyen (2) ou Loin (3)|
|Le fuyard a une longueur d'avance|Loin (3)|

> **EXEMPLE**
> 
> L'équipe quitte un bâtiment et voit une patrouille qui les repère. Ils sautent dans leur véhicule.
> 
> Le MJ décide : distance initiale = **Proche** (1). La patrouille était à quelques dizaines de mètres.

---

### JET D'INITIATIVE DE POURSUITE

Chaque pilote fait un jet de **Pilotage et conduite** (+ MAN du véhicule).

Applique le **modificateur de vitesse** :

```
Modificateur = (Ta VIT − VIT adverse) × 5 (max +15 / min −15)
```

Compare les **marges** (Score − jet). Le vainqueur (marge la plus haute) choisit :

- **Agir en premier** à chaque round de poursuite.
- **Agir en second** (pour réagir aux manœuvres adverses).

> **EXEMPLE**
> 
> Koris (moto VIT 4, MAN +10) fuit une berline de patrouille (VIT 3, MAN +5).
> 
> - Koris : Pilotage 45 + MAN 10 + vitesse (+5) = Score **60**. Jet : 38. Marge = +22.
> - Patrouille : Pilotage 40 + MAN 5 + vitesse (−5) = Score **40**. Jet : 35. Marge = +5.
> 
> Koris gagne (22 > 5). Il choisit d'**agir en premier** pour contrôler la poursuite.

---

### QUI POURSUIT, QUI FUIT ?

Généralement, c'est évident :

- Le **fuyard** veut augmenter la distance jusqu'à Perdu.
- Le **poursuivant** veut réduire la distance jusqu'à Contact (ou empêcher la fuite).

Mais parfois, les rôles peuvent changer en cours de poursuite (le chasseur devient la proie).

---

## 10.4 Le tour de poursuite

### EN BREF

Chaque round de poursuite, les deux camps choisissent une **manœuvre**, puis font des **jets opposés**. Le résultat détermine comment la distance change.

---

### STRUCTURE D'UN ROUND

```
1. Chaque pilote annonce sa MANŒUVRE
   (en même temps, ou dans l'ordre d'initiative)

2. Jets opposés : Pilotage et conduite (+ MAN + mod vitesse)

3. Résolution :
   - Vainqueur : distance change de 1 bande en sa faveur
   - Victoire de 20+ ou critique : 2 bandes OU complication
   - Défaite de 30+ ou critique d'échec : test de CRASH

4. Actions supplémentaires (tir, saut, etc.)

5. Round suivant
```

---

### JETS OPPOSÉS

Chaque pilote fait un jet de **Pilotage et conduite** :

```
Score = Pilotage et conduite + MAN + modificateur de vitesse
```

Compare les marges (Score − jet) :

|Résultat|Effet|
|---|---|
|Tu gagnes|Distance change de **1 bande** en ta faveur|
|Tu gagnes de **20+** ou **critique**|**2 bandes** en ta faveur OU complication pour l'adversaire|
|Tu perds|Distance change de 1 bande en faveur de l'adversaire|
|Tu perds de **30+** ou **critique d'échec**|**Test de crash** (voir 9.6)|

> **EXEMPLE**
> 
> Koris (Score 60) fait 42. Marge = +18. La patrouille (Score 40) fait 38. Marge = +2.
> 
> Koris gagne de 16 points (18 − 2). C'est moins de 20, donc **1 bande** en sa faveur.
> 
> La distance passe de Proche (1) à Moyen (2).

> **EXEMPLE (victoire écrasante)**
> 
> Koris (Score 60) fait 22 (critique de réussite). Marge = +38. La patrouille (Score 40) fait 52. Marge = −12.
> 
> Koris gagne de 50 points. C'est plus de 20.
> 
> Il choisit : **2 bandes** (passe de Proche à Loin) OU une **complication** (le conducteur adverse perd le contrôle temporairement).

---

### ÉGALITÉ

Si les marges sont égales, la distance ne change pas. Le round est un statu quo tendu.

> **ASTUCE MJ**
> 
> En cas d'égalité, décris l'action : les deux véhicules restent côte à côte, virant dans les mêmes virages, aucun ne prenant l'avantage.

---

## 10.5 Les manœuvres

### EN BREF

Chaque round, tu choisis une **manœuvre** qui décrit ce que tu essaies de faire. Certaines manœuvres ont des effets spéciaux au-delà du simple changement de distance.

---

### LISTE DES MANŒUVRES

|Manœuvre|Objectif|Effet spécial|
|---|---|---|
|**Accélérer / Fuir**|Augmenter la distance|Aucun (manœuvre standard)|
|**Poursuivre / Coller**|Réduire la distance|Aucun (manœuvre standard)|
|**Couper (raccourci)**|Augmenter la distance rapidement|Si victoire : +2 bandes. Si échec : test de crash.|
|**Zigzag / Couvert roulant**|Se protéger des tirs|Pas de changement de distance. Tirs contre toi à −10 jusqu'au prochain round.|
|**Forcer le passage**|Traverser un obstacle (trafic, foule)|Si victoire : +1 bande. Si échec : crash automatique.|
|**Ramming**|Percuter l'adversaire|Nécessite Contact. Voir 9.7.|
|**Se cacher / Casser la ligne de vue**|Disparaître|Nécessite Loin. Jet à −10. Si réussite : Perdu.|
|**Bloquer**|Empêcher l'adversaire de fuir|Nécessite Contact. Si victoire : l'adversaire ne peut pas augmenter la distance ce round.|

---

### ACCÉLÉRER / FUIR

La manœuvre de base pour le fuyard. Tu pousses ton véhicule pour mettre de la distance.

- **Effet** : Si tu gagnes, +1 bande (tu t'éloignes).
- **Risque** : Aucun risque particulier.

> **EXEMPLE**
> 
> Koris fuit. Il choisit "Accélérer". Il gagne le jet.
> 
> → Distance passe de Moyen à Loin.

---

### POURSUIVRE / COLLER

La manœuvre de base pour le poursuivant. Tu pousses pour rattraper ta cible.

- **Effet** : Si tu gagnes, −1 bande (tu te rapproches).
- **Risque** : Aucun risque particulier.

> **EXEMPLE**
> 
> La patrouille poursuit. Elle choisit "Coller". Elle gagne le jet.
> 
> → Distance passe de Loin à Moyen.

---

### COUPER (RACCOURCI)

Tu prends un risque en coupant par un raccourci dangereux : ruelle étroite, passage interdit, terrain accidenté.

- **Effet si victoire** : +2 bandes au lieu de +1.
- **Risque si échec** : Test de crash immédiat.

> **EXEMPLE**
> 
> Senna voit une ruelle qui coupe à travers le marché. Elle choisit "Couper".
> 
> Elle rate son jet.
> 
> → Test de crash. Elle doit réussir un jet de Pilotage (−10) pour éviter les dégâts.

---

### ZIGZAG / COUVERT ROULANT

Tu sacrifies ta progression pour te protéger des tirs. Tu fais des embardées imprévisibles.

- **Effet** : La distance ne change pas (même si tu gagnes).
- **Avantage** : Tous les tirs contre toi ont **−10** jusqu'au prochain round.

> **EXEMPLE**
> 
> Koris sait que le passager de la patrouille va tirer. Il choisit "Zigzag".
> 
> Même s'il gagne le jet, la distance reste à Moyen.
> 
> Mais le tireur aura −10 pour le toucher.

---

### FORCER LE PASSAGE

Tu fonces à travers un obstacle : trafic dense, foule, barricade légère. C'est tout ou rien.

- **Effet si victoire** : +1 bande (tu passes).
- **Risque si échec** : Crash automatique (pas de test, tu crashes).

> **EXEMPLE**
> 
> Senna arrive sur une place bondée. Elle choisit "Forcer le passage".
> 
> Elle rate son jet.
> 
> → Crash automatique. Son véhicule percute un étal et s'immobilise.

> **ASTUCE MJ**
> 
> Réserve cette manœuvre aux moments désespérés. C'est un pari risqué.

---

### SE CACHER / CASSER LA LIGNE DE VUE

Tu tentes de disparaître en utilisant l'environnement : ruelles, virages serrés, couverture naturelle.

- **Pré-requis** : Tu dois être à **Loin** (3) ou plus.
- **Jet** : Pilotage et conduite à **−10**.
- **Effet si réussite** : Tu passes directement à **Perdu** (4). Évasion réussie.
- **Effet si échec** : La distance ne change pas. Tu as perdu un round.

> **EXEMPLE**
> 
> Koris est à Loin. Il voit un dédale de ruelles. Il choisit "Se cacher".
> 
> Jet de Pilotage (Score 60 − 10 = 50) : 44. Réussite.
> 
> → Il passe directement à **Perdu**. Il a semé la patrouille.

---

### RAMMING

Tu percutes volontairement l'autre véhicule. Voir section 9.7 pour les détails.

- **Pré-requis** : Tu dois être à **Contact** (0).

---

### BLOQUER

Tu manœuvres pour empêcher l'adversaire de s'échapper : tu te mets en travers, tu le coinces contre un mur, tu bloques une sortie.

- **Pré-requis** : Tu dois être à **Contact** (0).
- **Effet si victoire** : L'adversaire ne peut pas augmenter la distance ce round. Même s'il gagne ses jets suivants, il reste à Contact.
- **Durée** : Jusqu'à ce qu'il te batte d'au moins 20+ ou que tu abandonnes.

> **EXEMPLE**
> 
> La patrouille est à Contact avec Koris. Elle choisit "Bloquer".
> 
> Elle gagne le jet.
> 
> → Koris est coincé. Même s'il gagne le prochain round, il ne peut pas s'éloigner tant que le blocage tient.

---

## 10.6 Le test de crash

### EN BREF

Quand tu perds un jet de poursuite de **30+** ou que tu fais un **critique d'échec**, tu risques de perdre le contrôle. Tu fais un **test de crash** pour voir si tu t'en sors.

---

### DÉCLENCHEURS

Un test de crash se déclenche quand :

- Tu perds un jet de poursuite de **30 points ou plus**.
- Tu fais un **critique d'échec** sur un jet de poursuite.
- Tu rates la manœuvre **Couper** (raccourci).
- Le MJ juge qu'un événement le justifie (obstacle soudain, sabotage).

---

### PROCÉDURE

1. Tu fais un jet de **Pilotage et conduite** avec **−10** (Difficile).
2. Applique le résultat.

|Résultat|Effet|
|---|---|
|**Réussite**|Frayeur, mais pas de dégâts. Tu gardes le contrôle.|
|**Échec**|Crash léger : le véhicule prend **2d10 dégâts** (après Abs). La distance change de **1 bande** en faveur de l'adversaire.|
|**Critique d'échec**|Crash grave : le véhicule prend **4d10 dégâts** (après Abs). **+1 Preuves** (témoins, caméras, débris).|

> **EXEMPLE**
> 
> Senna perd son jet de 35 points. Test de crash.
> 
> Jet de Pilotage (Score 45 − 10 = 35) : 48. Échec.
> 
> → Son véhicule prend 2d10 = 13 dégâts. Abs 2 → 11 dégâts sur l'Intégrité. → La distance change de 1 bande en faveur de la patrouille.

---

### DÉGÂTS AUX PASSAGERS

Lors d'un crash, le MJ peut décider que les passagers prennent des dégâts :

|Gravité du crash|Dégâts aux passagers|
|---|---|
|Crash léger (échec)|1d10 dégâts (après armure personnelle)|
|Crash grave (critique d'échec)|2d10 dégâts (après armure personnelle)|
|Crash à haute vitesse (VIT 4+)|+1d10 dégâts supplémentaires|

> **OPTION**
> 
> Pour simplifier, le MJ peut décider que les passagers ne prennent des dégâts qu'en cas de crash grave ou si le véhicule est détruit.

---

### VÉHICULE DÉTRUIT

Quand l'Intégrité d'un véhicule tombe à **0**, il est hors service :

- Il s'arrête (panne, explosion, renversement).
- Les occupants doivent continuer à pied ou trouver un autre véhicule.
- La poursuite peut continuer à pied (voir 9.10).

> **EXEMPLE**
> 
> Le véhicule de Senna avait 18 INT. Après deux crashs (11 + 9 dégâts), il est à 0.
> 
> Le MJ décrit : "Le moteur explose dans un nuage de fumée. La voiture s'immobilise en travers de la rue."
> 
> Senna doit fuir à pied.

---

## 10.7 Le ramming

### EN BREF

Le **ramming** consiste à percuter volontairement l'autre véhicule. C'est dangereux pour les deux parties, mais peut être décisif.

---

### PRÉ-REQUIS

Tu dois être à **Contact** (0) pour tenter un ramming.

---

### PROCÉDURE

1. Jets opposés : **Pilotage et conduite** (+ MAN + mod vitesse).
2. Compare les marges.

|Résultat|Effet|
|---|---|
|**Attaquant gagne**|Cible prend **2d10 + VIT** dégâts (après Abs). Attaquant prend la **moitié** (arrondi au supérieur).|
|**Attaquant gagne avec critique**|Comme ci-dessus, +1d10 dégâts supplémentaires à la cible.|
|**Attaquant perd**|Pas de ramming. La cible esquive.|
|**Attaquant perd de 30+ ou critique d'échec**|Crash automatique pour l'attaquant.|

> **EXEMPLE**
> 
> Koris (moto VIT 4) tente de percuter la berline de patrouille.
> 
> Jets opposés : Koris gagne.
> 
> Dégâts à la berline : 2d10 + 4 = 8 + 4 = **12** (− Abs 2) = **10 dégâts**.
> 
> Dégâts à la moto de Koris : 12 ÷ 2 = **6** (− Abs 1) = **5 dégâts**.
> 
> Les deux véhicules encaissent. La berline a pris plus.

---

### POURQUOI FAIRE UN RAMMING ?

Le ramming est utile pour :

- Arrêter un fuyard à tout prix.
- Détruire un véhicule ennemi.
- Créer une ouverture pour s'échapper (si l'ennemi est endommagé).

Mais c'est **risqué** :

- Tu prends aussi des dégâts.
- Si tu rates gravement, tu crashes.
- Sur une moto ou un véhicule léger, les dégâts que tu subis peuvent être fatals.

> **ASTUCE MJ**
> 
> Le ramming est cinématique. Décris l'impact, le crissement du métal, les étincelles. C'est un moment marquant.

---

## 10.8 Tir en poursuite

### EN BREF

Tirer depuis ou vers un véhicule en mouvement est difficile. Les malus dépendent de ta position et de ta stabilité.

---

### MALUS DE TIR

|Situation|Malus|
|---|---|
|**Tireur stable** (passager assis, harnais, tourelle)|−10|
|**Tireur instable** (à main levée, penché par la fenêtre)|−20|
|**Pilote qui tire** (conduit et tire en même temps)|−20, et si échec de 30+ → test de crash|

Ces malus s'ajoutent aux malus de distance et de couvert habituels.

> **EXEMPLE**
> 
> Senna est passagère. Elle tire sur le conducteur de la patrouille (distance Proche).
> 
> - Malus tireur stable : −10.
> - Pas de malus de distance (Proche = courte portée).
> - Couvert léger (cible visible mais dans un véhicule) : −10.
> 
> Total : **−20** sur son jet de Tir.

---

### COUVERT DES VÉHICULES

Une cible dans un véhicule bénéficie d'un couvert :

|Position de la cible|Couvert|Malus pour le tireur|
|---|---|---|
|Visible (fenêtre ouverte, décapotable)|Couvert léger|−10|
|Derrière vitres/structure|Couvert lourd|−20|
|Complètement caché (dans un blindé)|Pas de tir possible|—|

> **EXEMPLE**
> 
> Koris veut tirer sur le conducteur de la patrouille. Le conducteur est derrière le pare-brise (couvert lourd).
> 
> → −20 pour le couvert, en plus des autres malus.

---

### TIRER SUR UN VÉHICULE

Tu peux choisir de tirer sur le **véhicule** plutôt que sur les occupants :

- Pas de malus de couvert (le véhicule est une grosse cible).
- Les dégâts s'appliquent à l'**Intégrité** du véhicule (après Abs).
- Si le véhicule tombe à 0 INT, il est hors service.

> **EXEMPLE**
> 
> Senna tire sur la voiture de patrouille (INT 20, Abs 2) avec un pistolet (2d10+1).
> 
> Elle touche. Dégâts : 14 − 2 = **12 dégâts** à l'Intégrité.
> 
> Le véhicule passe de 20 à 8 INT. Il fume, mais roule encore.

---

### LE PILOTE QUI TIRE

Si le **pilote** décide de tirer tout en conduisant :

- **−20** sur le jet de tir.
- Si le jet de tir est un **échec de 30+** (jet > Score + 30) → **test de crash**.

> **EXEMPLE**
> 
> Koris conduit sa moto et veut tirer au pistolet. Son Score en Tir est 45.
> 
> - Malus pilote qui tire : −20 → Score effectif = 25.
> - Il fait 58. Échec de 33 points.
> 
> → Test de crash. Il a été distrait par son tir.

> **CONSEIL**
> 
> Si possible, laisse le tir aux passagers. Le pilote devrait se concentrer sur la conduite.

---

## 10.9 Complications et événements

### EN BREF

Le MJ peut ajouter des **complications** pour rendre la poursuite plus dynamique : obstacles, trafic, conditions météo, ou événements inattendus.

---

### COMPLICATIONS SUGGÉRÉES

|Complication|Effet|
|---|---|
|**Trafic dense**|Jets de poursuite à −10 pour tout le monde|
|**Obstacle soudain** (charrette, piéton, éboulement)|Jet de Pilotage immédiat ou test de crash|
|**Virage serré**|Le véhicule le moins maniable (MAN le plus bas) a −10|
|**Terrain difficile** (boue, pavés glissants, neige)|−10 aux jets, crash sur critique d'échec même sans perte de 30+|
|**Pluie / Brouillard**|−10 aux jets et aux tirs|
|**Nuit sans lumière**|Désavantage sur tous les jets|
|**Renfort ennemi**|Un nouveau poursuivant entre dans la poursuite|
|**Barrage / Checkpoint**|Choix : s'arrêter, forcer le passage, ou dévier|

> **EXEMPLE**
> 
> La poursuite traverse un marché. Le MJ annonce :
> 
> "Un marchand pousse sa charrette en travers de la rue. Tout le monde fait un jet de Pilotage immédiat ou c'est le crash."
> 
> Les deux pilotes doivent réussir un jet ou subir un test de crash.

---

### UTILISER LES VICTOIRES DE 20+

Quand tu gagnes de 20+ ou fais un critique, tu peux choisir une **complication** pour l'adversaire au lieu de +2 bandes :

|Complication infligée|Effet|
|---|---|
|**Perte de contrôle temporaire**|L'adversaire perd sa prochaine manœuvre (il se stabilise)|
|**Obstacle forcé**|L'adversaire doit faire un jet de Pilotage ou crash|
|**Dégâts mineurs**|L'adversaire prend 1d10 dégâts à l'INT (pas d'Abs)|
|**Passager secoué**|Un passager adverse a −10 sur son prochain jet|

> **EXEMPLE**
> 
> Koris gagne de 25 points. Au lieu de +2 bandes, il choisit "Obstacle forcé".
> 
> Le MJ décrit : "Tu fais une embardée qui projette des caisses sur la route. La patrouille doit faire un jet pour les éviter."

---

## 10.10 Poursuite à pied

### EN BREF

Toutes les règles de poursuite fonctionnent aussi **à pied**. On utilise **Mobilité** au lieu de Pilotage et conduite, et on ignore VIT/MAN.

---

### DIFFÉRENCES

|Élément|En véhicule|À pied|
|---|---|---|
|**Compétence**|Pilotage et conduite|Mobilité|
|**Bonus de véhicule**|MAN|—|
|**Modificateur de vitesse**|VIT|— (ou traits personnels)|
|**Ramming**|Percuter le véhicule|Plaquage (Lutte et contrôle)|
|**Crash**|Test de crash|Chute (1d10 dégâts, −1 bande)|

---

### QUAND PASSER À PIED

La poursuite passe à pied quand :

- Les véhicules sont détruits ou abandonnés.
- Le terrain ne permet plus les véhicules (escaliers, toits, forêt dense).
- Un poursuivant ou fuyard descend volontairement.

> **EXEMPLE**
> 
> Le véhicule de Senna est détruit. Elle saute et continue à pied.
> 
> Désormais, elle utilise **Mobilité** pour ses jets de poursuite.

---

### PLAQUAGE (RAMMING À PIED)

À pied, le "ramming" devient un **plaquage** :

- **Pré-requis** : Contact (0).
- **Jet** : **Lutte et contrôle** opposé à **Mobilité** de la cible.
- **Si tu gagnes** : La cible est **Saisie** (voir Chapitre 6). La poursuite s'arrête.
- **Si tu perds** : Pas de plaquage. La cible s'échappe d'une bande.

> **EXEMPLE**
> 
> Un garde rattrape Senna (Contact). Il tente un plaquage.
> 
> - Garde : Lutte et contrôle (Score 45), jet 38. Marge = +7.
> - Senna : Mobilité (Score 50), jet 52. Marge = −2.
> 
> Le garde gagne. Senna est **Saisie**. La poursuite est terminée.

---

### CHUTE (CRASH À PIED)

À pied, le "crash" devient une **chute** :

- Tu trébuches, tu glisses, tu percutes un obstacle.
- **Dégâts** : 1d10 (après armure personnelle).
- **Distance** : −1 bande en ta défaveur.

> **EXEMPLE**
> 
> Koris fait un critique d'échec en courant sur les toits. Chute.
> 
> Il prend 1d10 = 6 dégâts et perd une bande de distance.

---

## 10.11 Exemples complets

### EXEMPLE 1 : POURSUITE EN VÉHICULE

**Situation** : Koris (moto VIT 4, MAN +10) fuit deux gardes en berline (VIT 3, MAN +5).

**Préparation** :

- Distance initiale : Proche (1).
- Mod vitesse Koris : +5 (VIT 4 vs 3).
- Mod vitesse gardes : −5.

**Initiative** :

- Koris : Pilotage 45 + 10 + 5 = 60. Jet 35. Marge +25.
- Gardes : Pilotage 40 + 5 − 5 = 40. Jet 42. Marge −2.

Koris gagne largement. Il choisit d'agir en premier.

**Round 1** :

- Koris choisit "Accélérer".
- Gardes choisissent "Poursuivre".
- Jets opposés : Koris 28 (marge +32), Gardes 55 (marge −15).

Koris gagne de 47 points (victoire de 20+). Il choisit +2 bandes.

→ Distance passe de Proche (1) à **Loin (3)**.

**Round 2** :

- Koris choisit "Se cacher" (jet à −10).
- Score effectif : 60 − 10 = 50. Jet 48. Réussite.

→ Koris passe à **Perdu (4)**. Évasion réussie.

**Résultat** : Koris a semé les gardes en 2 rounds grâce à sa moto rapide et agile.

---

### EXEMPLE 2 : POURSUITE QUI TOURNE MAL

**Situation** : Senna (voiture compacte VIT 3, MAN +5) fuit un fourgon corpo (VIT 2, MAN +0).

**Préparation** :

- Distance initiale : Proche (1).
- Mod vitesse Senna : +5.
- Mod vitesse fourgon : −5.

**Initiative** : Senna gagne et agit en premier.

**Round 1** :

- Senna choisit "Couper" (raccourci risqué).
- Jets opposés : Senna 62 (marge −12), Fourgon 35 (marge +5).

Senna perd. Et comme elle a choisi "Couper", c'est un **test de crash**.

Jet de crash (Score 50 − 10 = 40) : 58. Échec.

→ Véhicule prend 2d10 = 14 − 2 = **12 dégâts** (INT passe de 18 à 6). → Distance change de 1 bande en faveur du fourgon : reste à **Proche (1)**.

**Round 2** :

- Senna choisit "Accélérer" (joue la sécurité).
- Jets opposés : Senna 38 (marge +12), Fourgon 48 (marge −8).

Senna gagne.

→ Distance passe à **Moyen (2)**.

**Round 3** :

Le fourgon a un passager qui tire.

- Tir : Score 45 − 10 (stable) − 10 (couvert léger) = 25. Jet 31. Échec.

Le tir rate. Senna continue.

- Jets de poursuite : Senna gagne encore.

→ Distance passe à **Loin (3)**.

**Round 4** :

- Senna tente "Se cacher". Jet à −10.
- Score 50 − 10 = 40. Jet 52. Échec.

Elle ne disparaît pas. Distance reste à Loin.

- Le fourgon gagne le jet opposé.

→ Distance redescend à **Moyen (2)**.

**Round 5** :

- Senna réessaie "Accélérer". Elle gagne.

→ Distance passe à **Loin (3)**.

**Round 6** :

- Senna tente encore "Se cacher". Jet 38. Réussite.

→ Elle passe à **Perdu (4)**. Évasion réussie, mais son véhicule est en mauvais état.

---

### EXEMPLE 3 : POURSUITE À PIED

**Situation** : Thom (Mobilité 50) est poursuivi par deux gardes (Mobilité 40 chacun).

**Préparation** :

- Distance initiale : Proche (1).
- Pas de modificateur de vitesse (à pied).

**Round 1** :

- Jets opposés : Thom 42 (marge +8), Garde 38 (marge +2).

Thom gagne.

→ Distance passe à **Moyen (2)**.

**Round 2** :

- Thom escalade un mur pour couper (manœuvre "Couper").
- Jets opposés : Thom 55 (marge −5), Garde 62 (marge −22).

Les deux ratent, mais Thom rate "moins mal". Il gagne quand même.

Comme c'est "Couper" et qu'il a gagné : +2 bandes.

→ Distance passe à **Perdu (4)**. Thom a semé les gardes en passant par les toits.

---

## 10.12 Résumé du chapitre

|Section|Règle|
|---|---|
|**CARACTÉRISTIQUES VÉHICULE**||
||**VIT** (1-5) : vitesse, mod = (VIT − VIT adverse) × 5|
||**MAN** (+0/+5/+10) : bonus au jet de Pilotage|
||**Abs** : réduit les dégâts|
||**INT** : santé du véhicule|
|**BANDES DE DISTANCE**||
||Contact (0) : côte à côte, ramming possible|
||Proche (1) : quelques longueurs|
||Moyen (2) : distance moyenne|
||Loin (3) : grande distance|
||Perdu (4) : évasion réussie|
|**JETS OPPOSÉS**||
||Compétence : Pilotage et conduite + MAN + mod vitesse|
||Tu gagnes : +1 bande en ta faveur|
||Tu gagnes de 20+ / critique : +2 bandes OU complication|
||Tu perds de 30+ / critique d'échec : test de crash|
|**MANŒUVRES**||
||Accélérer/Fuir : standard, +1 bande|
||Poursuivre/Coller : standard, −1 bande|
||Couper : +2 bandes si victoire, crash si échec|
||Zigzag : pas de changement, tirs à −10|
||Forcer passage : +1 bande si victoire, crash auto si échec|
||Se cacher : nécessite Loin, jet −10, Perdu si réussite|
||Ramming : nécessite Contact, voir 9.7|
|**TEST DE CRASH**||
||Jet Pilotage −10 (Difficile)|
||Réussite : frayeur, pas de dégâts|
||Échec : 2d10 dégâts, −1 bande|
||Critique d'échec : 4d10 dégâts, +1 Preuves|
|**RAMMING**||
||Nécessite Contact|
||Jets opposés Pilotage|
||Victoire : cible prend 2d10 + VIT, attaquant prend moitié|
|**TIR EN POURSUITE**||
||Tireur stable : −10|
||Tireur instable : −20|
||Pilote qui tire : −20, échec 30+ = crash|
||Couvert léger (visible) : −10|
||Couvert lourd (derrière structure) : −20|
|**À PIED**||
||Compétence : Mobilité|
||Ramming = Plaquage (Lutte vs Mobilité)|
||Crash = Chute (1d10 dégâts, −1 bande)|

---
