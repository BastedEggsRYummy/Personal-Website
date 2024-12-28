function Scalar({ scale = 1, children }) {
  return (
    <div
      id="scalable-container"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center',
      }}
    >
      {children}
    </div>
  );
}

export default Scalar;