import { FunctionComponent, PropsWithChildren } from "react";

/**
 * Render snippet or image in a Max application window
 */
export type AppWindowFrameProps = PropsWithChildren<{
  title?: string;
  className?: string;
}>;
export const AppWindowFrame: FunctionComponent<AppWindowFrameProps> = (
  props
) => {
  return (
    <div
      className={`block border-2 border rounded-t-xl rounded-b-sm border-gray-500 bg-gray-500 lg:inline-block lg:max-w-full ${
        props.className ?? ""
      }`}
    >
      <div className="flex gap-2 h-8 bg-gray-500 px-2 rounded-t-xl w-full items-center shadow">
        <div className="grow-0 flex gap-1 nowrap align-items-center">
          <div className="rounded-full bg-gray-800 w-4 h-4 float-left"></div>
          <div className="rounded-full bg-gray-600 w-4 h-4 float-left"></div>
          <div className="rounded-full bg-gray-300 w-4 h-4 float-left"></div>
        </div>
        <div className="grow-1 text-gray-200 text-center drop-shadow">
          {props.title}
        </div>
      </div>

      <div className="overflow-hidden bg-gray-800 rounded-b-sm p-4">
        {props.children}
      </div>
    </div>
  );
};
