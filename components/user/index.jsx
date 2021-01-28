import styles from './user.module.scss'
function User(props) {
  return (
    <div className={styles.user}>
      <div className={styles.icon}>
        <img src="/images/chevron-down-outline.svg" alt="" />
      </div>
      <div className={styles.name}>Kelvin Bawa</div>
      <div className={styles.averta}>
        <img src="https://images.unsplash.com/photo-1514794749374-fb67509dbb7f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" />
      </div>

    </div>
  );
}

export default User;