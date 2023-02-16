import React, { useState } from 'react';
import Modal from '../components/Modal';
import KakaoShare from './kakaoLink';
import ClipBoard from './ClipBoard';

const ResultShare = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="result-share">
      <button onClick={openModal}>내 결과 공유하기!</button>
      <Modal open={modalOpen} close={closeModal}>
        <KakaoShare />
        <ClipBoard />
      </Modal>
    </div>
  );
};

export default ResultShare;
