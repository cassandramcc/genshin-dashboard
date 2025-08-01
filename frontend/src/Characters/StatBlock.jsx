import StatItem from "./StatItem";

export default function ({ currentStats, targetStats }) {
  return (
  <div className="stat-block">
    <div className="stats-grid">
      <StatItem text="HP" currentStat={currentStats.hp} targetStat={targetStats.hp} />
      <StatItem text="Attack" currentStat={currentStats.attack} targetStat={targetStats.attack} />
      <StatItem text="Defense" currentStat={currentStats.defense} targetStat={targetStats.defense} />
      <StatItem text="Elemental Mastery" currentStat={currentStats.elemental_mastery} targetStat={targetStats.elemental_mastery} />
      <StatItem text="Energy Recharge" currentStat={currentStats.energy_recharge} targetStat={targetStats.energy_recharge} />
      <StatItem text="Crit Rate" currentStat={currentStats.crit_rate} targetStat={targetStats.crit_rate} />
      <StatItem text="Crit Damage" currentStat={currentStats.crit_damage} targetStat={targetStats.crit_damage} />
      <StatItem text="Elemental Damage Bonus" currentStat={currentStats.elemental_damage_bonus} targetStat={targetStats.elemental_damage_bonus} />
      <StatItem text="Physical Damage Bonus" currentStat={currentStats.physical_damage_bonus} targetStat={targetStats.physical_damage_bonus} />
    </div>
  </div>
  );
}
