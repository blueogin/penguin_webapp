import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'PEFI-AVAX LP',
    lpAddresses: {
      43113: '',
      43114: '0x494Dd9f783dAF777D3fb4303da4de795953592d0',
    },
    tokenSymbol: 'PEFI',
    tokenAddresses: {
      43113: '',
      43114: '0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c',
    },
    strategyAddress: '0xF4685D838C9386a6D87835901043C41fCdFb2767',
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAddresses: contracts.wavax,
    withdrawalFee: '3.2',
    hardApy: '896.65%',
    type: 'Penguin',
    name: 'pendingPEFI'
  },
  {
    pid: 1,
    lpSymbol: 'ETH-AVAX LP',
    lpAddresses: {
      43113: '',
      43114: '0x1aCf1583bEBdCA21C8025E172D8E8f2817343d65',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      43113: '',
      43114: '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15',
    },
    strategyAddress: '0xF554Fd8929D78cE804F4cB5D49b634cedFc3773E',
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAddresses: contracts.wavax,
    withdrawalFee: '3.2',
    hardApy: '196.24%',
    type: 'Penguin',
    name: 'pendingPEFI'
  },
  {
    pid: 2,
    lpSymbol: 'PEFI-PNG LP',
    lpAddresses: {
      43113: '',
      43114: '0x1bb5541eccda68a352649954d4c8ece6ad68338d',
    },
    tokenSymbol: 'PNG',
    tokenAddresses: {
      43113: '',
      43114: '0x60781C2586D68229fde47564546784ab3fACA982',
    },
    strategyAddress: '0xa5057745308fddC992a3744Bdb5147b7f4B66fc9',
    quoteTokenSymbol: QuoteToken.PEFI,
    quoteTokenAddresses: contracts.pefi,
    withdrawalFee: '3.2',
    hardApy: '967.57%',
    type: 'Penguin',
    name: 'pendingPEFI'
  },
  {
    pid: 3,
    lpSymbol: 'PEFI-SNOB LP',
    lpAddresses: {
      43113: '',
      43114: '0x0b9753D73e1c62933e913e9c2C94f2fFa8236F6C',
    },
    tokenSymbol: 'SNOB',
    tokenAddresses: {
      43113: '',
      43114: '0xC38f41A296A4493Ff429F1238e030924A1542e50',
    },
    strategyAddress: '0x572F58082d0b90A04877188F6F4E19bC42bACcCB',
    quoteTokenSymbol: QuoteToken.PEFI,
    quoteTokenAddresses: contracts.pefi,
    withdrawalFee: '3.2',
    hardApy: '1354.80%',
    type: 'Penguin',
    name: 'pendingPEFI'
  },
  {
    pid: 4,
    lpSymbol: 'PEFI-SUSHI LP',
    lpAddresses: {
      43113: '',
      43114: '0x8912a0fadf3588c6791e42310b549a7bc0047b0e',
    },
    tokenSymbol: 'SUSHI',
    tokenAddresses: {
      43113: '',
      43114: '0x39cf1BD5f15fb22eC3D9Ff86b0727aFc203427cc',
    },
    strategyAddress: '0x6F309836581e46A9f0CE8D3c68CE829982Ca1329',
    quoteTokenSymbol: QuoteToken.PEFI,
    quoteTokenAddresses: contracts.pefi,
    withdrawalFee: '3.2',
    hardApy: '1347.55%',
    type: 'Penguin',
    name: 'pendingPEFI'
  },
  {
    pid: 5,
    lpSymbol: 'PEFI-DAI LP',
    lpAddresses: {
      43113: '',
      43114: '0x94DF699f8AA08314cBdfcca7dD6cfAA5AB9E8e26',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      43113: '',
      43114: '0xbA7dEebBFC5fA1100Fb055a87773e1E99Cd3507a',
    },
    strategyAddress: '0x5a042b034e8764F97a5FcC66639cb4c64440cF7F',
    quoteTokenSymbol: QuoteToken.PEFI,
    quoteTokenAddresses: contracts.pefi,
    withdrawalFee: '4',
    hardApy: '300.35%',
    type: 'Penguin',
    name: 'pendingPEFI'
  },
  {
    pid: 6,
    lpSymbol: 'PEFI-LINK LP',
    lpAddresses: {
      43113: '',
      43114: '0x2656e72C5E07711E8d697C7B1009e31174c6DF66',
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      43113: '',
      43114: '0xB3fe5374F67D7a22886A0eE082b2E2f9d2651651',
    },
    strategyAddress: '0x57b2c4941aD01A21E4C473A922997315cb60368f',
    quoteTokenSymbol: QuoteToken.PEFI,
    quoteTokenAddresses: contracts.pefi,
    withdrawalFee: '4',
    hardApy: '300.35%',
    type: 'Penguin',
    name: 'pendingPEFI'
  },
  {
    pid: 7,
    lpSymbol: 'ETH-ZETH LP',
    lpAddresses: {
      43113: '',
      43114: '0xc37ECFA7Bbf1dF92Da7C4A3d92d8CF8657D1FF7f',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      43113: '',
      43114: '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15',
    },
    strategyAddress: '0x01B149E00997eD25Df10C1Ce2b938D748Ec393d3',
    quoteTokenSymbol: QuoteToken.ZETH,
    quoteTokenAddresses: contracts.zeth,
    withdrawalFee: '3.2',
    hardApy: '1354.80%',
    type: 'Gondola',
    name: 'pendingGondola'
  },
  {
    pid: 4,
    lpSymbol: 'USDT-ZUSDT LP',
    lpAddresses: {
      43113: '',
      43114: '0xE586dB7Db75B87A3E84110a73b99960F5f106c6A',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      43113: '',
      43114: '0xde3A24028580884448a5397872046a019649b084',
    },
    strategyAddress: '0x6969942558fdEd5c35dC8DDaA52C766c3208440E',
    quoteTokenSymbol: QuoteToken.ZUSDT,
    quoteTokenAddresses: contracts.zusdt,
    withdrawalFee: '3.2',
    hardApy: '1347.55%',
    type: 'Gondola',
    name: 'pendingGondola'
  },
  {
    pid: 2,
    lpSymbol: 'AVAX-ETH LP',
    lpAddresses: {
      43113: '',
      43114: '0x58128aB3EcBF703682EDe72f341944BFfe3524b9',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      43113: '',
      43114: '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15',
    },
    strategyAddress: '0x6Bd298Cf3de715F14B4EDc66aD671564F7F7F416',
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAddresses: contracts.wavax,
    withdrawalFee: '4',
    hardApy: '300.35%',
    type: 'Lydia',
    name: 'pendingLyd'
  },
  {
    pid: 3,
    lpSymbol: 'LYD-USDT LP',
    lpAddresses: {
      43113: '',
      43114: '0x752C59f22fAAA861108649F4596034796C69bC3f',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      43113: '',
      43114: '0xde3A24028580884448a5397872046a019649b084',
    },
    strategyAddress: '0x96195bfC63d8a18370aF94992465B95254d8Cb91',
    quoteTokenSymbol: QuoteToken.LYD,
    quoteTokenAddresses: contracts.lyd,
    withdrawalFee: '4',
    hardApy: '300.35%',
    type: 'Lydia',
    name: 'pendingLyd'
  },
  {
    pid: 7,
    lpSymbol: 'LYD-PNG LP',
    lpAddresses: {
      43113: '',
      43114: '0x161f750b753c7120599d07c352607F458ecB918e',
    },
    tokenSymbol: 'PNG',
    tokenAddresses: {
      43113: '',
      43114: '0x60781C2586D68229fde47564546784ab3fACA982',
    },
    strategyAddress: '0x59E4ffa4f04364f1dA99bA6aE01e25a661D3B577',
    quoteTokenSymbol: QuoteToken.LYD,
    quoteTokenAddresses: contracts.lyd,
    withdrawalFee: '3.2',
    hardApy: '1347.55%',
    type: 'Lydia',
    name: 'pendingLyd'
  },
  // // Pangolin
  // {
  //   lpSymbol: 'AVAX-PNG LP',
  //   lpAddresses: {
  //     43113: '',
  //     43114: '0xd7538cABBf8605BdE1f4901B47B8D42c61DE0367',
  //   },
  //   tokenSymbol: 'AVAX',
  //   tokenAddresses: {
  //     43113: '',
  //     43114: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
  //   },
  //   strategyAddress: '0x0B9f7bbA8934a93463317D9910BD8FE347f4C694',
  //   quoteTokenSymbol: QuoteToken.PNG,
  //   quoteTokenAddresses: contracts.png,
  //   withdrawalFee: '4',
  //   hardApy: '300.35%',
  //   type: 'Pangolin',
  //   name: 'pendingPangolin'
  // },
  // {
  //   pid: 3,
  //   lpSymbol: 'AVAX-ETH LP',
  //   lpAddresses: {
  //     43113: '',
  //     43114: '0x1aCf1583bEBdCA21C8025E172D8E8f2817343d65',
  //   },
  //   tokenSymbol: 'AVAX',
  //   tokenAddresses: {
  //     43113: '',
  //     43114: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
  //   },
  //   strategyAddress: '0x47fff475a0045508046F9658B125701447AbcCD5',
  //   quoteTokenSymbol: QuoteToken.ETH,
  //   quoteTokenAddresses: contracts.eth,
  //   withdrawalFee: '4',
  //   hardApy: '300.35%',
  //   type: 'Pangolin',
  //   name: 'pendingPangolin'
  // },
  // {
  //   pid: 7,
  //   lpSymbol: 'AVAX-LINK LP',
  //   lpAddresses: {
  //     43113: '',
  //     43114: '0xbbC7fFF833D27264AaC8806389E02F717A5506c9',
  //   },
  //   tokenSymbol: 'AVAX',
  //   tokenAddresses: {
  //     43113: '',
  //     43114: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
  //   },
  //   strategyAddress: '0x8dd033E43a848E33d2de504921E1578199C129fE',
  //   quoteTokenSymbol: QuoteToken.LINK,
  //   quoteTokenAddresses: contracts.link,
  //   withdrawalFee: '3.2',
  //   hardApy: '1347.55%',
  //   type: 'Pangolin',
  //   name: 'pendingPangolin'
  // },
]

export default farms
