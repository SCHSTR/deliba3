// Deconstructed the constants we need in this file.
const { SlashCommandBuilder, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ComponentType } = require("discord.js");

module.exports = {
    // The data needed to register slash commands to Discord.

    data: new SlashCommandBuilder()
        .setName("registro")
        .setDescription(
            "Se registre no app para conseguir usar o bot 🦾"
        ),

    async execute(interaction) {
        const registerModal = new ModalBuilder()
            .setCustomId('registerModal')
            .setTitle('Registre-se para usar o Deliba!');

        // Add components to modal

        // Create the text input components
        const userEmail = new TextInputBuilder()
            .setCustomId('userEmail') 
            .setLabel("Digite seu email") // The label is the prompt the user sees for this input
            .setStyle(TextInputStyle.Short); // Short means only a single line of text

        const firstActionRow = new ActionRowBuilder().addComponents(userEmail); //Input Handler
        registerModal.addComponents(firstActionRow);// Add inputs to the modal

        await interaction.showModal(registerModal)

    },
};
