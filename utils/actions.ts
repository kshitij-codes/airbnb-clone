"use server";

const createProfileAction = async (prevState: any, formData: FormData) => {
  const firstName = formData.get("firstName") as string;
  console.log(firstName);
  return {
    message: "Profile created",
  };
};
