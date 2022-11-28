import { Button, Form, Popconfirm, Table, Typography } from "antd";
import { ColumnsType, TablePaginationConfig } from "antd/lib/table";
import { FilterValue } from "antd/lib/table/interface";
import { useCallback, useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../common/context/data";
import {
  ICompanyTableProps,
  ICompaniesProps,
} from "../../../../common/interfaces/companies.interface";
import { CompaniesModal } from "../CompaniesModal/CompaniesModal";
import styles from "./CompaniesTable.module.scss";

interface Params {
  pagination?: TablePaginationConfig;
  total?: number;
  filtersTable?: Record<string, FilterValue | null>;
}

export const CompaniesTable = ({ companies }: ICompanyTableProps) => {
  const { setCompanies } = useContext(DataContext);
  const [form] = Form.useForm();
  const [editNumber, setEditNumber] = useState(-1);
  const [modalActive, setModalActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 7,
    position: ["bottomLeft"],
  });

  const resetForm = useCallback(() => {
    setEditNumber(-1);

    form.setFieldsValue({
      name: "",
    });
  }, [form]);

  const handleDelete = useCallback(async (id: number) => {
    try {
      const newData = companies?.filter((company) => company.id !== id);
      if (newData) setCompanies(newData);
    } catch (error) {
      console.error("Company:DELETE", error);
    }
  }, []);

  const createModal = () => {
    resetForm();
    setModalActive(true);
  };

  const handleOkModal = useCallback(async () => {
    setLoading(true);
    try {
      await form.validateFields();

      const lastId = companies?.[companies.length - 1]?.id;

      const dataValues: ICompaniesProps = {
        id: editNumber !== -1 ? editNumber : lastId ? lastId + 1 : 1,
        name: form.getFieldValue("name") as string,
      };

      if (editNumber === -1) {
        if (companies) {
          let newData: ICompaniesProps[] = [...companies];
          newData.push(dataValues);
          setCompanies(newData);
        }
      } else {
        if (companies) {
          const newData = companies.filter((item) => item.id !== editNumber);
          newData.push(dataValues);
          setCompanies(newData);
        }
      }

      setModalActive(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [form, companies, editNumber]);

  function handleCloseModal() {
    setModalActive(false);
  }

  const fetchData = useCallback(
    async (params: Params) => {
      let companiesData: ICompaniesProps[] | null = companies;

      if (companiesData === null) companiesData = companies;

      setCompanies(companiesData);
      setPagination({
        ...params.pagination,
        total: companiesData.length,
      });
    },
    [companies]
  );

  const handleTableChange = (
    newPagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>
  ) => {
    fetchData({
      pagination: newPagination,
      filtersTable: filters,
    });
  };

  const columns: ColumnsType<ICompaniesProps> = [
    {
      title: <Typography.Text style={{ color: "#000000" }}>ID</Typography.Text>,
      dataIndex: "id",
      key: "id",
    },
    {
      title: (
        <Typography.Text style={{ color: "#000000" }}>
          COMPANY NAME
        </Typography.Text>
      ),
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      },
    },
    {
      title: (
        <Typography.Text style={{ color: "#000000" }}>ACTIONS</Typography.Text>
      ),
      key: "action",
      width: "20%",
      render: (_, record) => (
        <>
          <Popconfirm
            title={
              <Typography.Title level={5}>
                Please confirm clicking on DELETE.
              </Typography.Title>
            }
            onConfirm={() => handleDelete(record.id)}
            cancelText="Return"
            cancelButtonProps={{ type: "primary" }}
            okButtonProps={{ danger: true, type: "primary" }}
            okText="DELETE"
          >
            <Button type="primary" danger>
              DELETE
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  useEffect(() => {
    fetchData({ pagination });
  }, []);

  return (
    <>
      <Button type="primary" onClick={() => createModal()}>
        CREATE NEW COMPANY
      </Button>
      <Table
        dataSource={companies}
        className={styles["trt-table-wrapper"]}
        columns={columns}
        scroll={{ x: true }}
        pagination={pagination}
        rowKey={(record, index) => `${record.name}-${index}`}
        onChange={handleTableChange}
        onHeaderRow={() => ({
          style: {
            whiteSpace: "nowrap",
          },
        })}
      />
      <CompaniesModal
        form={form}
        loading={loading}
        handleCloseModal={handleCloseModal}
        handleOkModal={handleOkModal}
        visible={modalActive}
      />
    </>
  );
};
