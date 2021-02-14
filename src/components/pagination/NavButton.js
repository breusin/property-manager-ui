export const NavButton = ({ text, disabled, onClick }) => {
  return (
      <button onClick={onClick} disabled={disabled} >{text}</button>
  )
}