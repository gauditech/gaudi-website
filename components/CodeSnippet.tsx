import React from "react";

// -- Prop types
// ----------

export interface CodeSnippetOwnProps {
  code: string;
  className?: string;
}
type CodeSnippetProps = CodeSnippetOwnProps;

// -- Component
// ----------

/** Describe your component ... */
export const CodeSnippet: React.FC<CodeSnippetProps> = (
  props: CodeSnippetProps
) => {
  return (
    <div className="relative overflow-hidden bg-gray-700 p-3 text-md sm:rounded-lg sm:text-base md:max-w-full lg:max-w-max xl:rounded-xl xl:p-4">
      <div
        style={{
          fontFamily:
            "'Hack', 'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback', 'Droid Sans Mono', 'monospace', monospace",
          // fontWeight: "normal",
          // fontSize: "1rem",
          // lineHeight: "1.3",
          // whiteSpace: "pre",
        }}
        className={`whitespace-pre text-base font-normal leading-6 ${props.className}`}
        dangerouslySetInnerHTML={{ __html: props.code }}
      ></div>
    </div>
  );
};
