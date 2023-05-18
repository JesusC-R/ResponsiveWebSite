import React from "react";
import classNames from "classnames";

import SubHeading from "../header/heading/SubHeading";
import Button from "../../common/Button";

function Book(props) {
  const classes = {
    book: classNames(props.bookClasses),
  };

  return (
    <section className={classes.book} id="book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <SubHeading
                text={"Start booking now"}
                textClasses={"heading-secondary"}
                textBoxClasses={"u-margin-bottom-medium"}
              />

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  id="name"
                  placeholder="Full Name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  {" "}
                  Full Name
                </label>
              </div>

              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  id="email"
                  placeholder="Email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email
                </label>
              </div>

              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small"
                    name="size"
                  />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Small tour group
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="large"
                    name="size"
                  />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Large tour group
                  </label>
                </div>
              </div>

              <div className="form__group">
                <Button buttonClasses={"btn btn--green"} text={"Next Step"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Book;
