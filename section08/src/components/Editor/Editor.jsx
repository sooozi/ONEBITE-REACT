import React, { useState, useRef } from 'react';
//useRef: DOM 요소에 직접 접근하거나, 컴포넌트가 리렌더링될 때도 유지되는 값 저장 가능!

const Editor = ({ onCreate }) => {
    const [content, setContent] = useState('');
    const contentRef = useRef(null); // useRef를 사용하여 contentRef 선언

    const onChangeContent = (e) => {
        setContent(e.target.value);
        console.log(content);
    }

    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent('');
    }

    return (
        <div className='Editor'>
            <input
                ref={contentRef} // input 태그와 contentRef 연결
                value={content}
                onChange={onChangeContent}
                placeholder='새로운 Todo...'
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    )
}

export default Editor