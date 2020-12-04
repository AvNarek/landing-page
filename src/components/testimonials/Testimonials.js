import { useEffect, useRef, useState } from 'react';

import starIcon from '../../assets/icons/star.svg';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrowRight.svg';

import Button from '../UI/Button/Button';

import './Testimonials.css';

const Testimonials = () => {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [leftCounter, setLeftCounter] = useState(1);
  const [itemCount, setItemCount] = useState(3);
  const [activePageCount, setActivePageCount] = useState();
  const [activePage, setActivePage] = useState(1);
  const [rightCounter, setRightCounter] = useState(0);
  const divRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (
      document.documentElement.clientWidth < 883 &&
      document.documentElement.clientWidth > 759
    ) {
      setItemCount(2);
    } else if (document.documentElement.clientWidth < 759) {
      setItemCount(1);
    } else {
      setItemCount(3);
    }
    setActivePageCount(Math.round(users.length / itemCount));

    const results = (
      await fetch('https://jsonplaceholder.typicode.com/users')
    ).json();
    const data = await results;
    setUsers(data);
    setRightCounter(data.length - itemCount);

    const commentResults = (
      await fetch('https://jsonplaceholder.typicode.com/comments')
    ).json();
    const comm = await commentResults;
    setComments(comm);
  }, [itemCount, users.length]);

  function createButtons() {
    const buttons = [];

    for (let i = 1; i <= activePageCount; i++) {
      buttons.push(
        <span
          className={`card__item ${i === activePage ? 'card__item-open' : ''}`}
          key={i}
          id={i}
        />
      );
    }
    return buttons;
  }

  const leftHandler = () => {
    const items = divRef.current.childNodes;

    if (rightCounter === 0) {
      setRightCounter(users.length - itemCount);
    } else {
      setRightCounter(rightCounter - 1);
      setLeftCounter(rightCounter + 1);
    }
    items.forEach((item) => {
      item.style.transform = `translateX(-${100 * rightCounter}%)`;
    });
    if (rightCounter === users.length - itemCount) {
      setLeftCounter(0);
    }
    if (rightCounter % itemCount === 0) {
      activePage > 1
        ? setActivePage(activePage - 1)
        : setActivePage(activePageCount);
    }
  };

  const rightHandler = () => {
    const items = divRef.current.childNodes;

    if (leftCounter === users.length - itemCount) {
      setLeftCounter(0);
    } else {
      setLeftCounter(leftCounter + 1);
      setRightCounter(leftCounter - 1);
    }
    if (leftCounter === 0) {
      setRightCounter(users.length - itemCount);
    }

    items.forEach((item) => {
      item.style.transform = `translateX(-${100 * leftCounter}%)`;
    });
    if (leftCounter % itemCount === 0) {
      activePage >= activePageCount
        ? setActivePage(1)
        : setActivePage(activePage + 1);
    }
  };

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
          <Button className="btn__carousel" onClick={leftHandler}>
            <ArrowLeft />
          </Button>
          <Button className="btn__carousel" onClick={rightHandler}>
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
