// import { useContext, useState } from "react"
// import { AuthContext } from "../../Context/AuthContextProvider"
// import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";

// export const ProfileUser = ({profileUser})=>{
//     const {user} = useContext(AuthContext);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [updatedProfile, setUpdatedProfile] = useState({});

//     const openModal = () => {
//         setIsModalOpen(true);
//       };
    
//       const closeModal = () => {
//         setIsModalOpen(false);
//       };
//     return(
//         <div>
//             <div className="profile-main-con">
//             <div className="profile-pic-con">
//               <img
//                 src={profileUser?.profileAvatar}
//                 alt="profile pic"
//                 className="profilepic-profile"
//               />
//               <button>Change Avatar</button>
//             </div>
//             <div>
//               <div className="profile-info">
//                 <div className="profile-details-first">
//                   <span>
//                     {profileUser?.firstName + " " + profileUser?.lastName}
//                   </span>
//                   <span>@{profileUser?.username}</span>
//                 </div>
//                 {profileUser?.username === user?.username ? (
//                   <button onClick={openModal}>Edit Button</button>
//                 ) : (
//                   <button>UnFollow</button>
//                 )}
//               </div>
//               <p>{profileUser?.bio}</p>
//               <a
//                 href={profileUser?.website}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <LanguageRoundedIcon />
//                 {profileUser?.website}
//               </a>

//               <div className="profile-follow-details">
//                 <p>{profileUser?.following.length} Following</p>
//                 <p>{profileUser?.followers.length} Followers</p>
//               </div>
//             </div>
//           </div>

//           <Modal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         contentLabel="Edit Modal"
//         className="modal"
//         overlayClassName="modal-overlay"
//       >
//         <form onSubmit={saveProfile}>
//           <div className="modal-content">
//             <label className="modal-label">
//               Bio:
//               <input
//                 type="text"
//                 className="modal-input"
//                 value={updatedProfile?.bio}
//                 onChange={(e) => updateHandler(e)}
//                 name="bio"
//               />
//             </label>
//             <label className="modal-label">
//               Portfolio URL:
//               <input
//                 type="text"
//                 className="modal-input"
//                 value={updatedProfile?.website}
//                 onChange={(e) => updateHandler(e)}
//                 name="website"
//               />
//             </label>
//           </div>
//           <button type="submit" className="modal-button">
//             Save
//           </button>
//         </form>
//       </Modal>
//         </div>
//     )
// }