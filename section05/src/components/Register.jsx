
import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country:"",
        bio: ""
    });
    const countRef = useRef(0);
    const inputRef = useRef();

    const onSubmit = () => {
        if (input.name === ""){
            // 이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus();
        }
    }

    const onChange = (e) => {
        countRef.current += 1;
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
    }

    return (
        <div>
            <div><input value={input.name} onChange={onChange} placeholder={"이름"}/></div>
            <div><input value={input.birth} onChange={onChange}type="date"/></div>
            <div>
                <select value={input.country} onChange={onchange}>
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>
            <div>
                <textarea value={input.bio} onChange={onChange}/>
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    );
};

export default Register;