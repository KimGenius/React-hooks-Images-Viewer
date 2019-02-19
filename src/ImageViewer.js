import React, { useState } from 'react'
import ImgsViewer from 'react-images-viewer'
import './ImageViewer.css'

const ImageViewer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currImg, setCurrImg] = useState(0)

  return (
    <div>
      <img
        src="https://coolsms-storage-test.s3.ap-northeast-2.amazonaws.com/19013037529548/Hos4N.png"
        alt="image"
        onClick={e => {
          setIsOpen(true)
          setCurrImg(0)
        }}
        className={'image'}
      />
      <img
        src="https://coolsms-storage-test.s3.ap-northeast-2.amazonaws.com/19013037529548/Hos4N.png"
        alt="image"
        onClick={e => {
          setIsOpen(true)
          setCurrImg(1)
        }}
        className={'image'}
      />
      <ImgsViewer
        imgs={[
          {
            src:
              'https://coolsms-storage-test.s3.ap-northeast-2.amazonaws.com/19013037529548/Hos4N.png'
          },
          {
            src:
              'https://coolsms-storage-test.s3.ap-northeast-2.amazonaws.com/19013037529548/Hos4N.png'
          }
        ]}
        currImg={currImg}
        showThumbnails={true}
        isOpen={isOpen}
        onClickPrev={e => setCurrImg(currImg - 1)}
        onClickNext={e => setCurrImg(currImg + 1)}
        onClickThumbnail={index => setCurrImg(index)}
        onClose={e => setIsOpen(false)}
      />
    </div>
  )
}

export default ImageViewer
