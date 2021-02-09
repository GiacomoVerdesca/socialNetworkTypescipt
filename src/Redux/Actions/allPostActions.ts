import { CallApi } from "../../service/callApi";
import { User } from "../../interface/interface";

let service = CallApi.getInstance();
let newData: any = [];

export const getAllPost = (allUsers: any) => {
  let allId: String = allUsers["users"].map((item: User) => {
    return item.id;
  });
  return (dispatch: Function) => {
    for (let i = 1; i <= allId.length; i++) {
      service
        .getPostsSingleUser(i)
        .then((response: any) => response.json())
        .then((data: any) => {
          for (let i = 0; i < data.length; i++) {
            newData = [...newData, data[i]];
          }
          dispatch(getAllPostSuccessed(newData));
          console.log("newData", newData);
        });
    }
  };
};

export const getAllPostSuccessed = (data: any) => {
  return {
    type: "getPosts",
    payload: data,
  };
};
