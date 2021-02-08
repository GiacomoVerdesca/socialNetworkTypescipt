import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import './UserComponent.css';
import { UserPostComponent } from '../userPostComponent/UserPostComponent';
import { CallApi } from "../../../service/callApi";
import { Post, RootObjectUser, User } from '../../../interface/interface';


export const UserComponent = () => {
    let service =  CallApi.getInstance();
    const [npost,setNPost] = useState();
    const userSelector =(state:any) => state.singleUserReducer
    const user :RootObjectUser= useSelector(userSelector);
    let idUser = user['user'].id;

  useEffect(() => {
    service.getPostsSingleUser(idUser).then((response:any)=>response.json()).then((data:any)=> setNPost(data.length));
  }, []);

    return (
        <div>
            {user &&
                <div className='container'>
                    <div className='row' style={{ marginTop: '50px' }}>
                        <div className='col-md-4' style={{ marginTop: '10px' }}>
                            {user['user'].avatar ? <img style={{ marginLeft: '50px', borderRadius: '100px' }} src={user['user'].avatar} height='150' width='150' /> :
                                <img style={{ marginLeft: '50px', borderRadius: '60px' }} src='https://www.mycommunitymonitor.com/download_allegato.php?tabella=5&campo=foto&email=I3QunplJQ9oYVssYF3HGT867PaU%2Bu8eQnKXPvJRA3dQ%3D' height='130' width='130' />
                            }

                        </div>
                        <div className='col-md-8'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <h2>{user['user'].username}</h2>
                                </div>
                                <div className='col-md-6'>
                                    <button className='btn btn-info'>Modifica profilo</button>
                                </div>
                            </div>
                            <div className='row' style={{ marginTop: '23px' }}>
                                <div className='col-md-6'>
                                    <span>{npost} Post</span>   <span style={{ marginLeft: '35px' }}>{user['user'].followers} Follower</span>  <span style={{ marginLeft: '35px' }}>{user['user'].followed} Seguiti</span>
                                </div>
                            </div>
                            <div className='row' style={{ marginTop: '15px' }}>
                                <div className='col-md-12'>
                                    <h4>{user['user'].name} {user['user'].surname}</h4>

                                </div>
                            </div>
                            <div className='row' style={{ marginTop: '10px' }}>
                                <div className='col-md-12'>
                                {user['user'].descriptionProfile}

                                            </div>
                            </div>

                        </div>
                    </div>
                    <UserPostComponent />
                </div>

            }
        </div >
    )
}