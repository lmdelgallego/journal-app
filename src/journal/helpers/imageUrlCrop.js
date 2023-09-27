export const cropImage = (url, dpr='',  config = 'w_300,h_300,c_fill') => {
  const urlParts = url.split('/');
  const indexUploads = urlParts.findIndex(part => part === 'upload');
  if (indexUploads < 0) return url;
  const new_url = urlParts.reduce((acc, part, index) => {
    if (index === indexUploads) {
      acc.push(part);
      acc.push(config);
      if(dpr) acc.push(dpr);
    } else {
      acc.push(part);
    }
    return acc;
  }, []).join('/');
  return new_url;
}