export default function WrongAnswer(props) {
  return (
    <>
      {" "}
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Oh, Sorry Wrong Answer</h4>
        <p>Your answer is wrong. Aww yeah, you successfully read this</p>
        <hr />
        <p className="mb-0">
          The Bible verse is .... where you can find hinst about this, the text
          is: "asdasdasd"
        </p>
      </div>
    </>
  );
}
