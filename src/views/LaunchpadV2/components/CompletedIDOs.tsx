import React from 'react'
import styled from 'styled-components'
import { Text } from 'penguinfinance-uikit2'
import FlexLayout from 'components/layout/Flex'
import IDOCard from './IDOCard';
import { completedIDOs } from '../config'

const CompletedIDOs = () => {
  return (
    <>
      <Label fontSize="36px" lineHeight='54px' mt="48px" mb="16px" fontWeight={500} color='white'>
        Completed IDOs
      </Label>
      <StyledFlexLayout>
        {completedIDOs.map((idoData) => {
          return (
            <IDOCard idoData={idoData} />
          )
        })}
      </StyledFlexLayout>
    </>
  )
}

const StyledFlexLayout = styled(FlexLayout)`
  margin-left: -8px;
  margin-right: -8px;

  @media (min-width: 640px) {
    margin-left: -16px;
    margin-right: -16px;
  }

  @media (min-width: 1400px) {
    margin-left: -32px;
    margin-right: -32px;
  }

  & > * {
    @media (min-width: 1400px) {
      margin-left: 16px;
      margin-right: 16px;
      min-width: 320px;
      max-width: 30%;
      width: 100%;
    }
  }
`

const Label = styled(Text)`
  color: white;
  font-size: 24px;
  line-height: 36px;

  @media (min-width: 968px) {
    font-size: 36px;
    line-height: 54px;
    text-align: left;
  }
`

export default CompletedIDOs
