import { NavButton } from './NavButton'

export const NavButtonStrip = (props) => {

  const {fa,fe,pa,pe,na,ne,la,le} = props

  return (
    <>
      <NavButton text="<<" onClick={fa} on={fe} />{' '}
      <NavButton text="<" onClick={pa} on={pe} />{' '}
      <NavButton text=">" onClick={na} on={ne} />{' '}
      <NavButton text=">>" onClick={la} on={le} />{' '}
    </>
  )
}