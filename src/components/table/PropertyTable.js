import React, { useMemo } from 'react'
import { useTable, usePagination, useFilters, useGlobalFilter, useRowSelect } from 'react-table'
import MOCK_DATA from '../MOCK_DATA2.json'
import { COLUMNS } from '../columns'
import '../table.css'
import { GlobalFilter } from "../filter/GlobalFilter"
import { ColumnFilter } from "../filter/ColumnFilter"
import { NavButton } from "../pagination/NavButton"
import { NavButtonStrip } from "../pagination/NavButtonStrip"
import { Checkbox } from "../selection/Checkbox"

export const PropertyTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const defaultColumn = React.useMemo(() => ({
      Filter: ColumnFilter
  }), [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    setGlobalFilter,
    selectedFlatRows
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0 }
    },
    useFilters,
    useGlobalFilter,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [ {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />
        },
        ...columns
      ])
    }
  )

  const { globalFilter, pageIndex, pageSize } = state

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <NavButtonStrip
          fa={() => gotoPage(0)} fe={!canPreviousPage}
          pa={() => previousPage()} pe={!canPreviousPage}
          na={() => nextPage()} ne={!canNextPage}
          la={() => gotoPage(pageCount - 1)} le={!canNextPage}
        />
        <span>
          Page{' '}<strong>{pageIndex + 1} of {pageOptions.length}</strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input type='number' defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
            style={{ width: '50px' }}
          />
        </span>{' '}
        <select value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}>
          {[10, 25, 50, 100].map(
              pageSize => (<option key={pageSize} value={pageSize}>Show {pageSize}</option>
          ))}
        </select>
      </div>
      <pre>
              <code>
                {JSON.stringify(
                  {
                    selectedFlatRows: selectedFlatRows.map(row => row.original)
                  },
                  null,
                  2
                )}
              </code>
            </pre>
    </>
  )
}