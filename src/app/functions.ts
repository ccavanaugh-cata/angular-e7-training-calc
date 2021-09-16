//ATK - Unit's Total attack stat after equipment
//Atkmod - Attack Changes During combat - additive
    //Increase Attack - Atk * 1.5
    //Increase Attack (Greater) - Atk * 1.75
    //Morale
    //Passive attack increase eg. BBK S2
    //Artifact attack increase ( sigurd's / Rosa Hargana)
    //Ally Skill Tree Bonuses (hazel team attack increase speciality change)
//FlatMod - Flat Damage Scaling
    //Caster's Defense
    //Caster's Max Health
    //Enemy's Max Health (dealt as damage)
//Rate - Skill Attack Rate Modifier
    //att_rate - Skill's attack stat to skill Modifier
//DamageUpMod - Damage Increase Modifier
    //bonus damage from - Caster's Lost Health
    //casters current health as %
    //enemy speed - a.cidd
    //enemy's lost health (multiplicative)
    //number of enemies past 1
    //number of enemies remaining 4-x
    //number of buffs applied to the caster
    //number of debuffs applied to the target enemy
    //number of bleed stacks on the target enemy
    //damage increase from exclusive equipment
    //damage increase from artifact effects (tonfa, radient forever, kal a dra)
    //# of focus consumed (violet only)
//EnhanceMod - skill enhancement modifier
    //skill enhance damage increase
//Flat2Mod - secondary flat modifier
    //daydream joker
//HitTypeMod - Crit dmg / crushing / miss modifier
    //Miss = .75
    //Hit = 1
    //Crushing/Strike = 1.3
    //crit = crit dmg stat modifier
    //Hit Type Priority: Miss -> Critical -> Crush/Strike -> Hit
//ElementMod - Elemental Modifier
    //advantage - bonus 15% crit
    //10% more damage (separate modifier)
    //80% chance for crushing
        //neutral - 30% chance for crushing
            //disadvantage - 50% chance to miss
            //30% chance for crushing
    //cd bonus is additive
    //evasion bonus is additive, hit chance increase is additive
//TargetDebuffMod - target debuff modifier
    //increase damage 1.15
    //decrease evasion 15%
//

export function damage() {
//[(ATK)(Atkmod)(Rate)+(FlatMod)]×(1.871)+(Flat2Mod)}(pow!)(EnhanceMod)(HitTypeMod)(ElementMod)(DamageUpMod)(TargetDebuffMod)
}

baiken {[(4011 * 1.535 * 1.6) + 0]*1.871 + (ddj)} 1.3 = 7016.25
ddj (115703 * 0.03) * 2.77(hittypemod) * 1.3(enhancemod) * 1.1(elementmod)

1975 banshee def

//DamageReduction
    //doesnt stack
//DamageTransfer
    //doesnt stack
//DefMod - Defense Modifiers
    //defense increase +60%
    //defense break -70%
    //passive defense increase / artifact defense increase
//defense break is multiplicative
    //enemy def * 0.3 * (1-0.3)(1-0.2)

export function defense() {
//(1−DamageReduction)(1−DamageTransfer) /{[(EnemyDEF)(DEFmod)(1−DefensePen)/300] +1}
}

//DebuffChance = (EffectChance) * ([100%] + caster Effectiveness - [TargetResistance])
