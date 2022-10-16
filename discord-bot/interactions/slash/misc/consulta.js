const axios = require('axios')
const { backend_url } = require('../../../config.json')
const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */

module.exports = {
	// The data needed to register slash commands to Discord.

	data: new SlashCommandBuilder()
		.setName("consulta")
		.setDescription(
			"Quer saber onder ta sua encomenda? Veja aqui"
		)
        .addStringOption(option => 
        option
            .setName('codigo')
            .setDescription('Digite o código de rastreio no padrão dos Correios: AB123456789BR')
            .setRequired(true)
        ),

	async execute(interaction) {
        const config = {
            discordId: interaction.member.id,
            trackCode: interaction.options.getString("codigo")
        } //Body data for send to the backend

        axios
            .post(backend_url+'consulta/discord', config)
            .then(res => {
                console.log(res.data)
                if(!res.data.success) return interaction.reply({content: res.data.error, ephemeral: true})

                interaction.reply({content: 'WIP'})
            })
            .catch(err => console.log(err))

        //interaction.reply({content: 'WIP'})

		//const newEmbed = new EmbedBuilder()
		// newEmbed
		// 	.setTitle(`This is a new command`)	
		// 	.setDescription(`Description goes here`)
		// 	.setColor(0xffb300);
			
		// await interaction.reply({
		// 	embeds: [newEmbed],
		// 	ephemeral: true
		// });
	},
};
