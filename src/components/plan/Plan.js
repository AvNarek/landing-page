import { useState } from 'react';
import box from '../../assets/images/box.jpg';

import './Plan.css';

const PLANS = [
  {
    id: 1,
    title: 'Free Plan',
    items: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'No Traffic Logs',
      'Works on All Devices',
    ],
    price: 'Free',
  },
  {
    id: 2,
    title: 'Standard Plan',
    items: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'Yes Traffic Logs',
      'Works on All Devices',
      'Connect Anyware',
    ],
    price: '$9 / mo',
  },
  {
    id: 3,
    title: 'Premium Plan',
    items: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'Yes Traffic Logs',
      'Works on All Devices',
      'Connect Anyware',
      'Get New Feature',
    ],
    price: '$12 / mo',
  },
];

const Plan = () => {
  const [activePlan, setActivePlan] = useState(3);

  return (
    <div className="plan" id="pricing">
      <h2 className="plan__title">Choose Your Plan</h2>
      <p className="plan__text">
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </p>
      <div className="plan__content">
        {PLANS.map(({ id, title, items, price }) => {
          return (
            <div
              className={`plan__item ${
                id === activePlan ? 'plan__item-active' : ''
              }`}
              onClick={() => setActivePlan(id)}
              key={id}
            >
              <img src={box} alt="box" className="plane__item-icon" />
              <h3 className="plan__item-title">{title}</h3>
              <ul className="plan__list">
                {items.map((item) => (
                  <li key={item} className="plan__list-item">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="plan__type">
                <p className="plan__price">
                  <strong>{price}</strong>
                </p>
                <button className="btn btn__plan">Select</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plan;
