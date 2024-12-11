/** @format */

// EternalDev
import { using } from './ModClasses.js'

using('Terraria')

const NewProjectile =
	Projectile[
		'int NewProjectile(IEntitySource spawnSource, float X, float Y, float SpeedX, float SpeedY, int Type, int Damage, float KnockBack, int Owner, float ai0, float ai1, float ai2)'
	];

Player.DropTombstone.hook((orig, self, coins, text, direction) => {});

NPC.NPCLoot.hook((orig, npc) => {
	if (Main.netMode !== 1) {
		if (npc.townNPC) {
			const DIRECTION_MULTIPLICATE = 2;
			const ANGLE = Math.random() * 2 * Math.PI; // RNG 2 * 3.14

			NewProjectile(
				npc.GetSpawnSource_ForProjectile(),
				npc.position.X + npc.width / 2,
				npc.position.Y + npc.height / 2,

				npc.velocity.X * DIRECTION_MULTIPLICATE + ANGLE,
				npc.velocity.Y * DIRECTION_MULTIPLICATE + ANGLE,
				43,
				0,
				0,
				0,
				0,
				0,
				0
			);
		}
	}

	orig(npc);
});
