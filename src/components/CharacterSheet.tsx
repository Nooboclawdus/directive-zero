import { useState, useCallback } from 'react';

// Skills organized by attribute
const SKILLS_BY_ATTRIBUTE: Record<string, string[]> = {
  Physique: [
    'Discrétion', 'Infiltration', 'Escamotage', 'Mobilité', 'Survie', 'Pistage',
    'Escrime', 'Armes d\'hast', 'Contondants', 'Archerie', 'Arbalétrie', 'Tir',
    'Défense', 'Lutte et contrôle', 'Tactique', 'Pilotage et conduite', 'Équitation'
  ],
  Influence: [
    'Étiquette', 'Identité', 'Persuasion', 'Mensonge', 'Négociation', 'Intimidation',
    'Interrogatoire', 'Commandement', 'Empathie', 'Contacts', 'Bureaucratie', 'Performance'
  ],
  Perception: [
    'Enquête', 'Surveillance', 'Forensique', 'Médecine', 'Soins de terrain', 'Toxicologie',
    'Linguistique', 'Anthropologie', 'Histoire', 'Théologie', 'Réseaux sociaux', 'Économie', 'Lecture'
  ],
  Technique: [
    'Ingénierie', 'Sécurité matérielle', 'Contournement', 'Intrusion numérique', 'Exploitation',
    'Drones', 'Faux et copies', 'Artisanat', 'Chimie', 'Destruction', 'Transport sécurisé',
    'Effacement', 'Explosifs'
  ],
};

const RANKS = [
  { label: '—', value: 0 },
  { label: 'Formé (+10)', value: 10 },
  { label: 'Expert (+15)', value: 15 },
  { label: 'Maître (+20)', value: 20 },
];

const FONCTIONS = ['—', 'Censeur', 'Effaceur', 'Synthète', 'Ancriste', 'Porteur', 'Limier'];

interface SkillData {
  rank: number;
  speciality: string;
}

export default function CharacterSheet() {
  // Identity
  const [name, setName] = useState('');
  const [cover, setCover] = useState('');
  const [concept, setConcept] = useState('');
  const [fonction, setFonction] = useState('—');

  // Attributes (total 160, each 20-60)
  const [attributes, setAttributes] = useState({
    Physique: 40,
    Influence: 40,
    Perception: 40,
    Technique: 40,
  });

  // Resistances
  const [resistances, setResistances] = useState({
    Volonté: 40,
    'Sang-froid': 35,
    Endurance: 30,
    Vigilance: 25,
  });

  // Skills
  const [skills, setSkills] = useState<Record<string, SkillData>>({});

  // Traits
  const [avantage, setAvantage] = useState('');
  const [inconvenient, setInconvenient] = useState('');

  // Gauges — editable current / max
  const [stressCurrent, setStressCurrent] = useState(0);
  const [stressMax, setStressMax] = useState(10);
  const [determinationCurrent, setDeterminationCurrent] = useState(1);
  const [determinationMax, setDeterminationMax] = useState(5);

  // Equipment & Notes
  const [equipment, setEquipment] = useState('');
  const [notes, setNotes] = useState('');

  const totalAttributes = Object.values(attributes).reduce((a, b) => a + b, 0);
  const santeMax = 10 + Math.floor(attributes.Physique / 5);

  const setAttr = useCallback((attr: string, val: number) => {
    const clamped = Math.max(20, Math.min(60, val));
    setAttributes(prev => ({ ...prev, [attr]: clamped }));
  }, []);

  const setRes = useCallback((res: string, val: number) => {
    const clamped = Math.max(20, Math.min(60, val));
    setResistances(prev => ({ ...prev, [res]: clamped }));
  }, []);

  const setSkill = useCallback((name: string, field: keyof SkillData, value: number | string) => {
    setSkills(prev => ({
      ...prev,
      [name]: { ...(prev[name] || { rank: 0, speciality: '' }), [field]: value },
    }));
  }, []);

  const skillPointsUsed = Object.values(skills).reduce((total, s) => {
    let cost = 0;
    if (s.rank >= 10) cost += 1; // Formé
    if (s.rank >= 15) cost += 1; // Expert
    if (s.rank >= 20) cost += 1; // Maître
    if (s.speciality) cost += 1;
    return total + cost;
  }, 0);

  const exportJSON = () => {
    const data = {
      identite: { nom: name, couverture: cover, concept, fonction },
      attributs: attributes,
      resistances,
      competences: skills,
      jauges: {
        santeMax,
        stressCurrent,
        stressMax,
        determinationCurrent,
        determinationMax,
      },
      traits: { avantage, inconvenient },
      equipement: equipment,
      notes,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name || 'agent'}-directive-zero.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => window.print();

  const importJSON = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,application/json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target?.result as string);
          // Restore identity
          if (data.identite) {
            if (data.identite.nom) setName(data.identite.nom);
            if (data.identite.couverture) setCover(data.identite.couverture);
            if (data.identite.concept) setConcept(data.identite.concept);
            if (data.identite.fonction) setFonction(data.identite.fonction);
          }
          // Restore attributes
          if (data.attributs) {
            setAttributes(prev => ({ ...prev, ...data.attributs }));
          }
          // Restore resistances
          if (data.resistances) {
            setResistances(prev => ({ ...prev, ...data.resistances }));
          }
          // Restore skills
          if (data.competences) {
            setSkills(data.competences);
          }
          // Restore gauges
          if (data.jauges) {
            if (data.jauges.stressCurrent !== undefined) setStressCurrent(data.jauges.stressCurrent);
            if (data.jauges.stressMax !== undefined) setStressMax(data.jauges.stressMax);
            if (data.jauges.determinationCurrent !== undefined) setDeterminationCurrent(data.jauges.determinationCurrent);
            if (data.jauges.determinationMax !== undefined) setDeterminationMax(data.jauges.determinationMax);
          }
          // Restore traits
          if (data.traits) {
            if (data.traits.avantage) setAvantage(data.traits.avantage);
            if (data.traits.inconvenient) setInconvenient(data.traits.inconvenient);
          }
          // Restore equipment & notes
          if (data.equipement) setEquipment(data.equipement);
          if (data.notes) setNotes(data.notes);
        } catch (err) {
          alert('Erreur : fichier JSON invalide');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* HEADER + ACTIONS */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 no-print">
        <h1 className="heading text-3xl text-crimson">Fiche d'Agent</h1>
        <div className="flex flex-wrap gap-3">
          <button onClick={handlePrint} className="btn-secondary">📄 Export PDF</button>
          <button onClick={exportJSON} className="btn-primary">📤 Export JSON</button>
        </div>
      </div>

      {/* IDENTITY */}
      <section className="sheet-section">
        <h2 className="section-title">Identité</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="field-label">Nom de couverture</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} className="field-input" placeholder="ex: Senna Var'eth" />
          </div>
          <div>
            <label className="field-label">Concept opérationnel</label>
            <input type="text" value={concept} onChange={e => setConcept(e.target.value)} className="field-input" placeholder="ex: Technicienne de terrain, curieuse" />
          </div>
          <div>
            <label className="field-label">Détail de couverture</label>
            <input type="text" value={cover} onChange={e => setCover(e.target.value)} className="field-input" placeholder="ex: Marchande de sel" />
          </div>
          <div>
            <label className="field-label">Fonction</label>
            <select value={fonction} onChange={e => setFonction(e.target.value)} className="field-input">
              {FONCTIONS.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* ATTRIBUTES */}
      <section className="sheet-section">
        <h2 className="section-title">
          Attributs
          <span className={`ml-3 text-sm ${totalAttributes === 160 ? 'text-green-400' : 'text-red-400'}`}>
            ({totalAttributes}/160)
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Object.entries(attributes).map(([attr, val]) => (
            <div key={attr} className="text-center">
              <label className="field-label block mb-2">{attr}</label>
              <input
                type="number"
                min={20} max={60}
                value={val}
                onChange={e => setAttr(attr, parseInt(e.target.value) || 20)}
                className="field-input text-center text-2xl font-bold w-full"
              />
              <div className="text-xs text-gray-500 mt-1">20–60</div>
            </div>
          ))}
        </div>
      </section>

      {/* RESISTANCES */}
      <section className="sheet-section">
        <h2 className="section-title">Résistances <span className="text-sm text-gray-400 ml-2">(répartir 40 / 35 / 30 / 25)</span></h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Object.entries(resistances).map(([res, val]) => (
            <div key={res} className="text-center">
              <label className="field-label block mb-2">{res}</label>
              <input
                type="number"
                min={20} max={60}
                value={val}
                onChange={e => setRes(res, parseInt(e.target.value) || 20)}
                className="field-input text-center text-2xl font-bold w-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* JAUGES */}
      <section className="sheet-section">
        <h2 className="section-title">Jauges</h2>
        <div className="grid grid-cols-3 gap-6 text-center">
          <div className="gauge-box">
            <div className="gauge-label">Santé max</div>
            <div className="gauge-value text-green-400">{santeMax}</div>
            <div className="gauge-formula">10 + (Physique ÷ 5)</div>
          </div>
          <div className="gauge-box">
            <div className="gauge-label">Stress</div>
            <div className="gauge-value text-crimson gauge-editable">
              <input
                type="number"
                min={0}
                max={stressMax}
                value={stressCurrent}
                onChange={e => setStressCurrent(Math.max(0, Math.min(stressMax, parseInt(e.target.value) || 0)))}
                className="gauge-input"
              />
              <span className="gauge-separator">/</span>
              <input
                type="number"
                min={1}
                max={20}
                value={stressMax}
                onChange={e => setStressMax(Math.max(1, Math.min(20, parseInt(e.target.value) || 10)))}
                className="gauge-input"
              />
            </div>
            <div className="gauge-formula">Critique à 8+</div>
          </div>
          <div className="gauge-box">
            <div className="gauge-label">Détermination</div>
            <div className="gauge-value text-cyan gauge-editable">
              <input
                type="number"
                min={0}
                max={determinationMax}
                value={determinationCurrent}
                onChange={e => setDeterminationCurrent(Math.max(0, Math.min(determinationMax, parseInt(e.target.value) || 0)))}
                className="gauge-input"
              />
              <span className="gauge-separator">/</span>
              <input
                type="number"
                min={1}
                max={10}
                value={determinationMax}
                onChange={e => setDeterminationMax(Math.max(1, Math.min(10, parseInt(e.target.value) || 5)))}
                className="gauge-input"
              />
            </div>
            <div className="gauge-formula">Relance 1 jet raté</div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="sheet-section">
        <h2 className="section-title">
          Compétences
          <span className={`ml-3 text-sm ${skillPointsUsed <= 12 ? 'text-green-400' : 'text-red-400'}`}>
            ({skillPointsUsed}/12 points)
          </span>
        </h2>

        {Object.entries(SKILLS_BY_ATTRIBUTE).map(([attr, skillList]) => (
          <div key={attr} className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan mb-3 border-b border-gray-700 pb-1">
              {attr} ({attributes[attr as keyof typeof attributes]})
            </h3>
            <div className="space-y-2">
              {skillList.map(skill => {
                const s = skills[skill] || { rank: 0, speciality: '' };
                const attrVal = attributes[attr as keyof typeof attributes];
                const score = attrVal + s.rank + (s.speciality ? 10 : 0);
                return (
                  <div key={skill} className="flex flex-col sm:grid sm:grid-cols-12 gap-1 sm:gap-2 sm:items-center text-sm py-1 border-b border-gray-800 sm:border-0">
                    <div className="sm:col-span-3 text-gray-300 font-medium sm:font-normal">{skill}</div>
                    <div className="flex gap-2 sm:contents">
                      <div className="flex-1 sm:col-span-3">
                        <select
                          value={s.rank}
                          onChange={e => setSkill(skill, 'rank', parseInt(e.target.value))}
                          className="field-input text-xs py-1 w-full"
                        >
                          {RANKS.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
                        </select>
                      </div>
                      <div className="flex-1 sm:col-span-4">
                        <input
                          type="text"
                          value={s.speciality}
                          onChange={e => setSkill(skill, 'speciality', e.target.value)}
                          className="field-input text-xs py-1 w-full"
                          placeholder="Spécialité"
                        />
                      </div>
                      <div className="w-10 sm:col-span-2 text-right font-mono font-bold self-center">
                        {s.rank > 0 ? (
                          <span className={score >= 60 ? 'text-green-400' : 'text-gray-300'}>{score}</span>
                        ) : (
                          <span className="text-gray-600">—</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* TRAITS */}
      <section className="sheet-section">
        <h2 className="section-title">Traits</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="field-label">Avantage</label>
            <input type="text" value={avantage} onChange={e => setAvantage(e.target.value)} className="field-input" placeholder="ex: Contact fiable" />
          </div>
          <div>
            <label className="field-label">Inconvénient</label>
            <input type="text" value={inconvenient} onChange={e => setInconvenient(e.target.value)} className="field-input" placeholder="ex: Recherché" />
          </div>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section className="sheet-section">
        <h2 className="section-title">Équipement</h2>
        <textarea
          value={equipment}
          onChange={e => setEquipment(e.target.value)}
          className="field-input w-full h-32"
          placeholder="Liste ton équipement ici..."
        />
      </section>

      {/* NOTES */}
      <section className="sheet-section">
        <h2 className="section-title">Notes</h2>
        <textarea
          value={notes}
          onChange={e => setNotes(e.target.value)}
          className="field-input w-full h-32"
          placeholder="Notes de mission, contacts, objectifs..."
        />
      </section>
    </div>
  );
}
