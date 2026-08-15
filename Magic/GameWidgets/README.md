# Manipulate Discord Widgets

<img width="454" height="691" alt="widgets" src="https://github.com/user-attachments/assets/566c6f75-1766-44ea-b4da-81d64221e600" />

Must be on the [Discord Web Client](https://www.discord.com/channels/me) or desktop client with DevTools enabled.

1. Open DevTools, select the Network Tab, press `CTRL+F`, and search for `widgets`.
2. Open your profile modal, edit your widgets (add a game, change a tag, or remove one), and save the changes with the Network Tab open.
3. Find the latest `widgets` request, right-click on it, and select **Copy as > Copy as Fetch**.

**DO NOT EXPOSE FETCH, IT CONTAINS USER TOKEN**

4. [Format it for easier editing](https://beautifier.io/) and open it with an editor of your preference.
5. Focus on the `body` key as shown in the snippet below.
6. After making your changes, open the Console Tab in DevTools on the Discord domain, paste the snippet, and run it.
7. Reopen your profile to apply the changes.

## Payload Reference

```js
// 'Nitro' Widget ID: 1402418692922540144
// you can add as many tags as you want as far as I'm aware

data: {
  type: "favorite_games",
  games: [
    {
      game_id: "1017176847865352332",
      comment: "you can add comments even to the fields that do not have them by default in the client",
      tags: [
        "better_than_you",
        "better_than_you",
        "obsessed",
        "love_it",
        "kind_of_love_it",
        "kind_of_hate_it",
        "rage_quitting",
        "looking_for_group",
        "open_to_teach",
        "looking_to_discuss",
        "open_to_play",
        "looking_for_tips"
      ]
    }
  ]
}
```

## All Available Tags

```json
{
  "BETTER_THAN_YOU": "better_than_you",
  "CASUAL": "casual",
  "INTERMEDIATE": "intermediate",
  "EXPERT": "expert",
  "SKILLED": "skilled",
  "MASTER": "master",
  "LOVE_IT": "love_it",
  "OBSESSED": "obsessed",
  "KIND_OF_LOVE_IT": "kind_of_love_it",
  "KIND_OF_HATE_IT": "kind_of_hate_it",
  "RAGE_QUITTING": "rage_quitting",
  "OPEN_TO_PLAY": "open_to_play",
  "OPEN_TO_TEACH": "open_to_teach",
  "LOOKING_FOR_GROUP": "looking_for_group",
  "LOOKING_FOR_TIPS": "looking_for_tips",
  "LOOKING_TO_DISCUSS": "looking_to_discuss",
  "NOOB": "noob",
  "LEARNING_THE_ROPES": "learning_the_ropes",
  "GETTING_GOOD": "getting_good",
  "LIKE_IT": "like_it",
  "FRUSTRATED": "frustrated",
  "TOO_EASY": "too_easy",
  "LFG": "lfg",
  "LOOKING_TO_LEARN": "looking_to_learn"
}
```

- Only the basic 10 tags work, the rest will simply not display. Posting them here solely for fun
