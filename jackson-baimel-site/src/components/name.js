import './name.css';

function Name({ scale = 1 }) {
  return (
    <div
      id="scalable-container"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center',
      }}
    >
      <div id="name-component">
        <div id="j-letter">J</div>
        <div id="name-tagline-box">
          <div id="name">ackson Baimel</div>
          <div id="tagline">CS + IT Extraordinaire</div>
        </div>
      </div>
    </div>
  );
}

export default Name;