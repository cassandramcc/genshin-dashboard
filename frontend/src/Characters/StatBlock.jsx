import StatItem from "./StatItem";

export default function ({ name, currentStats, targetStats }) {

  function createStatPath(name, section, text) {
    return `${name.toLowerCase()}.${section}.${convertStatText(text)}`;
  }

  function convertStatText(text) {
    return text.toLowerCase().replaceAll(" ", "_");
  }

  function createStatsBlock() {
    const statList = ["HP", "Attack", "Defense", "Elemental Mastery", "Energy Recharge", "Crit Rate", "Crit Damage", "Elemental Damage Bonus", "Physical Damage Bonus"];
    return statList.map(stat => (
      <StatItem 
        text={stat} 
        currentStat={currentStats[convertStatText(stat)]}
        targetStat={targetStats[convertStatText(stat)]} 
        currentStatPath={createStatPath(name, "current_stats", stat)} 
        targetStatPath={createStatPath(name, "target_stats", stat)} 
      />
    ));
  }

  return (
  <div className="stat-block">
    <div className="stats-grid">
      {createStatsBlock()}
      <StatItem text="CV" currentStat={currentStats.crit_rate * 2 + currentStats.crit_damage} targetStat={targetStats.crit_rate * 2 + targetStats.crit_damage} />
    </div>
  </div>
  );
}
