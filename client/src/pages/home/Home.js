import "./home.scss"
import Dropdown, { SpecialDropdown } from "../../components/dropdown/Dropdown";

function Home() {
  const data = [
    { "index": 0, "question": 'All users data.', "endpoint": 'usersDetails'},
    { "index": 1, "question": 'Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.', "endpoint": 'lowerIncomeBmwMercedes'},
    { "index": 2, "question": 'Male Users which have phone price greater than 10,000.', "endpoint": 'phonePriceGreater'},
    { "index": 3, "question": 'Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.', "endpoint": 'lastNameIncludesM'},
    { "index": 4, "question": 'Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.', "endpoint": 'notIncludeDigits'},
  ]

  const specialData = { "index": 5, "question": 'Show the data of top 10 cities which have the highest number of users and their average income.', "endpoint": 'topTenCities'}

  return (
    <div className="home">
        <div className="home__accordion">
          {
            data.map((obj)=>(
              <Dropdown key={obj.index} obj={obj}/>
            ))
          }
          <SpecialDropdown obj={specialData}/>
        </div>
    </div>
  )
}

export default Home