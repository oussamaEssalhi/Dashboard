import "./add.css";

const Add = ({ handelclick, title ,columns }) => {
  return (
    <div className="add">
      <div className="module">
        <span
          className="close"
          onClick={() => {
            handelclick(false);
          }}
        >
          x
        </span>
        <h2>Add new {title}</h2>
        <form>
          {columns.filter((el) => {
            return (
              el.field !== "id" && el.field !== "img" && el.field !== "action"
            );
          }).map((itme) => {
            return (
              <div className="item" key={itme.field}>
                <label htmlFor="">{itme.headerName}</label>
                <input type={itme.type} placeholder={itme.field} />
              </div>
            );
          })}
        <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
