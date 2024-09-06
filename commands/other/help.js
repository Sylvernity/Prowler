const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const fs = require('fs');
const path = require("node:path");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Displays information about Prowler\'s commands'),
    async execute(interaction) {
        console.log(`${client.application.commands.fetch()}`);
    }
}