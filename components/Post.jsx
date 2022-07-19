import Image from "next/image";

const Post = ({ title, description, image, creator, email }) => {
  return (
    <div className="border-2 border-gray-700 rounded-lg flex flex-col justify-content h-fit">
      <div className="post-header">
        <Image src={image} alt="img" className="object-cover" />
      </div>
      <div className="post-footer p-2 text-sm">
        <h3>
          <span className="font-bold mr-1">Title: </span>
          {title}
        </h3>
        <p>
          <span className="font-bold mr-1">Description:</span>
          {description}
        </p>
        <h3>
          <span className="font-bold mr-1">Created By:</span>
          {creator}
        </h3>
        <h3>
          <span className="font-bold mr-1">Email:</span>
          {email}
        </h3>
      </div>
    </div>
  );
};

export default Post;
