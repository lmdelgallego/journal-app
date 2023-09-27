
export const fileUpload = async (file) => {
  if(!file) throw new Error('file is required');
  const cloudUrl = import.meta.env.VITE_CLOUDINARY_URL;
  const formData = new FormData();
  formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
  formData.append('file', file);
  try{
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData
    });
    console.log(resp);
    if(!resp.ok) throw new Error('Error uploading file');
    const cloudResp = await resp.json();
    console.log(cloudResp);
    return cloudResp.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};