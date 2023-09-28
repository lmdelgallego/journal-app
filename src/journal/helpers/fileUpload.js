
export const fileUpload = async (file) => {
  if(!file) throw new Error('file is required');
  const cloudUrl = `${import.meta.env.VITE_CLOUDINARY_URL}/upload`;
  const formData = new FormData();
  formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
  formData.append('file', file);
  try{
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData
    });
    if(!resp.ok) throw new Error('Error uploading file');
    const cloudResp = await resp.json();
    console.log(cloudResp);
    return {
      id: cloudResp.public_id,
      url: cloudResp.secure_url,
      signature: cloudResp.signature,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteFile = async (image) => {
  if(!image) throw new Error('fileUrl is required');
  const cloudUrl = `${import.meta.env.VITE_CLOUDINARY_URL}/destroy`;
  const formData = new FormData();
  formData.append('api_key', import.meta.env.VITE_CLOUDINARY_API_KEY);
  formData.append('public_id', image.id);
  formData.append('signature', image.signature);
  try{
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData
    });
    if(!resp.ok) throw new Error('Error deleting file');
    const cloudResp = await resp.json();
    console.log(cloudResp);
    return cloudResp;
  } catch (error) {
    throw new Error(error.message);
  }
};