import { useState, useEffect } from "react";
import { editItem } from "./homeSliderService";
import { IMAGE_URL } from "../../../../Utils/Api";
import PrecedenceField from "../../../../Components/common/PrecedenceField";
import ImageUploader from "../../../../Components/common/ImageUploader";
import EditFormLayout from "../../../../Components/common/EditFormLayout";


function EditHomeSlider({ items, onClose, onSuccess }) {
  const [precedence, setPrecedence] = useState(items.precedence);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [link, setLink] = useState(data.link);

  useEffect(() => {
    if (items.image) {
      setImagePreview(`${IMAGE_URL}${items.image}`);
    }
  }, [items.image]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    try {
      const formData = {
        image: image || null,
        precedence,
        link: link,
      };
      await editItem(items._id, formData);
     
      onSuccess();
    } catch (error) {}
  };

  return (
    <EditFormLayout
      title={"Update Slider"}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <ImageUploader
        imagePreview={imagePreview}
        handleImageChange={handleImageChange}
      />
      <PrecedenceField value={precedence} onChange={setPrecedence} />
      <TextField
        label="Link"
        value={link}
        onChange={(value) => setLink(value)}
        placeholder="Link"
        required
      />
    </EditFormLayout>
  );
}

export default EditHomeSlider;
