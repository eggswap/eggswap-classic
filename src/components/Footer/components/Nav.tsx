import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://explorer.expanse.tech/address/0x245A074cA9814fB46A21562bC70fAB92F8A3F779"
      >
        Chicken Contract
      </StyledLink>
      {/*<StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0xce84867c3c02b05dc570d0135103d3fb9cc19433"
      >
        EggSwap SUSHI-ETH
      </StyledLink> */}
      <StyledLink target="_blank" href="https://discord.gg/Cf9VCXR">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/eggswap">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/eggswap">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="https://medium.com/@eggswap">
        Medium
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
