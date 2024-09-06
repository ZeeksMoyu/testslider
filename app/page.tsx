'use client'

import Lightbox from "yet-another-react-lightbox";
import React, {useState} from "react";
import {slides} from "@/talons/data";
import "yet-another-react-lightbox/styles.css";
import {Captions, Counter, Download, Thumbnails, Zoom} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from "@/components/Images/Images";

export default function Home() {

    // const [open, setOpen] = React.useState<boolean>(false)
    const zoomRef = React.useRef(null);
    const [index, setIndex] = React.useState<number>(-1)
    const [maxZoomPixelRatio, setMaxZoomPixelRatio] = React.useState(3);

  return (
    <>
        {/*<button onClick={() => setOpen(true)}>Open</button>*/}
        <Images data={slides} onClick={(currentIndex) => setIndex(currentIndex)}/>
        <Lightbox
            plugins={[Captions, Counter, Download, Zoom, Thumbnails]}
            counter={{ container: { style: { top: "unset", bottom: 0 } } }}
            zoom={{ ref: zoomRef, maxZoomPixelRatio }}

            captions={{
                showToggle: true,
                descriptionTextAlign: 'end'
            }}
            slides={slides}
            index={index}
            open={index >= 0}
            close={() => setIndex(-1)}
            // open={open}
            // close={() => setOpen(false)}
        />
    </>
  );
}
