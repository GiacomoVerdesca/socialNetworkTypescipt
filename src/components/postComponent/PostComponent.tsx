import React from "react";
import { useSelector } from 'react-redux';
import "./PostComponent.css";
import { Post } from "../../interface/interface";

export const PostComponent = () => {

  const allPostSelector = (state: any) => state.allPostReducer;
  const allPost = useSelector(allPostSelector);

  return (
    <div className="mt-5 mb-5">
      {allPost['posts'] &&
        allPost['posts'].map((item: any, index: number) => {
          return (
            <div key={index} className=" container mt-3 ">
              <div className=" row justify-content-md-center  ">
                <div className="col-12 col-xl-5 post" style={{ paddingTop: '15px' }}>
                  <div style={{ marginBottom: '15px' }}><img style={{ borderRadius: '100px' }} src={item.createdBy.avatar} height='50' width='50' /><span style={{ marginLeft: '15px', fontSize: '20px' }}>{item.createdBy.username}</span></div>
                  <img src={item.image} className=" immaginePost"></img>
                  <figcaption  className=" description ">
                    {item.description}
                  </figcaption>
                  <div className="d-flex pl-2 justify-content-md mb-2">
                    <i className="fa fa-heart like ">{item.like}</i>
                    {item.commentChild && (
                      <i className="fa fa-comment pl-2 comment">
                        {item.commentChild.length}
                      </i>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};