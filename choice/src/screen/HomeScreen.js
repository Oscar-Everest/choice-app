import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listContents } from '../actions/contentActions';





 function HomeScreen(props) {

   const contentList = useSelector(state => state.contentList);
   const { contents, loading, error} = contentList;
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(listContents());

       return () => {
           //
       }
   }, [])

    const openMenu = () =>{
        document.querySelector(".sidebar").classList.add("open")
      }
     
      const closeMenu = () =>{
       document.querySelector(".sidebar").classList.remove("open")
     }
     

    const openModal = () =>{
        document.querySelector(".comment").classList.add("open")
    }
    const closeModal = () =>{
        document.querySelector(".comment").classList.remove("open")
    }


    return ( 
       
        <div className="grid-container">
        <header className="header">
            <div className="brand"> 
                <button className="aside-bar" onClick={openMenu}>
                    &#9776;
                </button>
                
           <Link to="/">choice</Link>
        </div>
        <div className="header-links">
        <a href="signin">Notification</a>
            <a className="loginMain" href="signin">Login</a>
        </div>
        </header>
        <aside className="sidebar">
        <div className="picture">
       <img className="profile-pix" src="image" alt="profile-pix"/>
                         
         </div>
        <button className="closeMenu" onClick={closeMenu}>x</button>
        <ul>
            <li><a href="index.html">Edit profile</a></li>
            <li><a href="index.html">Recommend</a></li>
            <li><a href="index.html">Logout</a></li>
        </ul>
        </aside >
        
        <main className="main">  
        <div className="profile-header">
        {
             loading ? <div>loading..</div> :
             error ? <div>{error}</div> :
     contents.map(content =>
               <table key={content.userHandle}>
                   <thead >
                   <div className="profile-img">
                       <div className="pix-name">
                      <div className="picture">
                          
                      <img className="profile-pix" src={content.profileImage} alt="profile-pix"/>
                     
                      </div>
                      <table>
                          <tbody>
                         
                              <tr className="profile-name">
                                  <td>
                                  <Link className="profile-name" to={"/content/" + content.userHandle}>
                                      {content.profileName}
                                      </Link>
                                  </td>
                              </tr>
                              <tr className="userHandle">
                             <td>
                             <Link className="userHandle" to={"/content/" + content.userHandle}>
                                 {content.userHandle}
                                 </Link>
                                 </td>
                              </tr>
                              <tr  >
                                  <td>
                                  
                                   <textarea  className="textArea" name="entered-text" placeholder="What's on your mind">
                                  
                                   {content.textArea}
                                 
                                   </textarea>
                                  </td>
                              </tr>
                              <tr className="main-and-image">
                                  <td>
                                  <Link className="main-and-image" to={"/content/" + content.userHandle}>
                                      <img className="mainImage"  src={content.mainImage} alt="mainPhoto"/>
                                     </Link>
                                  </td>
                                 
                              </tr>
                              <div>
                              <form className="image-footer">

                           <div className="comment-btn"  onClick={openModal}>
                           <i class="fa fa-reply" aria-hidden="true"></i>
                               </div>
                               <div className="comment">
                               <form>
                                   <textarea className="comment-modal" name="comment"></textarea>
                                   <div className="modal-button">
                                   <button className="modal-cancel"  onClick={closeModal}>cancel</button>
                                   <input className="modal-post" type="submit"  onClick={closeModal} value="post"/>
                                   </div>
                               </form>
                              
                               </div>
                           
                              <button><i class="fa fa-share" aria-hidden="true"></i></button>
                               <button><i class="fa fa-retweet" aria-hidden="true"></i></button>
                               <button><i class="fa fa-check-circle" aria-hidden="true"></i></button>
                               <button> <i class="fa fa-times" aria-hidden="true"></i></button>
                            
                              
                             
                                 
                         </form> 
                              </div>
                        
                          </tbody>
                      </table>
                      
                      </div>
                      <div>
                      <form className="option">
                            <select name="opinion">
                                <option>what's your opinion</option>
                                <option value="fair">fair</option>
                                <option value="good">good</option>
                                <option value="best">best</option>
                                <option value="unaccepted">unaccepted</option>
                                <option value="undecided">Undecided</option>
                            </select>
                           <br/>
                          
                            <i class="fa fa-telegram" aria-hidden="true"></i>
                           
                         </form>
                         
                      </div>
                
                  <div className="rating-approve">
                  <div className="person-name">
                <Link to={"/content/" + content.userHandle}>{content.brandName}</Link>
             </div>
            <div className="person-position">{content.position}</div>
            <div className="person-state">{content.level}</div>
            <div className="person-party">{content.platform}</div>
          <div className="person-state"> {content.fair} : {content.numFair}</div>
            <div className="person-aproval"><button><i class="fa fa-check-circle" aria-hidden="true"></i></button> {content.approve}</div>
            <div className="person-aproval"><button> <i class="fa fa-times" aria-hidden="true"></i></button> {content.reject}</div>
           
           
                  </div>
                   </div>
                   <br/><br/><br/><br/><br/>
                  
                   </thead>
               </table>
           )
       }
      
      </div>
          
        
               
           
            
        </main>
        <footer className="footer">
            All rights reserved
        </footer>
        
            </div>
        
    
      
    )
}


export default HomeScreen;




