import React, { FC, useEffect } from "react";
type Props = {
  error?: boolean;
  cleanError: () => void;
};
const Error: FC<Props> = ({ error, cleanError }) => {
  useEffect(() => {
    setTimeout(() => {
      cleanError();
    }, 3000);
  }, [error]);

  if (!error) return null;
  return (
    <div>
      <span className="bg-red-200 text-red-500 rounded-md p-2 mt-5 absolute bottom-3 left-2 w-1/12 text-center">
        Network error
      </span>
    </div>
  );
};

export default Error;
