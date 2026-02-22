import BlogList from "@/components/blog-list";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-2 px-4 md:px-16 lg:px-16 pb-12">
      <div className="flex flex-col items-center md:items-start lg:items-start justify-center h-80">
        <p className="px-4 py-2 mb-8 text-sm border-2 rounded-none border-fd-secondary">
          Welcome to my writing space!
        </p>
        <pre className="font-mono text-[0.35rem] md:text-xs lg:text-sm whitespace-pre overflow-x-auto">
          {`████████╗██╗  ██╗ ██████╗ ██╗   ██╗ ██████╗ ██╗  ██╗████████╗███████╗
╚══██╔══╝██║  ██║██╔═══██╗██║   ██║██╔════╝ ██║  ██║╚══██╔══╝██╔════╝
   ██║   ███████║██║   ██║██║   ██║██║  ███╗███████║   ██║   ███████╗
   ██║   ██╔══██║██║   ██║██║   ██║██║   ██║██╔══██║   ██║   ╚════██║
   ██║   ██║  ██║╚██████╔╝╚██████╔╝╚██████╔╝██║  ██║   ██║   ███████║
   ╚═╝   ╚═╝  ╚═╝ ╚═════╝  ╚═════╝  ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝`}
        </pre>
      </div>
      <BlogList />
    </div>
  );
}
