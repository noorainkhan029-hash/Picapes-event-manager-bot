const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('event-create')
        .setDescription('Create a new event')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('Event name')
                .setRequired(true)),

    async execute(interaction) {
        const eventName = interaction.options.getString('name');

        const embed = new EmbedBuilder()
            .setTitle('🎉 Event Created')
            .setDescription(`Event **${eventName}** has been created!`)
            .setColor('Blue')
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    }
};