import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading } from '@penguinfinance/uikit'
import styled from 'styled-components'
import { BLOCKS_PER_YEAR, PEFI_PER_BLOCK, PEFI_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceAvaxUsdt, usePricePefiUsdt, usePriceEthUsdt } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'


//
const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const pefiPrice = usePricePefiUsdt()
  const avaxPrice = usePriceAvaxUsdt()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const ethPriceUsd = usePriceEthUsdt()

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stackedOnly, setStackedOnly] = useState(false)

  // const activeFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X')
  // const inactiveFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier === '0X')
  const activeFarms = farmsLP.filter((farm) => farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => farm.multiplier === '0X')
  const stackedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )
  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      const pefiPriceVsAVAX = new BigNumber(farmsLP.find((farm) => farm.pid === PEFI_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
          return farm
        }
        const pefiRewardPerBlock = PEFI_PER_BLOCK.times(farm.poolWeight)
        const cakeRewardPerYear = pefiRewardPerBlock.times(BLOCKS_PER_YEAR)

        // pefiPriceInQuote * cakeRewardPerYear / lpTotalInQuoteToken
        let apy = pefiPriceVsAVAX.times(cakeRewardPerYear).div(farm.lpTotalInQuoteToken)

        if (farm.quoteTokenSymbol === QuoteToken.USDT || farm.quoteTokenSymbol === QuoteToken.UST) {
          apy = pefiPriceVsAVAX.times(cakeRewardPerYear).div(farm.lpTotalInQuoteToken).times(avaxPrice)
        } else if (farm.quoteTokenSymbol === QuoteToken.ETH) {
          apy = pefiPrice.div(ethPriceUsd).times(cakeRewardPerYear).div(farm.lpTotalInQuoteToken)
        } else if (farm.quoteTokenSymbol === QuoteToken.PEFI) {
          apy = cakeRewardPerYear.div(farm.lpTotalInQuoteToken)
        } else if (farm.dual) {
          const pefiApy =
            farm && pefiPriceVsAVAX.times(pefiRewardPerBlock).times(BLOCKS_PER_YEAR).div(farm.lpTotalInQuoteToken)
          const dualApy =
            farm.tokenPriceVsQuote &&
            new BigNumber(farm.tokenPriceVsQuote)
              .times(farm.dual.rewardPerBlock)
              .times(BLOCKS_PER_YEAR)
              .div(farm.lpTotalInQuoteToken)

          apy = pefiApy && dualApy && pefiApy.plus(dualApy)
        }

        return { ...farm, apy }
      })
      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          removed={removed}
          avaxPrice={avaxPrice}
          pefiPrice={pefiPrice}
          ethPrice={ethPriceUsd}
          ethereum={ethereum}
          account={account}
        />
      ))
    },
    [farmsLP, avaxPrice, ethPriceUsd, pefiPrice, ethereum, account],
  )

  return (
    <Page>
      {/* <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center' }}>
        {TranslateString(696, 'Stake LP tokens to earn PEFI')}
      </Heading> */}
      <IgloosBgContainer />
      <IgloosBannerContainer>
        <BannerImage
          src={`${process.env.PUBLIC_URL}/images/farms/IglooHeader.gif`}
          alt="igloos banner"
        />
      </IgloosBannerContainer>
      {/* <FarmTabButtons stackedOnly={stackedOnly} setStackedOnly={setStackedOnly} /> */}
      <div>
        {/* <Divider /> */}

        <FlexLayout>
          <Route exact path={`${path}`}>
            {stackedOnly ? farmsList(stackedOnlyFarms, false) : farmsList(activeFarms, false)}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsList(inactiveFarms, true)}
          </Route>
        </FlexLayout>
        <IgloosPenguinImgContainer>
          <IgloosPenguinImg alt="igloos penguin" />
        </IgloosPenguinImgContainer>
      </div>
    </Page>
  )
}

const IgloosBgContainer = styled.div` 
  /* background-image: url("/images/farms/BackgroundwBucket-01.png"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/farms/igloo-background-${({ theme }) => (theme.isDark ? 'dark' : 'light')}.png');
  }
  z-index:-1;
  /* opacity: 0.3; */
`;

const IgloosPenguinImgContainer = styled.div`
  z-index: -1;
  position: sticky;
  left: 0px;
  right: 0px;
  margin-left: 0px;
  bottom: 100px;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-left: -200px;
  }
`

const IgloosPenguinImg = styled.img.attrs(props => ({
  src: props.theme.isDark ? `${process.env.PUBLIC_URL}/images/farms/penguin-with-candle.gif` : `${process.env.PUBLIC_URL}/images/farms/penguin-with-fish.gif`,
}))`
  width: 150px;
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 200px;
    src: '/images/farms/igloo-background-${({ theme }) => (theme.isDark ? 'dark' : 'light')}.png';
  }
`


const IgloosBannerContainer = styled.div`
  /* position: absolute; */
`

const BannerImage = styled.img`
  z-index: -1;
`

export default Farms
