import { useEffect, useRef, useState } from 'react';

import starIcon from '../../assets/icons/star.svg';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrowRight.svg';

import Button from '../UI/Button/Button';

import './Testimonials.css';

const Testimonials = () => {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [flag, setFlag] = useState(0);
  const [pageItemCount, setPageItemCount] = useState(3);
  const divRef = useRef(null);

  useEffect(() => {
    const deviceWidth = window.screen.width;

    deviceWidth < 900 && deviceWidth > 776
      ? setPageItemCount(2)
      : deviceWidth < 776
      ? setPageItemCount(1)
      : setPageItemCount(3);
  }, []);

  useEffect(() => {
    divRef.current.style.transform = `translateX(calc((100% / ${pageItemCount}) * ${flag}))`;
  }, [flag, pageItemCount]);

  useEffect(() => {
    const fetchData = async () => {
      const results = (
        await fetch('https://jsonplaceholder.typicode.com/users')
      ).json();
      const data = await results;
      setUsers(data);

      const commentResults = (
        await fetch('https://jsonplaceholder.typicode.com/comments')
      ).json();
      const comm = await commentResults;
      setComments(comm);
    };
    fetchData();
  }, []);

  function createButtons() {
    const buttons = [];

    for (let i = 1; i <= Math.ceil(users.length / pageItemCount); i++) {
      buttons.push(
        <span
          className={`card__item ${i === 1 ? 'card__item-open' : ''}`}
          key={i}
          id={i}
        />
      );
    }
    return buttons;
  }

  return (
    <div className="testimonials" id="testimonials">
      <h2 className="testimonials__title">
        Trusted by Thousands of Happy Customer
      </h2>
      <p className="testimonials__text">
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </p>
      <div ref={divRef} className="testimonials__card-group">
        {users.length === 0 && <h2>Loader...</h2>}
        {users &&
          users.map((user) => (
            <div key={user.id} className="testimonials__card">
              <div className="testimonials__card-inner">
                <div className="testimonials__card-info">
                  <div className="card__user-info">
                    <img
                      src={`https://randomuser.me/api/portraits/med/men/${
                        user.id + 1
                      }.jpg`}
                      alt="user1"
                    />
                    <div className="card__user-name">
                      <h3>{user.name}</h3>
                      <p>{user.address.street}</p>
                    </div>
                  </div>
                  <div className="card__user-star">
                    <strong>4.5</strong> <img src={starIcon} alt="starIcon" />
                  </div>
                </div>
                <p className="testimonials__card-text">
                  "{comments.length !== 0 && comments[user.id].body}"
                </p>
              </div>
            </div>
          ))}
      </div>

      <div className="testimonials__carousel">
        <div className="card__item-group">{createButtons()}</div>
        <div className="btn__carousel-group">
          <Button
            className="btn__carousel"
            onClick={() => {
              flag === 0
                ? setFlag(-(users.length - pageItemCount))
                : setFlag(flag + 1);
            }}
          >
            <ArrowLeft />
          </Button>
          <Button
            className="btn__carousel"
            onClick={() => {
              flag === -(users.length - pageItemCount)
                ? setFlag(0)
                : setFlag(flag - 1);
            }}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
      <div className="subscribe">
        <div className="subscribe__title">
          <h2>Subscribe Now for Get Special Features!</h2>
          <p className="subscribe__text">
            Let's subscribe with us and find the fun.
          </p>
        </div>
        <Button>Subscribe Now</Button>
      </div>
    </div>
  );
};

export default Testimonials;
