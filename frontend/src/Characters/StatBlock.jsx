import StatItem from "./StatItem";

export default function ({ currentStats, targetStats }) {
  return (
  <div className="stat-block">
    <div className="stats-grid">
      <StatItem text="HP" currentStat={currentStats.hp} targetStat={targetStats.hp} 
                currentStatPath="current_stats.hp" targetStatPath="target_stats.hp" />
      <StatItem text="Attack" currentStat={currentStats.attack} targetStat={targetStats.attack} 
                currentStatPath="current_stats.attack" targetStatPath="target_stats.attack" />
      <StatItem text="Defense" currentStat={currentStats.defense} targetStat={targetStats.defense} 
                currentStatPath="current_stats.defense" targetStatPath="target_stats.defense" />
      <StatItem text="Elemental Mastery" currentStat={currentStats.elemental_mastery} targetStat={targetStats.elemental_mastery} 
                currentStatPath="current_stats.elemental_mastery" targetStatPath="target_stats.elemental_mastery" />
      <StatItem text="Energy Recharge" currentStat={currentStats.energy_recharge} targetStat={targetStats.energy_recharge} 
                currentStatPath="current_stats.energy_recharge" targetStatPath="target_stats.energy_recharge" />
      <StatItem text="Crit Rate" currentStat={currentStats.crit_rate} targetStat={targetStats.crit_rate} 
                currentStatPath="current_stats.crit_rate" targetStatPath="target_stats.crit_rate" />
      <StatItem text="Crit Damage" currentStat={currentStats.crit_damage} targetStat={targetStats.crit_damage} 
                currentStatPath="current_stats.crit_damage" targetStatPath="target_stats.crit_damage" />
      <StatItem text="Elemental Damage Bonus" currentStat={currentStats.elemental_damage_bonus} targetStat={targetStats.elemental_damage_bonus} 
                currentStatPath="current_stats.elemental_damage_bonus" targetStatPath="target_stats.elemental_damage_bonus" />
      <StatItem text="Physical Damage Bonus" currentStat={currentStats.physical_damage_bonus} targetStat={targetStats.physical_damage_bonus} 
                currentStatPath="current_stats.physical_damage_bonus" targetStatPath="target_stats.physical_damage_bonus" />
    </div>
  </div>
  );
}
