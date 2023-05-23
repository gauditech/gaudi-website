import { AppWindowFrame } from "@/components/AppWindowFrame";
import React, { ConsumerProps, FunctionComponent } from "react";

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
      className={`whitespace-pre text-base font-normal leading-6 ${props.className}`}
      dangerouslySetInnerHTML={{ __html: props.code }}
    ></div>
  );
};

/**
 * Render code snippet in a custom frame
 */
export const FramedCodeSnippet: FunctionComponent<CodeSnippetProps> = (
  props
) => {
  return (
    <div className="relative overflow-hidden bg-gray-800 p-3 text-md sm:rounded-lg sm:text-base md:max-w-full lg:max-w-max xl:rounded-xl xl:p-4">
      <CodeSnippet {...props} />
    </div>
  );
};
