import { Link } from "react-router-dom";
interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-black">
        <div>
          <Avatar name={authorName} />
          <span className="pl-2">{authorName}</span>
          <span className="text-gray-500"> {publishedDate}</span>
        </div>
        <div className="text-3xl mt-2 font-bold">{title}</div>
        <div>{content.slice(0, 100) + "..."}</div>
        <div className="my-6">{`${Math.ceil(
          content.length / 100
        )} minutes`}</div>
      </div>
    </Link>
  );
};

export function Avatar({ name }: { name: string }) {
  return (
    <>
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full ">
        <span className="font-medium text-gray-600 ">{name[0]} </span>
      </div>
    </>
  );
}
