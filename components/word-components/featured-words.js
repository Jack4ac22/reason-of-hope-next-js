import Image from "next/image";
export default function FeaturedWords(props) {
  return (
    <>
      <div className="container">
        {props.words.map((word, index) => (
          // return list of cards with Image, title, and placeholder for part of the content text.
          <div className="card" key={`word${index}`}>
            <div className="card-image">
              <Image
                src={`/blog-images/${word.image}`}
                alt={word.title}
                style={{
                  Width: "70%",
                  margin: "auto",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  boxShadow: "1px 1px 1px #0101",
                  position: "relative",
                  display: "block",
                  marginLeft: "auto",
                }}
                loading="lazy"
                width={640}
                height={360}
              />
              {/* <img src={`/blog-images/${word.image}`} alt={word.title} /> */}
            </div>
            <div className="card-content">
              <h3>{word.title}</h3>
              <p>{word.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
