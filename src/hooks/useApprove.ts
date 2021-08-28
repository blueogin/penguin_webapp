import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Contract } from 'web3-eth-contract'
import { ethers } from 'ethers'
import { useDispatch } from 'react-redux'
import {
  updateUserAllowance,
  updateV2PoolUserAllowance,
  fetchFarmUserDataAsync,
  updateNestMigratorAllowance,
} from 'state/actions'
import { approve } from 'utils/callHelpers'
import { getNestMigratorAddress, getV2NestAddress } from 'utils/addressHelpers'
import {
  useMasterchef,
  usePenguin,
  useSousChef,
  useV2SousChef,
  useLottery,
  useStrategyContract,
  useXPefi,
} from './useContract'
// Approve a Farm
export const useApprove = (lpContract: Contract, type?: string) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef(type)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, masterChefContract, account)
      dispatch(fetchFarmUserDataAsync(account))
      return tx
    } catch (e) {
      return false
    }
  }, [account, dispatch, lpContract, masterChefContract])

  return { onApprove: handleApprove }
}

// Approve a Farm
export const useStrategyApprove = (lpContract: Contract, lpSymbol: string, type: string) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const strategyContract = useStrategyContract(lpSymbol, type)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, strategyContract, account)
      dispatch(fetchFarmUserDataAsync(account))
      return tx
    } catch (e) {
      return false
    }
  }, [account, dispatch, lpContract, strategyContract])

  return { onApprove: handleApprove }
}

// Approve a Pool
export const useSousApprove = (lpContract: Contract, sousId) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const sousChefContract = useSousChef(sousId)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, sousChefContract, account)
      dispatch(updateUserAllowance(sousId, account))
      return tx
    } catch (e) {
      return false
    }
  }, [account, dispatch, lpContract, sousChefContract, sousId])

  return { onApprove: handleApprove }
}

// Approve the lottery
export const useLotteryApprove = () => {
  const { account } = useWeb3React()
  const penguinContract = usePenguin()
  const lotteryContract = useLottery()

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(penguinContract, lotteryContract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, penguinContract, lotteryContract])

  return { onApprove: handleApprove }
}

// Approve an IFO
export const useIfoApprove = (tokenContract: Contract, spenderAddress: string) => {
  const { account } = useWeb3React()
  const onApprove = useCallback(async () => {
    try {
      const tx = await tokenContract.methods
        .approve(spenderAddress, ethers.constants.MaxUint256)
        .send({ from: account })
      return tx
    } catch {
      return false
    }
  }, [account, spenderAddress, tokenContract])

  return onApprove
}

// v2
// Approve nestMigrator contract
export const useNestMigrateApprove = () => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const xPefiContract = useXPefi()

  const handleApprove = useCallback(async () => {
    try {
      const tx = await xPefiContract.methods
        .approve(getNestMigratorAddress(), ethers.constants.MaxUint256)
        .send({ from: account })
      dispatch(updateNestMigratorAllowance(account))
      return tx
    } catch (e) {
      return false
    }
  }, [account, xPefiContract, dispatch])

  return { onNestMigrateApprove: handleApprove }
}

export const useV2SousApprove = (lpContract: Contract, sousId) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const sousChefContract = useV2SousChef(sousId)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, sousChefContract, account)
      dispatch(updateV2PoolUserAllowance(sousId, account))
      return tx
    } catch (e) {
      return false
    }
  }, [account, dispatch, lpContract, sousChefContract, sousId])

  return { onApprove: handleApprove }
}
