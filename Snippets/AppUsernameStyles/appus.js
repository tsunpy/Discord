(async () => {
  const GUILD_ID = 'xxxx';
  const BOT_TOKEN = 'xxxx';

  const res = await fetch(`https://discord.com/api/v10/guilds/${GUILD_ID}/members/@me`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bot ${BOT_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      display_name_font_id: 3,
      display_name_effect_id: 3,
      display_name_colors: [16711935] // Decimal for color
    })
  });

  const data = await res.json();
  console.log(`Status: ${res.status}`, data);
})();
