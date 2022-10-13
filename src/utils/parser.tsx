import { FiMail, FiLink } from "react-icons/fi";

const dictionary = {
  mail: (mail: string) => (
    <span
      onClick={(e) => e.stopPropagation()}
      className="bg-orange-200 text-orange-500 inline-flex items-center px-1 rounded-lg mx-1"
      title={`Send email to ${mail}`}
    >
      <FiMail />
      Mail
    </span>
  ),
  link: (link: string) => (
    <span
      onClick={(e) => e.stopPropagation()}
      className="bg-blue-200 text-blue-500 inline-flex items-center px-1 rounded-lg mx-1 cursor-pointer"
      title={link}
    >
      <FiLink />
      Link
    </span>
  ),
  mention: (metion: string) => (
    <span
      onClick={(e) => e.stopPropagation()}
      className="bg-green-200 text-green-500 inline-flex items-center px-1 rounded-lg mx-1 cursor-pointer"
      title={metion}
    >
      {metion}
    </span>
  ),
  hashtag: (hashtag: string) => (
    <span
      onClick={(e) => e.stopPropagation()}
      className="bg-purple-200 text-purple-500 inline-flex items-center px-1 rounded-lg mx-1 cursor-pointer"
      title={hashtag}
    >
      {hashtag}
    </span>
  ),
};

const parser = (text: string) => {
  const splited = text.split(" ");

  const result = splited.map((word) => {
    if (word.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      return dictionary["mail"](word);

    if (
      word.match(
        /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
      )
    )
      return dictionary["link"](word);

    if (word.match(/@([\w-]+)/)) return dictionary["mention"](word);

    if (word.match(/#([\w-]+)/)) return dictionary["hashtag"](word);

    return `${word} `;
  });

  return result;
};

export default parser;
