import { NavButton } from "../pagination/NavButton"
import { NavButtonStrip } from "../pagination/NavButtonStrip"
import { PageIndicator } from "../pagination/PageIndicator"
import { PageJump } from "../pagination/PageJump"
import { PageSizeSelect } from "../pagination/PageSizeSelect"

export const PageNavBar = ({pageIndex, gotoPage, pageCount, pageSize, setPageSize}) => {
    return (
      <div>
        <NavButtonStrip currentPage={pageIndex} gotoPage={gotoPage} lastPage={pageCount - 1}/>
        <PageIndicator pageIndex={pageIndex} pageCount={pageCount} />
        <span> | </span>
        <PageJump gotoPage={gotoPage} pageIndex={pageIndex} />
        {' '}
        <PageSizeSelect pageSize={pageSize} setPageSize={setPageSize} />
      </div>
    )
}