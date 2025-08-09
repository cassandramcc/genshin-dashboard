import StatItem from "./StatItem";

export default function ({ currentStats, targetStats }) {

  const currentStatsPath = "current_stats."
  const targetStatsPath = "target_stats."

  function convertStatText(text) {
    return text.toLowerCase().replaceAll(" ", "_");
  }

  function createStatsBlock() {
    const statList = ["HP", "Attack", "Defense", "Elemental Mastery", "Energy Recharge", "Crit Rate", "Crit Damage", "Elemental Damage Bonus", "Physical Damage Bonus"];
    return statList.map(stat => (
      <StatItem text={stat} currentStat={currentStats[convertStatText(stat)]} targetStat={targetStats[convertStatText(stat)]} 
                currentStatPath={currentStatsPath + convertStatText(stat)} targetStatPath={targetStatsPath + convertStatText(stat)} />
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
