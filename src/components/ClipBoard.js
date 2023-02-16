import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function ClipBoard() {
  return (
    <CopyToClipboard
      className="clipboard"
      text="https://master--tiny-hummingbird-6448aa.netlify.app/"
      onCopy={() => alert('클립보드에 복사되었습니다.')}
    >
      <button>링크복사하기</button>
    </CopyToClipboard>
  );
}

export default ClipBoard;
