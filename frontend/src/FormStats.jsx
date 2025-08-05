export default ({title, idPrefix}) => {
    return (
        <div className="form-stats">
          <h3>{title}</h3>
          <label htmlFor={`${idPrefix}hp`}>HP</label>
          <input type="number" step="0.1" id={`${idPrefix}hp`} min="0"/>

          <label htmlFor={`${idPrefix}atk`}>ATK</label>
          <input type="number" step="0.1" id={`${idPrefix}atk`} min="0"/>

          <label htmlFor={`${idPrefix}def`}>DEF</label>
          <input type="number" step="0.1" id={`${idPrefix}def`} min="0"/>

          <label htmlFor={`${idPrefix}critRate`}>Crit Rate</label>
          <input type="number" step="0.1" id={`${idPrefix}critRate`} min="0"/>

          <label htmlFor={`${idPrefix}critDmg`}>Crit Damage</label>
          <input type="number" step="0.1" id={`${idPrefix}critDmg`} min="0"/>

          <label htmlFor={`${idPrefix}energyRecharge`}>Energy Recharge</label>
          <input type="number" step="0.1" id={`${idPrefix}energyRecharge`} min="0"/>

          <label htmlFor={`${idPrefix}em`}>Elemental Mastery</label>
          <input type="number" step="0.1" id={`${idPrefix}em`} min="0"/>

          <label htmlFor={`${idPrefix}physicalDmgBonus`}>Physical DMG Bonus</label>
          <input type="number" step="0.1" id={`${idPrefix}physicalDmgBonus`} min="0"/>

          <label htmlFor={`${idPrefix}elementalDmgBonus`}>Elemental DMG Bonus</label>
          <input type="number" step="0.1" id={`${idPrefix}elementalDmgBonus`} min="0"/>
        </div>
    );
}