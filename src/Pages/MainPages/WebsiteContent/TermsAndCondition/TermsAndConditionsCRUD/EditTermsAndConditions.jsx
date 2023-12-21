import { useState } from "react";
import { editItem } from "../termsAndConditionsService";
import TextField from "../../../../../Components/common/TextField";
import EditTextEditorFormLayout from "../../../../../Components/common/EditTextEditorFormLayout";
import EditFormLayout from "../../../../../Components/common/EditFormLayout";
import TextEditorDescriptionField from "../../../../../Components/common/TextEditorDescriptionField";

function EditTermsAndConditions({ data, onClose, onEditSuccess }) {
  const [name, setName] = useState(data.name);
  const [description, setDescription] = useState(data.description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    try {
      await editItem(data._id, {
        name: name,
        description: description,
      });
      onEditSuccess();
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EditFormLayout
      title="Edit FAQ" onSubmit={handleSubmit} onClose={onClose}
    >
      <TextField
        id="name"
        label="Name"
        value={name}
        onChange={(value) => setName(value)}
        placeholder="Name"
        required
      />

      <TextEditorDescriptionField
        id="Description"
        label="Description"
        value={description}
        onChange={(value) => setDescription(value)}
        placeholder="Description"
        required
      />
    </EditFormLayout>
  );
}

export default EditTermsAndConditions;
