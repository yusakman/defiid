import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Ripple } from "primereact/ripple";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import "primeicons/primeicons.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import { useSelector } from "react-redux";
import "./style.scss";
import { formatCurrency, formatPool, formatAPY } from "../formatTemplate";

const YieldsTable = () => {
  const yields = useSelector((state) => state.protocols.yields);
  const currency = useSelector((state) => state.protocols.currency);

  const [first1, setFirst1] = useState(0);
  const [rows1, setRows1] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInputTooltip, setPageInputTooltip] = useState(
    "Tekan 'Enter' untuk pergi ke halaman ini."
  );
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    symbol: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
  });

  const rowIndexTemplate = (rowData, props) => {
    let index = parseInt(props.rowIndex + 1, 10);
    return (
      <React.Fragment>
        <span>{index}</span>
      </React.Fragment>
    );
  };

  const onCustomPage1 = (event) => {
    setFirst1(event.first);
    setRows1(event.rows);
    setCurrentPage(event.page + 1);
  };

  const onPageInputKeyDown = (event, options) => {
    if (event.key === "Enter") {
      const page = parseInt(currentPage);
      if (page < 1 || page > options.totalPages) {
        setPageInputTooltip(
          `Value must be between 1 and ${options.totalPages}.`
        );
      } else {
        const first = currentPage ? options.rows * (page - 1) : 0;

        setFirst1(first);
        setPageInputTooltip("Press 'Enter' key to go to this page.");
      }
    }
  };

  const onPageInputChange = (event) => {
    setCurrentPage(event.target.value);
  };

  const poolBodyTemplate = (rowData) => {
    return formatPool(rowData.symbol, rowData.pool);
  };

  const apyBodyTemplate = (rowData) => {
    return formatAPY(rowData.apy)
  }

  const tvlBodyTemplate = (rowData) => {
    return formatCurrency(rowData.tvlUsd, currency);
  };

  const template1 = {
    layout:
      "RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink ",
    PrevPageLink: (options) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className="p-3">Previous</span>
          <Ripple />
        </button>
      );
    },
    NextPageLink: (options) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className="p-3">Next</span>
          <Ripple />
        </button>
      );
    },
    PageLinks: (options) => {
      if (
        (options.view.startPage === options.page &&
          options.view.startPage !== 0) ||
        (options.view.endPage === options.page &&
          options.page + 1 !== options.totalPages)
      ) {
        const className = classNames(options.className, { "p-disabled": true });

        return (
          <span className={className} style={{ userSelect: "none" }}>
            ...
          </span>
        );
      }

      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
        >
          {options.page + 1}
          <Ripple />
        </button>
      );
    },
    RowsPerPageDropdown: (options) => {
      const dropdownOptions = [
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 50, value: 50 },
        { label: "All", value: options.totalRecords },
      ];

      const limitStyle = {
        margin: "0px",
        marginLeft: "10px",
        padding: "0px",
      };

      return (
        <div>
          <p style={limitStyle}>Limit</p>
          <Dropdown
            value={options.value}
            options={dropdownOptions}
            onChange={options.onChange}
          />
        </div>
      );
    },

    CurrentPageReport: (options) => {
      const jumpToStyle = {
        margin: "0px",
        marginLeft: "5px",
        padding: "0px",
      };

      return (
        <span
          className="mx-3"
          style={{ color: "var(--text-color)", userSelect: "none" }}
        >
          <p style={jumpToStyle}>Jump to page</p>
          <InputText
            size="2"
            id="inputToPage"
            className="ml-1"
            value={currentPage}
            tooltip={pageInputTooltip}
            onKeyDown={(e) => onPageInputKeyDown(e, options)}
            onChange={onPageInputChange}
          />
        </span>
      );
    },
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-between align-items-center">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Cari Pools"
          />
        </span>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <div className="table-wrapper" id="pool">
      <div className="card">
        <DataTable
          value={yields}
          paginator
          paginatorTemplate={template1}
          first={first1}
          header={header}
          filters={filters}
          filterDisplay='menu'
          globalFilterFields={['symbol']}
          rows={rows1}
          onPage={onCustomPage1}
          emptyMessage="Tidak ditemukan"
          responsiveLayout="scroll"
        >
          <Column field="Index" header="" body={rowIndexTemplate}></Column>
          <Column field="symbol" header="Pool" body={poolBodyTemplate}></Column>
          <Column
            field="apy"
            header="APY"
            body={apyBodyTemplate}
            sortable
          ></Column>
          <Column field="project" header="Project"></Column>
          <Column field="chain" header="Chain"></Column>
          <Column
            field="tvlUsd"
            header="TVL"
            body={tvlBodyTemplate}
            sortable
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default YieldsTable;
