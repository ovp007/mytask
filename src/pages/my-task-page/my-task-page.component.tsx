import { Button, Input, InputRef, Space } from "antd";
import Table, { ColumnsType, TableProps } from "antd/es/table";
import { ArrowRightOutlined, UserOutlined } from "@ant-design/icons";
import { FC, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useTasks from "../../hooks/useTasks";
import { Task } from "../../api/task-management.service/task-management-service";
import usePaginator from "../../hooks/app-paginator-component";
import useSearch from "../../hooks/useSearch";
import { useNavigate } from "react-router-dom";
import { useTaskDetail2 } from "../../hooks/my-task.hook";

const MyTaskPage: FC = () => {
  const { tasks, error, isLoading } = useTasks();

  const { getColumnSearchProps, searchText, searchedColumn, searchedParams } =
    useSearch();
  const { page, pageSize, pageSizeOptions, showTotal, handlePaginate } =
    usePaginator();
  const navigate = useNavigate();

  const filterData = (tasks: any) =>
    tasks.map((item: Task) => ({
      key: item,
      value: item,
      text: item,
    }));

  const columns: ColumnsType<Task> = [
    {
      title: "Id",
      dataIndex: "id",
      sorter: (record1, record2) => {
        return record1.id - record2.id;
      },
      ...getColumnSearchProps("id"),
    },
    {
      title: "Task Name",
      dataIndex: "task_definition_name",
      sorter: (record1, record2) => {
        return (
          record1.task_definition_name.length -
          record2.task_definition_name.length
        );
      },
      filters: filterData(
        tasks
          .map((item) => item.task_definition_name)
          .filter((value, index, self) => self.indexOf(value) === index)
      ),
      onFilter: (value, record) =>
        record.task_definition_name.indexOf(value) === 0,
    },

    {
      title: "Task Status",
      dataIndex: "task_instance_status",
      sorter: (record1, record2) => {
        return (
          record1.task_instance_status.length -
          record2.task_instance_status.length
        );
      },
      filters: filterData(
        tasks
          .map((item) => item.task_instance_status)
          .filter((value, index, self) => self.indexOf(value) === index)
      ),
      onFilter: (value, record) =>
        record.task_instance_status.indexOf(value) === 0,

      // filteredValue: filteredInfo.task_instance_status || null,
      // onFilter: (value: string, record) => {
      //   record.task_instance_status.includes(value);
      // },
    },
    {
      title: "Created At",
      dataIndex: "task_instance_created_at",
      sorter: (record1, record2) => {
        return (
          record1.task_definition_name.length -
          record2.task_definition_name.length
        );
      },
    },
    {
      title: "Process Name",
      dataIndex: "process_instance_name",
      ...getColumnSearchProps("process_instance_name"),
    },
    {
      title: "Process Type",
      dataIndex: "process_definition_type",
    },
    {
      title: "Effective Date",
      dataIndex: "process_instance_effective_date",
    },

    {
      title: "Actions",
      key: "actions",
      align: "right",
      render: (_, task) => {
        return (
          <Space>
            <Button type="link" icon={<UserOutlined />} />
            <Link to={`/mytask/${task.id}`}>
              <Button type="link" icon={<ArrowRightOutlined />} />
            </Link>
          </Space>
        );
      },
    },
  ];

  const handleOnRow = (record: Task, rowIndex: number | undefined) => {
    return {
      onClick: () => {
        console.log(record);
        navigate(`/mytask/${record.id}`);
        console.log(searchedParams);
      },
    };
  };

  const handleTableChange = (
    pagination: any,
    filters: any,
    sorter: any,
    extra: { currentDataSource: Task[] }
  ) => {
    // return setTotal(extra.currentDataSource.length);
  };

  const [hello, setHello] = useState("");

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <h1>My Task</h1>
      <div>
        {searchedParams.map((item, index) => (
          <li key={index}>{item.searchText}</li>
        ))}
      </div>
      {/* <div>{searchFilter}</div> */}
      <Table
        dataSource={tasks}
        columns={columns}
        rowKey={(task) => task.id ?? ""}
        onRow={handleOnRow}
        onChange={handleTableChange}
        pagination={{
          current: page,
          total: tasks.length,
          showTotal: showTotal,
          pageSize: pageSize,
          pageSizeOptions: pageSizeOptions,
          onChange: (page, pageSize) => {
            {
              handlePaginate(page, pageSize);
            }
          },
        }}
      >
        {/* <Column
          title="Action"
          key="action"
          render={(_: any, record: Task) => (
            <Space size="middle">
              <a>Invite {record.id}</a>
              <a>Delete</a>
              <Button>Button</Button>
            </Space>
          )}
        />
        <Column title="dfsfd"></Column> */}
      </Table>
      {/* <Button onClick={() => searchFilterlog()}>Test</Button> */}
    </div>
  );
};

export default MyTaskPage;
