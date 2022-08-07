import { useState } from "react";
import Head from "next/head";
import Alert from "components/Alert";
import Post from "components/Post";
import FormInput from "components/FormInput";
import { formInputs } from "utils/formInputs";
import { postDataValidation } from "validation/postValidation";
import FormInputErrorMsg from "components/FormInputErrorMsg";
import FormSubmitBtn from "components/FormSubmitBtn";

export default function Home() {
  // ** States
  const [postList, setPostList] = useState([]);
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: "",
    creator: "",
    email: "",
  });
  const [errors, setErrors] = useState({ ...post });
  const [isError, setIsError] = useState(false);

  //** Renders
  const renderPosts = () => {
    return (
      <>
        {postList.map((post, idx) => (
          <Post key={idx} post={post} postList={postList} setPostList={setPostList} />
        ))}
      </>
    );
  };

  const IS_POSTS_LENGTH = !postList.length ? (
    <Alert
      type="info"
      msg="Change a few things up and try
            submitting again."
    />
  ) : (
    <div className="w-full lg:w-4/6 mt-20 lg:mt-0 grid gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {renderPosts()}
    </div>
  );

  // ** Handlers
  const changeHandler = e => {
    const {
      target: { name, value },
    } = e;
    setPost({ ...post, [name]: value });
    setErrors({ ...errors, [name]: "" });
    if (!Object.keys(postDataValidation(post)).length) {
      setIsError(false);
    }
  };

  const submitHandler = e => {
    e.preventDefault();

    setErrors(postDataValidation(post));
    if (Object.keys(postDataValidation(post)).length) {
      setIsError(true);
      return;
    }
    setPostList([...postList, { ...post, id: postList.length + 1 }]);

    setPost({
      title: "",
      description: "",
      image: "",
      creator: "",
      email: "",
    });
    setIsError(false);
  };

  return (
    <div>
      <Head>
        <title>Simple Form Validation</title>
        <meta name="description" content="Simple Form Validation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1 className="my-10 lg:my-20 text-center text-3xl">Simple Form Validation</h1>
        <div className="flex flex-col-reverse  lg:flex-row justify-between">
          {IS_POSTS_LENGTH}
          <form
            className="ml-0 lg:ml-5 mt-10 lg:mt-0 w-full lg:w-2/6"
            onSubmit={submitHandler}
            autoComplete="off"
          >
            {formInputs.map(({ name, label, type }, idx) => (
              <div key={idx}>
                <FormInput
                  id={name}
                  label={label}
                  type={type}
                  name={name}
                  value={post[name]}
                  onChange={changeHandler}
                  errors={errors}
                />
                <FormInputErrorMsg errors={errors} name={name} />
              </div>
            ))}
            <FormSubmitBtn text="Submit" isError={isError} />
          </form>
        </div>
      </main>
    </div>
  );
}
