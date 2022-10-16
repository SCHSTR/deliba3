/**
 * @file Sample help command with slash command.
 * @author Naman Vrati & Thomas Fournier
 * @since 3.0.0
 * @version 3.3.0
 */

// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
	// The data needed to register slash commands to Discord.

	data: new SlashCommandBuilder()
		.setName("new")
		.setDescription(
			"This is a new commands"
		),

	async execute(interaction) {
		/**
		 * @type {EmbedBuilder}
		 * @description Help command's embed
		 */
		const newEmbed = new EmbedBuilder().setColor("Random");
		
		newEmbed
			.setTitle(`This is a new command`)	
			.setDescription(`Description goes here`)
			.setColor("Red");
			
		// Replies to the interaction!
		await interaction.reply({
			embeds: [newEmbed],
			ephemeral: true
		});
	},
};
