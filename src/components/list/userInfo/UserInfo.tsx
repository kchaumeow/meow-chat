import styles from "./UserInfo.module.css";


export const UserInfo = () => {
  return <div className={ styles.userInfo }>
    <div className={ styles.user }>
        <img src="/user.png" width={50} height={50}/>
        <h2>Alyona Trofimova</h2>
    </div>
    <div className={ styles.icons }>
        <img src="/edit.png" width={25} height={25}/>
        <img src="/video.png" width={25} height={25}/>
        <img src="/more.png" width={25} height={25}/>
    </div>
  </div>;
}
