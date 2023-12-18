// 이 파일은 Button 컴포넌트를 외부에 노출시키는 역할을 한다.
// export { default } from "./Button"; 구문을 사용함으로써, Button.tsx에서 export된 기본 컴포넌트를 바로 재export 한다.
// 이렇게 하면 다른 파일에서 Button 컴포넌트를 가져올 때 import Button from './components/Button'와 같은 방식으로 직접적인 경로를 사용하지 않고 import { Button } from './components'의 방식으로 더 간결하게 가져올 수 있다.

export { default } from "./Button";
