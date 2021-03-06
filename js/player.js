/* Player (Being) */
BFRL.Player = function(x,y) {
	BFRL.Being.call(this,x,y);

	// player-specific stuff
	this._gold = 0;
	this._name = "Wombat";
	this._xp = 0;
	this._xpLevel = 1;
	this._nextLevelXp = 30;
}
BFRL.Player.extend(BFRL.Being);

BFRL.Player.prototype.doRest = function() {
	// intentionally do nothing to burn a turn, TODO: rest?
}

BFRL.Player.prototype.definition = {
	"glyph":"@",
	"glyphColor":"#ff0",
	"species":"Player",
	"hitpointsRange":[100,100],
	"difficulty":1,
	"fovFactor":1,
	"weaponPool": {
		"Sword": 1
	},
	"lootPool": {
	},
	"img": "gu.jpg"
}

BFRL.Player.prototype.act = function() {
	if (this._hitpoints <= 0) {
		this._game.showGameOver();
		return;
	}

	// get everything in order to draw the player's fov
	this._game.map.updateObjectMap();
	this.drawFov();
	this.updateFovPobjs();
	this._draw();

	// update the UI
	this._game.refreshUi();

	// stop the engine and wait for next input
	this._game.engine.lock();
	window.addEventListener("keydown",this);
}

BFRL.Player.prototype.handleEvent = function(e) {
   	var keyMap = {};
    keyMap[38] = 0;
    keyMap[33] = 1;
    keyMap[39] = 2;
    keyMap[34] = 3;
    keyMap[40] = 4;
    keyMap[35] = 5;
    keyMap[37] = 6;
    keyMap[36] = 7;
 
    var code = e.keyCode;

    if (code == 32) { // spacebar
    	this.doRest();
    } else {
	    if (!(code in keyMap)) { return; }

	    var diff = ROT.DIRS[8][keyMap[code]];
	    var newX = this._x + diff[0];
	    var newY = this._y + diff[1];
	 
	    var newKey = newX + "," + newY;

	    // is it a map space
	    var moveResult = this._game.getMoveResult(this,newX,newY);
		if (moveResult.isOpen != true) {
			if (moveResult.bumpedEntity != null) {
				this.resolveBump(moveResult.bumpedEntity);
			} else {
				return;
			}
		} else {
			this.relocate(newX,newY);
			this.resolveColocation();
		}
	}
    window.removeEventListener("keydown", this);
    this._game.engine.unlock();
};

BFRL.Player.prototype.drawFov = function() {
	this.scanFov();
	this._game.fovMapCells = this.fovMapCells;
	for (var i in this.fovMapCells) {
		if (typeof this.fovMapCells[i] == 'function') { continue; };
		var mc = this.fovMapCells[i];
		if (mc) {
			if (mc == ".") {
				mc = ' ';
			}
		} else {
			mc = '';
		}
		//mc = (mc ? ' ':'');
		this._game.seenMapCells[i] = mc;
		this._game.fovMapCells[i] = mc;
	}
	this._game.drawVisibleMap();
};

BFRL.Player.prototype.resolveBump = function(pobj) {
	// attack everything (TODO: non-violent tactics)
	this.weapon.inflictDamage(pobj,this);

	// check for kill
	if (pobj._hitpoints <= 0) { // killed!
		// give "xp" for kill
		this._xp += (pobj._difficulty*3);
		if (this._xp>=this._nextLevelXp) {
			this._xpLevel += 1;
			this._nextLevelXp += Math.floor(this._xpLevel * 50);
			this._game.addLogMessage("<span class='levelup'>LEVEL UP TO " + this._xpLevel + "</span>");
			this._hitpointsMax += this._xpLevel;
			this._hitpoints = this._hitpointsMax;
		}
	}
}

BFRL.Player.prototype.resolveColocation = function() {
	// check the space we're standing on for ispassable items we might want to pick up, or get trapped by, etc.
	var x = this._x;
	var y = this._y;
	var colo_objs = this._game.map.getObjectsAtLoc(x,y,this);
	var len = colo_objs.length;
	for (var i = 0; i < len; i++) {
		var cobj = colo_objs[i];
		if (cobj.onPickup) {
			cobj.onPickup(this);
		}
		if (cobj == this._game.map.exit) {
			this._game.delveDeeper();
		}
	}
}