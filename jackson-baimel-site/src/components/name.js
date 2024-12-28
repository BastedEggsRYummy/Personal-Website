import './name.css';
import Scalar from './scaler';

function Name({ scale = 1 }) {
  return (
    <Scalar scale={scale}>
      <div id="name-component">
        <div id="j-letter">J</div>
        <div id="name-tagline-box">
          <div id="name">ackson Baimel</div>
          <div id="tagline">CS + IT Extraordinaire</div>
        </div>
      </div>
    </Scalar>
  );
}

export default Name;