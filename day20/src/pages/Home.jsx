import 'react'
import Navigation from '../components/Navigation'
import styles from './Home.module.css'
import myContext from '../store/myContext'
import { useContext } from 'react'
export default function Home() {
  const {user} = useContext(myContext);
  return (
    <div className={styles.page}>
      <Navigation />

      <header className={styles.hero}>
        <div className={styles.heroContent}>
            <h1>Welcome {user?.fullName || 'Guest'} to Foodies</h1>
          <h1 className={styles.title}>Delicious food, delivered fast</h1>
          <p className={styles.subtitle}>
            Explore handpicked dishes from top restaurants near you. Fresh ingredients, bold flavors.
          </p>
          <div className={styles.searchBar}>
            <input placeholder="Search dishes, cuisines, restaurants..." />
            <button>Search</button>
          </div>
        </div>
      </header>

      <section className={styles.features}>
        <div className={styles.featureCard}>
          <span className={styles.featureEmoji} role="img" aria-label="fresh">🥗</span>
          <h3>Fresh Ingredients</h3>
          <p>Seasonal produce sourced daily for peak taste and nutrition.</p>
        </div>
        <div className={styles.featureCard}>
          <span className={styles.featureEmoji} role="img" aria-label="delivery">⚡</span>
          <h3>Lightning Fast</h3>
          <p>Hot and fresh at your door before you even set the table.</p>
        </div>
        <div className={styles.featureCard}>
          <span className={styles.featureEmoji} role="img" aria-label="chef">👨‍🍳</span>
          <h3>Top Chefs</h3>
          <p>Signature recipes crafted by culinary experts.</p>
        </div>
      </section>

      <section className={styles.menu}>
        <h2>Popular Dishes</h2>
        <div className={styles.menuGrid}>
          <div className={styles.menuCard}>
            <div className={styles.menuArt} aria-hidden>🍕</div>
            <div className={styles.menuInfo}>
              <h4>Classic Margherita</h4>
              <p>San Marzano, buffalo mozzarella, basil</p>
              <button>Add to cart</button>
            </div>
          </div>
          <div className={styles.menuCard}>
            <div className={styles.menuArt} aria-hidden>🍔</div>
            <div className={styles.menuInfo}>
              <h4>Smash Burger</h4>
              <p>Double patty, cheddar, secret sauce</p>
              <button>Add to cart</button>
            </div>
          </div>
          <div className={styles.menuCard}>
            <div className={styles.menuArt} aria-hidden>🍣</div>
            <div className={styles.menuInfo}>
              <h4>Salmon Nigiri</h4>
              <p>Fresh-cut Atlantic salmon over rice</p>
              <button>Add to cart</button>
            </div>
          </div>
          <div className={styles.menuCard}>
            <div className={styles.menuArt} aria-hidden>🌮</div>
            <div className={styles.menuInfo}>
              <h4>Street Tacos</h4>
              <p>Carnitas, cilantro, onion, lime</p>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Foodies. All rights reserved.
      </footer>
    </div>
  )
}