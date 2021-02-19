import React, { useState, useMemo, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useTable, usePagination, useFilters, useGlobalFilter, useRowSelect } from 'react-table'
import { COLUMNS } from './columns'
import '../../table.css'
import { GlobalFilter } from "../filter/GlobalFilter"
import { ColumnFilter } from "../filter/ColumnFilter"
import { PageNavBar } from "./pagination/PageNavBar"
import { Checkbox } from "../selection/Checkbox"

export const PropertyTable = ({tableData, setSelectedRows}) => {

  const columns = useMemo(() => COLUMNS, [])

  const data = React.useMemo(() => tableData, [tableData]);


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
    selectedFlatRows,
    visibleColumns
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

  useEffect(() => {
    setSelectedRows(selectedFlatRows.map(row => row.original));
  }, [setSelectedRows, selectedFlatRows]);

  const { globalFilter, pageIndex, pageSize } = state

  var rc = 0;

  return (
    <>

      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} count={rc}/>
      <PageNavBar pageIndex={pageIndex} gotoPage={gotoPage} pageCount={pageCount} pageSize={pageSize} setPageSize={setPageSize} />
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
                  rc++
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <PageNavBar pageIndex={pageIndex} gotoPage={gotoPage} pageCount={pageCount} pageSize={pageSize} setPageSize={setPageSize} />
    </>
  )
}

export default PropertyTable

