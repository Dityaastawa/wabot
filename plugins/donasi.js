let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085792429140]
│ • XL [081958910432]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [085792429140]
│ • https://saweria.co/LitRHap
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
