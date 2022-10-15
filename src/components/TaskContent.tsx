import React, { FC } from "react";
import { FiMail, FiLink } from "react-icons/fi";
import { REGEX } from "./../utils/regex";

type Props = {
  content: string;
};
const TaskContent: FC<Props> = ({ content }) => {
  const counter = { mail: 0, link: 0 };
  return (
    <div>
      {content.split(" ").map((word, i) => {
        if (word.match(REGEX.email)) {
          counter.mail++;
          return (
            <a
              href={`mailto:${word}`}
              key={i}
              onClick={(e) => e.stopPropagation()}
              className="bg-orange-200 text-orange-500 inline-flex items-center px-1 rounded-lg mx-1"
              title={`Send email to ${word}`}
            >
              <FiMail className="mr-1" />
              {`Mail ${counter.mail}`}
            </a>
          );
        } else if (word.match(REGEX.link)) {
          counter.link++;
          return (
            <a
              href={word}
              target="__blank"
              key={i}
              onClick={(e) => e.stopPropagation()}
              className="bg-blue-200 text-blue-500 inline-flex items-center px-1 rounded-lg mx-1 cursor-pointer"
              title={word}
            >
              <FiLink className="mr-1" />
              {`Link ${counter.link}`}
            </a>
          );
        } else if (word.match(REGEX.mention)) {
          return (
            <span
              key={i}
              onClick={(e) => e.stopPropagation()}
              className="bg-green-200 text-green-500 inline-flex items-center px-1 rounded-lg mx-1 cursor-pointer"
              title={word}
            >
              {word}
            </span>
          );
        } else if (word.match(REGEX.hashtag)) {
          return (
            <span
              key={i}
              onClick={(e) => e.stopPropagation()}
              className="bg-purple-200 text-purple-500 inline-flex items-center px-1 rounded-lg mx-1 cursor-pointer"
              title={word}
            >
              {word}
            </span>
          );
        } else {
          return <span key={i}>{`${word} `}</span>;
        }
      })}
    </div>
  );
};

export default TaskContent;
