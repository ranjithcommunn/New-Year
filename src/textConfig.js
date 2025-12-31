const textConfig = {
  landing: {
    title: "Hey Jigglypuff! 💕",
    subtitle: "I Wanted to do something special for you, so I made something special just for you...",
    lastLine: "Click below to see what it is! ✨",
    button: "Open My Heart 💖",
    footer: "Made with love, only for you 💕",
  },
  landing: {
    title: "Happy New Year 2026, My Baby 🎉💖",
    subtitle:
      "A brand new year, a brand new chapter — and my favorite part is starting it with you by my side.",
    lastLine:
      "This little journey is filled with my love, my feelings, and everything my heart wants to tell you ✨",
    button: "Begin Our Celebration 💕",
    footer:
      "To more smiles, more memories, and a lifetime together — cheers to us in 2026 🥂💖",
  },


  // ActivityPage/Letter configuration
  letter: {
    headerTitle: "A Love Letter 💌",
    headerSubtitle: "From my heart to yours",
    letterHeaderTitle: "My pehla pyaar",
    letterMessage: `My dearest love,

Every moment with you feels like a beautiful dream that I never want to wake up from.

I want you to know that you are the most precious person in my life. Every day with you is a gift, and I'm grateful for every second we share together. You make me want to be the best version of myself.
`,
    letterSignature: "💕`",
    envelopeClickHint: "Click to open the envelope",
    specialDeliveryText: "Special Delivery 💌",
    continueButton: "Continue To See More ✨"
  },
  letter: {
    headerTitle: "A New Year Letter 💌",
    headerSubtitle: "From my heart to yours, Baby",
    letterHeaderTitle: "My Dearest Baby 💖",
    letterMessage: `My Baby,

Our story began on July 28th, 2024 — the day we started talking, not knowing it would become the most beautiful journey of our lives. Then, on January 1st, 2025, you proposed to me and completely changed my world in the most magical way.

You love me more than I love myself, you care for me endlessly, and you stand by me no matter what. Your support, your kindness, and your pure heart make every day brighter for me.

These past 1.5 years with you have been the happiest chapter of my life, and I can’t wait to write many more with you. May 2026 bring you all the happiness you deserve — and may I always be the reason behind your smile.

Happy New Year, My Baby 💕
`,

    letterSignature: "Forever Yours, Ranjith 💫",
    envelopeClickHint: "Tap to open my letter for you 💌",
    specialDeliveryText: "A Letter Full of Love 💖",
    continueButton: "Continue Our Celebration ✨"
  },


  chillZone: {
    heading: "A Dedicated Playlist For You",
    subheading: "I Hope You'll Like It",
    chooseTrackHint: "Choose a track to start vibing ✨",
    continueButton: "Continue to Next ✨",
    tracks: [
      { id: 1, title: "Dil Cheeze Tujhe Dedi", caption: "You own this heart — dedicated to you 💞" },
      { id: 2, title: "If the world was ending", caption: "Even if the world ends, I'd still find you 🤍" },
      { id: 3, title: "Dil ka Jo Haal hai", caption: "Tu Kaare Dil Bekarar 💞" }
    ]
  },
  chillZone: {
    heading: "New Year Playlist",
    subheading: "Celebrate with these festive tracks!",
    chooseTrackHint: "Choose a song to start the party ✨",
    continueButton: "Continue to Next ✨",
    tracks: [
      {
        id: 1,
        title: "Chusi Chudangane Nachesave",
        caption: "Love at first sight vibes to start the year 💕✨"
      },
      {
        id: 2,
        title: "Anisuthide Yaako Indu Ninne ",
        caption: "Timeless Kannada romance for a magical beginning 💖🎶"
      },

      {
        id: 3,
        title: "Nanu Novu Andare",
        caption: "Deep emotions and soulful melodies to feel every moment 💙🎧"
      }
    ]
  },


  cards: {
    heading: "Some Special Cards For You",
    subheading: "Click each card to reveal a special message!",
    tapLabel: "✨ Tap!",
    progress: {
      start: "Start by tapping any card above ✨",
      discovered: (n, total) => `${n} of ${total} messages discovered! Keep exploring 💕`,
      complete: "Amazing! You've discovered all the messages! 🎉"
    },
    popup: {
      title: "All Messages Unlocked!",
      message: "Each message is a piece of my heart that belongs to you forever. ✨",
      openFinal: "Open the Final Letter 💌",
      stay: "Stay here a bit longer"
    },
    cardMessages: [
      "You're my favorite kind of memory — the one that makes me smile without even realizing it. 💖",
      "I did like you and i still respect what you said about being good friends. ✨",
      "The little things you do — your expressions, your laughter, the way you talk — they've all become my favorite details. 🌸"
    ]
  },
  cards: {
    heading: "New Year Wishes for You 💖",
    subheading: "Tap each card, Baby — I’ve hidden my wishes inside ✨",
    tapLabel: "✨ Tap!",
    progress: {
      start: "Go on Baby, tap a card and feel my love 💕",
      discovered: (n, total) => `${n} of ${total} wishes opened — more love waiting for you 🎉`,
      complete: "Yay! You’ve opened all my wishes, Baby 🎊💖"
    },
    popup: {
      title: "All My Wishes for You 💌",
      message: "May every dream of yours come true — and may I always be part of it 💖",
      openFinal: "Open My Final Letter 💕",
      stay: "Stay here with me a little longer 💫"
    },
    cardMessages: [
      "My first wish for you is endless happiness — because your smile is my favorite thing in the world 💕",
      "I wish you success in everything you do, and promise to stand by you in every step you take 🫶",
      "No matter what this year brings, my biggest wish is us — together, always 💖"
    ]
  },


  finalLetter: {
    title: "Final Love Letter",
    sealingText: "Sealing your letter...",
    sealButton: "Seal this Letter 💌",
    restartButton: "Restart",
    sealedTitle: "Letter Sealed with Love",
    sealedSubtitle: "I Love You Always",
    typedDefault: "Always Yours 💕",
    experienceAgain: "Experience Again ✨",
    sendKissButton: "Send a Virtual Kiss 💋",
    dateLocale: "en-US",
    // Letter content
    letterGreeting: "My sweetest darling,",
    letterParagraphs: [
      "You're the calm I reach for and the laugh that brightens my day.",
      "I hope this tiny world made you smile — and whispered how much you mean to me.",
      "Only 2.5 months left... and I can't imagine these days without you. I love you so much and every moment with you is priceless.",
      "You are amazing in every way... and honestly, I feel like I haven't good enough for you."
    ],
    sealingNote: "Sealing will finish the experience."
  },
  finalLetter: {
    title: "My Final New Year Wish for You 💌",
    sealingText: "Sealing my love for you...",
    sealButton: "Seal This Wish 💖",
    restartButton: "Restart",
    sealedTitle: "Wish Sealed for 2026 💫",
    sealedSubtitle: "A Year Filled With Love, Us & Forever",
    typedDefault: "Happy New Year, My Baby 💕",
    experienceAgain: "Relive Our Love ✨",
    sendKissButton: "Send a Virtual Hug 🤗",
    dateLocale: "en-US",

    // Letter content
    letterGreeting: "My Dearest Baby 💖,",
    letterParagraphs: [
      "Our story began on July 28th, 2024 — just two hearts starting a conversation, unaware that it would turn into everything.",
      "Then on January 1st, 2025, you proposed to me and changed my life forever.",
      "Thank you for loving me more than I love myself, for caring endlessly, and for standing by me through everything.",
      "As we step into 2026, my only wish is us — growing, dreaming, and loving together always."
    ],
    sealingNote: "Sealing this wish means sealing my heart with yours 💕"
  },


  common: {
    continue: "Continue to Next ✨",
    close: "Close",
    ok: "OK"
  }
};

export default textConfig;