import { useUser } from "../context/UserContext";

function useUserProfile() {
  const { userName, setUserName, avatar, setAvatar } = useUser();


    function updateName(newName) {
    setUserName(newName);
    }

    function updateAvatar(newAvatar) {
    setAvatar(newAvatar);
    }

    function removeAvatar() {
    setAvatar("");
    }
    return { userName, avatar, updateName, updateAvatar, removeAvatar };
}
export default useUserProfile;