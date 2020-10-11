import React, { useState, useLayoutEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import { resumeLinkDownload } from '../assets/projects/projects';
import { ReactComponent as DownloadIcon } from '../assets/nav_icons/file-download-solid.svg';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
 

export default function Resume() {
    const [ width, setWidth ] = useState(300);

    useLayoutEffect(() => {
        const viewWidth = window.innerWidth 
        || document.documentElement.clientWidth 
        || document.body.clientWidth;
        setWidth(viewWidth - 30);
    }, []);


    return (
        <section className='container-fluid p-3 appSectionDark'>
            <div className='d-flex flex-wrap justify-content-between'>
                <h1>Resume</h1>
                <a href={resumeLinkDownload} download>
                    <DownloadIcon className='smallIcon'/>
                </a>
            </div>
            <Document file='/docs/Resume.pdf'>
                <Page pageNumber={1} width={width} renderTextLayer={true} 
                    onDoubleClick={() => alert('Please click the Download button (top right corner) to have access to all links')}
                />
            </Document>
        </section>
    )
}