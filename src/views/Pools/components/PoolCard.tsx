import BigNumber from 'bignumber.js'
import React, { useCallback, useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { Button, IconButton, useModal, AddIcon, Image, Text, Flex, Tag } from 'penguinfinance-uikit2'
import { useWeb3React } from '@web3-react/core'
import UnlockButton from 'components/UnlockButton'
import { useERC20, useXPefi } from 'hooks/useContract'
import { useSousApprove } from 'hooks/useApprove'
import useI18n from 'hooks/useI18n'
import { useSousStake } from 'hooks/useStake'
import { useSousUnstake } from 'hooks/useUnstake'
import useBlock from 'hooks/useBlock'
import { getBalanceNumber } from 'utils/formatBalance'
import { useSousHarvest } from 'hooks/useHarvest'
import Balance from 'components/Balance'
import { QuoteToken, PoolCategory } from 'config/constants/types'
import { Pool } from 'state/types'
import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'
import CompoundModal from './CompoundModal'
import CardTitle from './CardTitle'
import Card from './Card'
import CardFooter from './CardFooter'

const RainbowLight = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const StyledCard = styled(Card)<{ isNestPage?: boolean }>`
  @media (min-width: 640px) {
    transform: ${(props) => props.isNestPage && 'scale(1.3)'};
    margin-top: ${(props) => props.isNestPage && '60px'};
  }
`

const StyledCardAccent = styled.div`
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 16px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const APYTag = styled(Tag)`
  span {
    color: #ce022d;
    margin-right: 4px;
  }
`

const CardContent = styled.div`
  padding: 24px;
  background: ${(props) => props.theme.card.background};
  border-radius: 32px 32px 0 0;
`

const CardAction = styled.div`
  background: ${(props) => props.theme.card.background};
  border-radius: 0 0 32px 32px;
`

interface PoolWithApy extends Pool {
  apy: BigNumber
}

interface HarvestProps {
  pool: PoolWithApy
  isMainPool: boolean
  isNestPage?: boolean
}

const PoolCard: React.FC<HarvestProps> = ({ pool, isMainPool, isNestPage }) => {
  const {
    sousId,
    image,
    tokenName,
    stakingTokenName,
    stakingTokenAddress,
    penguinNestsGuideLink,
    harvest,
    apy,
    tokenDecimals,
    poolCategory,
    totalStaked,
    totalSupply,
    startBlock,
    endBlock,
    isFinished,
    userData,
    stakingLimit,
  } = pool

  // Pools using native AVAX behave differently than pools using a token
  const isBnbPool = poolCategory === PoolCategory.BINANCE
  const TranslateString = useI18n()
  const stakingTokenContract = useERC20(stakingTokenAddress)
  const { account } = useWeb3React()
  const block = useBlock()
  const { onApprove } = useSousApprove(stakingTokenContract, sousId)
  const { onStake } = useSousStake(sousId, isBnbPool)
  const { onUnstake } = useSousUnstake(sousId)
  const { onReward } = useSousHarvest(sousId, isBnbPool)
  const xPefiContract = useXPefi()

  const [requestedApproval, setRequestedApproval] = useState(false)
  const [pendingTx, setPendingTx] = useState(false)
  const [handsOnPenalty, setHandsOnPenalty] = useState(0)

  const allowance = new BigNumber(userData?.allowance || 0)
  const stakingTokenBalance = new BigNumber(userData?.stakingTokenBalance || 0)
  const stakedBalance = new BigNumber(userData?.stakedBalance || 0)
  const earnings = new BigNumber(userData?.pendingReward || 0)

  const blocksUntilStart = Math.max(startBlock - block, 0)
  const blocksRemaining = Math.max(endBlock - block, 0)
  const accountHasStakedBalance = stakedBalance?.toNumber() > 0
  const needsApproval = !accountHasStakedBalance && !allowance.toNumber() && !isBnbPool
  const isCardActive = isFinished && accountHasStakedBalance
  const rewardTokenRatio =
    totalStaked && totalSupply ? new BigNumber(totalStaked).div(new BigNumber(totalSupply)).toJSON() : 1

  const convertedLimit = new BigNumber(stakingLimit).multipliedBy(new BigNumber(10).pow(tokenDecimals))
  const [onPresentDeposit] = useModal(
    <DepositModal
      max={stakingLimit && stakingTokenBalance.isGreaterThan(convertedLimit) ? convertedLimit : stakingTokenBalance}
      onConfirm={onStake}
      tokenName={stakingLimit ? `${stakingTokenName} (${stakingLimit} max)` : stakingTokenName}
    />,
  )

  const [onPresentCompound] = useModal(
    <CompoundModal earnings={earnings} onConfirm={onStake} tokenName={stakingTokenName} />,
  )

  const [onPresentWithdraw] = useModal(
    <WithdrawModal max={stakedBalance} onConfirm={onUnstake} tokenName={`x${stakingTokenName}`} />,
  )

  const fetchEarlyWithdrawalFee = useCallback(async () => {
    const earlyWithdrawalFee = await xPefiContract.methods.earlyWithdrawalFee().call()
    const maxEarlyWithdrawalFee = await xPefiContract.methods.MAX_EARLY_WITHDRAW_FEE().call()
    const penalty = (earlyWithdrawalFee / maxEarlyWithdrawalFee) * 100
    setHandsOnPenalty(penalty)
  }, [xPefiContract])

  useEffect(() => {
    fetchEarlyWithdrawalFee()
  }, [fetchEarlyWithdrawalFee])

  const getXPefiToPefiRatio = () => {
    return pool.totalStaked && pool.totalSupply
      ? new BigNumber(pool.totalStaked).div(new BigNumber(pool.totalSupply)).toJSON()
      : 1
  }

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false)
      }
    } catch (e) {
      console.error(e)
    }
  }, [onApprove, setRequestedApproval])

  const xPefiToPefiRatio = getXPefiToPefiRatio()

  return (
    <StyledCard isNestPage={isNestPage} isActive={isCardActive} isFinished={isFinished && sousId !== 0}>
      {isMainPool && <StyledCardAccent />}
      {isFinished && sousId !== 0 && <PoolFinishedSash />}
      <CardContent>
        <CardTitle isFinished={isFinished && sousId !== 0}>
          {tokenName} {TranslateString(348, 'Nest')}
        </CardTitle>
        <Flex justifyContent="flex-end">
          <APYTag variant="primary" outline>
            <span>474.5%</span> APY
          </APYTag>
          <MultiplierTag variant="primary">10X</MultiplierTag>
        </Flex>
        <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
          <Flex minWidth="100%" alignItems="center">
            <Image src={`/images/pools/${image || tokenName}.png`} width={64} height={64} alt={tokenName} />
            <Flex flexDirection="column" width="100%">
              <Flex ml="8px" justifyContent="space-between">
                <Text color="textSubtle" bold fontSize="14px">
                  xPEFI to PEFI:
                </Text>
                <Text color="textSubtle" bold fontSize="14px">
                  {Number(Number(xPefiToPefiRatio).toFixed(3))}
                </Text>
              </Flex>
              <Flex ml="8px" justifyContent="space-between">
                <Text color="textSubtle" bold fontSize="14px">
                  Paper Hands Penalty:
                </Text>
                <Text color="textSubtle" bold fontSize="14px">{`${Number(handsOnPenalty).toFixed(2)}%`}</Text>
              </Flex>
            </Flex>
          </Flex>
        </div>
        <StyledCardActions>
          {!account && <UnlockButton />}
          {account &&
            (needsApproval ? (
              <div style={{ flex: 1 }}>
                <Button disabled={isFinished || requestedApproval} onClick={handleApprove} scale="md">
                  {`Approve ${stakingTokenName}`}
                </Button>
              </div>
            ) : (
              <>
                <Button disabled={stakedBalance.eq(new BigNumber(0)) || pendingTx} onClick={onPresentWithdraw}>
                  {`Unstake ${stakingTokenName}`}
                </Button>
                <StyledActionSpacer />
                <IconButton disabled={isFinished && sousId !== 0} onClick={onPresentDeposit}>
                  <AddIcon color="background" />
                </IconButton>
              </>
            ))}
        </StyledCardActions>
        <StyledDetails>
          <div style={{ flex: 1 }}>
            <Text color="primary">{TranslateString(384, 'Your Stake')}:</Text>
          </div>
          <Balance fontSize="14px" isDisabled={isFinished} value={getBalanceNumber(stakedBalance)} />
          <TokenSymbol>
            <Text color="primary" fontSize="14px">
              {`x${stakingTokenName}`}
            </Text>
          </TokenSymbol>
        </StyledDetails>
        <StyledDetails>
          <div style={{ flex: 1 }}> </div>
          <Balance
            fontSize="14px"
            isDisabled={isFinished}
            value={new BigNumber(getBalanceNumber(stakedBalance)).times(new BigNumber(rewardTokenRatio)).toNumber()}
          />
          <TokenSymbol>
            <Text color="primary" fontSize="14px">
              {stakingTokenName}
            </Text>
          </TokenSymbol>
        </StyledDetails>
      </CardContent>
      <CardAction>
        <CardFooter
          penguinNestsGuideLink={penguinNestsGuideLink}
          totalStaked={totalStaked}
          blocksRemaining={blocksRemaining}
          isFinished={isFinished}
          blocksUntilStart={blocksUntilStart}
          poolCategory={poolCategory}
        />
      </CardAction>
    </StyledCard>
  )
}

const PoolFinishedSash = styled.div`
  background-image: url('/images/pool-finished-sash.svg');
  background-position: top right;
  background-repeat: not-repeat;
  height: 135px;
  position: absolute;
  right: -24px;
  top: -24px;
  width: 135px;
`

const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  width: 100%;
  box-sizing: border-box;
`

const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledDetails = styled.div`
  display: flex;
  font-size: 14px;
`

const TokenSymbol = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
`

export default PoolCard
