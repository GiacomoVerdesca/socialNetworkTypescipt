import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import "./PostComponent.css";
import { CallApi } from "../../service/callApi";
import { Post, User } from "../../interface/interface";

export const PostComponent = () => {
  let service = CallApi.getInstance();
  const [post, setPost] = useState([]);

  const allUsersSelector = (state: any) => state.allUsersReducer;
  const allUsers: any = useSelector(allUsersSelector);

  let allId: String = allUsers['users'].map((item: User) => { return item.id });

  //stato globale user

  useEffect(() => {
    let newData: any = [];
    for (let i = 1; i <= allId.length; i++) {
      service.getPostsSingleUser(i).then((response: any) => response.json()).then((data: any) => {
        for (let i = 0; i < data.length; i++) {
          newData = [...newData,data[i]]
        }
        setPost(newData);
      });
    }
  }, []);
  console.log('datachiamatastato', post);

  /*  const showComment=(event)=>{
    event.preventDefault();
    return console.log("commet")
  } */

  //post && console.log("pos2", post[0]);
  //console.log(prova)

  return (
    <div className="mt-5 mb-5">
      {post &&
        post.map((item: Post,index: number) => {
          return (
            <div key={index} className=" container mt-3 ">
              <div className=" row justify-content-md-center  ">
                <div className="col-12 col-xl-5 post">
                  <img src={item.image} className=" pt-2 immagine"></img>
                  <figcaption className=" pt-1 description ">
                    {item.description} Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla vulputate sem tortor, id varius ante
                    porttitor quis. Integer mollis eros ac dolor viverra porta.
                    Nulla eu malesuada sapien. Vestibulum eget est quis metus
                    luctus dignissim sit amet vitae eros.
                  </figcaption>
                  {/* <div className="d-flex pl-2 justify-content-md-center mb-2">
                    <i className="fa fa-heart like ">{item.like}</i>
                    {item.comment && (
                      <i className="fa fa-comment pl-2 comment">
                        {item.comment.lenght}
                      </i>
                    )}
                  </div> */}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};