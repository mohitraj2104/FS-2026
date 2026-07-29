import 'react'
import Navigation from '../component/nav/Navigation'
import Card from '../component/card/Card'
import styles from './Home.module.css'

export default function Home() {
  // Sample data for the car component
  const sampleData = [
    {name: "John Doe", email: "john.doe@example.com", review: "Great product!", rating: 5},
    {name: "Jane Smith", email: "jane.smith@example.com", review: "Excellent service!", rating: 4},
    {name: "Alice Johnson", email: "alice.johnson@example.com", review: "Very satisfied!", rating: 5},
    {name: "Bob Brown", email: "bob.brown@example.com", review: "Good value for money!", rating: 4},
    {name: "Charlie Davis", email: "charlie.davis@example.com", review: "Highly recommended!", rating: 5}
  ];

  return (
    <div>
      <Navigation />
      <h1 className={styles.welcome}>Welcome to My App</h1>
      <div className={styles.customers}>
      
      {sampleData.map((data, index) => (
        <Card key={index} data={data} />
      ))}</div>
    </div>
  )
}