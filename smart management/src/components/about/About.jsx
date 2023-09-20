import { about as data } from "./data";
const About = () => {
  return (
    <div className="container">
      <h1 className=" text-center text-success display-4">About this app</h1>
      <ul className="list-group">
        {data.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
