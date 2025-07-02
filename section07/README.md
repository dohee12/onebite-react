# 📝 React TodoList App

이 프로젝트는 **이정환 JS & React 강의**를 기반으로 개발된 간단한 TodoList 앱입니다.  
할 일을 추가, 삭제, 체크하며 관리할 수 있는 기능과 함께 UX를 고려한 사용자 입력 제어가 구현되어 있습니다.

## 주요 기능 ✨

- ✅ **할 일 입력 후 추가 버튼 클릭 시 입력창 초기화**

  - 사용자가 Todo를 추가하면 입력창이 자동으로 초기화되어 재입력이 편리합니다.

- ⌨️ **Enter 키 입력만으로도 할 일 추가 가능**

  - 추가 버튼을 클릭하지 않아도 `Enter` 키로 바로 할 일을 추가할 수 있어 빠른 입력이 가능합니다.

- ❗ **빈 값 추가 방지 및 포커싱**

  - 아무것도 입력하지 않고 추가 버튼이나 `Enter`를 누르면, 추가되지 않고 입력창에 자동 포커스됩니다.

- 📅 **할 일 작성 날짜 자동 표시**

  - 각 Todo 항목 옆에 생성일자가 자동으로 표시됩니다.
  - 예시: `2025. 7. 3.`

- 🚫 **날짜 파싱 오류 방지 처리**
  - 유효하지 않은 날짜가 들어오지 않도록 데이터 구조 유효성 체크를 추가할 수 있습니다 (`Invalid Date` 방지).

---

## 기술 스택 🛠

- **React** (Create React App)
- JavaScript (ES6+)
- CSS (styled-components or 기본 CSS)

---

## 설치 및 실행 방법 ▶️

```bash
# 1. 저장소 클론
git clone https://github.com/your-username/todolist-react.git

# 2. 디렉토리 이동
cd todolist-react

# 3. 패키지 설치
npm install

# 4. 로컬 서버 실행
npm run dev

폴더 구조 📁
css
코드 복사
src/
├── components/
│   └── TodoItem.jsx
├── App.jsx
├── index.js
├── styles.css

스크린샷 🖼
아래는 프로젝트 실행 화면 예시입니다.


참고 강의 🎓
이정환 자바스크립트 강의

이정환 React 강의

개선 아이디어 💡
✅ 할 일 완료 시 줄긋기 기능

🗃 로컬스토리지/DB 저장 기능

📱 반응형 디자인

🔍 필터 기능 (전체 / 완료 / 미완료)
```
