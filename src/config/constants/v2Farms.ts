import contracts from './contracts'
import { V2FarmConfig, QuoteToken } from './types'

const v2Farms: V2FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'PEFI-AVAX LP',
    lpAddresses: {
      43113: '',
      43114: '0x494dd9f783daf777d3fb4303da4de795953592d0',
    },
    strategyAddresses: {
      43113: '',
      43114: '0x35dc5371867188d585c1d9f4da9160a0c2664b42',
    },
    tokenSymbol: 'PEFI',
    tokenAddresses: {
      43113: '',
      43114: '0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0xd7EDBb1005ec65721a3976Dba996AdC6e02dc9bA',
    },
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAddresses: contracts.wavax,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Pangolin',
    name: 'pendingPEFI',
    displayedDecimals: 2,
  },
  {
    pid: 1,
    lpSymbol: 'PEFI-PNG LP',
    lpAddresses: {
      43113: '',
      43114: '0x1bb5541eccda68a352649954d4c8ece6ad68338d',
    },
    strategyAddresses: {
      43113: '',
      43114: '0x8a2658eaef58e82bd43710e6b8c44dda5d62ba2c',
    },
    tokenSymbol: 'PEFI',
    tokenAddresses: {
      43113: '',
      43114: '0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x76e404Ab7357fD97d4f1e8Dd52f298A035fd408c',
    },
    quoteTokenSymbol: QuoteToken.PNG,
    quoteTokenAddresses: contracts.png,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Pangolin',
    name: 'pendingPEFI',
    displayedDecimals: 2,
  },
  {
    pid: 2,
    lpSymbol: 'ETH.e-AVAX LP',
    lpAddresses: {
      43113: '',
      43114: '0x7c05d54fc5cb6e4ad87c6f5db3b807c94bb89c52',
    },
    strategyAddresses: {
      43113: '',
      43114: '0x9d7d8e29be47711ca1be592d18cad5adb08ebd1a',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      43113: '',
      43114: '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x830A966B9B447c9B15aB24c0369c4018E75F31C9',
    },
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAddresses: contracts.wavax,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Pangolin',
    name: 'pendingPEFI',
    displayedDecimals: 2,
  },
  {
    pid: 3,
    lpSymbol: 'LINK.e-AVAX LP',
    lpAddresses: {
      43113: '',
      43114: '0x5875c368cddd5fb9bf2f410666ca5aad236dabd4',
    },
    strategyAddresses: {
      43113: '',
      43114: '0xfc932b66a54890f3b689ac21fb366ea5f8393ef5',
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      43113: '',
      43114: '0x5947BB275c521040051D82396192181b413227A3',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x2e10D9d08f76807eFdB6903025DE8e006b1185F5',
    },
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAddresses: contracts.wavax,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Pangolin',
    name: 'pendingPEFI',
    displayedDecimals: 2,
  },
  {
    pid: 6,
    lpSymbol: 'LINK.e-PEFI LP',
    lpAddresses: {
      43113: '',
      43114: '0x3968c1bda61949724c5bbcacf8baffe19932cb14',
    },
    strategyAddresses: {
      43113: '',
      43114: '0xe02f3bf124eaa8043c57737be969456bcce6d73a',
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      43113: '',
      43114: '0x5947BB275c521040051D82396192181b413227A3',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x0000000000000000000000000000000000000000',
    },
    quoteTokenSymbol: QuoteToken.PEFI,
    quoteTokenAddresses: contracts.pefi,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Pangolin',
    name: 'pendingPEFI',
    displayedDecimals: 2,
  },
  {
    pid: 11,
    lpSymbol: 'PNG-AVAX LP',
    lpAddresses: {
      43113: '',
      43114: '0xd7538cabbf8605bde1f4901b47b8d42c61de0367',
    },
    strategyAddresses: {
      43113: '',
      43114: '0x5236332b1c21158e9a567c186db000001713cf03',
    },
    tokenSymbol: 'PNG',
    tokenAddresses: {
      43113: '',
      43114: '0x60781C2586D68229fde47564546784ab3fACA982',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x574d3245e36Cf8C9dc86430EaDb0fDB2F385F829',
    },
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAddresses: contracts.wavax,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Pangolin',
    name: 'pendingPEFI',
    displayedDecimals: 2,
  },
  {
    pid: 12,
    lpSymbol: 'DAI.e-PEFI LP',
    lpAddresses: {
      43113: '',
      43114: '0x07dca207001d5c523749b0b4704d7b81535c6f1f',
    },
    strategyAddresses: {
      43113: '',
      43114: '0x917fb44342713fe7459be7e5b3cbf5e43e93244c',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      43113: '',
      43114: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x0000000000000000000000000000000000000000',
    },
    quoteTokenSymbol: QuoteToken.PEFI,
    quoteTokenAddresses: contracts.pefi,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Pangolin',
    name: 'pendingPEFI',
    displayedDecimals: 2,
  },
  // {
  //   pid: 13,
  //   lpSymbol: 'USDC.e-PEFI LP',
  //   lpAddresses: {
  //     43113: '',
  //     43114: '0x24b0596449d692a5f0371c77c64d368e5566fb3c',
  //   },
  //   strategyAddresses: {
  //     43113: '',
  //     43114: '0x83ae77e184e5a994ceee5ed6b1d2aa6d623600c1',
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     43113: '',
  //     43114: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
  //   },
  //   pangolinRewardPoolAddresses: {
  //     43113: '',
  //     43114: '0x0000000000000000000000000000000000000000',
  //   },
  //   quoteTokenSymbol: QuoteToken.PEFI,
  //   quoteTokenAddresses: contracts.pefi,
  //   withdrawalFee: '0',
  //   hardApy: '896.65%',
  //   type: 'Pangolin',
  //   name: 'pendingPEFI',
  //   displayedDecimals: 7,
  // },
  {
    pid: 14,
    lpSymbol: 'DAI.e-AVAX LP',
    lpAddresses: {
      43113: '',
      43114: '0xba09679ab223c6bdaf44d45ba2d7279959289ab0',
    },
    strategyAddresses: {
      43113: '',
      43114: '0x4de6f333da8e6af64aa299a8c45b68e1fed3e6b9',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      43113: '',
      43114: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x63A84F66b8c90841Cb930F2dC3D28799F0c6657B',
    },
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAddresses: contracts.wavax,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Pangolin',
    name: 'pendingPEFI',
    displayedDecimals: 2,
  },
  {
    pid: 15,
    lpSymbol: 'USDT.e-AVAX LP',
    lpAddresses: {
      43113: '',
      43114: '0xe28984e1ee8d431346d32bec9ec800efb643eef4',
    },
    strategyAddresses: {
      43113: '',
      43114: '0x4b72b497f878de57aaaeee8746321cb48afd8d45',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      43113: '',
      43114: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x006cC053bdb84C2d6380B3C4a573d84636378A47',
    },
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAddresses: contracts.wavax,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Pangolin',
    name: 'pendingPEFI',
    displayedDecimals: 7,
  },
  {
    pid: 16,
    lpSymbol: 'SNOB-PEFI LP',
    lpAddresses: {
      43113: '',
      43114: '0x0b9753d73e1c62933e913e9c2c94f2ffa8236f6c',
    },
    strategyAddresses: {
      43113: '',
      43114: '0xe3df340c937abae30c5ed2d8f4a6f044d1a65888',
    },
    tokenSymbol: 'SNOB',
    tokenAddresses: {
      43113: '',
      43114: '0xC38f41A296A4493Ff429F1238e030924A1542e50',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x0000000000000000000000000000000000000000',
    },
    quoteTokenSymbol: QuoteToken.PEFI,
    quoteTokenAddresses: contracts.pefi,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Pangolin',
    name: 'pendingPEFI',
    displayedDecimals: 2,
  },
  // Joe pools
  {
    pid: 4,
    lpSymbol: 'Joe ETH.e-AVAX LP',
    lpAddresses: {
      43113: '',
      43114: '0xfe15c2695f1f920da45c30aae47d11de51007af9',
    },
    strategyAddresses: {
      43113: '',
      43114: '0xd9e09ab78bae7da3c4624beeab1d510544cb86a1',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      43113: '',
      43114: '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x0000000000000000000000000000000000000000',
    },
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAddresses: contracts.wavax,
    withdrawalFee: '2.56',
    hardApy: '896.65%',
    type: 'Joe',
    name: 'pendingPEFI',
    displayedDecimals: 5,
  },
  {
    pid: 5,
    lpSymbol: 'Joe PEFI-AVAX LP',
    lpAddresses: {
      43113: '',
      43114: '0xb78c8238bd907c42be45aebdb4a8c8a5d7b49755',
    },
    strategyAddresses: {
      43113: '',
      43114: '0x100080bf670aa0afb3c575e718c78e9b426121cd',
    },
    tokenSymbol: 'PEFI',
    tokenAddresses: {
      43113: '',
      43114: '0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x0000000000000000000000000000000000000000',
    },
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAddresses: contracts.wavax,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Joe',
    name: 'pendingPEFI',
    displayedDecimals: 5,
  },
  {
    pid: 7,
    lpSymbol: 'Joe USDC.e-AVAX LP',
    lpAddresses: {
      43113: '',
      43114: '0xa389f9430876455c36478deea9769b7ca4e3ddb1',
    },
    strategyAddresses: {
      43113: '',
      43114: '0x3a5b7b203fce13692f328c25d34c75d32662512a',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      43113: '',
      43114: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x0000000000000000000000000000000000000000',
    },
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAddresses: contracts.wavax,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Joe',
    name: 'pendingPEFI',
    displayedDecimals: 7,
  },
  {
    pid: 8,
    lpSymbol: 'Joe USDT.e-AVAX LP',
    lpAddresses: {
      43113: '',
      43114: '0xed8cbd9f0ce3c6986b22002f03c6475ceb7a6256',
    },
    strategyAddresses: {
      43113: '',
      43114: '0x7a95553e24d7be586479e9ef080afab46e03b3de',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      43113: '',
      43114: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x0000000000000000000000000000000000000000',
    },
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAddresses: contracts.wavax,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Joe',
    name: 'pendingPEFI',
    displayedDecimals: 7,
  },
  {
    pid: 9,
    lpSymbol: 'Joe DAI.e-AVAX LP',
    lpAddresses: {
      43113: '',
      43114: '0x87dee1cc9ffd464b79e058ba20387c1984aed86a',
    },
    strategyAddresses: {
      43113: '',
      43114: '0x82500282d3928fe0f46f4a45bbdb1d9b29496b76',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      43113: '',
      43114: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x0000000000000000000000000000000000000000',
    },
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAddresses: contracts.wavax,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Joe',
    name: 'pendingPEFI',
    displayedDecimals: 7,
  },
  {
    pid: 10,
    lpSymbol: 'Joe WBTC.e-AVAX LP',
    lpAddresses: {
      43113: '',
      43114: '0xd5a37dc5c9a396a03dd1136fc76a1a02b1c88ffa',
    },
    strategyAddresses: {
      43113: '',
      43114: '0x9f9200475353378e17824d39db3c2438952a4c19',
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      43113: '',
      43114: '0x50b7545627a5162F82A992c33b87aDc75187B218',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x0000000000000000000000000000000000000000',
    },
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAddresses: contracts.wavax,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Joe',
    name: 'pendingPEFI',
    displayedDecimals: 8,
  },
  {
    pid: 18,
    lpSymbol: 'Joe DAI.e-USDC.e LP',
    lpAddresses: {
      43113: '',
      43114: '0x63abe32d0ee76c05a11838722a63e012008416e6',
    },
    strategyAddresses: {
      43113: '',
      43114: '0x2e81322b04767c5dae5de99fe1446a95583eb02a',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      43113: '',
      43114: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x0000000000000000000000000000000000000000',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAddresses: contracts.usdc,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Joe',
    name: 'pendingPEFI',
    displayedDecimals: 6,
  },
  {
    pid: 19,
    lpSymbol: 'Joe JOE-AVAX LP',
    lpAddresses: {
      43113: '',
      43114: '0x454e67025631c065d3cfad6d71e6892f74487a15',
    },
    strategyAddresses: {
      43113: '',
      43114: '0x16deef2cfb15711cd820eb81fc415474a2aa6e59',
    },
    tokenSymbol: 'JOE',
    tokenAddresses: {
      43113: '',
      43114: '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x0000000000000000000000000000000000000000',
    },
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAddresses: contracts.wavax,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Joe',
    name: 'pendingPEFI',
    displayedDecimals: 6,
  },
  // sushi
  {
    pid: 17,
    lpSymbol: 'Sushi PEFI-SUSHI.e LP',
    lpAddresses: {
      43113: '',
      43114: '0x24f01f3dcdee246567029bce8830a866c9cd2b1e',
    },
    strategyAddresses: {
      43113: '',
      43114: '0x0cb61ec7635d736df54cc88e959c3af478988a15',
    },
    tokenSymbol: 'Sushi.e',
    tokenAddresses: {
      43113: '',
      43114: '0x37B608519F91f70F2EeB0e5Ed9AF4061722e4F76',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x0000000000000000000000000000000000000000',
    },
    quoteTokenSymbol: QuoteToken.PEFI,
    quoteTokenAddresses: contracts.pefi,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Sushi',
    name: 'pendingPEFI',
    displayedDecimals: 2,
    infoLink:
      'https://penguin-finance.medium.com/introducing-pefi-sushi-e-the-first-sushiswap-lp-yield-farm-on-avalanche-fdfd64f3b3a1',
    guideLink:
      'https://penguin-finance.medium.com/introducing-pefi-sushi-e-the-first-sushiswap-lp-yield-farm-on-avalanche-fdfd64f3b3a1',
  },
  // lydia
  {
    pid: 20,
    lpSymbol: 'Lydia PEFI-USDT.e LP',
    lpAddresses: {
      43113: '',
      43114: '0xdb57a10b415fb4f246fca159bb9b98ad0b126a71',
    },
    strategyAddresses: {
      43113: '',
      43114: '0xdb5733bd52d878498d49595d6c24106f0121c1ed',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      43113: '',
      43114: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x0000000000000000000000000000000000000000',
    },
    quoteTokenSymbol: QuoteToken.PEFI,
    quoteTokenAddresses: contracts.pefi,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Lydia',
    name: 'pendingPEFI',
    displayedDecimals: 7,
  },
  {
    pid: 21,
    lpSymbol: 'Lydia PEFI-LYD LP',
    lpAddresses: {
      43113: '',
      43114: '0xcc592739c6c64f797e46cd00f12a6f15c2df1c04',
    },
    strategyAddresses: {
      43113: '',
      43114: '0x2fcf9ad14a8f880741ddb014d58d9e8f5f2b2331',
    },
    tokenSymbol: 'LYD',
    tokenAddresses: {
      43113: '',
      43114: '0x4C9B4E1AC6F24CdE3660D5E4Ef1eBF77C710C084',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x0000000000000000000000000000000000000000',
    },
    quoteTokenSymbol: QuoteToken.PEFI,
    quoteTokenAddresses: contracts.pefi,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Lydia',
    name: 'pendingPEFI',
    displayedDecimals: 2,
  },
  {
    pid: 22,
    lpSymbol: 'Joe PEFI-BOOFI LP',
    lpAddresses: {
      43113: '',
      43114: '0x701c8e84e9ac24b54b957d549cddf544b3e9fb83',
    },
    strategyAddresses: {
      43113: '',
      43114: '0x14b05abe2fbe9d5c01375e848a6969ad4ac7b076',
    },
    tokenSymbol: 'BOOFI',
    tokenAddresses: {
      43113: '',
      43114: '0xB00F1ad977a949a3CCc389Ca1D1282A2946963b0',
    },
    pangolinRewardPoolAddresses: {
      43113: '',
      43114: '0x0000000000000000000000000000000000000000',
    },
    quoteTokenSymbol: QuoteToken.PEFI,
    quoteTokenAddresses: contracts.pefi,
    withdrawalFee: '0',
    hardApy: '896.65%',
    type: 'Joe',
    name: 'pendingPEFI',
    displayedDecimals: 2,
  },
]

export default v2Farms
