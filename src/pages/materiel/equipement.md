---
layout: ../../layouts/ContentLayout.astro
title: "Équipement"
description: "Outils, gadgets, implants cybernétiques et véhicules"
---

# 9) Outils et gadgets (Tier 6-8)

| Outil                             | Tier | Effet                                                                                             | Fuite(base) | Enc |
| --------------------------------- | ---: | ------------------------------------------------------------------------------------------------- | ----------: | --: |
| Commlink chiffré                  |    6 | Communications discrètes. +10 OpSec (comms) si utilisé correctement                               |           1 |   0 |
| Brouilleur courte portée          |    6 | Désavantage sur capteurs/drone proches. Usage = +1 Alerte si public                               |           2 |   1 |
| Kit forensique terrain            |    6 | +10 Forensique pour relever/effacer traces simples                                                |           1 |   1 |
| Kit intrusion (lockpick + bypass) |    6 | +10 Sécurité matérielle sur serrures standard                                                     |           1 |   1 |
| Drone micro-recon                 |    6 | Recon. +10 Drone et micro-systèmes en environnement urbain                                        |           2 |   1 |
| EMP grenade                       |    7 | Zone courte: implants/électronique. Endurance (implants) ou Tech (appareils) sinon Glitch 1 scène |           2 |   1 |
| Caméra araignée (jetable)         |    6 | Pose rapide, renvoie flux. -10 Couverture si découverte                                           |           1 |   0 |
| Nanokit médical                   |    7 | Premiers secours: +10 Médecine et permet 2d10 une fois/mission                                    |           2 |   1 |
| Mousse polymère (scellage)        |    7 | Bloque une porte, colmate. +10 Ingénierie en urgence                                              |           1 |   1 |

---

# 10) Cybernétique (implants, prothèses, puces)

Colonnes implants:
- **CN**: charge neurale
- **Actif**: nécessite action/réaction indiquée

| Implant | Tier | CN | Effet                                                                                                     | Contrepartie | Fuite(base) | Enc |
|---|---:|---:|---|---|---:|---:|
| Interface neurale / Port de puce | 7 | 1 | Permet d’utiliser des puces de compétences (10.2). +10 Exploitation (terminaux) si câblé                  | Trace possible en clinique | 1 | 0 |
| Jack direct (deck-link) | 7 | 1 | Permet hacking “en live” sans malus de latence. Sans jack: -10 Intrusion numérique sur actions temps réel | Visible en scan | 1 | 0 |
| Optiques augmentées | 7 | 1 | +10 Surveillance (visuel) et annule un malus de pénombre (-10)                                            | Signature IR, logs possibles | 1 | 0 |
| Audio-filtre | 7 | 1 | +10 Surveillance (sons/voix)                                                                              | Sensible aux EMP (Glitch) | 0 | 0 |
| Dermal weave | 7 | 2 | **Abs +1** (cumulable avec armure)                                                                        | -5 Discrétion (rigidité) | 1 | 0 |
| Plaquage dermique lourd | 8 | 3 | **Abs +2** (cumulable)                                                                                    | Signature + stress: à chaque combat, +1 Stress | 2 | 0 |
| Prothèse bras standard | 7 | 1 | Ignore malus “main inutilisable”. +5 Contondants                                                          | Dossier clinique | 0 | 0 |
| Bras renforcé | 7 | 2 | +10 Lutte et contrôle (saisir/désarmer) OU +10 Contondants (choisis à la pose)                            | Visible aux scanners | 1 | 0 |
| Lame rétractable | 7 | 2 | Arme intégrée: 2d10-1, Perforant, Discret                                                                 | Si découverte: -1 Couverture | 1 | 0 |
| Jambes myomères | 7 | 2 | +10 Mobilité (sprint/franchissement)                                                                      | Si sprint prolongé: +1 Stress | 1 | 0 |
| Stabilisateur adrénaline (Actif) | 7 | 2 | **Action**: ignore Malmené pour 1 action OU avantage Terrain 1 jet                                        | Après usage: +1 Stress | 2 | 0 |
| Co-processeur d’analyse (Actif) | 7 | 2 | **Action**: +20 sur 1 jet Analyse (Enquête/Forensique/Crypto)                                             | Après usage: +1 Stress | 2 | 0 |
| Camouflage thermo-optique (Actif) | 8 | 3 | **Action**: Avantage Discrétion 1 minute                                                                  | Chaque usage: +1 Preuves (télémétrie) | 3 | 1 |
| Filtre toxines | 7 | 1 | Avantage sur Endurance vs toxines/gaz                                                                     | Nécessite maintenance | 1 | 0 |

## 10.2 Puces de compétences (consommables)

| Puce | Tier | Type | Effet | Fuite(base) | Enc |
|---|---:|---|---|---:|---:|
| Puce Base: Conduite | 7 | Base (Formé) | Formé sur Pilotage et conduite (véhicules) pendant 1 mission | 1 | 0 |
| Puce Base: Intrusion | 7 | Base (Formé) | Formé sur Intrusion numérique pendant 1 mission | 2 | 0 |
| Puce Spé: Forensic evasion | 7 | Spécialité | +10 Intrusion numérique (Forensic evasion) 1 mission | 2 | 0 |
| Puce Spé: Déguisement | 7 | Spécialité | +10 Identité (Déguisement) 1 mission | 1 | 0 |
| Puce Spé: Micro-drones | 7 | Spécialité | +10 Drone et micro-systèmes (Micro-drones) 1 mission | 1 | 0 |

Note: usage d’une puce = +1 Stress par scène où elle est sollicitée (REGLES 12.5).

---

# 11) Véhicules et plateformes (Tier 6-8)

Colonnes:
- **VIT**: vitesse (1–5)
- **MAN**: bonus de maniabilité au jet (0/+5/+10)
- **INT**: intégrité (points de “Santé”)

| Véhicule | Tier | VIT | MAN | INT | Abs | Traits | Fuite(base) |
|---|---:|---:|---:|---:|---:|---|---:|
| Moto urbaine | 7 | 4 | +10 | 12 | 1 | Agile | 1 |
| Voiture compacte | 7 | 3 | +5 | 18 | 2 | Banale | 1 |
| Berline corpo | 7 | 3 | +5 | 20 | 2 | Verrou biométrique | 2 |
| Fourgon utilitaire | 7 | 2 | +0 | 22 | 2 | Grand volume | 1 |
| Fourgon blindé léger | 7 | 2 | +0 | 25 | 4 | Blindé, lourd | 2 |
| AV / VTOL taxi | 7 | 4 | +0 | 20 | 2 | Vol, Signature | 2 |
| Drone de poursuite (moyen) | 7 | 4 | +5 | 10 | 1 | Capteurs, Silencieux relatif | 2 |
| APC corpo | 8 | 3 | +0 | 35 | 6 | Blindé+, Signature forte | 3 |
| Moto furtive | 8 | 4 | +10 | 14 | 1 | Discrète, IFF spoof (option) | 2 |

Notes:
- En poursuite, applique +5 par point de VIT d’avance.
- Une AV/VTOL en ville attire souvent des capteurs: la Fuite se traduit par **Preuves** si tu ne nettoies pas.
