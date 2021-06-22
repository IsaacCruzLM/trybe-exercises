const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonDamage = (dragon) => Math.ceil(Math.random()*(dragon.strength - 15)) + 15;

  const warriorDamage = (warrior) => Math.ceil(Math.random()*((warrior.strength * warrior.weaponDmg) - warrior.strength)) + warrior.strength;

  const mageTurn = (mage) => {
    if (mage.mana < 15) {
        return {
            damage: 'Não possui mana suficiente',
            manaCost: 0,
        }
    }
    return {
        damage: Math.ceil(Math.random()*(mage.intelligence*2 - mage.intelligence)) + mage.intelligence,
        manaCost: 15,
    }
  }

  const gameActions = {
    // Crie as HOFs neste objeto.
    warriorTurning: (callback, dragon, warrior) => {
      warrior.damage = callback(warrior);
      dragon.healthPoints -= warrior.damage;
    },
    mageTurning: (callback, dragon, mage) => {
      mage.damage = callback(mage).damage;
      dragon.healthPoints -= mage.damage;
      mage.mana -= callback(mage).manaCost;
    },
    dragonTurning: (callback, dragon, mage, warrior) => {
      dragon.damage = callback(dragon);
      mage.healthPoints -= dragon.damage;
      warrior.healthPoints -= dragon.damage;
    },
    battleMembers: () => console.log(battleMembers),
  };

  for (let index = 0; dragon.healthPoints > 0; index = index) {
    gameActions.warriorTurning(warriorDamage, dragon, warrior);
    gameActions.mageTurning(mageTurn, dragon, mage);
    gameActions.dragonTurning(dragonDamage, dragon, mage, warrior);
    gameActions.battleMembers(dragon, mage, warrior);
  }

  console.log("Dragon is DEAD!!!")