type CardBlogProps = {
  title: string;
  description: string;
  date: string;
  url: string;
};

export default function CardBlog(props: CardBlogProps) {
  const { title, description, date, url } = props;

  return (
    <div
      className="
  flex flex-row rounded-md shadow-md justify-normal items-center
  bg-slate-100 dark:bg-slate-900
  text-slate-900 dark:text-slate-100
  "
    >
      <div className="px-3">
        <ul className="flex flex-row flex-wrap justify-start my-3 gap-2">
            <li className="bg-blue-600 px-2 rounded-full font-bold text-sm text-white">Typescript</li>
            <li className="bg-green-500 px-2 rounded-full font-bold text-sm text-white">NodeJs</li>
        </ul>
        <a
          href={url}
          className="flex flex-row items-center
        hover:text-slate-600 transition-colors duration-300 ease-in-out          
        "
        >
          <h4 className="font-bold text-2xl">{title}</h4>                    
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 15l6 -6" />
            <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
            <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
          </svg>
        </a>
        <p className="text-base text-justify">{description}</p>      
        <span className="font-bold underline text-xs text-slate-500">Fecha publicación: {date}</span>        
      </div>
    </div>
  );
}
