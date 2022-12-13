import React from "react";
import profilePicture from "../../../static/assets/images/bio/me.jpg"

export default function() {
  return (
    <div className="content-page-wrapper">
      <div className="left-column" 
      style={{
        background: "url(" + profilePicture + ")",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      />
      <div className="right-column">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, corporis dolorum quas dignissimos id quia cum, suscipit saepe et repellendus distinctio quos placeat veritatis laudantium, magnam dolorem ea porro ducimus!
        Quis esse explicabo vitae sed molestias repellat aspernatur, ullam maiores quia molestiae. Nostrum, voluptas quos? Voluptatem mollitia inventore maxime, odit tempore assumenda? Incidunt minima dolor nostrum laborum harum, veniam molestiae.
        In praesentium odio aut illum blanditiis odit assumenda culpa debitis fuga maxime? Totam voluptatum tempora vero voluptatibus adipisci quidem nam error quisquam, numquam non nulla. Totam voluptatem in quidem quis!
      </div>
    </div>
  );
}
