import React, { useState } from "react";
import { Modal, Button, Input, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const ExperienceModal = ({ isVisible, onClose, onSave }) => {
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    const data = {
      company,
      title,
      startYear,
      endYear,
      description,
    };
    onSave(data);
  };

  return (
    <Modal
      title="Experience"
      visible={isVisible}
      onCancel={onClose}
      footer={null}
      centered
      bodyStyle={{
        backgroundColor: "#ffffff",
        border: "1px solid #e8e8e8",
        padding: "20px",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <Title level={4}>Experience 1</Title>
        <Input
          placeholder="Company"
          style={{
            marginBottom: "10px",
            border: "1px solid #e8e8e8",
            padding: "8px",
            borderRadius: "4px",
          }}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <Input
          placeholder="Title"
          style={{
            marginBottom: "10px",
            border: "1px solid #e8e8e8",
            padding: "8px",
            borderRadius: "4px",
          }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input.Group compact style={{ marginBottom: "10px" }}>
          <Input
            style={{
              width: "48%",
              border: "1px solid #e8e8e8",
              padding: "8px",
              borderRadius: "4px",
              marginRight: "5px",
            }}
            placeholder="Start Year"
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
          />
          <Input
            style={{
              width: "50%",
              border: "1px solid #e8e8e8",
              padding: "8px",
              borderRadius: "4px",
            }}
            placeholder="End Year"
            value={endYear}
            onChange={(e) => setEndYear(e.target.value)}
          />
        </Input.Group>
        <Input.TextArea
          placeholder="Description"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button
        type="dashed"
        block
        style={{ marginBottom: "10px" }}
        icon={<PlusOutlined />}
      >
        Add Another Experience
      </Button>
      <Button
        type="primary"
        onClick={handleSave}
        style={{
          width: "100%",
          backgroundColor: "#fff",
          borderColor: "lightgreen",
          color: "black",
        }}
      >
        Save Experience
      </Button>
    </Modal>
  );
};

export default ExperienceModal;
