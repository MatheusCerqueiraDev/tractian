import { AppstoreAddOutlined, RollbackOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { FormInstance } from "antd/es/form/Form";
import { Modal } from "../../../../../common/components/Modal/Modal";
import { Spin } from "../../../../../common/components/Spin/Spin";
import styles from "./UnitsModal.module.scss";

export interface ICompaniesModalProps {
  form: FormInstance;
  loading: boolean;
  visible: boolean;
  handleCloseModal: () => void;
  handleOkModal: () => void;
}

export const UnitsModal = ({
  form,
  loading,
  visible,
  handleCloseModal,
  handleOkModal,
}: ICompaniesModalProps) => {
  return (
    <Modal
      footer={
        <>
          <Button
            onClick={handleCloseModal}
            icon={
              <RollbackOutlined className={styles["trt-modal-unit-icon"]} />
            }
            type="link"
            className={styles["trt-footer-button"]}
          >
            CLOSE
          </Button>
          <Button
            onClick={handleOkModal}
            icon={<AppstoreAddOutlined />}
            type="primary"
          >
            CREATE
          </Button>
        </>
      }
      visible={visible}
      title="CREATE UNIT"
      width="600px"
    >
      {loading ? (
        <Spin />
      ) : (
        <Form
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 17 }}
          layout="horizontal"
          initialValues={{ size: "default" }}
          form={form}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                type: "string",
                message: "Please insert the unit name.",
              },
            ]}
          >
            <Input
              placeholder="New unit name"
              className={styles["trt-form-input"]}
            />
          </Form.Item>
          <Form.Item
            label="Unit ID"
            name="companyId"
            rules={[
              {
                required: true,
                type: "string",
                message: "Please insert the ID.",
              },
            ]}
          >
            <Input
              placeholder="New unit ID"
              className={styles["trt-form-input"]}
            />
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
};
