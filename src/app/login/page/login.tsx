import { UserOutlined } from "@ant-design/icons";
import { Button, Form, Image, Input, Row, Typography } from "antd";
import { useCallback, useContext } from "react";
import { AuthContext } from "../../../common/context/auth";
import { ILoginFormData } from "../interfaces/login.interface";
import styles from "./login.module.scss";

export const Login = () => {
  const [form] = Form.useForm();

  const { handleSignIn, isLoading } = useContext(AuthContext);

  const signIn = useCallback(
    ({ email }: ILoginFormData) => {
      handleSignIn(email);
    },
    [handleSignIn]
  );

  return (
    <div className={styles["trt-login-wrapper"]}>
      <div className={styles["trt-login-card"]}>
        <Row className={styles["trt-login-img-logo"]}>
          <Image
            src="/assets/logo.svg"
            fallback="/assets/logo.jpeg"
            width="100%"
            height="100%"
            preview={false}
          />
        </Row>

        <Form layout="vertical" form={form} onFinish={signIn}>
          <Form.Item
            hasFeedback
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter an tester@tractian email.",
                whitespace: true,
              },
              {
                type: "email",
                message: "Please enter a valid email.",
              },
            ]}
          >
            <Input
              prefix={
                <UserOutlined className={styles["trt-login-form-prefix"]} />
              }
              autoComplete="off"
              className={styles["trt-login-form-input-email"]}
              size="large"
              placeholder="Enter your best tester@tractian email"
            />
          </Form.Item>

          <Button
            size="large"
            type="primary"
            shape="round"
            htmlType="submit"
            loading={isLoading}
            block
            className={styles["trt-login-form-button"]}
          >
            SUBMIT
          </Button>
        </Form>
      </div>
      <Typography.Text style={{ position: "absolute", bottom: 0, right: 10 }}>
        Example: teste2@tractian.com
      </Typography.Text>
    </div>
  );
};
