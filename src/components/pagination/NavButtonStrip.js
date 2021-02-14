import { NavButton } from './NavButton'

export const NavButtonStrip = ({currentPage, gotoPage, lastPage}) => {

  function gotoFirstPage() {
      console.log("goto firstPage")
      gotoPage(0)
  }

  function gotoPrevPage() {
      console.log("goto prevPage")
      gotoPage(currentPage - 1)
  }

  function gotoNextPage() {
      console.log("goto nextPage")
      gotoPage(currentPage + 1)
  }

  function gotoLastPage() {
      console.log("goto lastPage="+lastPage)
      gotoPage(lastPage)
  }

  return (
    <>
      <NavButton
          text="<<"
          onClick={gotoFirstPage}
          disabled={currentPage == 0} />
      {' '}
      <NavButton
          text="<"
          onClick={gotoPrevPage}
          disabled={currentPage == 0} />
      {' '}
      <NavButton
          text=">"
          onClick={gotoNextPage}
          disabled={currentPage == lastPage} />
      {' '}
      <NavButton
                text=">>"
                onClick={gotoLastPage}
                disabled={currentPage == lastPage} />
      </>
  )
}