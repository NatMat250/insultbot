const insults = [
    
    { text: "They say that vaults give out a lot of awards. Which one did you get? Most likely to bore me to death?", audio: "audio/awards.ogg"},
    { text: "Rumor has it that you put a bounty on yourself... so for once in your life you would be Wanted!", audio: "audio/bounty.ogg"},
    { text: "My insult for you was well-crafted, witty... a true masterwork. Then I saw you and decided to save it for someone who will understand.", audio: "audio/witty.ogg"},
    { text: "I saw your CAMP today. Great start! Now that you've gathered all that junk into a random clumps of structure, when does the real construction begin?", audio: "audio/camp.ogg"},
    { text: "People call you a hoarder... me, I understand. You'll have the last laugh when caps are finally replaced by burnt books and empty glass bottles.", audio: "audio/hoarder.ogg"},
    { text: "I've seen you eat Cram, dog food, and a thirty-year-old hot dog. If you're trying to make me sick, next time just show me your face!", audio: "audio/hotdog.ogg"},
    { text: "You humans attack me because you can't take a joke. Fortunately, your combat ability is just as bad as your sense of humor.",audio: "audio/senseofhumor.ogg"},
    { text: "Nice outfit. Really, I mean it! I had no idea that the smelly wandering vagrant look was back in style!", audio: "audio/niceoutfit.ogg"},
    { text: "Your CAMP vending machine prices are outrageous! The only worse deal I've seen is the hand you were dealt when you were born!", audio: "audio/prices.ogg"},
    { text: "The smartest thing about you is that Pip-Boy on your arm. The dumbest thing is that you mainly use it as a night light.", audio: "audio/pipboy.ogg"},
    { text: "They say that vaults only accepted the best and the brightest of humanity. For your sake, let's hope that's not the case.", audio: "audio/brightest.ogg"},
    { text: "I heard you hid in a vault while the world crumbled around you. I'd call you a coward, but who knows what kind of mess we'd be in today had you stayed outside!", audio: "audio/coward.ogg"},
    { text: "I considered attacking you on sight, but I don't think I could hurt you more than life already has.", audio: "audio/onsight.ogg"},
    { text: "I heard you got drunk and missed exiting Vault 76 on time. Too bad you didn't do the same thing before entering it!", audio: "audio/drunk.ogg"},
    { text: "They say that true beauty is on the inside. But all you have on the inside is excessive radiation poisoning!", audio: "audio/truebeauty.ogg"},
    { text: "Vault dweller, 2054 called. They want their dumb blue jumpsuit back.", audio: "audio/dumbjumpsuit.ogg"},
    { text: "One of us is slow, friendless and completely devoid of personality. The other... is a Protectron!", audio: "audio/slowfriendless.ogg"},
    { text: "Knock knock. Who's there? An organic being with a finite life span!", audio: "audio/knockknock.ogg"},
    { text: "I would say you have a face only a mother could love... except your entire family already died in the Great War!", audio: "audio/face.ogg"},
    { text: "I heard you vault dwellers were trying to save Appalachia. One more bomb should do it - right on top of Vault 76!", audio: "audio/oneMoreBomb.ogg"},

    // Add more insults here until you have 100
];

let currentInsultIndex = 0;

function generateInsult() {
    const selectedInsult = insults[currentInsultIndex];

    const insultElement = document.getElementById('insult');
    const audioElement = document.getElementById('insultAudio');

    if (typeof selectedInsult === 'object') {
        insultElement.innerText = selectedInsult.text;
        audioElement.src = selectedInsult.audio;

        // Check if the audio can play and handle errors
        audioElement.play().catch(error => {
            console.error("Audio playback failed: ", error);
        });
    } else {
        insultElement.innerText = selectedInsult;
        audioElement.src = "";  // Clear the audio source if there is no associated audio
    }

    currentInsultIndex++;
    if (currentInsultIndex >= insults.length) {
        currentInsultIndex = 0;  // Reset index to loop through insults again
    }
}