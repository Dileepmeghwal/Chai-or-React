import { Input } from "antd";
import React from "react";
import { Button, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import { post } from "../Api/ApiCalling";
const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [prize, setPrize] = useState("");
  const [image, setImage] = useState("");

  const postimage = () => {
    let data = {
        "title": "New Product",
        

    //   title: title,
    //   description: description,
    //   prize: prize,
    //   categoryId: null,
    //   image: null,
    };
    post(`https://api.escuelajs.co/api/v1/products`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  const props = {
    name: "file",

    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="p-3 mb-2">
      <Input
        name="title"
        value={title}
        placeholder="Title"
        className=" mb-2"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder="Description"
        value={description}
        className=" mb-2"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        placeholder="prize"
        name="prize"
        onChange={(e) => setPrize(e.target.value)}
        className=" mb-2"
        value={prize}
      />
      <Input
        name="categoryId"
        placeholder="category"
        className=" mb-2"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      />
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      <Button type="primary" className="bg-slate-600 mt-2" onClick={postimage}>
        Send
      </Button>
    </div>
  );
};

export default CreateProduct;
