export const postDataValidation = values => {
  const errors = {};
  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(values.image);

  if (!values.title.trim() || values.title.length < 10) {
    errors.title = "Post title must be between 10 and 30 characters!";
  }
  if (!values.description.trim() || values.title.length < 10) {
    errors.description = "Post description must be between 10 and 150 characters!";
  }
  if (!values.image.trim() || !validUrl) {
    errors.image = "Image URL is required";
  }
  if (!values.creator.trim()) {
    errors.creator = "Author's name is required";
  }

  if (!values.email.trim()) {
    errors.email = "Author's email is required!";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  return errors;
};
