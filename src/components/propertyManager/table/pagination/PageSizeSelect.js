export const PageSizeSelect = ({ pageSize, setPageSize }) => {

    const choices = [10, 25, 50, 100]

    return (
         <select value={pageSize}
           onChange={e => setPageSize(Number(e.target.value))}>
           {choices.map(
               pageSize => (<option key={pageSize} value={pageSize}>Show {pageSize}</option>
           ))}
         </select>
    )
}