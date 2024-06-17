const Message = ({ author, message }: { author: string; message: string }) => (
  <li className="text-base leading-4">
    <span className="font-semibold text-[#4c566a]">{`${author}: `}</span>
    {message}
  </li>
);

export default Message;
