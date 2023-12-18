// 만들고 싶은 컴포넌트를 작성해주면 된다.

import React from "react";
import { PropsWithChildren } from "react";

export default function Button(props: PropsWithChildren<object>) {
  const { children } = props;
  return <button>{children}</button>;
}
