import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';

interface StorySummary {
  title: string;
  synopsis: string;
}

const initialStorySummary: StorySummary = {
  title: 'Comic Summary',
  synopsis: "A man with dreams of comedy found himself performing to empty seats. Seeking recognition and revenge, he donned makeup, hid his identity, and instigated city-wide chaos. Gotham was soon ablaze, with protests and havoc led by this new Joker. But Batman was watching. Intent on restoring his beloved city, he raced through the tumultuous streets in his Batmobile. At the riot's epicenter, he faced an immediate onslaught from the mob. Spotting the Joker, the stand-off began. Find out what happens next in the next issue."
};

const OffCanvasSummary: React.FC = () => {
  const [show, setShow] = useState(false);
  const [summary, setSummary] = useState(initialStorySummary);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='off-cover'>
        <Button variant="primary" onClick={handleShow}>
          Open Summary
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{summary.title}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* Here is the summary text */}
            <p>{summary.synopsis}</p>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default OffCanvasSummary;
