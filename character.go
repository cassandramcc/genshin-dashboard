package main

type Character struct {
	Name         string  `json:"name"`
	Level        int     `json:"level"`
	CurrentStats Stats   `json:"current_stats"`
	TargetStats  Stats   `json:"target_stats"`
	Picture      string  `json:"picture"`
	Element      Element `json:"element"`
	Icon         string  `json:"icon"`
	Notes        string  `json:"notes,omitempty"`
}

type Stats struct {
	HP                   float32 `json:"hp"`
	Attack               float32 `json:"attack"`
	Defense              float32 `json:"defense"`
	ElementalMastery     float32 `json:"elemental_mastery"`
	EnergyRecharge       float32 `json:"energy_recharge"`
	CritRate             float32 `json:"crit_rate"`
	CritDamage           float32 `json:"crit_damage"`
	PhysicalDamageBonus  float32 `json:"physical_damage_bonus"`
	ElementalDamageBonus float32 `json:"elemental_damage_bonus"`
}

type Element string

const (
	Anemo   Element = "anemo"
	Geo     Element = "geo"
	Electro Element = "electro"
	Dendro  Element = "dendro"
	Hydro   Element = "hydro"
	Pyro    Element = "pyro"
	Cryo    Element = "cryo"
)
