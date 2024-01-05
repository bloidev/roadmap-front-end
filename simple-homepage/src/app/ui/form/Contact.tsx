"use client" 

export default function Contact(){
    return (
      <div
        className="bg-slate-200 dark:bg-slate-700 rounded-3xl p-4 flex flex-row items-center gap-3 my-3"
        style={{ minHeight: "100px" }}
      >
        <label className="w-8/12">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="w-full rounded-lg p-2 bg-slate-300 dark:bg-slate-600 dark:text-white"
            value="micorreo@gmail.com"
            readOnly
          />
        </label>
        <button className="w-4/12 rounded-md bg-purple-600 flex flex-row gap-2 flex-nowrap p-2 text-white justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-copy"
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
            <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
            <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
          </svg>
          Copiar
        </button>
      </div>
    );
}