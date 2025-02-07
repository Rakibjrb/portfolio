import axios from "axios";
import Swal from "sweetalert2";

const uploadImage = async (image) => {
  const imageSize = image.size / (1024 * 1024);
  if (imageSize > 2) {
    Swal.fire("Select image under 2MB");
    return;
  }

  const imgBody = new FormData();
  imgBody.set("key", import.meta.env.VITE_imgbb_api);
  imgBody.append("image", image);

  const res = await axios({
    method: "post",
    url: "https://api.imgbb.com/1/upload",
    data: imgBody,
  });
  return res.data.data;
};

export { uploadImage };
