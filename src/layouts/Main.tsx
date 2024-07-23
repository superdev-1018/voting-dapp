import { Children, useState } from "react";

export default function Main({ children, sx, ...other}: any) {

  return (
    <div className="h-[calc(100vh-4.5rem)] overflow-y-scroll example">
        {children}
    </div>
  );
}
