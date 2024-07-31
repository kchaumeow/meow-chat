import { ChatList } from "./chatList/ChatList";
import styles from "./List.module.css";
import { UserInfo } from "./userInfo/UserInfo";

export const List = () => {
  return <div className={ styles.list }>
    <UserInfo/>
    <ChatList/>
  </div>
}
