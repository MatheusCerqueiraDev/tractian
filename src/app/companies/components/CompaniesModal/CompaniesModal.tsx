import { AppstoreAddOutlined, RollbackOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { FormInstance } from "antd/es/form/Form";
import { Modal } from "../../../../common/components/Modal/Modal";
import { Spin } from "../../../../common/components/Spin/Spin";
import styles from "./CompaniesModal.module.scss";

export interface ICompaniesModalProps {
  form: FormInstance;
  loading: boolean;
  visible: boolean;
  handleCloseModal: () => void;
  handleOkModal: () => void;
}

export const CompaniesModal = ({
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
              <RollbackOutlined className={styles["trt-modal-company-icon"]} />
            }
            type="link"
            className={styles["trt-footer-button"]}
          >
            CLOSE
          </Button>
          <Button
            onClick={handleOkModal}
            icon={
              <AppstoreAddOutlined
                className={styles["trt-modal-company-icon--create"]}
              />
            }
            type="primary"
          >
            CREATE
          </Button>
        </>
      }
      visible={visible}
      title="CREATE COMPANY"
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
                message: "Please insert the company name.",
              },
            ]}
          >
            <Input
              placeholder="New company name"
              className={styles["trt-form-input"]}
            />
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
};
