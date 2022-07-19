import { useState } from "react";
import Head from "next/head";
import Alert from "components/Alert";
import Post from "components/Post";
import FormInput from "components/FormInput";
import { formInputs } from "utils/formInputs";
import { postDataValidation } from "validation/postValidation";
import FormInputErrorMsg from "components/FormInputErrorMsg";

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
  const IS_POSTS_LENGTH = !postList.length ? (
    <Alert
      type="info"
      msg="Change a few things up and try
            submitting again."
    />
  ) : (
    <div className="w-4/6 grid gap-3 grid-cols-3">{renderPosts()}</div>
  );

  const renderPosts = () => {
    return (
      <>
        {postList.map((post, idx) => (
          <Post key={idx} {...post} />
        ))}
      </>
    );
  };

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

  return (
    <div>
      <Head>
        <title>Simple Form Validation</title>
        <meta name="description" content="Simple Form Validation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1 className="my-20 text-center text-3xl">Simple Form Validation</h1>
        <div className="flex justify-between">
          {IS_POSTS_LENGTH}
          <form className="ml-5 w-2/6" onSubmit={() => {}} autoComplete="off">
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
          </form>
        </div>
      </main>
    </div>
  );
}
