import { Nft } from './types'

const Nfts: Nft[] = [
  {
    name: 'Doctor Aukee',
    description: 'The second wave of the pandemic is turning out to be extremely fatal for all and especially for the healthcare workers who are at the forefront',
    images: {
      lg: 'Doctor_Aukee.jpg',
      md: 'Doctor_Aukee.jpg',
      sm: 'Doctor_Aukee.jpg',
      // ipfs: 'https://gateway.pinata.cloud/ipfs/QmNS1A5HsRW1JvFWtGkm4o9TgZVe2P7kA8TB4yxvS6A7ms/bullish.png',
    },
    sortOrder: 999,
    bunnyId: 11,
  },
  {
    name: 'Penguin Nurse',
    description: "She can help patients to be survive",
    images: {
      lg: 'Penguin_Nurse.jpg',
      md: 'Penguin_Nurse.jpg',
      sm: 'Penguin_Nurse.jpg',
      // ipfs: 'https://gateway.pinata.cloud/ipfs/QmQ6EE6gkVzAQUdQLLM7CyrnME6LZHCoy92ZERW8HXmyjw/hiccup.png',
    },
    sortOrder: 999,
    bunnyId: 10,
  },
  // {
  //   name: 'Sleepy',
  //   description: 'Aww, looks like eating pancakes all day is tough work. Sweet dreams!',
  //   images: {
  //     lg: 'sleepy-lg.png',
  //     md: 'sleepy-md.png',
  //     sm: 'sleepy-sm.png',
  //     ipfs: 'https://gateway.pinata.cloud/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/sleepy.png',
  //     blur: 'sleepy-blur.png',
  //   },
  //   sortOrder: 999,
  //   bunnyId: 5,
  // },
  // {
  //   name: 'Sunny',
  //   description: 'Sunny is always cheerful when there are pancakes around. Smile!',
  //   images: {
  //     lg: 'sunny-lg.png',
  //     md: 'sunny-md.png',
  //     sm: 'sunny-sm.png',
  //     ipfs: 'https://gateway.pinata.cloud/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/sunny.png',
  //     blur: 'sunny-blur.png',
  //   },
  //   sortOrder: 999,
  //   bunnyId: 9,
  // },
  // {
  //   name: 'Churro',
  //   description: "Don't let that dopey smile deceive you... Churro's a master PEFI chef!",
  //   images: {
  //     lg: 'churro-lg.png',
  //     md: 'churro-md.png',
  //     sm: 'churro-sm.png',
  //     ipfs: 'https://gateway.pinata.cloud/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/churro.png',
  //     blur: 'churro-blur.png',
  //   },
  //   sortOrder: 999,
  //   bunnyId: 8,
  // },
  // {
  //   name: 'Dollop',
  //   description: "Nommm... Oh hi, I'm just meditating on the meaning of PEFI.",
  //   images: {
  //     lg: 'dollop-lg.png',
  //     md: 'dollop-md.png',
  //     sm: 'dollop-sm.png',
  //     ipfs: 'https://gateway.pinata.cloud/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/dollop.png',
  //     blur: 'dollop-blur.png',
  //   },
  //   sortOrder: 999,
  //   bunnyId: 6,
  // },
  // {
  //   name: 'Twinkle',
  //   description: "Three guesses what's put that twinkle in those eyes! (Hint: it's PEFI)",
  //   images: {
  //     lg: 'twinkle-lg.png',
  //     md: 'twinkle-md.png',
  //     sm: 'twinkle-sm.png',
  //     ipfs: 'https://gateway.pinata.cloud/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/twinkle.png',
  //     blur: 'twinkle-blur.png',
  //   },
  //   sortOrder: 999,
  //   bunnyId: 7,
  // },
  // {
  //   name: 'Swapsies',
  //   description: 'These bunnies love nothing more than swapping pancakes. Especially on avax.',
  //   images: {
  //     lg: 'swapsies-lg.png',
  //     md: 'swapsies-md.png',
  //     sm: 'swapsies-sm.png',
  //     ipfs: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/swapsies.png',
  //     blur: 'swapsies-blur.png',
  //   },
  //   sortOrder: 999,
  //   bunnyId: 0,
  // },
  // {
  //   name: 'Drizzle',
  //   description: "It's raining syrup on this bunny, but he doesn't seem to mind. Can you blame him?",
  //   images: {
  //     lg: 'drizzle-lg.png',
  //     md: 'drizzle-md.png',
  //     sm: 'drizzle-sm.png',
  //     ipfs: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/drizzle.png',
  //     blur: 'drizzle-blur.png',
  //   },
  //   sortOrder: 999,
  //   bunnyId: 1,
  // },
  // {
  //   name: 'Blueberries',
  //   description: "These bunnies like their pancakes with blueberries. What's your favorite topping?",
  //   images: {
  //     lg: 'blueberries-lg.png',
  //     md: 'blueberries-md.png',
  //     sm: 'blueberries-sm.png',
  //     ipfs: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/blueberries.png',
  //     blur: 'blueberries-blur.png',
  //   },
  //   sortOrder: 999,
  //   bunnyId: 2,
  // },
  // {
  //   name: 'Circular',
  //   description: "Love makes the world go 'round... but so do pancakes. And these bunnies know it.",
  //   images: {
  //     lg: 'circular-lg.png',
  //     md: 'circular-md.png',
  //     sm: 'circular-sm.png',
  //     ipfs: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/circular.png',
  //     blur: 'circular-blur.png',
  //   },
  //   sortOrder: 999,
  //   bunnyId: 3,
  // },
  // {
  //   name: 'Sparkle',
  //   description: 'It’s sparkling syrup, pancakes, and even lottery tickets! This bunny really loves it.',
  //   images: {
  //     lg: 'sparkle-lg.png',
  //     md: 'sparkle-md.png',
  //     sm: 'sparkle-sm.png',
  //     ipfs: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/sparkle.png',
  //     blur: 'sparkle-blur.png',
  //   },
  //   sortOrder: 999,
  //   bunnyId: 4,
  // },
]

export default Nfts
