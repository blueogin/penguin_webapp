import { MenuEntry } from 'penguinfinance-uikit2'

export const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Buy $PEFI',
    icon: 'TradeIcon',
    href: 'https://app.pangolin.exchange/#/swap?outputCurrency=0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c',
  },
  {
    label: 'Farms',
    icon: 'IglooIcon',
    href: '/farms',
    badge: 'NEW',
  },
  // {
  //   label: 'Igloos V2',
  //   icon: 'IglooIcon',
  //   href: '/igloos-v2',
  // },
  // {
  //   label: 'Info',
  //   icon: 'IfoIcon',
  //   href: '/info',
  // },
  {
    label: 'Nest',
    icon: 'NestIcon',
    href: '/nests',
  },
  {
    label: 'Emperor',
    icon: 'CrownIcon',
    href: '/emperor',
  },
  {
    label: 'Arena',
    icon: 'BattleIcon',
    href: '/arena',
  },
  {
    label: 'Launchpad',
    icon: 'LaunchpadIcon',
    href: '/launchpad',
  },
  // {
  //   label: 'Club Penguin',
  //   icon: 'BattleIcon',
  //   href: '/club',
  // },
  // {
  //   label: 'Penguin lottery',
  //   icon: 'NftIcon',
  //   href: '/lottery',
  // },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: 'Compounder',
    icon: 'CompounderIcon',
    href: '/compounder',
  },
  // {
  //   label: 'Penguin teams',
  //   icon: 'NftIcon',
  //   href: '/teams',
  // },
  {
    label: 'Learn More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Penguin-Finance',
      },
      {
        label: 'Docs',
        href: 'https://docs.penguinfinance.io/',
      },
      {
        label: 'Medium Articles',
        href: 'https://penguin-finance.medium.com/',
      },
      {
        label: 'Roadmap',
        href: 'https://penguin-finance.medium.com/penguin-finance-2021-roadmap-81d261aa62d0',
      },
    ],
  },
  {
    label: 'Audited by CertiK',
    icon: 'AuditIcon',
    href: 'https://www.certik.org/projects/penguinfinance',
  },
  {
    label: 'Official Discord',
    icon: 'DiscordIcon',
    href: 'https://discord.gg/R5Rv68GXXc',
  },
  {
    label: 'Official Telegram',
    icon: 'TelegramIcon',
    href: 'https://t.me/penguin_defi',
  },
  {
    label: 'Official Twitter',
    icon: 'TwitterIcon',
    href: 'https://twitter.com/penguin_defi',
  },
]

export const socials = [
  //   {
  //     label: 'Discord',
  //     icon: 'DiscordIcon',
  //     href: 'https://discord.gg/R5Rv68GXXc',
  //   },
  //   {
  //     label: 'Telegram',
  //     icon: 'TelegramIcon',
  //     href: 'https://t.me/penguin_defi',
  //   },
  //   {
  //     label: 'Twitter',
  //     icon: 'TwitterIcon',
  //     href: 'https://twitter.com/penguin_defi',
  //   },
]
