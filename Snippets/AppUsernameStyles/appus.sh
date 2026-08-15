curl --request PATCH \
  --url 'https://discord.com/api/v10/guilds/<GUILD_ID>/members/@me' \
  --header 'authorization: Bot <TOKEN>' \
  --header 'content-type: application/json' \
  --data '{
  "display_name_font_id": 3,
  "display_name_effect_id": 3,
  "display_name_colors": [
    16711935
  ]
}'
