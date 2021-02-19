export const PageIndicator = ({ pageIndex, pageCount }) => {
    return (
        <span>
          Page{' '}<strong>{pageIndex + 1} of {pageCount}</strong>{' '}
        </span>
    )
}