import React, { FunctionComponent } from "react";

export type CodeSnippetProps = {
  code: string;
  className?: string;
};

/** Render HTML code snippet */
export const CodeSnippet: React.FC<CodeSnippetProps> = (
  props: CodeSnippetProps
) => {
  return (
    <div
      style={{
        fontFamily:
          "'Hack', 'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback', 'Droid Sans Mono', 'monospace', monospace",
        // fontWeight: "normal",
        // fontSize: "1rem",
        // lineHeight: "1.3",
        // whiteSpace: "pre",
      }}
      className={`whitespace-pre text-sm md:text-base font-normal leading-6 p-4 ${
        props.className ?? ""
      }`}
      dangerouslySetInnerHTML={{ __html: props.code }}
    ></div>
  );
};
