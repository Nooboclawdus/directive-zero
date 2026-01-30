---
layout: ../../layouts/ContentLayout.astro
title: "Matériel"
description: "Équipement, armes, armures et gadgets de Directive Zéro"
---

# Tableau de matériel

---

## 1) Échelle technologique et Fuite

### 1.1 Tiers (époques)
Utilise ces tiers pour calculer la Fuite effective.

| Tier | Époque | Repère |
|---:|---|---|
| 0 | Primitif | pierre, os, feu brut |
| 1 | Antique | bronze/fer, cités, ingénierie simple |
| 2 | Médiéval | acier, armures, fortifications, guildes |
| 3 | Renaissance | poudre noire, imprimerie, débuts proto-industriels |
| 4 | Industriel | machine, vapeur, production de masse |
| 5 | Moderne | armes à feu modernes, radio, chimie avancée |
| 6 | Numérique | capteurs, réseaux, miniaturisation |
| 7 | Spatial | propulsion, matériaux avancés, médecine de pointe |
| 8 | Hypertech | énergie exotique, champs, nanotech ouverte |

### 1.2 Fuite (base) et Fuite effective
Chaque objet a une **Fuite (base)** de 0 à 3.

- **0**: banal pour l’époque, aucune preuve “technique”.
- **1**: rare, notable, mais explicable.
- **2**: clairement anormal, difficile à expliquer sans récit fort.
- **3**: impossible à expliquer, “miracle” ou preuve irréfutable.

**Fuite effective** sur une planète:
- ΔTech = max(0, Tier_objet − ISO_planète)
- Fuite effective = min(3, Fuite(base) + ΔTech)

Exemple: fusil d’assaut (tier 5, fuite base 1) sur monde médiéval (tier 2) => ΔTech 3 => fuite effective 3.

### 1.3 Quand tester la Fuite
Si un objet à fuite effective ≥ 1 est utilisé de façon **observable** (combat public, démonstration, caméras/logs, récupération possible):
- fais un **Vigilance**.
- Échec: +1 **Preuves**.
- Échec critique: +1 Preuves et +1 **Compromission**.
- Si le contexte est public ou politique: +1 **Alerte** en plus.

Note: un objet peut être utilisé sans test si personne ne peut l’observer ni le récupérer et si aucune conséquence ne persiste.

---

## 2) Dégâts et armures (module minimal)

### 2.1 Dégâts
Sur une attaque réussie, lance les dégâts indiqués.

Notation:
- `Xd10+Y` avec minimum 1.

### 2.2 Absorption d’armure (Abs)
Une armure donne une **Abs**.
- Dégâts subis = max(0, dégâts − Abs).
- Si dégâts subis = 0, la cible prend quand même **+1 Stress** si l’attaque était dangereuse (sauf critique de défense qui annule l’attaque).

### 2.3 Traits (glossaire)
Les traits sont des mots-clés. Certains ont un effet mécanique direct, le reste sert de guide fiction.

Traits à effet mécanique direct:
- **Perforant**: ignore 2 points d’Abs. **Perforant+**: ignore 4.
- **Brisant**: contre armures rigides (plates, plaques), +1d10 dégâts. Le MJ peut imposer désavantage si la cible est très mobile.
- **Tranchant**: si la cible a Abs 0–1, +1 dégâts (avant Abs). Si la cible a Abs ≥ 4, -1 dégâts (après Abs, min 0). **Tranchant+**: +2 / -2.
- **Rafale**: sur réussite, au choix: +1d10 dégâts OU toucher 2 cibles proches. Usage observable: test de Fuite obligatoire (bruit, témoins).
- **Silencieux**: usage plus discret. Si l’usage est observable, -1 Alerte (min 0) par rapport à une arme assourdissante, mais ne réduit pas Preuves matérielles.
- **Assourdissant**: si usage audible, +1 Alerte (min 0).

Tags surtout fiction (effet au MJ):
- **Non-létal**: met hors de combat sans tuer (sauf choix contraire).
- **Discret**: facile à dissimuler. Option simple: Enc -1 (min 0) quand tu le portes.
- **Allonge**: avantage de portée (tenir un couloir, contrôler l’espace).
- **Formation**: excellent en ligne (pique), faible en duel serré.
- **Imprévisible**: difficile à parer, utile contre boucliers (au MJ).
- **Rechargement / lent / très lent**: cadence faible.
- **Poudre**: fumée, odeur, traces.
- **Zone / Zone courte**: touche plusieurs cibles dans un cône ou une zone (au MJ).
- **Lent**: prise de visée, désavantage si tu es pressé ou dérangé.
- **Électrique**: étourdit, non-létal, souvent très visible à l’usage.
- **Signature / Signature forte**: usage facilement remarqué. Considère l’usage comme “observable” même en intérieur semi-public.
- **Silencieux relatif**: moins bruyant, mais pas forcément discret (pas de réduction automatique d’Alerte).
- **Couverture**: utile pour se mettre à couvert (pavois), protection surtout situationnelle.
- **Souple / Rigide / Anti-tranchant / Polyvalent / Limité / Balistique / Balistique+ / Bio/Chimie / Assistée**: tags d’armure, effet au MJ (mobilité, chaleur, fatigue, visibilité, etc.).

Tu peux rester simple: ignorer ces traits et ne garder que dégâts et Abs.

---


## Sections

- [**Armes**](/materiel/armes) — Armes de corps à corps et armes à distance
- [**Armures**](/materiel/armures) — Armures, protections et boucliers
- [**Équipement**](/materiel/equipement) — Gadgets, cybernétique, véhicules
