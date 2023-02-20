import React from "react";
import Button from "./Button";

function ButtonPage() {
  return (
    <div>
      <div className="row">
        <div className="variantContainer">
          <p>{"<Button />"}</p>
          <Button />
        </div>
        <div className="variantContainer">
          <p>&:hover, &:focus</p>
          <Button hover />
        </div>
      </div>

      <div className="row">
        <div className="variantContainer">
          <p>{"<Button variant=”outline” />"}</p>
          <Button variant="outline" />
        </div>
        <div className="variantContainer">
          <p>&:hover, &:focus</p>
          <Button variant="outline" hover />
        </div>
      </div>

      <div className="row">
        <div className="variantContainer">
          <p>{"<Button variant=”text” />"}</p>
          <Button variant="text" />
        </div>
        <div className="variantContainer">
          <p>&:hover, &:focus</p>
          <Button variant="text" hover />
        </div>
      </div>

      <div className="row">
        <div className="variantContainer">
          <p>{"<Button disableShadow />"}</p>
          <Button disableShadow />
        </div>
      </div>

      <div className="row">
        <div className="variantContainer">
          <p>{"<Button disabled />"}</p>
          <Button disabled />
        </div>
        <div className="variantContainer">
          <p>&:hover, &:focus</p>
          <Button disabled hover />
        </div>
      </div>

      <div className="row">
        <div className="variantContainerWide">
          <p>{"<Button startIcon=”local_grocery_store” />"}</p>
          <Button startIcon="local_grocery_store" />
        </div>
        <div className="variantContainerWide">
          <p>{"<Button startIcon=”local_grocery_store” />"}</p>
          <Button endIcon="local_grocery_store" />
        </div>
      </div>

      <div className="row">
        <div className="variantContainer">
          <p>{"<Button size=”sm” />"}</p>
          <Button size="sm" />
        </div>
        <div className="variantContainer">
          <p>{"<Button size=”md” />"}</p>
          <Button size="md" />
        </div>
        <div className="variantContainer">
          <p>{"<Button size=”lg” />"}</p>
          <Button size="lg" />
        </div>
      </div>

      <div className="row">
        <div className="variantContainer">
          <p>{"<Button color=”default” />"}</p>
          <Button color="default" />
        </div>
        <div className="variantContainer">
          <p>{"<Button color=”default” />"}</p>
          <Button color="primary" />
        </div>
        <div className="variantContainer">
          <p>{"<Button color=”default” />"}</p>
          <Button color="secondary" children="Secondary" />
        </div>
        <div className="variantContainer">
          <p>{"<Button color=”default” />"}</p>
          <Button color="danger" children="Danger" />
        </div>
      </div>

      <div className="row">
        <div className="variantContainer">
          <p>&:hover, &:focus</p>
          <Button color="default" hover />
        </div>
        <div className="variantContainer">
          <br />
          <Button color="primary" hover />
        </div>
        <div className="variantContainer">
          <br />
          <Button color="secondary" children="Secondary" hover />
        </div>
        <div className="variantContainer">
          <br />
          <Button color="danger" children="Danger" hover />
        </div>
      </div>
    </div>
  );
}

export default ButtonPage;
