import 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
    let list=["Home","About","Services","Contact","Blog","FAQ","Support","Careers","Privacy Policy","Terms of Service"];
  return (
    <div>
      <ul className={styles.listItems}>
        {list.map((item, idx) => (
          <li className={styles.listItem} key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}