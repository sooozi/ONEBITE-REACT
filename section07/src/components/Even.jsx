import React, { useEffect } from 'react';

const Even = () => {
    useEffect(() => {
        //클린업, 정리함수
        return ()  => {
            console.log("unmount")
        }
        // 컴포넌트가 사라질 때 메시지 출력
    }, [])
    //[] 의존성 배열이 비어 있으므로
    //해당 useEffect는 처음 한 번 실행된 후, 컴포넌트가 사라질 때만 정리 함수가 실행
  return (
    <div>
      짝수입니다.
    </div>
  )
}

export default Even
