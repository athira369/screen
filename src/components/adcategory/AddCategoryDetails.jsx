import React, { useState } from "react";

import CategoryHeader from "./CategoryHeader";
import ImageUploader from "./ImageUploader";
import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";
import Dropdown from "./Dropdown";
import ActionButtons from "./ActionButtons";

const AddCategoryDetails = () => {
  const [image, setImage] = useState("https://via.placeholder.com/300x150");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Active");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  const handleSubmit = () => {
    console.log({ title, description, status });
    alert("Category saved successfully!");
  };

  const handleDelete = () => {
    setTitle("");
    setDescription("");
    setStatus("Active");
    alert("Category deleted!");
  };

  return (
    <div className="flex h-screen ">
      <main className="flex-1 flex flex-col">
        <CategoryHeader />
        <section className="flex-1 p-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-6">Add Category Details</h2>
       
            <ImageUploader image={image} onImageChange={handleImageUpload} />
            <div className="space-y-4">
              <TextInput
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter category title"
              />
              <TextAreaInput
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter category description"
              />
            </div>
            <Dropdown
              label="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              options={[
                { label: "Active", value: "Active" },
                { label: "Inactive", value: "Inactive" },
              ]}
            />
            <ActionButtons onDelete={handleDelete} onSubmit={handleSubmit} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddCategoryDetails;
