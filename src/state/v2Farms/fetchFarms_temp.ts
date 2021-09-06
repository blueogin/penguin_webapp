import BigNumber from 'bignumber.js'
import erc20 from 'config/abi/erc20.json'
import v2MasterchefABI from 'config/abi/v2Masterchef.json'
import multicall from 'utils/multicall'
import v2FarmsConfig from 'config/constants/v2Farms'
import { getAddress, getV2MasterChefAddress } from 'utils/addressHelpers'
import getV2FarmMasterChefAbi from 'utils/getV2FarmMasterChefAbi'
import getV2FarmMasterChefAddress from 'utils/getV2FarmMasterChefAddress'
import { getPangolinLpPrice } from 'utils/price'
import { getBalanceNumber } from 'utils/formatBalance'
import { NON_ADDRESS } from 'config'

export const fetchMasterChefGlobalData = async () => {
  const [pefiEmissionPerSecond] = await multicall(v2MasterchefABI, [
    {
      address: getV2MasterChefAddress(),
      name: 'pefiEmissionPerSecond',
    },
  ])

  return { pefiPerBlock: new BigNumber(pefiEmissionPerSecond).div(new BigNumber(10).pow(18)).toNumber() }
}

export const fetchFarms = async () => {
  const data = await Promise.all(
    v2FarmsConfig.map(async (farmConfig) => {
      const lpAddress = getAddress(farmConfig.lpAddresses)
      const farmMasterChefAddress = getV2FarmMasterChefAddress(farmConfig.type)
      const calls = [
        // Balance of token in the LP contract
        {
          address: getAddress(farmConfig.tokenAddresses),
          name: 'balanceOf',
          params: [lpAddress],
        },
        // Balance of quote token on LP contract
        {
          address: getAddress(farmConfig.quoteTokenAddresses),
          name: 'balanceOf',
          params: [lpAddress],
        },
        // Balance of LP tokens in the master chef contract
        {
          address: lpAddress,
          name: 'balanceOf',
          params: [farmMasterChefAddress],
        },
        // Total supply of LP tokens
        {
          address: lpAddress,
          name: 'totalSupply',
        },
        // Token decimals
        {
          address: getAddress(farmConfig.tokenAddresses),
          name: 'decimals',
        },
        // Quote token decimals
        {
          address: getAddress(farmConfig.quoteTokenAddresses),
          name: 'decimals',
        },
      ]

      const [
        tokenBalanceLP,
        quoteTokenBalanceLP,
        lpTokenBalanceMC,
        lpTotalSupply,
        tokenDecimals,
        quoteTokenDecimals,
      ] = await multicall(erc20, calls)

      // Ratio in % a LP tokens that are in staking, vs the total number in circulation
      const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))

      // Total value in staking in quote token value
      // const lpTotalInQuoteToken = new BigNumber(quoteTokenBalanceLP)
      //   .div(new BigNumber(10).pow(18))
      //   .times(new BigNumber(2))
      //   .times(lpTokenRatio)

      // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
      const tokenAmount = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)).times(lpTokenRatio)
      // const quoteTokenAmount = new BigNumber(quoteTokenBalanceLP)
      //   .div(new BigNumber(10).pow(quoteTokenDecimals))
      //   .times(lpTokenRatio)

      try {
        const [info, totalAllocPoint, pendingTokens, totalLP, totalShares, pefiPerYear] = await multicall(
          getV2FarmMasterChefAbi(farmConfig.type),
          [
            {
              address: getV2FarmMasterChefAddress(farmConfig.type),
              name: 'poolInfo',
              params: [farmConfig.pid],
            },
            {
              address: getV2FarmMasterChefAddress(farmConfig.type),
              name: 'totalAllocPoint',
            },
            {
              address: getV2FarmMasterChefAddress(farmConfig.type),
              name: 'pendingTokens',
              params: [farmConfig.pid, NON_ADDRESS],
            },
            {
              address: getV2FarmMasterChefAddress(farmConfig.type),
              name: 'totalLP',
              params: [farmConfig.pid],
            },
            {
              address: getV2FarmMasterChefAddress(farmConfig.type),
              name: 'totalShares',
              params: [farmConfig.pid],
            },
            {
              address: getV2FarmMasterChefAddress(farmConfig.type),
              name: 'pefiPerYearToIgloo',
              params: [farmConfig.pid],
            },
          ],
        )

        const allocPoint = new BigNumber(info.allocPoint._hex)
        const withdrawFee = 100 * (info.withdrawFeeBP / 10000)
        const poolWeight = allocPoint.div(new BigNumber(totalAllocPoint))
        let lpPrice = 1
        let totalLiquidityInUsd = getBalanceNumber(new BigNumber(totalLP))
        if (farmConfig.type === 'Pangolin') {
          lpPrice = await getPangolinLpPrice(lpAddress)
          totalLiquidityInUsd = lpPrice * getBalanceNumber(new BigNumber(totalLP))
        }

        return {
          ...farmConfig,
          tokenAmount: tokenAmount.toJSON(),
          // quoteTokenAmount: quoteTokenAmount.toJSON(),
          // lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
          // tokenPriceVsQuote: quoteTokenAmount.div(tokenAmount).toJSON(),
          poolWeight: poolWeight.toJSON(),
          multiplier: allocPoint.div(100).toNumber(),
          withdrawFee,
          pendingTokens: pendingTokens[0],
          totalLp: new BigNumber(totalLP).toJSON(),
          totalLiquidityInUsd,
          totalShares: new BigNumber(totalShares).toJSON(),
          pefiPerYear: new BigNumber(pefiPerYear).toJSON(),
          maxBips: 10000,
          lpPrice,
        }
      } catch (error) {
        return {
          ...farmConfig,
          tokenAmount: new BigNumber(0),
          // quoteTokenAmount: new BigNumber(0),
          // lpTotalInQuoteToken: new BigNumber(0),
          // tokenPriceVsQuote: new BigNumber(0),
          poolWeight: new BigNumber(0),
          multiplier: 1,
          withdrawFee: 0,
          // pendingTokens: pendingTokens[0],
          pendingTokens: [],
          totalLp: new BigNumber(0),
          totalLiquidityInUsd: 0,
          totalShares: new BigNumber(0),
          pefiPerYear: new BigNumber(0),
          maxBips: 10000,
          lpPrice: 1,
        }
      }
    }),
  )
  return data
}
