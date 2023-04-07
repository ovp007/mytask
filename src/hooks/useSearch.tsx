import { Button, Input, InputRef, Space } from "antd";
import { ColumnType } from "antd/es/table";
import { FilterConfirmProps } from "antd/es/table/interface";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { Task } from "../api/task-management.service/task-management-service";
import { SearchOutlined } from "@ant-design/icons";
import usePaginator from "./app-paginator-component";
import { FilterParams } from "../pages/models/filterParams";
import { Filter } from "../pages/models/filter.model";

const useSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);
  const [searchedParams, setSearchParams] = useState<Filter[]>([
    // {
    //   column: "dataIndex",
    //   searchText: "selectedKeys[0]",
    // },
  ]);

  //   const searchedParams: Filter[] = [
  //     {
  //       column: "dataIndex",
  //       searchText: "selectedKeys[0]",
  //     },
  //   ];

  type DataIndex = keyof Task;

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
    console.log(selectedKeys);
    setSearchParams([
      ...searchedParams,
      {
        column: dataIndex,
        searchText: selectedKeys[0],
      },
    ]);
    // const newSerchFilter: Filter = {
    //   column: dataIndex,
    //   searchText: selectedKeys[0],
    // };

    // searchedParams.push(newSerchFilter);
    // console.log(searchedParams);
    // // const newSerchFilter2: Filter = {
    // //   column: "dataIndex",
    // //   searchText: "selectedKeys[0]",
    // // };
    // // const newFilterParams = {
    // //   ...searchedParams,
    // //   newSerchFilter,
    // //   newSerchFilter2,
    // // };
    // // console.log(newFilterParams);
    // // setSearchParams(newFilterParams);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<Task> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            Close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  return {
    searchText,
    searchedColumn,
    getColumnSearchProps,
    searchedParams,
  };
};

export default useSearch;
