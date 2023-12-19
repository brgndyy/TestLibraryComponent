import nodeResolve from "@rollup/plugin-node-resolve"; // Node.js 모듈 충돌 해결
import commonjs from "@rollup/plugin-commonjs"; // commonjs 를 es6로 변환하여 롤업 번들에 포함시킬수 있도록 함
import typescript from "@rollup/plugin-typescript"; // 타입스크립트를 롤업 번들과 통합시켜줍니다.
import dts from "rollup-plugin-dts"; // .d.ts 정의 파일을 롤업할 수 있는 플러그인.

//NEW
import terser from "@rollup/plugin-terser"; // 생성된 es 번들을 최소하 해줍니다
import peerDepsExternal from "rollup-plugin-peer-deps-external"; // 롤업 번들에서 PeerDependency를 자동으로 외부화

// rollup 설정 파일은 대부분 Node.js의 기본설정(commonjs)이 적용된 환경에서 실행 되기때문에 require 문을 사용한다.
const packageJson = require("./package.json");

export default [
  // 소스 코드에 대한 번들링 설정
  {
    // 엔트리 포인트로 src/index.ts 파일을 지정
    input: "src/index.ts",

    // 번들의 결과물의 출력 설정
    output: [
      {
        file: packageJson.main,
        format: "esm",
        //소스맵은 컴파일된 코드(여기서는 번들링된 JavaScript 파일)를 원본 소스 파일(예: TypeScript 파일)에 매핑하는 파일
        // 소스맵을 설정해주면 디버깅에 용이하기때문에 오류 추적이 훨씬 쉬워진다.
        sourcemap: true,
      },
    ],

    // 플러그인들 설정
    plugins: [
      // NEW
      typescript(),
      peerDepsExternal(),

      nodeResolve(),
      commonjs(),

      // NEW
      terser(),
    ],
  },
  // 타입 선언 파일의 번들링 설정
  {
    // 선언 파일의 엔트리 포인트
    input: "dist/cjs/types/src/index.d.ts",
    // 선언파일의 출력 형식, dist/index.d.ts 파일을 esm 형식으로 출력
    output: [{ file: "dist/index.d.ts", format: "esm" }],

    //dts 플러그인을 사용하여 d.ts 파일을 만듬
    plugins: [dts.default()],

    // css 파일을 외부모듈로 처리
    external: [/\.css$/],
  },
];
