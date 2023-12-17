import React from "react";
import { PropsWithChildren } from "react";

export default function Button(props: PropsWithChildren<object>) {
  const { children } = props;
  return <button>{children}</button>;
}
