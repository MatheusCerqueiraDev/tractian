import { Col, Row, Tooltip, Typography } from "antd";
import { AvatarGenerator } from "../../../../common/components/AvatarGenerator/AvatarGenerator";
import { Card } from "../../../../common/components/Card/Card";
import { IUserCardProps } from "../../../../common/interfaces/users.interface";
import styles from "./UserCard.module.scss";

export const UserCard = ({ user }: IUserCardProps) => {
  return (
    <Card shadow size="small" bodyStyle={{ height: 255 }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} className={styles["trt-user-avatar"]}>
          <AvatarGenerator /> <Typography.Text>{user.name}</Typography.Text>
        </Col>
        <Col xs={24} className={styles["trt-user-email"]}>
          <Tooltip
            title={`Click here to send ${user.name} a message!`}
            placement="bottom"
            mouseEnterDelay={0}
            mouseLeaveDelay={0}
          >
            <Typography.Link>
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </Typography.Link>
          </Tooltip>
        </Col>
        <Col xs={24}>
          <Typography.Text>
            {user.name} is linked to the company of id {user.companyId}, get in
            touch with him clicking in his email.
          </Typography.Text>
        </Col>
      </Row>
    </Card>
  );
};
