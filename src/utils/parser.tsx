import { FiMail, FiLink } from "react-icons/fi";

const dictionary = {
  mail: (mail: string) => (
    <a
      href={`mailto:${mail}`}
      className="bg-orange-200 text-orange-500 inline-flex items-center px-1 rounded-lg mx-1"
      title={`Send email to ${mail}`}
    >
      <FiMail />
      Mail
    </a>
  ),
  link: (link: string) => (
    <a
      href={`http:${link}`}
      className="bg-blue-200 text-blue-500 inline-flex items-center px-1 rounded-lg mx-1"
      title={link}
    >
      <FiLink />
      Link
    </a>
  ),
  mention: (metion: string) => (
    <a
      href="http://localhost:3000"
      className="bg-green-200 text-green-500 inline-flex items-center px-1 rounded-lg mx-1"
      title={metion}
    >
      {metion}
    </a>
  ),
  hashtag: (hashtag: string) => (
    <a
      href="!"
      className="bg-purple-200 text-purple-500 inline-flex items-center px-1 rounded-lg mx-1"
      title={hashtag}
    >
      {hashtag}
    </a>
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
