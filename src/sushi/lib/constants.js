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
    2: '0x5AB20632Bad41463680975D3AaC3320F820F1fA1'
  },
  masterChef: {
    1: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd',
    2: '0x60af21B16cebA8dd5216d407bCE401740140A94C'
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    2: '0x331631B4bb93b9B8962faE15860BD538a389395A'
  },
  xSushi: {
    1: '0x8798249c2e607446efb7ad49ec89dd1865ff4272',
    2: '0x139C12444c63F9B62214D7c1bB8780AB618E6FB3'
  }
}

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0xA56cD5eCa1066be998d2f09DB7A1903E0E47d05d'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0x5AB20632Bad41463680975D3AaC3320F820F1fA1'
    },
    name: 'EGGs',
    symbol: 'EGG-WEXP UNI-V2 LP',
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
    symbol: 'LAB-WEXP UNI-V2 LP',
    tokenSymbol: 'LAB',
    icon: '🥚 ',
  },
  {
    pid: 2,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0xc150686B8b24f0e08f1d94773d0355427C25ef0e'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0x9D2761A714b5b2EfA325a8a3eee21BE32AACeB4A'
    },
    name: 'LOVE',
    symbol: 'LOVE-WEXP UNI-V2 LP',
    tokenSymbol: 'LOVE',
    icon: '❤️️ ',
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
    symbol: 'T64-WEXP UNI-V2 LP',
    tokenSymbol: 'T64',
    icon: '❤️️ ',
  },
]
