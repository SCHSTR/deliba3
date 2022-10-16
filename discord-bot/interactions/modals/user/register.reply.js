const axios = require('axios')
const { backend_url } = require('../../../config.json')

/**
 * @type {import('../../../typings').ModalInteractionCommand}
 */

 module.exports = {
	id: "registerModal",

	async execute(interaction) {
		const id = interaction.member.id
		const email = interaction.fields.getTextInputValue('userEmail')

		let body = {discordId: id, email: email}

		axios.post(backend_url + 'user/new/discord', body).then(res => {
			if(!res.data.success) return interaction.reply({content: res.data.error, ephemeral: true})
			
			interaction.reply({
				content: `Seu email \`${body.email}\` foi registrado com sucesso! Você ja pode começar a usar o Deliba!`,
				ephemeral: true
			})
		});
	},
};
