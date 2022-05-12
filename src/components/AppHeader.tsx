import { Layout } from "antd";
import { FC } from "react";

const AppHeader: FC = () => {
  return (
    <Layout.Header style={{ background: "#27273B", color: "#9F9F9F" }}>
      Coin Trade Bot
    </Layout.Header>
  );
};

export default AppHeader;
