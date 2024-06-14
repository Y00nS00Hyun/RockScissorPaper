// children: 바뀌지 않는 button 내용으로 사용됨, onclick으로는 안씀

const style = {
  padding: "14px 27px",
  border: "solid 1px #7090ff",
  outline: "none",
  color: "#7090ff",
  cursor: "pointer",
  backgroundColor: "rgba(0, 89, 255, 0.2)",
  borderRadius: "30px",
  fontSize: "17px",
};

function Button({ children, onClick }) {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
