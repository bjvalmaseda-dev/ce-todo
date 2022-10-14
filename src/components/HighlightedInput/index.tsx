import React, { useRef } from "react";
import "./style.css";
import { REGEX } from "./../../utils/regex";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  //components prop
  value: string;
  setValue: (value: string) => void;

  //input props
  placeholder?: string;
  ariaLabel?: string;
};
const HighlightedInput: React.FC<Props> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { value, setValue, placeholder, ariaLabel } = props;

  // const syncScroll = (e: React.UIEvent<HTMLElement>) => {
  //   if (null !== ref.current) {
  //     ref.current.scrollTop = e.currentTarget.scrollTop;
  //     ref.current.scrollLeft = e.currentTarget.scrollLeft;
  //   }
  // };

  return (
    <div className="input-container">
      <input
        aria-label={ariaLabel}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        // onScroll={syncScroll}
      />
      <div className="input-renderer">
        <div className="input-renderer" ref={ref}>
          {value ? (
            value.split(" ").map((word, i) => {
              if (word.match(REGEX.email)) {
                return (
                  <span key={i} className="text-orange-500">
                    {`${word} `}
                  </span>
                );
              } else if (word.match(REGEX.link)) {
                return (
                  <span key={i} className="text-blue-500">
                    {`${word} `}
                  </span>
                );
              } else if (word.match(REGEX.mention)) {
                return (
                  <span key={i} className="text-green-500">
                    {`${word} `}
                  </span>
                );
              } else if (word.match(REGEX.hashtag)) {
                return (
                  <span key={i} className="text-purple-500">
                    {`${word} `}
                  </span>
                );
              } else {
                return <span key={i}>{`${word} `}</span>;
              }
            })
          ) : (
            <span className="text-gray-400">{placeholder}</span>
          )}
        </div>
      </div>
    </div>
  );
};
export default HighlightedInput;
