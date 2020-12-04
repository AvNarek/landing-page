import { useEffect, useRef } from 'react';

import network from '../../assets/images/network.jpg';
import netflix from '../../assets/images/netflix.png';
import amazon from '../../assets/images/amazon.png';
import discord from '../../assets/images/discord.png';
import reddit from '../../assets/images/reddit.png';
import spotify from '../../assets/images/spotify.png';
import { ReactComponent as Log } from '../../assets/icons/network.svg';

import './Network.css';

const Network = () => {
  const divRef = useRef(null);
  const svgRef = useRef(null);
  let circleCount = 90;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    if (!divRef || !divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    if (rect.top < 260 && rect.top > -200) {
      for (let item of svgRef.current.children) {
        if (+item.id === circleCount) {
          item.classList.add('active-circle');
        }
      }
      circleCount = circleCount < 0 ? 90 : circleCount - 1;
    } else if (rect.top < -195 && rect.top > -700) {
      for (let item of svgRef.current.children) {
        if (+item.id === circleCount) {
          item.classList.remove('active-circle');
        }
      }
      circleCount = circleCount > 90 ? 0 : circleCount + 1;
    }
  }

  return (
    <>
      <div className="network" ref={divRef}>
        <h2 className="network__title">Huge Global Network of Fast VPN</h2>
        <p className="network__text">
          See LaslesVPN everywhere to make it easier for you when you move
          locations.
        </p>
        <div className="network__img">
          <img src={network} alt="network" />
          <Log ref={svgRef} />
        </div>
      </div>
      <div className="sponsored">
        <img src={netflix} alt="netflix" />
        <img src={reddit} alt="reddit" />
        <img src={amazon} alt="amazon" />
        <img src={discord} alt="discord" />
        <img src={spotify} alt="spotify" />
      </div>
    </>
  );
};

export default Network;
