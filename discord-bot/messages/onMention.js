/**
 * @file Default Bot Mention Command
 * @author Naman Vrati
 * @since 3.0.0
 */

module.exports = {
	/**
	 * @description Executes when the bot is pinged.
	 * @author Naman Vrati
	 * @param {import('discord.js').Message} message The Message Object of the command.
	 */

	async execute(message) {
		return message.channel.send(
			`Olá ${message.author}! Se precisar de ajuda digita \`/help\` e veja os comandos disponíveis 🥺`
		);
	},
};
