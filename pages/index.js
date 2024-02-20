export default function Home() {
  return (
    <div className="bg-yellow-300 flex h-screen justify-center items-center">
      <div
        className="bg-white border-2 border-black rounded-2xl w-96 p-6"
        style={{ boxShadow: "10px 10px 0px hsl(0, 0%, 7%)" }}
      >
        <img
          src="/images/illustration-article.svg"
          alt="blog card"
          className="rounded-xl w-full mb-6"
        />
        <p className="bg-yellow-400 text-black text-sm font-medium p-2 w-fit rounded-md">
          Learning
        </p>
        <p className="mt-3">Published 20 Feb 2024</p>
        <p className="font-bold text-xl mt-5 mb-5 hover:text-yellow-400">
          HTML & CSS foundations
        </p>
        <p className="text-slate-600">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex mt-5">
          <img
            src="/images/image-avatar.webp"
            alt="avatar"
            className="rounded-full size-14"
          />
          <p className="font-bold p-4">Sai Pranith</p>
        </div>
      </div>
    </div>
  );
}
