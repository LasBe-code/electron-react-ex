# Electron-React

[Electron + React 프로세스 간 IPC 통신과 preload 사용 방법](https://lasbe.tistory.com/203)  
Electron-React로 기능을 구현한 예제입니다.  
`contextIsolation`에 의해 1번 2번 컴포넌트를 동시에 실행할 수 없으니 `public/electron.js` 파일에서 속성을 바꿔가며 실행해 주세요.

1. main <-> renderer IPC 통신 예제
2. preload를 통한 IPC 통신 예제
