import { FunctionComponent, PropsWithChildren } from "react";

/**
 * Render snippet or image in a Max application window
 */
export type AppWindowFrameProps = PropsWithChildren<{
  title?: string;
  className?: string;
  bg?: "dark" | "light";
  mode?: "app" | "browser";
}>;
export const AppWindowFrame: FunctionComponent<AppWindowFrameProps> = (
  props
) => {
  const variants = {
    content: [props.bg === "light" ? "bg-white" : "bg-gray-800"].join(" "),
    header: {
      title: props.mode === "browser" ? "py-1 px-2 rounded-md bg-gray-600" : "",
    },
  };

  return (
    <div
      className={`block border-8 border-t-2 border rounded-md border-gray-700 bg-gray-700 lg:inline-block lg:max-w-full ${
        props.className ?? ""
      }`}
    >
      {/* header */}
      <div className="flex gap-2 p-2 bg-gray-700 px-2 rounded-t-xl w-full items-center shadow text-sm">
        <div className="grow-0 flex whitespace-nowrap gap-1 nowrap align-items-center">
          <div className="rounded-full bg-gray-800 w-4 h-4 float-left"></div>
          <div className="rounded-full bg-gray-500 w-4 h-4 float-left"></div>
          <div className="rounded-full bg-gray-300 w-4 h-4 float-left"></div>
        </div>
        <div
          className={`grow text-gray-200 text-center drop-shadow whitespace-nowrap overflow-hidden text-ellipsis px-4 ${variants.header.title}`}
        >
          {props.title}
        </div>
      </div>

      {/* content */}
      <div
        className={`overflow-auto scrollbar-none rounded-md ${variants.content}`}
      >
        {props.children}
      </div>
    </div>
  );
};
