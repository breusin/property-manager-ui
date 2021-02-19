export const NavButtonStrip = ({currentPage, gotoPage, lastPage}) => {

  return (
    <>
        <button onClick={() => gotoPage(0)} disabled={currentPage == 0} >&lt;&lt;</button>{' '}
        <button onClick={() => gotoPage(currentPage - 1)} disabled={currentPage == 0} >&lt;</button>{' '}
        <button onClick={() => gotoPage(currentPage + 1)} disabled={currentPage == lastPage} >&gt;</button>{' '}
        <button onClick={() => gotoPage(lastPage)} disabled={currentPage == lastPage} >&gt;&gt;</button>{' '}
    </>
  )
}