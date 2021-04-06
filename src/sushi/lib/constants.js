import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0xaf69b94F4A1BBb09aD54DAaFca4629D915BD84E5',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0xFaF3dDcB8d17dB02e08e45F02aFb8D427669d592',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

export const contractAddresses = {
  sushi: {
    1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    2: '0xd1365a5Af713cde10C6ac3fB9EDBB2bBbd4B2Ba2'
  },
  masterChef: {
    1: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd',
    2: '0x6680B66406DC1f1bcFfdbacA320F9D950e65dBA0'
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    2: '0x331631B4bb93b9B8962faE15860BD538a389395A'
  },
  xSushi: {
    1: '0x8798249c2e607446efb7ad49ec89dd1865ff4272',
    2: '0x56C28AA1aE5Be73fdbd73634736AE9BD1C3b78Fb'
  },
  burnToMint: {
    1: '0x8798249c2e607446efb7ad49ec89dd1865ff4272',
    2: '0x5AD51ce8073ff3aBf48a2966f720eA4e09ec1648'
  }
}
export const supportedPools = [
  {
    pid: 5,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0xd985c19c547386D99eCA85f86c0aFcf257CE6982'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0xd1365a5Af713cde10C6ac3fB9EDBB2bBbd4B2Ba2'
    },
    name: 'EGGs',
    symbol: 'EGG-WEXP ELP',
    tokenSymbol: 'EGG',
    icon: '🥚 ',
  },
  {
    pid: 1,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0x9f17C654Ca15d2bE76CfDF6cb806A4b8e4678EeD'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0x3b4cfcc4532eec161860cb6544f49947544d940d'
    },
    name: 'Tokenlab',
    symbol: 'LAB-WEXP ELP',
    tokenSymbol: 'LAB',
    icon: '🍄 ',
  },
  {
    pid: 2,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0x90390A27DBe65991cED136Ca6F95fd5953C5e1B8'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0x4f5ec5a69dbe12c48ca1edc9c52b1e8896aed932'
    },
    name: 'PEX',
    symbol: 'PEX-WEXP ELP',
    tokenSymbol: 'PEX',
    icon: '🍭️ ',
  },
  {
    pid: 3,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0x505B2Fe24Aff173291fEAd573E90dFb21c754bFd'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0x72332c512bf2dA5A7Cd11752b380F7d8fcBba847'
    },
    name: 'T64',
    symbol: 'T64-WEXP ELP',
    tokenSymbol: 'T64',
    icon: '🎁 ',
  },
  {
    pid: 4,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0xc150686B8b24f0e08f1d94773d0355427C25ef0e'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0x9D2761A714b5b2EfA325a8a3eee21BE32AACeB4A'
    },
    name: 'LOVE',
    symbol: 'LOVE-WEXP ELP',
    tokenSymbol: 'LOVE',
    icon: '❤️️ ',
  },
  {
    pid: 6,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0x7eD2e1dAE2bE447d0153C03e1e63dD27E0F5198c'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0x0D14F385647E66283E8E5D9c567296751Ac7ee7D'
    },
    name: 'WAGMI',
    symbol: 'WAGMI-WEXP ELP',
    tokenSymbol: 'WAGMI',
    icon: '🦭 ',
  },
  {
    pid: 7,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0x442DB81f31A8AbF774d4DE3154744Ea61cFAa73f'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0x54451dBE4B925aa5E312E232c6Cba2EAA0d98169'
    },
    name: 'SVIT',
    symbol: 'SVIT-WEXP ELP',
    tokenSymbol: 'SVIT',
    icon: '🍇 ',
  },
  {
    pid: 8,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0x2e986C6A33518915649406cAe035979249d46642'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0x87Eb2fdF607B46F324984771FfDF2A0396139bDf'
    },
    name: 'PRM',
    symbol: 'PRM-WEXP ELP',
    tokenSymbol: 'PRM',
    icon: '⛏️ ',
  },
  {
    pid: 9,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0xc0E53B3D197f48D0eF550B7351173F466aB780Bb'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0xD13C89Ad0686A974afe911EbfC11C48a72F57390'
    },
    name: 'UBQ',
    symbol: 'UBQ-WEXP ELP',
    tokenSymbol: 'UBQ',
    icon: '🌿 ',
  },
  {
    pid: 10,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0x1A5192b21080A505c4bd90F8584dbCa2F24d6D75'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0x097eEe28cD6Ce752e8C0Bb694cdb50669F83ab89'
    },
    name: 'Test BNB',
    symbol: 'xBNB-WEXP ELP',
    tokenSymbol: 'xBNB',
    icon: '🐉 ',
  },
  {
    pid: 11,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0x29E6a7eE4Aa395f58D2037740B7B2bA8f6b84384'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0x586fc83f7610c1388ab477aba51428f9f39dfec6'
    },
    name: 'BTFD',
    symbol: 'BTFD-WEXP ELP',
    tokenSymbol: 'BTFD',
    icon: '🦍 ',
  },
  {
    pid: 12,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0x6cbDE755Af731cA91dCE6fD4211d3867a04A8ad2'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0xc1a1c16A18928d08B46ABB61d382579246c6E9E1'
    },
    name: 'eBNB',
    symbol: 'eBNB-WEXP ELP',
    tokenSymbol: 'eBNB',
    icon: '🐰 ',
  },
  {
    pid: 13,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0xb7C9E64A42Ad69e1a1654B98e129E5201d4e585C'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0xbd5870a474b7a9b112d34b24993b4f3acf6dd874'
    },
    name: 'Vaultz',
    symbol: 'Vaultz-WEXP ELP',
    tokenSymbol: 'VAULTZ',
    icon: '🔒 ',
  },
  {
    pid: 14,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0x7f7a3F2c1fef5ADA32c0CeC3428EB3c515a6851e'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0xe57f6bbc0fcf5b89b2d1af54ea4d4a1aaea678ad'
    },
    name: 'Autoburn',
    symbol: 'EABN-WEXP ELP',
    tokenSymbol: 'EABN',
    icon: '🔥 ',
  },
  {
    pid: 15,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0x855aA3637853A2c294F9dF1AED68aC716Ee42416'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0x7336fa672f229c7325accb5ef867b914a6062ad0'
    },
    name: 'ALYM',
    symbol: 'ALYM-WEXP ELP',
    tokenSymbol: 'ALYM',
    icon: '✨ ',
  },
  {
    pid: 16,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0x9bB9fB20bE2Da798db97D167df69B2C6f72311C7'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0x0A5B3BE530e9Ca3158b84Ab339a3403d7E44c45f'
    },
    name: 'STEAK',
    symbol: 'STEAK-WEXP ELP',
    tokenSymbol: 'STEAK',
    icon: '🥩 ',
  }
]
