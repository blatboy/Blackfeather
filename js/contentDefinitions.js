/* Armory (list of pre-defined weapons) 
	JSON-style data */
	var Armory = {
		"Sword": {
			"label":"Sword",
			"damageType":"SLASH",
			"damageRange":[6,12],
			"glyph":"/",
			"label":"Sword"		
		},
		"Dagger": {
			"label":"Dagger",
			"damageType":"SLASH",
			"damageRange":[2,6],
			"glyph":"'"	
		},
		"Club": {
			"label":"Club",
			"damageType":"BLUNT",
			"damageRange":[1,6],
			"glyph":"!"
		}
	}

/* MonsterManual 
	JSON-style data */
	var MonsterManual = {
		"Artist" : {
			"glyph":"a",
			"glyphColor":"#333",
			"species":"Artist",
			"hitpointsRange":[4,13],
			"difficulty":2,
			"fovFactor":1,
			"weaponPool": {
				"WeaponArbitrary" : [7,8,'HEAT','Thingy'],
				"WeaponArbitrary" : [7,8,'HEAT','Doohickey'],
				"WeaponArbitrary" : [7,8,'HEAT','Implement'],
				"WeaponArbitrary" : [7,13,'PIERCE','Pen']
			},
			"lootPool": {
				"GoldPile": 1
			},
			"img": "gu.jpg"
		},

		"Kobold" : {
			"glyph":"k",
			"glyphColor":"#330",
			"species":"Kobold",
			"hitpointsRange":[4,13],
			"difficulty":2,
			"fovFactor":1.2,
			"weaponPool": {
				"Sword": 3,
				"Club": 2,
				"Dagger":1
			},
			"lootPool": {
				"GoldPile": 10,
				"GoldPile": 20,
				"GoldPile": 2,
			},
			"img": "kobold.jpg"
		},

		"Orq" : {
			"glyph":"o",
			"glyphColor":"#330",
			"species":"Orq",
			"hitpointsRange":[25,45],
			"difficulty":6,
			"fovFactor":1,
			"weaponPool": {
				"Sword": 3,
				"Club": 2,
				"Dagger":1
			},
			"lootPool": {
				"GoldPile": 20,
				"GoldPile": 50,
				"GoldPile": 5
			},
			"img": "orq.jpg"
		},

		"Lion" : {
			"glyph":"l",
			"glyphColor":"#000",
			"species":"Lion",
			"hitpointsRange":[25,45],
			"difficulty":5,
			"fovFactor":1,
			"weaponPool": {
				"WeaponArbitrary": [6,18,'SLASH','Slashing Claws']
			},
			"lootPool": {
				"Tooth": 1
			},
			"img": "lion.jpg"
		},

		"Halfling" : {
			"glyph":"h",
			"glyphColor":"#151",
			"species":"Hipster Halfling",
			"hitpointsRange":[11,30],
			"difficulty":4,
			"fovFactor":1.5,
			"weaponPool": {
				"Club": 2,
				"Dagger":1
			},
			"lootPool": {
				"GoldPile": 10,
				"GoldPile": 20,
				"Mushroom": 5
			},
			"img": "halfling.jpg"
		},

		"Bob" : {
			"glyph":"b",
			"glyphColor":"#005",
			"species":"Bob",
			"hitpointsRange":[12,36],
			"difficulty":8,
			"fovFactor":2,
			"weaponPool": {
				"Club": 2,
				"WeaponArbitrary" : [6,18,'BLUNT','Bawdy Puppet']
			},
			"lootPool": {
				"GoldPile": 10,
				"GoldPile": 20,
				"Mushroom": 5
			},
			"img": "bob.jpg"
		},

		"Goblin" : {
			"glyph":"g",
			"glyphColor":"#050",
			"species":"Goblin",
			"hitpointsRange":[5,30],
			"difficulty":4,
			"fovFactor":2,
			"weaponPool": {
				"Club": 2,
				"Dagger":1,
			},
			"lootPool": {
				"GoldPile": 10,
				"GoldPile": 20,
				"GoldPile": 5,
				"Mushroom": 5
			},
			"img": "goblin.jpg"
		},

		"TreeGnome" : {
			"glyph":"t",
			"glyphColor":"#555",
			"species":"Tree Gnome",
			"hitpointsRange":[10,40],
			"difficulty":10,
			"fovFactor":1.2,
			"weaponPool": {
				"Club": 2,
				"Dagger":1,
				"Sword":1
			},
			"lootPool": {
				"GoldPile": 10,
				"Mushroom": 20
			},
			"img": "gnome.jpg"
		},

		"Shrub" : {
			"glyph":"s",
			"glyphColor":"#484",
			"species":"Shrub",
			"hitpointsRange":[20,40],
			"difficulty":12,
			"fovFactor":2,
			"weaponPool": {
				"WeaponArbitrary" : [12,24,'SLASH','Projectile Nuts'],
				"WeaponArbitrary" : [10,25,'BLUNT','Buggery Root']
			},
			"lootPool": {
				"GoldPile": 50,
				"GoldPile": 150,
				"GoldPile": 70,
				"Mushroom": 10
			},
			"img": "shrub.jpg"
		},

		"Minotaur" : {
			"glyph":"m",
			"glyphColor":"#444",
			"species":"Minotaur",
			"hitpointsRange":[30,60],
			"difficulty":20,
			"fovFactor":3,
			"weaponPool": {
				"WeaponArbitrary" : [12,24,'SLASH','Axe'],
				"WeaponArbitrary" : [10,25,'PIERCE','Horny Gore']
			},
			"lootPool": {
				"GoldPile": 50,
				"GoldPile": 150,
				"GoldPile": 70,
				"Mushroom": 10
			},
			"img": "minotaur.jpg"
		},

		"Grell" : {
			"glyph":"G",
			"glyphColor":"#000",
			"species":"Grell",
			"hitpointsRange":[80,120],
			"difficulty":70,
			"fovFactor":3,
			"weaponPool": {
				"WeaponArbitrary" : [14,32,'HEAT','Thwippy Tentacle']
			},
			"lootPool": {
				"GoldPile": 40,
				"GoldPile": 80,
				"GoldPile": 120,
				"Mushroom": 100,
				"BlackFeather": 1
			},
			"img": "grell.jpg"
		},

		"Cyclops" : {
			"glyph":"C",
			"glyphColor":"#922",
			"species":"Cyclops",
			"hitpointsRange":[45,75],
			"difficulty":40,
			"fovFactor":5,
			"weaponPool": {
				"WeaponArbitrary" : [9,32,'BLUNT','Giant Club'],
				"WeaponArbitrary" : [10,30,'HEAT','Gaze']
			},
			"lootPool": {
				"GoldPile": 100,
				"Mushroom": 50
			},
			"img": "cyclops.jpg"
		},

		"Demon" : {
			"glyph":"D",
			"glyphColor":"#922",
			"species":"Demon",
			"hitpointsRange":[60,100],
			"difficulty":55,
			"fovFactor":4,
			"weaponPool": {
				"WeaponArbitrary" : [10,35,'HEAT','Hellstank']
			},
			"lootPool": {
				"GoldPile": 100,
				"Mushroom": 50
			},
			"img": "demon.jpg"
		}
	}
