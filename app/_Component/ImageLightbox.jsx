// components/ImageLightbox.tsx
"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
export default function ImageLightbox({ open, setOpen, slides, ...props }) {
  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={slides}
      plugins={[Fullscreen, Thumbnails, Zoom]}
      carousel={{ finite: true }}
      thumbnails={{ border: 0 }}
      {...props}
    />
  );
}
