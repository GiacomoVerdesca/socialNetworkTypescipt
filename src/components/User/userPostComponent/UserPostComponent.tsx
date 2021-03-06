import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import "./UserPostComponent.css";
import { CallApi } from "../../../service/callApi";
import {RootObjectUser,User,Post,RootObjectPost} from '../../../interface/interface'

export const UserPostComponent = () => {
  let service =  CallApi.getInstance();
  const [post, setPost] : any = useState();
  const [showModal, setShowModal]:any = useState(false);
  const [imgModal, setImgModal]:any = useState('');

 
  //stato globale user
  const userSelector  = (state: any) => state.singleUserReducer;
  const user : RootObjectUser= useSelector(userSelector);
  //console.log('il mio :',JSON.stringify(user));

  let idUser :String= user['user'].id;

  useEffect(() => {
    service.getPostsSingleUser(idUser).then((response:any) => response.json()).then((data: [Post]) => setPost(data));

  }, []);

  /*  const showComment=(event)=>{
    event.preventDefault();
    return console.log("commet")
  } */

  //post && console.log("pos2", post[0]);
  //console.log(prova)

  const functionShowModal = (event:any) => {
    event.preventDefault();
    showModal ? setShowModal(false) : setShowModal(true);
    setImgModal(event.target.src);
    console.log(event.target)
  }

  return (
    <div>
      {post &&

        <div className=" container mt-5 ">
          <div className="row">
            {post.map((item:Post) => {
              return (
                <div key={item.id} className="col-md-4">
                  <img src={item.image} className="immagine" onClick={functionShowModal} alt='image'></img>
                </div>
              )
            })}
          </div>
        </div>
      }

      {showModal &&

        <div className='container-fluid modalePost'>
          <div className='row principalRow'>
            <div className="col-md-6 colImg">
              <img src={imgModal} className="immagineModale"></img>
            </div>
            <div className="col-md-6">
              <div className='row rowUser'>
                <div className='col-md-10 colUser'>
                  <img style={{ borderRadius: '100px', marginRight: '15px' }} src={user['user'].avatar} height='50' width='50' />
                  <span className='username'>{user['user'].username}</span>
                </div>
                <div className='col-md-2'>
                  <i className="fa fa-2x fa-times float-right mb-3" onClick={functionShowModal}></i>
                </div>
              </div>
              <div className='row'>
                <div className='row'>
                  <div className='col-md-12 colComment'>
                    <img style={{ borderRadius: '100px', marginRight: '15px' }} src={user['user'].avatar} height='50' width='50' />
                    <span className='username'>{user['user'].username}</span>
                    {/* <span className='username'>{post}</span> */}
                    descrizione post
                </div>
                </div>
                <div className='offset-md-1 col-md-11'>
                  <small>
                    data creazione post
                    </small>
                </div>

              </div>
            </div>
          </div>
        </div>
      }
    </div >


  );
};