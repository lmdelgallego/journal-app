import { ImageList, ImageListItem } from "@mui/material"
import { cropImage } from "../helpers";

export const ImageGallery = ({imageList = []}) => {

  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} gap={8} rowHeight={200}>
      {imageList.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${cropImage(item.url)}`}
            srcSet={`${cropImage(item.url,'dpr_2.0' )}`}
            alt="img"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}