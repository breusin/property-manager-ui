export const NavButton = ({ text, on, onClick }) => {
  return (
      <button onClick={onClick} disabled={on} >{text}</button>
  )
}