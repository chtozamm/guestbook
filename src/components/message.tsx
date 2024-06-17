const Message = ({ author, message }: { author: string; message: string }) => (
  <li className="dark:border-utility-dark border-utility leading-4 transition-colors duration-500 ease-in-out">
    <span className="font-medium text-accent">{`${author}: `}</span>
    {message}
  </li>
);

export default Message;
