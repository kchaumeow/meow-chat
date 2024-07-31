import styles from "./ChatList.module.css";

export const ChatList = () => {
  return <div className={ styles.chatList }>
    <div className={ styles.search }>
        <div className={ styles.searchBar }>
            <img src="search.png" width={25} height={25} />
            <input type="text" placeholder="Search"/>
        </div>
        <img src="plus.png" width={25} height={25}/>
    </div>
  </div>
}
