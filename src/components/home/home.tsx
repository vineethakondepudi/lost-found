import React from "react";
import {
  Layout,
  Menu,
  Dropdown,
  Button,
  Carousel,
} from "antd";
import { MenuOutlined } from "@ant-design/icons";
import './home.scss'

const { Header, Footer, Content } = Layout;

// Carousel content
const carouselImages = [
  "https://www.shutterstock.com/image-photo/sand-timerhour-glass-feather-quill-260nw-240558520.jpg",
  "https://www.rebag.com/thevault/wp-content/uploads/2021/10/5-Entry-Level-Luxury-Accessories-Hero.jpg",
  "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
  "https://uncommongifts.in/cdn/shop/files/TribefacePrintedWomen_sOfficeBag_8d951812-bc08-4e82-8e0a-310bf5e9bbff_510x@2x.jpg?v=1702898334",
];

// Dropdown Menu Items
const dropdownMenu = (
  <Menu>
    <Menu.Item key="1">Miracle Software Systems</Menu.Item>
    <Menu.Item key="2">Americold</Menu.Item>
    <Menu.Item key="3">Sherwin Willams</Menu.Item>
    <Menu.Item key="4">Homo Depot</Menu.Item>
  </Menu>
);

export default function HomePage() {
  return (
    <Layout>
      {/* Header */}
      <Header className="header">
        {/* <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#fff",
            fontWeight: "bold",
          }}
        > */}
          <Button type="text" icon={<MenuOutlined />} style={{ color: "#fff" }} />
          <Menu
            mode="horizontal"
            theme="dark"
            className="menu"
            items={[
              { key: "1", label: "About Us" },
              { key: "2", label: "Contact Us" },
              { key: "3", label: "Help" },
              { key: "4", label: "Login" },
            ]}
          />
        {/* </div> */}
      </Header>

      {/* Content */}
      <Content style={{ padding: "20px", minHeight: "80vh" }}>
        {/* Carousel */}
        <div className="carousel-container">
          <Carousel autoplay>
            {carouselImages.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Dropdown */}
        <div className="dropdown-container">
          <Dropdown overlay={dropdownMenu} placement="bottomCenter">
            <Button>List of organization</Button>
          </Dropdown>
        </div>
      </Content>

      {/* Footer */}
      <Footer className="footer">
        Copyright © 2024, All rights reserved.
      </Footer>
    </Layout>
  );
}
