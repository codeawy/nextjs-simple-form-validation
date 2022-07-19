import { txtSlicer } from "utils/func";

const Post = ({ title, description, image, creator, email }) => {
  return (
    <div className="border-2 border-gray-700 rounded-lg flex flex-col justify-content h-fit overflow-hidden">
      <div className="post-header">
        <img src={image} alt="img" className="w-full h-52" />
      </div>
      <div className="post-footer p-2 text-sm mt-3">
        <h3>
          <span className="font-bold mr-1">Title: </span>
          {txtSlicer(title, 15)}
        </h3>
        <p>
          <span className="font-bold mr-1">Description:</span>
          {txtSlicer(description, 15)}
        </p>
        <h3>
          <span className="font-bold mr-1">Created By:</span>
          {txtSlicer(creator, 15)}
        </h3>
        <h3>
          <span className="font-bold mr-1">Email:</span>
          {txtSlicer(email, 15)}
        </h3>
      </div>
    </div>
  );
};

export default Post;
