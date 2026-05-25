const { REST, Routes } = require('discord.js');
require('dotenv').config();

const commands = [
    {
        name: 'event-create',
        description: 'Create a new event'
    },
    {
        name: 'event-start',
        description: 'Start an event'
    }
];

const clientId = process.env.CLIENT_ID;

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commands...');

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

        console.log('Slash commands registered successfully!');
    } catch (error) {
        console.error(error);
    }
})();