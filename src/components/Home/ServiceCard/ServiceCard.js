import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceCard.css';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceCard = ({ service }) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

    const history = useHistory()
    const handleOrder = (title) => {
        history.push(`/addOrder/${title}`);
    }

    return (
        <div className="cardShadow col-md-4 col-sm-12 col-xs-12">
            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            >
                <div className="d-flex flex-column align-items-center justify-content-center p-5">

                    <img onClick={() => handleOrder(service.title)} style={{ height: '74px', padding: '10px', cursor: 'pointer' }} src={`data:image/png;base64,${service.image.img}`} alt="" />

                    <h4 className="mb-3 mt-3 text-center" style={{ color: '#3A4256' }}>{service.title}</h4>
                    <p className="text-center text-secondary">{service.description}</p>
                </div>
            </animated.div>
        </div>

    );
};

export default ServiceCard;