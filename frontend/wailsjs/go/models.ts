export namespace main {
	
	export class Stats {
	    hp: number;
	    attack: number;
	    defense: number;
	    elemental_mastery: number;
	    energy_recharge: number;
	    crit_rate: number;
	    crit_damage: number;
	    physical_damage_bonus: number;
	    elemental_damage_bonus: number;
	
	    static createFrom(source: any = {}) {
	        return new Stats(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.hp = source["hp"];
	        this.attack = source["attack"];
	        this.defense = source["defense"];
	        this.elemental_mastery = source["elemental_mastery"];
	        this.energy_recharge = source["energy_recharge"];
	        this.crit_rate = source["crit_rate"];
	        this.crit_damage = source["crit_damage"];
	        this.physical_damage_bonus = source["physical_damage_bonus"];
	        this.elemental_damage_bonus = source["elemental_damage_bonus"];
	    }
	}
	export class Character {
	    name: string;
	    level: number;
	    current_stats: Stats;
	    target_stats: Stats;
	    picture: string;
	    element: string;
	    icon: string;
	
	    static createFrom(source: any = {}) {
	        return new Character(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.level = source["level"];
	        this.current_stats = this.convertValues(source["current_stats"], Stats);
	        this.target_stats = this.convertValues(source["target_stats"], Stats);
	        this.picture = source["picture"];
	        this.element = source["element"];
	        this.icon = source["icon"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

