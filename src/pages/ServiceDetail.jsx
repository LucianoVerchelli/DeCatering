import { useParams } from "react-router-dom";

function ServiceDetail() {

  const { slug } = useParams();

  return (

    <section
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        padding: "200px 10%"
      }}
    >

      <h1>
        {slug}
      </h1>

    </section>
  );
}

export default ServiceDetail;