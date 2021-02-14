export const PageJump = ({ gotoPage, pageIndex }) => {
    return (
        <span>
          Go to page:{' '}
          <input type='number' defaultValue={pageIndex + 1 || 0}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
            style={{ width: '50px' }}
          />
        </span>
    )
}