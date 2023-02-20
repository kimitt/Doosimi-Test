export default function KakaoShare() {
  const kakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init('0f54a478a50ffbff932efb27a4375bf7');
      }

      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '두심이와 함께하는 "혹시 나도 개발자?"',
          description: '나도 개발자의 가능성이 있는지 모두 모두 테스트 해봐요!',
          imageUrl:
            'http://k.kakaocdn.net/dn/czbjJe/btrZa4QWPIw/xH9ngboACGCUKQ05XI5HkK/kakaolink40_original.png',
          link: {
            mobileWebUrl:
              'https://master--tiny-hummingbird-6448aa.netlify.app/',
            webUrl: 'https://master--tiny-hummingbird-6448aa.netlify.app/',
          },
        },
        social: {
          likeCount: 89,
          commentCount: 17,
          sharedCount: 545,
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl:
                'https://master--tiny-hummingbird-6448aa.netlify.app/',
              webUrl: 'https://master--tiny-hummingbird-6448aa.netlify.app/',
            },
          },
        ],
      });
    }
  };

  return <button onClick={kakaoButton}>카카오톡 공유하기</button>;
}
