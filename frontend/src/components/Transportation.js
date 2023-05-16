import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import car from '../assets/Images/car.png'
import '../assets/Styles/Transportation.css'
const Transportation = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/transportation-detail");
  }, [navigate]);

  return (
    <div className="transportation">
      <div className="transportation-child" />
      <img className="transportation-item" alt="" src="/group-205.svg" />
      <b className="transportation-services2">Transportation Services</b>
      <div className="you-can-book">
        You can book various cars, jeeps and busses for better and comfortable
        travel experience.
      </div>
      <div className="packages-list">
        <div className="packages-list-child" />
        <div className="packages-list-item" />
        <div className="packages-list-inner" />
        <div className="packages-list-child1" />
        <div className="packages-list-child2" />
        <div className="packages-list-child3" />
        <div className="packages-list-child4" />
        <div className="packages-list-child5" />
        <img className="polygon-icon" alt="" src="/polygon-1.svg" />
        <img className="packages-list-child6" alt="" src="/polygon-2.svg" />
        <div className="famous">Famous</div>
        <div className="latest">Latest</div>
        <div className="rating">Rating</div>
        <div className="all">All</div>
      </div>
      <div className="transportation-inner" />
      <img
        className="transportation-child1"
        alt=""
        src={car}
      />
      <div className="transportation-child2" />
      <div className="mahindra-scorpio-is1">
        Mahindra Scorpio is that SUV which is the most demanded and the most
        suitable option for travelling, especially on bumpy terrains of Nepal.
        This is the most preferred car for travelling in the interiors of Nepal.
      </div>
      <img className="icon" alt="" src="/1.svg" />
      <img className="icon1" alt="" src="/1.svg" />
      <div className="reviews2">17 Reviews</div>
      <b className="mahindra-jeep3">Mahindra Jeep</b>
      <b className="day1">$78 / Day</b>
      <div className="rectangle-parent3" onClick={onGroupContainerClick}>
        <div className="group-child13" />
        <b className="book">Book</b>
      </div>
      <img className="star-icon" alt="" src="/star-21.svg" />
      <img className="star-icon" alt="" src="/star-22.svg" />
      <img className="transportation-child4" alt="" src="/star-21.svg" />
      <img className="transportation-child4" alt="" src="/star-22.svg" />
      <img className="transportation-child6" alt="" src="/star-25.svg" />
      <img className="transportation-child6" alt="" src="/star-26.svg" />
      <img className="transportation-child8" alt="" src="/star-21.svg" />
      <img className="transportation-child8" alt="" src="/star-22.svg" />
      <img className="transportation-child10" alt="" src="/star-21.svg" />
      <img className="transportation-child10" alt="" src="/star-21.svg" />
      <div className="kathmandu">Kathmandu</div>
      <div className="days-ago">7 Days Ago</div>
      <img className="transportation-child12" alt="" src="/group-771.svg" />
      <img className="vector-icon4" alt="" src="/vector2.svg" />
    </div>
  );
};

export default Transportation;
